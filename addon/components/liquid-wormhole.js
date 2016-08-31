import Ember from 'ember';

const { A, computed, inject, generateGuid } = Ember;

const { service } = inject;
const { reads } = computed;

export default Ember.Component.extend({
  classNames: ['liquid-wormhole-container'],

  liquidTarget: reads('to'),
  liquidTargetService: service('liquid-target'),

  stack: computed(() => generateGuid()),

  willInsertElement() {
    const nodes = this.$().children();
    this.set('nodes', nodes);

    this.get('liquidTargetService').appendWormhole(this, this.get('liquidTarget'));

    this._super.apply(this, arguments);
  },

  willDestroyElement() {
    this.get('liquidTargetService').removeWormhole(this, this.get('liquidTarget'));

    this._super.apply(this, arguments);
  }
});
