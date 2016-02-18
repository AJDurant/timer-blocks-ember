import Ember from 'ember';
import countdown from 'countdown';

export default Ember.Component.extend({
  tagName: 'span',

  didInsertElement() {
    this._super(...arguments);

    let padTwo = number => number <= 9 ? ("0"+number).slice(-2) : number;

    var end = this.get('time') + this.get('offset');
    var ts = countdown(ts => {
      this.$().text(padTwo(ts.hours) + ':' + padTwo(ts.minutes) + ':' + padTwo(ts.seconds));
    },
    end);
  }
});
