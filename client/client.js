///////////////////////////////////////////////////////////////////////////////
// Friend selector 

Template.friendSource.helpers({

  sources: function () {
    return [
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

    if (source === "facebook") {
      Meteor.loginWithFacebook({
        requestPermissions: ['publish_actions']
      }, function (err) {
        if (err) {
          Session.set('errorMessage', err.reason || 'Unknown error');
        }
      });
    }

    Session.set("friend.source", source); 
  }, 
  "click .email": function (e, tmpl) {
    $(".friend-select input").focus();
  }

});
