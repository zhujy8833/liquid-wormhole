import Ember from 'ember';
import HashMap from 'perf-primitives/hash-map';
import layout from '../templates/components/liquid-target';

const { computed, inject, A } = Ember;
const { htmlSafe } = Ember.String;
const { service } = inject;

export default Ember.Component.extend({
  layout,
  classNames: ['liquid-target'],
  classNameBindings: ['contextClass'],

  name: 'default',
  liquidTargetService: service('liquidTarget'),

  init() {
    this._super(...arguments);

    this.stackMap = new HashMap();
    this.stackQueue = A();
    this.set('stacks', A());

    const name = this.get('name');

    this.get('liquidTargetService').registerTarget(name, this);
  },

  appendWormhole(wormhole) {
    const stackName = wormhole.get('stack');
    let stack = this.stackMap.get(stackName);

    if (stack === undefined) {
      const cssClass = A([
        wormhole.get('class'),
        wormhole.get('stack'),
        wormhole._containerClass
      ]).compact().join(' ');

      stack = A([{ stackName, class: cssClass, empty: true }]);

      this.stackMap.set(stackName, stack);

      //
      this.stackQueue.pushObject(stack);

      Ember.run.scheduleOnce('afterRender', this, this.flushStackQueue);
    }

    Ember.run.next(() => {
      stack.pushObject(wormhole);
    });
  },

  removeWormhole(wormhole) {
    const stackName = wormhole.get('stack');
    const stack = this.stackMap.get(stackName);

    Ember.run.next(() => {
      stack.removeObject(wormhole);
    });
  },

  flushStackQueue() {
    this.get('stacks').pushObjects(this.stackQueue);
    this.stackQueue.clear();
  },

  actions: {
    willTransition() {
      // Do nothing
    },

    afterChildInsertion() {
      // Do nothing
    },

    afterTransition([{ value }]) {
      if (value.empty) {
        if (value.hasAnimated) {
          const stacks = this.get('stacks')
          const stack = this.stackMap.get(value.stackName);

          stacks.removeObject(stack);
          this.stackMap.delete(value.stackName);
        } else {
          value.hasAnimated = true;
        }
      }
    }
  }
});
