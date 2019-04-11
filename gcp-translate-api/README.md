# CLI to add Translation

```bash
# Create a new language
touch src/assets/i18n/ru.json

# 
```
* foreach key in ...en.json, translate and save

```bash
# Add a new string to the app
transapp "Hello World" --h HOME.GREETING
##@result a string Hello world is adde to each lang located in the i18n directory using the translator
```
