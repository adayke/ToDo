export const BUTTON = {
  ADD_TASK: document.querySelectorAll('.form__input-btn'),
  DELETE_TASK: document.querySelectorAll('.del-task-btn'),
  CHANGE_STATUS: document.querySelectorAll('.checkbox-btn'),
};

const list = [
  { name: "create task", status: "To Do", priority: 'Low' },
  { name: "make a bed", status: "In Progress", priority: 'Low' },
  { name: "write a post", status: "Done", priority: "High" },
  { name: "do sport", status: "Done", priority: "High" },
];

function addTask(name) {
  list.push({ name: name, status: 'To Do', priority: 'Low' })
};

function deleteTask(name) {
  list.find(function (item, index) {
    if (item.name === name) {
      list.splice(index, 1)
    }
  })
};

function changeStatus(name, status) {
  let findName = list.find(item => item.name == name)
  findName['status'] = status
  if (status == 'Done') {
    findName['priority'] = 'High'
  } else {
    findName['priority'] = 'Low'
  }
}

function showList() {
  console.log("To Do:")
  list.forEach(function (item) {
    if (item.status === 'To Do') {
      console.log(`\t${item.name}`);
    }
  })

  console.log("In Progress:")
  list.forEach(function (item) {
    if (item.status === 'In Progress') {
      console.log(`\t${item.name}`)
    }
  })

  console.log("Done:")
  list.forEach(function (item) {
    if (item.status === 'Done') {
      console.log(`\t${item.name}`)
    }
  })
} showList();

function showBy(item) {
  if (item == 'High') {
    console.log('High:')
    list.forEach(function (item) {
      if (item.priority == 'High') {
        console.log(`\t${item.name}`)
      }
    })
  }
  if (item == 'Low') {
    console.log('Low:')
    list.forEach(function (item) {
      if (item.priority == 'Low') {
        console.log(`\t${item.name}`)
      }
    })
  }

}