repo-root/
├── netlify/
│   └── functions/
│       ├── submit-to-airtable.js    <-- ✅ Must be committed
│       └── test-airtable.js         <-- Optional, if you use it
├── public_html/
│   ├── index.html
│   ├── index1.html                  <-- ✅ The live form page
│   ├── script.js                    <-- ✅ Handles frontend fetch
│   └── submit.js                    <-- ❓ (Only if actually used)
├── netlify.toml                     <-- ✅ Required for deployment config
