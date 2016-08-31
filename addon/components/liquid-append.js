import Ember from 'ember';

export default Ember.Component.extend({
  willInsertElement() {
    const wormhole = this.get('wormhole');

    if (wormhole.willAppendNodes) {
      wormhole.willAppendNodes(this.element);
    }
  },

  didInsertElement() {
    const wormhole = this.get('wormhole');
    const nodes = this.get('wormhole.nodes');

    this.$().append(nodes);

    if (wormhole.didAppendNodes) {
      wormhole.didAppendNodes(this.element);
    }
  }
});
