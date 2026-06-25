# iCARE International Dog Rescue — go-live guide

## The files (all go in the ROOT of the repo, not in a folder)
- index.html      — main page (logo embedded)
- dog.html        — per-dog profile + application form (logo embedded)
- dogs.json       — the list of dogs  ← the only file volunteers edit
- icare-logo.jpg  — spare copy of the logo (optional; already embedded in the pages)

## Step 1 — Create the repository
1. github.com → "+" (top right) → New repository.
2. Name: for the shortest web address, name it exactly `YOURUSERNAME.github.io`
   (replace YOURUSERNAME with your real GitHub username).
   The site will then live at https://YOURUSERNAME.github.io
   (Alternative: any name like `icare` → site at https://YOURUSERNAME.github.io/icare/)
3. Visibility: Public (required for free Pages).
4. Do NOT add a README or .gitignore. Click Create repository.

## Step 2 — Upload the files
1. On the empty repo page, click "uploading an existing file".
2. Drag in index.html, dog.html, dogs.json (and icare-logo.jpg).
3. Make sure they sit at the top level — NOT inside a folder.
4. Click Commit changes.

## Step 3 — Turn on GitHub Pages
1. Repo → Settings → Pages.
2. Source: "Deploy from a branch". Branch: main. Folder: / (root). Save.
3. Wait 1–2 minutes, refresh. It shows "Your site is live at …". Open that link.
4. Tick "Enforce HTTPS" if offered.

## Step 4 — Check it
Open the live link. Click a dog → its profile opens (now dogs.json loads for real).
The form will show a thank-you in demo mode until Step 6.

## Step 5 — Add your volunteers (your access control)
Repo → Settings → Collaborators → Add people → invite each volunteer by GitHub username.
Only people you add can edit. Remove them and access is gone. No site passwords.
(Optional later: create a free Organization and move the repo there for bigger teams.)

## Step 6 — Make the form deliver to your inbox
1. Sign up free at formspree.io → New form → copy its endpoint, e.g. https://formspree.io/f/abcdwxyz
2. Edit dog.html (pencil) → near the top of the <script> find:
       const FORM_ENDPOINT = "";
   Put your URL between the quotes:
       const FORM_ENDPOINT = "https://formspree.io/f/abcdwxyz";
3. Commit. Applications now email you. They go to Formspree, never into the repo.

## Updating dogs (ongoing)
Edit dogs.json → pencil → change text or copy a { } block to add a dog → Commit.
Live site updates in ~1 minute.
Fields: id, name, status (available|healing|rescued|pending), age, breed, size, since,
photo (cover URL), photos [extra URLs], video (YouTube/mp4 URL), desc (card line), story (profile text).

## Optional: your own domain
YOURUSERNAME.github.io is free forever. For a custom domain (~€10–15/yr), buy it from any
registrar, then Settings → Pages → Custom domain. Free HTTPS is automatic.
