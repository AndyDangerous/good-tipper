import Ember from 'ember';

export default Ember.Controller.extend({

  billAmount: 0,
  tipPercentage: 18,

  tipAsPercentage: function(){
    return this.get('tipPercentage') / 100;
  }.property('tipPercentage'),

  tipAmount: function(){
    return this.get('tipAsPercentage') * this.get('billAmount');
  }.property('tipAsPercentage', 'billAmount'),
 
  totalBill: function(){
               return parseInt(this.get('billAmount'), 10) + this.get('tipAmount');
             }.property('tipAmount', 'billAmount')

});
