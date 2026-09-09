**Comparison Target**

- Source visual truth: `/var/folders/5f/9hwrkwd55lz57g2xyv861hj80000gn/T/TemporaryItems/NSIRD_screencaptureui_Xy7hWk/스크린샷 2026-09-09 오전 1.07.54.png`
- Implementation screenshot: `/private/tmp/yeoul-ios-final.png`
- Side-by-side comparison: `/private/tmp/yeoul-mobile-final-comparison.png`
- State: Home map in iPhone Safari with the bottom address bar visible.
- Viewport: iPhone 17 simulator, 402 × 874 CSS px at device scale factor 3.
- Source pixels: 598 × 1192, including the scaled Simulator frame and surrounding desktop.
- Implementation pixels: 1206 × 2622, corresponding to 402 × 874 CSS px at 3× density.
- Normalization: Cropped the source to its 550 × 1175 device region and scaled the implementation to the same 1175 px comparison height. Browser chrome differences were treated as environment-owned, not app UI.

**Full-view Comparison Evidence**

- Before the fix, the map was constrained by `svh`, so Safari's reduced visible height shrank the image and created large gutters on both sides.
- The final implementation uses the full mobile viewport width, preserves the source aspect ratio, and allows the remaining map height to scroll beneath Safari's browser controls.
- The map is not cropped or stretched. All booth hit areas remain in the same percentage-positioned container as the image.

**Focused Region Comparison Evidence**

- A separate focused crop was not needed because the changed fidelity surface is the full-width map composition. Typography, popup styling, and the supplied map asset were unchanged.

**Required Fidelity Surfaces**

- Fonts and typography: No app-rendered typography on the home map; all visible map lettering remains part of the supplied raster asset and is unchanged.
- Spacing and layout rhythm: Mobile side gutters are removed. Desktop remains capped at 393 px. The image's intrinsic vertical rhythm and ratio are preserved.
- Colors and visual tokens: The supplied map colors and page background are unchanged.
- Image quality and asset fidelity: `map-3.png` remains the original 4913 × 10650 source and is rendered responsively without `object-cover` cropping.
- Copy and content: Map labels, accessible names, and all 16 booth routes are unchanged.

**Comparison History**

- Iteration 1 finding [P2]: Replacing the height constraint with `max-width: 393px` removed the large gutters, but left roughly 4.5 CSS px on each side of the 402 px iPhone 17 viewport.
- Iteration 1 fix: Applied the 393 px maximum only from the `sm` breakpoint upward. Mobile widths now use `width: 100%`, while desktop remains constrained.
- Post-fix evidence: `/private/tmp/yeoul-ios-final.png` shows the map reaching both mobile viewport edges while retaining its full source ratio and vertical scrolling.

**Interaction and Runtime Checks**

- Safari: Booth 1 link opened `/booths/1` as the dimmed map modal; the close control returned to `/` and removed the modal.
- Development log: No error, warning, uncaught exception, or console-equivalent runtime entry was found after the interaction check.
- Validation: `npm run lint` and `npm run build` passed.

**Findings**

- No actionable P0, P1, or P2 issues remain for the reported Safari width problem.

**Open Questions**

- None.

**Implementation Checklist**

- [x] Fill the mobile Safari viewport width.
- [x] Preserve the map's intrinsic aspect ratio.
- [x] Keep desktop width constrained.
- [x] Preserve percentage-based booth hit areas.
- [x] Verify booth open and close interactions in Safari.

**Follow-up Polish**

- None required for this issue.

final result: passed
