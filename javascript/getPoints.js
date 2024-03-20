export async function getPoints(){
    const response = await fetch (`https://paranaguatour-api.onrender.com/points/2`)
    const data = await response.json()
    return data
}