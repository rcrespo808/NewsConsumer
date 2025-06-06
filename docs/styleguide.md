# The Butler Brief – UI Styleguide

This guide defines the visual language and design profile of the NewsConsumer application, as outlined in the "Elegant UI Design Implementation – The Butler Brief" epic. It draws inspiration from a dignified butler with classic tones, focusing on readability, vintage structure, and a refined, trustworthy UX across desktop and tablet resolutions.

## Design Profile & Implementation Goals

- **Vision:** A responsive, elegant, and functional UI reflecting a dignified, vintage aesthetic. The tone is informed, classy, and trustworthy—like a valet reporting world affairs.
- **Layout:**
  - Responsive 3-column layout for desktop
  - 2-column stacked layout for tablet and mobile
  - Newspaper-style column layout for article previews
- **Typography:**
  - Headers: Playfair Display or Libre Baskerville
  - Body: Lora or Crimson Text
  - Mono: Fira Mono or JetBrains Mono
  - Font sizes and weights as specified below
- **Color Palette:**
  - Primary: #2E2A25 (Charcoal black foundation)
  - Secondary: #5E5347 (Aged bronze accent)
  - Tertiary: #C0A97D (Brushed gold highlight)
  - Background: #F3EFE7 (Parchment beige paper)
  - Surface: #D2C7B8 (Warm ivory cards)
  - Text Primary: #1E1B17 (Ink black main text)
  - Text Secondary: #665C4E (Soft umber hints)
  - Accent: #947C5F (Leather brown links)
  - Error/Alert: #8A3A3A (Deep burgundy warning)
- **Theming:**
  - Light and optional dark theme toggle with palette swap
- **Components:**
  - AppBar: Brand icon (butler portrait), styled search bar, responsive stacking
  - Sidebar Navigation (desktop): Vertical menu, gold hover accents, accessible
  - Bottom Navigation (tablet/mobile): Fixed, touch-friendly, icons for Home, Bookmarks, Info
  - Article Cards: Rounded corners, gold border, drop shadow, title, excerpt, thumbnail
  - Article Detail: Elegant serif layout, readable line lengths, styled headers and media
  - Buttons: Gold or leather-brown, rounded, with hover/focus feedback
  - Links: Underlined brown, gentle glow on hover
  - Inputs: Dark border, light paper background
  - Loading: Spinning pocket watch or elegant shimmer
  - Empty/Error States: Consistent styling

---

## Layouts: Desktop & Mobile

### Desktop Layout
- **Overall Structure:**
  - 3-column layout: Sidebar (left), Article List (center), Article Detail (right)
  - Max content width: 1200–1400px, centered
  - Margins: 32–48px outer margin, 24px between columns
- **Sidebar (Left, ~220–260px):**
  - Brand avatar (butler portrait) at top, 80–100px diameter, with margin
  - Vertical navigation: Home, Articles, About (large serif font, 24px, bold)
  - Background: parchment or ivory
  - Subtle right border or shadow
- **AppBar (Top, full width):**
  - Dark background (#2E2A25)
  - Brand icon (butler portrait) or logo at left
  - Large search bar, centered or right-aligned, with gold border and rounded corners
  - Height: 72–88px
  - Padding: 16–24px
- **Main Content:**
  - **Article List (Center column, ~400–500px):**
    - List of article preview cards
    - Each card: title (20–24px, bold), excerpt, thumbnail (left-aligned, 80–120px square)
    - Card margin: 16–24px vertical, 0–8px horizontal
    - Card: gold border, subtle shadow, rounded corners
    - Hover: elevation, gold glow
  - **Article Detail (Right column, ~400–600px):**
    - Full article content: headline, byline, date, body, images
    - Elegant serif layout, readable line length (max 70ch)
    - Padding: 32px
    - Scrollable if content overflows

### Mobile/Tablet Layout
- **Overall Structure:**
  - 2-column stacked layout: Navigation/AppBar (top), Main Content (below)
  - Max width: 100vw, padding 8–16px
- **AppBar (Top):**
  - Brand icon (butler portrait) at left, app name, search bar below or inline
  - Height: 56–64px
  - Responsive stacking for small screens
- **Bottom Navigation:**
  - Fixed at bottom, full width
  - Icons for Home, Bookmarks, Info
  - Touch-friendly: 56–64px height, 24–32px icon size
  - Gold accent for active/hover
- **Main Content:**
  - **Article List:**
    - Single column, full width
    - Cards stack vertically, margin 12–16px
    - Thumbnail above or left of text
  - **Article Detail:**
    - Full width, stacked below list or as modal
    - Readable font size (16–18px), 16–24px padding

---

## Color Palette

| Role | Hex | Description |
| --- | --- | --- |
| Primary | #2E2A25 | Charcoal black foundation |
| Secondary | #5E5347 | Aged bronze accent |
| Tertiary | #C0A97D | Brushed gold highlight |
| Background | #F3EFE7 | Parchment beige paper |
| Surface | #D2C7B8 | Warm ivory cards |
| Text Primary | #1E1B17 | Ink black main text |
| Text Secondary | #665C4E | Soft umber hints |
| Accent | #947C5F | Leather brown links |
| Error / Alert | #8A3A3A | Deep burgundy warning |

## Typography

* **Headers:** Playfair Display or Libre Baskerville
* **Body:** Lora or Crimson Text
* **Mono:** Fira Mono or JetBrains Mono

Font sizes and weights:

| Role | Size | Weight |
| --- | --- | --- |
| Headline (H1) | 32–36px | 700 |
| Section Header | 24px | 600 |
| Article Title | 20px | 600 |
| Body Text | 16px | 400–500 |
| Caption / Meta | 14px | 400 |
| Small / Timestamp | 12px | 400 |

## Layout & UI Components

### Cards
* Rounded corners, `border-radius: 12px`
* Thin gold border `1px solid #C0A97D`
* Subtle drop shadow `rgba(46,42,37,0.1)`

### Navigation
* Dark background `#2E2A25`
* Gold hover accents
* Icons reminiscent of pocket watches, pens, and scrolls

### Article Previews
* Newspaper-style column layout
* Lead paragraph in italic serif
* Include an image placeholder

### Interactive Elements

| Element | Style |
| --- | --- |
| Buttons | Gold background, black text, rounded corners |
| Links | Underlined brown with gentle glow on hover |
| Inputs | Dark border with light paper background |
| Modals | Centered parchment with bronze frame |
| Loading | Spinning pocket watch or elegant shimmer |

### Dark Mode (optional)
* Background `#1B1A17`
* Surface `#2E2A25`
* Text `#F3EFE7`
* Accent `#C0A97D`

## Brand Feel
Tone is informed, classy, and trustworthy—like a valet reporting world affairs.

