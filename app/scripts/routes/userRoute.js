FireEmberConnect.UserRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('user', params.user_id);
  }
});

FireEmberConnect.UserEditRoute=Em.Route.extend({
  afterModel:function(){
    // return this.modelFor('user');
    this.set('user', this.modelFor('user'));
  }
});