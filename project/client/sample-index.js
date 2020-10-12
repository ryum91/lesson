const tableBody = document.getElementById("tableBody");

const result = fetch("http://localhost:8080/posts", {
  method: "GET",
});

result
  // 서버에서 받아온 Response 를 JSON 으로 변환
  .then((response) => {
    return response.json();
  })
  // 변환된 JSON 을 DOM 으로 변환해서 HTML 에 추가
  .then((postArr) => {
    for (let i = 0; i < postArr.length; i++) {
      const post = postArr[i];

      const no = document.createElement("td");
      const author = document.createElement("td");
      const title = document.createElement("td");
      const date = document.createElement("td");

      no.textContent = post.no;
      author.textContent = post.author;
      title.textContent = post.title;
      date.textContent = post.date;

      const tr = document.createElement("tr");
      tr.appendChild(no);
      tr.appendChild(author);
      tr.appendChild(title);
      tr.appendChild(date);

      const tbody = document.getElementById("tableBody");
      tbody.appendChild(tr);
    }
  });

const writeButton = document.getElementById("writeButton");
writeButton.addEventListener("click", () => {
  window.location.href = "http://localhost:8000/write.html";
});
