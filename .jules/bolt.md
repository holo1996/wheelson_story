## 2025-05-14 - [Initial Optimization for wheelson_story]
**Learning:** Pre-hiding elements in HTML/CSS instead of JS is critical for avoiding CLS and FOUC in static sites. Missing image dimensions are the primary cause of layout instability here.
**Action:** Always apply 'hidden' classes in source HTML and provide explicit dimensions for media assets.
