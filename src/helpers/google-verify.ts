import { OAuth2Client } from 'google-auth-library'
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

export async function googleVerify(token = '') {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID
  })
  //payload entrega mucha informacion del usuario de google
  const payload = ticket.getPayload()
  //const { name, picture, email }= payload
  return {
    nombre: payload?.given_name,
    //apellido: payload?.family_name,
    correo: payload?.email,
    imagen: payload?.picture
  }
}
// verify().catch(console.error);
