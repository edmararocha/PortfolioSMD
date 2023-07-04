window.addEventListener('DOMContentLoaded', function () {
    var inputElement = document.getElementById('message');
    var countElement = document.getElementById('count');
    var countTextElement = document.getElementById('text-count');

    inputElement.addEventListener('input', function () {
        var inputText = inputElement.value;
        var charCount = inputText.length;
        countElement.textContent = charCount;

        charCount > 450 ? countTextElement.style.color = "#D63D0C" : countTextElement.style.color = "#5A69A4";
    });
});

function validateFields() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var feedbackElement = document.getElementById('feedback');

    if (name.value === "" && email.value === "" && message.value === "") {
        feedbackElement.textContent = 'Por favor, preencha todos os campos!';
        feedbackElement.style.display = "flex";
        return false;
    } else {
        feedbackElement.style.display = "none";
        return true;
    }
}

function validateEmail() {
    var emailInput = document.getElementById('email');
    var email = emailInput.value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}

function sendEmail() {
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject');
    var message = document.getElementById('message').value;

    var emailLink = 'mailto:codesignsmd@gmail.com' +
        '?cc=' + encodeURIComponent(email) +
        '&subject=' + encodeURIComponent(subject.options[subject.value].text) +
        '&body=' + encodeURIComponent(message + '\n\nDe: ' + email);

    window.location.href = emailLink;
}

var form = document.getElementById('form');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    validateFields();
    validateEmail();

    if (validateFields() && validateEmail()) {
        sendEmail();
    }
});