if (Meteor.isClient) {
  Meteor.Router.add({
    '/': 'blogPage'
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
