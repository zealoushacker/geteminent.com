Template.friend.events({
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined') {
      console.log("Friend template input!");
    }
  }
});
