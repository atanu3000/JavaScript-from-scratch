// async functon
const weather = async () => {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("22' Degree");
        }, 2000);
    });
     
    let kolkataWeather  = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("25 Degree");
        }, 5000);
    });

    console.log("Fetching delhi weather please wait...");
    let delhiW = await delhiWeather;
    console.log("Featched delhi weaher: " + delhiW);
    console.log("Fetching kolkata weather please wait...");
    let kolkataW = await kolkataWeather;
    console.log("Fetched kolkata weather: " + kolkataW);
    return[delhiW, kolkataW];
}

// normal function
const cherry = () => {
    console.log("Hello I'm waiting for weather");
}

// main function for call the upper functions 
const mainfunction = async () => {
    console.log("Welcome to weather control room");
    let a = await weather();
    let b = await cherry();
}

mainfunction() // calling the main function 

// a.then((value) => {
//     console.log(value);
// })