import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showWormhole() {
      this.toggleProperty('showWormhole');
    }
  }
});
