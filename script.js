document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typewriter');
    const phrases = ["Digital Identity.", "3D Artworks.", "Modern Web.", "Visual Impact."];
    let idx = 0, charIdx = 0, deleting = false;

    function type() {
        const current = phrases[idx];
        textElement.textContent = deleting ? current.substring(0, charIdx - 1) : current.substring(0, charIdx + 1);
        charIdx = deleting ? charIdx - 1 : charIdx + 1;
        let speed = deleting ? 50 : 150;
        if (!deleting && charIdx === current.length) { deleting = true; speed = 2000; }
        else if (deleting && charIdx === 0) { deleting = false; idx = (idx + 1) % phrases.length; speed = 500; }
        setTimeout(type, speed);
    }
    type();
});

// faq
function toggleFaq(element) {
    const parent = element.parentElement;
    
    // Tutup FAQ lain yang sedang terbuka (Optional)
    const allItems = document.querySelectorAll('.faq-item');
    allItems.forEach(item => {
        if (item !== parent) {
            item.classList.remove('active');
        }
    });

    // Toggle class active pada yang diklik
    parent.classList.toggle('active');
}


function toggleFaq(element) {
    // Ambil elemen induk (faq-item)
    const faqItem = element.parentElement;

    // Optional: Tutup FAQ lain jika ada yang terbuka
    document.querySelectorAll('.faq-item').forEach(item => {
        if (item !== faqItem) {
            item.classList.remove('active');
        }
    });

    // Toggle class active pada item yang diklik
    faqItem.classList.toggle('active');
}

// 1. Animasi Typewriter (Sudah ada, pastikan tetap ada)
// ... kode typewriter kamu ...

// 2. Fungsi Reveal Animation saat Scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// 3. Auto Highlight Menu Navbar saat di-scroll
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("href").includes(current)) {
            li.classList.add("active");
        }
    });
});