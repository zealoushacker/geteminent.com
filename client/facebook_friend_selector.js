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


///////////////////////////////////////////////////////////////////////////////
// Facebook friend selector

Template.facebookFriendSelector.helpers({

  friends: function() {
     Meteor.call(
      "facebookFriends", 
      Meteor.userId(),
      function(error, result) {
        Session.set("facebook.friends", result.data);
        Session.set("facebook.friends.paging.next", result.paging.next);
        Session.set("facebook.friends.paging.previous", result.paging.previous);
      }
    );

    return Session.get("facebook.friends");
  },

  previousPage: function() {
    return Session.get("facebook.friends.paging.prevous");
  },

  nextPage: function() {
    return Session.get("facebook.friends.paging.next");
  }

});


///////////////////////////////////////////////////////////////////////////////
// Facebook friend
