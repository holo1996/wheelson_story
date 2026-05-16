## 2025-05-15 - [Initial Analysis]
**Learning:** The project uses JavaScript to hide elements (gallery cards) on load, which causes Cumulative Layout Shift (CLS) and potentially triggers unnecessary image downloads.
**Action:** Use the HTML 'hidden' attribute or CSS 'display: none' in the source HTML for initially hidden elements to stabilize layout and improve performance.

## 2025-05-15 - [Media Dimensions and CLS]
**Learning:** Missing `width` and `height` attributes on `<img>` and `<video>` tags cause layout shifts as the browser calculates dimensions post-download. This is especially disruptive for hero sections.
**Action:** Always specify explicit dimensions for media assets. For responsive layouts, these serve as aspect ratio hints for the browser.

## 2025-05-15 - [Broken Asset Paths]
**Learning:** Absolute paths like `/wheelson_story/assets/...` fail in local environments if the project is served from the root.
**Action:** Use relative paths (e.g., `assets/...`) to ensure portability across different hosting environments.
