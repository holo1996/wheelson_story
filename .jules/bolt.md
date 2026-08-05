# Bolt Journal - Critical learnings

## 2026-06-21 - Video Poster LCP Optimization
**Learning:** Using a heavy raw PNG format (4.1MB) as a background video poster results in massive LCP delays. Standardizing this critical above-the-fold asset to a compressed progressive JPEG with 1280px width reduces file size by ~95% (~206KB) without visual degradation, greatly improving initial paint and LCP. Furthermore, converting the absolute path `/wheelson_story/...` to a relative path prevents 404 errors during local development.
**Action:** Always inspect the format, resolution, and path of video poster images or hero banners above-the-fold first, and optimize them to modern compressed formats (progressive JPEG or WebP) with relative paths.
