document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();
        if (data.success) {
            alert('Login realizado com sucesso!');
    
        } else {
            document.getElementById('errorMessage').textContent = 'Usuário ou senha inválidos!';
        }
    } catch (error) {
        document.getElementById('errorMessage').textContent = 'Erro ao se conectar ao servidor.';
        console.error(error);
    }
});
