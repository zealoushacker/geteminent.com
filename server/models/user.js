///////////////////////////////////////////////////////////////////////////////
// Facebook friends getter for a user id
Meteor.methods({

  facebookFriends : function (userId, offset) {
    var user = Meteor.users.findOne(
          userId, {fields: {'services.facebook.accessToken': 1}}
        ),
        accessToken = user.services.facebook.accessToken,
        friendsQuery = function(offset) {
          return "SELECT uid, name FROM user \
            WHERE uid IN ( SELECT uid2 FROM friend WHERE uid1 = me()) \
            ORDER BY name ASC LIMIT 10 OFFSET " + (offset);
        },
        uri = "https://api.facebook.com/method/fql.query",
        query,
        result;

    offset = offset || 0;
    query = friendsQuery(offset);

    result = Meteor.http.get(uri, {
      params: {
        access_token: accessToken,
        query: query,
        format: "json"
      }
    });

    return _.extend(
      result,
      { 
        paging: { 
          previous: (offset === 0 ? 0 : offset - 10),
          next: (result.data.length === 10 ? offset + 10 : offset)
        }
      }
    );
  }

});
