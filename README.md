# Personal Portfolio - Joel Sánchez

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://portfolio.joelsanchez.net/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 📋 Description

A modern and fully responsive personal portfolio website developed as part of the Web Development module. This project showcases my journey as a Full Stack Developer, highlighting my technical skills, professional projects, and providing an easy way to get in touch.

The portfolio features a clean, professional design with smooth animations and an intuitive user experience across all devices.

## ✨ Features

- **Fully Responsive Design**: Seamlessly adapts to mobile, tablet, and desktop devices
- **Parallax Effect**: Smooth animated parallax background in hero section with GPU acceleration
- **Modern UI/UX**: Clean interface with custom color palette and card-based design
- **Interactive Navigation**: Smooth hamburger menu for mobile devices with fluid animations
- **Animated Carousel**: Infinite scroll technology showcase with hover effects
- **Blog Management**: Full CRUD functionality - create, edit, and delete blog posts with localStorage
- **Contact Form**: Functional contact page with validation and email integration
- **Social Integration**: Styled social media links with ripple hover effects
- **Fast Performance**: Optimized loading times with vanilla JavaScript and image preloading
- **Accessibility**: Built with semantic HTML and ARIA labels for better accessibility
- **Optimized Code**: SNAKE_CASE constants, clean CSS with no duplicates

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup for better SEO and accessibility with image preloading
- **CSS3**: Advanced styling with custom properties, Flexbox, and Grid
  - CSS Variables for consistent theming
  - Media Queries for responsive breakpoints (mobile, tablet, desktop)
  - CSS animations and transitions with GPU acceleration
  - Modern layout techniques and glassmorphism effects
  - Optimized parallax rendering
- **JavaScript (ES6+)**: Pure JS for optimal performance
  - DOM manipulation with SNAKE_CASE constants
  - Event handling with requestAnimationFrame
  - Dynamic content loading and localStorage management
  - Parallax scroll effects with hardware acceleration
  - Blog CRUD operations

### Libraries & Tools
- **Font Awesome 6.4.0**: Professional icon library for visual enhancement
- **Google Fonts (Poppins)**: Modern typography
- **Git & GitHub**: Version control and collaboration
- **localStorage API**: Client-side blog post storage

## 🎨 Design Inspiration

The visual design and layout of this portfolio draw inspiration from modern fintech design principles:
- [Puzzle Fintech Website Design](https://dribbble.com/shots/25478108-Puzzle-Fintech-Website-Design-Case-Study)

The design emphasizes clarity, professionalism, and user engagement while maintaining a unique personal brand identity.

## 📁 Project Structure

```
Portfolio-Proyecto/
│
├── index.html              # Main landing page
│
├── pages/
│   ├── blogs.html         # Blog section page
│   └── contact.html       # Contact form page
│
├── css/
│   ├── style.css          # Main stylesheet
│   ├── contact.css        # Contact page specific styles
│   └── blog.css           # Blog section styles
│
├── js/
│   ├── script.js          # Main JavaScript functionality
│   ├── contact.js         # Contact form logic
│   └── blog.js            # Blog page interactions
│
├── img/                   # Image assets and graphics
│
└── README.md              # Project documentation
```

## 🚀 Installation and Usage

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/neocanario/Portfolio-Proyecto.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd Portfolio-Proyecto
   ```

3. **Open in browser**
   - Simply open `index.html` in your preferred web browser
   - Or use a local development server (recommended):
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

4. **View the portfolio**
   - Open your browser and navigate to `http://localhost:8000`

### No Dependencies Required
This is a pure HTML/CSS/JavaScript project with no build process or package installation needed!

## 🎯 Key Features Explained

### Parallax Effect
- **GPU-accelerated** smooth scrolling animation
- **Two-layer depth**: Fixed sky background with moving dunes foreground
- **Optimized performance**: Uses `requestAnimationFrame` and `will-change` CSS property
- **Preloaded images**: Instant loading with `<link rel="preload">`

### Blog System
- **Full CRUD**: Create, read, edit, and delete blog posts
- **LocalStorage**: Client-side persistent storage
- **Edit functionality**: Modify existing posts with prompt dialogs
- **Delete confirmation**: Prevents accidental deletion
- **Date tracking**: Automatic timestamps with "(editado)" label for modified posts

### Modern Carousel
- **Infinite scroll**: Seamless looping animation
- **Responsive cards**: Adapts to screen size with CSS Grid
- **Hover effects**: Interactive 3D transformations
- **Optimized rendering**: Hardware-accelerated CSS animations

## 📱 Responsive Design

The portfolio is built with a mobile-first approach and adapts seamlessly across all devices:

| Device Type | Breakpoint | Features |
|------------|------------|----------|
| 📱 **Mobile** | < 768px | Hamburger menu, stacked layout, touch-optimized, vertical blog actions |
| 📱 **Tablet** | 768px - 1024px | Navigation below logo, adaptive grid, unique footer design |
| 💻 **Desktop** | > 1024px | Side-by-side nav, multi-column layouts, hover effects, parallax animations |

### Key Responsive Features
- Fluid typography that scales with viewport
- Flexible images with object-fit and preloading
- Touch-friendly interactive elements
- Optimized navigation for each screen size
- Conditional parallax effects (disabled on mobile for performance)

## 🤝 Contributing

While this is a personal portfolio project, suggestions and feedback are always welcome! Feel free to:
- Open an issue for bug reports
- Submit feature suggestions
- Share your thoughts on the design and user experience

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Classmates**: For their invaluable support, feedback, and collaborative learning
- **Dribbble Community**: For providing exceptional design inspiration and resources
- **Developer Community**: For sharing best practices, tutorials, and open-source knowledge
- **Instructors**: For guidance throughout the Web Development module

## 👨‍💻 Author

**Joel Sánchez** - Full Stack Developer

- 🌐 **Portfolio**: [portfolio.joelsanchez.net](https://portfolio.joelsanchez.net/)
- 💼 **GitHub**: [@neocanario](https://github.com/neocanario)
- 📸 **Instagram**: [@dgwc.24](https://www.instagram.com/dgwc.24/)
- 📧 **Email**: joelsanchezdiaz@alumno.ieselricon.es

---

<div align="center">

**© 2025 Joel Sánchez** | Educational Project - Web Development Module

⭐ If you found this project interesting, consider giving it a star!

</div>