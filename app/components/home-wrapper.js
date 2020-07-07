import Component from '@ember/component';
import { A } from '@ember/array';
import { set } from '@ember/object';

export default Component.extend({
	tagName: "",
	title: "",
	description :"",
	isUpdateForm: false,
	selectedTodoId: null,
	actionButtonTitle: "Create Todo",

	init() {
		this._super(...arguments);
		this.set('todos', A([]));
	},

	findTodo(id) {
		// Get the todo item corresponding to the id
		let todos = this.get('todos');
		let todo = todos.filterBy('id', id).get('firstObject');
		return todo;
	},

	resetAttr() {
		// Clear the title and description
		this.set('title', "");
		this.set('description', "");

		// Change the action button title
		this.set('actionButtonTitle', 'Create Todo');

		// Reset update option
		this.set('selectedTodoId', null);
		this.set('isUpdateForm', false);
	},

	actions: {
		createTodo() {
			// Check if update form is active
			if(this.isUpdateForm)
				return this.send('updateTodo');

			// Initializer todo values
			let id = new Date().getTime();
			let title = this.get('title');
			let description = this.get('description');
			let priority = 0;

			// Validate the input
			if(title.trim().length !== 0 && description.trim().length !== 0)
				this.todos.pushObject({ id, title, description, priority });

			// call the restAttr function
			this.resetAttr();
		},

		editTodo(id) {
			// Get the todo
			let todo = this.findTodo(id);

			// Update the title and description
			this.set('title', todo.title);
			this.set('description', todo.description);

			// Change the action button title
			this.set('actionButtonTitle', 'Update Todo');

			// Set the selectedId and updateForm
			this.set('isUpdateForm', true);
			this.set('selectedTodoId', id);
		},

		deleteTodo(id) {
			let todos = this.todos.filter(function(todo){
				if(todo.id === id)
					return false;
				return true;
			});
			this.todos.clear();
			this.todos.pushObjects(todos);
		},
		
		updateTodo() {
			// Get the selectedId
			let id = this.get('selectedTodoId');

			// Update title and description of the todo
			let todo = this.todos.findBy('id', id);
			set(todo, 'title', this.title);
			set(todo, 'description', this.description);

			// Reset the form
			this.resetAttr();
		},

		resetTodo() {
			this.resetAttr();
		},
	}
});
