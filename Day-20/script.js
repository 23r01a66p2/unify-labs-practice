const fetchBtn = document.getElementById("fetchBtn");
const spinner = document.getElementById("spinner");
const postsContainer = document.getElementById("posts");

fetchBtn.addEventListener("click", fetchPosts);

async function fetchPosts() {
    postsContainer.innerHTML = "";
    spinner.style.display = "block";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
        const data = await response.json();

        spinner.style.display = "none";

        data.forEach(post => {
            const div = document.createElement("div");
            div.classList.add("post");
            div.innerHTML = `
                <strong>Post #${post.id}</strong>
                <p>${post.title}</p>
            `;
            postsContainer.appendChild(div);
        });

    } catch (error) {
        spinner.style.display = "none";
        postsContainer.innerHTML = "<p>Error fetching data.</p>";
    }
}