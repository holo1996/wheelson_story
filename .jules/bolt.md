## 2024-05-27 - [Performance & Layout Stability]
**Learning:** Heavy visual assets (4.1MB video poster) and JavaScript-driven layout modifications (hiding cards on load) significantly degrade LCP and CLS. Pre-applying the 'hidden' state in HTML/CSS and providing explicit media dimensions are essential for a smooth, fast experience.
**Action:** Always audit asset sizes for above-the-fold content and prefer static CSS/HTML states over JS-based layout initialization to prevent FOUC and layout shifts.
