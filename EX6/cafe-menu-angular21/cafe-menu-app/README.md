# The Angular Café — Angular 21

A simple Angular 21 café menu app that fetches food items from the free [TheMealDB API](https://www.themealdb.com).

## Features
- Displays menu items grouped by category: Breakfast, Desserts, Snacks, Mains
- Filter by category using tab buttons
- Prices shown in ₹ (INR)

## API Used
**TheMealDB** — `https://www.themealdb.com/api/json/v1/1/filter.php?c={category}`
- Free, no sign-up, no API key needed

## How to Run
```bash
npm install
ng serve
```
Then open `http://localhost:4200`

## Angular Concepts Used
- Standalone component
- `inject()` for HttpClient
- `signal()` and `computed()` for reactive state
- `@if` / `@for` control flow blocks
- `[class.active]` class binding
- `(click)` event binding
