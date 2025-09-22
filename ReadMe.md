# Few Password Generator

A tiny, client‑side web app that generates a handful of password ideas from a few hints you provide (name, birth year, favorite symbol, hobby). Everything runs in your browser; no data is sent to a server.

- Stack: HTML, CSS, Vanilla JS (no dependencies)
- Pages: Home, About, Contact
- Run: open index.html locally or serve as static files

## Features

- Privacy‑friendly: entirely client‑side
- Clean, responsive UI with subtle glassmorphism
- Multiple password variations from simple inputs
- Zero build tools or frameworks

## Quick start

- Open locally: just double‑click index.html
- Or serve:
  - VS Code Live Server, or
  - Python: `python3 -m http.server` → visit http://localhost:8000

Requires a modern browser (for backdrop-filter and flexbox support).

## Usage

1. Enter any combination of:
   - First Name
   - Birth Year (1950–2025)
   - Favorite Symbol (must be non‑alphanumeric)
   - Hobby
2. Click “Generate Password”
3. View the generated list on the right and copy any idea you like

Notes:
- Spaces in Name/Hobby are removed.
- Symbol must be non‑alphanumeric; otherwise it falls back to “#”.
- This is meant for inspiration. Prefer long, random passwords in a manager for sensitive accounts.

## Project structure

```
few-password-generator/
├─ index.html
├─ function.js
├─ styles.css
├─ pages/
│  ├─ about.html
│  └─ contact.html
└─ styles/
   ├─ about.css
   └─ contact.css
```

## How it works

- function.js reads your inputs (with sensible defaults), validates them, and builds a small set of combinations.
- It mixes case, symbols, and birth year slices.
- A simple “shuffle” adds one extra randomized variant.

Important: The shuffle uses Math.random() and Array.sort(), which is not crypto‑secure. This tool is for brainstorming, not for generating cryptographically strong passwords.

## Customize

- Defaults (function.js):
  ```js
  var name = "Alen";
  var bday = "2001";
  var symbol = "#";
  var hobby = "Reading";
  ```

- Add more patterns:
  ```js
  passwords.push(
    name.toUpperCase() + symbol + hobby.toLowerCase() + bday.slice(-4)
  );
  ```

- Stronger shuffle (optional):
  ```js
  function cryptoShuffle(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
      const r = new Uint32Array(1);
      crypto.getRandomValues(r);
      const j = r[0] % (i + 1);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join('');
  }
  ```

- UI tweaks:
  - Global styles in styles.css
  - About/Contact overrides in styles/about.css and styles/contact.css

## Notes and potential enhancements

- Typo fixes in UI: “Genarator/Genarate/Genared” → “Generator/Generate/Generated”
- Default name mismatch: placeholder shows “Alan”, code default is “Alen”
- Consider adding:
  - Copy‑to‑clipboard button per item
  - Password strength meter (e.g., zxcvbn)
  - Length and character‑set controls
  - Duplicate filtering and de‑biasing
  - LocalStorage to remember preferences
  - ARIA roles and keyboard shortcuts

## Contributing

- Open issues/PRs for accessibility, security, and UX improvements
- Update the GitHub Issues link in pages/contact.html to your repository:
  https://github.com/isurushehara/few-password-generator/issues


## Contact

- Email: fewt@password.com (as shown on the Contact page)
