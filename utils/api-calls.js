//const api_pi = "http://tumai-foodies-backend.herokuapp.com:80/"
const api_pi = "http://localhost:5000/"

// Makes api call to get recipe and shop list
export async function api_all( food_list ){
    let request_body = {
        "foodList": food_list
    };
    return fetch(api_pi + "all",
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
              body: JSON.stringify(request_body)
            })
        .then(function (response) {
          return response.json();
        })
        .catch(function (error) {
          console.log("Error: " + error);
        }); 
}
