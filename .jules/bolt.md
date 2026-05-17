## 2025-05-14 - [FOUC Prevention via HTML-first State]
**Learning:** Pre-applying 'hidden' or initial states in source HTML/CSS is superior to JavaScript-based manipulation for performance. It eliminates Flash of Unstyled Content (FOUC), stabilizes layout (CLS), and prevents the browser's preload scanner from fetching unnecessary assets that are meant to be hidden.
**Action:** Always check if a JS-driven UI state (like "show more" sections) can be initialized in HTML/CSS to prevent visual flickering.
