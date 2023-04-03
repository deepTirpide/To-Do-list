import { LightningElement, track } from 'lwc';

export default class TodoList extends LightningElement {
    @track newTask = '';
    @track tasks = [];

    handleInputChange(event) {
        this.newTask = event.target.value;
    }

    handleAddTask() {
        if (this.newTask !== '') {
            const newId = this.tasks.length + 1;
            const newTask = { id: newId, name: this.newTask };
            this.tasks.push(newTask);
            this.newTask = '';
            this.updateIndexes();
        }
    }

    handleDeleteTask(event) {
        const taskId = event.target.value;
        const taskIndex = this.tasks.findIndex(task => task.id === taskId);
        if (taskIndex !== -1) {
            this.tasks.splice(taskIndex, 1);
            this.updateIndexes();
        }
    }

    updateIndexes() {
        this.tasks = this.tasks.map((task, index) => {
            return { ...task, index: index + 1 };
        });
    }
}
