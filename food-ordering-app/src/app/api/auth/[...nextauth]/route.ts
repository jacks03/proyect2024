import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
    providers: [
        CredentialsProvider({
            // El nombre que se mostrará en el formulario de inicio de sesión (por ejemplo, 'Iniciar sesión con...')
            name: 'Credentials',
            // Las credenciales se utilizan para generar un formulario adecuado en la página de inicio de sesión.
            // Puede especificar los campos que espera que se envíen.
            // p.ej. dominio, nombre de usuario, contraseña, token 2FA, etc.
            // Puedes pasar cualquier atributo HTML a la etiqueta <input> a través del objeto.
            credentials: {
              username: { label: "Email", type: "email", placeholder: "test@gmail.com" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              // Debes proporcionar aquí tu propia lógica que tome las credenciales
              // enviado y devuelve un objeto que representa un usuario o un valor
              // eso es falso/nulo si las credenciales no son válidas.
              // p.ej. return {id: 1, nombre: 'J Smith', correo electrónico: 'jsmith@example.com' }
              // También puedes usar el objeto `req` para obtener parámetros adicionales
              // (es decir, la dirección IP solicitada)
              const res = await fetch("/your/endpoint", {
                method: 'POST',
                body: JSON.stringify(credentials),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json()
        
              // Si no hay error y tenemos datos del usuario, lo devolvemos
              if (res.ok && user) {
                return user
              }
              // Devuelve nulo si no se pudieron recuperar los datos del usuario
              return null
            }
          })
    ]
});

export { handler as GET, handler as POST }