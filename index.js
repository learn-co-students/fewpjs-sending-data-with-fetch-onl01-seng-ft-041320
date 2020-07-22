//write a method, submitData
//takes two strings arguments, 
//one representing a user's name 
//and the other representing a user's email.
function submitData(name, email) {

    const url = "http://localhost:3000/users"

    let data = {
        name: name,
        email: email
    };

    let configurationObject = {        //configObj
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    };

        return fetch(url, configurationObject)
            .then(function(response) {
                return response.json();
            })
            .then(function(object) {
                console.log(object);
                document.body.innerHTML = object.id;
            })
            .catch(function(error) {
                alert("ALERT!");
                document.body.innerHTML = error;
            })
       
    };
