app.post("/api/bills", async (req, res) => {

    const {
        customerName,
        roomNumber,
        roomCharge,
        foodCharge,
        serviceCharge,
        tax
    } = req.body;

    const total =
        roomCharge +
        foodCharge +
        serviceCharge +
        tax;

    // Save data to MySQL here

    res.json({
        message: "Bill generated successfully",
        total: total
    });
});