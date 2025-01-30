const socialLinks = document.querySelectorAll('a');

socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(link.href, '_blank');
    });
});

const tarea = document.querySelectorAll("#trabajos")
console.log(tarea)

tarea.forEach(work => {
    work.addEventListener('mouseover', (e) => {
        work.style.filter = "grayscale(100%)";
    });
    work.addEventListener('mouseout', (e) => {
        work.style.filter = "grayscale(0%)";
    });
});