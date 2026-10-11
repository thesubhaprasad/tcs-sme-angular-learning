# Angular Day 4: trainer notes

Subha Prasad · TCS Assets Consultant (C3A)
15 October 2026 · 10:00–11:00 AM IST · Microsoft Teams

34 slides. 60 live teaching minutes; reference slides have zero allocated minutes. Use branch tcs-sme-angular/day-four. Open the app before the session. Participants are JavaScript beginners. Explain each short example, run the matching lesson script, then demonstrate the Product Catalog. Code blocks on slides are excerpts unless explicitly complete. Prices are fictional INR values; cart has one entry per product.

## Slide 1: Angular · Day Four

Time: 1 minute(s).

Welcome learners in Microsoft Teams. Trainer: TCS Assets Consultant (C3A), SME. The Product Catalog uses fictional INR values.

Source: https://angular.dev/guide/components

## Slide 2: Today’s learning goals

Time: 1 minute(s).

Keep the Day3 interactions. HttpClient and an injected service replace direct fetch in the live Angular app. Plain fetch concepts are still covered as in React.

Source: https://angular.dev/guide/http/making-requests

## Slide 3: Day 4 topic index

Time: 1 minute(s).

Reference slides add setup, stream operators and Promise/fetch cancellation details. Core and extra material are labelled separately.


## Slide 4: Day 3 state and derived values

Time: 2 minute(s).

An empty initial array does not distinguish waiting from success-empty; a separate status does. The summary is hidden until success.

Source: https://angular.dev/guide/signals

## Slide 5: JSON product data

Time: 2 minute(s).

Open public/products.json. This slide shows one object inside the array. No export declaration belongs in JSON.

Source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Slide 6: The local resource URL

Time: 2 minute(s).

Use the CLI server, not direct HTML file opening. Root-relative paths assume hosting at the site root. Adjust paths when deploying to a subdirectory.

Source: https://angular.dev/reference/configs/workspace-config

## Slide 7: A Promise represents a future result

Time: 2 minute(s).

This is plain browser JavaScript background. HttpClient returns an Observable in the live app. A fulfilled fetch Promise supplies a Response, then body parsing takes another step.

Source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Slide 8: async and await

Time: 2 minute(s).

Introductory excerpt omits HTTP checks and validation. The Node lesson also awaits file reading to practise this syntax. Avoid mixing Promise .then and subscribe without explaining their different models.

Source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Slide 9: try and catch

Time: 2 minute(s).

Excerpt belongs inside an async function. In TypeScript strict mode error is unknown; narrow before reading message. An Observable subscribe uses an error callback instead of catching a later emission with a surrounding try.

Source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

## Slide 10: HTTP status and failure handling

Time: 2 minute(s).

fetch response.ok is true for HTTP 200–299. Plain fetch does not reject solely for HTTP 404/500, while HttpClient sends unsuccessful HTTP responses to the error callback. The live service returns parsed JSON data, so do not try to read response.ok on that body.

Source: https://angular.dev/guide/http/making-requests

## Slide 11: Checking the loaded data

Time: 2 minute(s).

Open validate-products.ts. The boundary accepts unknown and checks that it is an array. Each product needs a unique nonblank ID, nonblank name, finite nonnegative numeric price, known category and boolean stock flag. Empty arrays are valid. A TypeScript generic cannot perform these runtime checks.

Source: https://angular.dev/guide/http/making-requests

## Slide 12: Template, event and lifecycle work

Time: 2 minute(s).

This translates render/event/Effect responsibilities. Angular does not use React useEffect. Do not fetch from a getter or interpolation, which may run repeatedly.

Source: https://angular.dev/guide/components/lifecycle

## Slide 13: Services and dependency injection

Time: 2 minute(s).

Open ProductService and main.ts. @Injectable({providedIn: "root"}) registers this stateless service at application scope, inject(HttpClient) obtains the configured client, and provideHttpClient enables it. The method uses get<unknown>().pipe(map(validateProducts)). App owns the request status today.

Source: https://angular.dev/guide/di

## Slide 14: Request triggers and dependencies

Time: 2 minute(s).

ngOnInit starts the initial request once per App instance. Retry explicitly calls loadProducts. Search and cart methods do not invoke loading. There is no React dependency array in this implementation. Dynamic resource inputs need their own change trigger, such as ngOnChanges or an explicit observable pipeline.

Source: https://angular.dev/guide/components/lifecycle

## Slide 15: Avoid accidental request loops

Time: 2 minute(s).

Every subscription to this cold HttpClient Observable issues a request. Subscribe once for each intended attempt. Never create subscriptions from a template getter. The real method unsubscribes the previous request and includes error handling plus destruction cleanup. Angular development checks are not React StrictMode setup/cleanup cycles.

Source: https://angular.dev/guide/http/making-requests

## Slide 16: Loading, error and success

Time: 2 minute(s).

A status union prevents contradictory independent booleans. Retry does not need a React counter here; the method directly restarts the request.

Source: https://angular.dev/guide/signals

## Slide 17: Starting the request

Time: 2 minute(s).

Read the first lines of loadProducts: unsubscribe the old attempt, set loading, clear error, subscribe to the service. The app has no artificial delay. Use browser Network throttling with cache disabled to make the loading message visible.

Source: https://angular.dev/guide/http/making-requests

## Slide 18: Receiving successful data

Time: 2 minute(s).

This next property belongs inside subscribe({...}). On successful validated data, products.set updates the source and status.set("success") reveals the catalog. HttpClient normally completes after its response. A validator error thrown in the RxJS map pipeline reaches error instead.

Source: https://angular.dev/guide/http/making-requests

## Slide 19: Displaying request states

Time: 2 minute(s).

The full template also includes a heading and Retry button for failure. Summary/cards are hidden while waiting or after an error. A successful empty array receives the resource-empty message. Show that no request failure masquerades as a successful zero total.

Source: https://angular.dev/guide/templates/control-flow

## Slide 20: Empty data and no filter matches

Time: 2 minute(s).

Try [] in public/products.json, reload and observe No products are available yet. Restore the four-item array. Search for Laptop in the normal catalog to see the distinct no-filter-matches message. Both are valid successful request outcomes.

Source: https://angular.dev/guide/templates/control-flow

## Slide 21: Retry after a failed request

Time: 1 minute(s).

Temporarily rename public/products.json to products-backup.json and reload. Some dev servers return HTML for a missing route, which causes a JSON parsing error rather than HTTP 404. Restore the resource and click Retry. The same page should show loading and then the catalog, without a full reload.

Source: https://angular.dev/guide/http/making-requests

## Slide 22: Cancellation and destruction cleanup

Time: 1 minute(s).

Inject DestroyRef in a class field. Pass it to takeUntilDestroyed because loadProducts runs after construction. This unsubscribes when the owner is destroyed. Explicit unsubscribe before Retry cancels the old attempt sooner. HttpClient cancellation uses subscription cleanup. Plain browser fetch uses AbortController. Cancellation cannot undo a server-side mutation already performed.

Source: https://angular.dev/guide/http/making-requests

## Slide 23: Observable callbacks and async functions

Time: 1 minute(s).

The error callback narrows/normalizes a failure using requestMessage, then sets error status. An Observable is not a Promise. Awaiting it does not subscribe, and a surrounding try/catch cannot catch a later stream emission. Reference slides explain firstValueFrom as an intentional bridge.

Source: https://angular.dev/guide/http/making-requests

## Slide 24: Our loaded Product Catalog

Time: 4 minute(s).

Show the actual Angular screenshot after the HTTP response. Inspect Network products.json, then add Notebook and Bag for ₹580. Static products.ts is retained for previous lesson scripts, but App now reads the HTTP result. Reload resets filters, cart and note.


## Slide 25: Tracing the request in the project

Time: 3 minute(s).

Read main.ts provider setup, ProductService, validateProducts and App in that order. Run check:day-four to practise awaited file reading, JSON parsing and validation. Ask a learner to narrate subscription, validated next value, signal write and template update.


## Slide 26: Loading and error experiments

Time: 3 minute(s).

Use slow network throttling with cache disabled. Observe loading then four cards. Simulate unavailable resource, malformed JSON, invalid schema and HTTP 500. Restore the resource and Retry. Remove throttling afterwards. Typing in search must not add products requests.


## Slide 27: Changing JSON and the empty state

Time: 5 minute(s).

Give learners time to change Notebook from ₹80 to ₹100. Reload, add Notebook and Bag, and expect ₹600. Try [] and explain valid empty success. Restore the original ₹80 price and four products. Optional extension: add P-105 Pencil, ₹10, Stationery, inStock true. Counts become 5/3/2 and Notebook+Bag+Pencil totals ₹590.


## Slide 28: Common Day 4 mistakes

Time: 1 minute(s).

A missing provideHttpClient causes a dependency injection error. Repeated subscriptions produce repeated requests. Await does not activate an Observable. A TypeScript type is not runtime validation. Cleanup must match the lifetime of the component. Locate the corresponding correct file for each mistake.

Source: https://angular.dev/guide/http/making-requests

## Slide 29: Day 4 knowledge check

Time: 3 minute(s).

Answers: 1 An Observable. 2 Subscribing. 3 The error callback. 4 Explicit unsubscribe for replacement and takeUntilDestroyed for owner destruction. 5 No, an empty array is valid success. Ask how this differs from plain fetch: unsuccessful HTTP status requires response.ok checking there.

Source: https://angular.dev/guide/http/making-requests

## Slide 30: Recap and next practice

Time: 1 minute(s).

Homework: add P-105 Pencil priced ₹10, Stationery, inStock true. Reload and expect 5 total, 3 in stock and 2 out of stock. Notebook+Bag+Pencil gives ₹590. Day 5 extracts request state into a scoped service and introduces a validated reactive form.

Source: https://angular.dev/guide/http/making-requests

## Slide 31: Observable basics

Time: 0 minute(s) · optional reference.

An RxJS Observable can emit zero, one or many values. This cold HTTP Observable starts when subscribed, normally emits one parsed response and completes. A long-lived stream may keep emitting. Unsubscribe activates teardown. The starter deliberately uses one subscription per intended request.

Source: https://rxjs.dev/guide/observable

## Slide 32: Promise and Observable comparison

Time: 0 minute(s) · optional reference.

Import firstValueFrom from rxjs before using this bridge. It resolves from the first emitted value and returns a Promise. This conversion does not automatically tie work to the component lifetime. Keep the native subscription pattern for the beginner starter.

Source: https://angular.dev/guide/http/making-requests

## Slide 33: RxJS operators and AsyncPipe

Time: 0 minute(s) · optional reference.

RxJS map transforms each emitted value; Array.map transforms array elements, so their roles differ. switchMap can replace an older inner request, catchError returns a recovery Observable, and AsyncPipe manages its subscription. Avoid simultaneous manual and AsyncPipe subscriptions to the same cold HTTP request unless duplicate requests are intended.

Source: https://angular.dev/guide/http/making-requests

## Slide 34: Plain fetch with AbortController

Time: 0 minute(s) · optional reference.

This excerpt belongs inside an async browser function and keeps the original fetch/AbortController concepts. Check response.ok, parse response.json, validate data, and ignore an intentional AbortError after controller.abort(). The live Angular service uses HttpClient and subscription cancellation instead.

Source: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
