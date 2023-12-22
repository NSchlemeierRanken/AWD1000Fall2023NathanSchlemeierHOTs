function validateForm(event) {
    event.preventDefault();

    document.getElementById('errorBox').style.display = 'none';
    document.getElementById('errorBox').innerHTML = '';

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const state = document.getElementById('state').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const rps = document.querySelectorAll('input[name="rps"]:checked');

    if (!name || !email || !phone || !state || !gender || rps.length === 0) {
        document.getElementById('errorBox').style.display = 'block';
        document.getElementById('errorBox').innerHTML = 'All fields are required.';
        return;
    }

    window.location.href = 'thankyou.html'
}

function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('state').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    
    const rps = document.querySelectorAll('input[name="rps"]:checked');
    rps.forEach(rps => {
        rps.checked = false;
    });

    document.getElementById('errorBox').style.display = 'none';
    document.getElementById('errorBox').innerHTML = '';
}