# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./images/product-preview-card.png)

### Links

- Live Site URL: [https://660093ace8ba202a1699cb9d--tourmaline-paprenjak-77e182.netlify.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

In this project I learned about the HTML Picture element.

The picture HTML element contains zero or more 'source' elements and one 'img' element to offer alternative versions of an image for different display/device scenarios.

The browser will consider each child 'source' element and choose the best match among them. If no matches are found—or the browser doesn't support the 'picture' element—the URL of the 'img' element's src attribute is selected. The selected image is then presented in the space occupied by the 'img' element.

```html
<picture>
  <source
    srcset="./images/image-product-desktop.jpg"
    media="(min-width: 768px)"
  />
  <img
    src="./images/image-product-mobile.jpg"
    alt="Product image"
    class="product-img"
  />
</picture>
```

### Useful resources

- [https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture] - Visit the mdn web docs to learn more about the HTML picture element.

## Author

- Frontend Mentor - [@jake4369](https://www.frontendmentor.io/profile/jake4369)
- Twitter - [@jakexcode](https://www.twitter.com/jakexcode)

## Acknowledgments

mdn web docs [https://developer.mozilla.org/en-US/]
