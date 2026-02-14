
let MASTER_PIN = "9999";
let attempts = 3;
let authenticated = false;

while (attempts > 0) {
    let inputPin = prompt("Enter MASTER PIN:");

    if (inputPin === MASTER_PIN) {
        authenticated = true;
        break;
    } else {
        attempts--;
        console.log("ACCESS DENIED. Attempts left: " + attempts);
    }
}

if (!authenticated) {
    console.log("!!! SYSTEM SELF-DESTRUCT INITIATED !!!");
    throw new Error("SYSTEM TERMINATED"); 
}

let banner = "";
banner += "====================================\n";
banner += "     Welcome to Virtual Core v1.0   \n";
banner += "====================================\n";

console.log(banner);


let balance = 1000;
const UNIT_PRICE = 50;
const SECRET_WORD = "quantum";


while (true) {

    let command = prompt("[V-CORE]> Type command: (bank, shop, vault, exit)");

    switch (command) {

        case "bank":

            while (true) {
                let bankCmd = prompt("Bank Module: (deposit, withdraw, balance, back)");

                if (bankCmd === "deposit") {
                    let amount = parseFloat(prompt("Enter deposit amount:"));
                    if (!isNaN(amount) && amount > 0) {
                        balance += amount;
                        console.log("Deposited: $" + amount);
                    }
                }

                else if (bankCmd === "withdraw") {
                    let amount = parseFloat(prompt("Enter withdrawal amount:"));
                    if (amount > balance) {
                        console.log("ERROR: INSUFFICIENT FUNDS");
                    } else if (!isNaN(amount) && amount > 0) {
                        balance -= amount;
                        console.log("Withdrawn: $" + amount);
                    }
                }

                else if (bankCmd === "balance") {
                    console.log("Current Balance: $" + balance);
                }

                else if (bankCmd === "back") {
                    break;
                }

                else {
                    console.log("Invalid Bank Command.");
                }
            }

            break;

        case "shop":

            let quantity = parseInt(prompt("Enter quantity of items:"));

            if (!isNaN(quantity) && quantity > 0) {

                let discount = 0;

                if (quantity <= 5) {
                    discount = 0;
                } 
                else if (quantity <= 10) {
                    discount = 0.10;
                } 
                else {
                    discount = 0.20;
                }

                let total = quantity * UNIT_PRICE;
                let finalPrice = total - (total * discount);

                console.log("Discount Applied: " + (discount * 100) + "%");
                console.log("Final Price: $" + finalPrice);

                if (finalPrice > balance) {
                    console.log("TRANSACTION FAILED: INSUFFICIENT FUNDS");
                } else {
                    balance -= finalPrice;
                    console.log("Purchase Successful!");
                    console.log("Remaining Balance: $" + balance);
                }
            }

            break;
        case "vault":

            console.log("Hint: It relates to advanced physics & computing.");

            let guess = prompt("Enter Secret Word:");

            if (guess === SECRET_WORD) {
                console.log("ACCESS GRANTED!");
                console.log("Secret Message: 🚀 Welcome to the hidden layer of Virtual Core.");
            } else {
                console.log("ACCESS DENIED. Returning to Main Menu.");
            }

            break;


        case "exit":
            console.log("Shutting down Virtual Core...");
            break;

        default:
            console.log("Unknown Command.");
    }

    if (command === "exit") {
        break;
    }
}