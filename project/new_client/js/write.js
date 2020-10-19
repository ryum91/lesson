const cancelBtn = document.getElementById("cancelBtn");
const saveBtn = document.getElementById("saveBtn");

const author = document.getElementById("author");
const title = document.getElementById("title");
const content = document.getElementById("content");

cancelBtn.addEventListener("click", () => {
  window.location.href = "/index.html";
});

saveBtn.addEventListener("click", () => {
  postPost(author.value, title.value, content.value).then(() => {
    alert("저장되었습니다.");
    window.location.href = "/index.html";
  });
});
