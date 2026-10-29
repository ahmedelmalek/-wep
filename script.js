// قائمة الجوال
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

// إغلاق القائمة عند النقر على رابط
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// تمرير سلس
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// إرسال نموذج التواصل
function sendMessage(e) {
    e.preventDefault();
    alert('تم إرسال رسالتك بنجاح! ✅');
    e.target.reset();
}

// تحريك أشرطة المهارات عند التمرير
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.width = entry.target.style.width;
        }
    });
});

document.querySelectorAll('.progress-bar').forEach(bar => observer.observe(bar));
