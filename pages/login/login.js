let Email = document.getElementById('Email');
let textDangerEmail= document.getElementById('text-danger-email');
let password = document.getElementById("password");
let rememberMeCheckbox = document.getElementById("remember_me");
let showPass = document.getElementById('P');
let textDangerPass= document.getElementById('text-danger-password');
let loginBtn = document.getElementById('login');

showPass.addEventListener('click',(event)=>{
    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
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

loginBtn.addEventListener('click', (event) => {
    textDangerEmail.innerHTML = '';
    textDangerPass.innerHTML = '';

    let hasError = false;


    if (! /^\S+@\S+\.\S+$/.test(Email.value)) {
        textDangerEmail.innerHTML = "آدرس ایمیل معتبر وارد کنید.";
        hasError = true;
    }

    if (password.value.length < 6){
        textDangerPass.innerHTML = "رمز عبور باید حداقل 6 کاراکتر باشد.";
        hasError = true;
    }

    

    if (Email.value === '') {
        textDangerEmail.innerHTML = 'نوشتن ایمیل ضروری است.';
        hasError = true;
    }

  

    if (password.value === '') {
        textDangerPass.innerHTML = 'نوشتن  رمز عبور ضروری است.';
        hasError = true;
    }

   

    if (hasError) {
        event.preventDefault();
    } else {
        if (rememberMeCheckbox.checked) {
            var userInformation = {
                email: Email.value,
                password: password.value
            };
            setCookie("rememberedUser", userInformation, 30);
        } else {
            deleteCookie("rememberedUser");
        }

        alert(' ورود با موفقیت انجام شد.');
    }
});