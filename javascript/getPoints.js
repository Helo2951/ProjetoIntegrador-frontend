export async function getPoints(){
    const response = await fetch (`https://paranaguatour-api.onrender.com/points/2`)
    const data = await response.json()
    return data
}
export async function getComments(){
    const response = await fetch (`https://paranaguatour-api.onrender.com/comments/2`)
    const data = await response.json()
    return data
}
export async function getUsers(user_id){
    const response = await fetch (`https://paranaguatour-api.onrender.com/users/${user_id}`)
    const data = await response.json()
    return data
}