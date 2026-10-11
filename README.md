# TCS SME Angular learning

Trainer: Subha Prasad · TCS Assets Consultant (C3A)
12–16 October 2026 · 10–11 AM IST · Microsoft Teams

A standalone Angular training repository for JavaScript beginners, using the same commerce Product Catalog example throughout. This branch contains Day 2. React lives separately at https://github.com/thesubhaprasad/tcs-sme-reactjs-learning.

## Start the hands-on project

```sh
git clone git@github.com:thesubhaprasad/tcs-sme-angular-learning.git
cd tcs-sme-angular-learning
git checkout tcs-sme-angular/day-two
cd angular/product-catalog
npm ci
npm start
```

Open http://127.0.0.1:4200. Use supported Node 24.15+ in the 24.x line (or Node 22.22.3+/26+). Read [the app README](angular/product-catalog/README.md) for this day's demonstration, checks and learner exercise.

## Five-day progression

| Day | Branch | Topics |
| --- | --- | --- |
| 1 | `tcs-sme-angular/day-one` | JavaScript and TypeScript foundations, setup, components, interpolation and inputs |
| 2 | `tcs-sme-angular/day-two` | Reusable components, bindings, control flow, pipes and projection |
| 3 | `tcs-sme-angular/day-three` | Signals, computed values, outputs, search, filters and cart |
| 4 | `tcs-sme-angular/day-four` | Dependency injection, services, HTTP and loading/error/retry states |
| 5 | `tcs-sme-angular/day-five` | Shared state, reactive forms, order preview, routing and build |

`main` contains the complete Day 5 project and all five editable PPT decks. The daily branches contain cumulative lessons. Switch branches from the repository root; then run `npm ci` inside the app.

## Training materials

See [course overview](angular/README.md) and [topic coverage](training/angular/TOPIC_COVERAGE.md). Available days are under `training/angular/day-N`, including PPTX, trainer notes, screenshots and validation records. Day 5 ends with course IDs **75214** and **62104**.

The deck content and hands-on paths are preserved from the original training package. A Day 1 historical reference to React being in the repository root now refers to the separate React repository linked above; the trainer notes have been corrected. The source comparison in TOPIC_COVERAGE records the earlier React course, rather than files included in this repository.
