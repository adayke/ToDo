  const list = {
    "create a new practice task": "To Do",
    "make a bed": "To Do",
    "write a post": "In Progress",  
  };

  function changeStatus(key, status) { 
    list[key] = status 
  };

  function addTask(key) {
    list[key] = 'To Do'
  };

  function deleteTask(key) { 
    delete list[key]
  };
  
  function showList() {
    console.log("To Do:")
  for (let key in list) {
    if (list[key] == 'To Do') {
      console.log(`\t${key}`)
    }
  }
    console.log("In Progress:")
    for (let key in list) {
      if (list[key] == "In Progress") {
      console.log(`\t${key}`)
    }
  }
    console.log("Done:")
    for (let key in list) {
      if (list[key] == "Done") {
      console.log(`\t${key}`)
      }
    }
} showList();