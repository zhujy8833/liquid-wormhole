export default function() {
  this.transition(
    this.hasClass('red-box'),
    this.use('fade')
  );

  this.transition(
    this.hasClass('hello-world'),
    this.toValue(true),
    this.use('to-down', { duration: 400, easing: [200, 22] }),
    this.reverse('to-right', { duration: 400, easing: [200, 22] })
  );

  this.transition(
    this.hasClass('flyout'),
    this.toValue(true),
    this.use('to-left', { duration: 2000, easing: [200, 22] }),
    this.reverse('to-right', { duration: 2000, easing: [200, 22] })
  );

  this.transition(
    this.hasClass('modal-backdrop'),
    this.use('fade')
  );

  this.transition(
    this.hasClass('outer-wormhole'),
    this.use('to-down', { duration: 400, easing: [200, 22] })
  );

  this.transition(
    this.hasClass('middle-wormhole'),
    this.use('to-down', { duration: 400, easing: [200, 22] })
  );

  this.transition(
    this.hasClass('inner-wormhole'),
    this.use('to-down', { duration: 300, easing: [500, 22] })
  );

  this.transition(
    this.hasClass('blue-box'),
    this.use('to-down', { duration: 1500 })
  );
}
