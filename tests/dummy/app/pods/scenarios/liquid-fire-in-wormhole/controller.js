import Ember from 'ember';

export default Ember.Controller.extend({
  showingOther: true,
  actions: {
    toggleContent() {
      this.toggleProperty('showingOther');
    }
  }
});
