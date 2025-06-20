# Assignment

## Overview
This project demonstrates a full-stack application with a RESTful backend (Node.js, Express, MongoDB) and a modern, user-friendly frontend (HTML, Bootstrap, JavaScript). It fulfills the requirements of the assignment by providing endpoints to fetch and update configuration data stored in MongoDB.

---

## Features
- **RESTful API** for fetching and updating configuration data
- **MongoDB** integration using Mongoose
- **Bootstrap** for a modern, responsive UI
- **Separate CSS files** for clean, maintainable styling
- **Form validation** and user-friendly error messages
- **Loading indicators** for better UX
- **Code comments** throughout backend and frontend for clarity
- **Ready for React**: You can easily swap the frontend for React if desired

---
## Demo Video

### https://drive.google.com/file/d/19rVevMrnKZyM9zAhrPdPamkEskiHmmSz/view?usp=sharing
---
## Folder Structure
```
Full_Stack_Assignment/
  frontend/
    fetch.html
    fetch.css
    update.html
    update.css
  models/
    configuration.js
  route/
    configRoute.js
  server.js
  package.json
  package-lock.json
  README.md
```
## Project Timeline
Here is a timeline for completing this assignment:

| Step                                 | Description                                      | Estimated Time |
|-------------------------------------- |--------------------------------------------------|:--------------:|
| 1. Project Setup                     | Initialize Node.js project, install dependencies  |   15 min       |
| 2. Backend: API & MongoDB            | Create Express server, connect to MongoDB,        |
|                                      | implement GET/PUT endpoints                      |   30 min       |
| 3. Frontend: HTML/CSS/JS             | Build fetch and update pages, connect to backend  |   30 min       |
| 4. Styling & Validation              | Add Bootstrap, custom CSS, form validation        |   15 min       |
| 5. Testing & Debugging               | Test all endpoints and UI, fix bugs               |   15 min       |
| 6. Documentation & Polish            | Write README, add screenshots, clean code         |   15 min       |
| **Total**                            |                                                  | **~2 hours**   |

---

## Example Configuration Document
When adding data to your MongoDB collection, use this format:
```json
{
  "configId": "test1",
  "data": [
    ["sym1", "sym2", "sym3"],
    ["sym4", "sym6", "sym8"],
    ["sym5", "sym1", "sym0"]
  ],
  "remark": "Initial config"
}
```

---

## Setup Instructions

### 1. Clone the Repository
```
git clone https://github.com/Ash1327/Assignment.git
```

### 2. Install Dependencies
```
npm install
```

### 3. Start the Server
```
node server.js
```
- The server will run at `http://localhost:8080`
- Ensure you have internet access for MongoDB Atlas connection

### 4. Open the Frontend
- Open `http://localhost:8080/` in your browser to fetch configuration data
- Open `http://localhost:8080/update` in your browser to update remarks

---

## API Endpoints
- **GET** `/api/configurations/:id` — Fetch configuration 2D array by configId
- **PUT** `/api/configurations/:id` — Update remark for a configuration

---

## Screenshots
![image](https://github.com/user-attachments/assets/18eeb60b-82c1-4fcc-99e8-f98f07ae6641)
![image](https://github.com/user-attachments/assets/a2a3335f-ca4f-47ab-8bd4-c4932d3ed374)
![image](https://github.com/user-attachments/assets/68f9112f-cf9d-4b14-9712-d2394facc480)
![image](https://github.com/user-attachments/assets/c1d96a53-839c-4781-888a-761a7bb1f72a)




---

## Design & Best Practices
- **MVC-inspired structure** for backend (separate routes, models)
- **Bootstrap** for UI polish
- **Validation** and **loading indicators** for better UX
- **Code comments** for maintainability
- **Separate CSS files** for each page

---

## Customization & Creativity
- You can further enhance the UI or refactor the backend using advanced patterns (e.g., controllers, services) or frameworks (React, Vue) if desired.
- To use React, create a new React app in a separate folder and connect it to the same backend API.

---
