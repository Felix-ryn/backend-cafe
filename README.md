# ☕ Cafe Ordering API – Backend for Cafe Management

A robust RESTful API built with **Node.js**, **Express**, and **Sequelize**, designed to manage a cafe ordering system. It supports user registration, login, menu browsing, cart management, and transactions. Suitable for integration with a web or mobile frontend.

---

## 📦 Features

- 👥 **User**:
  - Register & Login (JWT-based)
  - Browse menu items
  - Add to cart and checkout
  - View order history

- 🧑‍🍳 **Admin**:
  - Manage menu items (CRUD)
  - View all transactions
  - Apply discounts

- 🛡️ **Security**:
  - Password hashing with `bcrypt`
  - Authentication with JWT
  - Role-based access control

---

## 🧱 Tech Stack

| Layer          | Technology            |
|----------------|------------------------|
| Language       | JavaScript (Node.js)   |
| Framework      | Express.js             |
| ORM            | Sequelize              |
| Database       | PostgreSQL             |
| Auth           | JWT, bcrypt            |
| Others         | dotenv, cors, nodemon  |

---

## 📁 Project Structure

```
backend-cafe/
├── config/              # DB config
├── controllers/         # Business logic
├── middleware/          # JWT, role-based auth
├── migrations/          # Sequelize migrations
├── models/              # Sequelize models
├── routes/              # API route definitions
├── seeders/             # Seed data
├── .env                 # Env variables
├── app.js               # Entry point
├── package.json
└── README.md
```

---

## 🗄️ Database Models Overview

- **Users**: `id`, `username`, `password`, `role`
- **Menus**: `id`, `name`, `price`, `category`, `availability`
- **Carts**: `id`, `userId`, `menuId`, `quantity`
- **Transactions**: `id`, `userId`, `total`, `date`
- **TransactionDetails**: `id`, `transactionId`, `menuId`, `quantity`, `subtotal`

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Felix-ryn/backend-cafe.git
cd backend-cafe
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment

Buat file `.env` berdasarkan `.env.example`:

```
DB_NAME=cafedb
DB_USER=postgres
DB_PASSWORD=123456
DB_HOST=localhost
DB_PORT=5432
JWT_SECRET=supersecret
```

### 4. Run Migrations & Seeders

```bash
npx sequelize db:create
npx sequelize db:migrate
npx sequelize db:seed:all
```

### 5. Start the Server

```bash
nodemon app.js
```

Server will run on:  
🔗 `http://localhost:5000`

---

## 📮 API Endpoints (Samples)

### 🔐 Auth
- `POST /api/login`
- `POST /api/register`

### ☕ Menus
- `GET /api/menus`
- `POST /api/menus` (admin only)
- `PATCH /api/menus/:id`
- `DELETE /api/menus/:id`

### 🛒 Cart
- `POST /api/carts`
- `GET /api/carts`
- `DELETE /api/carts/:menuId`

### 🧾 Transactions
- `POST /api/transactions`
- `GET /api/transactions/user/:id`

---

## 🔐 Roles & Access

| Role     | Access                                  |
|----------|------------------------------------------|
| User     | View menu, manage cart, place orders     |
| Admin    | Manage menu items, view all transactions |

JWT & role-based access handled via middleware.

---

## 🧪 Testing

```bash
npm run test
```

Use Postman or integration tests for verifying endpoints.

---

## 📌 Future Enhancements

- 📊 Admin dashboard for transaction analytics
- 📱 Mobile-friendly API (React Native)
- 📥 Order queue for kitchen staff
- 💳 Payment gateway integration (e.g. Midtrans)

---

## 📜 License

MIT License  
Copyright (c) 2025 Felix Ryan

Permission is hereby granted, free of charge, to any person obtaining a copy  
of this software and associated documentation files (the "Software"), to deal  
in the Software without restriction, including without limitation the rights  
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell  
copies of the Software, and to permit persons to whom the Software is  
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in  
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR  
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,  
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE  
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER  
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,  
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN  
THE SOFTWARE.

---

## 👨‍💻 Author

**Felix Ryan Agusta**  
GitHub: [@Felix-ryn](https://github.com/Felix-ryn)

> “Delivering digital cafe services with code and coffee.” ☕💻
