const format = dateFns.format;

const writeBtn = document.getElementById("writeBtn");
const tableBody = document.getElementById("tableBody");

writeBtn.addEventListener("click", () => {
  window.location.href = "/write.html";
});

getPosts().then((postarr) => {
  postarr.map((post) => {
    const tr = document.createElement("tr");
    const no = document.createElement("td");
    const author = document.createElement("td");
    const title = document.createElement("td");
    const date = document.createElement("td");

    no.textContent = post.no;
    author.textContent = post.author;
    title.textContent = post.title;
    date.textContent = format(post.date, "YYYY-MM-DD HH:mm:ss");

    tr.appendChild(no);
    tr.appendChild(author);
    tr.appendChild(title);
    tr.appendChild(date);
    tableBody.appendChild(tr);

    tr.addEventListener("click", () => {
      location.href = `/view.html?no=${post.no}`;
    });

    return tr;
  });
});
