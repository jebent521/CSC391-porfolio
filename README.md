# CSC391 Portfolio

## A03 Individual Class Portfolio Page (2/10/26)

### Additional Requirements Met

#### 1. Layout System

> Use Flexbox or CSS Grid to organize part of your page

I used flexbox to organize the content of the cards on the homepage. The picture
is aligned on one side, and it has a flex grow factor of 1. The content is
aligned on the other side, and it has a flex grow factor of 2. The image takes
up one third of the width, and the content takes up the remaining two thirds.

The cards also have `flex-wrap: wrap` so that the content wraps when the width
is too small. This means that on small screens, the content will stack instead
of squish.

#### 2. Sticky or Fixed Element

> Implement a sticky header or fixed footer.

I implemented a sticky header that stays at the top of the screen when the user
scrolls down.

#### 3. Hover and Interaction Effects

> Add hover effects to links, cards, images, or navigation items.

I added a general hover effect to the `<a>` tag that changes it from a lighter
green to a darker green. I also made the nav links highlight when the user
hovers over them. The SVG GitHub logo that sends the user to my GitHub profile
also changes color on hover to indicate that it is clickable. My name in the top
left corner becomes underlined when the user hovers over it.

### Challenges met

#### Centering a div within `<main>`'s margins

The basic structure of the main content of my website is this:

```html
<main>
  <section>
    <div class="card">...</div>
  </section>
  <section>
    <div class="card">...</div>
  </section>
  <section>
    <div class="card">...</div>
  </section>
</main>
```

The `<main>` tag has a horizontal margin of 16%, giving the content a more
readable width. On smaller screens, the cards may become wider than the center
68% of the screen. In these circumstances, the cards still begin at the 16%
mark, but they overflow on the right. I'm fine with them being larger than 68%
of the screen width, but I just want them to be centered.

#### Tight text on small screens

I had some trouble keeping the text inside the cards at a reasonable width on
small screens. The images took up too much of the cards' width. I ended up
adding `flex-wrap: wrap` to the card so that on screens that are too small, the
card content is presented as a column instead of a row. This worked out well.

### Resources used

**MDN Web Docs**

**YouTube**

- To learn flex layout: https://youtu.be/GteJWhCikCk?si=7YucOAjBpl8AD1iq

- To learn flex content sizing: https://youtu.be/ZOK-DU7vT0A?si=QQJRou-mxmtSEIYD

**W3Schools** to add a favicon: https://www.w3schools.com/html/html_favicon.asp

**ChatGPT** (for understanding standard CSS and flexbox rules) - note, I did not
end up using what ChatGPT gave me. Instead I followed the YouTube video linked
above: https://chatgpt.com/share/6987a31a-2360-8013-b437-82d38adaf886

**Google Gemini** (for generating a favicon for my webpage):
https://gemini.google.com/share/bdc546941795
