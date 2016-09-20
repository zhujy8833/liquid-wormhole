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

test('components are not destroyed until animation has finished', function() {
  visit('/scenarios/component-in-wormhole');

  andThen(() => {
    find('button:contains(Toggle)').click();
    equal(find('.velocity-animating').text().trim(), 'testing', 'component markup still exists');
  });
});

test('templates still have action context once rendered', function() {
  visit('/scenarios/actions-in-wormhole', function() {
    visit('/scenarios/component-in-wormhole');

    click('button:contains(Toggle)');

    andThen(() => {

    });
  });
});

test('nested wormholes work properly', function() {
  visit('/scenarios/nested-wormholes');

  click('button');

  andThen(() => {
    const wormholes = $('.liquid-wormhole-element');

    const firstWormhole = wormholes.eq(0);
    const secondWormhole = wormholes.eq(1);
    const thirdWormhole = wormholes.eq(2);

    ok(firstWormhole.hasClass('green-box'), 'First wormhole renders in correct order');
    ok(secondWormhole.hasClass('blue-box'), 'Second wormhole renders in correct order');
    ok(thirdWormhole.hasClass('red-box'), 'Third wormhole renders in correct order');
  });
});
