# The Basics

Liquid Wormhole renders it's content near the application root, giving you the
freedom to position it however you want without interfering with your
application layout. However, the component retains its normal context within
Ember, allowing it to communicate with surrounding components using attributes
and actions.

This allows you to embed your tethered objects anywhere in your code, meaning
they can appear where they belong logically in your templates. You don't have
to deal with any idiosyncratic services or APIs, and you don't have to worry
about the peculiarities of positioning elements with CSS - It Just Works.

## Parameters

Every Liquid Wormhole **requires** a `to` attribute.
This is the name of the target-outlet that the tether will be attached to. The
target is automatically instantiated and cleaned up as tethers are attached
and removed from it.

## What Are Targets?

Targets are the elements that `liquid-wormhole`s are attached to
when they are rendered. Liquid Wormhole manages the targets lifecycles, so if
you specify a target name it will be created, managed, and destroyed
automatically.

Each target acts as a stack, rendering only the most recent
`liquid-wormhole` that was sent to it. This is to provide context
to wormholes, so animations can change accordingly and you can animate between
different parts of a flow. Sometimes, a single target can be reused for many
different types of components - for instance, a generic 'popover' or 'tooltip'
target. In other cases when you need more complicated animations for a
specific flow it makes sense to push them onto a new target.

# Transitions

Liquid Wormhole introduces the `target` constraint for matching
targets by name and applying animations to them:

```
import { target } from 'liquid-wormhole';

export default function() {
  this.transition(
    target(targetName)
  );
}
```

It also adds the `onOpenWormhole` and `onCloseWormhole`
constraints. These are quick constraints that you can add to give context to
`use` and `reverse`. For instance, applying the
`onOpenWormhole` constraint will apply the `use` animation
to the tether as enters the dom, and the `reverse` animation to the
tether as it leaves the dom.

```
// app/transitions.js
export default function() {
  this.transition(
    target('my-target'),
    onOpenWormhole(),
    this.use('to-up'),
    this.reverse('to-down')
  );
}
```

There are times when you may want to have knowledge of the context of
your wormholes. For instance, if you have a multi-step modal dialogue you may
want to use different animations for the beginning of the dialogue, going to
the next step, going to the previous step, and ending the dialogue. You can
use the standard `toValue` and `fromValue` in these
cases. The value passed into these elements is the `liquid-wormhole`
component itself, so any values set on the wormhole will be comparable.

```
{{#liquid-wormhole to="my-target" step=1}}
  <!-- Wormhole body -->
{{/liquid-wormhole}}
```

```
// app/transitions.js
export default function() {
  this.transition(
    target('my-target'),
    this.toValue(({ step }) => step === 1),
    this.use('fade')
  );
}
```

# DOM Structure and Styles

Liquid Wormhole creates the following DOM structure:

```
<body class="ember-application">
  <div class="liquid-target-container">
    <div class="liquid-target">
      <!-- Wormhole body -->
    </div>
  </div>

  <div>
    <!-- Ember App body -->
  </div>
</body>
```

You can apply a class directly to the liquid-target that
contains your tethered element using the `targetClass` property.

# Ember Compatibility

Liquid Wormhole is tested on all versions of Ember >= 1.13. Long term support
will continue for 1.13 and up for as long Ember core support continues.
