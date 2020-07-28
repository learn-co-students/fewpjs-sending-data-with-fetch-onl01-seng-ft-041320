// Add your code here

function submitData(name, email) {
    const destinationURL = "http://localhost:3000/users"

    const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: name,
          email: email
        })
     };

    return fetch(destinationURL, configurationObject)
            .then( (response) => {
                return response.json();
            })
            .then( (json) => {
                //console.log(json)
                document.body.append(json.id);
            })
            .catch( (error) => {
                //console.log(error)
                document.body.append(error.message);
            });
}