const format = dateFns.format

const writeBtn = getElement("writeBtn")
const tableBody = getElement("tableBody")

writeBtn.addEventListener("click", () => {
    window.location.href = "/write.html"
})

getPosts()
.then((postarr) => {
    postarr.map((post) => {
        const tr = create("tr")
        const no = create("td");
        const author = create("td");
        const title = create("td");
        const date = create("td");

        no.textContent = post.no;
        author.textContent = post.author;
        title.textContent = post.title;
        date.textContent = format(post.date, 'YYYY-MM-DD HH:MM:SS')

        append(tr, [no, author, title, date])
        tableBody.appendChild(tr);

        tr.addEventListener("click", () => {
            window.location.href = `/view.html?no=${post.no}`;
        });
        
        return tr;
    })
})