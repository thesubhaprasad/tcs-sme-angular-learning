# Angular Day 2: trainer notes

Subha Prasad · TCS Assets Consultant (C3A)
13 October 2026 · 10:00–11:00 AM IST · Microsoft Teams

34 slides. 60 live teaching minutes; reference slides have zero allocated minutes. Use branch tcs-sme-angular/day-two. Open the app before the session. Participants are JavaScript beginners. Explain each short example, run the matching lesson script, then demonstrate the Product Catalog. Code blocks on slides are excerpts unless explicitly complete. Prices are fictional INR values; cart has one entry per product.

## Slide 1: Angular · Day Two

Time: 1 minute(s).

Welcome learners in Microsoft Teams. Trainer: TCS Assets Consultant (C3A), SME. The Product Catalog uses fictional INR values.

Source: https://angular.dev/guide/components

## Slide 2: Today’s learning outcomes

Time: 1 minute(s).

Same four products as React Day 2: Bottle is now out of stock. Counts4/2/2. Source configuration drives changes today.

Source: https://angular.dev/guide/components

## Slide 3: Day 2 topic index

Time: 1 minute(s).

Reference slides cover decorators, directives and lifecycle recognition. Core timing excludes those slides.


## Slide 4: Day 1 in one example

Time: 2 minute(s).

Recall function parameters and object properties. Angular inputs are class field declarations, not destructured function parameters.

Source: https://angular.dev/guide/components/inputs

## Slide 5: A component has a clear job

Time: 2 minute(s).

This is a structural outline. Avoid creating a component for each line of HTML. Section also wraps a different notes area.

Source: https://angular.dev/guide/components

## Slide 6: Component extraction

Time: 2 minute(s).

Compare a plain import with Angular metadata registration. Keep class and metadata outside another component class.

Source: https://angular.dev/guide/components

## Slide 7: Default and named imports

Time: 2 minute(s).

The default-export example is a separate module illustration, not in the same file as the import. Angular does not require default component exports.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 8: Inputs are component parameters

Time: 2 minute(s).

Inputs can change as parent data changes. Required inputs cause a build error when omitted in a template. input.required must be in a component field initializer.

Source: https://angular.dev/guide/components/inputs

## Slide 9: Reading fields from an input

Time: 2 minute(s).

A one-time destructured local value does not stay linked when the input changes. Use product() or computed for reactive derived values, rather than caching inputs once.

Source: https://angular.dev/guide/components/inputs

## Slide 10: Passing different value types

Time: 2 minute(s).

With strictTemplates and a boolean input, showCategory="false" is not the intended typed binding. A configured booleanAttribute transform changes coercion rules; this project uses explicit property binding.

Source: https://angular.dev/guide/components/inputs

## Slide 11: Default and required inputs

Time: 2 minute(s).

The default is for an omitted input. Binding undefined/null does not mean use the default; strict typing prevents these for the boolean input. The plain-JavaScript lesson compares parameter default undefined versus explicit null.

Source: https://angular.dev/guide/components/inputs

## Slide 12: Inputs are read-only

Time: 2 minute(s).

The Product interface uses readonly fields, but runtime objects are not deeply frozen. Mutating shared objects can still create hidden coupling. Outputs arrive Day 3.

Source: https://angular.dev/guide/components/inputs

## Slide 13: Nested content with ng-content

Time: 2 minute(s).

ng-content replaces the React children pattern conceptually. Projected content keeps the parent template context. Do not conditionally create ng-content placeholders.

Source: https://angular.dev/guide/components/content-projection

## Slide 14: The same wrapper, different content

Time: 2 minute(s).

Read SectionComponent. It owns the heading but not the projected card list data. Accessibility IDs must remain unique.

Source: https://angular.dev/guide/components/content-projection

## Slide 15: A condition chooses another UI

Time: 2 minute(s).

This illustrates the React early-return topic without returning JSX from an Angular class. The actual ProductList uses @for with @empty.

Source: https://angular.dev/guide/templates/control-flow

## Slide 16: A ternary selects a displayed value

Time: 2 minute(s).

Open StockBadge and compare text with CSS classes. The same plain JavaScript idea works in an Angular template expression.

Source: https://angular.dev/guide/templates

## Slide 17: Optional content with @if

Time: 2 minute(s).

Angular uses an explicit control block for this UI instead of React && JSX. The parent config can set showCategory=false.

Source: https://angular.dev/guide/templates/control-flow

## Slide 18: Zero in a template condition

Time: 1 minute(s).

React count && JSX can display0. Angular @if does not insert its condition as text, so that exact React pitfall does not transfer. Explicit >0 still improves clarity. This difference is documented in the coverage map.

Source: https://angular.dev/guide/templates/control-flow

## Slide 19: One template per product

Time: 1 minute(s).

Angular templates do not map arrays to JSX elements. This is the matching Angular rendering pattern.

Source: https://angular.dev/guide/templates/control-flow

## Slide 20: track follows the item’s identity

Time: 1 minute(s).

Run the Node lesson to compare original/reversed IDs. Index tracking is suited to a static list, not a changing catalog. Avoid random IDs created during rendering.

Source: https://angular.dev/guide/templates/control-flow

## Slide 21: Tracking metadata and normal inputs

Time: 1 minute(s).

This covers React key-versus-regular-prop. There is no Angular key input added automatically to ProductCard. Our card reads the ID from the product object.

Source: https://angular.dev/guide/templates/control-flow

## Slide 22: Filtering before rendering

Time: 1 minute(s).

Source selectedStock string and showCategory configuration match React Day 2. Browser controls arrive tomorrow. Passing [] demonstrates the fallback.

Source: https://angular.dev/guide/templates/control-flow

## Slide 23: Styling and price formatting

Time: 1 minute(s).

CurrencyPipe must be in standalone imports. It formats display without converting currency. It does not calculate taxes, checkout totals or payment.

Source: https://angular.dev/guide/templates/pipes

## Slide 24: Our composed Product Catalog

Time: 4 minute(s).

Use the actual Angular screenshot. Counts4/2/2 and fictional prices80,20,500,250. Show both Section instances.


## Slide 25: Tracing parent and child inputs

Time: 3 minute(s).

Guided file walkthrough: App, ProductList, ProductCard, StockBadge, Section. Ask learners to identify the class initializer receiving each input.


## Slide 26: Changing component inputs

Time: 3 minute(s).

Observe2cards, hidden categories with visible prices, and the empty message. The total summary remains4/2/2. Do not add browser controls during this lesson.


## Slide 27: A brand on every card

Time: 8 minute(s).

The Product interface already includes optional brand. Use fictional brand text. Learners add the field, input forwarding and display. The starter intentionally leaves that work.


## Slide 28: Day 2 knowledge check

Time: 3 minute(s).

Answers: input, no, ng-content, stable item identity, no. Also ask whether track becomes a child input: no.

Source: https://angular.dev/guide/templates/control-flow

## Slide 29: Components describe UI from inputs

Time: 1 minute(s).

Ask one learner to trace one Notebook object through all components. Tomorrow signals and events let users change the screen.

Source: https://angular.dev/guide/components

## Slide 30: Practice and learning references

Time: 1 minute(s).

Reference slides expand directives, pipes and legacy recognition. Official TCS assessment requirements govern certification.

Source: https://angular.dev/guide/components/inputs

## Slide 31: Directives and components

Time: 0 minute(s) · optional reference.

Structural control blocks @if/@for replace older *ngIf/*ngFor patterns in this course. Recognize legacy syntax when reading older applications.

Source: https://angular.dev/guide/templates

## Slide 32: Pipes and pure transformations

Time: 0 minute(s) · optional reference.

Standalone components must import used pipes. Keep expensive business work outside templates. No date field is required in the starter.

Source: https://angular.dev/guide/templates/pipes

## Slide 33: Decorator inputs and outputs

Time: 0 minute(s) · optional reference.

This excerpt needs Input imported. EventEmitter/@Output are recognized in the notes; Day 3 uses output<Product>(). Decorator @Input is still supported.

Source: https://angular.dev/guide/components/inputs

## Slide 34: Lifecycle overview

Time: 0 minute(s) · optional reference.

These are recognition examples. Day 4 uses ngOnInit and destruction cleanup for requests. Avoid changing state during view-check hooks.

Source: https://angular.dev/guide/components/lifecycle

### Empty list implementation tip

Pass `[products]="[]"` to ProductList for the guided empty-state demo, or set `readonly products = PRODUCTS.slice(0, 0)` to retain TypeScript inference. A bare class field initialized with `[]` can infer `never[]` under strict checking. Restore the original source afterwards.
