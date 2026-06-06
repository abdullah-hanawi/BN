document.addEventListener("DOMContentLoaded", function() {
    
    // 1. تفعيل القائمة المستجيبة للهواتف المحمولة (Mobile Menu Toggle)
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    mobileMenu.addEventListener("click", function() {
        navLinks.classList.toggle("active");
        // تغيير شكل الأيقونة عند الفتح والإغلاق
        const icon = mobileMenu.querySelector("i");
        if(navLinks.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });

    // 2. تظليل الرابط النشط عند النقر والتنقل السلس
    const links = document.querySelectorAll(".nav-links a");
    links.forEach(link => {
        link.addEventListener("click", function() {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
            
            // إغلاق القائمة التلقائي في وضع الموبايل بعد الضغط على الرابط
            if(navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
                mobileMenu.querySelector("i").classList.remove("fa-xmark");
                mobileMenu.querySelector("i").classList.add("fa-bars");
            }
        });
    });

    // 3. معالجة نموذج إرسال البيانات والتحقق منه تفاعلياً (Contact Form)
    const form = document.getElementById("techForm");
    const formResponse = document.getElementById("form-response");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // منع الصفحة من إعادة التحميل الافتراضية

        // جلب قيم الحقول المتوفرة
        const clientName = document.getElementById("name").value.trim();
        const clientEmail = document.getElementById("email").value.trim();
        const selectedService = document.getElementById("service-type").options[document.getElementById("service-type").selectedIndex].text;

        // محاكاة إرسال البيانات بنجاح إلى النظام الداخلي للمؤسسة
        formResponse.textContent = `شكرًا لك  ${clientName}. تم استلام طلبك (${selectedService}) بنجاح. سيقوم فريق Live Solutions بالتواصل معك عبر البريد الإلكتروني: ${clientEmail} خلال 24 ساعة.`;
        
        formResponse.classList.remove("hidden");
        formResponse.classList.add("success");

        // إعادة تعيين الحقول بعد الإرسال بنجاح
        form.reset();

        // إخفاء رسالة النجاح تلقائياً بعد 8 ثوانٍ
        setTimeout(function() {
            formResponse.classList.add("hidden");
            formResponse.classList.remove("success");
        }, 8000);
    });
});