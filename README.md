# Yash Salunke - Professional React Developer Portfolio

A modern, responsive, and feature-rich portfolio website built with React showcasing the skills, projects, and experience of a highly skilled frontend developer.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Component-Based Architecture**: Well-organized React components
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: SPA navigation with smooth scroll behavior
- **Projects Showcase**: Display of featured projects with technologies used
- **Experience Timeline**: Visual timeline of work experience
- **Skills Section**: Organized skill categories with tags
- **Contact Form**: Functional contact form for inquiries
- **Social Links**: Quick access to social media profiles

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.js
│   ├── Contact.js
│   ├── Experience.js
│   ├── Footer.js
│   ├── Hero.js
│   ├── Navbar.js
│   ├── Projects.js
│   └── Skills.js
├── styles/              # Component styles
│   ├── About.css
│   ├── Contact.css
│   ├── Experience.css
│   ├── Footer.css
│   ├── Hero.css
│   ├── Navbar.css
│   ├── Projects.css
│   └── Skills.css
├── App.js               # Main app component
├── App.css              # Global styles
└── index.js             # Entry point
```

## 🛠️ Technologies Used

- **React 19.2.0** - UI library
- **CSS3** - Styling with CSS Grid, Flexbox, and animations
- **React Hooks** - State management (useState)
- **Responsive Design** - Mobile-first approach

## 📋 Sections

### Navbar
- Sticky navigation with active links
- Responsive hamburger menu for mobile
- Smooth scroll to sections

### Hero Section
- Eye-catching gradient background
- Call-to-action buttons
- Social media links
- Animated entrance

### About Section
- Professional introduction
- Key statistics (Years of experience, Projects, Clients)
- Hover animations

### Skills Section
- Organized by categories:
  - Frontend technologies (React, Angular, JavaScript, TypeScript, etc.)
  - Libraries & Frameworks (Redux, RxJS, Next.js, etc.)
  - Tools & Platforms (Git, Docker, AWS, Firebase, etc.)
  - Other skills (Accessibility, SEO, Web Performance, etc.)
- Interactive skill tags

### Projects Section
- 6 featured projects with descriptions
- Technology tags for each project
- Project links to GitHub
- Emoji indicators for quick identification

### Experience Section
- Timeline visualization
- 3 work experiences detailed
- Responsibilities listed with checkmarks
- Responsive design for all screen sizes

### Contact Section
- Two-column layout (desktop) / Single column (mobile)
- Contact form with validation
- Contact details (Email, Phone, Location)
- Social media links

### Footer
- Quick links
- Social links
- Copyright information

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```
   The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

### Run Tests

```bash
npm test
```

## 🎨 Customization

### Update Personal Information

Edit the content in these components:

- **Navbar**: `src/components/Navbar.js` - Update name and links
- **Hero**: `src/components/Hero.js` - Update title and description
- **About**: `src/components/About.js` - Update bio and statistics
- **Skills**: `src/components/Skills.js` - Update skill categories
- **Projects**: `src/components/Projects.js` - Add/update projects
- **Experience**: `src/components/Experience.js` - Update work history
- **Contact**: `src/components/Contact.js` - Update contact details

### Modify Colors

All colors are defined as CSS variables in `src/App.css`:

```css
:root {
  --primary-color: #6366f1;      /* Main brand color (Indigo) */
  --secondary-color: #ec4899;    /* Accent color (Pink) */
  --dark-color: #1f2937;         /* Dark text */
  --light-color: #f9fafb;        /* Light backgrounds */
  --text-color: #374151;         /* Normal text */
  --border-color: #e5e7eb;       /* Borders */
}
```

### Add More Projects

Edit `src/components/Projects.js` and add to the `projects` array:

```javascript
{
  id: 7,
  title: 'Project Title',
  description: 'Project description',
  technologies: ['React', 'Node.js'],
  link: 'https://github.com/project',
  image: '🎯'
}
```

### Update Skills

Edit `src/components/Skills.js` and modify the `skillCategories` array with your skills.

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## ✨ Key Features

- **Smooth Scrolling**: CSS scroll-behavior for smooth navigation
- **Responsive Grid**: CSS Grid with auto-fit for flexible layouts
- **Mobile Menu**: Hamburger menu with smooth animations
- **Timeline**: Visual experience timeline
- **Form Handling**: React hooks for form state management
- **Animations**: Smooth transitions and hover effects throughout
- **SEO Friendly**: Semantic HTML and proper structure

## 🚀 Deployment

### Deploy to Vercel
1. Push code to GitHub
2. Connect to Vercel
3. Deploy with one click

### Deploy to Netlify
1. Push code to GitHub
2. Connect to Netlify
3. Automatic deploys on push

## 📞 Contact

- Email: yash@example.com
- Phone: +91 9876543210
- GitHub: [@yashsalunke](https://github.com/yashsalunke)
- LinkedIn: [@yashsalunke](https://linkedin.com/in/yashsalunke)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Built With

- React 19.2.0
- Modern CSS3 (Grid, Flexbox, Animations)
- React Hooks
- Create React App

---

**Version**: 1.0.0 | **Last Updated**: November 2025
