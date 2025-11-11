# Quick Reference Card

## 🚀 Quick Start Commands

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## 📁 File Locations for Quick Updates

### Update Personal Info
| What | Where | File |
|------|-------|------|
| Your name | Navbar, Hero | `Navbar.js`, `Hero.js` |
| Email | Contact section | `Contact.js` |
| Phone | Contact section | `Contact.js` |
| Social links | Multiple | `Hero.js`, `Contact.js`, `Footer.js` |
| Bio | About section | `About.js` |

### Update Content
| What | Where | File |
|------|-------|------|
| Skill categories | Skills section | `Skills.js` |
| Projects | Projects section | `Projects.js` |
| Work experience | Experience section | `Experience.js` |
| Statistics | About section | `About.js` |

### Styling
| What | Where | File |
|------|-------|------|
| Colors | Global | `App.css` (CSS variables) |
| Navigation style | Navbar | `Navbar.css` |
| Animations | Global/Component | `*.css` files |
| Fonts | Global | `index.css` |

## 🎨 CSS Variables (in App.css)

```css
--primary-color: #6366f1        /* Main brand color */
--secondary-color: #ec4899      /* Accent/hover color */
--dark-color: #1f2937           /* Dark text */
--light-color: #f9fafb          /* Light backgrounds */
--text-color: #374151           /* Body text */
--border-color: #e5e7eb         /* Borders/lines */
--transition: all 0.3s ease     /* Default animation */
```

## 📱 Responsive Breakpoints

```css
/* Mobile First */
/* Tablets and up */
@media (max-width: 968px) { }

/* Tablets only */
@media (max-width: 768px) { }

/* Mobile only */
@media (max-width: 640px) { }
```

## 🔧 Common Customizations

### Change Colors
1. Open `src/App.css`
2. Find `:root { }` section
3. Modify CSS variables
4. Changes apply automatically to all components

### Add New Project
1. Open `src/components/Projects.js`
2. Add object to `projects` array:
```javascript
{
  id: 7,
  title: 'Your Project Title',
  description: 'Your project description',
  technologies: ['React', 'Node.js'],
  link: 'https://github.com/yourproject',
  image: '🎯'  // Use any emoji
}
```

### Update Skills
1. Open `src/components/Skills.js`
2. Modify `skillCategories` array
3. Add/remove skill categories and skills

### Update Experience
1. Open `src/components/Experience.js`
2. Modify `experiences` array
3. Update company, title, period, responsibilities

## 📝 Component Template

To add a new section, create:

**`src/components/NewSection.js`:**
```javascript
import React from 'react';
import '../styles/NewSection.css';

function NewSection() {
  return (
    <section id="newsection" className="newsection">
      <div className="container">
        <h2 className="section-title">Section Title</h2>
        {/* Your content here */}
      </div>
    </section>
  );
}

export default NewSection;
```

**`src/styles/NewSection.css`:**
```css
.newsection {
  padding: 5rem 0;
  background: var(--light-color);
}

/* Your component styles */
```

**Update `src/App.js`:**
```javascript
import NewSection from './components/NewSection';

// Add in App component:
<NewSection />
```

## 🎯 Key File Locations

```
Contact Info      → src/components/Contact.js
Skills            → src/components/Skills.js
Projects          → src/components/Projects.js
Work Experience   → src/components/Experience.js
About/Bio         → src/components/About.js
Navigation        → src/components/Navbar.js

Colors/Theme      → src/App.css
Component Styles  → src/styles/*.css
Main App          → src/App.js
```

## 💻 Important CSS Classes

```css
.container        /* Max width container, 1200px */
.section-title    /* Large section headings */
.btn              /* Button base class */
.btn-primary      /* Primary button (colored) */
.btn-secondary    /* Secondary button (outlined) */
.skill-tag        /* Skill pills/tags */
.tech-tag         /* Technology tags in projects */
```

## 🌐 Navigation Anchor IDs

Link to sections using these IDs:

```html
#home        → Hero section
#about       → About section
#skills      → Skills section
#projects    → Projects section
#experience  → Experience section
#contact     → Contact section
```

## 📦 Dependencies Installed

```json
{
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "react-scripts": "5.0.1"
}
```

## 🚀 Deployment URLs

After deployment, your site will be live at:

**Vercel:** `https://yash-portfolio.vercel.app`
**Netlify:** `https://yash-portfolio.netlify.app`
**GitHub Pages:** `https://yourusername.github.io/yash-portfolio`

## ✅ Pre-Launch Checklist

- [ ] Update your name everywhere
- [ ] Add real email address
- [ ] Add real phone number
- [ ] Add GitHub profile link
- [ ] Add LinkedIn profile link
- [ ] Update About bio
- [ ] Add real projects (3 minimum)
- [ ] Add work experience
- [ ] Update skills
- [ ] Test on mobile
- [ ] Test contact form
- [ ] Add favicon (optional)

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Page not loading | Run `npm start` again |
| Styling not showing | Clear browser cache (Ctrl+Shift+Del) |
| Mobile menu broken | Check Navbar.js JavaScript logic |
| Form not working | Set up email service (Formspree, EmailJS) |
| Images not showing | Check image paths in components |

## 📚 Useful Links

- **React Docs**: https://react.dev
- **CSS Tricks**: https://css-tricks.com
- **MDN**: https://developer.mozilla.org
- **Vercel Deploy**: https://vercel.com
- **Netlify Deploy**: https://netlify.com

## 🆘 Need Help?

1. **Check PORTFOLIO_GUIDE.md** - Full customization guide
2. **Check ENHANCEMENTS.md** - Add new features
3. **Check ARCHITECTURE.md** - Understand structure
4. **Check README.md** - General information

## 💡 Pro Tips

✅ Use the `--primary-color` variable instead of hard-coding colors
✅ Keep images optimized (< 100KB each)
✅ Test form integration before going live
✅ Update content regularly
✅ Use real URLs for project links
✅ Add your actual achievements to stats
✅ Keep mobile experience smooth
✅ Monitor performance after deployment

---

**Bookmark this file for quick reference during development!**

**Ready to customize? Start with Contact.js and Hero.js!** 🚀
