// Question 4: Write a function fetchDataWithCallback that simulates fetching
// data from an API with a delay. Implement error handling in the callback,
// where the callback can receive either a successful response or an error
// message. Test the function by simulating both success and failure scenarios.

function fetchDataWithCallback(success = true, callback) {    
    setTimeout(() => {
        if (success) {            
            const data = { message: "Data fetched successfully!" };
            callback(null, data);
        } else {            
            const error = "Failed to fetch data.";
            callback(error, null);
        }
    }, 2000); 
}

fetchDataWithCallback(true, (error, data) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Success:", data);
    }
});

fetchDataWithCallback(false, (error, data) => {
    if (error) {
        console.log("Error:", error);
    } else {
        console.log("Success:", data);
    }
});