---
name: KrimeKartā Intelligence System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1b1b1c'
  on-surface-variant: '#58413e'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0ef'
  outline: '#8c716d'
  outline-variant: '#dfbfbb'
  surface-tint: '#ab342b'
  primary: '#6b0105'
  on-primary: '#ffffff'
  primary-container: '#8c1d18'
  on-primary-container: '#ff9d91'
  inverse-primary: '#ffb4aa'
  secondary: '#645e4c'
  on-secondary: '#ffffff'
  secondary-container: '#ece2cb'
  on-secondary-container: '#6b6452'
  tertiary: '#432f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#5f4400'
  on-tertiary-container: '#e0b14f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad5'
  primary-fixed-dim: '#ffb4aa'
  on-primary-fixed: '#410001'
  on-primary-fixed-variant: '#8a1b17'
  secondary-fixed: '#ece2cb'
  secondary-fixed-dim: '#cfc6b0'
  on-secondary-fixed: '#201b0d'
  on-secondary-fixed-variant: '#4c4636'
  tertiary-fixed: '#ffdea4'
  tertiary-fixed-dim: '#f0bf5c'
  on-tertiary-fixed: '#261900'
  on-tertiary-fixed-variant: '#5d4200'
  background: '#fcf9f8'
  on-background: '#1b1b1c'
  surface-variant: '#e5e2e1'
typography:
  display:
    fontFamily: Merriweather
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 52px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Merriweather
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Merriweather
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Merriweather
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Merriweather
    fontSize: 20px
    fontWeight: '700'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  data-mono:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  container-max: 1440px
  gutter: 24px
---

## Brand & Style
The design system is engineered for high-stakes law enforcement intelligence, balancing the traditional authority of the Karnataka Police with modern digital efficiency. The brand personality is institutional, resilient, and precise.

Drawing inspiration from the Apple Human Interface Guidelines for clarity and IBM Carbon for structured data density, the system employs a **Modern Government Enterprise** style. It rejects transient trends in favor of a "paper-and-ink" digital philosophy: high-contrast text, generous margins for readability, and a clear information hierarchy that minimizes cognitive load during critical decision-making. The aesthetic is professional and utilitarian, ensuring that data—not the interface—remains the focus.

## Colors
The palette is rooted in the heritage of Karnataka. **Mysore Red** serves as the primary brand anchor, used for primary actions and navigational headers to signify authority. **Sandalwood Beige** and **Warm Ivory** provide a sophisticated, low-strain background environment that reduces the "starkness" of pure white, mimicking official stationary.

**Royal Gold** is reserved for high-level status indicators or specialized investigative markers. Text adheres to strict accessibility standards, using a near-black neutral for primary content to ensure maximum legibility against the ivory and white surfaces.

## Typography
This design system utilizes a tiered typographic approach to separate narrative content from technical data:
- **Serif (Merriweather):** Used for titles, report headers, and official statements. It provides an editorial, authoritative feel.
- **Sans-Serif (Inter):** The workhorse for all UI elements, body text, and form labels, chosen for its exceptional legibility on screens.
- **Monospace/Technical (IBM Plex Sans):** Specifically for Case IDs, timestamps, coordinates, and tabular numerical data. This ensures that digits align perfectly and are easily scannable in dense reports.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Grid**. For internal dashboards, a 12-column grid is used with a fixed sidebar (280px) and a fluid content area. 

- **Desktop:** 12 columns, 24px gutters, 48px outer margins.
- **Tablet:** 8 columns, 16px gutters, 24px outer margins.
- **Mobile:** 4 columns, 16px gutters, 16px outer margins.

Spacing follows a strict 4px/8px baseline grid to ensure vertical rhythm. Complex investigative forms should use "Standard" (24px) spacing between sections and "Condensed" (8px) spacing between related input fields to keep data compact but accessible.

## Elevation & Depth
The system uses a **Low-Contrast Outline** approach to depth. To maintain a "government report" aesthetic, we avoid heavy drop shadows. 

- **Surface Level 0 (Background):** Warm Ivory (#FAF8F2).
- **Surface Level 1 (Cards/Main Content):** White (#FFFFFF) with a 1px solid border (#D8D2C4).
- **Surface Level 2 (Modals/Popovers):** White (#FFFFFF) with a 1px solid border (#D8D2C4) and a subtle 4px blur, 10% opacity black shadow to provide focus.

Elevation is primarily communicated through layering and stroke weight rather than light source simulation.

## Shapes
In line with a professional enterprise aesthetic, the design system uses "Soft" geometry. A 4px (0.25rem) base radius is applied to buttons, input fields, and cards. This provides a modern touch without appearing overly casual or "app-like." Interactive elements like checkboxes remain slightly rounded, while structural elements like sidebar containers use sharp corners to emphasize the grid.

## Components

### Buttons
- **Primary:** Solid Mysore Red (#8C1D18) with White text. High emphasis.
- **Secondary:** Outline Mysore Red with 1px border. Low emphasis.
- **Tertiary/Ghost:** No border, Mysore Red text. Used for less frequent actions.

### Tables (Intelligence Reports)
- **Header:** Sticky, Sandalwood Beige (#F3E9D2) background, 12px IBM Plex Sans Bold text.
- **Rows:** Alternating subtle ivory stripes for readability. 1px bottom border.
- **Cells:** Vertical alignment centered. Data-heavy columns use monospaced fonts.

### Forms
- **Inputs:** 1px border (#D8D2C4), 4px radius. Labels are positioned above the field in Inter SemiBold.
- **Focus State:** 2px solid Royal Gold (#C89B3C) ring with no offset.
- **Multi-step:** A vertical stepper located on the left side of the form container, showing progress through "Case Entry," "Evidence Log," and "Review."

### Navigation
- **Sidebar:** Collapsible. Uses a dark variant of the neutral palette or Mysore Red for the active state indicator. 
- **Icons:** 20px Lucide icons with a 1.5px stroke weight for consistent visual density.

### Cards
- White background, 1px #D8D2C4 border, 4px corner radius. No shadow. Used to group case summaries or suspect profiles.