function connectDB() {
    const message = document.getElementById("message");

    message.style.color = "black";
    message.innerText = "Connecting to mongodb://localhost:27017...";

    // Simulating connection delay
    setTimeout(() => {
        message.style.color = "green";
        message.innerText = "Database connected successfully";
        console.log("Database connected successfully");
    }, 1500);
}