# Angular Day 5: trainer notes

Subha Prasad · TCS Assets Consultant (C3A)
16 October 2026 · 10:00–11:00 AM IST · Microsoft Teams

35 slides. 60 live teaching minutes; reference slides have zero allocated minutes. Use branch tcs-sme-angular/day-five. Open the app before the session. Participants are JavaScript beginners. Explain each short example, run the matching lesson script, then demonstrate the Product Catalog. Code blocks on slides are excerpts unless explicitly complete. Prices are fictional INR values; cart has one entry per product.

## Slide 1: Angular · Day Five

Time: 2 minute(s).

Welcome learners in Microsoft Teams. Trainer: TCS Assets Consultant (C3A), SME. The Product Catalog uses fictional INR values.

Source: https://angular.dev/guide/components

## Slide 2: Today’s learning goals

Time: 2 minute(s).

Use a fictional customer name such as Demo Customer. The app never submits an order, sends customer details or charges money. Request state moves into a reusable component-scoped DI store. The shared cart remains owned by App.

Source: https://angular.dev/guide/forms/reactive-forms

## Slide 3: Day 5 topic index

Time: 2 minute(s).

The live teaching slides total 60 minutes. Untimed reference slides cover routing, guards, interceptors, testing and deployment recognition. The final slide remains last and contains the requested course IDs 75214 and 62104.


## Slide 4: Our five-day learning path

Time: 1 minute(s).

Ask learners to provide one concrete example from each day. JavaScript/TypeScript describe product data. Inputs/projection compose the page. Signals/events drive interaction. HTTP/DI handle the resource. Forms capture validated user input. The coverage checklist maps every original React slide to an Angular slide.

Source: https://angular.dev/guide/components

## Slide 5: The complete user flow

Time: 1 minute(s).

The cart accepts one entry per in-stock product, with no quantities. The practice preview captures the selected items, name, note and total at submission time. It stays in memory. Later edits do not rewrite an earlier snapshot until another valid submission.


## Slide 6: Component and service responsibilities

Time: 2 minute(s).

App is the nearest shared cart owner. It passes cart() to OrderForm. CatalogStore is provided by App, so its DestroyRef lifetime matches App. The form owns its own controls and preview; no sibling needs the customer name.

Source: https://angular.dev/guide/di

## Slide 7: Reusable stateful logic in a service

Time: 2 minute(s).

This is a conceptual counterpart of the React useProducts custom Hook. Angular uses injection and provider scopes rather than Hook invocation. Consumers in the same provider scope can share an instance. A component provider creates a new store per App instance. Do not describe DI services as automatically independent on every inject call.

Source: https://angular.dev/guide/di

## Slide 8: Extracting the Day 4 request logic

Time: 2 minute(s).

The screen snippet is structural. The full CatalogStore has typed readonly-product and status signals, an active subscription, ProductService, requestMessage and DestroyRef. The extracted method retains HTTP validation, loading, failure, retry and cancellation behavior.

Source: https://angular.dev/guide/di

## Slide 9: Request triggers after extraction

Time: 2 minute(s).

App calls store.load in ngOnInit and exposes a wrapper for Retry. Search/cart state does not invoke it. The resource URL stays fixed in ProductService. A dynamic URL would need an explicit parameter and trigger strategy. React dependency arrays and Hook-order rules do not apply.

Source: https://angular.dev/guide/components/lifecycle

## Slide 10: Services and plain helper functions

Time: 2 minute(s).

validateOrder and createOrderDraft are pure functions that require no injector. A class that calls inject must be constructed by Angular in a supported context. Node lessons exercise the pure helpers, not Angular component or service decorators.

Source: https://angular.dev/guide/di

## Slide 11: Typed reactive form controls

Time: 2 minute(s).

The actual customerName FormControl uses the custom trimmedName validator. Both controls are nonNullable, so reset returns them to their initial empty strings. FormGroup defines the control names and ReactiveFormsModule connects [formGroup]/formControlName to the template.

Source: https://angular.dev/guide/forms/reactive-forms

## Slide 12: Labels and the name control

Time: 2 minute(s).

Show form.controls.customerName.value while typing. The reactive control owns its value. Use for/id labels. Do not combine ngModel with formControlName on the same input. Angular strict template checks help find missing control/template names.

Source: https://angular.dev/guide/forms/reactive-forms

## Slide 13: Optional delivery note

Time: 2 minute(s).

Type Gift wrap please. The form reads note with getRawValue. The control has no required validator, so an empty note is valid. The captured preview displays None for an empty trimmed note.

Source: https://angular.dev/guide/forms/reactive-forms

## Slide 14: Handling form submission

Time: 2 minute(s).

The Angular form directive handles default browser navigation through ngSubmit. A raw DOM submit handler without that directive would use preventDefault. novalidate disables native HTML constraint validation, while explicit reactive validators still run. The enabled button lets learners see friendly error messages.

Source: https://angular.dev/guide/forms/reactive-forms

## Slide 15: Our practice form rules

Time: 2 minute(s).

A validator returns null when valid and a ValidationErrors object when invalid. This trimmed two-character rule rejects blank/one-character values for the teaching example. It is not a universal rule for real names. validateOrder also checks that the cart is nonempty before creating a draft.

Source: https://angular.dev/guide/forms/reactive-forms

## Slide 16: An error message and early return

Time: 2 minute(s).

The full submit method first marks all controls touched, then gets typed values, calls the helper, sets the message and returns early on error or an invalid form. A previous valid snapshot may remain after a failed later attempt, clearly labelled as its earlier captured data.

Source: https://angular.dev/guide/forms/reactive-forms

## Slide 17: Accessible validation feedback

Time: 2 minute(s).

The name input uses aria-required, aria-invalid and aria-describedby. An empty-cart error does not mark the name invalid. Reactive controls also expose touched/dirty/invalid state. For the city exercise, associate city-specific feedback with the city input.

Source: https://angular.dev/guide/forms/reactive-forms

## Slide 18: Creating the practice draft

Time: 2 minute(s).

OrderDraft documents submitted values. map creates a new array and new item objects rather than storing a reference to the editable cart. reduce computes the snapshot total. Notebook ₹80 plus Bag ₹500 equals ₹580, with no delivery charge or tax calculation in this practice app.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 19: Rendering the submitted preview

Time: 2 minute(s).

The real preview uses CurrencyPipe, the submitted name/note and a tracked item list. The message explicitly says no order has been placed. Standard interpolation treats user text as text; do not use raw HTML to display delivery notes.

Source: https://angular.dev/guide/templates/control-flow

## Slide 20: Current cart and captured snapshot

Time: 1 minute(s).

Demo: preview Notebook+Bag at ₹580, remove Notebook and observe current cart ₹500 but snapshot ₹580. Submit again and observe preview ₹500. This illustrates deliberate captured data, not React render timing.


## Slide 21: Reset only the order form

Time: 2 minute(s).

nonNullable controls reset to the initial empty strings. Reset also clears error and draft. Its button uses type=button, so it does not submit. The current App cart remains selected. Page reload resets all app memory and starts loading again.

Source: https://angular.dev/guide/forms/reactive-forms

## Slide 22: Checking the complete workflow

Time: 1 minute(s).

Check empty cart, spaces-only and one-character names, trimming, optional note, keyboard Enter, stock guards, filters, current-cart versus snapshot behavior, reset isolation and reload. Check HTTP error/Retry and a narrow viewport too.


## Slide 23: Build and serve locally

Time: 2 minute(s).

Angular build writes browser files under dist/product-catalog/browser, including the public JSON resource. A local static server checks that output; it does not publish a site. This app uses hash routing for its optional route demo so the static preview needs no path fallback. Production hosting and asset subpaths need their own configuration.

Source: https://angular.dev/tools/cli/deployment

## Slide 24: Our final practice order preview

Time: 4 minute(s).

Show the actual Angular browser screenshot with fictional Demo Customer and Gift wrap please. Trace cart inputs, reactive controls, the trimmed-name validator, pure draft helper and conditional preview. The app does not send an order or payment.


## Slide 25: Project file walkthrough

Time: 3 minute(s).

Run npm run check:day-five. Read App, CatalogStore, ProductService, OrderForm and order-draft.ts. The Node example uses the static product dataset for isolated pure helpers, while the live app fetches JSON. A course-reference route is implemented below the persistent catalog shell.


## Slide 26: A required Delivery city field

Time: 5 minute(s).

Learner task: add a nonNullable city control with trimmed required validation, pass it to the helper, extend OrderDraft, render it and reset it. Blank city must block, Kolkata must appear, reset must clear, and Notebook+Bag must still total ₹580. Add city-specific accessible feedback. The starter leaves this feature for learners.


## Slide 27: Common Day 5 mistakes

Time: 1 minute(s).

A missing ReactiveFormsModule breaks form directives. A mismatched formControlName cannot connect to the group. Keep reactive controls separate from ngModel. Provider scope controls service sharing. Pure helpers need no DI. A local preview never implies an actual placed order.

Source: https://angular.dev/guide/forms/reactive-forms

## Slide 28: Final knowledge check

Time: 3 minute(s).

Answers: 1 Provider scope. 2 A named reactive control. 3 Validators plus the helper message and early return. 4 Items and total were copied at submission time. 5 No, ng build writes local files. Also compare raw preventDefault with Angular ngSubmit.

Source: https://angular.dev/guide/di

## Slide 29: Your next Angular practice

Time: 1 minute(s).

Homework: store maximum-price input text in a signal, treat blank as no limit, validate before Number and compute the matches. At ₹100, Notebook and Pen appear before applying stock. Explain the whole app and practise request errors. The official TCS syllabus has not been supplied; certification follows official requirements.


## Slide 30: Routing configuration

Time: 0 minute(s) · optional reference.

Read app.routes.ts. The first match wins and wildcard belongs last. The root path uses pathMatch full. The catalog/cart stay mounted above RouterOutlet, so their state survives navigation. withHashLocation supports the simple static-build preview.

Source: https://angular.dev/guide/routing/define-routes

## Slide 31: RouterLink and RouterOutlet

Time: 0 minute(s) · optional reference.

The Day 5 project implements RouterLink to the courses route and RouterOutlet below the catalog shell. Import both in the standalone App and register provideRouter(routes, withHashLocation()) in main.ts. Navigation shows the course references without reloading the app.

Source: https://angular.dev/guide/routing/show-routes-with-outlets

## Slide 32: Route parameters and lazy loading

Time: 0 minute(s) · optional reference.

This is a future extension example. A product-detail file and parameterized route are not included in the beginner starter. ActivatedRoute can read the parameter, and loadComponent can import a page lazily. Explain the URL/resource relation before implementing it.

Source: https://angular.dev/guide/routing/define-routes

## Slide 33: Guards, interceptors and validation

Time: 0 minute(s) · optional reference.

Guards control browser route navigation; they do not secure a backend. Interceptors can add headers or handle request/response behavior centrally. Real authorization and validation belong on the server too. Do not place secret API keys in a browser bundle. This is reference coverage rather than a live auth implementation.

Source: https://angular.dev/guide/http/interceptors

## Slide 34: Testing and deployment practice

Time: 0 minute(s) · optional reference.

The delivered examples include runnable helper checks and full browser interaction checks. Angular TestBed and HttpTestingController are next-step testing tools. They are explained without claiming an unconfigured npm test script exists. Hash routing works with the simple static server; path routing needs a server fallback.

Source: https://angular.dev/guide/http/testing

## Slide 35: Thank you · Course IDs

Time: 1 minute(s).

The two course IDs 75214 and 62104 were supplied by Subha Prasad. Course titles, portal links and deadlines were not supplied. Check the internal learning portal. Close with questions and continued practice, without promising certification.
