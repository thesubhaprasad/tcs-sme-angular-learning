# Angular Product Catalog · Day 1

Trainer: Subha Prasad, TCS Assets Consultant (C3A).
12 October 2026, 10:00–11:00 AM IST, Microsoft Teams.
Branch: `tcs-sme-angular/day-one`.

Static product catalog; JavaScript values, arrays and functions; TypeScript interface and standalone component.

## Setup and run

Use Node 24.15+ within the 24.x line (or supported Node 22.22.3+/26+) and npm. Angular/CLI/build 22.2.2, TypeScript 6.0.3, RxJS 7.8.2 are pinned. Angular 22 uses zoneless change detection by default.

```sh
cd angular/product-catalog
npm ci
npm start
```

Open http://127.0.0.1:4200. From this folder, run:

```sh
npm run check:day-one
npm run build
```

The checks run pure JavaScript/TypeScript lesson assertions. Build checks Angular templates and TypeScript. The browser workflow has also been checked; see training/angular/day-1/VALIDATION.md.

## Start state and demonstration

3 products: Notebook ₹80 in stock, Pen ₹20 out of stock, Bag ₹500 in stock. Summary: 3 total, 2 in stock.




## Learner exercise

A fourth product on the screen

- Add Bottle in the data file.
- Save and inspect the browser.
- Explain why both counts change.

Use a unique ID and a comma between objects. Give learners time to find the file, edit and describe @for. Restore the prepared data before branch switching. Day 2 intentionally has Bottle out of stock.

## Knowledge check

- 1  Which keyword allows reassignment?
- 2  Which method transforms every array item?
- 3  Which method selects matching items?
- 4  How does Angular display a field?
- 5  What identifies each repeated product?

Answers: let, map, filter, interpolation {{ field }}, track product.id. Ask why a template component must appear in the parent imports.

## Project reading order

1. src/main.ts: bootstrap and application providers.
2. src/app/app.component.ts and its template: composition and parent state.
3. src/app/models/product.model.ts and data/products.ts: shape and initial lesson data.
4. src/app/components/: reusable templates with comments.

## Teaching material

PPT, trainer notes and validation report: training/angular/day-1/ from the repository root (../../training/angular/day-1/ from this project folder). Coverage mapping: training/angular/TOPIC_COVERAGE.md. Optional reference topics supplement the one-hour lesson. The official TCS E1 syllabus was not supplied; course IDs are references provided by the trainer.

## Local production preview

```sh
npm run build
python3 -m http.server 8080 --directory dist/product-catalog/browser
```

Open http://127.0.0.1:8080. Day 5 uses hash routes for a simple static preview. A build produces local files and does not deploy them.

## Sources

- https://angular.dev/guide/components
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- https://angular.dev/reference/versions
- https://angular.dev/guide/templates
- https://angular.dev/guide/templates/binding
- https://angular.dev/guide/components/inputs
- https://angular.dev/guide/templates/control-flow
- https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
- https://www.typescriptlang.org/docs/handbook/2/classes.html
