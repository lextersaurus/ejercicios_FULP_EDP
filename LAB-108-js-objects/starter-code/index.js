// iteration 1

function fullName(person) {
    let string = ''
    string = person.firstName + ' ' + person.lastName
    return string
}

console.log(fullName({ firstName : 'Luis' , lastName: 'Burón' }))


// iteration 2

function whoIsOnline(users) {
    const result = {}
    for (let i = 0; i < users.length; i++) {
        if (users[i].status == 'online' && users[i].lastActivity <= 600) {
            (result.online) ? result.online.push(users[i].username) : result['online'] = [users[i].username]
        } else if (users[i].status == 'offline') {
            (result.offline) ? result.offline.push(users[i].username) : result['offline'] = [users[i].username]
        } else (result.afk) ? result.afk.push(users[i].username) : result['afk'] = [users[i].username]
    }
    return result
}

console.log(whoIsOnline([{
    username: 'David',
    status: 'online',
    lastActivity: 600
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 2320
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 4320
  }]))


  // iteration 3

  function normalTemperature(yourComputer, maxTemperatures) {
    const result = {}
    for (const [component, temperature] of Object.entries(yourComputer)) {
      result[component] = temperature < maxTemperatures[component]
    }
    return result
  }

  let yourComputer = { 
    cpu : 25,
    gpu : 45,
    motherBase : 15,
    dvdDriver : 25,
    rom : 5,
    ram : 10,
  }

  let maxTemperatures = { 
    cpu : 33,
    gpu : 42,
    motherBase : 20,
    dvdDriver : 20,
    rom : 10,
    ram : 20,
  }

  let results = normalTemperature(yourComputer, maxTemperatures)
  
  console.log(results)