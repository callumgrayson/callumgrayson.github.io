// Start App logic here

const addCards = function() {
  // Get target for cards
  let target = document.getElementById('card-space');

  // Iterate through cards and add to target
  cards.forEach(card => {

    // Create new card div
    let cardDiv = cDiv();

    // Create new link a passing href
    let link = cLink(card.href);

    // Create new heading passing title
    let heading = cHeading(card.title);

    // Create new image div
    let imgDiv = cImgDiv(card.alt, card.href);

    // Create new image passing src and alt
    // let img = cImg(card.src, card.alt);

    // Create caption p
    let p = cP(card.caption);

    // Append img to image div
    // imgDiv.appendChild(img);

    // Append heading and image div to link
    link.appendChild(heading);
    link.appendChild(imgDiv);

    // Append link and caption to card div
    cardDiv.appendChild(link);
    cardDiv.appendChild(p);

    // Append card div to target
    target.appendChild(cardDiv);
  });

  function cDiv() {
    let div = document.createElement('div');
    div.setAttribute('class', 'card');
    return div;
  }

  function cLink(href) {
    // create fullHref
    let fullHref = "https://callumgrayson.github.io/" + href;

    let link = document.createElement('a');
    link.setAttribute('href', fullHref);
    link.setAttribute('rel', 'noopener noreferrer');
    link.setAttribute('class', 'card-image-link');
    return link;
  }

  function cHeading(title) {
    let heading = document.createElement('h4');
    heading.setAttribute('class', 'card-title');
    heading.innerHTML = title;
    return heading;
  }

  function cImgDiv(alt, href) {
    let div = document.createElement('div');
    div.setAttribute('class', `card-image-box ${href}`);
    div.setAttribute('alt', alt);
    return div;
  }

  function cP(caption) {
    let p = document.createElement('p');
    p.setAttribute('class', 'card-caption');
    p.innerHTML = caption;
    return p;
  }
};

window.addEventListener('load', addCards);

const cards = [
  {
    href: "make-24",
    title: "Make 24",
    src: "make-24.png",
    alt: "Screenshot of the Make 24 app",
    caption: "Type in a four digit number and see all arrangements with a single operation or brackets can result in 24."
  },
  {
    href: "svg-clicker",
    title: "SVG Clicker",
    src: "svg-cicker.png",
    alt: "Screenshot of the SVG clicker app",
    caption: "Nested and overlapping SVG as clickable elements."
  },
  {
    href: "sticky",
    title: "Gluey Jots",
    src: "gluey-jots.png",
    alt: "Screenshot of the gluey jots notes app",
    caption: "Write notes with title and text. Save them to local storage. Search by title. Delete as needed."
  },
  {
    href: "text-speech",
    title: "Web Speak",
    src: "text-speech.png",
    alt: "Screenshot of the text-speech app",
    caption: "Type text and the app will read it back to use. Choose from a range of voices. Change the rate and pitch of the voices."
  },
]