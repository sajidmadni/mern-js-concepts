const myUsers = {
    usersList: []
}

const users = async () => {
    const response =  await fetch("https://jsonplaceholder.typicode.com/users");
    const data =  await response.json();
    // console.log(data);
    myUsers.usersList = data;
    console.log(myUsers.usersList);
}

users();
console.log("Getting users list here????")
console.log(myUsers.usersList);