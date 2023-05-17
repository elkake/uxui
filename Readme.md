# Verificar las variables de entorno

Para la correcta conexion a MOngoDB
colocar el link correcto.

MONGODB_URI contiene el link a mi mongoDB

## MODELO

El modelo de ejemplo solo contiene el dato nombre y correo.

## Scripts

´´´
npm run tsc # transpila el codigo
npm start # inicia el programa
Ctrl + c #finaliza el programa
´´´

EN PROCESO


# Documentación de la API

## Obtener todos los usuarios

Endpoint:

* GET
* https://ncback-production.up.railway.app/api/usuarios

Descripción:

* Este endpoint se utiliza para obtener la lista de todos los usuarios registrados en el sistema.

Parámetros de consulta:

* Ninguno.

Respuesta exitosa:

* Código de estado: 200 OK

Ejemplo de respuesta:

```
{
  "total": 3,
  "usuarios": [
    {
      "id": "1",
      "nombre": "Usuario 1",
      "correo": "usuario1@example.com"
    },
    {
      "id": "2",
      "nombre": "Usuario 2",
      "correo": "usuario2@example.com"
    },
    {
      "id": "3",
      "nombre": "Usuario 3",
      "correo": "usuario3@example.com"
    }
  ]
}
```

## Obtener un usaurio por correo

Endpoint:

* GET
* https://ncback-production.up.railway.app/api/usuarios

Descripción:

* Este endpoint se utiliza para obtener la lista de todos los usuarios registrados en el sistema.

Parámetros de consulta:

- `correo` (string, obligatorio): correo del usuario a buscar.

Respuesta exitosa:

* Código de estado: 200 OK

Ejemplo de respuesta:

```
{
    {
      "id": "1",
      "nombre": "Usuario 1",
      "correo": "usuario1@example.com"
    }
}
```

## Obtener un usuario por ID

Endpoint:

* GET
* https://ncback-production.up.railway.app/api/usuarios/user/:id

Descripción:

* Este endpoint se utiliza para obtener un usuario específico por su ID.

Parámetros de ruta:

- `id` (string, obligatorio): ID del usuario a buscar.

Respuesta exitosa:

* Código de estado: 200 OK

Ejemplo de respuesta:

```
{
  "id": "1",
  "nombre": "Usuario 1",
  "correo": "usuario1@example.com"
}
```

## Crear un nuevo usuario

Endpoint:

* POST
* https://ncback-production.up.railway.app/api/usuarios

Descripción:

* Este endpoint se utiliza para crear un nuevo usuario.

Parámetros de cuerpo de la solicitud:

- `nombre` (string, obligatorio): Nombre del usuario.
- `correo` (string, obligatorio): Correo electrónico del usuario.
- `contrasena` (string, obligatorio): Contraseña del usuario.

Respuesta exitosa:

* Código de estado: 201 Created

Ejemplo de respuesta:

```
{
  "mensaje": "El usuario ha sido creado correctamente"
}
```

## Actualizar un usuario

Endpoint:

* PUT
* https://ncback-production.up.railway.app/api/usuarios/:id

Descripción:

* Este endpoint se utiliza para actualizar los datos de un usuario existente.

Parámetros de ruta:

- `id` (string, obligatorio): ID del usuario a actualizar.

Parámetros de cuerpo de la solicitud:

- `nombre` (string, opcional): Nuevo nombre del usuario.
- `correo` (string, opcional): Nuevo correo electrónico del usuario.
- `contrasena` (string, opcional): Nueva contraseña del usuario.

Respuesta exitosa:

* Código de estado: 200 OK

Ejemplo de respuesta:

```
{
  "id": "1",
  "nombre": "Nuevo Nombre",
  "correo": "nuevo.correo@example.com"
}
```

## Eliminar un usuario

Endpoint:

* DELETE
* https://ncback-production.up.railway.app/api/usuarios/:id

Descripción:

* Este endpoint se utiliza para eliminar un usuario.

Parámetros de ruta:

- `id` (string, obligatorio): ID del usuario a eliminar.

Respuesta exitosa:

* Código de estado: 200 OK

Ejemplo de respuesta:

```
{
  "mensaje": "Usuario eliminado exitosamente"
}
```
 