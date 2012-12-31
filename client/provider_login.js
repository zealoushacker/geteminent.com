///////////////////////////////////////////////////////////////////////////////
// Provider login

Meteor.autorun(function (handle) {
  var source = Session.get("friend.source");

  // if logged in, stop doing everything else
  if (Meteor.user()) { return; }

  // if attempting to login with facebook
  if (source === "facebook") {
    Meteor.loginWithFacebook({
      requestPermissions: ['publish_actions']
    }, function (err) {
      if (err) {
        Session.set('errorMessage', err.reason || 'Unknown error');
      }
    });
  }
});