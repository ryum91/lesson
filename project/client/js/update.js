const updateBtn = getElement("updateBtn");
const cancelBtn = getElement("cancelBtn");

getPost(no)
.then(post => {
    author.value = post.author;
    title.value = post.title;
    content.value = post.content;
})

updateBtn.addEventListener("click", () => {
    updatePost(no)
    .then(() => {
        alert("게시물이 수정되었습니다.")
        window.location.href = "/index.html"
    })
    .catch((response) => {
        let message = (response.status === 400) ? "잘못된 요청입니다." : "존재하지 않는 게시물입니다.";
        alert(message);
        window.location.href = "/index.html";
    });
})

cancelBtn.addEventListener("click", () => {
    window.location.href = `/view.html?no=${no}`;
})