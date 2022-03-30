<!--//!mondoDB methods -->

<!--//!update  -->

$inc - used to increment or decrement a value -- in my case Likes inside the bookSchema

write a route inside bookRouter that increments likes

        Book.findOneAndUpdate(
        	//1.what do i need to update? Find the book that has this ID..
        	{ _id: req.params.bookID },
        	//2. what update do i need to perform?
        	// action : increment
        	// increment the likes by 1
        	{ $inc: { likes: 1 } },
        	//3. send the new version
        	{ new: true },

<!--//! find -->

$regex - used to search strings - searching an Author by name -- types in A -shows Alex

1.  write a route inside authorRouter that searches author by the any letter of the authors name
    const { author } = req.query
    const pattern = new RegExp(author)
    Author.find({ name: { $regex: pattern, $options: 'i' } }, (err, authors) => {}

<!--//! add something to an array in the database-->

$push

% <!--//! remove something from an array in the database-->
$pull

<!--//!allows you to perform a vary specific type of search will multiple criteria on the database  -->
<!--//! return all books where likes is over 5 -->

where
exec
