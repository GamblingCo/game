import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.game.onCreated(function () {
  this.clock = new ReactiveVar(0);
  this.start = new ReactiveVar(0);
  
  this.autorun(() => {
    if (this.start.get() === 1) {
      setInterval(() => {
        this.clock.set(this.clock.get() + 1);
      }, 1000);
    }
  });
});

Template.game.helpers({
  clock() {
    return Template.instance().clock.get();
  },
  checkStart() {
    return Template.instance().start.get();
  },
});

Template.game.events({
  'click .start-button'(event, instance) {
    instance.start.set(1);
  },
});