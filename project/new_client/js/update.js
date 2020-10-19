const params = new URLSearchParams(window.location.search);
const no = params.get("no");

const updateBtn = document.getElementById("updateBtn");
const cancelBtn = document.getElementById("cancelBtn");
const author = document.getElementById("author");
const title = document.getElementById("title");
const content = document.getElementById("content");

fetch(`http://localhost:8080/post/${no}`, {
  method: "GET",
})
  .then((response) => response.json())
  .then((post) => {
    author.value = post.author;
    title.value = post.title;
    content.value = post.content;
  });

updateBtn.addEventListener("click", () => {
  fetch(`http://localhost:8080/post/${no}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      author: author.value,
      title: title.value,
      content: content.value,
    }),
  })
    .then(() => {
      alert("게시물이 수정되었습니다.");
      window.location.href = "/index.html";
    })
    .catch((response) => {
      if (response.status === 400) {
        alert("잘못된 요청입니다.");
      } else if (response.status === 404) {
        alert("존재하지 않는 게시물입니다.");
      }
      window.location.href = "/index.html";
    });
});

cancelBtn.addEventListener("click", () => {
  location.href = `/view.html?no=${no}`;
});
