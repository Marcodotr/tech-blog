const { posts } = require('../models');

const postData = [
    {
        title: 'First Post!!!',
        body: 'So excited to have this fantastic resource available!!',
        user_id: 1
    },
    {
        title: 'Having issues with this MVC concept',
        body: 'Does anyone know how to properly set up the file structure for using handlebars?',
        user_id: 2
    },
    {
        title: 'SQL Troubles! :(',
        body: 'Can someone please explain foreign keys to me. I. AM. LOST.',
        user_id: 3
    },
    {
        title: 'What is HTML?',
        body: 'Sorry guys! I am very new to coding and was curious if anyone could explain HTML to me.',
        user_id: 4
    }
]

const seedPosts = () => posts.bulkCreate(postData);

module.exports = seedPosts;