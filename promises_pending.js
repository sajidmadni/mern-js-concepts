const users = fetch("https://jsonplaceholder.typicode.com/users")

users
.then(response => {
    console.log(response)
    return response.json();
})
.then(data => {{
    console.log(data)
}})
console.log("Users values")
console.log(users)
