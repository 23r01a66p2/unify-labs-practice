
const State = {
  coins: [],
  favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  theme: localStorage.getItem("theme") || "light",
  showFavorites: false
};

document.body.className = State.theme;


const container = document.getElementById("cardContainer");
const loader = document.getElementById("loader");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const themeToggle = document.getElementById("themeToggle");
const favoritesBtn = document.getElementById("favoritesBtn");
const notification = document.getElementById("notification");

const totalMarketCapEl = document.getElementById("totalMarketCap");
const highestPriceEl = document.getElementById("highestPrice");
const lowestPriceEl = document.getElementById("lowestPrice");

async function fetchCoins() {
  try {
    loader.classList.remove("hidden");

    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=${sortSelect.value}&per_page=20&page=1`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Network error");

    const data = await res.json();
    State.coins = data;

    updateAnalytics();
    renderCoins(getVisibleCoins());

  } catch (err) {
    notification.textContent = "⚠ Unable to load live data.";
  } finally {
    loader.classList.add("hidden");
  }
}
function updateAnalytics() {
  const totalCap = State.coins.reduce((sum,c)=>sum+c.market_cap,0);
  const prices = State.coins.map(c=>c.current_price);

  totalMarketCapEl.textContent = "$" + totalCap.toLocaleString();
  highestPriceEl.textContent = "$" + Math.max(...prices);
  lowestPriceEl.textContent = "$" + Math.min(...prices);
}

function renderCoins(coins) {
  container.innerHTML = "";

  coins.forEach(coin => {
    const changeClass = coin.price_change_percentage_24h >= 0 ? "price-up" : "price-down";
    const isFav = State.favorites.includes(coin.id);

    container.innerHTML += `
      <div class="card">
        <h3>${coin.name}</h3>
        <p class="${changeClass}">
          $${coin.current_price}
        </p>
        <p>24h: ${coin.price_change_percentage_24h.toFixed(2)}%</p>
        <button data-id="${coin.id}">
          ${isFav ? "★ Remove" : "☆ Favorite"}
        </button>
      </div>
    `;
  });
}
function getVisibleCoins() {
  let coins = [...State.coins];

  if (State.showFavorites) {
    coins = coins.filter(c => State.favorites.includes(c.id));
  }

  const searchValue = searchInput.value.toLowerCase();
  coins = coins.filter(c => c.name.toLowerCase().includes(searchValue));

  if (sortSelect.value === "price_desc") {
    coins.sort((a,b)=>b.current_price - a.current_price);
  }
  if (sortSelect.value === "name_asc") {
    coins.sort((a,b)=>a.name.localeCompare(b.name));
  }

  return coins;
}

// ============== EVENTS ==================

searchInput.addEventListener("input", () => {
  renderCoins(getVisibleCoins());
});

sortSelect.addEventListener("change", fetchCoins);

container.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.dataset.id;

    if (State.favorites.includes(id)) {
      State.favorites = State.favorites.filter(f => f !== id);
    } else {
      State.favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(State.favorites));
    renderCoins(getVisibleCoins());
  }
});

favoritesBtn.addEventListener("click", () => {
  State.showFavorites = !State.showFavorites;
  renderCoins(getVisibleCoins());
});

themeToggle.addEventListener("click", () => {
  State.theme = State.theme === "light" ? "dark" : "light";
  document.body.className = State.theme;
  localStorage.setItem("theme", State.theme);
});

// Initial Load
fetchCoins();