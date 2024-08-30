const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const donoInfoRouter=require("./routers/donarInfoRouter")
const RecipitentRouter=require("./routers/recipitentRouter")
const app = express();

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ['GET', 'POST','PUT','DELETE'],
  credentials: true
}));
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/Blood-project')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:',err));

// Use the userRouter for routes under /user
app.use('/donor',donoInfoRouter);

app.use('/recipitent',RecipitentRouter)

app.listen(3000,()=>{
   console.log("server is running on port 3000" );
})