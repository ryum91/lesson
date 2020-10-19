const params = new URLSearchParams(window.location.search);
const no = params.get("no");

const updateBtn = document.getElementById("updateBtn");
const deleteBtn = document.getElementById("deleteBtn");
const author = document.getElementById("author");
const title = document.getElementById("title");
const content = document.getElementById("content");

fetch(`http://localhost:8080/post/${no}`, {
    method: "GET"
})
.then(response => response.json())
.then(post => {
    author.value = post.author;
    title.value = post.title;
    content.value = post.content;
})
.catch(() => {
    alert("존재하지 않는 게시물입니다.");
    window.location.href = "/index.html";
});

deleteBtn.addEventListener("click", () => {
    fetch(`http://localhost:8080/post/${no}`, {
        method: "DELETE"
    })
    .then(()=> {
        alert("게시물이 삭제되었습니다.")
        window.location.href = "/index.html"
    })
})

updateBtn.addEventListener("click", () => {
    window.location.href = `/update.html?no=${no}`
})