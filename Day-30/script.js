const products = [
  {
    id: 1,
    name: "Titan Neo Analog Watch",
    price: 4999,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    id: 2,
    name: "Titan Edge Slim Watch",
    price: 7999,
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa"
  },
  {
    id: 3,
    name: "Titan Automatic Leather",
    price: 10999,
    image: "https://images.unsplash.com/photo-1518544801976-3e1887a27c2d"
  },
  {
    id: 4,
    name: "Titan Ceramic Premium",
    price: 12999,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314"
  }
];

let cart = [];

const productGrid = document.getElementById("product-grid");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalDisplay = document.getElementById("total");
function displayProducts(items) {
  productGrid.innerHTML = "";

  items.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${product.id})">
        Add to Cart
      </button>
    `;

    productGrid.appendChild(div);
  });
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  updateCart();
}
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.classList.add("cart-item");

    div.innerHTML = `
      <div class="cart-item-info">
        <p class="cart-name">${item.name}</p>
        <p class="cart-price">₹${item.price}</p>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${index})">
        Remove
      </button>
      <hr>
    `;

    cartItems.appendChild(div);
  });

  totalDisplay.textContent = total;
  cartCount.textContent = cart.length;
}
function removeFromCart(index) {
  cart.splice(index, 1);  
  updateCart();           
}
function toggleCart() {
  document.getElementById("cart").classList.add("open");
  document.getElementById("overlay").classList.add("active");
}

function closeCart() {
  document.getElementById("cart").classList.remove("open");
  document.getElementById("overlay").classList.remove("active");
}
document.getElementById("search").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  displayProducts(filtered);
});
function checkout() {
  alert("Order Placed Successfully!");
  cart = [];
  updateCart();
}

displayProducts(products);