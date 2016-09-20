import Ember from "ember";
import { Promise } from "liquid-fire";

// Explode is not, by itself, an animation. It exists to pull apart
// other elements so that each of the pieces can be targeted by
// animations.

export default function wormhole({ name, args, useViewportDimensions }) {
  if (this.newElement) {
    this.newElement.css({visibility: ''});
  }
  if (this.oldElement) {
    this.oldElement.css({visibility: 'hidden'});
  }
  return explodePiece(this, name, args);
}

function explodePiece(context, name, args) {
  var childContext = Ember.copy(context);
  var cleanupOld, cleanupNew;

  cleanupOld = _explodePart(context, 'oldElement', childContext, '.liquid-wormhole-element');
  cleanupNew = _explodePart(context, 'newElement', childContext, '.liquid-wormhole-element');

  return runAnimation(childContext, name, args).finally(() => {
    if (cleanupOld) { cleanupOld(); }
    if (cleanupNew) { cleanupNew(); }
  });
}

function _explodePart(context, field, childContext, selector) {
  var child, childOffset, width, height, newChild;
  var elt = context[field];

  childContext[field] = null;
  if (elt && selector) {
    child = elt.find(selector);

    if (child.length > 0) {
      childOffset = child.offset();
      width = child.outerWidth();
      height = child.outerHeight();
      newChild = child.clone();

      // Hide the original element
      child.css({visibility: 'hidden'});

      // If the original element's parent was hidden, hide our clone
      // too.
      if (elt.css('visibility') === 'hidden') {
        newChild.css({ visibility: 'hidden' });
      }
      newChild.appendTo(elt.parent());
      newChild.outerWidth(width);
      newChild.outerHeight(height);
      var newParentOffset = newChild.offsetParent().offset();
      newChild.css({
        position: 'absolute',
        top: childOffset.top - newParentOffset.top,
        left: childOffset.left - newParentOffset.left,
        margin: 0
      });

      // Pass the clone to the next animation
      childContext[field] = newChild;
      return function cleanup() {
        newChild.remove();
        child.css({visibility: ''});
      };
    }
  }
}

function animationFor(context, name, args) {
  var func;
  if (typeof name === 'function') {
    func = name;
  } else {
    func = context.lookup(name);
  }
  return function() {
    return Promise.resolve(func.apply(this, args));
  };
}

function runAnimation(context, name, args) {
  return new Promise((resolve, reject) => {
    animationFor(context, name, args).apply(context).then(resolve, reject);
  });
}
