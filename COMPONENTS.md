# 📖 Component Documentation

## Table of Contents
1. [Core Components](#core-components)
2. [Section Components](#section-components)
3. [3D Components](#3d-components)
4. [Hooks & Utilities](#hooks--utilities)

---

## Core Components

### LoaderScreen
**Location:** `src/components/LoaderScreen.tsx`

Displays an animated intro sequence with:
- Rotating circles animation
- Typing text sequence
- Progress bar
- Floating particles

**Usage:**
```tsx
import LoaderScreen from '@/components/LoaderScreen';

<LoaderScreen />
```

**Customization:**
```typescript
// Change loading text sequence in component
const loadingSequence = [
  'Your custom text...',
];

// Change loader duration in page.tsx
const timer = setTimeout(() => {
  setIsLoading(false);
}, 3500); // Duration in milliseconds
```

---

### Navigation
**Location:** `src/components/Navigation.tsx`

Sticky navigation bar with:
- Logo
- Menu links
- Resume button
- Mobile responsive menu
- Smooth transitions

**Features:**
- Auto-hides on scroll up
- Active section highlighting
- Mobile hamburger menu
- Blur background effect

**Customization:**
```typescript
const menuItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  // Add/remove menu items here
];
```

---

### ParticleBackground
**Location:** `src/components/ParticleBackground.tsx`

Canvas-based animated particle system with:
- Floating particles
- Connection lines
- Smooth movement
- Mouse-responsive (optional)

**Props:** None

**Customization:**
```typescript
const particleCount = 50;  // Number of particles
const connectionDistance = 150;  // When to draw lines
const particleRadius = 1.5;  // Size of particles
```

---

### CursorFollower
**Location:** `src/components/CursorFollower.tsx`

Custom animated cursor with:
- Border circle
- Trailing glow
- Mouse position tracking
- Smooth interpolation

**Features:**
- Mix-blend mode for glowing effect
- Spring physics animation
- Shows/hides on mouse enter/leave

---

## Section Components

### HeroSection
**Location:** `src/components/sections/HeroSection.tsx`

Fullscreen hero with:
- 3D animated background
- Animated name
- Role switcher (rotating text)
- CTA buttons
- Scroll indicator

**Customization:**
```typescript
const roles = [
  'Electronics Engineer',
  'AI Innovator',
  // Add/remove roles
];
```

**Button Actions:**
```typescript
// Update button onClick handlers
<motion.button onClick={() => {
  // Your action here
}}>
```

---

### AboutSection
**Location:** `src/components/sections/AboutSection.tsx`

Two-column layout with:
- Bio section
- Stats cards
- Education info
- Feature list

**Edit Content:**
```typescript
const stats = [
  { label: 'Projects', value: '7+' },
  { label: 'Skills', value: '10+' },
  // Modify stats
];
```

---

### SkillsSection
**Location:** `src/components/sections/SkillsSection.tsx`

Orbital skill system with:
- Central core
- Orbiting skill cards
- Skill categories
- Animated progress rings

**Add Skills:**
```typescript
const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'language' },
  { name: 'React', level: 85, category: 'framework' },
];
```

**Categories:**
- `'language'` - Cyan border
- `'framework'` - Purple border
- `'system'` - Blue border
- `'other'` - Blue border

**Performance:**
If laggy, reduce:
```typescript
const orbitRadius = 100;  // Reduce orbit size
```

---

### ProjectsSection
**Location:** `src/components/sections/ProjectsSection.tsx`

Grid of filterable project cards with:
- Project cards with hover effects
- Filter buttons (all, active, archived, planned)
- Tech stack display
- Feature highlights
- GitHub and Live links

**Add Projects:**
```typescript
const projects: Project[] = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Description',
    tech: ['Tech1', 'Tech2'],
    features: ['Feature1', 'Feature2'],
    github: 'https://github.com/...',
    live: 'https://demo.com',
    status: 'active', // or 'archived', 'planned'
  },
];
```

**Project Status Colors:**
- `'active'` - Cyan
- `'archived'` - Purple
- `'planned'` - Blue

---

### CertificationsSection
**Location:** `src/components/sections/CertificationsSection.tsx`

3-column grid of certification cards with:
- Certification details
- Issuing organization
- Year obtained
- Skills list
- Verify button

**Add Certifications:**
```typescript
const certifications: Certification[] = [
  {
    id: 1,
    title: 'Certification Name',
    issuer: 'Issuing Organization',
    date: '2024',
    description: 'Description',
    skills: ['Skill1', 'Skill2'],
  },
];
```

---

### TimelineSection
**Location:** `src/components/sections/TimelineSection.tsx`

Vertical timeline with:
- Alternating left/right layout
- Event types (education, certification, project, milestone)
- Animated center dots
- Year labels
- Event details

**Add Timeline Events:**
```typescript
const events: TimelineEvent[] = [
  {
    id: 1,
    year: '2024',
    type: 'project', // or 'education', 'certification', 'milestone'
    title: 'Event Title',
    description: 'Event description',
    details: ['Detail1', 'Detail2'],
  },
];
```

**Event Type Colors:**
- `'education'` - Cyan
- `'certification'` - Purple
- `'project'` - Blue
- `'milestone'` - Green

---

### ContactSection
**Location:** `src/components/sections/ContactSection.tsx`

Two-column contact layout with:
- Contact information cards
- Holographic form
- Form validation
- Success message
- Social links

**Update Contact Info:**
```typescript
const contactInfo = [
  {
    icon: '📧',
    label: 'Email',
    value: 'your@email.com',
    link: 'mailto:your@email.com',
  },
  // Edit contact information
];
```

**Form Handling:**
```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  // Add EmailJS integration here
  // See EmailJS docs: https://www.emailjs.com/
};
```

---

## 3D Components

### HeroScene
**Location:** `src/components/3d/HeroScene.tsx`

Three.js 3D scene featuring:
- Central glowing sphere
- Wireframe sphere
- Rotating torus
- Orbiting particles
- Interactive camera
- Lighting setup

**Customization:**

**Change Central Object:**
```typescript
// Replace the sphereGeometry with other geometries
<icosahedronGeometry args={[1.5, 4]} />
<boxGeometry args={[2, 2, 2]} />
```

**Adjust Colors:**
```typescript
// Modify material colors
meshStandardMaterial={{
  color="#00d9ff"  // Change primary color
  emissive="#b200ff"  // Change glow color
}}
```

**Camera Settings:**
```typescript
// In Scene component
<PerspectiveCamera 
  makeDefault 
  position={[0, 0, 8]}  // Change camera position
  fov={75}  // Change field of view
/>
```

**Performance Tips:**
```typescript
// Reduce geometry complexity
sphereGeometry args={[1.5, 32, 32]}  // Lower from 64

// Reduce particle count
{[...Array(8)].map(...)}  // Lower from 12
```

---

## Hooks & Utilities

### useMousePosition
**Location:** `src/hooks/useInteractions.ts`

Returns current mouse position.

**Usage:**
```typescript
import { useMousePosition } from '@/hooks/useInteractions';

function MyComponent() {
  const { x, y } = useMousePosition();
  
  return <div>{x}, {y}</div>;
}
```

### useScroll
Returns current scroll position.

**Usage:**
```typescript
const scrollY = useScroll();
```

### useViewportSize
Returns viewport dimensions.

**Usage:**
```typescript
const { width, height } = useViewportSize();
```

### Animation Utilities
**Location:** `src/utils/animations.ts`

Pre-defined Framer Motion variants:
- `fadeInUp`
- `fadeInDown`
- `fadeInLeft`
- `fadeInRight`
- `scaleIn`
- `staggerContainer`

**Usage:**
```typescript
import { fadeInUp } from '@/utils/animations';

<motion.div {...fadeInUp}>
  Content
</motion.div>
```

### Helper Functions
```typescript
// Clamp value between min and max
clamp(value, min, max);

// Linear interpolation
lerp(start, end, factor);

// Smooth step interpolation
smoothstep(t);

// Scroll to element by ID
scrollToElement('section-id');

// Get scroll progress (0-100)
const progress = getScrollProgress();
```

---

## Styling

### Global Classes

**Available CSS Classes:**

```css
/* Glassmorphism */
.glass              /* Light glass effect */
.glass-dark         /* Dark glass effect */

/* Borders */
.neon-border        /* Cyan neon border */
.neon-border-purple /* Purple neon border */

/* Effects */
.holographic        /* Holographic with shimmer */
.text-glow          /* Text shadow glow */

/* Buttons */
.btn-neon           /* Neon button style */

/* Animations */
.float              /* Floating animation */
.glow-pulse         /* Glowing pulse */
.spinner            /* Loading spinner */

/* Backgrounds */
.grid-bg            /* Grid pattern background */
```

---

## Color System

Defined in `tailwind.config.ts`:

```
Cyan:    #00d9ff (Primary accent)
Purple:  #b200ff (Secondary accent)
Dark:    #050810 (Deep black background)
Navy:    #0a0e27 (Medium background)
White:   #ffffff (Text)
Gray:    #a0a0a0 (Secondary text)
```

---

## Animation Variants

Defined in `tailwind.config.ts`:

```
pulse-neon    - Pulsing opacity
float         - Floating up/down
glow-pulse    - Glowing pulse
scan          - Scanning effect
orbit         - Circular orbit
rotate-slow   - Slow rotation
```

---

## Common Customizations

### Change Primary Color
1. Update `tailwind.config.ts`
2. Update `globals.css` color references
3. Update component imports

### Add New Section
1. Create component in `src/components/sections/`
2. Import in `src/app/page.tsx`
3. Add section ID and smooth scroll link

### Modify Animations
1. Update keyframes in `tailwind.config.ts`
2. Or override in component with Framer Motion
3. Test performance if complex

---

## Best Practices

✅ **Do:**
- Use TypeScript for type safety
- Memoize expensive computations
- Lazy load 3D components
- Test animations on lower-end devices
- Use CSS classes before inline styles

❌ **Don't:**
- Modify global CSS directly
- Create large components without splitting
- Use hardcoded values for responsive design
- Add too many animations to same element

---

## Need Help?

Refer to:
- [React Docs](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Three.js Docs](https://threejs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
