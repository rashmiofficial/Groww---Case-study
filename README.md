<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1nfUum4unhhgMAGsAKPh0dH276-NV0RPm

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Case study - Groww user issues case studies

**Trust strip for real-time clarity**

📈18% drop in order-status related support tickets in 6 weeks (target)

Users felt anxious about whether portfolio values and order status were “real” or a glitch, especially during volatility.
They kept cross-checking with other apps or support, slowing down decisions.

**What was broken**

1. ❌ No clear “data freshness” indicator on key screens
2. ❌ Jargon-heavy status labels (“triggered”, “pending”) with no inline help
3. ❌ Confusing behavior during glitches (numbers changing without explanation)

**What I did**

Defined “user trust in what they see” as the north star (proxy: status-related tickets + repeat checks)
Designed a reusable “Trust strip” for portfolio & orders (live vs delayed vs reconciling)
Added tap-to-open micro-modals explaining each status in plain language

**What changed**

1. 📉 Fewer “is this correct?” tickets and panic posts
2. ⏱ Faster decision-making (less time cross-checking elsewhere)
3. ✅ Higher perceived reliability during incidents

**Artifacts**

1. Trust strip on the holding page
2. Information icon to help user understand how are portfolios getting synced.

