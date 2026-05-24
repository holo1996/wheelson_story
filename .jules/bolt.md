## 2024-05-24 - [Unused JS Dependencies & Asset Optimization]
**Learning:** Initial page load was throttled by unused CDN dependencies (FontAwesome, imagesLoaded) and a massive 4MB video poster. Relying on JS to hide elements causes FOUC and increases TBT.
**Action:** Always check `grep` for library usage before including it. Move initial display states to HTML/CSS. Optimize posters to <200KB and use explicit dimensions for ALL media to kill CLS.
