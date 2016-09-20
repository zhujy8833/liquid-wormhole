import Ember from 'ember';
import HashMap from 'perf-primitives/hash-map';

const { getOwner } = Ember;

export default Ember.Service.extend({
  init() {
    this._super(...arguments);

    this.targets = new HashMap();
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
