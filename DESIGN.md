# Quattro Pazzi design

Extracted from the live site at https://www.quattropazzi.com (production deployment of this repo). The system is named Rosso & Crema in `app/globals.css`. Use it for catering and any other page on this restaurant site.

## Theme

Warm Italian restaurant, not a software product. Cream paper, a tomato-red brand mark, espresso text, and a gold eyebrow. Photography carries the food. The interface should feel like a menu and a host stand: generous margins, serif headlines, and one clear action in red.

## Palette

| Role | Token | Value |
| --- | --- | --- |
| Page background | `--crema-base` | `#FAF6EF` |
| Card / raised | `--crema-raised` | `#FFFFFF` |
| Band | `--crema-elevated` | `#F5F0E6` |
| Hover surface | `--crema-hover` | `#EDE7DB` |
| Primary text | `--text-primary` | `#1A1714` |
| Secondary text | `--text-secondary` | `#6B635A` |
| Brand red | `--rosso-500` | `#D2202F` |
| Red press | `--rosso-600` | `#B91C29` |
| Hero | `--rosso-900` | `#6B1019` |
| Espresso | `--espresso-600` | `#462210` |
| Gold accent | `--oro-400` | `#EEBB4A` |
| Olive success | `--oliva-500` | `#7B8A5E` |
| Border | `--border-default` | `rgba(26, 23, 20, 0.1)` |
| Focus | `--border-focus` | `#D2202F` |
| Error | `--error-base` | `#DC2626` |

Selection highlight is a 15% wash of the brand red. Do not introduce indigo, slate, or pure `#000` panels except the existing photo scrim (`bg-black/70`) on the closing catering image.

## Type

- Headlines (`h1`–`h4`): Playfair Display, weight 400, slight negative tracking. Loaded as `--font-serif`.
- Eyebrows: Italiana (`--font-decorative`), uppercase, wide tracking (`0.3em` on catering, `tracking-widest` on the hero), rosso or oro.
- Body and form labels: Inter (`--font-sans`), 16px, line-height 1.6, weight 400. Labels are 14px medium.
- Hero title is white Playfair at `text-4xl` / `sm:text-5xl`. Hero eyebrow is oro, not red.
- Buttons that mean “do this now” are rosso, white text, `text-lg` on the main catering actions.

## Components

- Primary button: rosso-500, hover rosso-400 or rosso-600, white label, 8px radius, no gradient.
- Cards: white surface, hairline warm border, `--shadow-sm` / `--shadow-card`. Interactive menu cards lift 2px and pick up a rosso-tinted ring on hover. Forms do not bounce on hover.
- Inputs: 36px, transparent over the card, warm border, 3px rosso focus ring. Errors use rosso-50 fill and rosso-800 text, with `role="alert"`.
- Success: olive wash (`oliva-50` / `oliva-200`), espresso text. State the reference id in the page, not only in a toast.
- Header and footer stay as they are. Section padding is 80px desktop and 48px under 768px (`.section-padding`).

## Layout

- Content width is `max-w-7xl` for package grids and `max-w-6xl` for the catering choice. Intro copy can stay near `max-w-3xl` and centered.
- Catering order choices sit side by side from `lg` up: ezCater first, inquiry second. Below `lg`, stack in that same order.
- The dark food photograph remains the closing band, with the ezCater link kept.
- Packages stay a 1 / 2 / 4 column grid (`sm` / `lg`).

## Depth

Flat cream page, white cards one step up, hero and photo bands as the dark layers. Shadows are warm and short (`rgba(26, 23, 20, …)`), not cool drop shadows. Gold is an accent for italics in the photo band (“Next Event”), not a fill for buttons.

## Responsive

- 1440 desktop: two equal cards in the order section.
- 390 mobile: hero, then the ezCater card (link and phone), then the inquiry form, then packages. Do not hide the phone or the ezCater URL.
- Tap targets on the red actions stay at least 40px tall.

## Do

- Keep `https://www.ezcater.com/catering/quattro-pazzi-3` and `(203) 259-7417`.
- Write like a restaurant: occasion, guests, kitchen, follow-up.
- Say that an inquiry is not a confirmed order and does not take a card.
- Use the existing rosso button, Playfair title, and Italiana eyebrow.

## Don't

- Don't replace ezCater or the phone with the form.
- Don't use a generic SaaS layout, purple accents, or Inter for headlines.
- Don't add payment, invoice, or order-commitment language.
- Don't show a success state unless the mail provider accepted the inquiry.
