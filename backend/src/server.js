const mongoose = require('mongoose');
const app = require('./index.js');
const { seedDatabase, seedDatabaseProd } = require('./utils/seedDatabase.js');

// eslint-disable no-undef
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/medimate';

const startServer = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to Database!');
    if (process.argv[2] === 'seed') {
      seedDatabase();
    } else {
      seedDatabaseProd();
    }
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error('Database connection error:', err);
  }
};

startServer();
