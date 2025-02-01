# Médico in Telegram

This is an interactive chatbot developed in **Python**, using the `python-telegram-bot` library to interact with users on Telegram.  
The bot specializes in:
- Collecting symptoms.
- Providing preliminary diagnoses.
- Suggesting treatments.  

Additionally, it records interactions in a **Snowflake** database.

---

## Requirements

- **Python** 3.7 or higher.
- Required libraries:
  - `python-telegram-bot`
  - `snowflake-connector-python`
  - `json`
  - `asyncio`
  - `datetime`
  - `translations` (local file for translations).

Install the required libraries via `pip`:

```bash
pip install python-telegram-bot snowflake-connector-python
```

---

## Snowflake Configuration

The bot connects to a Snowflake database to store user interaction data. Ensure you have the necessary credentials:
- Username.
- Password.
- Account.
- Warehouse.
- Database.
- Schema.

These credentials are configured in the `save_interaction_data` and `get_diagnosis` functions.

---

## Features

### Login and Language Selection
The bot allows users to start a conversation using the `/start` command and select their preferred language (English or Spanish).

### Symptom Logging
The bot guides users through a series of questions to collect information about their symptoms. These are stored and used to generate a preliminary diagnosis.

### Diagnosis
Based on the reported symptoms, the bot:
- Queries a diagnosis model using Snowflake.
- Provides recommendations on preliminary diagnoses.
- Suggests home treatments.
- Indicates when to seek medical attention.

### User Satisfaction
At the end of the session, the bot asks users if they are satisfied with the experience and stores this information in the database.

### Inactivity
If the user remains inactive for more than 30 minutes, the bot will delete their session data.

---

## Project Files and Structure

```plaintext
/chatbot
├── bot.py           # Main bot code
├── translations.py  # Translations for different languages
requirements.txt     # File for Python dependencies
```

---

## Usage

1. Start the bot on Telegram by sending the `/start` command.
2. Select your preferred language (English or Spanish).
3. The bot will guide you to report your symptoms.
4. After sending the symptoms, the bot will provide:
   - A preliminary diagnosis.
   - Treatment suggestions.
5. Finally, the bot will ask if you are satisfied with the experience.

---

## Contributing

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b new-feature
   ```

3. Make your changes.
4. Commit your changes:

   ```bash
   git commit -am 'Add new feature'
   ```

5. Push to your branch:

   ```bash
   git push origin new-feature
   ```

6. Create a new pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

**Authors:**  
Daniela Moreno and Edgard Patiño


