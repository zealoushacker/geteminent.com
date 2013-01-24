///////////////////////////////////////////////////////////////////////////////
// Facebook friend selector activation

Meteor.startup(function () {
  User.facebookFriends(); 
});

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
  // Session.set("friend.source", "");
});


///////////////////////////////////////////////////////////////////////////////
// Facebook friends list template

Template.facebookFriends.helpers({

  friends: function() {
    return Session.get("facebook.friends");
  }

});


///////////////////////////////////////////////////////////////////////////////
// Facebook individual friend

Template.facebookFriend.helpers({

  photoUri: function() {
    var friend = this;
    return "https://graph.facebook.com/" + friend.uid + "/picture";
  }

});


///////////////////////////////////////////////////////////////////////////////
// Facebook friend pager

Template.facebookFriendPager.helpers({

  previousPage: function() {
    return Session.get("facebook.friends.paging.previous");
  },

  nextPage: function() {
    return Session.get("facebook.friends.paging.next");
  }

});

Template.facebookFriendPager.events({

  "click ul.pager li a" : function (e, tmpl) {
    e.preventDefault();
    User.facebookFriends($(e.target).data("offset"));
  }

});
