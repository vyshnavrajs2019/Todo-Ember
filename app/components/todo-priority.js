import Component from '@ember/component';
// import { set } from '@ember/object';

export default Component.extend({
	actions: {
		incrPriority() {
			let totalTodos = this.totalTodos;
			if(this.todo.priority < totalTodos - 1)
				this.set('todo.priority', this.todo.priority + 1);
			// set(this.todo, 'priority', this.todo.priority + 1);
		},
		decrPriority() {
			if(this.todo.priority > 0)
				this.set('todo.priority', this.todo.priority - 1);
		}
	}
});
