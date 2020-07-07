import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	tagName: "",

	todosSorted: computed('todos.@each.priority', function(){
		let todos = this.todos;
		return todos.sortBy('priority');
	}),
	
	totalTodos: computed('todos.[]', function(){
		return this.todos.length;
	}),

	actions: {
		editTodoFromHome(id) {
			return this.editTodo(id);
		},
		deleteTodoFromHome(id) {
			this.deleteTodo(id);
		}
	}
});
