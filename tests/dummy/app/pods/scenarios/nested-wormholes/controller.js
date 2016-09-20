import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showInner() {
      this.toggleProperty('showingInner');
    }
  }
});
