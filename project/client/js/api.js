const HOST = "http://localhost:8080"

const getPosts = function() {
    return fetch(`${HOST}/posts`, {
    method: "GET"
})
    .then(response => response.json())
}

const getPost = function(no) {
    return fetch(`${HOST}/post/${no}`, {
    method: "GET"
})
    .then(response => response.json())
    .catch(() => {
        alert("존재하지 않는 게시물입니다.");
        window.location.href = "/index.html";
    })
}

const postPost = function({author, title, content}) {
    return fetch(`${HOST}/post`, {
        method : "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body : JSON.stringify({
            author,
            title,
            content,
        })
    }).then(response => response.json())
}

const updatePost = function(no) {
    return fetch(`${HOST}/post/${no}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            author: author.value,
            title: title.value,
            content: content.value
        })
    })
}

const deletePost = function(no) {
    return fetch(`${HOST}/post/${no}`, {
        method: "DELETE"
    })
}