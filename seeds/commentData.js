const { comments } = require('../models');

const commentData = [
    {
        body: 'you JUST beat me to it!',
        post_id: 1,
        user_id: 2
    },
    {
        body: 'this will be awesome to reference in the future',
        post_id: 1,
        user_id: 3
    },
    {
        body: "won't it??",
        post_id: 1,
        user_id: 1
    },
    {
        body: 'I believe you can find the information on this website https://stackabuse.com/guide-to-handlebars-templating-engine-for-node',
        post_id: 2,
        user_id: 3
    },
    {
        body: 'That was very helpful, thank you!!',
        post_id: 2,
        user_id: 2
    },
    {
        body: 'they help you relate items in different tables to each other',
        post_id: 3,
        user_id: 1
    },
    {
        body: 'imagine them as the web between your data',
        post_id: 3,
        user_id: 2
    },
    {
        body: "I'm not sure i understand the metaphor",
        post_id: 3,
        user_id: 3
    },
    {
        body: "You should sign up for the coding bootcamp at UTSA",
        post_id: 4,
        user_id: 2
    },
    {
        body: "I second that!!!",
        post_id: 4,
        user_id: 1
    },
    {
        body: "I third that!!!",
        post_id: 4,
        user_id: 3
    },
]

const seedComments = () => comments.bulkCreate(commentData);

module.exports = seedComments;