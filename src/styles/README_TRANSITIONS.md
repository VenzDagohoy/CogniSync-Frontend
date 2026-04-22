# SASS Transition System

This modular transition system handles all the smooth hover animations for CogniSync.

## Usage

In your components, apply the following classes:

- `.hover-btn-anim` - For buttons (1.05 scale, 0.4s ease-in-out)
- `.hover-card-anim` - For cards (subtle lift and shadow, 0.35s ease-out)
- `.hover-nav-anim` - For navigation links (0.2s left-to-right underline slide)

The system uses Dart Sass (`sass`) with `@use` for modular scoping.
Variables are defined in `_variables.scss` and mixins in `_mixins.scss`.
These are compiled together in `transitions.scss` which is imported directly into `/src/app/App.tsx` for proper handling by Vite.