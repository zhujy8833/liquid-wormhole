import Ember from 'ember';

const { computed, A, generateGuid, getOwner } = Ember;
const { reads } = computed;

export default Ember.Service.extend({
  // targets: computed(() => Ember.A()),
  // queue: computed(() => Ember.A()),

  init() {
    this._super(...arguments);

    this.targets = Ember.Object.create();
  },

  appendWormhole(wormhole, targetName = 'default') {
    let target = this.targets.get(targetName);

    if (target === undefined) {
      if (targetName === 'default') {
        target = this.addDefaultTarget();
      } else {
        throw new Error('Liquid Wormhole target does not exist');
      }
    }

    target.appendWormhole(wormhole);
  },

  removeWormhole(wormhole, targetName = 'default') {
    const target = this.targets.get(targetName);

    if (target === undefined) {
      throw new Error('Liquid Wormhole target does not exist');
    }

    target.removeWormhole(wormhole);
  },

  registerTarget(targetName, wormholes) {
    this.targets.set(targetName, wormholes);
  },

  addDefaultTarget() {
    const instance = getOwner(this);
    const target = instance.lookup('component:liquid-target');
    target.set('classNames', ['liquid-target', 'default-liquid-target']);
    target.appendTo(instance.rootElement);

    return target;
  }
});
