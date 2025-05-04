const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController'); // Import the blogController module


router.get('/', blogController.blog_index); // Route to get all blogs and render the index view
router.post('/', blogController.blog_create_post); // Route to create a new blog and save it to the database
router.get('/create', blogController.blog_create_get); // Route to render the create blog view
router.get('/:id', blogController.blog_details); // Route to get a specific blog by ID and render the details view
router.delete('/:id', blogController.blog_delete); // Route to delete a specific blog by ID

module.exports = router; // Export the router to be used in other files


// app.get('/add-blog', (req, res) => {
//     const blog = new Blog({
//       title: 'new blog 2',
//       snippet: 'about my new blog',
//       body: 'more about my new blog'
//     });

//     blog.save()
//       .then((result) => {
//         res.send(result); // Send the saved blog as a response
//       })
//       .catch((err) => {
//         console.log(err); // Log any errors that occur during saving
//       });
//   });

// app.get('/all-blogs', (req, res) => {
//     Blog.find().sort({ createdAt: -1 }) // Fetch all blogs sorted by creation date in descending order
//         .then((result) => {
//             res.send(result); // Render the 'all-blogs' view with the fetched blogs
//         })
//         .catch((err) => {
//             console.log(err); // Log any errors that occur during fetching
//         });
// })

