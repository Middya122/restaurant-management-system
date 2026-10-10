
# MIDDYA - Restaurant Website

MIDDYA is a restaurant website built using the MERN stack. It provides an attractive interface to explore food dishes, learn about the restaurant, meet the chefs, and make table reservations.

## Features

- Responsive restaurant website
- Attractive homepage and hero section
- About Us and restaurant services
- Food menu and dish listings
- Chef and team section
- Table reservation form
- Backend API for handling reservations
- MongoDB database integration

## Tech Stack

- **Frontend:** React.js, CSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Additional Tools:** Axios, React Router, React Hot Toast

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd YOUR_PROJECT_FOLDER
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
npm run dev
```

### 3. Install Backend Dependencies

Open another terminal:

```bash
cd backend
npm install
npm run dev
```

### 4. Configure Environment Variables

Create a `config/config.env` file inside the backend folder:

```env
PORT=4000
FRONTEND_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
```

Replace the MongoDB connection string with your own credentials. Never upload your actual database password or secret keys to GitHub.

## Usage

1. Start the backend server.
2. Start the frontend development server.
3. Open the local URL provided by Vite.
4. Explore the menu and submit a table reservation.

## Future Improvements

- User authentication
- Online food ordering
- Online payment integration
- Admin dashboard for managing reservations

## Author

Sampurna Middya
