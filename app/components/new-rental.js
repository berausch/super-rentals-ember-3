import Ember from 'ember';

export default Ember.Component.extend({
  addNewRental: false,
  actions: {
    rentalFormShow() {
      this.set('addNewRental', true);
    },

    save1() {
      var params = {
        owner: this.get('owner') ? this.get('owner') : "",
        city: this.get('city') ? this.get('city') : "",
        type: this.get('type') ? this.get('type') : "",
        bedrooms: this.get('bedrooms' ? this.get('bedrooms') : ""),
        latitude: this.get('latitude'),
        longitude: this.get('longitude'),
      };
      this.set('addNewRental', false);
      this.sendAction('save2', params);
    }
  }
});
