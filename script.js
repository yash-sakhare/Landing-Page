let totalAmount = 0;


// ================= GENERATE BILL =================

function generateBill() {

    const customerName =
        document.getElementById("customerName").value || "Guest";

    const roomNumber =
        document.getElementById("roomNumber").value || "---";

    const roomCharge =
        Number(document.getElementById("roomCharge").value) || 0;

    const foodCharge =
        Number(document.getElementById("foodCharge").value) || 0;

    const serviceCharge =
        Number(document.getElementById("serviceCharge").value) || 0;

    const tax =
        Number(document.getElementById("tax").value) || 0;


    // Calculate total

    totalAmount =
        roomCharge +
        foodCharge +
        serviceCharge +
        tax;


    // Display customer information

    document.getElementById("billCustomer").textContent =
        customerName;

    document.getElementById("billRoom").textContent =
        roomNumber;


    // Display charges

    document.getElementById("billRoomCharge").textContent =
        "₹" + roomCharge.toLocaleString("en-IN");

    document.getElementById("billFoodCharge").textContent =
        "₹" + foodCharge.toLocaleString("en-IN");

    document.getElementById("billServiceCharge").textContent =
        "₹" + serviceCharge.toLocaleString("en-IN");

    document.getElementById("billTax").textContent =
        "₹" + tax.toLocaleString("en-IN");


    // Display grand total

    document.getElementById("grandTotal").textContent =
        "₹" + totalAmount.toLocaleString("en-IN");


    // Payment section

    document.getElementById("paymentAmount").textContent =
        "₹" + totalAmount.toLocaleString("en-IN");


    // Reset payment status

    document.getElementById("paymentStatus").textContent =
        "Unpaid";


    alert("Bill generated successfully!");
}



// ================= PAYMENT =================

function makePayment() {

    if (totalAmount <= 0) {

        alert("Please generate the bill first.");

        return;
    }


    const selectedPayment =
        document.querySelector(
            'input[name="payment"]:checked'
        );


    if (!selectedPayment) {

        alert("Please select a payment method.");

        return;
    }


    const paymentMethod =
        selectedPayment.value;


    document.getElementById("paymentStatus").textContent =
        "Paid - " + paymentMethod;


    document.querySelector(".invoice-status").textContent =
        "PAID";


    document.querySelector(".invoice-status").style.background =
        "#e9f8ef";


    document.querySelector(".invoice-status").style.color =
        "#21864a";


    alert(
        "Payment successful using " +
        paymentMethod +
        "!"
    );


    printBill();
}



// ================= PRINT BILL =================

function printBill() {

    setTimeout(() => {

        window.print();

    }, 500);

}