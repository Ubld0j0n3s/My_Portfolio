# 📝 Customization Template

This file shows you exactly what to change in each section with before/after examples.

## 1. HERO SECTION

### Location: `index.html` - Line ~45-60

**BEFORE:**
```html
<h1 class="hero-title">Hi, I'm <span class="highlight">Ubald Jones Tuquib</span></h1>
<div class="typing-effect">
    <span class="typing-text"></span>
    <span class="cursor">|</span>
</div>
<p class="hero-description">
    Aspiring Full Stack Developer | Passionate about Building Solutions
</p>
```

**AFTER (Example):**
```html
<h1 class="hero-title">Hi, I'm <span class="highlight">John Smith</span></h1>
<div class="typing-effect">
    <span class="typing-text"></span>
    <span class="cursor">|</span>
</div>
<p class="hero-description">
    Full Stack Developer | Web Enthusiast | Problem Solver
</p>
```

## 2. PROFILE PHOTO

### Location: `index.html` - Line ~70-75

**BEFORE:**
```html
<div class="image-placeholder">
    <i class="fas fa-user-circle"></i>
    <p>Add your photo in assets folder</p>
</div>
```

**AFTER:**
```html
<img src="assets/profile.jpg" alt="John Smith" style="width:100%; height:100%; border-radius:20px; object-fit:cover;">
```

## 3. ABOUT ME SECTION

### Location: `index.html` - Line ~105-115

**BEFORE:**
```html
<p>
    I am an aspiring software developer and graduating IT student passionate about web development, 
    machine learning, and building systems that solve real-world problems. I developed projects involving 
    Laravel, Python, BERT-based fake news detection, and REST API integration.
</p>
<p>
    With a strong foundation in full-stack development, I'm committed to continuous learning and creating 
    innovative solutions. I thrive in collaborative environments and enjoy tackling complex technical challenges.
</p>
```

**AFTER (Example):**
```html
<p>
    I am a recent graduate with a Bachelor's degree in Information Technology, passionate about creating 
    elegant web solutions. I have hands-on experience with React, Node.js, and MongoDB, and I've built 
    several full-stack applications from concept to deployment.
</p>
<p>
    I'm driven by curiosity and a desire to solve real-world problems through code. I love collaborating with 
    teams, learning new technologies, and contributing to projects that make a difference.
</p>
```

## 4. STATISTICS/STAT CARDS

### Location: `index.html` - Line ~120-135

**BEFORE:**
```html
<div class="stat-card">
    <h3>5+</h3>
    <p>Projects Completed</p>
</div>
<div class="stat-card">
    <h3>4</h3>
    <p>Years Learning</p>
</div>
```

**AFTER (Example):**
```html
<div class="stat-card">
    <h3>8+</h3>
    <p>Projects Completed</p>
</div>
<div class="stat-card">
    <h3>4</h3>
    <p>Years of Study</p>
</div>
```

## 5. EDUCATION SECTION

### Location: `index.html` - Line ~150-175

**BEFORE:**
```html
<div class="education-card">
    <div class="edu-icon">
        <i class="fas fa-graduation-cap"></i>
    </div>
    <div class="edu-info">
        <h3>Bachelor of Science in Information Technology</h3>
        <p class="edu-school">University Name</p>
        <p class="edu-year">2022 - 2026</p>
        <p class="edu-description">
            Focused on software development, database management, and web technologies. 
            Completed projects in full-stack development and machine learning.
        </p>
    </div>
</div>
```

**AFTER (Example):**
```html
<div class="education-card">
    <div class="edu-icon">
        <i class="fas fa-graduation-cap"></i>
    </div>
    <div class="edu-info">
        <h3>Bachelor of Science in Information Technology</h3>
        <p class="edu-school">State University - Manila</p>
        <p class="edu-year">2022 - 2026</p>
        <p class="edu-description">
            GPA: 3.8/4.0 | Dean's List
            Specialized in Web Development and Database Systems. 
            Capstone Project: E-commerce Platform with AI Recommendations.
        </p>
    </div>
</div>
```

## 6. TECHNICAL SKILLS

### Location: `index.html` - Line ~200-230

**BEFORE:**
```html
<div class="skill-item">
    <div class="skill-header">
        <i class="fas fa-globe"></i>
        <span>Full Stack Web Development</span>
    </div>
    <div class="progress-bar">
        <div class="progress-fill" style="width: 85%"></div>
    </div>
    <span class="skill-percentage">85%</span>
</div>
```

**AFTER (Your skills adjusted):**
```html
<div class="skill-item">
    <div class="skill-header">
        <i class="fas fa-globe"></i>
        <span>Full Stack Web Development</span>
    </div>
    <div class="progress-bar">
        <div class="progress-fill" style="width: 90%"></div>
    </div>
    <span class="skill-percentage">90%</span>
</div>
```

## 7. FRAMEWORKS & LANGUAGES

### Location: `index.html` - Line ~280-310

**BEFORE:**
```html
<div class="skill-badge">
    <i class="fab fa-laravel"></i>
    <span>Laravel</span>
</div>
<div class="skill-badge">
    <i class="fab fa-js-square"></i>
    <span>JavaScript</span>
</div>
```

**AFTER (Keep or modify based on your experience):**
```html
<div class="skill-badge">
    <i class="fab fa-laravel"></i>
    <span>Laravel</span>
</div>
<div class="skill-badge">
    <i class="fab fa-js-square"></i>
    <span>JavaScript</span>
</div>
<div class="skill-badge">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
<!-- Add your skills -->
```

## 8. PROJECT CARD

### Location: `index.html` - Line ~340-395

**BEFORE:**
```html
<div class="project-card">
    <div class="project-image">
        <div class="image-placeholder-project">
            <i class="fas fa-image"></i>
            <p>Add project image</p>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Title 1</h3>
        <p class="project-description">
            Brief description of your project. Explain what problem it solves and the key features.
        </p>
        <div class="project-tech">
            <span class="tech-badge">Laravel</span>
            <span class="tech-badge">MySQL</span>
            <span class="tech-badge">JavaScript</span>
        </div>
        <div class="project-features">
            <h4>Key Features:</h4>
            <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
            </ul>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="#" class="project-link live">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

**AFTER (Example - E-Commerce Project):**
```html
<div class="project-card">
    <div class="project-image">
        <img src="assets/ecommerce.jpg" alt="E-Commerce Platform" style="width:100%; height:100%; object-fit:cover;">
    </div>
    <div class="project-content">
        <h3 class="project-title">E-Commerce Platform</h3>
        <p class="project-description">
            A full-featured e-commerce platform with product catalog, shopping cart, payment integration, 
            and admin dashboard for managing inventory and orders.
        </p>
        <div class="project-tech">
            <span class="tech-badge">React</span>
            <span class="tech-badge">Node.js</span>
            <span class="tech-badge">MongoDB</span>
            <span class="tech-badge">Stripe</span>
        </div>
        <div class="project-features">
            <h4>Key Features:</h4>
            <ul>
                <li>Product Search & Filtering</li>
                <li>Secure Payment Processing</li>
                <li>User Authentication & Profiles</li>
                <li>Order Tracking System</li>
            </ul>
        </div>
        <div class="project-links">
            <a href="https://github.com/yourusername/ecommerce-platform" class="project-link">
                <i class="fab fa-github"></i> GitHub
            </a>
            <a href="https://ecommerce-yourusername.herokuapp.com" class="project-link live">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

## 9. CONTACT INFORMATION

### Location: `index.html` - Line ~410-430

**BEFORE:**
```html
<div class="contact-card">
    <i class="fas fa-envelope"></i>
    <h3>Email</h3>
    <p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
</div>
<div class="contact-card">
    <i class="fab fa-github"></i>
    <h3>GitHub</h3>
    <p><a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a></p>
</div>
<div class="contact-card">
    <i class="fab fa-linkedin"></i>
    <h3>LinkedIn</h3>
    <p><a href="https://linkedin.com/in/yourusername" target="_blank">linkedin.com/in/yourusername</a></p>
</div>
<div class="contact-card">
    <i class="fab fa-facebook"></i>
    <h3>Facebook</h3>
    <p><a href="https://facebook.com/yourusername" target="_blank">facebook.com/yourusername</a></p>
</div>
```

**AFTER (Example):**
```html
<div class="contact-card">
    <i class="fas fa-envelope"></i>
    <h3>Email</h3>
    <p><a href="mailto:john.smith@example.com">john.smith@example.com</a></p>
</div>
<div class="contact-card">
    <i class="fab fa-github"></i>
    <h3>GitHub</h3>
    <p><a href="https://github.com/johnsmith" target="_blank">github.com/johnsmith</a></p>
</div>
<div class="contact-card">
    <i class="fab fa-linkedin"></i>
    <h3>LinkedIn</h3>
    <p><a href="https://linkedin.com/in/johnsmith" target="_blank">linkedin.com/in/johnsmith</a></p>
</div>
<div class="contact-card">
    <i class="fab fa-facebook"></i>
    <h3>Facebook</h3>
    <p><a href="https://facebook.com/johnsmith.dev" target="_blank">facebook.com/johnsmith.dev</a></p>
</div>
```

## 10. TYPING EFFECT TEXT

### Location: `js/script.js` - Line ~5-11

**BEFORE:**
```javascript
const typingTexts = [
    "Aspiring Full Stack Developer",
    "Web Development Enthusiast",
    "Problem Solver",
    "Tech Passionate",
    "Lifelong Learner"
];
```

**AFTER (Example):**
```javascript
const typingTexts = [
    "Full Stack Developer",
    "React Specialist",
    "Problem Solver",
    "Always Learning",
    "Building the Future"
];
```

## 11. DOWNLOAD RESUME

### Location: `index.html` - Line ~127

**BEFORE:**
```html
<a href="#" class="btn btn-outline">Download Resume</a>
```

**AFTER:**
```html
<a href="assets/John_Smith_Resume.pdf" class="btn btn-outline" download>Download Resume</a>
```

## 12. FOOTER

### Location: `index.html` - Line ~540-548

**BEFORE:**
```html
<p>&copy; 2026 Ubald Jones Tuquib. All rights reserved.</p>
```

**AFTER:**
```html
<p>&copy; 2026 John Smith. All rights reserved.</p>
```

---

## Color Customization Quick Reference

### Default Colors (Professional Blue/Purple):
```css
--primary-color: #3B82F6;        /* Blue */
--secondary-color: #8B5CF6;      /* Purple */
```

### Change to Green (Professional):
```css
--primary-color: #10B981;        /* Emerald Green */
--secondary-color: #059669;      /* Dark Green */
```

### Change to Red (Energy):
```css
--primary-color: #EF4444;        /* Red */
--secondary-color: #DC2626;      /* Dark Red */
```

### Change to Cyan (Tech):
```css
--primary-color: #06B6D4;        /* Cyan */
--secondary-color: #0891B2;      /* Dark Cyan */
```

---

## Asset File Naming Convention

When adding images to `assets/` folder, use these names:

```
assets/
├── profile.jpg              # Your profile photo
├── project-ecommerce.jpg    # Project 1
├── project-blog.jpg         # Project 2
├── project-todo.jpg         # Project 3
├── project-ai.jpg           # Project 4
└── resume.pdf               # Your resume
```

---

## Common Mistakes to Avoid

❌ Forgetting to add image files to assets folder
✅ Always add images before updating HTML

❌ Using spaces in email links: `<a href="mailto: your@email.com">`
✅ No spaces: `<a href="mailto:your@email.com">`

❌ Broken URLs: `<a href="https//github.com">`
✅ Correct: `<a href="https://github.com">`

❌ Not updating all instances of your name
✅ Use Find & Replace (Ctrl+H) to replace all

---

You're ready to customize! Good luck! 🚀
