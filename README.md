# todo-list-javascript
## Daily work list you can add, remove and complete.

> The todo list app we’ll be building will be pretty basic. A user can add a task, mark a 
> task as completed and delete an already added task. I’ll explain how to build each feature,
> but you must follow through by typing the code and running it on your end to get the most
> out of the tutorial.


## Add a todo
The first thing we need to do is set up an array to hold our todo list items. Each todo will be
an object with three properties: text which holds whatever the user types into the text input, checked which helps us know 
if a task has been marked completed or not, and id, a unique identifier for the todo item.

## Mark a task as ‘done’
The next feature to implement is the ability to mark a task as completed. To do so, we need to listen for the 
click event on the checkbox and then toggle the checked property on the todo item as needed.


## Delete todo items
Similar to the way we implemented the last feature, we’ll listen for clicks on the .js-delete-todo element, 
then grab the key of the parent and pass it off to a new deleteTodo function which will remove the
corresponding entry in todoItems and remove the todo item from the DOM.
