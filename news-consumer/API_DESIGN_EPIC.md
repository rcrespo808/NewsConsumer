# Epic: Elegant UI Design Implementation – "The Butler Brief"

## Goal
Design and implement a responsive, elegant, and functional UI for the NewsConsumer web app that reflects a dignified, vintage aesthetic, focusing on readability, classic structure, and a refined UX across desktop and tablet resolutions.

---

## 📌 Subtasks by Category

### 🖼️ General Layout & Theming
- Define global CSS/SCSS variables using the "Butler Brief" palette (color, typography, spacing).
- Implement responsive 3-column layout for desktop.
- Implement 2-column stacked layout for tablet and mobile.
- Apply base font families and font weights (e.g., Playfair Display, Lora, Fira Mono).
- Create light and optional dark theme toggle with palette swap.

### 🧱 App Shell Components
#### 🔹 AppBar
- Add brand icon (butler portrait) to the app bar.
- Implement styled search bar with rounded corners and gold border.
- Add focus/hover interaction with visual feedback (subtle glow or deep shadow).
- Make AppBar responsive: stacked on small screens.

#### 🔹 Sidebar Navigation (Desktop)
- Create vertical sidebar menu with buttons: Home, Articles, About.
- Add hover/click states using tertiary accent color.
- Add keyboard navigation support for accessibility.

#### 🔹 Bottom Navigation (Tablet/Mobile)
- Create fixed bottom nav with icons for Home, Bookmarks, and Info.
- Add touch-friendly spacing and active/hover states.

### 📄 Main Content
#### 🔹 Article List (Left Column)
- Create article preview cards with title, excerpt, and thumbnail.
- Support for dynamic rendering of API-fetched articles.
- Add responsive padding/margins and hover interaction (subtle elevation).
- Use lorem ipsum/gibberish text as placeholder content.

#### 🔹 Article Detail View (Right Column)
- Render selected article's full content in elegant serif layout.
- Style headers, paragraphs, and media elements appropriately.
- Ensure scrollability and readable line lengths.

### 🔧 Reusable Components
- Card component: handles titles, images, and descriptions.
- Button component: styled with gold or leather-brown tones.
- Loading shimmer or spinner using "pocket watch" theme.
- Empty state / error views with consistent styling.

### 🧪 Testing & QA
- Verify layout across breakpoints: desktop, tablet, mobile.
- Validate color contrast and accessibility (WCAG 2.1 AA).
- Add unit tests for layout and component rendering.
- Perform UX pass to confirm all hover/focus states are intuitive. 