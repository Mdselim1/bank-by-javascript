

document.getElementById('login-submit').addEventListener('click', function () {

    const logInInputEmail = document.getElementById('enter-email');

    const loginValueEmail = logInInputEmail.value;

    const logInInputPassword = document.getElementById('enter-password');

    const loginValuePassword = logInInputPassword.value;

    if (loginValueEmail == 'selimakondo58@gmail.com' && loginValuePassword == '12345') {
        document.location.href = 'bank.html'
    }
    if (loginValueEmail == '') {
        const vul = document.getElementById('vul');
        vul.innerText = 'please enter email'
    }
    if (loginValuePassword == '') {
        const vul = document.getElementById('vul');
        vul.innerText = 'please enter password'
    }
    if (loginValueEmail == '' && loginValuePassword == '') {
        const vul = document.getElementById('vul');
        vul.innerText = 'please enter email & password'
    }
    if (loginValueEmail == '' && loginValuePassword == '') {
        const vul = document.getElementById('vul');
        vul.innerText = 'please enter email & password'
    }


})