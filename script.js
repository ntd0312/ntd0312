// Xử lý form đăng nhập
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'test' && password === 'test') {
            document.cookie = "loggedIn=true; path=/; max-age=86400";
            window.location.href = "main.html";
        } else {
            alert('Invalid credentials!');
        }
    });
}

// Kiểm tra trạng thái đăng nhập
function checkLogin() {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const loggedIn = cookies.find(cookie => cookie.startsWith('loggedIn='));

    if (!loggedIn) {
        window.location.href = "login.html";
    }
}

// Kiểm tra trạng thái khi tải các trang
if (!window.location.pathname.endsWith('login.html')) {
    checkLogin();
}
