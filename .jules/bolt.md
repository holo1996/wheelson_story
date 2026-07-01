## 2026-06-21 - LCP and CLS Optimization
**Learning:** Heavy PNG assets (4.1MB) for video posters and missing image dimensions are the primary performance killers in this static site. Converting to optimized JPEGs and providing explicit dimensions reduced LCP from several seconds to ~1.2s and CLS from ~0.2 to 0.004.
**Action:** Always audit video posters and card previews for dimensions and format. Use CSS to hide off-screen content (like overflow gallery cards) before JS runs to prevent Flash of Unstyled Content (FOUC).

**Learning:** Using absolute paths like `/wheelson_story/` in a project intended for local or varied hosting causes 404s.
**Action:** Stick to relative paths for all internal assets (CSS, JS, Images).
