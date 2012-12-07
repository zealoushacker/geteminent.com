///////////////////////////////////////////////////////////////////////////////
// Friend selector 
Template.friend.events({
  'click' : function () {
    Session.set("upvotingFriend", true);
  }
});

Template.friend.upvotingFriend = function () {
  return Session.get("upvotingFriend");
};
