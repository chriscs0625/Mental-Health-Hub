# Mental Balance Hub - Visual & Component Reference

## Design System Colors

### Primary Colors
```
Navy Blue      #1B2B4B - Used for: Headers, text, admin sidebar
Sage Green     #7CAF7F - Used for: Primary CTA buttons, links, hover states  
Warm Coral     #E8826A - Used for: Action buttons, badges, alerts
```

### Secondary Colors
```
Lavender       #A89BC2 - Used for: Secondary accents, decorative elements
Soft White     #FAFAFA - Used for: Page backgrounds, card backgrounds
```

---

## Typography

### Headings
- **H1** (Hero): 48px-60px, Bold, Navy
- **H2** (Sections): 28px-36px, Bold, Navy
- **H3** (Subsections): 18px-24px, Semibold, Navy
- **H4** (Cards): 16px, Semibold, Navy

### Body Text
- **Large**: 18px, Regular, Gray-600, Line-height 1.6
- **Normal**: 16px, Regular, Gray-600, Line-height 1.5
- **Small**: 14px, Regular, Gray-500, Line-height 1.4

### Font: Geist Sans-serif (Google Fonts)

---

## Component Library

### Buttons

**Primary CTA Button**
- Background: Coral (#E8826A)
- Hover: Coral/90 (darker)
- Text: White, Bold
- Padding: py-3 px-8
- Border Radius: 8px
- Icon: Optional

**Secondary Button**
- Background: Sage/10 (light)
- Hover: Sage/20
- Text: Sage green
- Padding: py-3 px-8
- Border Radius: 8px

**Outline Button**
- Background: Transparent
- Border: 1px, Navy
- Text: Navy
- Padding: py-3 px-8
- Border Radius: 8px

---

### Cards

**Product Card**
- Background: White
- Border Radius: 16px (rounded-2xl)
- Shadow: shadow-soft (light)
- Hover Shadow: shadow-soft-lg
- Hover Effect: Scale 1.02 + shadow lift
- Padding: Inside 16px

**Feature Card**
- Background: Gradient or solid color
- Border Radius: 16px
- Padding: 24px
- Icon: Large, colored
- Min Height: 200px

---

### Input Fields

**Text Input**
- Background: White
- Border: 1px solid #E8E8E8
- Border Radius: 8px
- Padding: 12px 16px
- Focus: Border Sage, Ring Sage/10

**Card Input (Stripe)**
- Background: White
- Border: 1px solid #E0E0E0
- Padding: 12px 16px
- Font: Monospace
- Secure: ••••

---

### Navigation

**Navbar**
- Background: White/80 with backdrop blur
- Height: 64px (h-16)
- Logo: Navy + Sage gradient box
- Links: Navy text, Sage hover
- Cart Icon: Navy with Coral badge

**Mobile Menu**
- Position: Drawer from left
- Background: White
- Items: Stacked vertical
- Close on click: Yes

**Breadcrumb**
- Text: Small, Gray
- Separator: /
- Active: Navy, Bold
- Hover: Sage color

---

### Sections

**Hero Section**
- Height: Full screen (min-h-screen)
- Background: Gradient navy → lavender
- Content: 2-column grid (desktop)
- Left: Text, 2 CTA buttons
- Right: Floating mockup with float animation

**Trust Bar**
- Background: White
- Icons: Large emoji or inline SVG
- Layout: Flex horizontal, center
- Items: 3-4 benefits
- Spacing: Gap-6

**Featured Products**
- Background: White
- Layout: 3-column grid (desktop)
- Cards: ProductCard component
- Button: View All in bottom center

**How It Works**
- Background: White/Gray-50
- Layout: 3-column with vertical lines
- Icons: Large, colored
- Numbers: 1, 2, 3 badges

**Testimonials**
- Background: White
- Layout: Single carousel slide
- Card: White with shadow
- Avatar: Circle, small
- Stars: 5-star rating
- Quote: Italic text
- Auto-rotate: Every 5 seconds

---

### Modals & Forms

**Checkout Form**
- Max Width: 560px
- Columns: Single column (centered)
- Left Side: Email, name, card
- Right Side: Order summary sticky
- Spacing: Gap-6 between sections

**Success Modal**
- Centered on screen
- Animation: Confetti falls
- Content: Checkmark icon, message
- Button: Download files
- Secondary: Create account

**Admin Modal**
- Title bar: Black bg
- Body: Scrollable
- Footer: Action buttons
- Close: X button top right

---

## Animation Keyframes

### Confetti
- Start: Top -10vh, opacity 1
- End: Bottom, opacity 0
- Rotation: 0 → 720deg
- Duration: 2.5s ease-in
- Delay: Staggered per piece

### Float
- Start: translateY(0)
- Middle: translateY(-20px)
- End: translateY(0)
- Duration: 3s infinite

### Pulse Soft
- Start/End: Opacity 1
- Middle: Opacity 0.5
- Duration: 2s infinite
- Used for: Icon highlights

### Bounce Cart
- Start/End: Scale 1
- Middle: Scale 1.2
- Duration: 0.6s
- Used for: Add to cart icon

---

## Responsive Breakpoints

### Mobile (< 768px)
- Grid: 1 column
- Navbar: Hamburger menu
- Hero: Stacked vertical
- Padding: px-4
- Font: Slightly smaller

### Tablet (768px - 1024px)
- Grid: 2 columns
- Navbar: Desktop nav
- Hero: Side-by-side
- Padding: px-6
- Font: Normal size

### Desktop (> 1024px)
- Grid: 3 columns
- Full layout
- Max-width: 1280px (7xl)
- Padding: px-8
- Hover effects active

---

## Shadow System

```css
/* Soft Shadow - Used on cards */
shadow-soft: 0 1px 3px rgba(0,0,0,0.06)

/* Medium Shadow - Used on hover */
shadow-soft-md: 0 4px 6px -1px rgba(0,0,0,0.1)

/* Large Shadow - Used on lifted elements */
shadow-soft-lg: 0 10px 15px -3px rgba(0,0,0,0.1)

/* Glass Morphism */
shadow-glass: 0 8px 32px 0 rgba(31,38,135,0.17)
```

---

## Spacing Scale

```
xs:  4px  (0.25rem)
sm:  8px  (0.5rem)
md:  16px (1rem)
lg:  24px (1.5rem)
xl:  32px (2rem)
2xl: 48px (3rem)
3xl: 64px (4rem)
```

---

## Border Radius

```
sm:  4px  (rounded-sm)
md:  8px  (rounded-md)
lg:  12px (rounded-lg)
xl:  16px (rounded-xl) ← Used for cards
2xl: 20px (rounded-2xl) ← Used for large elements
```

---

## State Styles

### Hover States
- Buttons: Darker color + shadow lift
- Cards: Scale 1.02 + shadow increase
- Links: Color change + underline
- Inputs: Border color change + ring

### Focus States
- Inputs: Sage border + light ring
- Buttons: Ring outline
- Links: Underline + outline

### Active States
- Buttons: Darker color
- Links: Bold text
- Nav items: Underline

---

## Empty States

### No Products
- Icon: Large folder/box
- Text: "No products found"
- Subtext: "Try adjusting filters"
- Button: "Clear filters" or "Browse all"

### No Orders
- Icon: Receipt
- Text: "No orders yet"
- Subtext: "Start shopping to see your orders"
- Button: "Start shopping"

---

## Loading States

### Skeleton Loaders
- Background: #E8E8E8
- Animate: Pulse 2s
- Border Radius: Same as component

### Loading Spinner
- Size: 24px
- Color: Sage green
- Animation: Spin infinite

---

## Form Validation

### Valid State
- Border: Green or no change
- Icon: Green checkmark
- Message: "Good to go!"

### Error State
- Border: Red/coral color
- Icon: Red X or alert
- Message: "This field is required"
- Background: Light red/coral

---

## Payment Form Components

### Card Input
```
Card Number: •••• •••• •••• 1111
Expires: MM/YY
CVC: •••
Zip: 12345
```

### Bank Transfer
```
Account: 9876543210
Routing: 123456789
SWIFT: MWBKUS33
```

---

## Product Card Structure

```
┌─────────────────────┐
│  [Product Image]    │
│  Category Badge     │
├─────────────────────┤
│ Product Name        │
│ ★★★★★ (324)        │
│ $29.00 $39.00      │
│ [Get Instant Access]│
└─────────────────────┘
```

---

## Checkout Form Structure

```
Left Column:
┌─────────────────────┐
│ Email Address       │
│ Full Name           │
│ Card Number         │
│ Expiry | CVC        │
│ Promo Code [Apply]  │
│ [Complete Purchase] │
└─────────────────────┘

Right Column (Sticky):
┌─────────────────────┐
│ [Product Image]     │
│ Product Name        │
│ Price: $29.00       │
│ Tax (8.2%): $2.38   │
│ Total: $31.38       │
└─────────────────────┘
```

---

## Success Page Layout

```
Centered Column:
┌──────────────────────┐
│  ✓ Checkmark Icon    │
│  Payment Successful! │
│  (Confetti Animation)│
│                      │
│  [Download Button]   │
│  [Account Button]    │
│                      │
│  Order #MB-94021     │
│  Date: 3/28/2026     │
│  Amount: $31.38      │
│                      │
│  [Continue Shopping] │
└──────────────────────┘
```

---

## Accessibility Features

✅ Alt text on all images  
✅ ARIA labels on buttons  
✅ Keyboard navigation  
✅ Focus indicators  
✅ Color contrast (WCAG AA)  
✅ Semantic HTML  
✅ Skip links  
✅ Form labels  

---

## File Paths Reference

### Images
- Products: `/products/anxiety-toolkit.jpg`, etc.
- Hero: `/images/hero-mockup.jpg`
- Dashboard: `/images/dashboard-hero.jpg`

### Components
- Core: `/components/Navbar.tsx`, `Footer.tsx`, etc.
- UI: `/components/ui/button.tsx`, `card.tsx`, etc.

### Styles
- Global: `/app/globals.css`
- Config: `/tailwind.config.ts`

---

*Visual Reference Complete*  
*All components documented and verified*
