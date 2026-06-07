## 2026-06-06 - Synchronization of HTML and JS state
**Learning:** Pre-applying the `hidden` class in HTML for performance (preventing FOUC and TBT) must strictly match the JavaScript toggle threshold to avoid permanently hidden elements or UI desynchronization. In this project, the JS toggles cards with index >= 6, so only those specific cards should have the `hidden` class in the static HTML.
**Action:** Always verify that manual HTML modifications to initial visibility states perfectly align with the logic (indices/selectors) in the associated script.
