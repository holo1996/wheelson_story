## 2024-06-04 - Static Hiding vs JS for Performance

**Learning:** Pre-applying 'hidden' state in source HTML/CSS is superior to JavaScript-based hiding. It eliminates Flash of Unstyled Content (FOUC), stabilizes layout (CLS), and prevents the browser's preload scanner from fetching unnecessary assets (like images inside hidden cards) before they are requested.

**Action:** Always prefer CSS-based initial states for elements that should not be visible on page load. Use JavaScript only to handle dynamic state transitions (e.g., toggling visibility on user interaction).
