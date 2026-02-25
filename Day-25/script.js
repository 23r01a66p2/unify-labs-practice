let products = [];

// Load Initial Data
function loadData() {
    products = [
        { name: "Laptop", category: "Electronics", price: 600, stock: 5 },
        { name: "Headphones", category: "Electronics", price: 200, stock: 0 },
        { name: "T-Shirt", category: "Clothing", price: 700, stock: 20 },
        { name: "Sofa", category: "Furniture", price: 1500, stock: 2 },
        { name: "Table", category: "Furniture", price: 400, stock: 0 }
    ];
    display(products);
}

// Mass Update 1: Increase Electronics price by +10 ($inc simulation)
function increaseElectronics() {
    products.forEach(product => {
        if (product.category === "Electronics") {
            product.price += 10; // $inc
        }
    });
    display(products);
}

// Mass Update 2: Set featured true if price > 500
function setFeatured() {
    products.forEach(product => {
        if (product.price > 500) {
            product.featured = true;
        }
    });
    display(products);
}

// Cleanup: Delete stock = 0
function deleteZeroStock() {
    products = products.filter(product => product.stock !== 0);
    display(products);
}

// Verify count (countDocuments simulation)
function countDocs() {
    alert("Total Documents: " + products.length);
}

// Display Function
function display(data) {
    const output = document.getElementById("output");
    output.innerHTML = "";

    if (data.length === 0) {
        output.innerHTML = "<p>No Data Available</p>";
        return;
    }

    data.forEach(product => {
        output.innerHTML += `
            <div>
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: ${product.price}</p>
                <p>Stock: ${product.stock}</p>
                <p>Featured: ${product.featured ? "Yes" : "No"}</p>
                <hr>
            </div>
        `;
    });
}