Meteor.startup(function () {
  Accounts.loginServiceConfiguration.remove({
    service: "facebook"
  });

  Accounts.loginServiceConfiguration.insert({
    service: "facebook",
    appId: process.env.FACEBOOK_APP_ID,
    secret: process.env.FACEBOOK_APP_SECRET
  });
});
