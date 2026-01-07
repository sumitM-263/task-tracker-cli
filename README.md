# Task Tracker

Sample solution for the [task-tracker](https://roadmap.sh/projects/task-tracker) challenge from [roadmap.sh](https://roadmap.sh/).

This is a simple command-line interface (CLI) application for managing tasks.

## Features

- Add new tasks with a unique ID and store it in `JSON` format.
- List tasks by their status: `to-do`, `in-progress`, or `done`.
- Update the description of an existing task.
- Delete tasks by their ID.
- Mark tasks as `in-progress` or `done`.

## Prerequisites

- Node.js installed on your system.

## Installation

**Clone the Repository**

   ```bash
   git clone https://github.com/sumitM-263/task-tracker-cli.git

   # Navigate to the project Directory
   cd task-tracker-cli
   ```
## Usage

- **Add a Task**
```bash
node task-cli.js add "Drink a Coffee"
```

- **List all Tasks**
```bash
node task-cli.js list
```
- **or by list the tasks by status**
```bash
# To list the tasks that are marked as to-do
node task-cli.js list todo

# To list the tasks that are marked as in-progess
node task-cli.js list in-progress

# To list the tasks that are marked as done
node task-cli.js list done
```

- **Update a Task**
```bash
node task-cli.js update 1 "Drink a Coffee and Do Coding"
```

- **Mark Task Status**
```bash
# Mark as `in-progress` with containing task ID as 1
node task-cli.js mark-in-progress 1

# Mark as `done` with containing task ID as 1
node task-cli.js mark-done 1
```

- **Delete a Task**
```bash
# Delete the task by containing its ID 1
node task-cli.js delete 1
```

### Sample JSON structure
```JSON
[
 {
    "id": 1,
    "description": "Drink a Coffee",
    "status": "todo",
    "createdAt": 1767751447989,
    "updatedAt": 1767751447989
  }
]
```