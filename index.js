function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
    };

    let configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    
    return fetch("http://localhost:3000/users", configObject)
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        document.body.innerHTML = json.id
    })
    .catch(function(error) {
        document.body.innerHTML = error;
    });
};