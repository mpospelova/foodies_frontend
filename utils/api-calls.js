export {api_all};

const api_pi = "https://tumai-foodies-backend.herokuapp.com/"

// Makes api call to get recipe and shop list
function api_all( food_list ){
    fetch(api_pi + "/all")
        .then(function (response) {
          return response.json();
        })
        .then(function (myJson) {
          console.log(myJson);
        })
        .catch(function (error) {
          console.log("Error: " + error);
        }); 
}
