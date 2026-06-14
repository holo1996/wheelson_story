# Bolt's Journal - Critical Learnings

## 2026-06-14 - Image Optimization & CLS Prevention
**Learning:** Found a 4.1MB PNG video poster (`car_shot.png`) blocking LCP. Converting it to a 1280px wide JPEG reduced the payload by ~95% (to 215KB). Additionally, missing `width` and `height` attributes on images were causing significant Cumulative Layout Shift (CLS).
**Action:** Always verify image dimensions and provide them in HTML. Use `height: auto` in global CSS to maintain responsiveness. Convert heavy PNGs to optimized JPEGs for non-transparent assets.

## 2026-06-14 - FOUC in Gallery Loading
**Learning:** Initializing the gallery state (hiding cards) via JavaScript caused a Flash of Unstyled Content (FOUC), where 9 cards were briefly visible before being reduced to 6.
**Action:** Pre-apply 'hidden' states in source HTML/CSS. It's superior to JS-based hiding as it eliminates layout jumps and prevents unnecessary asset pre-fetching by the browser.
