// ===== Toast =====
function showToast(message, type = "success") {
    const toast = document.getElementById("toast");

    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}


// ===== Tabs =====
const tabs = document.querySelectorAll(".tab");
const forms = document.querySelectorAll(".form-section");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        forms.forEach(f => f.style.display = "none");

        const target = document.getElementById(tab.dataset.tab + "-form");
        target.style.display = "block";
    });
});

document.getElementById("login-form").style.display = "block";


// ===== LOGIN =====
document.getElementById("loginBtn").addEventListener("click", () => {

    const email = document.getElementById("login-email").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (email === "" || password === "") {
        showToast("لطفاً همه فیلدها را پر کنید", "error");
        return;
    }

    if (password.length < 6) {
        showToast("رمز عبور باید حداقل 6 کاراکتر باشد", "error");
        return;
    }

    showToast("ورود موفق بود", "success");

    console.log({ email, password });
});


// ===== SIGNUP =====
document.getElementById("signupBtn").addEventListener("click", () => {

    const email = document.getElementById("signup-email").value.trim();
    const fullname = document.getElementById("fullname").value.trim();
    const password = document.getElementById("signup-password").value.trim();
    const repeat = document.getElementById("repeat-password").value.trim();

    if (!email || !fullname || !password || !repeat) {
        showToast("لطفاً همه فیلدها را پر کنید", "error");
        return;
    }

    if (password.length < 6) {
        showToast("رمز عبور باید حداقل 6 کاراکتر باشد", "error");
        return;
    }

    if (password !== repeat) {
        showToast("رمزها یکسان نیستند", "error");
        return;
    }

    showToast("ثبت‌نام با موفقیت انجام شد", "success");

    console.log({ email, fullname, password });
});