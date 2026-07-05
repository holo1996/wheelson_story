## 2026-06-21 - Layout stability and FOUC prevention
**Learning:** Adding `width` and `height` attributes to images prevents Cumulative Layout Shift (CLS), but requires `height: auto` in CSS to maintain responsiveness. Implementing `.hidden` state in HTML instead of JS prevents Flash of Unstyled Content (FOUC).
**Action:** Always provide intrinsic dimensions for images and pre-apply hidden states for elements that should be collapsed on load.
