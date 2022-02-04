const list = [
  { name: "create a new practice task", status: "To Do", priority: 'Low' },
  { name: "make a bed", status: "In Progress", priority: 'Low' },
  { name: "write a post", status: "Done", priority: "High" },
  { name: "do sport", status: "Done", priority: "High" },  
];

function addTask(name) {
  list.push({ name: name, status: 'To Do', priority: 'Low' })
};

function deleteTask(name) {
  let findIndex = list.findIndex(item => item.name == name)
    if(findIndex !== -1) {
      list.splice(findIndex, 1)
    } 
};

function changeStatus(name, status) {
  let findName = list.find(item => item.name == name)
    findName['status'] = status
      if(status == 'Done') {
        findName['priority'] = 'High'
      } else {
        findName['priority'] = 'Low'
      }
}
  
  function showList() {
    console.log("To Do:")
    let findTodo = list.filter(item => item.status == "To Do")
    if(findTodo === undefined) {
      console.log(`\t -`);
    } else {
      for (let key in findTodo) {
        console.log(findTodo[key])
      }
    }

    console.log("In Progress:")
    let findInProgress = list.filter(item => item.status == "In Progress")
    if(findInProgress === undefined) {
      console.log(`\t -`);
    } else {
      for (let key in findInProgress) {
        console.log(findInProgress[key])
      } 
  };  
    
  console.log("Done:")
    let findDone = list.filter(item => item.status == "Done")
    if(findDone === undefined){
      console.log(`\t -`)
    } else {
      for (let key in findDone) {
        console.log(findDone[key])
      }
    } 
} showList();

function showBy(prop) {
  if(prop == 'High') {
  let findHighPrioritys = list.filter(item => item.priority == "High")
  if (findHighPrioritys === undefined) {
    console.log(`\t -`)
  } else {
    for (let key in findHighPrioritys) {
      console.log(findHighPrioritys[key])
      }
    }
  }

  if (prop == 'Low') {
    let findLowPrioritys = list.filter(item => item.priority == "Low")
    if (findLowPrioritys === undefined) {
      console.log(`\t -`)
    } else {
      for (let key in findLowPrioritys) {
        console.log(findLowPrioritys[key])
      }
    }
  }
}