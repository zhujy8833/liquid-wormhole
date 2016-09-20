import Action from "liquid-fire/action";
import RunningTransition from "liquid-fire/running-transition";
import TransitionMap from "liquid-fire/transition-map";

const wormholeActionMap = new WeakMap();

export default TransitionMap.extend({
  transitionFor(conditions) {
    if (conditions.matchContext && conditions.matchContext.helperName === 'liquid-wormhole'
        || conditions.helperName === 'liquid-wormhole') {

      conditions.parentElement = conditions.parentElement.find('.liquid-wormhole-element');
      conditions.firstTime = 'no';

      const rule = this.constraintsFor(conditions).bestMatch(conditions);
      let action;

      if (rule) {
        if (wormholeActionMap.has(rule)) {
          action = wormholeActionMap.get(rule);
        } else {
          action = new Action('wormhole', [{
            name: rule.use.name,
            args: rule.use.args,
            useViewportDimensions: true
          }]);
          action.validateHandler(this);

          wormholeActionMap.set(rule, action);
        }
      } else {
        action = this.defaultAction();
      }

      return new RunningTransition(this, conditions.versions, action);
    } else {
      return this._super(conditions);
    }
  },
});
