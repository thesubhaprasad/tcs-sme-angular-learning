# Angular Product Catalog · Day 5

Trainer: Subha Prasad, TCS Assets Consultant (C3A).
16 October 2026, 10:00–11:00 AM IST, Microsoft Teams.
Branch: `tcs-sme-angular/day-five`.

App-scoped CatalogStore, pure order helpers, reactive form validation, captured order preview and optional course routes.

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
npm run check:day-four
npm run check:day-five
npm run build
```

The checks run pure JavaScript/TypeScript lesson assertions. Build checks Angular templates and TypeScript. The browser workflow has also been checked; see training/angular/day-5/VALIDATION.md.

## Start state and demonstration

4 products: Notebook ₹80 in stock, Pen ₹20 out of stock, Bag ₹500 in stock, Bottle ₹250 out of stock. Summary: 4 total, 2 in stock, 2 out of stock.
Add Notebook and Bag: cart 2 items, ₹580. Remove Notebook: 1 item, ₹500. Out-of-stock and duplicate additions are blocked. Search trims whitespace and ignores case.
Products are loaded from public/products.json through ProductService. Empty JSON array is a valid empty catalog. Missing/invalid JSON, wrong schema, duplicate IDs and HTTP failures show error state; Retry reloads the resource. Filters do not refetch.
Submit with an empty cart, then with a short name, to show validation. With Notebook and Bag and name Demo Customer, preview total is ₹580. Removing Notebook changes the cart to ₹500 but keeps the submitted snapshot at ₹580 until resubmission. Reset clears only the order form and preview. Nothing is ordered or paid. Course references use hash routes and preserve the catalog shell.

## Learner exercise

A required Delivery city field

- Add a nonNullable city FormControl.
- Require its trimmed value.
- Add city to the draft helper and interface.
- Display it in the preview.
- Reset should clear it with the other controls.

Learner task: add a nonNullable city control with trimmed required validation, pass it to the helper, extend OrderDraft, render it and reset it. Blank city must block, Kolkata must appear, reset must clear, and Notebook+Bag must still total ₹580. Add city-specific accessible feedback. The starter leaves this feature for learners.

## Knowledge check

- 1  What decides service instance sharing?
- 2  What does formControlName connect?
- 3  What blocks invalid submission?
- 4  Why can a snapshot stay at ₹580?
- 5  Does ng build publish the app?

Answers: 1 Provider scope. 2 A named reactive control. 3 Validators plus the helper message and early return. 4 Items and total were copied at submission time. 5 No, ng build writes local files. Also compare raw preventDefault with Angular ngSubmit.

## Project reading order

1. src/main.ts: bootstrap and application providers.
2. src/app/app.component.ts and its template: composition and parent state.
3. src/app/models/product.model.ts and data/products.ts: shape and initial lesson data.
4. src/app/components/: reusable templates with comments.
5. src/app/services/ and data/: requests and runtime validation.
6. src/app/data/order-draft.ts and order-form component: form and copied snapshot.

## Teaching material

PPT, trainer notes and validation report: training/angular/day-5/ from the repository root (../../training/angular/day-5/ from this project folder). Coverage mapping: training/angular/TOPIC_COVERAGE.md. Optional reference topics supplement the one-hour lesson. The official TCS E1 syllabus was not supplied; course IDs are references provided by the trainer.

## Local production preview

```sh
npm run build
python3 -m http.server 8080 --directory dist/product-catalog/browser
```

Open http://127.0.0.1:8080. Day 5 uses hash routes for a simple static preview. A build produces local files and does not deploy them.

## Sources

- https://angular.dev/guide/components
- https://angular.dev/guide/forms/reactive-forms
- https://angular.dev/guide/di
- https://angular.dev/guide/components/lifecycle
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
- https://angular.dev/guide/templates/control-flow
- https://angular.dev/tools/cli/deployment
- https://angular.dev/guide/routing/define-routes
- https://angular.dev/guide/routing/show-routes-with-outlets
- https://angular.dev/guide/http/interceptors
- https://angular.dev/guide/http/testing
