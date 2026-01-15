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