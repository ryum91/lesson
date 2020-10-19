const params = new URLSearchParams(window.location.search);
const no = params.get("no");

const author = document.getElementById("author");
const title = document.getElementById("title");
const content = document.getElementById("content");

getPost(no).then((post) => {
  author.value = post.author;
  title.value = post.title;
  content.value = post.content;
});

document.getElementById("deleteBtn").addEventListener("click", () => {
  fetch(`http://localhost:8080/post/${no}`, {
    method: "DELETE",
  }).then(() => {
    alert("게시물이 삭제되었습니다.");
    window.location.href = "/index.html";
  });
});

document.getElementById("updateBtn").addEventListener("click", () => {
  window.location.href = `/update.html?no=${no}`;
});
