---
slug: price-compare-assistant
title: "Price Compare Assistant"
summary: "E-commerce price comparison assistant — upload Shopee / momo screenshots, auto-extract product info via Gemini Vision, and export results as CSV."
year: "2025"
link: "https://github.com/celeste920130/price-compare-assistant"
---

## Background

Manually tracking price differences across Shopee and momo is tedious and error-prone. This tool automates the entire pipeline — from screenshot to comparison table — in seconds.

## Approach

- Built a FastAPI backend that accepts product screenshots from Shopee and momo
- Used Gemini Vision to extract model ID, variant, price, and platform from each image
- Stored results in SQLite and grouped by normalized model ID for side-by-side comparison
- Added Playwright-based auto-search so users can fetch momo listings without manual screenshots
- Delivered a single-page frontend with real-time SSE progress and one-click CSV export

## Results

- Reduced price comparison workflow from manual copy-paste to a single upload
- Supports batch uploads and scheduled daily auto-search with Slack / Email notifications
