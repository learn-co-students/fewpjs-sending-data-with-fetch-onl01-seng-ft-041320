// Add your code here
function submitData(){
    let postData = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        name: "Steve",
        email: "steve@steve.com"}
    )
};
  fetch("http://localhost:3000/users", postData)
    .then(function(response){
      return response.json();
    })
    .then(function(object){
        document.write(object.id);
    });
};


// document.addEventListener("DOMContentLoaded", function () {
//     submitData();
//    })

//Challlenges/test
//In submitData, write a valid POST request to http://localhost:3000/users using fetch(). [x]
//This request should include: The destination URL
//Headers for 'Content-Type' and 'Accept' set to 'application/json'[x]
//A body with the name and email passed in as arguments to `submitData` as keys in an obj [x] 
//This object should then be stringified. [x]
//TEST 2
//Use then() call to access the Response object and 
//use its built in json() method to parse the contents of the body property. [x]
//Use a second then() to access this newly converted object. 
//calling submitData in the console should cause an id number to appear on the page.[]