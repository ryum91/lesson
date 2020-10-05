const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

const database = [
  {
    no: 1,
    author: "홍길동",
    title: "제목입니다.",
    content: "내용입니다.",
    date: 1592972485222,
  },
  {
    no: 2,
    author: "짱구",
    title: "안녕하세요",
    content: "짱구입니다.",
    date: 1593652261222,
  },
];

// Post 목록 조회
app.get("/posts", (req, res) => {
  res.status(200).json(database);
});

// 특정 Post 조회
app.get("/post/:no", (req, res) => {
  const board = database.find((data) => data.no === Number(req.params.no));
  if (board) {
    res.status(200).json(board);
  } else {
    res.sendStatus(404);
  }
});

// Post 추가
app.post("/post", (req, res) => {
  const body = req.body;
  if ("author" in body && "title" in body && "content" in body) {
    const no = database.reduce((max, data) => {
      if (data.no > max) {
        return data.no;
      } else {
        return max;
      }
    }, 0);

    database.push({
      no: no + 1,
      author: body.author,
      title: body.title,
      content: body.content,
      date: new Date().getTime(),
    });

    res.status(200).json({ no: no + 1 });
  } else {
    res.sendStatus(400);
  }
});

// Post 수정
app.put("/post/:no", (req, res) => {
  const body = req.body;
  const findIndex = database.findIndex(
    (data) => data.no === Number(req.params.no)
  );

  if (findIndex === -1) {
    res.sendStatus(404);
    return;
  }

  if ("author" in body && "title" in body && "content" in body) {
    database[findIndex] = {
      ...database[findIndex],
      author: body.author,
      title: body.title,
      content: body.content,
      date: new Date().getTime(),
    };

    res.sendStatus(200);
  } else {
    res.sendStatus(400);
  }
});

// Post 삭제
app.delete("/post/:no", (req, res) => {
  const findIndex = database.findIndex(
    (data) => data.no === Number(req.params.no)
  );
  if (findIndex !== -1) {
    database.splice(findIndex, 1);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log("Start server");
});
