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

test('nested tethers work properly', function() {
  visit('/scenarios/nested-wormholes');

  click('button');

  andThen(() => {
    const targets = $('.liquid-target-container').children();

    const outerWormhole = targets.eq(0);
    const middleWormhole = targets.eq(1);
    const innerWormhole = targets.eq(2);

    ok(outerWormhole.hasClass('outer-wormhole-liquid-target'), 'Outer wormhole renders in correct order');
    ok(middleWormhole.hasClass('middle-wormhole-liquid-target'), 'Middle wormhole renders in correct order');
    ok(innerWormhole.hasClass('inner-wormhole-liquid-target'), 'Inner wormhole renders in correct order');
  });
});
