Accounts.onCreateUser(function (options,user) {
  var accessToken = user.services.facebook.accessToken,
      result,
      profile;
      
  result = Meteor.http.get("https://graph.facebook.com/me", {
    params: {
      access_token: accessToken,
      fields: "name, first_name, last_name, username, email, picture"
    }
  });

  if (result.error) {
    throw result.error;
  }

  profile = _.pick(result.data, 
                  "id",
                  "name",
                  "first_name",
                  "last_name",
                  "username",
                  "email",
                  "picture");

  user.profile = profile;

  return user;
});
