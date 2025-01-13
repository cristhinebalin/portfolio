// Menu functionality
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('nav');
const navLinks = document.querySelectorAll('header nav a');
const LogoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');

// Menu toggle
menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-xmark');
};

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
    }
});

// Navigation functionality
const activePage = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    sections.forEach(section => {
        section.classList.remove('active');
    });
};

// Handle nav link clicks
navLinks.forEach((link, idx) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');
            
            // Close mobile menu if open
            navbar.classList.remove('active');
            menuIcon.classList.remove('fa-xmark');
            
            // Show corresponding section
            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 300);
        }
    });
});

// Logo click handler
LogoLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');
        
        setTimeout(() => {
            sections[0].classList.add('active');
        }, 300);
    }
});

// Tab switching functionality
const buttons = document.querySelectorAll('.resume-btn');
const contents = document.querySelectorAll('.resume-details');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        contents.forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        const tabName = button.getAttribute('data-tab');
        document.querySelector(`.resume-details.${tabName}`).classList.add('active');
    });
});

// Tab content mouse move effect
const tabContent = document.querySelector('.tab-content');
if (tabContent) {
    tabContent.addEventListener('mousemove', (e) => {
        const rect = tabContent.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        tabContent.style.setProperty('--x', `${x}%`);
        tabContent.style.setProperty('--y', `${y}%`);
    });
}

// Ensure sections are properly displayed on page load
window.addEventListener('load', () => {
    document.body.style.backgroundColor = 'var(--bg-color)';
    sections[0].classList.add('active');
    navLinks[0].classList.add('active');
});

// Scroll to section functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});