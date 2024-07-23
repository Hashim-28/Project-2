function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function closeSidebar(event) {
    var sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('active') && !sidebar.contains(event.target) && event.target.id !== 'menu') {
        sidebar.classList.remove('active');
    }
}

document.getElementById('menu').addEventListener('click', toggleSidebar);
document.addEventListener('click', closeSidebar);
 