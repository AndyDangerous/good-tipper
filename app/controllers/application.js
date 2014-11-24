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

  fifteenPercentTip: function () {
                       return parseInt(this.get('billAmount'), 10) * .1
                     }.property('billAmount'),
 
  isCheapskate: function(){
    parseInt(this.get('tipPercentage')) < 15 ? alert("Cheapskate!") : false
  }.observes('tipPercentage'),

  totalBill: function(){
               return parseInt(this.get('billAmount'), 10) + this.get('tipAmount');
             }.property('tipAmount', 'billAmount'),

  actions: {
             setTipPercentage: function (amount) {
                                 this.set('tipPercentage', amount);
                               }
           }
});
