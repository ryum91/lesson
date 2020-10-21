const getElement = function(id) {
    return document.getElementById(id)
}

const create = function(elem) {
    return document.createElement(elem)
}

const append = function(parent,childArr) {
    return childArr.map(child => parent.appendChild(child))
}

const author = getElement("author")
const title = getElement("title")
const content = getElement("content")

const params = new URLSearchParams(window.location.search);
const no = params.get("no");

