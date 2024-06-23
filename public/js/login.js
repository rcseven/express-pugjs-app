/* eslint-disable no-undef */
const login = async (email, password) => {
    try {
        const res = await axios.post(
            'http://localhost:3000/api/v1/users/login',
            {
                email,
                password
            }
        );
    } catch (error) {
        console.error('Login failed:', error.response.data); // Log the error response data
    }
};

const form = document.querySelector('.form');
if (form)
    form.addEventListener('submit', e => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        login(email, password);
    });
