# Bolt's Journal ⚡

## 2025-05-14 - Initial Performance Assessment
**Learning:** Using JavaScript to hide elements (like gallery cards) on `DOMContentLoaded` causes Cumulative Layout Shift (CLS) and triggers the browser's preload scanner to download images that are immediately hidden.
**Action:** Always pre-apply the `hidden` state (via HTML attribute or CSS class) to elements that should not be visible on page load. This stabilizes the layout and prevents redundant network requests.

**Codebase-specific bottlenecks:**
- Layout shift in the "Works" section due to JS-driven visibility.
- Missing image dimensions causing re-flows during asset loading.
- High initial weight due to lack of lazy loading for below-the-fold content.
- Absolute paths in `poster` attribute for `<video>` leading to broken previews in local environments.
