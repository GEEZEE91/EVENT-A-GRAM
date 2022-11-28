const User = require('./User');
const Party = require('./Party');
const Theme = require('./Theme');
const savedEvents = require('./savedEvents');


User.hasMany(Party, {
    foreignKey: 'user_id'
});

Party.belongsTo(User, {
    foreignKey: 'user_id'
});

Party.belongsTo(Theme, {
    foreignKey: 'theme_id'
});

savedEvents.belongsTo(Party, {
    foreignKey: "party_id",
  });


  module.exports = { User, Party, Theme, savedEvents };