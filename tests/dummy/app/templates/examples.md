# Examples

Here is a simple example of a flyout made using fixed positioning and wormhole
animations.

<div class="example-button-container">
  <button {{action "toggleFlyout"}} id="flyout-button" class="btn btn-primary btn-embossed">Open Flyout</button>
</div>

<div>
  {{#if showFlyout}}
    {{#liquid-wormhole}}
      <div class="modal-backdrop"></div>
      <div class="flyout">
        <h1>Hey there!</h1>
        <h2>This is a flyout!</h2>

        <p>
          It's been given a fixed position relative to the window, without any of
          the conceptual overhead that comes with tethering.
        </p>

        <div class="fixed-to-bottom">
          This div is easily fixed to the bottom of the screen, no need to worry about
          the target container messing with your positioning!

          <button {{action 'toggleFlyout'}} class="btn btn-primary btn-embossed btn-block">
            Close
          </button>
        </div>
      </div>
    {{/liquid-wormhole}}
  {{/if}}
</div>

```
<div class="example-button-container">
  <button {{action "toggleFlyout"}} class="btn btn-primary btn-embossed">Open Flyout</button>
</div>

{{#if showFlyout}}
  {{#liquid-wormhole to="flyout"}}
    <div class="modal-backdrop"></div>
    <div class="flyout">
      <h1>Hey there!</h1>
      <h2>This is a flyout!</h2>

      <p>
        It's been given a fixed position relative to the window, without any of
        the conceptual overhead that comes with tethering.
      </p>

      <div class="fixed-to-bottom">
        This div is easily fixed to the bottom of the screen, no need to worry about
        the target container messing with your positioning!

        <button {{action 'toggleFlyout'}} class="btn btn-primary btn-embossed btn-block">
          Close
        </button>
      </div>
    </div>
  {{/liquid-wormhole}}
{{/if}}
```

```
export default Ember.Controller.extend({
  actions: {
    toggleFlyout() {
      this.toggleProperty('showFlyout');
    }
  }
});
```

```
this.transition(
  target('flyout'),
  onOpenWormhole(),
  this.use('explode', {
    pick: '.flyout',
    use: ['to-left', options]
  }, {
    pick: '.modal-backdrop',
    use: 'fade'
  }),
  this.reverse('explode', {
    pick: '.flyout',
    use: ['to-right', options]
  }, {
    pick: '.modal-backdrop',
    use: 'fade'
  })
);
```
