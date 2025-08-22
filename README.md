# 🛒 SwiftShop

![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4.1-06B6D4?logo=tailwindcss\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb\&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Frontend-000000?logo=vercel\&logoColor=white)
![NextAuth](https://img.shields.io/badge/NextAuth-Authentication-000000?logo=nextauth\&logoColor=white)

> **SwiftShop** - Your One-Stop Tech Shop!
> Build, manage, and shop for your favorite products all in one place.

**SwiftShop** is an online shopping platform that offers a seamless user experience for browsing products, managing them, and adding new ones to the catalog. Users can sign in, view products, and for authenticated users, add new products via a protected dashboard.

🔗 [**Live Site**](https://swiftshop-web.vercel.app)

---

## 🗂️ Table of Contents

* [🎯 Purpose](#-purpose)
* [🚀 Features](#-features)
* [🛠️ Built With](#-built-with)
* [📦 NPM Packages Used](#-npm-packages-used)
* [📸 Preview](#-preview)
* [⚙️ Getting Started](#️-getting-started)
* [📄 License](#-license)

---

## 🎯 Purpose

SwiftShop is a basic e-commerce platform built with Next.js, providing authentication, product browsing, and product management. It is designed for users to shop, view products, and add new products once they sign in.

---

## 🚀 Features

* **Public Pages**:

  * **Landing Page**: Displays a hero, product highlights, and footer. No authentication required.
  * **Product List**: Shows a list of products fetched from a backend.
  * **Product Details**: Displays full details of a selected product.

* **Authenticated Pages**:

  * **Sign In**: Users can log in using credentials or social login (Google).
  * **Add Product**: Authenticated users can add new products to the catalog.

* **Authentication**:
  Secure login and session management using **NextAuth.js**.

---

## 🛠️ Built With

| Category           | Tools & Libraries                                                 |
| ------------------ | ----------------------------------------------------------------- |
| **Frontend**       | [Next.js 15](https://nextjs.org/), [React 19](https://react.dev/) |
| **Styling**        | [Tailwind CSS](https://tailwindcss.com/)                          |
| **Authentication** | [NextAuth.js](https://next-auth.js.org/)                          |
| **Database**       | [MongoDB](https://www.mongodb.com/)                               |
| **Icons**          | [React Icons](https://react-icons.github.io/react-icons/)         |

---

## 📦 NPM Packages Used

```bash
# Core
next
react
react-dom

# Authentication
next-auth

# Styling
tailwindcss
daisyui

# Database
mongodb

# Utilities
react-hook-form
react-icons
sweetalert2
bcryptjs
```

---

## 📸 Preview

![Screenshot 1](https://i.ibb.co.com/7xb6nsF6/image.png)
![Screenshot 2](https://i.ibb.co.com/vC6j3Tcj/image.png)

---

## ⚙️ Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/swiftshop.git
   cd swiftshop
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Make sure you have the following `.env` file setup:

   ```
   MONGODB_URI=your_mongodb_connection_url
   DB_NAME=your_database_name
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_key
   ```

4. **Run the App**

   ```bash
   npm run dev
   ```

5. Visit `http://localhost:3000` to see the app in action.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and share it as you see fit.

---