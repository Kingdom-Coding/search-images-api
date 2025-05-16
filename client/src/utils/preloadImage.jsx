export function preloadImage(imgURL, userURL) {
  return new Promise((reslove, reject) => {
    if (!imgURL || typeof imgURL !== "string" || imgURL.trim() === "") {
      return reject("Invalid image URL");
    }

    if (!userURL || typeof userURL !== "string" || userURL.trim() === "") {
      return reject("Invalid image URL");
    }

    const imgUrl = new Image();
    imgUrl.src = imgURL;

    imgUrl.onload = () => reslove(imgURL);
    imgUrl.onerror = () => reject(imgURL);

    const userUrl = new Image();
    userUrl.src = userURL;

    userUrl.onload = reslove(userURL);
    userUrl.onerror = reject(userURL);
  });
}
