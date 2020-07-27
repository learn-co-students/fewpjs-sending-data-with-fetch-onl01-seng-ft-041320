function submitData(name, email) {
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
    return fetch("http://localhost:3000/users", configObj).then(response => response.json()).then(obj => updateDom(obj.id)).catch(error => updateDom(error.message));
}

function updateDom(str) {
    let pElement = document.createElement("p");
    pElement.innerHTML = str;
    document.getElementsByTagName("body")[0].append(pElement);
}