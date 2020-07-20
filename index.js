// Add your code here
function submitData(name, email){
    let formData = {
        name: name,
        email: email
    };
    
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        const p = document.createElement('p')
        p.innerHTML = object.id
        let div = document.getElementById('thing')
        div.appendChild(p)
        // document.appendChild(p)
        console.log(p.innerHTML)
    })
    .catch(function(error){
        const p = document.createElement('p')
        p.innerHTML = error.message
        let div = document.getElementById('thing')
        div.appendChild(p)
    });
}