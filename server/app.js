const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const Razorpay = require("razorpay");
const { MONGO_URL, PORT, RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env;

const User = require('./models/UserModel.js')
const Course = require('./models/courseRegisterModel.js')
const Review = require('./models/ReviewModel.js')

var instance = new Razorpay({
    key_id: RAZORPAY_KEY_ID,
    key_secret: RAZORPAY_KEY_SECRET,
});

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("MongoDB is connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(
  cors({
    origin: ["http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use(express.json());

app.post('/api/register', async ( req, res, next ) => {
  try {
      const { name, phoneNo, email, password } = req.body;

      if( !name || !phoneNo || !email || !password ) {
          res.status(400).send('Please fill all required fields');
      } else {
          const isAlreadyExist = await User.findOne({ email });
          if(isAlreadyExist) {
              res.status(400).send('User already exists');
          } else {
              const newUser = new User({ name, phoneNo, email });
              bcrypt.hash(password, 10, ( err, hashedPassword ) => {
                  newUser.set('password', hashedPassword);
                  newUser.save();
                  next();
              })
              return res.status(200).send('User registered successfully');
          }
      }
  } catch (error) {
      console.log(error);
  }
})

app.post('/api/login', async ( req, res ) => {
  try {
      const { email, password } = req.body;
      if( !email || !password ) {
          res.status(400).send('Please fill all required fields.');
      } else {
          const user = await User.findOne({ email });
          if(!user) {
            console.log(user);
            res.status(400).send('User name or password is incorrect');
          } else {
              const validatUser = await bcrypt.compare(password, user.password);
              if(!validatUser) {
                  res.status(400).send('User name or password is incorrect');
              } else {
                  const payload = {
                      userId: user._id
                  }
                  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || 'THIS_IS_A_JWT_SECRET_KEY';
                  jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: 86400 }, async ( err, token ) => {
                      await User.updateOne({ _id: user._id }, {
                          $set: { token }
                      });
                      user.save();
                      
                      return res.status(200).json({ 
                          user: { id: user._id, email: user.email, name: user.name, phoneNo: user.phoneNo }, 
                          token: token
                      });
                  });
              }
            }
      }
  } catch (error) {
      console.log(error);
  }
});

// Handle form submission
app.post('/api/course-register', (req, res) => {
    const { name, address, course } = req.body;
  
    // Save form data to MongoDB
    const formData = new Course({ name, address, course });
    formData.save()
      .then(() => {
        // Redirect to payment checkout page
        // res.redirect('/payment_checkout');
        res.status(200).json({
            success: true,
        });
      })
      .catch(err => {
        console.error('Error saving form data:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });

app.post('/api/reviews', async (req, res) => {
    const { name, message } = req.body;
    try {

        const ExistingUser = await User.findOne({ name: { $regex: new RegExp('^' + name + '$', 'i') } });
        // console.log(ExistingUser);
      
        // Save form data to MongoDB
        if(ExistingUser){
            const formData = new Review({ name, message });
            await formData.save();
            res.status(200).json({
                success: true,
                message: 'Review saved successfully',
            });
        } else {
            res.status(400).json({
                success: false,
                message: 'User name is incorrect'
            });
        }
    } catch (err) {
        res.status(500).json({ success: false, error: 'Internal Server Error' })
    }

});

app.get('/api/reviews', async (req, res) => {
    try {
        // Fetch all reviews from the database
        const reviews = await Review.find();

        // Return the reviews as JSON response
        res.status(200).json(reviews);
    } catch (error) {
        // Handle any errors that occur during the database query
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/checkout', async ( req, res ) => {
    var options = {
        amount: 50000,  // amount in the smallest currency unit 500rs
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    const order = await instance.orders.create(options);
    console.log(order);
    res.status(200).json({
        success: true,
    });
})