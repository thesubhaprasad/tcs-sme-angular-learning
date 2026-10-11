# Angular Day 1: trainer notes

Subha Prasad · TCS Assets Consultant (C3A)
12 October 2026 · 10:00–11:00 AM IST · Microsoft Teams

33 slides. 60 live teaching minutes; reference slides have zero allocated minutes. Use branch tcs-sme-angular/day-one. Open the app before the session. Participants are JavaScript beginners. Explain each short example, run the matching lesson script, then demonstrate the Product Catalog. Code blocks on slides are excerpts unless explicitly complete. Prices are fictional INR values; cart has one entry per product.

## Slide 1: Angular · Day One

Time: 2 minute(s).

Welcome learners in Microsoft Teams. Trainer: TCS Assets Consultant (C3A), SME. The Product Catalog uses fictional INR values.

Source: https://angular.dev/guide/components

## Slide 2: Meet your trainer

Time: 1 minute(s).

Ask learners about JavaScript experience in Teams chat. Beginners can use the prepared project while learning one syntax example at a time.


## Slide 3: Day 1 topic index

Time: 1 minute(s).

The one-hour path covers slides 1–29. Reference slides follow for slower review and additional TypeScript examples. No separate schedule slide.


## Slide 4: HTML, CSS and JavaScript

Time: 1 minute(s).

Connect the visible heading and colours to the browser app. Angular adds template bindings and TypeScript classes.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 5: What Angular does

Time: 2 minute(s).

This metadata excerpt assumes Component imported from @angular/core. Angular is distinct from AngularJS. This series uses standalone Angular 22 components, not an NgModule scaffold.

Source: https://angular.dev/guide/components

## Slide 6: Values and data types

Time: 2 minute(s).

Remove the annotations to see the same JavaScript values. TypeScript annotations do not exist at runtime.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 7: const and let

Time: 2 minute(s).

Use const by default for local bindings. Component fields and signal state have their own roles. readonly is a TypeScript restriction, not a deep runtime freeze.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 8: An object describes one product

Time: 2 minute(s).

Use exactly the same product domain as React. Ask learners to locate the boolean and add an optional brand in later practice.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 9: An array stores a collection

Time: 2 minute(s).

Find PRODUCTS in src/app/data/products.ts. Initial Day 1 data: Notebook, Pen and Bag, with two in stock.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 10: Functions turn inputs into results

Time: 2 minute(s).

This excerpt assumes Product and PRODUCTS imported. Definition and call are different. Without return the function returns undefined.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 11: Conditions choose an outcome

Time: 2 minute(s).

Explain ? and : slowly. Angular supports ternary expressions in interpolation; statements such as if belong in TypeScript or template control blocks.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 12: Arrow function syntax

Time: 2 minute(s).

Compare these with the function declaration from the previous slide. Class methods normally use method syntax rather than arrows.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 13: map transforms every item

Time: 2 minute(s).

Unlike JSX, Angular repeats markup with @for. map still serves plain JavaScript transformations. Run check:day-one.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 14: filter selects matching items

Time: 2 minute(s).

Connect ready.length to the stock summary. Out-of-stock count uses !product.inStock.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 15: Destructuring and spread

Time: 2 minute(s).

Nested objects still share references in a shallow copy. Spread and array copies are used for cart state on Day 3. This syntax belongs in TypeScript files, not every Angular template expression.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 16: import and export

Time: 2 minute(s).

Angular component imports in @Component metadata are separate from JavaScript imports. This data snippet is illustrative; the actual dataset is typed and nonempty.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 17: The prepared Angular project

Time: 1 minute(s).

Clone branch tcs-sme-angular/day-one first. Pinned Angular/CLI 22.2.2, TypeScript 6.0.3. Compatible Node: ^22.22.3, ^24.15.0 or >=26. Use an organisation-approved version. Never run these commands in the root React app.

Source: https://angular.dev/reference/versions

## Slide 18: Where each piece belongs

Time: 2 minute(s).

Open src/index.html to find app-root. angular.json configures the CLI; tsconfig configures TypeScript and strict template checks.

Source: https://angular.dev/guide/components

## Slide 19: Your first Angular component

Time: 2 minute(s).

Metadata is an object passed to a decorator. The actual App uses templateUrl. Standalone is explicit for learning, even though it is the modern default.

Source: https://angular.dev/guide/components

## Slide 20: Angular template rules

Time: 2 minute(s).

There is no JSX return or fragment requirement. Angular template expressions are a restricted expression language, not arbitrary JavaScript. Import child components in standalone metadata.

Source: https://angular.dev/guide/templates

## Slide 21: Values inside interpolation

Time: 2 minute(s).

Interpolation is for displayed text. Square brackets supply a value to a property. TypeScript if statements do not belong inside interpolation.

Source: https://angular.dev/guide/templates/binding

## Slide 22: One component, different data

Time: 2 minute(s).

input is a compiler-recognized class initializer. Call product() to read it inside the child. Day 2 covers inputs, defaults and read-only data in depth.

Source: https://angular.dev/guide/components/inputs

## Slide 23: Product data becomes a list

Time: 2 minute(s).

track is control-flow metadata, not a key input. Use unique IDs; avoid index tracking for a changing list. The Angular @for loop replaces React map-to-JSX.

Source: https://angular.dev/guide/templates/control-flow

## Slide 24: The Product Catalog demo

Time: 4 minute(s).

Share the actual Angular browser app. Initial prices Notebook80, Pen20, Bag500; stock true,false,true. The screenshot and code agree.


## Slide 25: A fourth product on the screen

Time: 8 minute(s).

Use a unique ID and a comma between objects. Give learners time to find the file, edit and describe @for. Restore the prepared data before branch switching. Day 2 intentionally has Bottle out of stock.


## Slide 26: Common Day 1 mistakes

Time: 1 minute(s).

Show a compiler message with file/line. There is no React capitalization rule for template selectors: Angular selectors are usually kebab-case and TypeScript classes use PascalCase.

Source: https://angular.dev/guide/components

## Slide 27: Day 1 knowledge check

Time: 3 minute(s).

Answers: let, map, filter, interpolation {{ field }}, track product.id. Ask why a template component must appear in the parent imports.

Source: https://angular.dev/guide/templates/control-flow

## Slide 28: What you can now explain

Time: 1 minute(s).

Ask one learner to trace products.ts through App into the HTML. Day 2 adds deeper inputs, composition, conditions and pipes.

Source: https://angular.dev/guide/components

## Slide 29: Practice and learning references

Time: 1 minute(s).

Day 1 homework matches the React brand/count exercise. Optional reference slides provide TypeScript examples. E1 coverage follows the official TCS syllabus and assessment rules.

Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide

## Slide 30: TypeScript types and interfaces

Time: 0 minute(s) · optional reference.

Look at the actual Product interface. Categories form a union. Runtime JSON still needs validation on Day 4.

Source: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

## Slide 31: Classes, this and readonly

Time: 0 minute(s) · optional reference.

readonly is shallow compile-time protection. Do not confuse a class with an HTML class attribute.

Source: https://www.typescriptlang.org/docs/handbook/2/classes.html

## Slide 32: Standalone imports and NgModules

Time: 0 minute(s) · optional reference.

Explain declarations/imports/bootstrap in an NgModule as recognition only. AngularJS is a separate older framework. Do not mix both setup styles in this project.

Source: https://angular.dev/guide/components

## Slide 33: Setup and compiler checks

Time: 0 minute(s) · optional reference.

Angular22.2.2 and TypeScript6.0.3 are pinned. The React Vite setup is in the separate tcs-sme-reactjs-learning repository. Angular commands run in angular/product-catalog.

Source: https://angular.dev/reference/versions
