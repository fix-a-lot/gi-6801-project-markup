---
version: alpha
name: "LOAWA Game Info Portal"
description: "LOAWA is a Lost Ark (로스트아크) game information portal targeting Korean-speaking players. The design is information-dense and utility-first, built around a monospace-dominant type system (D2Coding Digits) that handles both Korean Hangul and numeric game data with equal legibility. A distinctive soft purple (#b48ff5, --color-primary) serves as the brand accent across links, active tabs, and interactive elements. The layout uses a tight 4–16px spacing rhythm, near-universal 4px border radius, and a dark-default theme with a light mode toggle. Content is organized in multi-column sidebar grids with announcement lists, event cards, and ranked character search panels."
colors:
  link-blue: "#1967d2"
  surface-base-dark: "#000000"
  dark-text-alt: "#3c4043"
  foreground-white: "#ffffff"
  muted-text: "#5f6368"
  primary-foreground: "#171717"
  primary-purple: "#b48ff5"
  border-subtle: "#dadce0"
  surface-base: "#ffffff"
  surface-light: "#f8f9fa"
  foreground-text: "#000000"
  near-black-text: "#171717"
typography:
  body-default:
    fontFamily: "D2Coding Digits"
    fontSize: "16px"
    fontWeight: "400"
    lineHeight: "24px"
  body-medium:
    fontFamily: "D2Coding Digits"
    fontSize: "16px"
    fontWeight: "500"
    lineHeight: "24px"
  small-default:
    fontFamily: "D2Coding Digits"
    fontSize: "13px"
    fontWeight: "400"
    lineHeight: "20px"
  small-medium:
    fontFamily: "D2Coding Digits"
    fontSize: "13px"
    fontWeight: "500"
    lineHeight: "20px"
  small-bold:
    fontFamily: "D2Coding Digits"
    fontSize: "13px"
    fontWeight: "700"
    lineHeight: "20px"
  caption-default:
    fontFamily: "D2Coding Digits"
    fontSize: "14px"
    fontWeight: "400"
    lineHeight: "20px"
  caption-medium:
    fontFamily: "D2Coding Digits"
    fontSize: "14px"
    fontWeight: "500"
    lineHeight: "20px"
  section-heading:
    fontFamily: "D2Coding Digits"
    fontSize: "15px"
    fontWeight: "700"
    lineHeight: "22px"
  page-heading:
    fontFamily: "D2Coding Digits"
    fontSize: "20px"
    fontWeight: "700"
    lineHeight: "28px"
  ui-label:
    fontFamily: "Open Sans"
    fontSize: "16px"
    fontWeight: "400"
  ui-small-label:
    fontFamily: "Open Sans"
    fontSize: "14px"
    fontWeight: "400"
  brand-wordmark:
    fontFamily: "Roboto"
    fontSize: "20px"
    fontWeight: "700"
    lineHeight: "28px"
rounded:
  radius-sm: "4px"
  radius-md: "8px"
  radius-pill: "14px"
  radius-full: "20px"
  radius-base: "0.625rem"
spacing:
  spacing-1: "2px"
  spacing-2: "4px"
  spacing-3: "6px"
  spacing-4: "8px"
  spacing-5: "10px"
  spacing-6: "12px"
  spacing-7: "16px"
  spacing-8: "24px"
  spacing-9: "36px"
  spacing-10: "40px"
  spacing-11: "48px"
---

## Overview

LOAWA is a Lost Ark (로스트아크) game information portal targeting Korean-speaking players. The design is information-dense and utility-first, built around a monospace-dominant type system (D2Coding Digits) that handles both Korean Hangul and numeric game data with equal legibility. A distinctive soft purple (#b48ff5, --color-primary) serves as the brand accent across links, active tabs, and interactive elements. The layout uses a tight 4–16px spacing rhythm, near-universal 4px border radius, and a dark-default theme with a light mode toggle. Content is organized in multi-column sidebar grids with announcement lists, event cards, and ranked character search panels.

**Signature traits:**
- Dual typeface system: Pairs D2Coding Digits and Open Sans across the type hierarchy.

## Colors

The palette uses 17 validated color tokens across 2 theme profiles. Semantic roles stay attached to observed usage so generation agents can choose accents without inventing new color meaning.

**Semantic naming:**
- **surface-background** maps to `surface-base`: Role "background" is grounded by usage context "Page background, card surfaces, dialog backgrounds".
- **action-text** maps to `primary-purple`: Role "text" is grounded by usage context "Brand accent: nav active states, links, interactive highlights, --color-primary".
- **content-text** maps to `foreground-text`: Role "text" is grounded by usage context "Primary body text, headings, most text content across the page".
- **surface-text** maps to `near-black-text`: Role "text" is grounded by usage context "Primary foreground on primary-colored surfaces, --color-primary-foreground".

### Dark Theme

### Text Scale
- **Dark Text Alt** (#3c4043): Tertiary text elements in dark header zones. Role: text. {authored: rgb(60, 64, 67), space: rgb}
- **Foreground White** (#ffffff): Primary body text and headings on dark surfaces. Role: text. {authored: rgb(255, 255, 255), space: rgb}
- **Muted Text** (#5f6368): Secondary text, metadata, timestamps on dark backgrounds. Role: text. {authored: rgb(95, 99, 104), space: rgb}
- **Primary Foreground** (#171717): Text on primary-colored surfaces in dark mode, --color-primary-foreground. Role: text. {authored: rgb(23, 23, 23), space: rgb}
- **Primary Purple** (#b48ff5): Brand accent: nav active states, links, interactive highlights, --color-primary. Role: text. {authored: rgb(180, 143, 245), space: rgb}

### Interactive
- **Border Subtle** (#dadce0): Dividers and hairlines (lower contrast in dark mode). Role: border. {authored: rgb(218, 220, 224), space: rgb}

### Surface & Shadows
- **Link Blue** (#1967d2): External links, consent dialog link color. Role: background. {authored: rgb(25, 103, 210), space: rgb, alpha: 0.24}
- **Surface Base Dark** (#000000): Dark theme page background and dominant surface fill. Role: background. {authored: rgb(0, 0, 0), space: rgb, alpha: 0.2}

### Light Theme

### Text Scale
- **Dark Text Alt** (#3c4043): Tertiary text in header zones. Role: text. {authored: rgb(60, 64, 67), space: rgb}
- **Foreground Text** (#000000): Primary body text, headings, most text content across the page. Role: text. {authored: rgb(0, 0, 0), space: rgb, alpha: 0.2}
- **Muted Text** (#5f6368): Secondary text, metadata, timestamps, muted labels. Role: text. {authored: rgb(95, 99, 104), space: rgb}
- **Near-Black Text** (#171717): Primary foreground on primary-colored surfaces, --color-primary-foreground. Role: text. {authored: rgb(23, 23, 23), space: rgb}
- **Primary Purple** (#b48ff5): Brand accent: nav active states, links, interactive highlights, --color-primary. Role: text. {authored: rgb(180, 143, 245), space: rgb}

### Interactive
- **Border Subtle** (#dadce0): Dividers, hairlines, input borders. Role: border. {authored: rgb(218, 220, 224), space: rgb}

### Surface & Shadows
- **Link Blue** (#1967d2): External links, consent dialog link color (Google CMP). Role: background. {authored: rgb(25, 103, 210), space: rgb, alpha: 0.24}
- **Surface Base** (#ffffff): Page background, card surfaces, dialog backgrounds. Role: background. {authored: rgb(255, 255, 255), space: rgb}
- **Surface Light** (#f8f9fa): Subtle surface tint for header or secondary panels. Role: background. {authored: rgb(248, 249, 250), space: rgb}

## Typography

Typography uses D2Coding Digits, Open Sans, Roboto across extracted hierarchy roles. Keep hierarchy mapped to these token rows before adding decorative type styles.

Mixes D2Coding Digits and Open Sans and Roboto for visual contrast. Weight range spans regular, medium, bold. Sizes range from 12px to 20px.

### Font Roles
- **Headline Font**: D2Coding Digits
- **Body Font**: D2Coding Digits

### Type Scale Evidence
| Role | Font | Size | Weight | Line Height | Letter Spacing | Stack / Features | Notes |
|------|------|------|--------|-------------|----------------|------------------|-------|
| Primary body text, list items, general content — most frequent tuple (×361) | D2Coding Digits | 16px | 400 | 24px | normal | D2Coding Digits, Pretendard Variable, Pretendard, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji, sans-serif | Extracted token |
| Emphasized body text, section labels, nav items (×58) | D2Coding Digits | 16px | 500 | 24px | normal | D2Coding Digits, Pretendard Variable, Pretendard, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji, sans-serif | Extracted token |
| Secondary metadata, timestamps, tag labels (×69) | D2Coding Digits | 13px | 400 | 20px | normal | D2Coding Digits, Pretendard Variable, Pretendard, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji, sans-serif | Extracted token |
| Emphasized small text, category badges (×42) | D2Coding Digits | 13px | 500 | 20px | normal | D2Coding Digits, Pretendard Variable, Pretendard, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji, sans-serif | Extracted token |
| Bold small labels, ranking numbers, tag text (×30) | D2Coding Digits | 13px | 700 | 20px | normal | D2Coding Digits, Pretendard Variable, Pretendard, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji, sans-serif | Extracted token |
| Caption text, secondary list content (×34) | D2Coding Digits | 14px | 400 | 20px | normal | D2Coding Digits, Pretendard Variable, Pretendard, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji, sans-serif | Extracted token |
| Emphasized captions, sub-labels (×30) | D2Coding Digits | 14px | 500 | 20px | normal | D2Coding Digits, Pretendard Variable, Pretendard, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji, sans-serif | Extracted token |
| Panel section headings, sidebar titles (×13) | D2Coding Digits | 15px | 700 | 22px | normal | D2Coding Digits, Pretendard Variable, Pretendard, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji, sans-serif | Extracted token |
| Page-level headings (×1) | D2Coding Digits | 20px | 700 | 28px | normal | D2Coding Digits, Pretendard Variable, Pretendard, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR, Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji, sans-serif | Extracted token |
| UI labels, consent dialog body text, secondary interface text (×47) | Open Sans | 16px | 400 | normal | normal | Open Sans, sans-serif; features: "kern" | Extracted token |
| Small UI labels, dialog secondary text (×8) | Open Sans | 14px | 400 | normal | normal | Open Sans, sans-serif; features: "kern" | Extracted token |
| LOAWA brand wordmark in header (×1) | Roboto | 20px | 700 | 28px | normal | Roboto, Pretendard Variable, Pretendard, Noto Sans KR, ui-sans-serif, system-ui, sans-serif | Extracted token |

## Layout

Responsive system uses 2 breakpoint tier(s): mobile, desktop.

This system uses a 4px base grid with scale values 2, 4, 6, 8, 10, 12, 16, 24, 36, 40, 48.

### Responsive Strategy
- **mobile (480-480px)**: Constrain layout for small viewports and prioritize vertical stacking.
- **desktop (Unknown)**: Expand layout density and horizontal composition for wide viewports.

### Spacing System
| Token | Value | Px | Notes |
|------|-------|----|-------|
| spacing-1 | 2px | 2 | Extracted spacing token |
| spacing-2 | 4px | 4 | Extracted spacing token |
| spacing-3 | 6px | 6 | Extracted spacing token |
| spacing-4 | 8px | 8 | Extracted spacing token |
| spacing-5 | 10px | 10 | Extracted spacing token |
| spacing-6 | 12px | 12 | Extracted spacing token |
| spacing-7 | 16px | 16 | Extracted spacing token |
| spacing-8 | 24px | 24 | Extracted spacing token |
| spacing-9 | 36px | 36 | Extracted spacing token |
| spacing-10 | 40px | 40 | Extracted spacing token |
| spacing-11 | 48px | 48 | Extracted spacing token |

## Elevation & Depth

Keep depth flat unless validated shadow or interaction evidence appears in the extraction payload. Do not invent shadows beyond this evidence boundary.

### Shadow Evidence
| Shadow Token | Layers | Details |
|--------------|--------|---------|
| n/a | 0 | No validated shadow payload |

### Interaction Signals
| Theme | Signal | Evidence |
|-------|--------|----------|
| Light | backdrop-filter | blur(12px) |
| Light | outline-style | solid |
| Light | outline-color | oklch(0.556 0 0) ; rgb(0, 0, 0) ; rgba(0, 0, 0, 0) |
| Light | outline-width | 3px ; 0px ; 1px |
| Light | outline-offset | 0px |
| Dark | backdrop-filter | blur(12px) |
| Dark | outline-style | solid |
| Dark | outline-color | oklch(0.556 0 0) ; rgb(0, 0, 0) ; rgba(0, 0, 0, 0) |
| Dark | outline-width | 3px ; 0px ; 1px |
| Dark | outline-offset | 0px |

## Shapes

Shape language maps directly to rounded tokens. Keep component corners consistent with the role mapping below before introducing bespoke geometry.

### Radius Roles
| Token | Value | Px | Role Mapping |
|------|-------|----|--------------|
| radius-sm | 4px | 4 | Subtle corner |
| radius-md | 8px | 8 | Control corner |
| radius-base | 0.625rem | 10 | Control corner |
| radius-pill | 14px | 14 | Card corner |
| radius-full | 20px | 20 | Card corner |

### Geometry Evidence
| Radius Token | Shape | Units |
|--------------|-------|-------|
| radius-sm | 4px | px |
| radius-md | 8px | px |
| radius-pill | 14px | px |
| radius-full | 20px | px |
| radius-base | 0.625rem | rem |

## Components

(none detected)

## Do's and Don'ts

Guardrails protect Dual typeface system without adding unsupported visual claims.

| Do | Don't |
|----|---------|
| Do maintain consistent spacing using the base grid | Don't make unsupported claims about absent visual features |
| Do maintain WCAG AA contrast ratios (4.5:1 for normal text) | Don't mix rounded and sharp corners in the same view |
| Do use the primary color only for the single most important action per screen |  |
| Do verify evidence before writing new design-system guidance |  |

## Responsive Evidence

### Breakpoints
| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | <= 479px | screen and (max-width: 479px) |
| Mobile | <= 480px | screen and (max-width: 480px) |
| Mobile | >= 480px | screen and (min-width: 480px) |
| Mobile | >= 481px | screen and (min-width: 481px) |
| Breakpoint 5 | Unknown | (hover: none) and (pointer: coarse) |

## Agent Prompt Guide

### Example Component Prompts
- Create button component using validated primary color role and spacing tokens.
- Create card component with mapped radius role and evidence-backed elevation.
- Create form input component using inferred typography hierarchy and border roles.

### Iteration Guide
1. Start with extracted palette and typography roles only.
2. Map spacing and radius directly from token tables before visual polish.
3. Apply component patterns one section at a time and compare against source intent.
4. Keep elevation claims tied to explicit evidence in output.
5. Iterate with smallest diffs and re-check section hierarchy after each change.
