const API = "/api/posts";

const postsContainer = document.getElementById("posts");
const saveBtn = document.getElementById("saveBtn");
const themeToggle = document.getElementById("themeToggle");

const titleInput = document.getElementById("title");
const categoryInput = document.getElementById("category");
const contentInput = document.getElementById("content");
const postIdInput = document.getElementById("postId");
async function loadPosts() {
  const res = await fetch(API);
  const posts = await res.json();

  postsContainer.innerHTML = "";

  posts.forEach(post => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${post.title}</h3>
      <div class="category">${post.category}</div>
      <p>${post.content.substring(0, 100)}...</p>
      <div class="actions">
        <button onclick="editPost('${post._id}')">Edit</button>
        <button class="delete" onclick="deletePost('${post._id}')">Delete</button>
      </div>
    `;

    postsContainer.appendChild(card);
  });
}
saveBtn.addEventListener("click", async () => {
  const id = postIdInput.value;
  const data = {
    title: titleInput.value,
    category: categoryInput.value,
    content: contentInput.value
  };

  if (!data.title || !data.content) {
    alert("Title and Content required!");
    return;
  }

  if (id) {
    await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  } else {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }

  clearForm();
  loadPosts();
});
async function deletePost(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  loadPosts();
}
async function editPost(id) {
  const res = await fetch(`${API}/${id}`);
  const post = await res.json();

  titleInput.value = post.title;
  categoryInput.value = post.category;
  contentInput.value = post.content;
  postIdInput.value = post._id;

  window.scrollTo({ top: 0, behavior: "smooth" });
}
function clearForm() {
  titleInput.value = "";
  categoryInput.value = "";
  contentInput.value = "";
  postIdInput.value = "";
}
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
loadPosts();