const params = new URLSearchParams(window.location.search);
const no = params.get("no");

const deleteBtn = document.getElementById("deleteBtn");
const updateBtn = document.getElementById("updateBtn");
const author = document.getElementById("author");
const title = document.getElementById("title");
const content = document.getElementById("content");

fetch(`http://localhost:8080/post/${no}`, {
    method: "GET"
})
.then(response => response.json())
.then(post => {
    author.readOnly = true;
    title.readOnly = true;
    content.readOnly = true;

    author.value = post.author;
    title.value = post.title;
    content.value = post.content;
})
.catch(() => {
    alert("존재하지 않는 게시물입니다.");
    window.location.href = "/index.html";
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
            content: content.value
        })
    })
    .then(() => {
        author.readOnly = false;
        title.readOnly = false;
        content.readOnly = false;

        deleteBtn.textContent = "저장";
        updateBtn.textContent = "취소";
        deleteBtn.id = "saveBtn"
        updateBtn.id = "cancelBtn"
    })
    .then(() => {
        saveBtn.addEventListener("click", () => {
            fetch("http://localhost:8080/post", {
                method : "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify({
                    author: author.value,
                    title: title.value,
                    content: content.value
                })
            })
            .then((response) => {
                return response.json()
            })
            .then(() => {
                alert("저장되었습니다.")
                window.location.href = "/index.html"
            })
        })
    })
    .catch((e) => {
        if(e.status === 400) {
            alert("존재하지 않는 게시물입니다.");
        } else if(e.status === 404) {
            alert("잘못된 요청입니다.");
        }
        window.location.href = "/index.html";
    });
})

deleteBtn.addEventListener("click", () => {
    fetch(`http://localhost:8080/post/${no}`, {
        method: "DELETE"
    })
    .then(()=> {
        alert("게시물이 삭제되었습니다.")
        window.location.href = "/index.html"
    })
})
