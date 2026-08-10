# Lai'Lanie Evans — Personal Portfolio

A responsive personal portfolio website created with HTML and CSS. The website uses a fairy-forest inspired visual theme to showcase my projects, skills, and information about me.

## Accessibility

I used accessibility practices throughout all three pages of the portfolio.

### Accessibility Fixes

* Added a `lang="en"` attribute to identify the language of each page.
* Added descriptive page titles to each HTML page.
* Added semantic HTML elements such as `header`, `nav`, `main`, `section`, `article`, and `footer`.
* Added accessible navigation labels using `aria-label`.
* Added `aria-current="page"` to identify the current page in the navigation.
* Added descriptive labels for every contact form input.
* Added a `fieldset` and `legend` to group related contact information.
* Added `required` attributes to required contact form fields.
* Added accessible error messages using `aria-describedby`.
* Added visible keyboard focus styles for links, form fields, and buttons.
* Used responsive layouts so content remains usable on smaller screens.
* Used sufficient contrast between text and background colors to support WCAG AA readability requirements.

## Visual Design

The website uses a consistent fairy-forest color palette across all three pages.

The primary colors include:

* Dark forest green for backgrounds
* Medium forest green for content cards
* Soft cream for readable body text
* Gold for headings and accents
* Light gold for links and interactive elements

### Gestalt Principles

**Proximity:** I used proximity to group related information together inside each project and skill card.

**Similarity:** I used similarity by giving related project and skill cards the same colors, borders, spacing, and overall structure.

These principles help visitors understand which pieces of information belong together.

## Responsive Design

The website is designed to work across different screen sizes.

* Mobile: 320px and larger
* Tablet: 768px
* Desktop: 1200px

CSS media queries are used to adjust the navigation, cards, spacing, and layout for smaller screens.

## Contact Form

The About & Contact page includes an accessible contact form with:

* Proper `label` elements
* Text, email, and message fields
* `fieldset` and `legend`
* Required fields
* Accessible error messaging
* Visible keyboard focus states
* Responsive form layout

## Testing

I tested the website using browser responsive design tools at mobile, tablet, and desktop sizes.

I also used WAVE accessibility testing to identify and correct accessibility issues across the three pages.

## Technologies

* HTML5
* CSS3
* CSS Grid
* Flexbox
* Google Fonts
* GitHub Pages
