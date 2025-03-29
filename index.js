function getPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => {
      json.forEach((elem) => {
        console.log(elem.title);
        console.log(elem.body);
        const wrapper = document.createElement("div");
        wrapper.classList.add("post_wrapper");

        wrapper.innerHTML = `
        <div class="title">Заголовок: ${elem.title}</div>
        <div class="post">Статья: ${elem.body}</div>
        `;
        container.appendChild(wrapper);
      });
    })
    .catch((err) => {
      console.log("Error!" + err);
    });
}

getPost();
