document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        let valid = true;

        // Reset pesan error jika ada
        clearErrors();

        // Validasi Username (misalnya tidak boleh kosong)
        if (usernameInput.value.trim() === '') {
            showError(usernameInput, 'Username tidak boleh kosong');
            valid = false;
        }

        // Validasi Password (di sini bisa ditambahkan validasi lain jika diperlukan)
        if (passwordInput.value.trim() === '') {
            showError(passwordInput, 'Password tidak boleh kosong');
            valid = false;
        }

        // Mencegah form dari pengiriman jika ada error
        if (!valid) {
            event.preventDefault();
        }
    });

    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error';
        error.innerText = message;
        input.parentNode.insertBefore(error, input.nextSibling);
    }

    function clearErrors() {
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.remove());
    }
});
