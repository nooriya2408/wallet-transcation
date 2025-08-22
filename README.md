■ Wallet Transaction History App
A **React.js application** built as part of the React Developer Assessment.
The app replicates the provided **Figma design**, integrates with a real API, and displays
transaction history with pagination, loading, and error states.
---
■ Features
- ■ Pixel-perfect UI based on Figma design
- ■ Routing with **React Router v6**
- ■ State management using **React Hooks**
- ■ API integration using **Axios**
- ■ Transaction list with **pagination support**
- ■ Loading & ■ Error handling
- ■ Modular and reusable components
---
■■ Tech Stack
- React.js (Latest)
- React Router v6
- TailwindCSS
- Axios
---
■ Project Structure
src/
■ components/
■ ■ Layout.jsx
■ pages/
■ ■ Home.jsx
■ ■ History.jsx
■ Profile.jsx
■ QR.jsx
---
■■ Setup Instructions
### 1■■ Clone Repository
git clone https://github.com/nooriya2408/wallet-transcation
### 2■■ Install Dependencies
npm install
### 3■■ Run the App
npm run dev
■ The app will run at: http://localhost:5173
---
■ API Integration
- Endpoint:
GET http://64.227.189.27/wallet/api/v1/transaction_history?service_id=111&page;=0
- Headers:
Authorization: Bearer
- Parameters:
- service_id (required) → 111
- page (pagination) → default 0
The app fetches transactions and displays them in a styled list.
---
■ Example States
- ■ Transaction list with amount, date, and status
- ■ Loading indicator while fetching data
- ■ Error message if API fails
- ■ Pagination with Prev / Next buttons
---
■ Deployment
Easily deploy to Vercel or Netlify.
Example:
npm run build
Then upload the dist/ folder.
---
■ Notes
- Time Spent: 2days.
- Known Limitations:
- Pagination is limited to available API data.

---
