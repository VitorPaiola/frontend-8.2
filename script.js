document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
        1. Dados e Tradução
        ========================================== */
    const dishes = [
        {
            id: 1,
            name: { pt: 'Sushi Sashimi Combinado', en: 'Sushi Sashimi Combo' },
            description: { pt: 'Uma seleção fresca e variada de sushi e sashimi, incluindo salmão, atum e peixe branco.', en: 'A fresh and varied selection of sushi and sashimi, including salmon, tuna, and white fish.' },
            ingredients: { pt: 'Arroz de sushi, salmão, atum, peixe branco, wasabi, gengibre em conserva.', en: 'Sushi rice, salmon, tuna, white fish, wasabi, pickled ginger.' },
            price: 'R$ 89,00',
            image: './images/sushi-sashimi.png',
            isSpecial: true,
            category: 'sushi'
        },
        {
            id: 2,
            name: { pt: 'Tempura de Camarão', en: 'Shrimp Tempura' },
            description: { pt: 'Camarões suculentos empanados e fritos, servidos com molho tempura tradicional.', en: 'Juicy shrimp, battered and fried, served with traditional tempura sauce.' },
            ingredients: { pt: 'Camarão, farinha de trigo, ovo, óleo vegetal, molho tempura.', en: 'Shrimp, wheat flour, egg, vegetable oil, tempura sauce.' },
            price: 'R$ 55,00',
            image: './images/tempura.png',
            isSpecial: true,
            category: 'entradas'
        },
        {
            id: 3,
            name: { pt: 'Ramen Tonkotsu', en: 'Tonkotsu Ramen' },
            description: { pt: 'Clássico ramen com caldo rico e cremoso de osso de porco, macarrão, chashu e ovo marinado.', en: 'Classic ramen with a rich and creamy pork bone broth, noodles, chashu, and a marinated egg.' },
            ingredients: { pt: 'Macarrão de ramen, caldo de osso de porco, chashu (carne de porco), ovo marinado, brotos de bambu, cebolinha.', en: 'Ramen noodles, pork bone broth, chashu (pork belly), marinated egg, bamboo shoots, scallions.' },
            price: 'R$ 48,00',
            image: './images/ramen.png',
            isSpecial: true,
            category: 'pratos quentes'
        },
        {
            id: 4,
            name: { pt: 'Gyoza de Porco', en: 'Pork Gyoza' },
            description: { pt: 'Pastéis de massa fina recheados com carne de porco e legumes, cozidos no vapor e selados na frigideira.', en: 'Thin-skinned dumplings filled with pork and vegetables, steamed and pan-seared.' },
            ingredients: { pt: 'Massa de gyoza, carne de porco moída, repolho, alho, gengibre.', en: 'Gyoza wrapper, ground pork, cabbage, garlic, ginger.' },
            price: 'R$ 32,00',
            image: './images/gyoza.png',
            isSpecial: true,
            category: 'entradas'
        },
        {
            id: 5,
            name: { pt: 'Udon de Carne', en: 'Beef Udon' },
            description: { pt: 'Macarrão udon grosso e mastigável em um caldo saboroso com fatias de carne e cebolinha.', en: 'Thick, chewy udon noodles in a flavorful broth with slices of beef and scallions.' },
            ingredients: { pt: 'Macarrão udon, caldo dashi, carne fatiada, cebolinha.', en: 'Udon noodles, dashi broth, sliced beef, scallions.' },
            price: 'R$ 45,00',
            image: './images/udon.png',
            isSpecial: true,
            category: 'pratos quentes'
        },
        {
            id: 6,
            name: { pt: 'Mochi de Chá Verde', en: 'Green Tea Mochi' },
            description: { pt: 'Bolinhos de arroz macios recheados com sorvete de chá verde.', en: 'Soft rice cakes filled with green tea ice cream.' },
            ingredients: { pt: 'Massa de arroz (mochigome), sorvete de chá verde (matcha).', en: 'Rice cake dough (mochigome), green tea (matcha) ice cream.' },
            price: 'R$ 25,00',
            image: './images/mochi.png',
            isSpecial: true,
            category: 'sobremesas'
        }
    ];

    const translations = {
        'pt': {
            'menu': 'Cardápio',
            'specials': 'Especiais',
            'contact': 'Contato',
            'slogan': 'A Essência do Japão em Cada Sabor',
            'heroSubtitle': 'Uma jornada gastronômica autêntica e inesquecível.',
            'exploreMenu': 'Explorar o Cardápio',
            'ourMenu': 'Nosso Cardápio',
            'houseSpecials': 'Especiais da Casa',
            'makeReservation': 'Faça sua Reserva',
            'name': 'Nome:',
            'email': 'E-mail:',
            'message': 'Mensagem:',
            'send': 'Enviar',
            'footerText': '&copy; 2025 Sakura. Todos os direitos reservados.',
            'nameRequired': 'Por favor, insira seu nome.',
            'emailRequired': 'Por favor, insira seu e-mail.',
            'emailInvalid': 'Por favor, insira um e-mail válido.',
            'messageRequired': 'Por favor, insira sua mensagem.'
        },
        'en': {
            'menu': 'Menu',
            'specials': 'Specials',
            'contact': 'Contact',
            'slogan': 'The Essence of Japan in Every Flavor',
            'heroSubtitle': 'An authentic and unforgettable gastronomic journey.',
            'exploreMenu': 'Explore Menu',
            'ourMenu': 'Our Menu',
            'houseSpecials': 'House Specials',
            'makeReservation': 'Make a Reservation',
            'name': 'Name:',
            'email': 'E-mail:',
            'message': 'Message:',
            'send': 'Send',
            'footerText': '&copy; 2025 Sakura. All rights reserved.',
            'nameRequired': 'Please enter your name.',
            'emailRequired': 'Please enter your email.',
            'emailInvalid': 'Please enter a valid email.',
            'messageRequired': 'Please enter your message.'
        }
    };


    /* ==========================================
        2. Lógica do Carregamento e Eventos
        ========================================== */
    const menuGrid = document.querySelector('.menu-grid');
    const modal = document.getElementById('dish-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalIngredients = document.getElementById('modal-ingredients');
    const closeBtn = document.querySelector('.close-btn');
    const themeToggle = document.getElementById('theme-toggle');
    const sunIcon = document.querySelector('.sun');
    const moonIcon = document.querySelector('.moon');
    const languageToggle = document.getElementById('language-toggle');
    const carouselItems = document.getElementById('carousel-items');
    const prevBtn = document.querySelector('.carousel-btn.prev-btn');
    const nextBtn = document.querySelector('.carousel-btn.next-btn');
    const scrollToTopBtn = document.getElementById('scroll-to-top-btn');
    const toast = document.getElementById('toast-notification');
    
    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const logoLink = document.querySelector('.logo a');

    let currentLanguage = 'pt';
    let currentIndex = 0;

    const loadDishes = (lang) => {
        menuGrid.innerHTML = '';
        dishes.forEach(dish => {
            const dishCard = document.createElement('div');
            dishCard.className = 'menu-item';
            dishCard.innerHTML = `
                <img src="${dish.image}" alt="${dish.name[lang]}" class="menu-item-image">
                <div class="menu-item-content">
                    <h3>${dish.name[lang]}</h3>
                    <p class="menu-item-price">${dish.price}</p>
                </div>
            `;
            dishCard.addEventListener('click', () => openModal(dish));
            menuGrid.appendChild(dishCard);
        });
    };

    const loadSpecials = (lang) => {
        carouselItems.innerHTML = '';
        const specialDishes = dishes.filter(dish => dish.isSpecial);
        specialDishes.forEach(dish => {
            const specialItem = document.createElement('div');
            specialItem.className = 'carousel-item';
            specialItem.innerHTML = `<img src="${dish.image}" alt="${dish.name[lang]}" data-dish-id="${dish.id}">`;
            carouselItems.appendChild(specialItem);
        });

        updateCarousel();
    };

    const openModal = (dish) => {
        modalImage.src = dish.image;
        modalTitle.textContent = dish.name[currentLanguage];
        modalDescription.textContent = dish.description[currentLanguage];
        modalIngredients.textContent = dish.ingredients[currentLanguage];
        modal.classList.add('visible');
    };

    const closeModal = () => {
        modal.classList.remove('visible');
    };

    const showToast = (message) => {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    };

    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });


    /* ==========================================
        3. Funções e Eventos de Interação
        ========================================== */

    // Alternar tema claro/escuro
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
        sunIcon.classList.toggle('hidden', isDark);
        moonIcon.classList.toggle('hidden', !isDark);
    });

    // Alternar idioma
    const translatePage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });
    };

    languageToggle.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
        languageToggle.textContent = currentLanguage.toUpperCase();
        localStorage.setItem('language', currentLanguage);
        translatePage(currentLanguage);
        loadDishes(currentLanguage);
        loadSpecials(currentLanguage);
    });

    // Carrossel
    const updateCarousel = () => {
        const totalItems = carouselItems.children.length;
        if (totalItems === 0) {
            prevBtn.classList.add('hidden');
            nextBtn.classList.add('hidden');
            return;
        }

        const itemWidth = carouselItems.children[0].offsetWidth; 
        let itemsPerView;

        if (window.innerWidth <= 768) {
            itemsPerView = 1;
        } else if (window.innerWidth <= 1024) {
            itemsPerView = 2;
        } else {
            itemsPerView = 3;
        }
        
        const maxIndex = Math.max(0, totalItems - itemsPerView);
        
        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }
        if (currentIndex < 0) {
            currentIndex = 0;
        }
        
        carouselItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        
        prevBtn.classList.toggle('hidden', currentIndex === 0);
        nextBtn.classList.toggle('hidden', currentIndex >= maxIndex);
    };

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        const totalItems = carouselItems.children.length;
        let itemsPerView;
        if (window.innerWidth <= 768) {
            itemsPerView = 1;
        } else if (window.innerWidth <= 1024) {
            itemsPerView = 2;
        } else {
            itemsPerView = 3;
        }
        const maxIndex = Math.max(0, totalItems - itemsPerView);
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    window.addEventListener('resize', () => {
        currentIndex = 0;
        updateCarousel();
    });


    // Botão de scroll ao topo
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Logo scroll ao topo
    logoLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    /* ==========================================
        4. Lógica do Formulário
        ========================================== */
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isValid = true;
        const nameValue = nameInput.value.trim();
        const emailValue = emailInput.value.trim();
        const messageValue = messageInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validação do nome
        if (nameValue === '') {
            nameError.textContent = translations[currentLanguage].nameRequired;
            nameError.style.display = 'block';
            isValid = false;
        } else {
            nameError.style.display = 'none';
        }

        // Validação do e-mail
        if (emailValue === '') {
            emailError.textContent = translations[currentLanguage].emailRequired;
            emailError.style.display = 'block';
            isValid = false;
        } else if (!emailRegex.test(emailValue)) {
            emailError.textContent = translations[currentLanguage].emailInvalid;
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.style.display = 'none';
        }

        // Validação da mensagem
        if (messageValue === '') {
            messageError.textContent = translations[currentLanguage].messageRequired;
            messageError.style.display = 'block';
            isValid = false;
        } else {
            messageError.style.display = 'none';
        }

        if (isValid) {
            showToast('Formulário enviado com sucesso!');
            contactForm.reset();
        }
    });

    // Inicialização da página
    const savedTheme = localStorage.getItem('theme');
    const savedLang = localStorage.getItem('language');

    // Inicialização do Tema
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
        sunIcon.classList.toggle('hidden', savedTheme === 'light');
        moonIcon.classList.toggle('hidden', savedTheme === 'dark');
    }

    // Inicialização do Idioma
    if (savedLang) {
        currentLanguage = savedLang;
        languageToggle.textContent = currentLanguage.toUpperCase();
    }
    
    loadDishes(currentLanguage);
    loadSpecials(currentLanguage);
    translatePage(currentLanguage);

    // Event listener para os links do carrossel
    carouselItems.addEventListener('click', (event) => {
        const img = event.target.closest('img');
        if (img) {
            const dishId = img.getAttribute('data-dish-id');
            const dish = dishes.find(d => d.id == dishId);
            if (dish) {
                openModal(dish);
            }
        }
    });
});