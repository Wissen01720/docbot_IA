# Médico en Telegram

Se trata de un chatbot interactivo desarrollado en **Python**, que utiliza la biblioteca `python-telegram-bot` para interactuar con los usuarios en Telegram.  
El bot se especializa en:
- Recopilar síntomas.
- Proporcionar diagnósticos preliminares.
- Sugerir tratamientos.  

Además, registra las interacciones en una base de datos de **Snowflake**.

---

## Requisitos

- **Python** 3.7 o superior.
- Bibliotecas necesarias:
  - `python-telegram-bot`
  - `snowflake-connector-python`
  - `json`
  - `asyncio`
  - `datetime`
  - `translations` (archivo local con traducciones).

Instale las bibliotecas necesarias mediante `pip`:

```bash
pip install python-telegram-bot snowflake-connector-python
```

---

## Configuración de Snowflake

El bot se conecta a una base de datos de Snowflake para almacenar datos de interacción con los usuarios. Asegúrese de que tiene las credenciales necesarias:
- Nombre de usuario.
- Contraseña.
- Cuenta.
- Almacén.
- Base de datos.
- Esquema.

Estas credenciales se configuran en las funciones `save_interaction_data` y `get_diagnosis`.

---

## Funcionalidades

### Inicio de sesión y selección de idioma
El bot permite a los usuarios iniciar una conversación usando el comando `/start` y seleccionar su idioma preferido (español o inglés).

### Registro de síntomas
El bot guía al usuario a través de una serie de preguntas para recopilar información sobre sus síntomas. Estos se almacenan y se utilizan para generar un diagnóstico preliminar.

### Diagnóstico
En función de los síntomas informados, el bot:
- Consulta un modelo de diagnóstico mediante Snowflake.
- Proporciona recomendaciones sobre diagnósticos preliminares.
- Sugiere tratamientos en el hogar.
- Indica cuándo buscar atención médica.

### Satisfacción del usuario
Al final de la sesión, el bot pregunta al usuario si está satisfecho con la experiencia y almacena esta información en la base de datos.

### Inactividad
Si el usuario permanece inactivo durante más de 30 minutos, el bot eliminará sus datos de sesión.

---

## Archivos y estructura del proyecto

```plaintext
/chatbot
├── bot.py           # Código principal del bot
├── translations.py  # Traducciones para diferentes idiomas
requirements.txt     # Archivo para dependencias de Python
```

---

## Uso

1. Inicie el bot en Telegram enviando el comando `/start`.
2. Seleccione su idioma preferido (español o inglés).
3. El bot le guiará para informar de sus síntomas.
4. Después de enviar los síntomas, el bot proporcionará:
   - Un diagnóstico preliminar.
   - Sugerencias de tratamiento.
5. Finalmente, el bot le preguntará si está satisfecho con la experiencia.

---

## Contribuyendo

1. Bifurque el repositorio.
2. Cree una nueva rama:

   ```bash
   git checkout -b new-feature
   ```

3. Realice los cambios.
4. Confirme sus cambios:

   ```bash
   git commit -am 'Añadir nueva funcionalidad'
   ```

5. Empuje a su rama:

   ```bash
   git push origin new-feature
   ```

6. Cree una nueva solicitud de incorporación de cambios.

---

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulte el archivo `LICENSE` para más detalles.

---

**Autores:**  
Daniela Moreno y Edgard Patiño

