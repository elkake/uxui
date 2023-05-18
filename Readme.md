# API de Usuarios

Esta API permite realizar operaciones relacionadas con usuarios, como obtener usuarios, crear usuarios, actualizar usuarios y eliminar usuarios.

Ruta de la api > https://ncback-production.up.railway.app



## Obtener todos los usuarios

Obtiene la lista de todos los usuarios registrados en el sistema.

-   Método: GET
-   Ruta: `/api/usuarios/`

#### Parámetros de consulta

Ninguno.

#### Respuesta exitosa

-   Código de estado: 200 OK
-   Tipo de contenido: Json

### Ejemplo de respuesta:
```json
[
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
```

### Respuesta no exitosa
- Código de estado: 400
- Tipo de contenido: Json

### Ejemplo de respuesta no exitosa
```json
{
	"mensaje" : "Usuario no encontrado"
}
```

## Obtener un usuario por correo

Obtiene un usuario específico por su correo electrónico.

-   Método: GET
-   Ruta: `/api/usuarios/`

#### Parámetros de consulta

-   `correo` (string, opcional): Correo electrónico del usuario a buscar.

#### Respuesta exitosa

-   Código de estado: 200 OK
-   Tipo de contenido: json

### Ejemplo de petición:
Body:
```json
{
	"correo":"sadsad@email.com"
}
```
### Ejemplo de respuesta:

```json
{
  "id": "4",
  "nombre": "Nuevo Nombre",
  "correo": "nuevo.correo@example.com"
}
```

## Obtener usuario por id

Trae los datos de un usuario especifico por su id

- Método: `GET`
- Ruta: `/api/usuarios/user/:id`

### Parámetros de ruta

- `id` (string, obligatorio): ID del usuario a buscar.

### Respuesta exitosa

 - Código de estado: 200 Ok
 - Tipo de contenido: json

### Ejemplo de peticion:

Params:

- `/api/usuarios/user/646523b0bb4be194b9207c02`

### Ejemplo de respuesta

```json
{
	"nombre" : "pepito",
	"correo" : "pepito@email.com",
	"contrasena" : "password"
}
```

## CheckLogin

Esta ruta se utiliza para realizar la verificación de inicio de sesión de un usuario.

- Método: `POST`
- Ruta: `/api/usuarios/loginm`

### Parámetros de la solicitud

 - `nombre`(string, obligatorio): Nombre del usuario.
 - `contrasena`(string, obligatorio): Contraseña del usuario

### Respuesta exitosa

- Código de estado: 200 Ok
- Tipo de contenido: json

### Ejemplo de petición:

Body:
```json
{
	"correo": "sadsad@email.com",
	"contrasena":"password"
}
```

### Ejemplo de respuesta:
```json
{
	"mensaje" : "Ingreso exitoso"
}
```
## Crear un nuevo usuario

Crea un nuevo usuario.

-   Método: `POST`
-   Ruta: `/api/usuarios/`

#### Parámetros de cuerpo de la solicitud

-   `nombre` (string, obligatorio): Nombre del usuario.
-   `correo` (string, obligatorio): Correo electrónico del usuario.
-   `contrasena` (string, obligatorio): Contraseña del usuario.

#### Respuesta exitosa

-   Código de estado: 201 Created
-   Tipo de contenido: json

### Ejemplo de petición:

Body:
```json
{
  "nombre": "Nuevo Nombre",
  "correo": "nuevo.correo@example.com",
  "contrasena": "password"
}
```
### Ejemplo de respuesta:
```json
{
  "id": "4",
  "nombre": "Nuevo Nombre",
  "correo": "nuevo.correo@example.com"
}
```

## Actualizar un usuario

Actualiza los datos de un usuario existente.

-   Método: `PUT`
-   Ruta: `/api/usuarios/:id`

#### Parámetros de ruta

-   `id` (string, obligatorio): ID del usuario a actualizar.

#### Parámetros de cuerpo de la solicitud

-   `nombre` (string, opcional): Nuevo nombre del usuario.
-   `correo` (string, opcional): Nuevo correo electrónico del usuario.
-   `contrasena` (string, opcional): Nueva contraseña del usuario.

#### Respuesta exitosa

-   Código de estado: 200 OK
-   Tipo de contenido: json

### Ejemplo de petición:

Params:
- `/api/usuarios/646523b0bb4be194b9207c02`

Body:
```json
{
  "nombre": "Nuevo Nombre",
  "correo": "nuevo.correo@example.com",
  "contrasena": "password"
}
```

### Ejemplo de respuesta:
```json
{
  "id": "4",
  "nombre": "Nuevo Nombre",
  "correo": "nuevo.correo@example.com"
}
```

## Eliminar un usuario

Elimina un usuario existente.

-   Método: `DELETE`
-   Ruta: `/api/usuarios/:id`

#### Parámetros de ruta

-   `id` (string, obligatorio): ID del usuario a eliminar.

#### Respuesta exitosa

-   Código de estado: 200 OK
-   Tipo de contenido: application/json

### Ejemplo de petición: 

Params:
-  `/api/usuarios/646523b0bb4be194b9207c02`


### Ejemplo de respuesta:
```json
{
  "mensaje": "Usuario eliminado exitosamente"
}
```
---

<!--stackedit_data:
eyJoaXN0b3J5IjpbMjg4MzI2MjUsNzE2OTE4NTU5LC0xNzExNj
IxMzAxLDQ5MzUwNDU0MV19
-->