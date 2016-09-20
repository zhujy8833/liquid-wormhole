import Ember from 'ember';
import HashMap from 'perf-primitives/hash-map';
import layout from '../templates/components/liquid-target';

const { inject, A } = Ember;
const { service } = inject;

export default Ember.Component.extend({
  layout,
  classNames: ['liquid-target'],
  classNameBindings: ['contextClass'],

  name: 'default',
  liquidTargetService: service('liquidTarget'),
  matchContext: {
    helperName: 'liquid-wormhole'
  },

  init() {
    this._super(...arguments);

    this.stackMap = new HashMap();
    this.set('stacks', A());

    this.wormholeQueue = A();

    const name = this.get('name');

    this.get('liquidTargetService').registerTarget(name, this);
  },

  appendWormhole(wormhole) {
    // The order that wormholes are rendered in may be different from the order
    // that they appear in templates, because child components get rendered before
    // their parents. This logic inserts parent components *before* their children
    // so the ordering is correct.
    var appendIndex = this.wormholeQueue.get('length') - 1;

    for (; appendIndex >= 0; appendIndex--) {
      const lastWormholeElement = this.wormholeQueue.objectAt(appendIndex).element;

      if (!wormhole.element.contains(lastWormholeElement)) {
        break; // break when we find the first wormhole that isn't a parent
      }
    }

    this.wormholeQueue.insertAt(appendIndex + 1, wormhole);

    Ember.run.scheduleOnce('afterRender', this, this.flushWormholeQueue);
  },

  removeWormhole(wormhole) {
    const stackName = wormhole.get('stack');
    const stack = this.stackMap.get(stackName);

    Ember.run.next(() => stack.removeObject(wormhole));
  },

  flushWormholeQueue() {
    this.wormholeQueue.forEach((wormhole) => {
      const stackName = wormhole.get('stack');
      const stack = this.stackMap.get(stackName) || this.createStack(wormhole);

      stack.pushObject(wormhole);
    });

    this.wormholeQueue.clear();
  },

  createStack(wormhole) {
    const stackName = wormhole.get('stack');

    const stack = A([ null ]);
    stack.set('name', stackName);

    this.stackMap.set(stackName, stack);
    this.stacks.pushObject(stack);

    return stack;
  },

  actions: {
    willTransition() {
      // Do nothing
    },

    afterChildInsertion() {
      // Do nothing
    },

    afterTransition([{ value, view }]) {
      view.element.style.transform = "";
      if (value === null) {
        const stacks = this.get('stacks');
        const stackName = view.get('parentView.stackName');
        const stack = this.stackMap.get(stackName);

        stacks.removeObject(stack);
        this.stackMap.delete(stackName);
      }
    }
  }
});
