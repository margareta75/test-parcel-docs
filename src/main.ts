const img = document.createElement('img');
document.body.append(img);

const imgUrl = new URL('./img/flicka.jpg', import.meta.url);
console.log(imgUrl)
img.src = imgUrl.href;