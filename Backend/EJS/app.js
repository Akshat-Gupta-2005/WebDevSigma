const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const BlogRoutes = require('./routes/BlogRoutes'); // Import the BlogRoutes module


//express 
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://geminiakshatgupta:Akshat123@mycluster.adnqvww.mongodb.net/?retryWrites=true&w=majority&appName=MyCluster'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000)) // Start the server after successful connection to the database
    .catch((err) => console.log(err));

// Register view engine
app.set('view engine', 'ejs'); // Default view folder is 'views'

// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
// })

// Middleware & static files
app.use(express.static('public')); // Serve static files from 'public' folder
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data from forms
app.use(morgan('tiny')); // Logger middleware

// app.use((req, res, next) => { // Logger middleware
//     console.log('\nNew request made')
//     console.log('Host:', req.hostname);
//     console.log('Path:', req.path);
//     console.log('Method:', req.method);
//     next();
// })

app.get('/', (req, res) => {
    res.redirect('/blogs'); // Redirect to '/blogs' route
})

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' })
})

// app.use(BlogRoutes); // Use the BlogRoutes module for handling blog-related routes
app.use('/blogs',BlogRoutes); //Scoped out,  Use the BlogRoutes module for handling blog-related routes

app.use((req, res) => {
    res.status(404).render('404', { title: '404' })
})