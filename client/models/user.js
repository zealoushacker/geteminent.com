var User = {
  facebookFriends : function(offset) {
    offset = offset || 0;

    Meteor.call(
      "facebookFriends", 
      Meteor.userId(),
      offset,
      function(error, result) {
        Session.set("facebook.friends", result.data);
        Session.set("facebook.friends.paging.previous", result.paging.previous);
        Session.set("facebook.friends.paging.next", result.paging.next);
      }
    );
  }
};
