// جاوااسکریپت برای تعاملات بیشتر

document.addEventListener('DOMContentLoaded', function() {
    // انیمیشن ورود کارت‌ها
    const cards = document.querySelectorAll('.post-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        }, index * 100);
    });

    // تاکید روی فرم‌ها
    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });

    // نمایش پیام موفقیت با انیمیشن
    const messages = document.querySelectorAll('[role="alert"]');
    messages.forEach((msg, index) => {
        setTimeout(() => {
            msg.style.transition = 'all 0.5s ease-out';
            msg.style.opacity = '1';
            msg.style.transform = 'translateX(0)';
        }, index * 200 + 100);
    });

    console.log('🚀 وبلاگ با موفقیت بارگذاری شد!');
});

// تابع برای تایید حذف (در آینده)
function confirmDelete(message = 'آیا از حذف این مورد اطمینان دارید؟') {
    return confirm(message);
}