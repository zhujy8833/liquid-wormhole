import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggleFlyout() {
      this.toggleProperty('showFlyout');
    }
  }
});
