
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;


// MongoDB connection
mongoose.connect('mongodb+srv://poojapal88286:hVo8i8MvbXTfXAZ5@cluster0.dzntujs.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

app.use(cors({
  origin:'*'
}))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Routes
const dataRouter = require('./routes/controller');
app.use('/', dataRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
