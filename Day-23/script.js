// Load existing interns from localStorage
let interns = JSON.parse(localStorage.getItem("interns")) || [];

// Display interns when page loads
window.onload = displayInterns;

function addIntern() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const joinedDate = document.getElementById("joinedDate").value;

  if (!name || !role || !joinedDate) {
    alert("Please fill all fields");
    return;
  }

  const intern = {
    name: name,
    role: role,
    joinedDate: joinedDate
  };

  interns.push(intern);

  // Save to localStorage (acts like database)
  localStorage.setItem("interns", JSON.stringify(interns));

  displayInterns();

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("role").value = "";
  document.getElementById("joinedDate").value = "";
}

function displayInterns() {
  const list = document.getElementById("internList");
  list.innerHTML = "";

  interns.forEach((intern, index) => {
    list.innerHTML += `
      <div class="card">
        <h3>${intern.name}</h3>
        <p><strong>Role:</strong> ${intern.role}</p>
        <p><strong>Joined:</strong> ${intern.joinedDate}</p>
        <button onclick="deleteIntern(${index})">Delete</button>
      </div>
    `;
  });
}

function deleteIntern(index) {
  interns.splice(index, 1);
  localStorage.setItem("interns", JSON.stringify(interns));
  displayInterns();
}