var User = {
  facebookFriends : function(uri) {
    uri = uri || "";
    Meteor.call(
      "facebookFriends", 
      Meteor.userId(),
      uri,
      function(error, result) {
        Session.set("facebook.friends", result.data);
        Session.set("facebook.friends.paging.next", result.paging.next);
        Session.set("facebook.friends.paging.previous", result.paging.previous);
      }
    );
  }
};
