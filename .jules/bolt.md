## 2026-06-21 - FontAwesome Defer & Preconnect
**Learning:** External CDN scripts like FontAwesome kit in `<head>` block parsing and rendering if loaded synchronously without `defer` or `async`. Adding `defer` and `<link rel="preconnect">` eliminates render blocking and speeds up First Contentful Paint (FCP).
**Action:** Always check external `<script>` tags in `<head>` for `defer`/`async` attributes and use `preconnect` hints for third-party script domains.
