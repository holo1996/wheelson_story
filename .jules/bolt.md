## 2026-06-06 - Video Poster Optimization
**Learning:** High-resolution PNGs used as video posters can exceed 4MB, significantly blocking Largest Contentful Paint (LCP). Converting to an optimized JPEG (75% quality, 1280px) reduces size by ~96% with minimal visual degradation.
**Action:** Always audit video posters for format and size; prioritize JPEG or WebP for large cinematic posters.

## 2026-06-06 - Preventing Diff Noise in HTML
**Learning:** Full-file rewrites on legacy HTML files can trigger massive diffs due to line-ending mismatches (CRLF vs LF), making PRs unreadable.
**Action:** Use `replace_with_git_merge_diff` for surgical changes. If line endings still cause issues, normalize the file to LF using a Python one-liner before applying the patch.
