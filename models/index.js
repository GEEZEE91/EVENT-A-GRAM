const User = require('./User');
const Party = require('./Party');
const Theme = require('./Theme');

User.hasMany(Party, {
    foreignKey: 'user_id'
});

Party.belongsTo(User, {
    foreignKey: 'user_id'
});

Party.belongsTo(Theme, {
    foreignKey: 'theme_id'
});


module.exports = { User, Party, Theme };