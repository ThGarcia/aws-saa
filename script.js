document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.title');
    titles.forEach(title => {
        title.addEventListener('click', () => {
            const table = title.nextElementSibling;
            if (table.style.display === 'none' || table.style.display === '') {
                table.style.display = 'table';
            } else {
                table.style.display = 'none';
            }
        });
    });
});
