const writeBtn = document.getElementById("writeBtn")
const tableBody = document.getElementById("tableBody")

writeBtn.addEventListener("click", () => {
    window.location.href = "/write.html"
})

fetch("http://localhost:8080/posts", {
    method: "GET"
})
.then((response) => {
    return response.json()
})
.then((postarr) => {
    postarr.map((post) => {
        const tr = document.createElement("tr")
        const no = document.createElement("td")
        const author = document.createElement("td")
        const title = document.createElement("td")
        const date = document.createElement("td")
        const newDate = new Date(post.date)

        no.textContent = post.no
        author.textContent = post.author
        title.textContent = post.title
        date.textContent = `${newDate.getFullYear()}. ${newDate.getMonth()+1}. ${newDate.getDate()}. ${newDate.getHours()}:${newDate.getMinutes()}`

        tr.appendChild(no)
        tr.appendChild(author)
        tr.appendChild(title)
        tr.appendChild(date)
        tableBody.appendChild(tr)
        
        return tr
    })
})