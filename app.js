if (Meteor.isClient) {

  Meteor.Router.add({
    '/': 'homePage'
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
