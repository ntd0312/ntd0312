### **5. Tạo file `script.js`**
Đây là file JavaScript để xử lý logic đăng nhập và kiểm tra cookie.

#### **script.js**
```javascript
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'test' && password === '1234') {
        document.cookie = "loggedIn=true; path=/; max-age=86400";
        window.location.href = "main.html";
    } else {
        alert('Invalid credentials!');
    }
});

function checkLogin() {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const loggedIn = cookies.find(cookie => cookie.startsWith('loggedIn='));

    if (!loggedIn) {
        window.location.href = "login.html";
    }
}

if (window.location.pathname.endsWith('main.html')) {
    checkLogin();
}
