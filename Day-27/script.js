const baseURL = "http://localhost:3000/products";
async function addProduct() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const stock = document.getElementById("stock").value;

    const response = await fetch(baseURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, price, stock })
    });

    const data = await response.json();
    alert("Product Added!");
    console.log(data);
}
async function updateStock() {
    const id = document.getElementById("updateId").value;
    const stock = document.getElementById("newStock").value;

    const response = await fetch(`${baseURL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ stock })
    });

    const data = await response.json();
    alert("Stock Updated!");
    console.log(data);
}
async function deleteProduct() {
    const id = document.getElementById("deleteId").value;

    const response = await fetch(`${baseURL}/${id}`, {
        method: "DELETE"
    });

    const data = await response.json();
    alert("Product Deleted!");
    console.log(data);
}