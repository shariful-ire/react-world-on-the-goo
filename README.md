# 🌍 Countries Explorer

A simple and interactive web application that allows users to explore information about countries around the world using the **Programming Hero Countries API**.

Users can view all countries, search countries by name, find countries by language, and explore detailed information using country codes.

---

## 🚀 Live Project

🔗 Live Demo: Add your deployed link here

---

## 📌 Features

* 🌎 Display all countries from API
* 🔎 Search country by name
* 🏳️ Find countries by ISO code
* 🗣️ Filter countries by language
* 📄 View detailed country information
* ⚡ Dynamic data loading from API
* 📱 Fully responsive design
* 🎨 Clean and user-friendly interface

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API
* DOM Manipulation

### Tools

* Git & GitHub
* VS Code
* REST API

---

## 🔗 API Integration

This project uses the **Programming Hero Countries API**.

### Available Endpoints

| Endpoint               | Description                         |
| ---------------------- | ----------------------------------- |
| `/api/all`             | Get information about all countries |
| `/api/alpha/{code}`    | Get country information by ISO code |
| `/api/lang/{language}` | Get countries by spoken language    |
| `/api/name/{name}`     | Search country by name              |

---

## 📡 API Examples

### Get All Countries

```
GET https://openapi.programming-hero.com/api/all
```

Returns all countries with information like:

* Country name
* Capital
* Region
* Population
* Country code

---

### Search Country By Name

```
GET https://openapi.programming-hero.com/api/name/bangladesh
```

Example:

```json
{
  "name": "Bangladesh",
  "capital": "Dhaka",
  "region": "Asia",
  "population": "..."
}
```

---

### Find Country By Code

```
GET https://openapi.programming-hero.com/api/alpha/116
```

---

### Find Countries By Language

```
GET https://openapi.programming-hero.com/api/lang/english
```

---

## 📂 Project Structure

```
countries-explorer/
│
├── index.html
├── style.css
├── script.js
│
├── assets/
│
└── README.md
```

---

## ⚙️ Installation & Running Locally

Follow these steps to run this project locally:

### 1. Clone Repository

```bash
git clone your-repository-link
```

### 2. Go to Project Folder

```bash
cd countries-explorer
```

### 3. Open Project

Open `index.html` in your browser.

Or use VS Code Live Server extension.

---

## 💻 API Fetch Example

```javascript
fetch("https://openapi.programming-hero.com/api/all")
  .then(response => response.json())
  .then(data => {
      console.log(data);
  });
```

---

## 🎯 Learning Purpose

This project was built to practice:

* Working with REST APIs
* Fetching asynchronous data
* JavaScript Promise handling
* DOM manipulation
* Dynamic UI rendering
* Searching and filtering data

---

## 🔮 Future Improvements

* Add dark mode
* Add advanced filtering
* Add country comparison feature
* Add loading animation
* Improve UI with modern framework like React

---

## 👨‍💻 Author

**Md. Shariful Islam**

Frontend Developer

* Passionate about React, Next.js, and modern web development
* Interested in building scalable and user-friendly applications

---

⭐ If you find this project helpful, feel free to star the repository.
