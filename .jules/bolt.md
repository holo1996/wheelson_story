## 2024-05-25 - [Initial Audit]
**Learning:** Heavy assets (4.1MB poster) and unused CDN scripts (FontAwesome) are the main bottlenecks. CSS-based hiding is better than JS-based hiding for CLS.
**Action:** Always check for unused external scripts and prefer server-side (or initial HTML) state for layout visibility to avoid CLS.
