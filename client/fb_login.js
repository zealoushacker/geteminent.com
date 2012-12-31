///////////////////////////////////////////////////////////////////////////////
// Login with facebook 

Meteor.autorun(function (handle) {
  var source = Session.get("friend.source");

  // if not logged in and facebook is indicated
  if (!Meteor.user() && source === "facebook") {
    // log in with facebook
    Meteor.loginWithFacebook({
      requestPermissions: ['publish_actions']
    }, function (err) {
      if (err) {
        Session.set('errorMessage', err.reason || 'Unknown error');
      }
    });
  }
});
