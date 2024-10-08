// write a function to
// find all images without alternate text
// and give them a red border
// and a warning message
// and a link to the page to fix it

function findImagesWithoutAltText() {
  const images = document.querySelectorAll('img');
  images.forEach((image) => {
    if (!image.alt) {
      image.style.border = '5px solid red';
      image.insertAdjacentHTML(
        'afterend',
        `<p style="color: red;">This image has no alt text. Please add alt text <a href="${window.location.href}">here</a></p>`
      );
    }
  });
}

findImagesWithoutAltText();



