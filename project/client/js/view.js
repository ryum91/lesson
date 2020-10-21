const updateBtn = getElement("updateBtn");
const deleteBtn = getElement("deleteBtn");

getPost(no)
.then(post => {
    author.value = post.author;
    title.value = post.title;
    content.value = post.content;
});

deleteBtn.addEventListener("click", () => {
    fetch(`${HOST}/post/${no}`, {
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