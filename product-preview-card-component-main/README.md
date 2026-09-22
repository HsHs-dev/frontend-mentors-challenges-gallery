# Frontend Mentor - Product Preview Card

## Overview

A solution to the [Product Preview Card](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa) challenge on Frontend Mentor. Built with plain HTML and CSS — no frameworks.

**Live Site:** https://hshs-dev.github.io/product-preview-card-component/

## Screenshot

<p align=center>
    <img src="./final.png">
</p>

## Built with

- Semantic HTML5
- CSS responsive custom properties (`dvh`)
- Flexbox
- Desktop-first workflow

## What I learned

- **`width: 100%` + `max-width`** lets an element shrink with its parent instead of enforcing a hard floor that can overflow small viewports — the "mobile" gutter comes from padding on the parent, not a minimum width on the child.
- **`line-height` needs a unitless value** (e.g. `1.5`) relative to the element's own font size — a fixed `rem` value smaller than the font size crushes the line box and causes overlapping text.
- **vh vs dvh** decide whether the browser account for the top mobile link bar or not, enhancing responsivity

## Author

- GitHub - [@HsHs-dev](https://github.com/HsHs-dev)
