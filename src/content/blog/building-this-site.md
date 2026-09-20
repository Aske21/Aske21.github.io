---
title: Building This Site
date: 2026-09-01
slug: building-this-site
excerpt: The stack behind the terminal look — Vite, React, and styled-components.
tags: react, vite, styled-components
---

This portfolio is a Vite + React + TypeScript app styled with `styled-components`, built around a terminal-window motif: every section renders as a fake shell command with its output below it.

It's deployed as a static site straight to GitHub Pages via a GitHub Actions workflow — no server, no build step beyond `vite build`. Routing (including this blog) uses React Router with a small redirect trick so clean URLs like `/blog/building-this-site` survive a page refresh on GitHub's static hosting.
