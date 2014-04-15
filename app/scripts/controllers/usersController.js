FireEmberConnect.UsersController = Ember.ArrayController.extend({
  sortProperties: ['name'],
  sortAscending: true, // false = descending
  usersCount: function(){
    return this.get('model.length');
  }.property('@each'),

});


// App.UsersController=Em.ArrayController.extend({
//   actions:{
//     edit:function(ob){
//       this.transitionToRoute('user.edit',ob);
//     }
//   }
// });