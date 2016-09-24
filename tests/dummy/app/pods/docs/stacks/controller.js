import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    showFirstStep() {
      this.toggleProperty('showFirstStep');
    },

    showSecondStep() {
      this.toggleProperty('showSecondStep');
    },

    closeModal() {
      this.toggleProperty('showFirstStep');
      this.toggleProperty('showSecondStep');
    },

    testing() {
      console.log('test');
    }
  }
});
