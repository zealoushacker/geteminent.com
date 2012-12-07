///////////////////////////////////////////////////////////////////////////////
// Votes

/*
 * Each vote is represented by a document in the Votes collection:
 * voters: Array of user ids that voted for this user having this skill
 * user: user id
 * skill: skill id
 */
Votes = new Meteor.Collection("votes");
Votes.allow({
  insert: function (userId, vote) {
    return false;
  }
});

///////////////////////////////////////////////////////////////////////////////
// Skills

/*
 * Each skill is represented by a document in the Skills collection:
 * addedBy: user id
 * users: Arrray of user ids that have this skill
 * voters: Array of user ids that voted for this skill
 * votes: Array of vote ids for this skill 
 */
Skills = new Meteor.Collection("skills");

///////////////////////////////////////////////////////////////////////////////
// Users
