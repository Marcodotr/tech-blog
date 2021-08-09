const user = require('./users');
const posts = require('./posts');
const comments = require('./comments');

user.hasMany(posts, {
    foreignKey: 'user_id',
});

user.hasMany(comments, {
    foreignKey: 'user_id'
})

posts.hasMany(comments, {
    foreignKey: 'post_id'
})

posts.belongsTo(user, {
    foreignKey: 'user_id'
})

module.exports = { user, posts, comments }