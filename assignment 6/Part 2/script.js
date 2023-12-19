const signatureCanvas = document.getElementById('signatureCanvas');
const signaturePad = new SignaturePad(signatureCanvas);

function clearSignature() {
    signaturePad.clear();
}

let currentStep = 1;
const form = document.getElementById('form');

function showStep(step) {
    const listItems = document.querySelectorAll('li');
    listItems.forEach(item => item.classList.remove('active-step'));

    document.querySelector(`li:nth-child(${step})`).classList.add('active-step');

    document.getElementById(`step${step}`).style.display = 'block';
}

function hideStep(step) {
    document.getElementById(`step${step}`).style.display = 'none';
}

function nextStep(step) {
    if (validateStep(step)) {
        hideStep(step);
        showStep(step + 1);
        currentStep = step + 1;
    }
}

function prevStep(step) {
    hideStep(step);
    showStep(step - 1);
    currentStep = step - 1;
}

function validateStep(step) {
    switch (step) {
        case 1:
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
                alert('All fields are required');
                return false;
            }
            break;
        case 2:
            const address = document.getElementById('address').value;
            const city = document.getElementById('city').value;
            const state = document.getElementById('state').value;
            const zip = document.getElementById('zip').value;

            if (address.trim() === '' || city.trim() === '' || state.trim() === '' || zip.trim() === '') {
                alert('All address fields are required');
                return false;
            }
            break;
        case 3:
            const emailPreference = document.getElementById('emailPreference');
            const phonePreference = document.getElementById('phonePreference');
            const mailPreference = document.getElementById('mailPreference');
            const updatesAndPerks = document.getElementById('updatesAndPerks');

            if (!emailPreference.checked && !phonePreference.checked && !mailPreference.checked) {
                alert('Please select at least one communication preference.');
                return false;
            }
            break;
        case 4:
            if (signaturePad.isEmpty()) {
                alert('Please provide a signature');
                return false;
            }
            break;
    }
    return true;
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateStep(currentStep)) {
        return;
    }

    if (currentStep === 4) {
        alert('Form submitted successfully');
    }
});

showStep(1);
