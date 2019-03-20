const numberOfImages = 25;
const imageHeight = 600;
const imageWidth = 400;
const url = `https://via.placeholder.com/${imageHeight}x${imageWidth}`;

// Generate an array of image links
const images = new Array(numberOfImages).fill(url)
// Sretni uhljebic
images[images.length - 1] = 'https://avatars1.githubusercontent.com/u/9164266?s=460&v=4';

// For each image link, create img element, wrap it in a div and insert it in the DOM
// Store references on img elements
const targets = images.map((_, i) => {
  if (i === 0) {
    const img = document.createElement('img');
    const container = document.createElement('div');

    container.append(img);
    container.classList.add('space');

    document.body.insertBefore(container, document.getElementsByTagName('p')[1]);
    return img;
  }

  const img = document.createElement('img');
  const container = document.createElement('div');

  container.append(img);
  container.classList.add('space');

  document.body.appendChild(container);
  return img;
});


// Recalculate whether or not an img element is visible
// If its in the viewport - add its source and render it in the DOM
const cb = (event) => {
  targets.forEach((img, i) => {
    // Everytime a calculation happens increment current operation number value
    const header = document.getElementsByClassName('header__content-text')[0];
    header.innerHTML = (Number(header.innerHTML) + 1).toString();

    const rect = img.getBoundingClientRect().top;

    // If element is in viewport
    if (rect <= window.innerHeight) {
      img.setAttribute('src', images[i]);
      img.classList.add('animated', 'fadeInRightBig');
    }
  });
}

window.addEventListener('scroll', cb);

