## 2026-06-21 - Line Ending Normalization causing Diff Noise
**Learning:** Normalizing line endings (CRLF to LF) across an entire file triggers a "full file rewrite" in Git, which obscures actual logic changes during code review.
**Action:** Avoid pre-emptive normalization of existing files. If line endings are inconsistent, fix only the lines being modified or handle normalization as a separate, isolated PR.
