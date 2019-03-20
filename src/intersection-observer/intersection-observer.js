const numberOfImages = 50;
const imageHeight = 300;
const imageWidth = 200;
const url = `https://via.placeholder.com/${imageHeight}x${imageWidth}`;

// Generate an array of image links
const images = new Array(numberOfImages).fill(url)

// For each image link, create img element, wrap it in a div and insert it in the DOM
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


// Take dom element as argument
const cb = img => {

  // IO options
  const options = {
    // root: null,
    rootMargin: '-100px 0px -100px 0px', // default "top right bottom left" - "0px 0px 0px 0px"
    threshold: 1.0, // default threshold of 0.0. -> might be list of values
  }

  // entries  - Array<IntersectionObserverEntry> -> each representing one threshold which was crossed, 
  // observer - IntersectionObserver -> The IntersectionObserver for which the callback is being invoked.
  const io = new IntersectionObserver((entries, observer) => {
    // In this demo is always one entry
    entries.forEach((entry, i) => {
      const header = document.getElementsByClassName('header__content-text')[0];
      header.innerHTML = (Number(header.innerHTML) + 1).toString();

      // No calculation needed!!!
      if (entry.isIntersecting) {
        const img = entry.target;

        img.setAttribute('src', images[i]);
        img.classList.add('animated', 'fadeInRightBig');

        observer.disconnect();
      }
    });
  }, options);

  io.observe(img);
};

targets.forEach(cb);
