const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");

const commentForm = document.querySelector("#comment-form");
const emailInput = document.querySelector("#email");
const bodyInput = document.querySelector("#body");

// Load post
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

// Get all posts
async function getAllPosts() {
  const response = await fetch(url);

  console.log(response);

  const data = await response.json();

  console.log(data);

  loadingElement.classList.add("hide");

  data.map((post) => {
    const div = document.createElement("div");
    const title = document.createElement("h2");
    const body = document.createElement("p");
    const link = document.createElement("a");

    title.innerText = post.title;
    body.innerText = post.body;
    link.innerText = "Ler";
    link.setAttribute("href", `post.html?id=${post.id}`);

    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(link);
    postsContainer.appendChild(div);
  });
}

// Get individual post
async function getPost(id) {
  // Promisse porque vai ser duas requisições ao mesmo tempo
  // Um array de todas as promisses que vai executar  
  const [responsePost, responseComments] = await Promise.all([
    fetch(`${url}/${id}`),
    fetch(`${url}/${id}/comments`),
  ]);
  
  // Recebe o dados de cada response
  const dataPost = await responsePost.json();

  const dataComments = await responseComments.json();
  

  //Remove o loading da page
  loadingElement.classList.add("hide");
  // Aparece o post
  postPage.classList.remove("hide");

  const title = document.createElement("h1");
  const body = document.createElement("p");
  

  // Conteúdo dos posts 
  title.innerText = dataPost.title;
  body.innerText = dataPost.body;

  postContainer.appendChild(title);
  postContainer.appendChild(body);

  dataComments.map((comment) => {
    createComment(comment);
  });
}


// Cria os comentários
function createComment(comment) {
  const div = document.createElement("div");
  const email = document.createElement("h3");
  const commentBody = document.createElement("p");

  email.innerText = comment.email;
  commentBody.innerText = comment.body;

  div.appendChild(email);
  div.appendChild(commentBody);
  commentsContainer.appendChild(div);
}

// Insert a comment
async function postComment(comment) {
  const response = await fetch(url, {
    method: "POST",
    body: comment,
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();

  createComment(data);
}

if (!postId) {
  getAllPosts();
} else {
  getPost(postId);

  commentForm.addEventListener("submit", (e) => {
    //Usar pra enviar apenas com o fetch
    e.preventDefault();

    let comment = {
      email: emailInput.value,
      body: bodyInput.value,
    };

    comment = JSON.stringify(comment);

    postComment(comment);
  });
}