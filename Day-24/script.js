let products = [];

// Bulk Population
function insertProducts() {
    products = [
        { name: "Laptop", category: "Electronics", price: 60000, stock: 10 },
        { name: "Mobile", category: "Electronics", price: 25000, stock: 15 },
        { name: "T-Shirt", category: "Clothing", price: 800, stock: 50 },
        { name: "Jeans", category: "Clothing", price: 1500, stock: 30 },
        { name: "Sofa", category: "Furniture", price: 20000, stock: 5 },
        { name: "Table", category: "Furniture", price: 7000, stock: 8 }
    ];

    display(products);
}

// Query 1: Find Electronics
function findElectronics() {
    const result = products.filter(p => p.category === "Electronics");
    display(result);
}

// Query 2: Sort by price (descending) & limit 2
function sortByPrice() {
    const result = [...products]
        .sort((a, b) => b.price - a.price)
        .slice(0, 2);

    display(result);
}

// Display Function
function display(data) {
    const output = document.getElementById("output");
    output.innerHTML = "";

    if (data.length === 0) {
        output.innerHTML = "<p>No Data Found</p>";
        return;
    }

    data.forEach(product => {
        output.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: ₹${product.price}</p>
                <p>Stock: ${product.stock}</p>
                <hr>
            </div>
        `;
    });
}