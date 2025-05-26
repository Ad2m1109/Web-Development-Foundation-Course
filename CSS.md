# CSS Reference Guide

## Selectors
```css
/* Basic Selectors */
element         /* Selects all <element> tags */
.class          /* Selects elements with class="class" */
#id             /* Selects element with id="id" */
*               /* Selects all elements */

/* Combinators */
element1 element2    /* Descendant selector */
element1 > element2  /* Child selector */
element1 + element2  /* Adjacent sibling */
element1 ~ element2  /* General sibling */
```

## Box Model
```css
/* Box Model Properties */
margin: top right bottom left;
padding: top right bottom left;
border: width style color;
width: value;
height: value;
box-sizing: border-box | content-box;
```

## Display & Positioning
```css
/* Display Types */
display: block;
display: inline;
display: inline-block;
display: flex;
display: grid;
display: none;

/* Position Properties */
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;

top: value;
right: value;
bottom: value;
left: value;
z-index: value;
```

## Typography
```css
font-family: "Font Name", fallback;
font-size: value;
font-weight: normal | bold | 100-900;
font-style: normal | italic;
text-align: left | right | center | justify;
line-height: value;
letter-spacing: value;
text-decoration: none | underline;
text-transform: none | uppercase | lowercase;
```

## Colors & Backgrounds
```css
/* Colors */
color: #hex;
color: rgb(r, g, b);
color: rgba(r, g, b, a);
color: hsl(h, s, l);

/* Backgrounds */
background-color: value;
background-image: url("path");
background-repeat: repeat | no-repeat;
background-position: position;
background-size: cover | contain;
```

## Flexbox
```css
/* Container Properties */
display: flex;
flex-direction: row | column;
justify-content: flex-start | center | flex-end | space-between;
align-items: stretch | center | flex-start | flex-end;
flex-wrap: nowrap | wrap;
gap: value;

/* Item Properties */
flex: grow shrink basis;
flex-grow: number;
flex-shrink: number;
flex-basis: value;
align-self: auto | flex-start | flex-end | center;
```

## Grid
```css
/* Container Properties */
display: grid;
grid-template-columns: values;
grid-template-rows: values;
grid-gap: value;
grid-template-areas: "areas";

/* Item Properties */
grid-column: start / end;
grid-row: start / end;
grid-area: name;
```

## Transitions & Animations
```css
/* Transitions */
transition: property duration timing-function delay;
transition-property: property;
transition-duration: time;
transition-timing-function: ease | linear | etc;

/* Animations */
@keyframes animationName {
    from { properties }
    to { properties }
}

animation: name duration timing-function delay iterations;
```

## Media Queries
```css
@media screen and (max-width: 768px) {
    /* Mobile styles */
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
    /* Tablet styles */
}

@media screen and (min-width: 1025px) {
    /* Desktop styles */
}
```

## Common Units
```css
/* Absolute Units */
px  /* Pixels */
pt  /* Points */
cm  /* Centimeters */
mm  /* Millimeters */

/* Relative Units */
%   /* Percentage */
em  /* Relative to parent font-size */
rem /* Relative to root font-size */
vh  /* Viewport height */
vw  /* Viewport width */
```

## Best Practices
- Use meaningful class names
- Maintain consistent naming conventions
- Group related properties
- Comment complex sections
- Use shorthand properties when possible
- Minimize specificity conflicts
- Follow mobile-first approach
- Optimize performance
