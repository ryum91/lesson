const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click", () => {
  window.location.href = "/index.html";
});

const author = document.getElementById("author");
const title = document.getElementById("title");
const content = document.getElementById("content");

const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", () => {
  fetch("http://localhost:8080/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      author: author.value,
      title: title.value,
      content: content.value,
    }),
  });
});
