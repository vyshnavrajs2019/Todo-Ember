import Component from '@ember/component';

export default Component.extend({
	actions: {
		createTodo(event) {
			event.preventDefault();
			this.create();
		},

		resetForm() {
			this.reset();
		}
	}
});
