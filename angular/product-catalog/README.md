# Angular Product Catalog · Day 2

Trainer: Subha Prasad, TCS Assets Consultant (C3A).
13 October 2026, 10:00–11:00 AM IST, Microsoft Teams.
Branch: `tcs-sme-angular/day-two`.

Reusable components, input signals, projection, pipes and template control flow.

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
npm run build
```

The checks run pure JavaScript/TypeScript lesson assertions. Build checks Angular templates and TypeScript. The browser workflow has also been checked; see training/angular/day-2/VALIDATION.md.

## Start state and demonstration

4 products: Notebook ₹80 in stock, Pen ₹20 out of stock, Bag ₹500 in stock, Bottle ₹250 out of stock. Summary: 4 total, 2 in stock, 2 out of stock.




## Learner exercise

A brand on every card

- Add brand to the product objects.
- Add showBrand = input(true) to the card.
- Forward it from ProductList.
- Show the brand with @if.

The Product interface already includes optional brand. Use fictional brand text. Learners add the field, input forwarding and display. The starter intentionally leaves that work.

## Knowledge check

- 1  How does a child receive data?
- 2  Can it set an InputSignal?
- 3  Which placeholder projects nested content?
- 4  What does track identify?
- 5  Does @if insert zero as text?

Answers: input, no, ng-content, stable item identity, no. Also ask whether track becomes a child input: no.

## Project reading order

1. src/main.ts: bootstrap and application providers.
2. src/app/app.component.ts and its template: composition and parent state.
3. src/app/models/product.model.ts and data/products.ts: shape and initial lesson data.
4. src/app/components/: reusable templates with comments.

## Teaching material

PPT, trainer notes and validation report: training/angular/day-2/ from the repository root (../../training/angular/day-2/ from this project folder). Coverage mapping: training/angular/TOPIC_COVERAGE.md. Optional reference topics supplement the one-hour lesson. The official TCS E1 syllabus was not supplied; course IDs are references provided by the trainer.

## Local production preview

```sh
npm run build
python3 -m http.server 8080 --directory dist/product-catalog/browser
```

Open http://127.0.0.1:8080. Day 5 uses hash routes for a simple static preview. A build produces local files and does not deploy them.

## Sources

- https://angular.dev/guide/components
- https://angular.dev/guide/components/inputs
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- https://angular.dev/guide/components/content-projection
- https://angular.dev/guide/templates/control-flow
- https://angular.dev/guide/templates
- https://angular.dev/guide/templates/pipes
- https://angular.dev/guide/components/lifecycle
