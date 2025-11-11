/**
 * Sistema CRUD para el blog usando localStorage
 * Gestiona la creación, lectura, actualización y eliminación de entradas de blog
 */

document.addEventListener("DOMContentLoaded", initBlogSystem);

// ============================================================================
// CONSTANTES
// ============================================================================

const STORAGE_KEY = "blogs";

// ============================================================================
// ELEMENTOS DOM
// ============================================================================

let ADD_BLOG_FORM;
let BLOG_LIST;
let BLOG_TITLE;
let BLOG_CONTENT;

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

/**
 * Inicializa el sistema de blog
 */
function initBlogSystem() {
  // Obtener elementos del DOM
  ADD_BLOG_FORM = document.getElementById("add-blog-form");
  BLOG_LIST = document.getElementById("blog-list");
  BLOG_TITLE = document.getElementById("blog-title");
  BLOG_CONTENT = document.getElementById("blog-content");

  // Verificar que los elementos existen
  if (!ADD_BLOG_FORM || !BLOG_LIST || !BLOG_TITLE || !BLOG_CONTENT) {
    console.error("Error: No se encontraron los elementos del blog");
    return;
  }

  // Cargar blogs existentes
  loadBlogs();

  // Configurar event listeners
  setupEventListeners();
}

/**
 * Configura los event listeners del formulario
 */
function setupEventListeners() {
  ADD_BLOG_FORM.addEventListener("submit", handleFormSubmit);
}

// ============================================================================
// MANEJO DE EVENTOS
// ============================================================================

/**
 * Maneja el envío del formulario de nuevo blog
 * @param {Event} e - Evento de submit
 */
function handleFormSubmit(e) {
  e.preventDefault();

  const title = BLOG_TITLE.value.trim();
  const content = BLOG_CONTENT.value.trim();

  if (!title || !content) {
    alert("Por favor, completa todos los campos");
    return;
  }

  const newBlog = createBlogObject(title, content);
  saveBlog(newBlog);
  ADD_BLOG_FORM.reset();
  loadBlogs();
}

// ============================================================================
// OPERACIONES CRUD
// ============================================================================

/**
 * CREATE - Crea un nuevo objeto de blog
 * @param {string} title - Título del blog
 * @param {string} content - Contenido del blog
 * @returns {Object} Objeto blog
 */
function createBlogObject(title, content) {
  return {
    id: Date.now(),
    title: title,
    content: content,
    date: new Date().toLocaleDateString("es-ES"),
    edited: false,
  };
}

/**
 * CREATE - Guarda un blog en localStorage
 * @param {Object} blog - Objeto blog a guardar
 */
function saveBlog(blog) {
  const blogs = getBlogs();
  blogs.push(blog);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
}

/**
 * READ - Obtiene todos los blogs del localStorage
 * @returns {Array} Array de blogs
 */
function getBlogs() {
  const blogsData = localStorage.getItem(STORAGE_KEY);
  return blogsData ? JSON.parse(blogsData) : [];
}

/**
 * READ - Carga y muestra todos los blogs en el DOM
 */
function loadBlogs() {
  const blogs = getBlogs();
  BLOG_LIST.innerHTML = "";

  if (blogs.length === 0) {
    showEmptyState();
    return;
  }

  // Mostrar blogs del más reciente al más antiguo
  const reversedBlogs = [...blogs].reverse();
  reversedBlogs.forEach((blog) => {
    const blogCard = createBlogCard(blog);
    BLOG_LIST.appendChild(blogCard);
  });
}

/**
 * UPDATE - Edita un blog existente
 * @param {number} id - ID del blog a editar
 */
function editBlog(id) {
  const blogs = getBlogs();
  const blogIndex = blogs.findIndex((b) => b.id === id);

  if (blogIndex === -1) {
    alert("Blog no encontrado");
    return;
  }

  const blog = blogs[blogIndex];
  const newTitle = prompt("Editar título:", blog.title);

  if (newTitle === null) return;

  const newContent = prompt("Editar contenido:", blog.content);

  if (newContent === null) return;

  if (!newTitle.trim() || !newContent.trim()) {
    alert("El título y contenido no pueden estar vacíos");
    return;
  }

  // Actualizar blog
  blogs[blogIndex] = {
    ...blog,
    title: newTitle.trim(),
    content: newContent.trim(),
    edited: true,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
  loadBlogs();
}

/**
 * DELETE - Elimina un blog
 * @param {number} id - ID del blog a eliminar
 */
function deleteBlog(id) {
  if (!confirm("¿Estás seguro de que quieres eliminar esta entrada?")) {
    return;
  }

  const blogs = getBlogs();
  const filteredBlogs = blogs.filter((b) => b.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredBlogs));
  loadBlogs();
}

// ============================================================================
// CREACIÓN DE ELEMENTOS DOM
// ============================================================================

/**
 * Crea una tarjeta de blog en el DOM
 * @param {Object} blog - Objeto blog
 * @returns {HTMLElement} Elemento div con la tarjeta del blog
 */
function createBlogCard(blog) {
  const card = document.createElement("div");
  card.className = "blog-entry";

  const editedLabel = blog.edited ? " (editado)" : "";

  card.innerHTML = `
    <h3>${escapeHtml(blog.title)}</h3>
    <span class="blog-date">${blog.date}${editedLabel}</span>
    <p>${escapeHtml(blog.content)}</p>
    <div class="blog-entry-actions">
      <button class="btn-edit" onclick="editBlog(${blog.id})">
        <i class="fas fa-edit"></i> Editar
      </button>
      <button class="btn-delete" onclick="deleteBlog(${blog.id})">
        <i class="fas fa-trash"></i> Eliminar
      </button>
    </div>
  `;

  return card;
}

/**
 * Muestra el estado vacío cuando no hay blogs
 */
function showEmptyState() {
  BLOG_LIST.innerHTML = `
    <p class="no-blogs">
      No hay entradas todavía. ¡Crea tu primera publicación!
    </p>
  `;
}

// ============================================================================
// UTILIDADES
// ============================================================================

/**
 * Escapa caracteres HTML para prevenir XSS
 * @param {string} text - Texto a escapar
 * @returns {string} Texto escapado
 */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ============================================================================
// FUNCIONES GLOBALES (para onclick en HTML)
// ============================================================================

window.editBlog = editBlog;
window.deleteBlog = deleteBlog;
