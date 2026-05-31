## 2025-05-14 - FOUC and CLS Optimization in Static Gallery
**Learning:** Initializing the hidden state of gallery items via JavaScript causes both a Flash of Unstyled Content (FOUC) and a Cumulative Layout Shift (CLS) as elements are rendered and then suddenly removed/hidden.
**Action:** Always pre-apply "hidden" states in source HTML/CSS. Use JavaScript only to toggle existing classes rather than managing the initial visibility state, ensuring the browser's first paint is identical to the final desired state.
