function submitForm() {
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

   
    if (username === '' || password === '') {
        alert('Please fill in all fields.');
        return;
    }

    alert(`Username: ${username}\nPassword: ${password}`);
}