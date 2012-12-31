///////////////////////////////////////////////////////////////////////////////
// Facebook friend selector activation

Meteor.autorun(function (handle) {
  var source = Session.get("friend.source");

  // if not logged in, don't do anything else 
  if (!Meteor.user()) { return; }

  // show facebook friend selector 
  if (source === "facebook") {
    $("#facebookFriendSelector").modal('toggle');
  }

  // hmm, this seems a bit hackish
  // it's here so that the context clears itself
  // and so that we can allow user to keep
  // attempting to invite friends from facebook
  Session.set("friend.source", "");
});
