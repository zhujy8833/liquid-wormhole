import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('basics');
  this.route('examples');
  this.route('scenarios', function() {
    this.route('manual-target');
    this.route('nested-wormholes');
    this.route('component-in-wormhole');
    this.route('actions-in-wormhole');
  });
});

export default Router;
