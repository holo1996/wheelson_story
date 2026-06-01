## 2024-11-20 - Static Hiding vs JS Initialization
**Learning:** Pre-applying the `hidden` state to below-the-fold elements in static HTML is significantly better for performance than hiding them via JavaScript on `DOMContentLoaded`. It eliminates Flash of Unstyled Content (FOUC), prevents the browser's preload scanner from fetching hidden assets too early, and reduces main-thread execution time.
**Action:** Always prefer static CSS classes for initial visibility states. If logic depends on an index (e.g., show only first 6 cards), hardcode that threshold in the HTML template and only use JS for dynamic toggling.

## 2024-11-20 - Responsive CLS Prevention
**Learning:** Adding explicit `width` and `height` attributes to `<img>` tags is essential for zero CLS, but it can break responsive layouts (making images fixed-size).
**Action:** Whenever adding dimension attributes, ensure a global CSS rule `img { height: auto; }` is present to allow the browser to compute the correct responsive height based on the container width and the intrinsic aspect ratio provided by the attributes.
