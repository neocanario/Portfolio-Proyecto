// --- Cargar los blogs desde localStorage o iniciar vacío ---
let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

// --- Mostrar todos los blogs en pantalla ---
function showBlogs() {
    const blogList = document.getElementById("blog-list");
  if (!blogList) return; // seguridad por si el elemento no existe

    let html = "";

    for (let i = 0; i < blogs.length; i++) {
    html += `
        <article class="blog-post">
        <h3>${blogs[i].title}</h3>
        <small>${blogs[i].date}</small>
        <p>${blogs[i].content}</p>
        </article>
    `;
    }

    blogList.innerHTML = html;
}

// --- Escuchar el formulario para añadir nuevo blog ---
function listenToEvents() {
    const addBlogForm = document.getElementById("add-blog-form");
    if (!addBlogForm) return;

    addBlogForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = event.target["blog-title"].value.trim();
    const content = event.target["blog-content"].value.trim();

    if (title === "" || content === "") {
        alert("Por favor, rellena todos los campos.");
        return;
    }

    const newBlog = {
        title: title,
        content: content,
        date: new Date().toLocaleDateString(),
    };

    blogs.push(newBlog);
    localStorage.setItem("blogs", JSON.stringify(blogs));

    showBlogs();
    event.target.reset(); // limpia formulario
    });
}

// --- Inicializar ---
document.addEventListener("DOMContentLoaded", () => {
    listenToEvents();
    showBlogs();
});
