
document.getElementById('createUser').addEventListener('click', sendDataToserver)

async function sendDataToserver(e) {
    e.preventDefault()
    const name = document.getElementById('InputUser').value
    const email = document.getElementById('InputEmail').value
    const password = document.getElementById('InputPassword').value

    if (!email || !password || !name) {
        alert('Preencha todos os campos!')
        return
    }
    const data ={
        name,
        email,
        password,
    }
    
    await fetch (`https://paranaguatour-api.onrender.com/users`,  {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify(data)
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`)
        }
        return response.json()
    }).then(() => {
        alert('Dados enviados com sucesso: ');
    }).catch((error) => {
        alert('Erro ao enviar os dados: ', error)
    })

    
    location.reload()

    }
    

