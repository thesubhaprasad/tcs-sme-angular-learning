# Angular Day 3: trainer notes

Subha Prasad · TCS Assets Consultant (C3A)
14 October 2026 · 10:00–11:00 AM IST · Microsoft Teams

34 slides. 60 live teaching minutes; reference slides have zero allocated minutes. Use branch tcs-sme-angular/day-three. Open the app before the session. Participants are JavaScript beginners. Explain each short example, run the matching lesson script, then demonstrate the Product Catalog. Code blocks on slides are excerpts unless explicitly complete. Prices are fictional INR values; cart has one entry per product.

## Slide 1: Angular · Day Three

Time: 1 minute(s).

Welcome learners in Microsoft Teams. Trainer: TCS Assets Consultant (C3A), SME. The Product Catalog uses fictional INR values.

Source: https://angular.dev/guide/components

## Slide 2: Today’s learning outcomes

Time: 1 minute(s).

Fictional four-product dataset matches React Day3. Notebook and Bag are in stock. One entry per product keeps the cart small.

Source: https://angular.dev/guide/signals

## Slide 3: Day 3 topic index

Time: 1 minute(s).

Reference slides compare ngModel, model inputs, computed/effect and change detection.


## Slide 4: Day 2 inputs become interactive

Time: 2 minute(s).

Angular signals are getter functions. Read with () and write with set/update. Do not call React Hooks here.

Source: https://angular.dev/guide/signals

## Slide 5: Event handlers

Time: 2 minute(s).

Parentheses around click denote an Angular event binding. The method call is evaluated when that event fires.

Source: https://angular.dev/guide/templates/event-listeners

## Slide 6: When an Angular handler runs

Time: 2 minute(s).

React onClick={handler()} would call during render; Angular event bindings evaluate the expression at event time. Template interpolation calls run during checking, so avoid side effects there.

Source: https://angular.dev/guide/templates/event-listeners

## Slide 7: A handler with an argument

Time: 2 minute(s).

Compare browser $event objects with custom output payloads. output<Product>() types this event. There is no JSX arrow callback required in the template.

Source: https://angular.dev/guide/components/outputs

## Slide 8: A changing value needs reactive state

Time: 2 minute(s).

Angular22 is zoneless by default. Some bound-event updates of plain fields can still trigger checking, so do not copy the React claim that a local field never updates UI. Signals make reactivity explicit.

Source: https://angular.dev/guide/signals

## Slide 9: signal reads and writes

Time: 2 minute(s).

Unlike useState, signal does not return a [value,setter] tuple. Class readonly refers to the signal binding, not prohibition on calling set.

Source: https://angular.dev/guide/signals

## Slide 10: Placement rules for signals and inject

Time: 2 minute(s).

Signals are not React Hooks and do not require a stable call order across renders. inject is constrained by injection context. input/output are compiler-recognized field initializers.

Source: https://angular.dev/guide/signals

## Slide 11: Current values and captured snapshots

Time: 2 minute(s).

This covers the React render-snapshot topic without falsely saying signal.set waits for the next render to change signal(). Day5 captures a submitted cart snapshot intentionally.

Source: https://angular.dev/guide/signals

## Slide 12: An update from the previous value

Time: 2 minute(s).

Signal update is synchronous rather than a React pending-state update queue. Avoid requests in this calculation. The real handler includes stock and duplicate checks.

Source: https://angular.dev/guide/signals

## Slide 13: Controlled search input

Time: 2 minute(s).

The actual FilterBar receives search as an input and emits searchChange; this direct-binding example first teaches the pieces. Visible labels are included in the app.

Source: https://angular.dev/guide/templates/binding

## Slide 14: Category selection

Time: 2 minute(s).

The actual list also includes Stationery. Use the element reference rather than an unsafe any cast of event.target.

Source: https://angular.dev/guide/templates/event-listeners

## Slide 15: A checkbox stores a boolean

Time: 2 minute(s).

Text input value is a string; checkbox checked is a boolean. The child component emits output<boolean> to its parent.

Source: https://angular.dev/guide/templates/binding

## Slide 16: Visible products are computed data

Time: 2 minute(s).

The actual App computes normalized text once per computed evaluation. Do not store visibleProducts as another writable signal. computed is memoized and tracks reads dynamically.

Source: https://angular.dev/guide/signals

## Slide 17: State shared by several children

Time: 2 minute(s).

This matches lifting shared state. DI services become an option later; App remains the simple cart owner.

Source: https://angular.dev/guide/components

## Slide 18: Outputs request a parent update

Time: 1 minute(s).

Angular custom outputs do not automatically bubble through the DOM. ProductList explicitly forwards the ProductCard add event. Use separate meaningful names.

Source: https://angular.dev/guide/components/outputs

## Slide 19: Adding a product to the cart

Time: 1 minute(s).

Out-of-stock buttons are disabled; App also guards stock. Duplicate Add becomes disabled as isInCart flows back into the card.

Source: https://angular.dev/guide/signals

## Slide 20: Removing a product from the cart

Time: 1 minute(s).

Avoid splice. The original array still contains the earlier items. CartPanel emits output<string>.

Source: https://angular.dev/guide/signals

## Slide 21: The total comes from the cart

Time: 1 minute(s).

This total covers selected fictional unit prices only. No quantity, tax or payment feature is implied.

Source: https://angular.dev/guide/signals

## Slide 22: Form submission and ngModel

Time: 1 minute(s).

NgForm handles the default navigation for this form. A raw (submit) handler without FormsModule would call event.preventDefault explicitly. Input name registers the template-driven control.

Source: https://angular.dev/guide/forms/template-driven-forms

## Slide 23: Resetting selected state

Time: 1 minute(s).

Describe the action boundary. Form note is separate local state. No persistence is added.

Source: https://angular.dev/guide/signals

## Slide 24: Our interactive Product Catalog

Time: 4 minute(s).

Show the actual Day 3 Angular screenshot: four products, two in stock and two out of stock. Add Notebook and Bag to the cart for two items and ₹580. Products still come from the static array today. JSON loading starts on Day 4.


## Slide 25: The files behind one click

Time: 3 minute(s).

Open App, FilterBar, ProductCard, ProductList and CartPanel. Ask learners to locate both the emitter and listener for a search or add event. Run npm run check:day-three to predict array-filter and total results.


## Slide 26: Search, filter and cart experiments

Time: 3 minute(s).

Demo steps: search "  NOTE  " and expect Notebook. Choose Accessories while the search remains and expect no matches. Clear search, check In stock only and expect Bag. Reset, add Notebook plus Bag (₹580), remove Notebook (₹500), then clear (₹0). Search and filter reset preserve cart items. Enter submits the note without navigation.


## Slide 27: A category visibility checkbox

Time: 8 minute(s).

Learner task: add showCategory = signal(true) to App and a labelled checkbox with [checked] and a change handler reading its checked property. Pass showCategory() to ProductList, which already forwards it. Prices and cart actions must continue to work when categories are hidden. The starter intentionally leaves this task for learners.


## Slide 28: Common Day 3 mistakes

Time: 1 minute(s).

Use compiler and browser messages to locate the component. A [value] binding without a state update can look frozen. Angular click expressions call methods at event time, unlike React handler-prop syntax.

Source: https://angular.dev/guide/signals

## Slide 29: Day 3 knowledge check

Time: 3 minute(s).

Answers: 1 After the click. 2 Call the signal getter with (). 3 checked. 4 Avoid mutating the old array and supply a new value to reactive consumers. 5 App, the nearest shared parent. For the form, FormsModule and ngSubmit handle the default browser navigation.

Source: https://angular.dev/guide/signals

## Slide 30: Recap and try at home

Time: 1 minute(s).

Homework: store maximum-price text in a signal. Blank means no limit. Validate it before converting with Number, then include the comparison in computed visibleProducts. At ₹100, Notebook and Pen match before the stock filter. Keep cartTotal in computed rather than copying it through an effect.

Source: https://angular.dev/guide/signals

## Slide 31: Two-way binding with ngModel

Time: 0 minute(s) · optional reference.

Angular supports writable signals in two-way bindings. The starter spells out [ngModel] plus (ngModelChange) to keep the flow visible. Avoid combining ngModel and reactive form directives on one control.

Source: https://angular.dev/guide/forms/template-driven-forms

## Slide 32: model inputs and event payloads

Time: 0 minute(s) · optional reference.

Example requires model imported and a matching component. This project intentionally uses input/output pairs for clarity. Outputs do not DOM-bubble.

Source: https://angular.dev/guide/components/inputs

## Slide 33: computed and effect

Time: 0 minute(s) · optional reference.

Angular effect is not React useEffect and has no explicit dependency array. Its dependency tracking and execution model differ. The HTTP lesson uses lifecycle and subscriptions instead.

Source: https://angular.dev/guide/signals

## Slide 34: Change detection and zoneless Angular

Time: 0 minute(s) · optional reference.

Recognize older Zone.js applications and OnPush strategy. This reference explains why a plain-field update in a bound event can still render, while signal state is the consistent pattern used here.

Source: https://angular.dev/guide/signals
