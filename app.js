document.addEventListener('DOMContentLoaded', () => {

    // 1. Sticky Navigation implementation
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // 3. Scroll Reveal Animation Logic
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 100; // Trigger distance from bottom

        revealElements.forEach(el => {
            const revealTop = el.getBoundingClientRect().top;
            if (revealTop < windowHeight - revealPoint) {
                el.classList.add('visible');
            }
        });
    };

    // Initial check
    revealOnScroll();
    
    // Check on scroll
    window.addEventListener('scroll', revealOnScroll);

    // 4. Populate Signature Carousel Dynamically
    const carouselData = [
        {
            title: "Royal Mutton Biryani",
            desc: "The flagship dish, slow cooked with 22 secret spices.",
            img: "images/hero.png" // using hero placeholder
        },
        {
            title: "Tandoori Chicken Tikka",
            desc: "Charcoal grilled, perfectly spiced appetizers.",
            img: "images/about.png" // using about placeholder
        },
        {
            title: "Saffron Phirni",
            desc: "A classical sweet pudding infused with premium saffron.",
            img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" // generic high quality safe placeholder
        }
    ];

    const carouselContainer = document.getElementById('signature-carousel');

    if(carouselContainer) {
        carouselData.forEach(item => {
            const card = document.createElement('div');
            card.className = 'carousel-card';
            card.innerHTML = `
                <img src="${item.img}" alt="${item.title}" class="carousel-card-img" onerror="this.src='images/about.png'">
                <div class="carousel-card-content">
                    <h4>${item.title}</h4>
                    <p style="margin:0; font-size: 0.9rem;">${item.desc}</p>
                </div>
            `;
            carouselContainer.appendChild(card);
        });
    }

    // 5. Order Modal Logic
    const orderBtns = document.querySelectorAll('.order-btn');
    const orderModal = document.getElementById('orderModal');
    const closeModalBtn = document.getElementById('closeModal');

    const openModal = () => {
        orderModal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    };

    const closeModal = () => {
        orderModal.classList.remove('active');
        document.body.style.overflow = ''; // Restore background scrolling
    };

    orderBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Close on overlay click
    if (orderModal) {
        orderModal.addEventListener('click', (e) => {
            if (e.target === orderModal) {
                closeModal();
            }
        });
    }
});
