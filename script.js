// Hàm để lấy dữ liệu người dùng từ file JSON
async function fetchUsers() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data.users;
}

// Xử lý form đăng nhập
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', async function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const users = await fetchUsers();
        const validUser = users.find(user => user.username === username && user.password === password);

        if (validUser) {
            document.cookie = "loggedIn=true; path=/; max-age=86400";
            window.location.href = "main.html";
        } else {
            alert('Invalid credentials!');
        }
    });
}

// Nút quên mật khẩu
if (document.getElementById('forgotPasswordBtn')) {
    document.getElementById('forgotPasswordBtn').addEventListener('click', function() {
        alert('Liên hệ: 0966598616 để được hỗ trợ.');
    });
}

// Nút đăng ký
if (document.getElementById('registerBtn')) {
    document.getElementById('registerBtn').addEventListener('click', async function(event) {
        event.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;

        const users = await fetchUsers();
        const userExists = users.some(user => user.username === newUsername);

        if (userExists) {
            alert('User already exists!');
        } else {
            alert('User registered successfully!');
            // Ở đây bạn cần thêm logic để lưu trữ user mới vào server hoặc file
            // Ví dụ: gửi dữ liệu đến server để lưu trữ
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
