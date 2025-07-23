# Escenarios de Prueba para el Formulario de Registro

## Característica: Registro de Usuario

Como usuario, quiero registrarme en la aplicación para acceder a sus funcionalidades.

### Escenario 1: Registro Exitoso con Datos Válidos

**Descripción:** El usuario ingresa todos los datos correctamente y cumple con las reglas de la clave.

```gherkin
Escenario: Registro Exitoso con Datos Válidos
  Dado que estoy en la página de registro
  Cuando ingreso "Juan Perez" en el campo "Nombre"
  Y ingreso "juan.perez@example.com" en el campo "Email"
  Y ingreso "ClaveSegura123" en el campo "Clave"
  Y ingreso "ClaveSegura123" en el campo "Confirmación de Clave"
  Y hago clic en el botón "Registrarse"
  Entonces debería ver el mensaje "¡Registro exitoso! Datos enviados correctamente."
  Y el formulario debería estar vacío

Escenario 2: Registro Fallido por Falta de Datos Obligatorios
Descripción: El usuario intenta registrarse dejando uno o más campos obligatorios vacíos.

Escenario: Registro Fallido por Falta de Datos Obligatorios
  Dado que estoy en la página de registro
  Cuando dejo el campo "Nombre" vacío
  Y ingreso "test@example.com" en el campo "Email"
  Y ingreso "MiClave123" en el campo "Clave"
  Y ingreso "MiClave123" en el campo "Confirmación de Clave"
  Y hago clic en el botón "Registrarse"
  Entonces debería ver el mensaje de error "El nombre es obligatorio." debajo del campo "Nombre"
  Y debería ver el mensaje "Por favor, corrige los errores en el formulario."
  Y no debería ver el mensaje "¡Registro exitoso!"

Escenario 3: Registro Fallido por Clave y Confirmación de Clave No Coinciden
Descripción: El usuario ingresa claves diferentes en los campos "Clave" y "Confirmación de Clave".

Escenario: Registro Fallido por Clave y Confirmación de Clave No Coinciden
  Dado que estoy en la página de registro
  Cuando ingreso "Maria Lopez" en el campo "Nombre"
  Y ingreso "maria.lopez@example.com" en el campo "Email"
  Y ingreso "ClaveValida123" en el campo "Clave"
  Y ingreso "ClaveDiferente456" en el campo "Confirmación de Clave"
  Y hago clic en el botón "Registrarse"
  Entonces debería ver el mensaje de error "La clave y la confirmación de clave no coinciden." debajo del campo "Confirmación de Clave"
  Y debería ver el mensaje "Por favor, corrige los errores en el formulario."
  Y no debería ver el mensaje "¡Registro exitoso!"

Escenario 4: Registro Fallido por Clave No Cumple las Reglas
Descripción: El usuario ingresa una clave que no cumple con los requisitos de longitud, mayúsculas, minúsculas o números.

Escenario: Registro Fallido por Clave No Cumple las Reglas
  Dado que estoy en la página de registro
  Cuando ingreso "Pedro Gomez" en el campo "Nombre"
  Y ingreso "pedro.gomez@example.com" en el campo "Email"
  Y ingreso "corta" en el campo "Clave"
  Y ingreso "corta" en el campo "Confirmación de Clave"
  Y hago clic en el botón "Registrarse"
  Entonces debería ver el mensaje de error "La clave debe tener al menos 10 caracteres, incluyendo mayúsculas, minúsculas y números." debajo del campo "Clave"
  Y debería ver el mensaje "Por favor, corrige los errores en el formulario."
  Y no debería ver el mensaje "¡Registro exitoso!"
```gherkin
Escenario: Registro Fallido por Clave No Cumple las Reglas (Solo minúsculas)
  Dado que estoy en la página de registro
  Cuando ingreso "Ana Garcia" en el campo "Nombre"
  Y ingreso "ana.garcia@example.com" en el campo "Email"
  Y ingreso "solominusculas" en el campo "Clave"
  Y ingreso "solominusculas" en el campo "Confirmación de Clave"
  Y hago clic en el botón "Registrarse"
  Entonces debería ver el mensaje de error "La clave debe tener al menos 10 caracteres, incluyendo mayúsculas, minúsculas y números." debajo del campo "Clave"
  Y debería ver el mensaje "Por favor, corrige los errores en el formulario."
  Y no debería ver el mensaje "¡Registro exitoso!"
```gherkin
Escenario: Registro Fallido por Clave No Cumple las Reglas (Solo números)
  Dado que estoy en la página de registro
  Cuando ingreso "Carlos Ruiz" en el campo "Nombre"
  Y ingreso "carlos.ruiz@example.com" en el campo "Email"
  Y ingreso "1234567890" en el campo "Clave"
  Y ingreso "1234567890" en el campo "Confirmación de Clave"
  Y hago clic en el botón "Registrarse"
  Entonces debería ver el mensaje de error "La clave debe tener al menos 10 caracteres, incluyendo mayúsculas, minúsculas y números." debajo del campo "Clave"
  Y debería ver el mensaje "Por favor, corrige los errores en el formulario."
  Y no debería ver el mensaje "¡Registro exitoso!"
