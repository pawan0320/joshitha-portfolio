# 🚀 Complete Setup Guide - Joshitha Dantam Portfolio

## Quick Start (5 minutes)

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Create Environment File
```bash
cp .env.example .env.local
```

### 3️⃣ Start Development Server
```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

---

## 📋 Prerequisites

### Required
- **Node.js**: 18.0.0+ ([Download](https://nodejs.org/))
- **npm**: 9.0.0+ (comes with Node.js)
- **Modern Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+

### Optional
- **Git**: For version control
- **VS Code**: For code editing
- **Vercel Account**: For deployment

### Check Versions
```bash
node --version    # Should be v18.0.0 or higher
npm --version     # Should be 9.0.0 or higher
```

---

## 📦 Full Installation

### Step 1: Navigate to Project
```bash
cd joshitha-portfolio
```

### Step 2: Install Node Modules
```bash
npm install
```

**Expected output:** `added XXX packages` (no errors)

If you encounter errors:
```bash
# Clear cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Step 3: Environment Configuration

Copy the example environment file:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```env
# Email Configuration (for contact form)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxx

# GitHub Profile
NEXT_PUBLIC_GITHUB_USERNAME=joshithadantam

# LinkedIn Profile
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/joshithadantam

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Environment
NODE_ENV=development
```

### Step 4: Start Development Server

```bash
npm run dev
```

Output should show:
```
> next dev

  ▲ Next.js 14.0.0
  - Local:        http://localhost:3000
  - Environments: .env.local
```

### Step 5: Open in Browser

Click the link or navigate to **http://localhost:3000**

---

## 🎯 Available Scripts

### Development
```bash
npm run dev           # Start development server with hot reload
```

### Production
```bash
npm run build         # Build for production
npm start             # Start production server
```

### Code Quality
```bash
npm run lint          # Run ESLint
npm run type-check    # Check TypeScript
```

---

## 🔧 Configuration

### Tailwind CSS
Already configured in `tailwind.config.ts` with:
- Custom colors (neon-cyan, neon-purple, etc.)
- Custom animations (float, glow-pulse, scan, etc.)
- Responsive breakpoints
- Dark mode by default

### Next.js
Configured in `next.config.js` with:
- Webpack shader loader
- Console removal in production
- Optimized React strict mode

### TypeScript
Strict mode enabled for type safety
Path aliases configured for clean imports:
- `@/*` → `src/`
- `@/components/*` → `src/components/`
- `@/hooks/*` → `src/hooks/*`

---

## 🌐 Environment Variables Explained

### EMAILJS Configuration
Used for the contact form:
1. Sign up at [EmailJS](https://emailjs.com)
2. Create a service and template
3. Copy Service ID, Template ID, and Public Key

### GitHub Configuration
To fetch your GitHub profile:
1. Generate Personal Access Token at [GitHub Settings](https://github.com/settings/tokens)
2. Copy your username

### LinkedIn URL
Your LinkedIn profile for social links

---

## 📁 Project Structure

```
joshitha-portfolio/
├── public/                    # Static files
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles
│   │   └── metadata.ts       # SEO metadata
│   ├── components/
│   │   ├── 3d/               # Three.js components
│   │   ├── sections/         # Page sections
│   │   ├── LoaderScreen.tsx
│   │   ├── Navigation.tsx
│   │   ├── ParticleBackground.tsx
│   │   └── CursorFollower.tsx
│   ├── hooks/                # Custom React hooks
│   ├── utils/                # Utility functions
│   └── 3d/                   # 3D resources
├── .env.example              # Environment template
├── .gitignore                # Git ignore rules
├── .eslintrc.json           # ESLint config
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind config
├── tsconfig.json            # TypeScript config
├── next.config.js           # Next.js config
└── README.md                # Documentation
```

---

## 🎨 Customization

### Update Personal Information
**File**: `src/components/sections/AboutSection.tsx`
- Change name, bio, and education

**File**: `src/components/sections/ContactSection.tsx`
- Update email, phone, LinkedIn, GitHub

### Add Your Projects
**File**: `src/components/sections/ProjectsSection.tsx`

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Your Project Name',
    description: 'Project description',
    tech: ['React', 'Next.js', 'TypeScript'],
    features: ['Feature 1', 'Feature 2'],
    github: 'https://github.com/...',
    live: 'https://demo.com',
    status: 'active',
  },
];
```

### Modify Colors
**File**: `tailwind.config.ts`

```typescript
colors: {
  'cyan-neon': '#00d9ff',      // Primary accent
  'purple-neon': '#b200ff',    // Secondary accent
  'dark-black': '#050810',     // Background
  // Add your colors
}
```

### Update Skills
**File**: `src/components/sections/SkillsSection.tsx`

```typescript
const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'language' },
  { name: 'React', level: 88, category: 'framework' },
  // Add more skills
];
```

---

## 🐛 Troubleshooting

### Port 3000 Already in Use
```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### WebGL Not Supported
Check: [WebGL Report](https://webglreport.com/)
- Update graphics drivers
- Use different browser
- Enable hardware acceleration

### Build Errors

**Clear cache:**
```bash
rm -rf .next
npm run build
```

**Reinstall dependencies:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Animations Not Smooth
- Lower particle count in `ParticleBackground.tsx`
- Disable browser extensions
- Check GPU acceleration in browser settings

### TypeScript Errors
```bash
npm run type-check
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Follow the prompts** to connect your GitHub and deploy

### GitHub Pages

1. Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  // ... rest of config
};
```

2. Build and deploy:
```bash
npm run build
# Upload 'out' folder to GitHub Pages
```

### Other Platforms

**Netlify:**
- Build command: `npm run build`
- Publish directory: `.next`

**AWS Amplify:**
- Connect GitHub repository
- Auto-deploys on push

---

## 📊 Performance Tips

1. **Optimize Images**
   - Use Next.js Image component
   - Compress before adding to project

2. **Code Splitting**
   - Already done automatically by Next.js
   - Dynamic imports for 3D scenes

3. **Monitor Performance**
   ```bash
   npm run build
   npm start
   # Open DevTools → Lighthouse
   ```

4. **Reduce Particle Count**
   Edit `src/components/ParticleBackground.tsx`:
   ```typescript
   const particleCount = 30;  // Reduce from 50
   ```

---

## 🔐 Security Best Practices

✅ **Do:**
- Keep `.env.local` in `.gitignore`
- Use environment variables for secrets
- Update dependencies regularly
- Use HTTPS in production

❌ **Don't:**
- Commit `.env.local` to Git
- Expose API keys in client code
- Use `eval()` or unsafe functions
- Hardcode credentials

---

## 📚 Learning Resources

- [React Docs](https://react.dev)
- [Next.js Guide](https://nextjs.org/learn)
- [Three.js Tutorial](https://threejs.org/manual/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)

---

## ✅ Verification Checklist

After setup, verify everything works:

- [ ] `npm install` completes without errors
- [ ] `.env.local` file created
- [ ] `npm run dev` starts without errors
- [ ] Browser opens to http://localhost:3000
- [ ] Hero 3D scene renders
- [ ] Animations are smooth
- [ ] Navigation works
- [ ] Contact form is accessible
- [ ] TypeScript type-check passes
- [ ] No ESLint errors

---

## 🎓 Next Steps

1. **Customize Content**
   - Update personal information
   - Add your projects
   - Modify skills and certifications

2. **Setup Email**
   - Configure EmailJS for contact form
   - Test form submission

3. **Optimize & Test**
   - Run Lighthouse audit
   - Test on mobile devices
   - Check cross-browser compatibility

4. **Deploy**
   - Choose deployment platform
   - Set up custom domain
   - Monitor analytics

---

## 💬 Need Help?

- Check the main [README.md](./README.md)
- Review component documentation in code comments
- Check Next.js and React documentation
- Open an issue on GitHub

---

**Happy Coding! 🚀**
