import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout: layout,

  actions: {
    sendAction() {
      const action = this.get('action');
      if (action) {
        return action(...arguments);
      }
    }
  }
});
