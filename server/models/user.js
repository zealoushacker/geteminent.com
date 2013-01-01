Meteor.methods({
  facebookFriends: function(userId, offset) {
    var user = Meteor.users.findOne(userId, {fields: {'services.facebook.accessToken': 1}}),
        accessToken = user.services.facebook.accessToken,
        result;

    offset = offset || 1;

    result = Meteor.http.get("https://graph.facebook.com/me/friends", {
      params: {
        access_token: accessToken,
        limit: 10,
        offset: offset 
      }
    });

    return result.data;
  }
});
