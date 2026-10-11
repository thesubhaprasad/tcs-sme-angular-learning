# Angular Product Catalog · Day 3

Trainer: Subha Prasad, TCS Assets Consultant (C3A).
14 October 2026, 10:00–11:00 AM IST, Microsoft Teams.
Branch: `tcs-sme-angular/day-three`.

Output events, signals, computed filters, one-product-per-entry cart and a template-driven practice note.

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
npm run check:day-two
npm run check:day-three
npm run build
```

The checks run pure JavaScript/TypeScript lesson assertions. Build checks Angular templates and TypeScript. The browser workflow has also been checked; see training/angular/day-3/VALIDATION.md.

## Start state and demonstration

4 products: Notebook ₹80 in stock, Pen ₹20 out of stock, Bag ₹500 in stock, Bottle ₹250 out of stock. Summary: 4 total, 2 in stock, 2 out of stock.
Add Notebook and Bag: cart 2 items, ₹580. Remove Notebook: 1 item, ₹500. Out-of-stock and duplicate additions are blocked. Search trims whitespace and ignores case.



## Learner exercise

A category visibility checkbox

- Create showCategory = signal(true).
- Bind a labelled checkbox.
- Pass the signal value into ProductList.
- Prices stay visible in both states.

Learner task: add showCategory = signal(true) to App and a labelled checkbox with [checked] and a change handler reading its checked property. Pass showCategory() to ProductList, which already forwards it. Prices and cart actions must continue to work when categories are hidden. The starter intentionally leaves this task for learners.

## Knowledge check

- 1  When does a (click) method call run?
- 2  How do you read a signal?
- 3  Which checkbox property is boolean?
- 4  Why return a new cart array?
- 5  Who owns shared cart state?

Answers: 1 After the click. 2 Call the signal getter with (). 3 checked. 4 Avoid mutating the old array and supply a new value to reactive consumers. 5 App, the nearest shared parent. For the form, FormsModule and ngSubmit handle the default browser navigation.

## Project reading order

1. src/main.ts: bootstrap and application providers.
2. src/app/app.component.ts and its template: composition and parent state.
3. src/app/models/product.model.ts and data/products.ts: shape and initial lesson data.
4. src/app/components/: reusable templates with comments.

## Teaching material

PPT, trainer notes and validation report: training/angular/day-3/ from the repository root (../../training/angular/day-3/ from this project folder). Coverage mapping: training/angular/TOPIC_COVERAGE.md. Optional reference topics supplement the one-hour lesson. The official TCS E1 syllabus was not supplied; course IDs are references provided by the trainer.

## Local production preview

```sh
npm run build
python3 -m http.server 8080 --directory dist/product-catalog/browser
```

Open http://127.0.0.1:8080. Day 5 uses hash routes for a simple static preview. A build produces local files and does not deploy them.

## Sources

- https://angular.dev/guide/components
- https://angular.dev/guide/signals
- https://angular.dev/guide/templates/event-listeners
- https://angular.dev/guide/components/outputs
- https://angular.dev/guide/templates/binding
- https://angular.dev/guide/forms/template-driven-forms
- https://angular.dev/guide/components/inputs
