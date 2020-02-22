When the user adds a new todo, it will also POST that todo to the database using the provided API. This way, once the change is made, it's made permanently. When you refresh the page, since it's pulling from the data on the API, it should pull the current list of todos.

Part 1 - GET
The user can see their current list of todos.
Todos show up as soon as the page loads.
If a todo item is complete, it should have a strike through line on it
Images should be displayed as images if there are any
Hints:

A createTodo function that takes one todo and inserts it to the DOM is very useful

Use postman to get those first few todos in there with some images so you can style your list!

Part 2 - POST
The user can add new todos to their list. The new item should be posted to the todo API so a future reload of the page will still display that new todo item. Making the new todo appear without a refresh is extra credit, but you're encouraged to attempt it.
A user should be able to give the item a title.
A user should be able to give the item a price.
A user should be able to give the item a description.
A user should be able to attach an imgUrl to the item

Part 3 - PUT Part 1
Each todo will have a checkbox where it can be marked complete or incomplete
Checking the checkbox should update the database

Part 4 - DELETE
A user will be able to delete todos (this is different from marking a todo as "completed")
Each todo should be rendered with a button marked "X" or "Delete" that when clicked, will delete the Todo
