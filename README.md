 🧠 Job Tracker App

> 🎯 Live Demo: https://job-tracker-web.netlify.app/  
> 🧪 Testing Credentials:  
> 📧 Email: `test@gmail.com`  
> 🔐 Password: `12345`

A full-stack Job Application Tracker built with Next.js 15, MongoDB, and Tailwind CSS. Easily manage and visualize your job applications with features like filtering, a detailed dashboard, calendar view, and status-based statistics.

---

 🚀 Features

- 🔐 User Authentication (Login & Register)
- ➕ Add, Edit, Delete Jobs
- 🎯 Filter by status, job type, location
- 📊 Visual Stats Page (bar/pie charts)
- 🗓️ Calendar View for job events
- 📝 Notes, Salary, URL support per job
- 🌈 Modern UI (Tailwind CSS + Lucide Icons)

---

 🛠️ Tech Stack

- Framework: [Next.js 15 (App Router)](https://nextjs.org/)
- Database: [MongoDB + Mongoose](https://mongoosejs.com/)
- UI: [Tailwind CSS](https://tailwindcss.com/)
- Icons: [Lucide Icons](https://lucide.dev/)
- Charts: [Recharts](https://recharts.org/)
- Calendar: [`react-calendar`](https://github.com/wojtekmaj/react-calendar)
- Auth: Cookie-based session system

---

 📦 Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/job-tracker.git
cd job-tracker
````

2. Install dependencies

```bash
npm install
```

3. Setup `.env.local`

Create a `.env.local` file and add:

```env
MONGODB_URI=your_mongodb_connection_string
```

4. Start the development server

```bash
npm run dev
```

Visit: `http://localhost:3000`

---

 📁 Project Structure

```
job-tracker/
├── app/                App Router Pages
│   ├── jobs/           Job routes
│   ├── login/          Auth routes
│   ├── calendar/       Calendar view
│   ├── stats/          Stats view
│   └── register/
├── components/         Reusable components
├── lib/                DB connection logic
├── models/             Mongoose models
├── public/             Static files
└── styles/             Global styles
```

---


 💡 Future Enhancements

 ✅ Resume Upload
 ✅ LinkedIn/Indeed Integration
 ✅ Reminder Notifications
 ✅ Dark Mode

---

 🙋‍♂️ About the Developer

Akshay Sawant
🧑‍💻 Full Stack Web Developer
🔗 [LinkedIn](https://www.linkedin.com/in/your-link)
🌐 [Portfolio](https://yourportfolio.com)

---

 📄 License

MIT License

---

> Built with ❤️ to streamline your job search and stay organized!

