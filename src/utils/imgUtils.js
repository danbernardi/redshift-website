 /**
  * Makes a request to preload an image file.
  * @param  {String} imgSrc URL of image source
  * @return {Promise}        Returns a promise
  */
export async function preloadImage (imgSrc) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    if (img.complete) {
      resolve(img);
    } else {
      img.addEventListener('load', () => { resolve(img); });
      img.addEventListener('error', (error) => { reject(new Error(error)); });
    }
  });
}

/**
  * Sequences a set of image request promises
  * @param  {[type]} imgArray [description]
  * @return {[type]}          [description]
  */
export function preloadAllImages (imgArray) {
  const imagePromises = imgArray.map((img) => () => preloadImage(img));
  return sequencePromises(imagePromises);
}

/**
  * Sequences promises to call them in order upon the
  * completion of the prior task.
  * @param  {Object} tasks Promise
  * @return {Object}       Promise
  */
export function sequencePromises (tasks) {
  let result = Promise.resolve();

  tasks.forEach(task => {
    result = result.then(() => task());
  });

  return result;
}

/**
  * Filters the casestudy data  and preps for image processing
  * @param  {Object} data The JSON file with all of the case studies
  * @return {Array}       The formatted data
  *
  *  @example
  *  // Filters data down to 1 case study with an id of 'exampleId';
  *  buildImageList(caseStudies).filter((content) => content.id === 'exampleId');
  */
export function buildImageList (data) {
  const content = data.map((caseStudy) => {
    const imgObj = {
      id: caseStudy.id,
      images: caseStudy.content.filter((content) => content.hasOwnProperty('images'))
    };
    return imgObj;
  });

  return content;
}

/**
 * Parses the data and filters it down to an array of image urls
 * @param  {Object} data Formatted casestudy data
 * @param  {String} size One of 'imgDef', 'imgTlg', 'imgMlg' corresponding to 'default', 'tablet large' and  'mobile large'
 * @return {Array}      Returns an array of URLs for loading
 */
export function getImagesBySize (data, size = 'imgDef') {
  const imageUrls = data.map((caseStudy) => caseStudy.images.map((content) => content.images[size]));

  //Flatten the data
  return [].concat.apply([], imageUrls);
}

