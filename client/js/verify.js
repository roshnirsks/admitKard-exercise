"use strict";
const apiRoot = 'http://localhost:3000/api/admitKard/userLogin';

const form = document.getElementsByTagName('form')[0];

const phoneEl = document.getElementById('otp');
const phoneError = document.querySelector('#otp + span.error');

phoneEl.addEventListener('input', function(event) {
    if (phoneEl.validity.valid) {
        phoneError.innerHTML = '';
        phoneError.className = 'error';
    } else {
        showError();
    }
});

function showError() {
    if (phoneEl.validity.valueMissing) {
        phoneError.textContent = 'You need to enter a phone number.';
    } else if (phoneEl.validity.typeMismatch) {
        phoneError.textContent = 'Entered value needs to be a phone number.';
    } else if (phoneEl.validity.tooShort) {
        phoneError.textContent = `Phone number should be at least ${phoneEl.minLength} characters; you entered ${phoneEl.value.length}.`;
    }

    phoneError.className = 'error active';
}

form.addEventListener('submit', function(event) {
    if (!phoneEl.validity.valid) {
        showError();
        event.preventDefault();
    } else {
        let phone = localStorage.getItem('phone');
        let otp = document.getElementById('otp').value;
        const data = { phone: phone, otp: otp };
        fetch(`${apiRoot}/verifyOtp`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                localStorage.setItem('verified', data.verified);
                document.getElementById("otp-error").innerHTML = data.message;
                if (data.verified) {
                    window.location = "./welcome.html";
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
});