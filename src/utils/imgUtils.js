export async function preloadImage (imgSrc) {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = imgSrc;
    if (img.complete) {
      resolve(img);
    } else {
      img.addEventListener('load', () => {
        console.log('resolved', Date.now(), img);
        resolve(img);
      });

      img.addEventListener('error', (error) => {
        reject(new Error(error));
      });
    }
  });
}

export function sequencePromises (tasks) {
  let result = Promise.resolve();

  tasks.forEach(task => {
    result = result.then(() => task());
  });

  return result;
}
