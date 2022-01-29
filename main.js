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