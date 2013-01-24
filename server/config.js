Accounts.loginServiceConfiguration.remove({
  service: "facebook"
});

Accounts.loginServiceConfiguration.insert({
  service: "facebook",
  appId: process.env.FACEBOOK_APP_ID,
  secret: process.env.FACEBOOK_APP_SECRET
});

Accounts.loginServiceConfiguration.remove({
  service: "twitter"
});

Accounts.loginServiceConfiguration.insert({
  service: "twitter",
  consumerKey: "sJKz3uBhPh0tJ9N4JZ7g",
  secret: "tPhbg3Vo6hbI6YcjdJfUWTRle8kd7DKg4jJiXmZSk" 
});

Accounts.loginServiceConfiguration.remove({
  service: "linkedin"
});

Accounts.loginServiceConfiguration.insert({
  service: "linkedin",
  consumerKey: "rcv0zlvp5own",
  secret: "E847kHB4v7AH2ZAy"
});
