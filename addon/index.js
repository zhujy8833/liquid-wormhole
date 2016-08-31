import Constraint from 'liquid-fire/constraint';

export function target(name) {
  return new Constraint('parentElementClass', `${name}`);
}

export function onOpenWormhole() {
  return new Constraint('newValue', ({ empty }) => !empty);
}

export function onCloseWormhole() {
  return new Constraint('newValue', ({ empty }) => empty);
}
