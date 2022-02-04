const list = [
  {name:"create a new practice task", status: "To Do", priority: 'Low' },
  {name: "make a bed", status: "To Do", priority: 'Low' },
  {name: "write a post", status: "Done", priority: "High" },  
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

function changeStatus(name, status, priority) {
let findName = list.find(item => item.name == name)
findName['status'] = status
if(status == 'Done') {
findName['priority'] = 'High'
} else {
findName['priority'] = 'Low'
}
}
  
  function showList() {
    let noTaskStatus = true;
    
    console.log("To Do:")
  for (let key in list) {
    if (list[key] == 'To Do') {
      console.log(`\t${key}`)
      noTaskStatus = false;
    }
  } if (noTaskStatus == true) { console.log(`\t -`) };

    console.log("In Progress:")
    noTaskStatus = true;
    for (let key in list) {
      if (list[key] == "In Progress") {
      console.log(`\t${key}`)
        noTaskStatus = false;
    }
  } if (noTaskStatus == true) { console.log(`\t -`) }; 
    
  console.log("Done:")
    noTaskStatus = true;
    for (let key in list) {
      if (list[key] == "Done") {
      console.log(`\t${key}`)
        noTaskStatus = false;
      } 
    } if (noTaskStatus == true) { console.log(`\t -`) }; 
} showList();