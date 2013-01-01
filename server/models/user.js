///////////////////////////////////////////////////////////////////////////////
// Facebook friends getter for a user id
Meteor.methods({

  facebookFriends: function (userId, uri) {
    var user = Meteor.users.findOne(
          userId, {fields: {'services.facebook.accessToken': 1}}
        ),
        accessToken = user.services.facebook.accessToken,
        result;

    if (uri !== undefined && uri !== "") {
      result = Meteor.http.get(uri);
    } else {
      uri = "https://graph.facebook.com/me/friends";
      result = Meteor.http.get(uri, {
        params: {
          access_token: accessToken,
          limit: 10
        }
      });
    }

    return result.data;
  }

});
