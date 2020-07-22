// Add your code here

// Test 1
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name,
                email
            })
        })

// Test 2

        .then(function (response) {
            return response.json()
        })
        .then(function (object) {
            document.body.innerHTML = object.id
        })

// Test 3

        .catch(function (error) {
            document.body.innerHTML = error.message
        });



}