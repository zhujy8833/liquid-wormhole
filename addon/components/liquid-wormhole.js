import Ember from 'ember';
import layout from '../templates/components/liquid-wormhole';

const { computed, inject, generateGuid } = Ember;

const { service } = inject;
const { reads } = computed;

export default Ember.Component.extend({
  layout,

  liquidTarget: reads('to'),
  liquidTargetService: service('liquid-target'),

  stack: computed(() => generateGuid()),

  init() {
    const wormholeClass = this.get('class');
    const wormholeId = this.get('id');

    this.set('wormholeClass', wormholeClass);
    this.set('wormholeId', wormholeId);

    this._super(...arguments);
  },

  willInsertElement() {
    const nodes = this.$().children();
    this.set('nodes', nodes.clone());
    nodes.remove();

    this.element.className = 'liquid-wormhole-container';
    this.element.id = '';

    this.get('liquidTargetService').appendWormhole(this, this.get('liquidTarget'));

    this._super.apply(this, arguments);
  },

  willDestroyElement() {
    this.get('liquidTargetService').removeWormhole(this, this.get('liquidTarget'));

    this._super.apply(this, arguments);
  }
});
