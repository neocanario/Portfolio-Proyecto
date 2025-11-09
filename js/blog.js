// --- Cargar los blogs desde localStorage o iniciar vacío ---
let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

// --- Mostrar todos los blogs en pantalla ---
function showBlogs() {
  const BLOG_LIST = document.getElementById("blog-list");
  if (!BLOG_LIST) return; // seguridad por si el elemento no existe

  let html = "";

  for (let i = 0; i < blogs.length; i++) {
    html += `
            <article class="blog-post" data-index="${i}">
                <h3>${blogs[i].title}</h3>
                <small>${blogs[i].date}</small>
                <p>${blogs[i].content}</p>
                <div class="blog-actions">
                    <button class="btn-edit" onclick="editBlog(${i})"> Editar</button>
                    <button class="btn-delete" onclick="deleteBlog(${i})"> Eliminar</button>
                </div>
            </article>
        `;
  }

  BLOG_LIST.innerHTML = html;
}

// --- Escuchar el formulario para añadir nuevo blog ---
function listenToEvents() {
  const ADD_BLOG_FORM = document.getElementById("add-blog-form");
  if (!ADD_BLOG_FORM) return;

  ADD_BLOG_FORM.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = event.target["blog-title"].value.trim();
    const content = event.target["blog-content"].value.trim();

    if (title === "" || content === "") {
      alert("Por favor, rellena todos los campos.");
      return;
    }

    const NEW_BLOG = {
      title: title,
      content: content,
      date: new Date().toLocaleDateString(),
    };

    blogs.push(NEW_BLOG);
    localStorage.setItem("blogs", JSON.stringify(blogs));

    showBlogs();
    event.target.reset(); // limpia formulario
  });
}

// --- Eliminar un blog ---
function deleteBlog(index) {
  if (confirm("¿Estás seguro de que quieres eliminar este blog?")) {
    blogs.splice(index, 1);
    localStorage.setItem("blogs", JSON.stringify(blogs));
    showBlogs();
  }
}

// --- Editar un blog ---
function editBlog(index) {
  const blog = blogs[index];

  const NEW_TITLE = prompt("Editar título:", blog.title);
  if (NEW_TITLE === null) return; // cancelado

  const NEW_CONTENT = prompt("Editar contenido:", blog.content);
  if (NEW_CONTENT === null) return; // cancelado

  if (NEW_TITLE.trim() === "" || NEW_CONTENT.trim() === "") {
    alert("Por favor, rellena todos los campos.");
    return;
  }

  blogs[index].title = NEW_TITLE.trim();
  blogs[index].content = NEW_CONTENT.trim();
  blogs[index].date = new Date().toLocaleDateString() + " (editado)";

  localStorage.setItem("blogs", JSON.stringify(blogs));
  showBlogs();
}

// --- Inicializar ---
document.addEventListener("DOMContentLoaded", () => {
  listenToEvents();
  showBlogs();
});
