import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  tagName: 'span',

  didInsertElement() {
    this._super(...arguments);

    var ts = moment(this.get('time') + this.get('offset'));

    this.$().text(ts.format(this.get('format')));
  }
});
