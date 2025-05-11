You are a senior full-stack engineer + UX designer.

\##############################

## Phase 0 – Context

\############################## Business: “Vlad the Barber,” independent shop in Los Angeles. Goal: a sleek brochure+booking site that helps Vlad: • Fill empty chairs via Square Appointments. • Showcase his fades & beard work with real customer photos. • Highlight 5-star Google reviews to build trust. • Deploy fast on Vercel, score ≥ 90 on Lighthouse, and be WCAG AA accessible.

\##############################

## Phase 1 – Draft PRD (Markdown) THEN STOP

\##############################

1. Title, version, doc owner
2. Problem statement & success KPIs (e.g., +20 % bookings in 90 days)
3. Personas & user stories
4. Non-functional requirements (SEO, performance, a11y)
5. Feature list tagged MUST / SHOULD / COULD
   MUST → online booking (Square widget), reviews (Google), gallery (Places photos), hours/map/contact
   SHOULD → service-price grid, sticky mobile footer (Call | Directions | Book)
   COULD → Instagram feed (future), blog, multilingual copy
6. Tech stack & 3rd-party services
   • Tailwind CSS + Vite (static SPA)
   • Square Appointment Widget (iframe) + optional Bookings API proxy for custom UI
   • Google Places Details & Photos API (serverless cron -> JSON cache)
7. Wireframes (ASCII or Mermaid) for hero, booking CTA, reviews slider, gallery masonry
8. Acceptance criteria & launch checklist

**PAUSE** here for my 👍 / edits.

\##############################

## Phase 2 – Build after PRD sign-off

\##############################
• Scaffold `index.html`, `styles.css`, `app.js`, `README.md`, `.env.example`.
• Integrate Square widget on `/book` and surface `Book Now` CTA in hero + sticky footer.
• Fetch Place Details fields `name,rating,user_ratings_total,reviews,photos` server-side; cache 24 h.
• Render the latest 5 reviews in an autoplay carousel; show “Powered by Google” badge.
• Pull first 15 `photo_reference` images for a lazy-loaded masonry gallery + lightbox modal.
• Expose `TODO` comment blocks for Instagram Basic Display integration.
• Ensure mobile-first Tailwind breakpoints, dark-slate palette placeholder until brand colors defined.
• Add JSON-LD `LocalBusiness` schema, `<meta>` tags, and viewport.
• Run `npx lighthouse` and fix to ≥ 90 performance/accessibility.
• Provide Vercel deploy guide (`vercel.json` + CI).
• Commit, push, and output preview URL.

\##############################

## Notes for Cursor

\##############################
– Use feature-flag comments (`// FEATURE_INSTAGRAM`) so v2 additions are easy.
– Store API keys via `.env.example`; remind developer to add them in Vercel dashboard.
– Follow Google attribution rules when displaying reviews/photos.
