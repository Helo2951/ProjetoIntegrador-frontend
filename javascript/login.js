document.getElementById('accessAccount').addEventListener('click', login)
async function login(e){
    e.preventDefault()

    const email = document.getElementById('InputUser').value
    const password = document.getElementById('InputPassword').value

    await fetch(`https://paranaguatour-api.onrender.com/session`, {
        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`)
        }
        return response.json()
    }).then(() => {
        alert('Dados enviados com sucesso: ');
    }).catch((error) => {
        alert('Erro ao enviar os dados: ', error)
    })
    location.href = "../index.html"

    
}
