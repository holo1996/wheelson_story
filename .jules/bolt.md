# Bolt's Journal

## 2026-06-21 - LCP Poster Image Optimization
**Learning:** Heavy PNG video posters (like a 4.1MB file) act as major bottlenecks for Largest Contentful Paint (LCP) in static sites. Converting these posters to progressive JPEG, resizing to 1280px width, and optimizing quality down to 85% yields a massive (~95%) payload reduction while retaining high visual fidelity.
**Action:** Always inspect the video poster format and size first during performance profiling, and convert to progressive JPEG to minimize LCP.
