# 🔧 Troubleshooting & FAQ

Common issues and their solutions for your React portfolio.

## 📱 Responsive Design Issues

### Mobile Menu Not Working

**Problem**: Hamburger menu doesn't open/close

**Solution 1**: Check if JavaScript is enabled
```javascript
// In Navbar.js, verify the toggle function exists
const toggleMenu = () => {
  setMenuOpen(!menuOpen);
};
```

**Solution 2**: Verify CSS classes are applied
```css
/* In Navbar.css, check active state */
.nav-menu.active {
  left: 0;  /* Should show menu */
}
```

**Solution 3**: Check viewport meta tag in public/index.html
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### Layout Breaking on Mobile

**Problem**: Content not responsive on small screens

**Solution**: Add/update media queries
```css
@media (max-width: 768px) {
  .container {
    padding: 0 15px;  /* Add side padding */
  }
  
  .grid {
    grid-template-columns: 1fr;  /* Single column */
  }
}
```

### Text Too Small on Mobile

**Problem**: Text hard to read on phones

**Solution**: Adjust font sizes for mobile
```css
body {
  font-size: 16px;  /* Base size for all devices */
}

@media (max-width: 640px) {
  h1 { font-size: 1.5rem; }  /* Reduce from 2.5rem */
  h2 { font-size: 1.25rem; } /* Reduce from 2rem */
  p { font-size: 0.95rem; }  /* Slightly smaller */
}
```

---

## 🎨 Styling Issues

### Colors Not Changing

**Problem**: CSS color changes not visible

**Solution 1**: Clear browser cache
```
Windows: Ctrl + Shift + Delete
Mac: Cmd + Shift + Delete
```

**Solution 2**: Use CSS variables correctly
```css
/* app.css - Define at root */
:root {
  --primary-color: #6366f1;
}

/* component.css - Use the variable */
.button {
  background: var(--primary-color);  /* Not color: var(...) */
}
```

**Solution 3**: Check CSS specificity
```css
/* ❌ Won't work if there's more specific rule */
.btn { background: blue; }
.btn-primary { background: red; }

/* ✅ Use !important only as last resort */
.btn { background: blue !important; }
```

### Animations Not Smooth

**Problem**: Animations lag or jitter

**Solution 1**: Use `transform` and `opacity` instead of `top/left`
```css
/* ❌ Causes jank */
@keyframes slide {
  from { left: 0; }
  to { left: 100px; }
}

/* ✅ Smooth animation */
@keyframes slide {
  from { transform: translateX(0); }
  to { transform: translateX(100px); }
}
```

**Solution 2**: Add hardware acceleration
```css
.animated-element {
  transform: translateZ(0);  /* Enables GPU acceleration */
  will-change: transform;    /* Hint to browser */
}
```

### Images Not Showing

**Problem**: Images appear broken

**Solution 1**: Check image paths
```javascript
// ❌ Wrong path structure
<img src="project-image.png" />  // Images in src root?

// ✅ Correct path structure
<img src={require('./images/project.png').default} />
// OR use public folder
<img src="/images/project.png" />
```

**Solution 2**: Use public folder for images
```
public/
  images/
    project1.png
    project2.png
```

Then in components:
```javascript
<img src="/images/project1.png" alt="Project" />
```

---

## ⚙️ Build & Deployment Issues

### `npm start` Not Working

**Problem**: Development server won't start

**Solution 1**: Clear cache and reinstall
```bash
# Delete node_modules and package-lock.json
rm -r node_modules package-lock.json
npm install
npm start
```

**Solution 2**: Check Node version
```bash
node --version  # Should be v14+
npm --version   # Should be v6+
```

**Solution 3**: Kill process on port 3000
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill -9
```

### Build Fails with Errors

**Problem**: `npm run build` shows errors

**Solution 1**: Read error message carefully
```bash
npm run build 2>&1 | more  # Show full error
```

**Solution 2**: Check for syntax errors
```javascript
// ❌ Missing import
function Component() {
  return <div>{MyComponent}</div>;  // Not imported
}

// ✅ Correct
import MyComponent from './MyComponent';
function Component() {
  return <div><MyComponent /></div>;
}
```

**Solution 3**: Check console for warnings
```bash
npm run build  # Look for "warnings"
# Fix all warnings before deploy
```

### Build Size Too Large

**Problem**: Bundle size > 200KB

**Solution**: Analyze bundle
```bash
npm run build
npm install --save-dev source-map-explorer
npx source-map-explorer 'build/static/js/*.js'
```

Then optimize:
```javascript
// Remove unused imports
// Use code splitting with lazy()
// Optimize images
// Remove console.log in production
```

---

## 🔗 Link & Navigation Issues

### Links Not Working

**Problem**: Navigation links don't scroll to sections

**Solution 1**: Verify anchor IDs match
```html
<!-- In Navbar.js -->
<a href="#skills">Skills</a>

<!-- In Skills.js -->
<section id="skills">...</section>
```

**Solution 2**: Check smooth scroll is enabled
```css
html {
  scroll-behavior: smooth;  /* Must be in global CSS */
}
```

**Solution 3**: Test without # first
```javascript
// ❌ Might not work
<a href="#skills">Skills</a>

// ✅ More reliable
import { useEffect } from 'react';
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: 'smooth' });
};
```

### External Links Open in Same Tab

**Problem**: Project links replace your portfolio

**Solution**: Always add target and rel attributes
```javascript
// ❌ Opens in same tab
<a href="https://github.com/project">View</a>

// ✅ Opens in new tab
<a 
  href="https://github.com/project" 
  target="_blank"
  rel="noopener noreferrer"
>
  View
</a>
```

---

## 📝 Form Issues

### Contact Form Not Submitting

**Problem**: Form doesn't send message

**Solution 1**: Check if backend is configured
```javascript
// You need to add this (see ENHANCEMENTS.md)
const handleSubmit = async (e) => {
  e.preventDefault();
  // Add actual submission logic here
};
```

**Solution 2**: Verify form inputs have name attributes
```javascript
// ❌ Won't work
<input type="email" placeholder="Email" />

// ✅ Correct
<input 
  type="email" 
  name="email"
  placeholder="Email"
  value={formData.email}
  onChange={handleChange}
/>
```

**Solution 3**: Check browser console for errors
```javascript
// Open DevTools (F12)
// Go to Console tab
// Look for error messages
// Fix accordingly
```

### Form Validation Not Working

**Problem**: Required fields accept empty values

**Solution 1**: Add HTML5 validation
```javascript
<input
  type="email"
  required
  onChange={handleChange}
/>
```

**Solution 2**: Add JavaScript validation
```javascript
const handleSubmit = (e) => {
  e.preventDefault();
  
  // Validate
  if (!formData.name.trim()) {
    alert('Name required');
    return;
  }
  
  // Submit if valid
  submitForm();
};
```

---

## 🎯 Performance Issues

### Page Loads Slowly

**Problem**: Portfolio takes > 3 seconds to load

**Solution 1**: Check Network tab in DevTools
```
1. Open DevTools (F12)
2. Go to Network tab
3. Reload page
4. Look for slow requests
5. Optimize largest files
```

**Solution 2**: Optimize images
```bash
# Install image optimizer
npm install -D imagemin-webpack-plugin

# Or use online tools:
# - tinypng.com
# - imagecompressor.com
```

**Solution 3**: Implement code splitting
```javascript
import { lazy, Suspense } from 'react';

const Projects = lazy(() => import('./components/Projects'));

<Suspense fallback={<div>Loading...</div>}>
  <Projects />
</Suspense>
```

### Memory Leaks

**Problem**: Browser gets slower the longer you stay on site

**Solution**: Clean up subscriptions/intervals
```javascript
useEffect(() => {
  const interval = setInterval(() => {
    // Do something
  }, 1000);

  // ✅ Clean up on unmount
  return () => clearInterval(interval);
}, []);
```

---

## 🌐 Browser & Device Issues

### Only Works in Chrome

**Problem**: Portfolio looks different in Firefox/Safari

**Solution**: Use vendor prefixes
```css
.element {
  -webkit-appearance: none;    /* Safari */
  -moz-appearance: none;       /* Firefox */
  appearance: none;            /* Standard */
}
```

### Styling Inconsistent Across Browsers

**Problem**: Different look in different browsers

**Solution**: Use CSS reset
```css
/* At top of App.css or index.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
```

### Scrolling Janky on Mobile

**Problem**: Scroll feels laggy

**Solution 1**: Use `-webkit-overflow-scrolling`
```css
section {
  -webkit-overflow-scrolling: touch;
}
```

**Solution 2**: Reduce animation complexity on mobile
```css
@media (max-width: 768px) {
  * {
    animation: none;
  }
}
```

---

## 📊 Console Error Messages

### "Missing dependency" Error

```
Error: React hook "useState" is called conditionally
```

**Solution**: Move hook to top of function
```javascript
// ❌ Wrong
function Component() {
  if (condition) {
    const [state, setState] = useState(null);  // Bad!
  }
}

// ✅ Correct
function Component() {
  const [state, setState] = useState(null);  // Top level
  if (condition) {
    // Use state here
  }
}
```

### "Cannot read property X of undefined"

```
TypeError: Cannot read property 'map' of undefined
```

**Solution**: Add null checks
```javascript
// ❌ Crashes if data is undefined
{data.map(item => <div>{item}</div>)}

// ✅ Safe
{data && data.map(item => <div>{item}</div>)}

// ✅ Or with optional chaining
{data?.map(item => <div>{item}</div>)}
```

### "Invalid hook call"

```
Error: Invalid hook call. Hooks can only be called inside a function component
```

**Solution**: Only call hooks in components, not in regular functions
```javascript
// ❌ Wrong
const regularFunction = () => {
  const [state] = useState(null);  // Not allowed!
};

// ✅ Correct
function MyComponent() {
  const [state] = useState(null);  // In component
}
```

---

## 🚀 Deployment Issues

### Site Shows Blank Page After Deploy

**Problem**: Deployed site is blank

**Solution 1**: Check browser console for errors
```
1. Visit your deployed site
2. Open DevTools (F12)
3. Check Console tab for errors
4. Fix errors locally
5. Rebuild and redeploy
```

**Solution 2**: Verify build output
```bash
npm run build
# Check if "build/" folder exists
# Check if "index.html" is inside build/
```

**Solution 3**: Check homepage in package.json
```json
{
  "homepage": "https://yourdomain.com",
  "scripts": {
    "build": "react-scripts build"
  }
}
```

### Site Works Locally But Not Deployed

**Problem**: `npm start` works fine, deployed version broken

**Solution 1**: Test production build locally
```bash
npm run build
npm install -g serve
serve -s build
# Visit http://localhost:3000
```

**Solution 2**: Check environment variables
```javascript
// If using environment variables
const API = process.env.REACT_APP_API_URL;

// Make sure .env file exists with:
// REACT_APP_API_URL=https://api.example.com
```

**Solution 3**: Clear deployment cache
```bash
# For Vercel
vercel --prod --force

# For Netlify
# Trigger redeploy from dashboard
```

---

## 📞 Getting Help

### Before Asking for Help
- [ ] Check browser console (F12 > Console tab)
- [ ] Check this troubleshooting guide
- [ ] Search error message online
- [ ] Read full error message, not just first line
- [ ] Try on different browser/device

### Where to Get Help
1. **Documentation**: Check ENHANCEMENTS.md, PORTFOLIO_GUIDE.md
2. **Stack Overflow**: Search your error message
3. **React Documentation**: https://react.dev
4. **GitHub Issues**: Search similar issues
5. **Community Forums**: React Discourse, Dev.to

### Good Bug Report Format
```
1. What I did:
   - Specific steps to reproduce

2. What I expected:
   - Expected result

3. What actually happened:
   - Actual result

4. Error message:
   - Full error from console

5. Environment:
   - Browser version
   - Operating system
   - Node version
```

---

## ✅ Quick Fix Checklist

Before asking for help:

- [ ] Cleared browser cache (Ctrl+Shift+Del)
- [ ] Checked browser console (F12)
- [ ] Restarted dev server (Ctrl+C, npm start)
- [ ] Reinstalled node_modules (rm -rf, npm install)
- [ ] Tested in different browser
- [ ] Tested on different device
- [ ] Read full error message
- [ ] Searched for similar issues

If still stuck, you're ready to get help! 🆘

---

**Most issues have simple solutions - take a deep breath and debug methodically!** 🔍
