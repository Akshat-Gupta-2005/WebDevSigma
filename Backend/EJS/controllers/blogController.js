const Blog = require('../models/blog'); // Import the Blog model

//blog_index ,blog_details, blog_create_post,  blog_delete , blog_create_get

const blog_index = (req, res) => {
    Blog.find().sort({ createdAt: -1 }) // Fetch all blogs sorted by creation date in descending order
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result }); // Render the 'index' view with the fetched blogs
        })
        .catch((err) => {
            console.log(err); // Log any errors that occur during fetching
        });
}

const blog_details = (req, res) => {
    const id = req.params.id; // Get the blog ID from the request parameters
    Blog.findById(id) // Find the blog by ID in the database
        .then((result) => {
            res.render('details', { title: 'Blog Details', blog: result }); // Render the 'details' view with the fetched blog
        })
        .catch((err) => {
            console.log(err); // Log any errors that occur during fetching
            res.status(404).render('404', { title: 'Blog not found' }); // Render 404 page if blog not found
        });
}

const blog_create_get = (req, res) => {
    res.render('create', { title: 'Create a new blog' }); // Render the 'create' view for creating a new blog
}

const blog_create_post = (req, res) => {
    const blog = new Blog(req.body); // Create a new blog instance with the request body data
    blog.save() // Save the blog to the database
        .then((result) => {
            res.redirect('/blogs'); // Redirect to '/blogs' route after saving
        })
        .catch((err) => {
            console.log(err); // Log any errors that occur during saving
        });
}

const blog_delete = (req, res) => {
    const id = req.params.id; // Get the blog ID from the request parameters
    Blog.findByIdAndDelete(id) // Find and delete the blog by ID in the database
        .then((result) => {
            res.json({ redirect: '/blogs' }); // Send a JSON response to redirect to '/blogs' route after deletion
        })
        .catch((err) => {
            console.log(err); // Log any errors that occur during deletion
        });
}

module.exports = {
    blog_index, // Export the blog_index function to be used in other files
    blog_details, // Export the blog_details function to be used in other files
    blog_create_get, // Export the blog_create_get function to be used in other files
    blog_create_post, // Export the blog_create_post function to be used in other files
    blog_delete, // Export the blog_delete function to be used in other files
}