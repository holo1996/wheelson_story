## 2026-05-30 - [FOUC and CLS in static galleries]
**Learning:** Hiding elements via JavaScript on DOMContentLoaded causes a Flash of Unstyled Content (FOUC). Pre-calculating and applying the 'hidden' state in static HTML is more performant and visually stable. Additionally, missing width/height on images causes significant CLS in flex/grid layouts.
**Action:** Always apply initial visibility states in HTML/CSS and provide explicit dimensions for all visual assets.
