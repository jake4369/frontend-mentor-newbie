# Frontend Mentor - Skilled e-learning landing page solution

This is a solution to the [Skilled e-learning landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/skilled-elearning-landing-page-S1ObDrZ8q). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![](./screenshots/screenshot-desktop.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [https://subtle-arithmetic-8e3951.netlify.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid

### What I learned

I learned how to have an image slide in when hovering over its parent element.

```html
<div class="h2-container">
  <h2 class="about-section__h2">Check out our most popular courses!</h2>
  <img src="assets/study.webp" alt="" class="study-img" />
</div>
```

```css
.h2-container {
  position: relative;
  padding: 4rem 2rem 8.625rem;
  overflow: hidden;
}

.study-img {
  display: block;
  position: absolute;
  bottom: 10px;
  width: 250px;
  right: -250px;
  transition: right 0.5s ease-in-out;
}

.h2-container:hover .study-img {
  right: -32px;
}
```

## Author

- Frontend Mentor - [@jake4369](https://www.frontendmentor.io/profile/jake4369)
- Twitter - [@jakexcode](https://www.twitter.com/jakexcode)
