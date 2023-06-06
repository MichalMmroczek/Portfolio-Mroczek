const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
let currentUrl = window.location.href;

// menu hamburgerowe
let isNavActive = false;
const menuList=document.querySelector('.hamburger-menu-box')
const burgerBtn=document.querySelector('.fa-bars')

const toggleNav = () => {
  if (!isNavActive) {
    menuList.classList.add('active');
    menuList.classList.remove('hide');
    isNavActive = true;
    console.log(isNavActive)
  } else {
    menuList.classList.remove('active');
    menuList.classList.add('hide');
    isNavActive = false;
    console.log(isNavActive)
  }
};
console.log(isNavActive)
burgerBtn.addEventListener('click',toggleNav);


// Funkcja ładowanie zdjęć do galerii z folderów
const galeria = document.getElementById('gallery');
const album1header = document.getElementById('album-1-img');
function loadPhotos() {

  let sciezka;
  if (currentUrl.includes("album_1.html")) {
    sciezka = './gallery/album_1/';
  } else if (currentUrl.includes("album_2.html")) {
    sciezka = './gallery/album_2/';
  } else if (currentUrl.includes("album_3.html")) {
    sciezka = './gallery/album_3/';
  } else if (currentUrl.includes("album_4.html")) {
    sciezka = './gallery/album_4/';
  }

  const zdjecia = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
    '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg',
    '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg',
    '21.jpg', '22.jpg', '23.jpg', '24.jpg', '25.jpg',
    '26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg',
    '31.jpg', '32.jpg', '33.jpg', '34.jpg', '35.jpg',
    '36.jpg', '37.jpg', '38.jpg', '39.jpg', '40.jpg',
    '41.jpg', '42.jpg', '43.jpg', '44.jpg', '45.jpg',
    '46.jpg', '47.jpg', '48.jpg', '49.jpg', '50.jpg',
  ];

  galeria.innerHTML = '';

 
  zdjecia.forEach(function(zdjecie) {
    const img = document.createElement('img');
    img.src = sciezka + zdjecie;
    galeria.appendChild(img);
  });

}


// funkcja powiększanie wybranego zdjęcia
const images = document.querySelectorAll('.gallery-box img');

document.addEventListener('click', (event) => {
  
  if (!event.target.matches('.gallery-box img')) {
    images.forEach((img) => img.classList.remove('clicked'));
  }
});

document.addEventListener('click', (event) => {
  const clickedImage = event.target.closest('.gallery-box img');
  

  if (!clickedImage) {
    images.forEach((img) => img.classList.remove('clicked'));
  } else {
    const isClicked = clickedImage.classList.contains('clicked');
    images.forEach((img) => img.classList.remove('clicked'));
    if (!isClicked) {
      clickedImage.classList.add('clicked');
    }
  }
});

// Ładowanie na stronę nazw albumów z odpowiedniego pliku tekstowego
const albumName1 = document.getElementById('p-album-1');
const albumName2 = document.getElementById('p-album-2');
const albumName3 = document.getElementById('p-album-3');
const albumName4 = document.getElementById('p-album-4');

function loadAlbumNames() {

  const path1 = './naglowki_galeria/nazwa-album-1.txt';
  const path2 = './naglowki_galeria/nazwa-album-2.txt';
  const path3 = './naglowki_galeria/nazwa-album-3.txt';
  const path4 = './naglowki_galeria/nazwa-album-4.txt';

  const xhr1 = new XMLHttpRequest();
  const xhr2 = new XMLHttpRequest();
  const xhr3 = new XMLHttpRequest();
  const xhr4 = new XMLHttpRequest();

  xhr1.onreadystatechange = function() {
    if (xhr1.readyState === 4 && xhr1.status === 200) {
 
      const text1 = xhr1.responseText;

      albumName1.textContent = text1;
    }
  };
  xhr2.onreadystatechange = function() {
    if (xhr2.readyState === 4 && xhr2.status === 200) {

      const text2 = xhr2.responseText;

      albumName2.textContent = text2;
    }
  };
  xhr3.onreadystatechange = function() {
    if (xhr3.readyState === 4 && xhr3.status === 200) {

      const text3 = xhr3.responseText;

      albumName3.textContent = text3;
    }
  }; xhr4.onreadystatechange = function() {
    if (xhr4.readyState === 4 && xhr4.status === 200) {

      const text4 = xhr4.responseText;

      albumName4.textContent = text4;
    }
  };

  if (currentUrl.includes("album_1.html")) {
    xhr1.open('GET', path1, true);
    xhr1.send();
  } else if (currentUrl.includes("album_2.html")) {
    xhr2.open('GET', path2, true);
    xhr2.send();
  } else if (currentUrl.includes("album_3.html")) {
    xhr3.open('GET', path3, true);
    xhr3.send();
  } else if (currentUrl.includes("album_4.html")) {
    xhr4.open('GET', path4, true);
    xhr4.send();
  } else if (currentUrl.includes("gallery.html")) {
    xhr1.open('GET', path1, true);
    xhr1.send();
    xhr2.open('GET', path2, true);
    xhr2.send();
    xhr3.open('GET', path3, true);
    xhr3.send();
    xhr4.open('GET', path4, true);
    xhr4.send();
  }
  
}

// funkcja - ładowanie linku do transmisji z odpowiedniego pliku tekstowego

function loadVideoLink() {
  const path = './link_do_transmisji/link_transmisja.txt'; 
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const videoLink = xhr.responseText.trim();
      const transmisionVideo = document.getElementById('transmisionVideo');
      transmisionVideo.src = videoLink;
    }
  };

  xhr.open('GET', path, true);
  xhr.send();
}

// funkcja- ładowanie grafiki do artykułów

function loadArticleImages() {
  const img1 = document.getElementById('articleImage1');
  const img2 = document.getElementById('articleImage2');
  const img3 = document.getElementById('articleImage3');
  const img4 = document.getElementById('articleImage4');
  const imgName1 = 'img1'; 
  const imgName2 = 'img2';
  const imgName3 = 'img3';
  const imgName4 = 'img4';
  const imageFormats = ['jpg', 'png']; 

  let imagePath1 = null;
  let imagePath2 = null;
  let imagePath3 = null;
  let imagePath4 = null;
  for (let i = 0; i < imageFormats.length; i++) {
    const format = imageFormats[i];
    const imagePathAttempt1 = `./aktualnosci/artykul1/${imgName1}.${format}`;

    const http1 = new XMLHttpRequest();
    http1.open('HEAD', imagePathAttempt1, false);
    http1.send();

    if (http1.status === 200) {

      imagePath1 = imagePathAttempt1;
      break;
    }
  }

  if (imagePath1) {

    img1.src = imagePath1;
  } else {

    img1.src = './images/Rhinos Wyszków text.png';
  }
  for (let i = 0; i < imageFormats.length; i++) {
    const format = imageFormats[i];
    const imagePathAttempt2 = `./aktualnosci/artykul2/${imgName2}.${format}`;


    const http2 = new XMLHttpRequest();
    http2.open('HEAD', imagePathAttempt2, false);
    http2.send();

    if (http2.status === 200) {

      imagePath2 = imagePathAttempt2;
      break;
    }
  }

  if (imagePath2) {

    img2.src = imagePath2;
  } else {

    img2.src = './images/Rhinos Wyszków text.png';
  }
  for (let i = 0; i < imageFormats.length; i++) {
    const format = imageFormats[i];
    const imagePathAttempt3 = `./aktualnosci/artykul3/${imgName3}.${format}`;

    const http3 = new XMLHttpRequest();
    http3.open('HEAD', imagePathAttempt3, false);
    http3.send();

    if (http3.status === 200) {

      imagePath3 = imagePathAttempt3;
      break;
    }
  }

  if (imagePath3) {
    img3.src = imagePath3;
  } else {
    img3.src = './images/Rhinos Wyszków text.png';
  }
  for (let i = 0; i < imageFormats.length; i++) {
    const format = imageFormats[i];
    const imagePathAttempt4 = `./aktualnosci/artykul4/${imgName4}.${format}`;

    const http4 = new XMLHttpRequest();
    http4.open('HEAD', imagePathAttempt4, false);
    http4.send();

    if (http4.status === 200) {
      imagePath4 = imagePathAttempt4;
      break;
    }
  }
  if (imagePath4) {
    img4.src = imagePath4;
  } else {
    img4.src = './images/Rhinos Wyszków text.png';
  }
}

// funkcja- ładowanie reszty informacji to artykułów

function loadArticledata() {
  const pathArticle1title = './aktualnosci/artykul1/naglowek.txt'; 
  const pathArticle2title = './aktualnosci/artykul2/naglowek.txt';
  const pathArticle3title = './aktualnosci/artykul3/naglowek.txt';
  const pathArticle4title = './aktualnosci/artykul4/naglowek.txt';
  const pathArticle1text = './aktualnosci/artykul1/skrot_tekstu.txt'; 
  const pathArticle2text = './aktualnosci/artykul2/skrot_tekstu.txt';
  const pathArticle3text = './aktualnosci/artykul3/skrot_tekstu.txt';
  const pathArticle4text = './aktualnosci/artykul4/skrot_tekstu.txt';
  const pathArticle1link = './aktualnosci/artykul1/link_do_artykulu.txt';
  const pathArticle2link = './aktualnosci/artykul2/link_do_artykulu.txt';
  const pathArticle3link = './aktualnosci/artykul3/link_do_artykulu.txt';
  const pathArticle4link = './aktualnosci/artykul4/link_do_artykulu.txt';
  const xhrArt1title = new XMLHttpRequest();
  const xhrArt2title = new XMLHttpRequest();
  const xhrArt3title = new XMLHttpRequest();
  const xhrArt4title = new XMLHttpRequest();
  const xhrArt1text = new XMLHttpRequest();
  const xhrArt2text = new XMLHttpRequest();
  const xhrArt3text = new XMLHttpRequest();
  const xhrArt4text = new XMLHttpRequest();
  const xhrArt1link = new XMLHttpRequest();
  const xhrArt2link = new XMLHttpRequest();
  const xhrArt3link = new XMLHttpRequest();
  const xhrArt4link = new XMLHttpRequest();
  const articleTitle1 = document.getElementById('title-1');
  const articleTitle2 = document.getElementById('title-2');
  const articleTitle3 = document.getElementById('title-3');
  const articleTitle4 = document.getElementById('title-4');
  const articleText1 = document.getElementById('text-1');
  const articleText2 = document.getElementById('text-2');
  const articleText3 = document.getElementById('text-3');
  const articleText4 = document.getElementById('text-4');
  const articleLink1 = document.getElementById('link-1');
  const articleLink2 = document.getElementById('link-2');
  const articleLink3 = document.getElementById('link-3');
  const articleLink4 = document.getElementById('link-4');
  console.log(xhrArt4link);
  xhrArt1title.onreadystatechange = function() {
    if (xhrArt1title.readyState === 4 && xhrArt1title.status === 200) {
      const artTitle = xhrArt1title.responseText;
      articleTitle1.textContent = artTitle;
    }
  };
  xhrArt2title.onreadystatechange = function() {
    if (xhrArt2title.readyState === 4 && xhrArt2title.status === 200) {
      const artTitle = xhrArt2title.responseText;
      articleTitle2.textContent = artTitle;
    }
  };
  xhrArt3title.onreadystatechange = function() {
    if (xhrArt3title.readyState === 4 && xhrArt3title.status === 200) {
      const artTitle = xhrArt3title.responseText;
      articleTitle3.textContent = artTitle;
    }
  };
  xhrArt4title.onreadystatechange = function() {
    if (xhrArt4title.readyState === 4 && xhrArt4title.status === 200) {
      const artTitle = xhrArt4title.responseText;
      articleTitle4.textContent = artTitle;
    }
  };
  xhrArt1text.onreadystatechange = function() {
    if (xhrArt1text.readyState === 4 && xhrArt1text.status === 200) {
      const artText = xhrArt1text.responseText;
      articleText1.textContent = artText;
    }
  };
  xhrArt2text.onreadystatechange = function() {
    if (xhrArt2text.readyState === 4 && xhrArt2text.status === 200) {
      const artText = xhrArt2text.responseText;
      articleText2.textContent = artText;
    }
  };
  xhrArt3text.onreadystatechange = function() {
    if (xhrArt3text.readyState === 4 && xhrArt3text.status === 200) {
      const artText = xhrArt3text.responseText;
      articleText3.textContent = artText;
    }
  };
  xhrArt4text.onreadystatechange = function() {
    if (xhrArt4text.readyState === 4 && xhrArt4text.status === 200) {
      const artText = xhrArt4text.responseText;
      articleText4.textContent = artText;
    }
  };
  xhrArt1link.onreadystatechange = function() {
    if (xhrArt1link.readyState === 4 && xhrArt1link.status === 200) {
      const artLink = xhrArt1link.responseText.trim();
      articleLink1.href = artLink;
    }
  };
  xhrArt2link.onreadystatechange = function() {
    if (xhrArt2link.readyState === 4 && xhrArt2link.status === 200) {
      const artLink = xhrArt2link.responseText.trim();
      articleLink2.href = artLink;
    }
  };
  xhrArt3link.onreadystatechange = function() {
    if (xhrArt3link.readyState === 4 && xhrArt3link.status === 200) {
      const artLink = xhrArt3link.responseText.trim();
      articleLink3.href = artLink;
    }
  };
  xhrArt4link.onreadystatechange = function() {
    if (xhrArt4link.readyState === 4 && xhrArt4link.status === 200) {
      const artLink = xhrArt4link.responseText.trim();
      articleLink4.href = artLink;
    }
  };

  xhrArt1title.open('GET', pathArticle1title, true);
  xhrArt1title.send();
  xhrArt2title.open('GET', pathArticle2title, true);
  xhrArt2title.send();
  xhrArt3title.open('GET', pathArticle3title, true);
  xhrArt3title.send();
  xhrArt4title.open('GET', pathArticle4title, true);
  xhrArt4title.send();
  xhrArt1text.open('GET', pathArticle1text, true);
  xhrArt1text.send();
  xhrArt2text.open('GET', pathArticle2text, true);
  xhrArt2text.send();
  xhrArt3text.open('GET', pathArticle3text, true);
  xhrArt3text.send();
  xhrArt4text.open('GET', pathArticle4text, true);
  xhrArt4text.send();
  xhrArt1link.open('GET', pathArticle1link, true);
  xhrArt1link.send();
  xhrArt2link.open('GET', pathArticle2link, true);
  xhrArt2link.send();
  xhrArt3link.open('GET', pathArticle3link, true);
  xhrArt3link.send();
  xhrArt4link.open('GET', pathArticle4link, true);
  xhrArt4link.send();
  console.log(xhrArt4link);
}

console.log(currentUrl);

if (currentUrl.includes("index.html") || (currentUrl === "https://rhinoswyszkow.com/")) {
  loadArticledata()
 }
if (currentUrl.includes("album_1.html") || currentUrl.includes("album_2.html") || currentUrl.includes("album_3.html")|| currentUrl.includes("album_4.html")) {
  loadPhotos();
  }
if (currentUrl.includes("gallery.html") || currentUrl.includes("album_1.html") || currentUrl.includes("album_2.html") || currentUrl.includes("album_3.html")|| currentUrl.includes("album_4.html")) {
  loadAlbumNames();
  }
if (currentUrl.includes("transmisje.html")) {
  loadVideoLink();
  }
if (currentUrl.includes("index.html") || (currentUrl === "https://rhinoswyszkow.com/")) {
  loadArticleImages();
  }
   