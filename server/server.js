Meteor.startup(function () {
  Accounts.loginServiceConfiguration.insert({
    service: "facebook",
    appId: process.env.FACEBOOK_APP_ID,
    appSecret: process.env.FACEBOOK_APP_SECRET
  });
});
