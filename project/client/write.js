const cancelBtn = document.getElementById("cancelBtn")
const saveBtn = document.getElementById("saveBtn")

const author = document.getElementById("author")
const title = document.getElementById("title")
const content = document.getElementById("content")

cancelBtn.addEventListener("click", () => {
    window.location.href = "/index.html"
})

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