const dotenv = require('dotenv');
const mongoose = require('mongoose');

const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Successfully connected to the database`))
  .catch((err) =>
    console.log(
      `something went wrong while trying to connect to the database ${err}`
    )
  );

const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`Re. is running on port ${port}`);
});
