// Add your code here
let userData = {
    name: "John",
    email: "john@gmail.com"
};
let postData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify(userData)
};
function submitData(){
  fetch("http://localhost:3000/users", postData);
};
//Challlenges/test
//In submitData, write a valid POST request to http://localhost:3000/users using fetch(). 
//This request should include: The destination URL
//Headers for 'Content-Type' and 'Accept' set to 'application/json'[]
//A body with the name and email passed in as arguments to `submitData` as keys in an obj [] 
//This object should then be stringified. []
//