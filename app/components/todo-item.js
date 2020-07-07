import Component from '@ember/component';

export default Component.extend({
	tagName: "",

	actions: {
		editTodoFromItems(id) {
			return this.editTodoFromHome(id);
		},
		deleteTodoFromItems(id) {
			this.deleteTodoFromHome(id);
		}
	}
});
