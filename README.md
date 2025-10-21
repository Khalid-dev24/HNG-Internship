# Frontend Wizards — Stage 0: Profile Card

This is a single-file small profile card built with plain HTML/CSS/vanilla JS.
It follows the Stage 0 requirements and includes required `data-testid` attributes.

## Files
- `index.html`
- `profile.css`
- `profile.js`

## How to run locally
Open `index.html` in your browser.

## Features
- Semantic HTML: article, header, nav, sections, figure
- `data-testid` attributes required by tests:
  - `test-profile-card`, `test-user-name`, `test-user-bio`, `test-user-time`,
    `test-user-avatar`, `test-user-social-links`, `test-user-hobbies`, `test-user-dislikes`
- Current time displays `Date.now()` in milliseconds (updates every 500ms).
- Avatar can be set via image URL or file upload.
- Social links open in a new tab (`target="_blank"`, `rel="noopener noreferrer"`).
- Responsive layout (mobile-first, grid for wide screens).
- Keyboard-focusable links with visible focus outlines.
