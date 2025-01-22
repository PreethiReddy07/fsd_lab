// Question 5: In a payment processing system, you need to:
// Authenticate the user, verify if the payment method is valid, Process the
// payment, Update the user’s account balance, and notify the user of the
// payment result via email.
// Design this payment processing system using callbacks to ensure each step
// happens in order?

function userAuth(userId, callback) {
    setTimeout(() => {
        console.log("User authenticated.");
        callback(null, userId); 
    }, 1000);
}

function verifyPayment(callback) {
    setTimeout(() => {
        console.log("Payment method for user verified.");
        callback(null); 
    }, 4000);
}

function processPayment(callback) {
    setTimeout(() => {
        console.log("Payment processed.");
        callback(null); 
    }, 500);
}

function updatAcc(callback) {
    setTimeout(() => {
        console.log("User account balance updated.");
        callback(null);
    }, 2000);
}

function notifyUser(userId, callback) {
    setTimeout(() => {
        console.log(`User ${userId} notified of payment result.`);
        callback(null); 
    }, 500);
}

function processPaymentPipeline(userId) {
    userAuth(userId, (err, userId) => {
        if (err) return console.error("Authentication failed:", err);

        verifyPayment((err) => {
            if (err) return console.error("Payment verification failed:", err);

            processPayment((err) => {
                if (err) return console.error("Payment processing failed:", err);

                updatAcc((err) => {
                    if (err) return console.error("Account update failed:", err);

                    notifyUser(userId, (err) => {
                        if (err) return console.error("Notification failed:", err);

                        console.log("Payment process completed successfully.");
                    });
                });
            });
        });
    });
}

processPaymentPipeline("user123");
