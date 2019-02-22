const token = "";

function NasaRequest(sol) {
    function fetchJson(url) {
        return fetch(url)
            .then(request => request.text())
            .then(text => {
                return JSON.parse(text);
            })
            .catch(error => {
                console.log(`ERROR: ${error.stack}`);
            });
    }

fetchJson('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+ sol+ '&api_key=aegrAXwGOlOK7jhBlV65Nst2fFGk7bzTAmi8Ho5R')
    .then(obj => console.log(obj));

if (sol > 2075) {
    sol--;
    NasaRequest(sol);
}

};

async function init() {
    /*
      - current sun: 2080
      - limit requests: false
      - frecuency: 1000ms
    */
    const currentValue = await NasaRequest(2080, false, 1000);
    console.log("currentValue:", currentValue);
}
init();