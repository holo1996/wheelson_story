## 2026-06-21 - Massive LCP bottleneck in video posters
**Learning:** Video posters are often overlooked but can be a primary LCP element. Using heavy PNGs (4.1MB) for posters significantly delays the first meaningful paint.
**Action:** Always check the file size and format of `poster` attributes in `<video>` tags. Convert to progressive JPEGs and ensure dimensions match the video's aspect ratio.
