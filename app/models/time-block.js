import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({
  title: DS.attr('string'),
  subtitle: DS.attr('string'),
  hour: DS.attr('number'),
  minute: DS.attr('number'),
  time: Ember.computed('hour', 'minute', function () {
    return moment().hour(this.get('hour')).minute(this.get('minute')).second(0).millisecond(0);
  }),
  times: DS.attr()
});
