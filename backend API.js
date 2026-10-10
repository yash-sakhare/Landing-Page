fetch("http://localhost:5000/api/bills", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        customerName: "Yash",
        roomNumber: "205",
        roomCharge: 4000,
        foodCharge: 1000,
        serviceCharge: 300,
        tax: 200
    })
});