const numberOfImages = 50;
const imageHeight = 600;
const imageWidth = 400;
const url = `https://via.placeholder.com/${imageHeight}x${imageWidth}`;

// Generate an array of image links
const images = new Array(numberOfImages).fill(url)

// For each image link, create img element, wrap it in a div and insert it in the DOM
const targets = images.map(() => {
  const img = document.createElement('img');
  const container = document.createElement('div');

  container.append(img);
  container.classList.add('space');

  document.body.appendChild(container);
  return img;
});

// Take dom element as argument
const cb = img => {
  // entries - observations on the element
  // observer - manage the actuall instance of observer
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, i) => {
      const header = document.getElementsByClassName('header__content-text')[0];
      header.innerHTML = (Number(header.innerHTML) + 1).toString();

      // No calculation!!!
      if (entry.isIntersecting) {
        const img = entry.target;

        img.setAttribute('src', images[i]);
        img.classList.add('animated', 'fadeInRightBig');

        observer.disconnect();
      }
    });
  });

  io.observe(img);
};

// TODO: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry
// TODO: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
// TODO: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
targets.forEach(cb);

