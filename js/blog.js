/**
 * CRUD system for blog using localStorage
 * Manages creation, reading, updating and deletion of blog entries
 */

document.addEventListener("DOMContentLoaded", initBlogSystem);

// ============================================================================
// CONSTANTS
// ============================================================================

const STORAGE_KEY = "blogs";

// ============================================================================
// DOM ELEMENTS
// ============================================================================

let ADD_BLOG_FORM;
let BLOG_LIST;
let BLOG_TITLE;
let BLOG_CONTENT;

// ============================================================================
// INITIALIZATION
// ============================================================================

/**
 * Initializes the blog system
 */
function initBlogSystem() {
  // Get DOM elements
  ADD_BLOG_FORM = document.getElementById("add-blog-form");
  BLOG_LIST = document.getElementById("blog-list");
  BLOG_TITLE = document.getElementById("blog-title");
  BLOG_CONTENT = document.getElementById("blog-content");

  // Verify elements exist
  if (!ADD_BLOG_FORM || !BLOG_LIST || !BLOG_TITLE || !BLOG_CONTENT) {
    console.error("Error: Blog elements not found");
    return;
  }

  // Load existing blogs
  loadBlogs();

  // Setup event listeners
  setupEventListeners();
}

/**
 * Sets up form event listeners
 */
function setupEventListeners() {
  ADD_BLOG_FORM.addEventListener("submit", handleFormSubmit);
}

// ============================================================================
// EVENT HANDLING
// ============================================================================

/**
 * Handles new blog form submission
 * @param {Event} e - Submit event
 */
function handleFormSubmit(e) {
  e.preventDefault();

  const title = BLOG_TITLE.value.trim();
  const content = BLOG_CONTENT.value.trim();

  if (!title || !content) {
    alert("Please complete all fields");
    return;
  }

  const newBlog = createBlogObject(title, content);
  saveBlog(newBlog);
  ADD_BLOG_FORM.reset();
  loadBlogs();
}

// ============================================================================
// CRUD OPERATIONS
// ============================================================================

/**
 * CREATE - Creates a new blog object
 * @param {string} title - Blog title
 * @param {string} content - Blog content
 * @returns {Object} Blog object
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
 * CREATE - Saves a blog to localStorage
 * @param {Object} blog - Blog object to save
 */
function saveBlog(blog) {
  const blogs = getBlogs();
  blogs.push(blog);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(blogs));
}

/**
 * READ - Gets all blogs from localStorage
 * @returns {Array} Array of blogs
 */
function getBlogs() {
  const blogsData = localStorage.getItem(STORAGE_KEY);
  return blogsData ? JSON.parse(blogsData) : [];
}

/**
 * READ - Loads and displays all blogs in the DOM
 */
function loadBlogs() {
  const blogs = getBlogs();
  BLOG_LIST.innerHTML = "";

  if (blogs.length === 0) {
    showEmptyState();
    return;
  }

  // Display blogs from newest to oldest
  const reversedBlogs = [...blogs].reverse();
  reversedBlogs.forEach((blog) => {
    const blogCard = createBlogCard(blog);
    BLOG_LIST.appendChild(blogCard);
  });
}

/**
 * UPDATE - Edits an existing blog
 * @param {number} id - ID of the blog to edit
 */
function editBlog(id) {
  const blogs = getBlogs();
  const blogIndex = blogs.findIndex((b) => b.id === id);

  if (blogIndex === -1) {
    alert("Blog not found");
    return;
  }

  const blog = blogs[blogIndex];
  const newTitle = prompt("Edit title:", blog.title);

  if (newTitle === null) return;

  const newContent = prompt("Edit content:", blog.content);

  if (newContent === null) return;

  if (!newTitle.trim() || !newContent.trim()) {
    alert("Title and content cannot be empty");
    return;
  }

  // Update blog
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
 * DELETE - Deletes a blog
 * @param {number} id - ID of the blog to delete
 */
function deleteBlog(id) {
  if (!confirm("Are you sure you want to delete this entry?")) {
    return;
  }

  const blogs = getBlogs();
  const filteredBlogs = blogs.filter((b) => b.id !== id);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredBlogs));
  loadBlogs();
}

// ============================================================================
// DOM ELEMENT CREATION
// ============================================================================

/**
 * Creates a blog card in the DOM
 * @param {Object} blog - Blog object
 * @returns {HTMLElement} Div element with the blog card
 */
function createBlogCard(blog) {
  const card = document.createElement("div");
  card.className = "blog-entry";

  const editedLabel = blog.edited ? " (edited)" : "";

  card.innerHTML = `
    <h3>${escapeHtml(blog.title)}</h3>
    <span class="blog-date">${blog.date}${editedLabel}</span>
    <p>${escapeHtml(blog.content)}</p>
    <div class="blog-entry-actions">
      <button class="btn-edit" onclick="editBlog(${blog.id})">
        <i class="fas fa-edit"></i> Edit
      </button>
      <button class="btn-delete" onclick="deleteBlog(${blog.id})">
        <i class="fas fa-trash"></i> Delete
      </button>
    </div>
  `;

  return card;
}

/**
 * Shows empty state when there are no blogs
 */
function showEmptyState() {
  BLOG_LIST.innerHTML = `
    <p class="no-blogs">
      No entries yet. Create your first post!
    </p>
  `;
}

// ============================================================================
// UTILITIES
// ============================================================================

/**
 * Escapes HTML characters to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
  const tempElement = document.createElement("div");
  tempElement.textContent = text;
  return tempElement.innerHTML;
}

// ============================================================================
// GLOBAL FUNCTIONS (for onclick in HTML)
// ============================================================================

window.editBlog = editBlog;
window.deleteBlog = deleteBlog;
