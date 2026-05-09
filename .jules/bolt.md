## 2025-05-14 - Static Hiding vs JS Hiding for CLS
**Learning:** Using JavaScript to hide elements (like gallery cards) after DOMContentLoaded causes significant Cumulative Layout Shift (CLS) and triggers unnecessary image downloads even with `loading="lazy"`. Browsers start fetching lazy images if they are initially part of the layout before JS hides them.
**Action:** Always use the `hidden` attribute or CSS `display: none` in the source HTML for elements that shouldn't be visible on load. This eliminates CLS and ensures `loading="lazy"` works correctly by not fetching hidden resources.
