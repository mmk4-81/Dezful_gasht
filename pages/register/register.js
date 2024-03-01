let fullName = document.getElementById('username');
let Email = document.getElementById('Email');
let phoneNumber = document.getElementById('phonenumber');
let textDangerName = document.getElementById('text-danger-name');
let textDangerPhone = document.getElementById('text-danger-phonenumber');
let textDangerEmail= document.getElementById('text-danger-email');
let textDangerPass= document.getElementById('text-danger-password');
let textDangerConfirm= document.getElementById('text-danger-confirm');
let registerBtn = document.getElementById('register-btn1');
let registerBtnleader = document.getElementById('register-btn2');
let password = document.getElementById("password");
let confirmPassword  = document.getElementById("confirmPassword");
let showPass = document.getElementById('P');
let showConfirmPass = document.getElementById('RP');
let rememberMeCheckbox = document.getElementById("remember_me");


showPass.addEventListener('click',(event)=>{
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
})

showConfirmPass.addEventListener('click',(event)=>{
    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
    } else {
        confirmPassword.type = "password";
    }
})

function setCookie(name, values, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    var jsonValues = JSON.stringify(values);

    document.cookie = name + "=" + jsonValues + expires + "; path=/";
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
}

registerBtn.addEventListener('click', (event) => {
    textDangerName.innerHTML = '';
    textDangerEmail.innerHTML = '';
    textDangerPhone.innerHTML = '';
    textDangerPass.innerHTML = '';
    textDangerConfirm.innerHTML = '';

    let hasError = false;

    if (!/^[آ-یa-zA-Z ]+$/.test(fullName.value)) {
        textDangerName.innerHTML = 'نام فقط می‌تواند شامل حروف و فاصله باشد.';
        hasError = true;
    }

    if (! /^\S+@\S+\.\S+$/.test(Email.value)) {
        textDangerEmail.innerHTML = "آدرس ایمیل معتبر وارد کنید.";
        hasError = true;
    }

    if (!/^09\d{9}$/.test(phoneNumber.value)) {
        textDangerPhone.innerHTML = "شماره تلفن معتبر وارد کنید (شروع با 09 و طول 11 رقم).";
        hasError = true;
    }

    if (password.value.length < 6){
        textDangerPass.innerHTML = "رمز عبور باید حداقل 6 کاراکتر باشد.";
        hasError = true;
    }

    if (confirmPassword.value !== password.value) {
        textDangerConfirm.innerHTML = "تکرار رمز عبور باید با رمز عبور مطابقت داشته باشد.";
        hasError = true;
    }

    if (fullName.value === '') {
        textDangerName.innerHTML = 'نوشتن نام و نام خانوادگی ضروری است.';
        hasError = true;
    }

    if (Email.value === '') {
        textDangerEmail.innerHTML = 'نوشتن ایمیل ضروری است.';
        hasError = true;
    }

    if (phoneNumber.value === '') {
        textDangerPhone.innerHTML = 'نوشتن شماره تلفن ضروری است.';
        hasError = true;
    }

    if (password.value === '') {
        textDangerPass.innerHTML = 'نوشتن  رمز عبور ضروری است.';
        hasError = true;
    }

    if (confirmPassword.value === '') {
        textDangerConfirm.innerHTML = 'نوشتن تکرار رمز عبور  ضروری است.';
        hasError = true;
    }

    if (hasError) {
        event.preventDefault();
    } else {
        if (rememberMeCheckbox.checked) {
            var userInformation = {
                name: fullName.value,
                email: Email.value,
                phoneNumber: phoneNumber.value,
                password: password.value
            };
            setCookie("rememberedUser", userInformation, 30);
        } else {
            deleteCookie("rememberedUser");
        }

        alert('ثبت نام با موفقیت انجام شد.');
    }
});


registerBtnleader.addEventListener('click', (event) => {
    textDangerName.innerHTML = '';
    textDangerEmail.innerHTML = '';
    textDangerPhone.innerHTML = '';
    textDangerPass.innerHTML = '';
    textDangerConfirm.innerHTML = '';

    let hasError = false;

    if (!/^[آ-یa-zA-Z ]+$/.test(fullName.value)) {
        textDangerName.innerHTML = 'نام فقط می‌تواند شامل حروف و فاصله باشد.';
        hasError = true;
    }

    if (! /^\S+@\S+\.\S+$/.test(Email.value)) {
        textDangerEmail.innerHTML = "آدرس ایمیل معتبر وارد کنید.";
        hasError = true;
    }

    if (!/^09\d{9}$/.test(phoneNumber.value)) {
        textDangerPhone.innerHTML = "شماره تلفن معتبر وارد کنید (شروع با 09 و طول 11 رقم).";
        hasError = true;
    }

    if (password.value.length < 6){
        textDangerPass.innerHTML = "رمز عبور باید حداقل 6 کاراکتر باشد.";
        hasError = true;
    }

    if (confirmPassword.value !== password.value) {
        textDangerConfirm.innerHTML = "تکرار رمز عبور باید با رمز عبور مطابقت داشته باشد.";
        hasError = true;
    }

    if (fullName.value === '') {
        textDangerName.innerHTML = 'نوشتن نام و نام خانوادگی ضروری است.';
        hasError = true;
    }

    if (Email.value === '') {
        textDangerEmail.innerHTML = 'نوشتن ایمیل ضروری است.';
        hasError = true;
    }

    if (phoneNumber.value === '') {
        textDangerPhone.innerHTML = 'نوشتن شماره تلفن ضروری است.';
        hasError = true;
    }

    if (password.value === '') {
        textDangerPass.innerHTML = 'نوشتن  رمز عبور ضروری است.';
        hasError = true;
    }

    if (confirmPassword.value === '') {
        textDangerConfirm.innerHTML = 'نوشتن تکرار رمز عبور  ضروری است.';
        hasError = true;
    }

    if (hasError) {
        event.preventDefault();
    } else {
        if (rememberMeCheckbox.checked) {
            var userInformation = {
                name: fullName.value,
                email: Email.value,
                phoneNumber: phoneNumber.value,
                password: password.value
            };
            setCookie("rememberedUser", userInformation, 30);
        } else {
            deleteCookie("rememberedUser");
        }

        alert('ثبت نام با موفقیت انجام شد.');
    }
});


