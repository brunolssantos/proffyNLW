# Proffy NLW

A simple teacher matching web application built with Node.js, Express, Nunjucks, and SQLite. This project is based on the NLW (Next Level Week) Proffy concept and provides a platform for students to search for available teachers and for teachers to create class listings.

## Features

- Landing page with navigation
- Search for teachers by subject, weekday, and time
- Add new teacher profiles with available class schedules
- Persistent data storage using SQLite
- Server rendered pages with Nunjucks templates

## Tech Stack

- Node.js
- Express
- Nunjucks
- SQLite (via `sqlite-async`)
- Nodemon (development)

## Project Structure

- `src/server.js` - Express server configuration and route definitions
- `src/pages.js` - Route handlers for landing, study, and give-classes pages
- `src/database/db.js` - SQLite database connection and schema initializer
- `src/database/createProffy.js` - Class and schedule persistence logic
- `src/utils/format.js` - Helper functions for subjects, weekdays, and time conversion
- `src/views/` - Nunjucks HTML templates
- `public/` - Static assets: CSS, scripts, images

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/brunolssantos/proffyNLW.git
   cd proffyNLW
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Running the App

Start the development server:

```bash
npm run dev
```

Open your browser at `http://localhost:5500`

## Usage

- Visit `/` to access the landing page
- Visit `/study` to search for available teachers
- Visit `/give-classes` to register as a teacher and provide class availability

## Notes

- The SQLite database file is stored in `src/database/database.sqlite`
- The server listens on port `5500`

## License

This project is provided under the ISC License.
