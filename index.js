function submitData(userName, userEmail) {
    return fetch ("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }).then(function(response) {
        return response.json();
    }).then(function(object) {
        console.log(object);
        let p = document.createElement('p');
        p.textContent = object.id;
        document.body.appendChild(p);
    }).catch(function(error) {
        console.log(error.message);
        let p = document.createElement('p');
        p.textContent = error.message;
        document.body.appendChild(p);
    });
}

