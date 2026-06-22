// ===== Toast =====
function showToast(message, type = "success") {

    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// ===== Contact Form =====
document.getElementById("sendBtn").addEventListener("click", () => {

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // بررسی خالی بودن فیلدها
    if (!name || !email || !message) {
        showToast("لطفاً همه فیلدها را پر کنید", "error");
        return;
    }

    // اعتبارسنجی ایمیل
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        showToast("ایمیل وارد شده معتبر نیست", "error");
        return;
    }

    // موفقیت
    showToast("پیام شما با موفقیت ارسال شد", "success");

    console.log({
        name,
        email,
        message
    });

    // پاک کردن فرم
    document.getElementById("contactForm").reset();
});