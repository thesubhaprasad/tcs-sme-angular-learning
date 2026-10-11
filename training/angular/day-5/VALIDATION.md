# Day 5 validation

Angular 22.2.2 development build, Chromium at 1440px and 390px.

- Passed: Initial products, stock labels and summary
- Passed: Trimmed case-insensitive search
- Passed: Combined filters, no matches, reset, duplicate/out-of-stock guards and ₹580 cart
- Passed: Template-driven note trims input and submits with Enter
- Passed: Reactive validation, keyboard submit, trimmed values, course routes preserve cart
- Passed: Captured snapshot, resubmission and form-only reset
- Passed: Empty-cart submission error
- Passed: 390px mobile layout without horizontal overflow
- Passed: HTTP500 and recovery
- Passed: malformed JSON and recovery
- Passed: bad schema and recovery
- Passed: empty and recovery
- Passed: Delayed loading → success; filters do not refetch
- No uncaught browser errors.
- All cumulative Node lesson assertions passed.
- Production build passed.
- Passed: the same 13 browser checks against the production build served locally, including reactive form, snapshot, hash navigation, HTTP failure/retry and mobile layout.
