const cancelBtn = getElement("cancelBtn")
const saveBtn = getElement("saveBtn")

cancelBtn.addEventListener("click", () => {
    window.location.href = "/index.html"
})

saveBtn.addEventListener("click", () => {
    postPost(author.value, title.value, content.value)
    .then(() => {
        alert("저장되었습니다.")
        window.location.href = "/index.html"
    })
})