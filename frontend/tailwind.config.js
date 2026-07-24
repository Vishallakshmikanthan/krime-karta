/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
              "tertiary": "#432f00",
              "tertiary-fixed-dim": "#f0bf5c",
              "error-container": "#ffdad6",
              "on-error-container": "#93000a",
              "surface-container-lowest": "#ffffff",
              "surface-container-highest": "#e5e2e1",
              "surface": "#fcf9f8",
              "surface-dim": "#dcd9d9",
              "outline-variant": "#dfbfbb",
              "primary-fixed-dim": "#ffb4aa",
              "surface-container-high": "#eae7e7",
              "primary-fixed": "#ffdad5",
              "error": "#ba1a1a",
              "surface-variant": "#e5e2e1",
              "tertiary-container": "#5f4400",
              "on-surface-variant": "#58413e",
              "on-error": "#ffffff",
              "secondary-container": "#ece2cb",
              "on-secondary-fixed": "#201b0d",
              "on-tertiary-fixed": "#261900",
              "on-primary-container": "#ff9d91",
              "inverse-surface": "#303030",
              "primary-container": "#8c1d18",
              "secondary-fixed": "#ece2cb",
              "background": "#fcf9f8",
              "outline": "#8c716d",
              "inverse-on-surface": "#f3f0ef",
              "surface-bright": "#fcf9f8",
              "on-tertiary-container": "#e0b14f",
              "on-tertiary-fixed-variant": "#5d4200",
              "on-secondary-container": "#6b6452",
              "on-surface": "#1b1b1c",
              "on-tertiary": "#ffffff",
              "surface-container-low": "#f6f3f2",
              "on-background": "#1b1b1c",
              "on-secondary": "#ffffff",
              "on-secondary-fixed-variant": "#4c4636",
              "tertiary-fixed": "#ffdea4",
              "on-primary-fixed-variant": "#8a1b17",
              "secondary-fixed-dim": "#cfc6b0",
              "primary": "#6b0105",
              "secondary": "#645e4c",
              "on-primary": "#ffffff",
              "surface-tint": "#ab342b",
              "on-primary-fixed": "#410001",
              "inverse-primary": "#ffb4aa",
              "surface-container": "#f0eded"
      },
      "borderRadius": {
              "DEFAULT": "0.125rem",
              "lg": "0.25rem",
              "xl": "0.5rem",
              "full": "0.75rem"
      },
      "spacing": {
              "container-max": "1440px",
              "gutter": "24px",
              "base": "4px",
              "md": "24px",
              "xs": "8px",
              "lg": "32px",
              "sm": "16px",
              "xl": "48px"
      },
      "fontFamily": {
              "headline-sm": [
                      "Merriweather"
              ],
              "body-md": [
                      "Inter"
              ],
              "headline-md": [
                      "Merriweather"
              ],
              "body-lg": [
                      "Inter"
              ],
              "data-mono": [
                      "IBM Plex Sans"
              ],
              "headline-lg-mobile": [
                      "Merriweather"
              ],
              "display": [
                      "Merriweather"
              ],
              "body-sm": [
                      "Inter"
              ],
              "label-md": [
                      "Inter"
              ],
              "headline-lg": [
                      "Merriweather"
              ]
      },
      "fontSize": {
              "headline-sm": [
                      "20px",
                      {
                              "lineHeight": "28px",
                              "fontWeight": "700"
                      }
              ],
              "body-md": [
                      "16px",
                      {
                              "lineHeight": "24px",
                              "fontWeight": "400"
                      }
              ],
              "headline-md": [
                      "24px",
                      {
                              "lineHeight": "32px",
                              "fontWeight": "700"
                      }
              ],
              "body-lg": [
                      "18px",
                      {
                              "lineHeight": "28px",
                              "fontWeight": "400"
                      }
              ],
              "data-mono": [
                      "14px",
                      {
                              "lineHeight": "20px",
                              "fontWeight": "500"
                      }
              ],
              "headline-lg-mobile": [
                      "24px",
                      {
                              "lineHeight": "32px",
                              "fontWeight": "700"
                      }
              ],
              "display": [
                      "40px",
                      {
                              "lineHeight": "52px",
                              "letterSpacing": "-0.01em",
                              "fontWeight": "700"
                      }
              ],
              "body-sm": [
                      "14px",
                      {
                              "lineHeight": "20px",
                              "fontWeight": "400"
                      }
              ],
              "label-md": [
                      "12px",
                      {
                              "lineHeight": "16px",
                              "letterSpacing": "0.02em",
                              "fontWeight": "600"
                      }
              ],
              "headline-lg": [
                      "32px",
                      {
                              "lineHeight": "40px",
                              "fontWeight": "700"
                      }
              ]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
