# Angular Product Catalog · Day 4

Trainer: Subha Prasad, TCS Assets Consultant (C3A).
15 October 2026, 10:00–11:00 AM IST, Microsoft Teams.
Branch: `tcs-sme-angular/day-four`.

HttpClient, dependency injection, typed boundary validation, loading/error/empty/success states and retry.

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
npm run build
```

The checks run pure JavaScript/TypeScript lesson assertions. Build checks Angular templates and TypeScript. The browser workflow has also been checked; see training/angular/day-4/VALIDATION.md.

## Start state and demonstration

4 products: Notebook ₹80 in stock, Pen ₹20 out of stock, Bag ₹500 in stock, Bottle ₹250 out of stock. Summary: 4 total, 2 in stock, 2 out of stock.
Add Notebook and Bag: cart 2 items, ₹580. Remove Notebook: 1 item, ₹500. Out-of-stock and duplicate additions are blocked. Search trims whitespace and ignores case.
Products are loaded from public/products.json through ProductService. Empty JSON array is a valid empty catalog. Missing/invalid JSON, wrong schema, duplicate IDs and HTTP failures show error state; Retry reloads the resource. Filters do not refetch.


## Learner exercise

Changing JSON and the empty state

- Change Notebook’s price from 80 to 100.
- Reload and add Notebook + Bag: ₹600.
- Try [] and explain the success message.
- Restore the original resource.

Give learners time to change Notebook from ₹80 to ₹100. Reload, add Notebook and Bag, and expect ₹600. Try [] and explain valid empty success. Restore the original ₹80 price and four products. Optional extension: add P-105 Pencil, ₹10, Stationery, inStock true. Counts become 5/3/2 and Notebook+Bag+Pencil totals ₹590.

## Knowledge check

- 1  What does HttpClient.get return?
- 2  What starts its request?
- 3  Where do HTTP errors arrive?
- 4  How do we cancel old work?
- 5  Is an empty array a failure?

Answers: 1 An Observable. 2 Subscribing. 3 The error callback. 4 Explicit unsubscribe for replacement and takeUntilDestroyed for owner destruction. 5 No, an empty array is valid success. Ask how this differs from plain fetch: unsuccessful HTTP status requires response.ok checking there.

## Project reading order

1. src/main.ts: bootstrap and application providers.
2. src/app/app.component.ts and its template: composition and parent state.
3. src/app/models/product.model.ts and data/products.ts: shape and initial lesson data.
4. src/app/components/: reusable templates with comments.
5. src/app/services/ and data/: requests and runtime validation.

## Teaching material

PPT, trainer notes and validation report: training/angular/day-4/ from the repository root (../../training/angular/day-4/ from this project folder). Coverage mapping: training/angular/TOPIC_COVERAGE.md. Optional reference topics supplement the one-hour lesson. The official TCS E1 syllabus was not supplied; course IDs are references provided by the trainer.

## Local production preview

```sh
npm run build
python3 -m http.server 8080 --directory dist/product-catalog/browser
```

Open http://127.0.0.1:8080. Day 5 uses hash routes for a simple static preview. A build produces local files and does not deploy them.

## Sources

- https://angular.dev/guide/components
- https://angular.dev/guide/http/making-requests
- https://angular.dev/guide/signals
- https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
- https://angular.dev/reference/configs/workspace-config
- https://angular.dev/guide/components/lifecycle
- https://angular.dev/guide/di
- https://angular.dev/guide/templates/control-flow
- https://rxjs.dev/guide/observable
