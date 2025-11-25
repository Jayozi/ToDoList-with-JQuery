const Storage = {
    saveTasks: function(tasks) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    },
    lodaTasks: function() {
        return JSON.parse(localStorage.getItem("tasks")) || [];
    },

    clearTasks: function() {
        localStorage.removeItem("tasks");
    }
}