const fs = require('fs');

const path = "./tasks.json"

function loadTasks() {

    try {
        
        if(!fs.existsSync(path)){
            return [];
        }

        const jsonData = fs.readFileSync(path, 'utf-8');
        // const jsonData = data.toString();

        return JSON.parse(jsonData);

    } catch (error) {
        console.log(error.message);
        throw new Error(`Tasks couldn't be loaded.`);
    }
}

function saveTasks(tasks){
    
    fs.writeFileSync(path, JSON.stringify(tasks,null,2));
}

function deleteTask(tasks, id){

    return tasks.filter(task => task.id !== id);
}


const command = process.argv[2];

if(command === "add"){

    let tasks = loadTasks();
    

    const taskName = process.argv[3];

    let taskId = 0;

    if(tasks.length){
        taskId = tasks.reduce((max, task) => max = Math.max(max, task.id), 0);
    }

    let newTask = {
        id: taskId+1,
        description: taskName,
        status: "todo",
        createdAt: Date.now(),
        updatedAt: Date.now()
    };

    tasks.push(newTask);

    saveTasks(tasks);

    console.log(`Task Added Successfully! (ID: ${newTask.id})`);

}else if(command === "update"){

    let tasks = loadTasks();

    const taskId = parseInt(process.argv[3]);
    const newDescription = process.argv[4];

    const task = tasks.find(task => task.id === taskId);

    if(!task) {
        console.log('Task not found!');
        return;
    }

    task.description = newDescription;
    task.updatedAt = Date.now();

    saveTasks(tasks);

    console.log(`Task Updated Successfully! (ID: ${taskId})`);

}else if(command === "delete"){

    const taskId = parseInt(process.argv[3]);
    let tasks = loadTasks();

    const newTasksList = deleteTask(tasks, taskId);

    saveTasks(newTasksList);

    console.log(`Task Deleted Successfully!`);

}else if(command === "mark-in-progress" || command === "mark-done"){

    const taskId = parseInt(process.argv[3]);

    let tasks = loadTasks();

    const task = tasks.find(task => task.id === taskId);

    if(!task){
        console.log('Task not found!');
        return;
    }

    if(command === "mark-done"){
        task.status = "done";
    }else{
        task.status = "in-progress";
    }
    task.updatedAt = Date.now();

    saveTasks(tasks);

    console.log(`Task with ID: ${taskId} has been marked as ${task.status}`)

}else if(command === "list"){

    const taskStatus = process.argv[3];

    const tasks = loadTasks();

    let tasksList;

    if(!taskStatus) {
        tasksList = tasks;
    }

    else {
        tasksList = tasks.filter(task => task.status === taskStatus);
    }

    tasksList.forEach(task => {
        console.log(`Task Id: ${task.id}, Description: ${task.description}, Status: ${task.status}`);
    })
}
