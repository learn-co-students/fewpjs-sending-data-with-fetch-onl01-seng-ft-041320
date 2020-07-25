// Add your code here

const usersPath = 'http://localhost:3000/users'
// let userFormData = {}
// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(userFormData)
// }

function addToDOM(info) {
    // let p = document.createElement("p")
    // p.innerText = info
    // document.getElementsByTagName("body")[0].appendChild(p)
    document.body.innerHTML = ` ${info.id} ${info.name} ${info.email}`
}

function submitData(userName, userEmail) {
    // let userFormData = {}
    // userFormData["name"] = userName
    // userFormData["email"] = userEmail

    return fetch(usersPath, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                "name": userName,
                "email": userEmail
            })
        })
        .then(function(response) {
            return response.json()
        })
        .then(function(json) {
            addToDOM(json)
        })
        .catch(function(error) {
            document.body.innerHTML = ` ${error.message}`
        })
}