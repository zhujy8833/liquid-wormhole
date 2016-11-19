import { startApp, destroyApp } from '../helpers/app-lifecycle';

let app;

module('Acceptance: Scenarios', {
  setup: function() {
    app = startApp();
  },

  teardown: function() {
    destroyApp(app);
  }
});

test('components are not destroyed until animation has finished', function(assert) {
  visit('/scenarios/component-in-wormhole');

  andThen(() => {
    click('button:contains(Toggle Wormhole)');
    assert.equal(find('.liquid-wormhole-element').text().trim(), 'testing123', 'component markup still exists');
  });
});

test('templates still have action context once rendered', function(assert) {
  visit('/scenarios/actions-in-wormhole');

  andThen(() => {
    assert.equal(find('.default-liquid-destination .liquid-wormhole-element').length, 1, 'it has a wormhole');
  });

  click('button:contains(Toggle Wormhole)');

  andThen(() => {
    assert.equal(find('.default-liquid-destination .liquid-wormhole-element').length, 0, 'it closed the wormhole');
  });
});

test('nested wormholes work properly', function(assert) {
  visit('/scenarios/nested-wormholes');

  andThen(() => {
    const wormholes = $('.liquid-wormhole-element');

    const firstWormhole = wormholes.eq(0);
    const secondWormhole = wormholes.eq(1);
    const thirdWormhole = wormholes.eq(2);

    assert.ok(firstWormhole.hasClass('green-box'), 'First wormhole renders in correct order');
    assert.ok(secondWormhole.hasClass('blue-box'), 'Second wormhole renders in correct order');
    assert.ok(thirdWormhole.hasClass('red-box'), 'Third wormhole renders in correct order');
  });
});

test('destination container has correct class if wormholes are present', function(assert) {
  assert.ok(find('.default-liquid-destination.has-wormholes').length === 0, 'No wormholes class');

  visit('/scenarios/nested-wormholes');

  andThen(() => {
    assert.ok(find('.default-liquid-destination.has-wormholes').length > 0, 'Has wormholes class');
  });
});

test('other liquid fire functionality can exist in a wormhole in the default destination', function(assert) {
  visit('/scenarios/liquid-fire-in-wormhole');

  andThen(() => {
    assert.ok(find('#content-box'), 'the content box is on screen');
    assert.equal(find('#showing-other').css('visibility'), 'visible', 'the other is visible');
    assert.ok(!find('#not-showing-other').length, 'the not other is hidden');
    click('button:contains(Toggle Inner Content)');
  });

  andThen(() => {
    assert.equal(find('#not-showing-other').css('visibility'), 'visible', 'the not other is visible');
    assert.ok(!find('#showing-other').length, 'the other is hidden');
  });
});
