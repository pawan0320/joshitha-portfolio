# ⚡ Quick Reference Card

## 🚀 Start Development (60 seconds)

```bash
npm install
cp .env.example .env.local
npm run dev
# Open http://localhost:3000
```

---

## 📝 Essential Customizations

### Update Your Name & Info
**File:** `src/components/sections/AboutSection.tsx`, `ContactSection.tsx`

### Add Your Projects
**File:** `src/components/sections/ProjectsSection.tsx`
```javascript
const projects = [
  {
    title: 'Your Project',
    description: 'Description',
    tech: ['React', 'Node.js'],
    github: 'https://github.com/...',
    live: 'https://...',
  }
]
```

### Add Your Skills
**File:** `src/components/sections/SkillsSection.tsx`
```javascript
const skills = [
  { name: 'Python', level: 90, category: 'language' },
  { name: 'React', level: 88, category: 'framework' },
]
```

### Change Colors
**File:** `tailwind.config.ts`
```javascript
colors: {
  'cyan-neon': '#00d9ff',
  'purple-neon': '#b200ff',
}
```

---

## 📧 Setup Email (Contact Form)

1. Sign up at [EmailJS.com](https://www.emailjs.com)
2. Create Service → Get **Service ID**
3. Create Template → Get **Template ID**
4. Account Settings → Get **Public Key**
5. Update `.env.local`:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxx
```

---

## 🎨 Component File Locations

| Component | File |
|-----------|------|
| Intro Loader | `src/components/LoaderScreen.tsx` |
| Navigation | `src/components/Navigation.tsx` |
| Hero 3D Scene | `src/components/3d/HeroScene.tsx` |
| About | `src/components/sections/AboutSection.tsx` |
| Skills | `src/components/sections/SkillsSection.tsx` |
| Projects | `src/components/sections/ProjectsSection.tsx` |
| Certifications | `src/components/sections/CertificationsSection.tsx` |
| Timeline | `src/components/sections/TimelineSection.tsx` |
| Contact | `src/components/sections/ContactSection.tsx` |

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Colors, animations, themes |
| `next.config.js` | Next.js settings |
| `tsconfig.json` | TypeScript paths and rules |
| `.env.local` | Environment variables |
| `package.json` | Dependencies |

---

## 🚀 Available Commands

```bash
npm run dev          # Start development (port 3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Check code quality
npm run type-check   # Check TypeScript
```

---

## 📱 Responsive Breakpoints

```
Mobile:    < 768px
Tablet:    768px - 1024px
Desktop:   > 1024px
```

---

## 🎨 Color Palette

```
Primary:   #00d9ff (Cyan Neon)
Secondary: #b200ff (Purple Neon)
Dark BG:   #050810 (Deep Black)
Light BG:  #0a0e27 (Navy)
Text:      #ffffff (White)
Muted:     #a0a0a0 (Gray)
```

---

## 🚢 Deploy (Choose One)

### Vercel (Easiest)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
netlify deploy
```

### GitHub Pages
Update `next.config.js`:
```javascript
output: 'export'
```
Then: `npm run build` → Upload `out` folder

---

## 🔐 Security Checklist

- [ ] Never commit `.env.local`
- [ ] Use `NEXT_PUBLIC_` only for client-side vars
- [ ] Keep API keys private
- [ ] Use HTTPS in production
- [ ] Update dependencies regularly

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port in use | `lsof -ti:3000 \| xargs kill -9` |
| WebGL error | Update graphics drivers |
| Laggy animation | Reduce particle count |
| Build error | `rm -rf .next && npm run build` |
| Email not sending | Check EmailJS credentials |

---

## 📚 Key Files

```
Root Files:
├── package.json          - Dependencies
├── next.config.js        - Next.js config
├── tailwind.config.ts    - Tailwind config
├── tsconfig.json         - TypeScript config
└── .env.example          - Environment template

Main Page:
└── src/app/page.tsx      - Portfolio structure

Styles:
└── src/app/globals.css   - Global styles

Components:
└── src/components/       - All components
```

---

## 🎯 Priority Customizations

1. ✅ Update name in About/Hero
2. ✅ Add your projects
3. ✅ Add your skills
4. ✅ Update contact info
5. ✅ Setup EmailJS
6. ✅ Deploy to Vercel

---

## 📖 Full Docs

- `README.md` - Overview
- `SETUP_GUIDE.md` - Installation
- `COMPONENTS.md` - Component Reference
- `DEPLOYMENT.md` - Deployment Guide

---

## 💡 Pro Tips

- Mobile test with Chrome DevTools
- Use Lighthouse for performance audit
- Check WebGL support: webglreport.com
- Monitor deployments in Vercel dashboard
- Use environment variables for secrets

---

**Print this card and keep it handy! 📌**
