import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleWormhole() {
      this.toggleProperty('hideWormhole');
    }
  }
});
