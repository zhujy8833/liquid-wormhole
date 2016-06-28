/* global ranTransition, noTransitionsYet */
import { startApp, destroyApp } from '../helpers/app-lifecycle';
import { injectTransitionSpies } from '../helpers/integration';

let app;

module('Acceptance: Demos', {
  setup: function() {
    app = startApp();

    // Conceptually, integration tests shouldn't be digging around in
    // the container. But animations are slippery, and it's easier to
    // just spy on them to make sure they're being run than to try to
    // observe their behavior more directly.
    injectTransitionSpies(app);
  },

  teardown: function() {
    destroyApp(app);
  }
});

test('target container exists and is empty on load', function() {
  visit('/examples');

  andThen(() => {
    noTransitionsYet();
    equal(find('.liquid-target-container').length, 1, 'it exists');
    equal(find('.liquid-target-container > .liquid-target').length, 0, 'it\'s empty');
  });
});

test('target container is cleaned when empty', function() {
  visit('/examples');
  click('#flyout-button');
  click('#flyout-button');

  andThen(() => {
    equal(find('.liquid-target-container > .liquid-target').length, 0, 'it\'s empty');
  });
});

test('basic liquid-wormhole works correctly and can determine context', function() {
  visit('/examples');
  noTransitionsYet();

  click('#flyout-button');
  andThen(() => {
    equal(find('.liquid-target-container .flyout').length, 1, 'it exists');
    ranTransition('explode');
  });

  click('#flyout-button');
  andThen(() => {
    equal(find('.liquid-target-container .flyout').length, 0, 'it closed');
    ranTransition('explode');
  });
});
