///////////////////////////////////////////////////////////////////////////////
// Friend source chooser 

Template.friendSource.helpers({

  sources: function () {
    return [
      { name: "twitter", icon: "icon-twitter" },
      { name: "linkedin", icon: "icon-linkedin" },
      { name: "facebook", icon: "icon-facebook" },
      { name: "google", icon: "icon-google-plus" },
      { name: "email", icon: "icon-envelope" }
    ];
  }

}); 

Template.friendSource.events({

  "click input": function (e, tmpl) {
    Session.set("friend.source", "email");
  }

});

Template.source.helpers({

  selected: function () {
    return Session.equals("friend.source", this.name) ? "selected" : "";
  }

});

Template.source.events({

  "click span": function (e, tmpl) {
    var source = this.name;

    Session.set("friend.source", source); 
  }, 

  "click .email": function (e, tmpl) {
    $(".friend-select input").focus();
  }

});
