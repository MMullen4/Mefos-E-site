require('dotenv').config();
const sequelize = require('./config/connection');
const User = require('./models/user'); // Adjust the path as necessary

// Immediately log the User to verify it's imported correctly
console.log(User);

sequelize.authenticate().then(() => {
  console.log('Database connected successfully.');
  // Now that database connection is successful, sync models
  sequelize.sync({ force: true }).then(() => {
    console.log('Database & tables created!');
    // Call your test function here after successful connection and sync
    testUserModel();
  }).catch((syncError) => {
    console.error('Error syncing database:', syncError);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

async function testUserModel() {
  try {
    const userData = await User.create({
      name: 'testuser', // Changed from 'username' to 'name'
      email: 'testuser@example.com',
      password: 'testpassword',
    });
    console.log('User created:', userData.get({ plain: true }));
  } catch (error) {
    console.error('Error creating user:', error.message);
    console.error(error.stack); // Logs the stack trace
  }
}

