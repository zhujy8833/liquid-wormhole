// app/transitions.js
export default function() {
  this.transition(
    target('my-target'),
    onOpenWormhole(),
    this.use('to-up'),
    this.reverse('to-down')
  );
}
