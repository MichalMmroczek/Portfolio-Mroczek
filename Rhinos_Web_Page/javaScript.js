// const axios = require('axios');

// const spaceId = '7vle9qzboac0';
// const accessToken = 'e1pa1QYkNsyFUWBoXnnrOKITJNykofGp_ZCmEFmUzPI';

// axios.get(`https://cdn.contentful.com/spaces/7vle9qzboac0/entries?access_token=e1pa1QYkNsyFUWBoXnnrOKITJNykofGp_ZCmEFmUzPI`)
//   .then(response => {
//     const data = response.data;

//     // Przetwarzanie danych treści
//     const artykul1 = data.items[0]; // Przykładowy artykuł, pobierz odpowiedni indeks lub użyj pętli

//     // Pobranie wartości pól artykułu
//     const title1 = artykul1.fields.title1;
//     const text1 = artykul1.fields.text1;
//     const image1 = artykul1.fields.image1;
//     const link1 = artykul1.fields.link1;

//     // Przypisanie wartości do elementów HTML
//     const titleElement = document.querySelector('.title-1');
//     const textElement = document.querySelector('.text-1');
//     const imageElement = document.querySelector('.img-1');
//     const linkElement = document.querySelector('.btn-1');

//     titleElement.textContent = title1;
//     textElement.textContent = text1;
//     imageElement.src = image1;
//     linkElement.href = link1;
//   })
//   .catch(error => {
//     console.log('Błąd:', error);
//   });
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
const menuList=document.querySelector('.hamburger-menu-box')
const burgerBtn=document.querySelector('.fa-bars')

let isNavActive = false;

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

// Pobierz referencję do elementu HTML, w którym chcesz wyświetlać zdjęcia
const galeria = document.getElementById('gallery');

// Tworzenie funkcji do wczytywania zdjęć
function wczytajZdjecia() {
  // Ścieżka do folderu ze zdjęciami
  const sciezka = './gallery/';

  // Tablica przechowująca nazwy plików zdjęć
  const zdjecia = [
    '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
    '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
    '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg',
    '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'
  ];

  // Wyczyść zawartość galerii przed wczytaniem nowych zdjęć
  galeria.innerHTML = '';

 
  zdjecia.forEach(function(zdjecie) {
    const img = document.createElement('img');
    img.src = sciezka + zdjecie;
    galeria.appendChild(img);
  });

}


// Wywołaj funkcję wczytującą zdjęcia na starcie
wczytajZdjecia();


// Pobierz referencję do elementu HTML, do którego chcesz wstawić tekst
var paragraf = document.getElementById('mojParagraf');

// Tworzenie funkcji do wczytywania tekstu z pliku
function wczytajTekst() {
  // Ścieżka do pliku tekstowego
  var sciezka = './albums/album-1.txt';

  // Utwórz nowy obiekt XMLHttpRequest
  var xhr = new XMLHttpRequest();

  // Ustaw funkcję obsługi zdarzenia dla zakończenia żądania
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Pobierz tekst z odpowiedzi
      var tekst = xhr.responseText;

      // Wstaw tekst do paragrafu
      paragraf.textContent = tekst;
    }
  };

  // Wyślij żądanie GET do pliku tekstowego
  xhr.open('GET', sciezka, true);
  xhr.send();
}

// Wywołaj funkcję wczytującą tekst na starcie
wczytajTekst();