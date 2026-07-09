        // ============================================================
        // 1. ПЕРЕВОД
        // ============================================================
        const translations = {
            ru: {
                'nav.home': 'Главная',
                'nav.about': 'О нас',
                'nav.around': 'Вокруг отеля',
                'nav.rooms': 'Номера',
                'nav.gallery': 'Галерея',
                'nav.reviews': 'Отзывы',
                'nav.faq': 'FAQ',
                'nav.location': 'Локация',
                'nav.contact': 'Контакты',
                'nav.book': 'Забронировать',

                'hero.tag': 'Samarkand · Since 2010',
                'hero.title': 'Hotel Latif Samarkand —<br /><strong>история, комфорт и забота</strong><br />в сердце Самарканда',
                'hero.sub': 'Семейный отель в тихом районе города',
                'hero.btn': 'Выбрать номер',

                'about.title': 'Об <strong>отеле</strong>',
                'about.p1': 'Hotel Latif Samarkand — это место, где Самарканд встречает вас не только своей древней красотой, но и семейным теплом, которого так часто не хватает в путешествиях. Наш семейный отель открыл свои двери в июле 2010 года. С тех пор он стал домом для сотен гостей со всего мира, которые искали не просто номер для проживания, а атмосферу спокойствия, заботы и настоящего гостеприимства.',
                'about.p2': 'Мы убеждены, что хороший отель — это больше, чем просто место для ночлега. Это пространство, где гости могут отдохнуть, почувствовать себя желанными и насладиться путешествием. Hotel Latif Samarkand предлагает 18 светлых и комфортных номеров, оборудованных всем необходимым для приятного и расслабляющего отдыха.',
                'about.p3': '<strong>18 номеров · 7 категорий</strong><br />Все наши номера светлые, тихие и просторные, с высокими потолками. В каждом — всё необходимое для комфортного отдыха. Номера на третьем этаже оснащены балконом и имеют вид на сад и бассейн.',
                'about.services': 'Удобства:',
                'about.s1': 'Бесплатный Wi‑Fi на всей территории',
                'about.s2': 'Круглосуточная стойка регистрации',
                'about.s3': 'Охраняемая парковка на территории',
                'about.s4': 'Трансфер из/в аэропорт по запросу',
                'about.s5': 'Чай, кофе и вода в любое время',
                'about.s6': 'Завтрак включён в стоимость',
                'about.s7': 'Общая кухня и холодильник для гостей',
                'about.extra': 'Дополнительно (платно):',
                'about.e1': 'Трансфер от/до аэропорта и вокзала',
                'about.e2': 'Сезонный открытый бассейн',
                'about.e3': 'Сад с виноградником и розарием',
                'about.e4': 'Прачечная и химчистка',
                'about.e5': 'Помощь в организации экскурсий',
                'about.e6': 'Хранение багажа',

                'around.title': 'Самарканд <strong>вокруг отеля</strong>',
                'around.sub': '<strong>Древний город — в нескольких шагах</strong><br />Hotel Latif расположен в тихом жилом районе Самарканда — в стороне от туристического шума, но в нескольких минутах от всего, ради чего сюда едут.',
                'around.nearby': 'Что рядом:',
                'around.n1': 'Ресторан Каримбек (лучший плов в городе)',
                'around.n2': 'Сиабский базар (специи, сухофрукты, лепёшки)',
                'around.n3': 'Мавзолей Гур-Эмир (усыпальница Амира Тимура)',
                'around.n4': 'Государственный музей истории культуры Узбекистана',
                'around.n5': 'Регистан (площадь трёх медресе)',
                'around.n6': 'Мечеть Биби-Ханым',
                'around.n7': 'Медресе Улугбека',
                'around.how': 'Как добраться:',
                'around.h1': 'Международный аэропорт Самарканда (SKD)',
                'around.h2': 'Железнодорожный вокзал',
                'around.h3': 'Трансфер от/до аэропорта и вокзала',
                'around.amenities': 'Удобства на территории:',
                'around.a1': 'Сезонный открытый бассейн',
                'around.a2': 'Сад с виноградником и розарием',
                'around.a3': 'Тенистая терраса, общий лаундж',
                'around.guests': 'Для гостей:',
                'around.g1': 'Бесплатный Wi‑Fi',
                'around.g2': 'Охраняемая парковка',
                'around.g3': 'Круглосуточная стойка',

                'rooms.title': 'Номера <strong>и цены</strong>',
                'rooms.r1': 'Стандарт — от $50',
                'rooms.r2': 'Комфорт — от $70',
                'rooms.r3': 'Семейный — от $90',
                'rooms.r4': 'Люкс с балконом — от $120',
                'rooms.r5': 'Делюкс — от $100',
                'rooms.r6': 'Супериор — от $80',
                'rooms.r7': 'Премиум — от $110',

                'gallery.title': 'Галерея <strong>отеля</strong>',

                'reviews.title': 'Отзывы <strong>гостей</strong>',
                'reviews.r1': '«Очень гостеприимный хозяин, ухоженная, цветущая территория. Чувствуешь себя, как у себя на даче. Все чисто, приятное место.»',
                'reviews.a1': 'Шелихова. KZ — Оценка: 10',
                'reviews.r2': '«Очень понравился отель. Дом в старинном национальном стиле. Отель без излишеств, небольшой и чистый. Вкусный завтрак. Персонал внимательный и вежливый.»',
                'reviews.a2': 'Елена. BY — Оценка: 9.6',
                'reviews.r3': '«Очень красивый сад и очень хороший семейный персонал, чувствовали себя как дома»',
                'reviews.a3': 'Alex. USA — Оценка: 9.8',
                'reviews.r4': '«Замечательный дом, прекрасный хозяин, помощь в любых вопросах, чисто, уютно, атмосферно! Завтраки просто великолепные!»',
                'reviews.a4': 'Алиса и группа друзей — Оценка: 9.8',
                'reviews.r5': '«Отличный отель, великолепный доброжелательный персонал. Чувство, что отдыхаешь дома»',
                'reviews.a5': 'Игорь. FIN — Оценка: 9.6',
                'reviews.r6': '«Прекрасный, очень внимательный и отзывчивый хозяин. Встречают, как добрых старых знакомых. Тихое, чисто и уютное местечко»',
                'reviews.a6': 'Элина. USA — Оценка: 10',

                'faq.title': 'Часто задаваемые <strong>вопросы</strong>',
                'faq.q1': 'Во сколько заезд и выезд?',
                'faq.a1': 'Заезд с 14:00, выезд до 12:00. Ранний заезд (с 7:00 до 14:00) — 50% от стоимости суток. Поздний выезд — по запросу, напишите нам заранее.',
                'faq.q2': 'Входит ли завтрак в стоимость?',
                'faq.a2': 'Да, завтрак включён в стоимость проживания.',
                'faq.q3': 'Нужна ли предоплата?',
                'faq.a3': 'Нет. Оплата производится при заезде. Кредитная карта не требуется.',
                'faq.q4': 'Каковы условия отмены?',
                'faq.a4': 'Отмена бронирования обходится в 50% от стоимости проживания.',
                'faq.q5': 'Есть ли парковка?',
                'faq.a5': 'Да, охраняемая парковка на территории отеля — бесплатно для гостей.',
                'faq.q6': 'Организуете ли вы трансфер?',
                'faq.a6': 'Да, организуем трансфер от/до аэропорта и вокзала. Услуга платная — детали уточняются при бронировании.',
                'faq.q7': 'Можно ли с детьми?',
                'faq.a7': 'Да, мы семейный отель и рады гостям с детьми.',
                'faq.q8': 'Как оплатить при прямом бронировании?',
                'faq.a8': 'Напишите нам в WhatsApp или по email — мы согласуем удобный способ оплаты.',

                'location.title': 'Наше <strong>местоположение</strong>',

                'contact.title': 'Свяжитесь <strong>с нами</strong>',
                'contact.insta': 'Instagram',
                'contact.email': 'Email',
                'contact.phones': 'Телефоны',
                'contact.qr': 'Свяжитесь с нами'
            },

            en: {
                'nav.home': 'Home',
                'nav.about': 'About',
                'nav.around': 'Around Hotel',
                'nav.rooms': 'Rooms',
                'nav.gallery': 'Gallery',
                'nav.reviews': 'Reviews',
                'nav.faq': 'FAQ',
                'nav.location': 'Location',
                'nav.contact': 'Contact',
                'nav.book': 'Book Now',

                'hero.tag': 'Samarkand · Since 2010',
                'hero.title': 'Hotel Latif Samarkand —<br /><strong>history, comfort and care</strong><br />in the heart of Samarkand',
                'hero.sub': 'A family hotel in a quiet area of the city',
                'hero.btn': 'Choose a room',

                'about.title': 'About <strong>the hotel</strong>',
                'about.p1': 'Hotel Latif Samarkand is a place where the ancient beauty of Samarkand meets you together with the warmth of a family home. Our family hotel opened its doors in July 2010. Since then, it has become a home away from home for hundreds of travelers from around the world who were looking not just for accommodation, but for comfort, care, and sincere hospitality.',
                'about.p2': 'We believe that a hotel should be more than a place to sleep. It should be a place where guests feel relaxed, welcomed, and supported during their journey. Hotel Latif Samarkand offers 18 bright and comfortable rooms equipped with everything you need for a pleasant and relaxing stay.',
                'about.p3': '<strong>18 rooms · 7 categories</strong><br />All our rooms are bright, quiet and spacious, with high ceilings. Each room has everything for a comfortable stay. Rooms on the third floor have a balcony overlooking the garden and pool.',
                'about.services': 'Amenities:',
                'about.s1': 'Free Wi‑Fi throughout the property',
                'about.s2': '24-hour front desk',
                'about.s3': 'Free parking on site',
                'about.s4': 'Airport shuttle upon request',
                'about.s5': 'Tea, coffee and water available anytime',
                'about.s6': 'Breakfast included',
                'about.s7': 'Shared kitchen and refrigerator',
                'about.extra': 'Additional (paid):',
                'about.e1': 'Airport and railway station transfer',
                'about.e2': 'Seasonal outdoor pool',
                'about.e3': 'Garden with vineyard and rose garden',
                'about.e4': 'Laundry and dry cleaning',
                'about.e5': 'Excursion and transport organization',
                'about.e6': 'Luggage storage',

                'around.title': 'Samarkand <strong>around the hotel</strong>',
                'around.sub': '<strong>Ancient city — just steps away</strong><br />Hotel Latif is located in a quiet residential area of Samarkand — away from tourist noise, but minutes away from everything people come here for.',
                'around.nearby': 'Nearby:',
                'around.n1': 'Karimbek Restaurant (best pilaf in the city)',
                'around.n2': 'Siyab Bazaar (spices, dried fruits, bread)',
                'around.n3': 'Gur-Emir Mausoleum (Tomb of Amir Timur)',
                'around.n4': 'State Museum of Cultural History of Uzbekistan',
                'around.n5': 'Registan Square (three madrasahs)',
                'around.n6': 'Bibi-Khanym Mosque',
                'around.n7': 'Ulugbek Madrasah',
                'around.how': 'How to get:',
                'around.h1': 'Samarkand International Airport (SKD)',
                'around.h2': 'Railway Station',
                'around.h3': 'Airport and railway station transfer',
                'around.amenities': 'Amenities on site:',
                'around.a1': 'Seasonal outdoor pool',
                'around.a2': 'Garden with vineyard and rose garden',
                'around.a3': 'Shaded terrace, shared lounge',
                'around.guests': 'For guests:',
                'around.g1': 'Free Wi‑Fi',
                'around.g2': 'Free parking',
                'around.g3': '24-hour front desk',

                'rooms.title': 'Rooms <strong>and prices</strong>',
                'rooms.r1': 'Standard — from $50',
                'rooms.r2': 'Comfort — from $70',
                'rooms.r3': 'Family — from $90',
                'rooms.r4': 'Lux with balcony — from $120',
                'rooms.r5': 'Deluxe — from $100',
                'rooms.r6': 'Superior — from $80',
                'rooms.r7': 'Premium — from $110',

                'gallery.title': 'Hotel <strong>gallery</strong>',

                'reviews.title': 'Guest <strong>reviews</strong>',
                'reviews.r1': '"Very hospitable host, well-kept, blooming territory. You feel like you are at your own dacha. Everything is clean, a pleasant place."',
                'reviews.a1': 'Shelikhova. KZ — Rating: 10',
                'reviews.r2': '"I really liked the hotel. A house in an old national style. The hotel is without frills, small and clean. Delicious breakfast. The staff is attentive and polite."',
                'reviews.a2': 'Elena. BY — Rating: 9.6',
                'reviews.r3': '"Very beautiful garden and very nice family staff, felt like at home"',
                'reviews.a3': 'Alex. USA — Rating: 9.8',
                'reviews.r4': '"Wonderful house, excellent host, help with any issues, clean, cozy, atmospheric! The breakfasts are simply magnificent!"',
                'reviews.a4': 'Alisa and group of friends — Rating: 9.8',
                'reviews.r5': '"Excellent hotel, wonderful friendly staff. The feeling that you are vacationing at home"',
                'reviews.a5': 'Igor. FIN — Rating: 9.6',
                'reviews.r6': '"A wonderful, very attentive and responsive host. They welcome you like old friends. A quiet, clean and cozy place."',
                'reviews.a6': 'Elina. USA — Rating: 10',

                'faq.title': 'Frequently Asked <strong>Questions</strong>',
                'faq.q1': 'What are check-in and check-out times?',
                'faq.a1': 'Check-in from 14:00, check-out until 12:00. Early check-in (from 7:00 to 14:00) — 50% of the daily rate. Late check-out — upon request, please let us know in advance.',
                'faq.q2': 'Is breakfast included?',
                'faq.a2': 'Yes, breakfast is included in the room rate.',
                'faq.q3': 'Is prepayment required?',
                'faq.a3': 'No. Payment is made upon check-in. Credit card is not required.',
                'faq.q4': 'What are the cancellation conditions?',
                'faq.a4': 'Cancellation of a booking costs 50% of the accommodation cost.',
                'faq.q5': 'Is there parking?',
                'faq.a5': 'Yes, guarded parking on the premises — free for guests.',
                'faq.q6': 'Do you organize transfers?',
                'faq.a6': 'Yes, we organize transfers from/to the airport and railway station. The service is paid — details are discussed upon booking.',
                'faq.q7': 'Are children allowed?',
                'faq.a7': 'Yes, we are a family hotel and welcome guests with children.',
                'faq.q8': 'How to pay when booking directly?',
                'faq.a8': 'Write to us on WhatsApp or by email — we will agree on a convenient payment method.',

                'location.title': 'Our <strong>location</strong>',

                'contact.title': 'Contact <strong>us</strong>',
                'contact.insta': 'Instagram',
                'contact.email': 'Email',
                'contact.phones': 'Phones',
                'contact.qr': 'Contact us'
            }
        };

        let currentLang = 'ru';

        function updateLanguage(lang) {
            currentLang = lang;
            document.getElementById('langToggle').textContent = lang === 'ru' ? 'En' : 'Ru';

            document.querySelectorAll('[data-key]').forEach(el => {
                const key = el.dataset.key;
                if (translations[lang] && translations[lang][key] !== undefined) {
                    el.innerHTML = translations[lang][key];
                }
            });
        }

        document.getElementById('langToggle').addEventListener('click', function() {
            const nextLang = currentLang === 'ru' ? 'en' : 'ru';
            updateLanguage(nextLang);
        });

        // ============================================================
        // 2. СЛАЙДЕР
        // ============================================================
        const slides = document.querySelectorAll('.slider img');
        let currentSlide = 0;
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4500);

        // ============================================================
        // 3. БУРГЕР
        // ============================================================
        const burger = document.getElementById('burger');
        const navLinksMenu = document.getElementById('navLinks');

        burger.addEventListener('click', () => {
            navLinksMenu.classList.toggle('show');
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksMenu.classList.remove('show');
            });
        });

        // ============================================================
        // 4. АКТИВНАЯ ССЫЛКА
        // ============================================================
        const sections = document.querySelectorAll('section[id]');
        const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');

        window.addEventListener('scroll', () => {
            let currentId = '';
            sections.forEach(section => {
                const top = section.offsetTop - 120;
                if (window.scrollY >= top) {
                    currentId = section.id;
                }
            });
            navLinksAll.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentId) {
                    link.classList.add('active');
                }
            });
        });

        // ============================================================
        // 5. ПЛАВНАЯ ПРОКРУТКА
        // ============================================================
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function(e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // ============================================================
        // 6. ВИДИМОСТЬ СЕКЦИЙ
        // ============================================================
        const allSections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        allSections.forEach(s => observer.observe(s));

        // ============================================================
        // 7. ГАЛЕРЕЯ — МОДАЛЬНОЕ ОКНО
        // ============================================================
        const modal = document.getElementById('galleryModal');
        const modalImg = document.getElementById('modalImage');
        const closeModal = document.getElementById('closeModal');

        document.querySelectorAll('.gallery-grid img').forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = 'flex';
                modalImg.src = img.src;
            });
        });

        closeModal.addEventListener('click', () => { modal.style.display = 'none'; });
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') modal.style.display = 'none';
        });

        // ============================================================
        // 8. FAQ
        // ============================================================
        document.querySelectorAll('.faq-item').forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
                if (!isActive) item.classList.add('active');
            });
        });