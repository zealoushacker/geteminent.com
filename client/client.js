///////////////////////////////////////////////////////////////////////////////
// Friend selector 

Template.friendSource.sources = [
  { source: "linkedin", icon: "icon-linkedin" },
  { source: "facebook", icon: "icon-facebook" },
  { source: "twitter", icon: "icon-twitter" },
  { source: "google", icon: "icon-google-plus" },
  { source: "email", icon: "icon-envelope" }
];

Template.friendSource.selected = function(source) {
  return Template.friend.source() === source ? "selected" : "";
};

Template.friendSource.clickHandler = function(source) {
  var o = {};
  o['click .' + source.source] =  function (event, template) {
    Session.set("friend.source", source.source)
  }

  return o;
};

Template.friend.eventObject = function() {
  var events = {
    'click .email, click input' : function (event, template) {
      Session.set("friend.source", "email");
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
