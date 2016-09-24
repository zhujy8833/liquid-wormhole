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

test('destination container is cleaned when empty', function(assert) {
  visit('/docs');
  click('#hello-world-button');
  click('#hello-world-button');

  andThen(() => {
    assert.equal(find('.default-liquid-destination .liquid-destination-stack').length, 0, 'it\'s empty');
  });
});

test('basic liquid-wormhole works correctly and can determine context', function(assert) {
  visit('/docs');
  noTransitionsYet();

  click('#hello-world-button');
  andThen(() => {
    assert.equal(find('.default-liquid-destination .liquid-wormhole-element').length, 1, 'it exists');
    ranTransition('wormhole');
  });

  click('#hello-world-button');
  andThen(() => {
    assert.equal(find('.default-liquid-destination .liquid-wormhole-element').length, 0, 'it closed');
    ranTransition('wormhole');
  });
});
