const PHOTOS = [
  './image/1 (70).jpg',
  './image/1 (76).jpg',
  './image/1 (82).jpg',
  './image/1 (95).jpg',
  './image/1 (89).jpg',
  './image/3rooms.jpg',
  './image/4rooms.jpg',
  './image/about1.jpg',
  './image/about2.jpg',
  './image/about3.jpg',
  './image/about4.jpg',
  './image/999.jpg',
  './image/100.jpg',
  './image/1 (76).jpg', 
  './image/1 (70).jpg'  
];


function initCarousel() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;
  

  const allPhotos = [...PHOTOS, ...PHOTOS];
  allPhotos.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Gallery photo';
    img.loading = 'lazy';
    track.appendChild(img);
  });
}

const langToggle = document.getElementById('langToggle');
const sliderImages = document.querySelectorAll('.slider img');
const modal = document.getElementById('galleryModal');
const modalImg = document.getElementById('modalImage');
const closeModalBtn = document.getElementById('closeModal');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const burger = document.getElementById('burger');
const navLinksContainer = document.getElementById('navLinks');

const translations = {
  ru: {
    'nav.home': 'Главная',
    'nav.rooms': 'Номера',
    'nav.gallery': 'Галерея',
    'nav.reviews': 'Отзывы',
    'nav.location': 'Локация',
    'nav.contact': 'Контакты',
    'header.title': 'Hotel Latif Samarkand — место, где история, комфорт и искренняя забота встречают каждого гостя.',
    'rooms.title': 'Номера',
    'rooms.details': 'Подробнее',
    'gallery.title': 'Галерея',
    'reviews.title': 'Отзывы гостей',
    'review1.text': '"Очень гостеприимный хозяин, ухоженная, цветущая территория. Чувствуешь себя, как у себя на даче. Все чисто, приятное место."',
    'review1.author': 'Шелихова. KZ — Оценка: 10',
    'review2.text': '"Очень понравился отель. Дом в старинном национальном стиле. Отель без излишеств, небольшой и чистый. Вкусный завтрак. Персонал внимательный и вежливый. На все мои просьбы сразу отвечали. Очень красивый дворик и бассейн."',
    'review2.author': 'Елена. BY — Оценка: 9.6',
    'review3.text': '"Очень красивый сад и очень хороший семейный персонал, чувствовали себя как дома"',
    'review3.author': 'Alex. USA — Оценка: 9.8',
    'review4.text': '"Замечательный дом, прекрасный хозяин, помощь в любых вопросах, чисто, уютно, атмосферно! Завтраки просто великолепные, разнообразные! Очень рекомендую!"',
    'review4.author': 'Алиса и группа друзей — Оценка: 9.8',
    'review5.text': '"Отличный отель, великолепный доброжелательный персонал. Чувство, что отдыхаешь дома"',
    'review5.author': 'Игорь. FIN — Оценка: 9.6',
    'review6.text': '"Прекрасный, очень внимательный и отзывчивый хозяин. Встречают, как добрых старых знакомых. Отель расположен в иранском квартале, рядом с центром плова, в шаговой доступности до Регистана (30 мин ходьбы). Скромная обстановка напоминает домашнюю. Тихое, чисто и уютное местечко"',
    'review6.author': 'Элина. USA — Оценка: 10',
    'location.title': 'Наше местоположение',
    'contact.title': 'Контакты',
    'contact.phones': 'Телефоны:',
    'about.title': 'О нас',
    'about.text1': 'Hotel Latif Samarkand — это место, где Самарканд встречает вас не только своей древней красотой, но и семейным теплом, которого так часто не хватает в путешествиях. Наш семейный отель открыл свои двери в июле 2010 года. С тех пор он стал домом для сотен гостей со всего мира, которые искали не просто номер для проживания, а атмосферу спокойствия, заботы и настоящего гостеприимства.Мы убеждены, что хороший отель — это больше, чем просто место для ночлега. Это пространство, где гости могут отдохнуть, почувствовать себя желанными и насладиться путешествием.',
    'about.text2': 'Hotel Latif Samarkand предлагает 18 светлых и комфортных номеров, оборудованных всем необходимым для приятного и расслабляющего отдыха. Наша команда делает всё возможное, чтобы каждый гость почувствовал атмосферу уюта и настоящее самаркандское гостеприимство.Независимо от того, приезжаете ли вы в Самарканд впервые или возвращаетесь сюда снова, мы будем рады приветствовать вас как дорогого гостя!',
    'about.feature1': 'Бесплатный Wi-Fi на всей территории отеля',
    'about.feature2': 'Круглосуточная стойка регистрации',
    'about.feature3': 'Бесплатная парковка',
    'about.feature4': 'Трансфер из/в аэропорт по запросу',
    'about.feature5': 'Уютный внутренний двор для отдыха',
    'about.feature6': 'Завтрак для гостей',
    'about.feature7': 'Дружелюбный персонал'
  },
  en: {
    'nav.home': 'Home',
    'nav.rooms': 'Rooms',
    'nav.gallery': 'Gallery',
    'nav.reviews': 'Reviews',
    'nav.location': 'Location',
    'nav.contact': 'Contact',
    'header.title': 'Hotel Latif Samarkand — where history, comfort, and genuine hospitality meet.',
    'rooms.title': 'Rooms',
    'rooms.details': 'Details',
    'gallery.title': 'Gallery',
    'reviews.title': 'Guest Reviews',
    'review1.text': '"Very hospitable host, well-kept, blooming territory. You feel like you are at your own dacha. Everything is clean, a pleasant place."',
    'review1.author': 'Shelikhova. KZ — Rating: 10',
    'review2.text': '"I really liked the hotel. A house in an old national style. The hotel is without frills, small and clean. Delicious breakfast. The staff is attentive and polite. They responded to all my requests immediately. A very beautiful courtyard and pool."',
    'review2.author': 'Elena. BY — Rating: 9.6',
    'review3.text': '"Very beautiful garden and very nice family staff, felt like at home"',
    'review3.author': 'Alex. USA — Rating: 9.8',
    'review4.text': '"Wonderful house, excellent host, help with any issues, clean, cozy, atmospheric! The breakfasts are simply magnificent, varied! I highly recommend it!"',
    'review4.author': 'Alisa and group of friends — Rating: 9.8',
    'review5.text': '"Excellent hotel, wonderful friendly staff. The feeling that you are vacationing at home"',
    'review5.author': 'Igor. FIN — Rating: 9.6',
    'review6.text': '"A wonderful, very attentive and responsive host. They welcome you like old friends. The hotel is located in the Iranian quarter, next to the pilaf center, within walking distance of Registan (30 min walk). The modest atmosphere reminds of home. A quiet, clean and cozy place."',
    'review6.author': 'Elina. USA — Rating: 10',
    'location.title': 'Our Location',
    'contact.title': 'Contact',
    'contact.phones': 'Phones:',
    'about.title': 'About Us',
    'about.text1': "Hotel Latif Samarkand is a place where the ancient beauty of Samarkand welcomes you together with the warmth of a family home. Our family hotel opened its doors in July 2010. Since then, it has become a home away from home for hundreds of travelers from around the world who were looking not just for accommodation, but for comfort, care, and sincere hospitality. We believe that a hotel should be more than a place to sleep. It should be a place where guests feel relaxed, welcomed, and supported during their journey. ",
    'about.text2': 'Hotel Latif Samarkand offers 18 bright and comfortable rooms equipped with everything you need for a pleasant and relaxing stay. Our team does everything possible to ensure that each guest enjoys a peaceful atmosphere and authentic Samarkand hospitality. Whether you are visiting Samarkand for the first time or returning again, we are happy to welcome you as our guest.',
    'about.feature1': 'Free Wi‑Fi throughout the property',
    'about.feature2': 'Free parking',
    'about.feature3': '24‑hour front desk',
    'about.feature4': 'Airport shuttle upon request',
    'about.feature5': 'Cozy courtyard for relaxing',
    'about.feature6': 'Breakfast available',
    'about.feature7': 'Friendly staff always ready to help'
  }
};

let currentLang = 'ru';
let currentSlideIndex = 0;
let slideInterval;


function startSlider() {
  if (!sliderImages.length) return;
  sliderImages[currentSlideIndex].classList.add('active');
  slideInterval = setInterval(() => {
    sliderImages[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % sliderImages.length;
    sliderImages[currentSlideIndex].classList.add('active');
  }, 5000);
}


function updateLanguage(lang) {
  langToggle.textContent = lang === 'ru' ? 'En' : 'Ru';
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.dataset.key;
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  currentLang = lang;
}


function checkVisibility() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight * 0.85) {
      section.classList.add('visible');
    }
  });
}


function updateActiveNav() {
  let currentId = '';
  sections.forEach(section => {
    const top = section.offsetTop - 150;
    if (window.scrollY >= top) {
      currentId = section.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentId) {
      link.classList.add('active');
    }
  });
}


function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
 const targetElement = document.querySelector(targetId);
  if (targetElement) {
    if (navLinksContainer.classList.contains('show')) {
      navLinksContainer.classList.remove('show');
      burger.classList.remove('active');
      document.body.style.overflow = '';
    }
    window.scrollTo({
      top: targetElement.offsetTop - 50,
      behavior: 'smooth'
    });
  }
}


function createScrollTopButton() {
  const btn = document.createElement('button');
  btn.innerText = "↑";
  btn.style.position = "fixed";
  btn.style.bottom = "30px";
  btn.style.right = "30px";
  btn.style.padding = "12px 16px";
  btn.style.borderRadius = "50%";
  btn.style.border = "none";
  btn.style.background = "#ffd700";
  btn.style.cursor = "pointer";
  btn.style.display = "none";
  btn.style.fontSize = "18px";
  btn.style.zIndex = "1000";
  document.body.appendChild(btn);
  
  window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 400 ? "block" : "none";
  });
  
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


function setupGallery() {
  const galleryImages = document.querySelectorAll('#gallery .carousel-track img');
  galleryImages.forEach((img, idx) => {
    img.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = img.src;
    });
  });
}

function closeModal() {
  modal.style.display = 'none';
}


function toggleMobileMenu() {
  burger.classList.toggle('active');
  navLinksContainer.classList.toggle('show');
  document.body.style.overflow = navLinksContainer.classList.contains('show') ? 'hidden' : '';
}

function closeMenuOnClickOutside(event) {
  if (!burger.contains(event.target) && !navLinksContainer.contains(event.target)) {
    if (navLinksContainer.classList.contains('show')) {
      burger.classList.remove('active');
      navLinksContainer.classList.remove('show');
      document.body.style.overflow = '';
    }
  }
}


(function init() {
  initCarousel();
  startSlider();
  updateLanguage('ru');
  
  langToggle.addEventListener('click', () => {
    updateLanguage(currentLang === 'ru' ? 'en' : 'ru');
  });
  
  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'flex' && e.key === 'Escape') closeModal();
  });
  
  window.addEventListener('scroll', updateActiveNav);
  navLinks.forEach(link => link.addEventListener('click', smoothScroll));
  
  createScrollTopButton();
  
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', () => {
    checkVisibility();
    setupGallery();
  });
  
  if (burger) {
    burger.addEventListener('click', toggleMobileMenu);
  }
  
  document.addEventListener('click', closeMenuOnClickOutside);
  
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      if (navLinksContainer.classList.contains('show')) {
        navLinksContainer.classList.remove('show');
        burger.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
})();