///////////////////////////////////////////////////////////////////////////////
// Friend selector 

Template.friendSource.sources = [
  { source: "facebook", icon: "icon-facebook" },
  { source: "google", icon: "icon-google-plus" },
  { source: "email", icon: "icon-envelope" }
];

Template.friendSource.selected = function(source) {
  return Template.friend.source() === source ? "selected" : "";
};

Template.friendSource.clickHandler = function(source) {
  var o = {};
  o['click .' + source.source] =  function (event, template) {
    Session.set("friend.source", source.source);

    if (source.source === "facebook") {
      Meteor.loginWithFacebook({
        requestPermissions: ['publish_actions']
      }, function (err) {
        if (err) {
          Session.set('errorMessage', err.reason || 'Unknown error');
        }
      });
    }

    Session.set("friend.source." + source + ".invite", true);
  };

  return o;
};

Template.friend.eventObject = function() {
  var events = {
    'click .email, click input' : function (event, template) {
      Session.set("friend.source", "email");
      $(".friend-select input").focus();
    }
  };

  _.each(Template.friendSource.sources, function(i) {
    _.extend(events, Template.friendSource.clickHandler(i));
  });
  return events;
};

Template.friend.events(Template.friend.eventObject());

Template.friend.source = function () {
  return Session.get("friend.source");
};
