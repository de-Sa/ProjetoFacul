document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.sidebar ul li a');
    const sections = document.querySelectorAll('.section');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            links.forEach(link => link.classList.remove('selected'));

            link.classList.add('selected');

            const target = document.querySelector(link.getAttribute('href'));
            sections.forEach(section => section.classList.remove('active'));
            target.classList.add('active');
        });
    });

    if (sections.length > 0) {
        sections[0].classList.add('active');
    }
});
