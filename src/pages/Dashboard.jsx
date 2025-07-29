import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import "../styles/dashboard.css";

export default function Dashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Sample chart data
  const teamData = [
    { name: "FG", value: 60000 },
    { name: "JS", value: 50000 },
    { name: "MB", value: 45000 },
    { name: "DL", value: 70000 },
    { name: "BS", value: 90000 },
  ];

  const dayData = [
    { name: "Accommodation", value: 40 },
    { name: "Commute", value: 60 },
    { name: "Services", value: 80 },
    { name: "Food", value: 70 },
    { name: "Fuel", value: 50 },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="profile">
          <img src="https://i.pravatar.cc/100" alt="User" />
          <h3>Janice Chandler</h3>
        </div>
        <nav>
          <a href="#">🏠 Home</a>
          <a href="#">💰 Expenses</a>
          <a href="#">✈️ Trips</a>
          <a href="#">✅ Approvals</a>
          <a href="#">⚙️ Settings</a>
          <a href="#">📞 Support</a>
        </nav>
      </aside>

      {/* Hamburger for Mobile */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>

      {/* Main Content */}
      <main className="content">
        <div className="cards">
          <div className="card"> <h4>Pending Tasks</h4> <p>Pending Approvals: 5</p></div>
          <div className="card"> <h4>Recent Expenses</h4> <p>Office Supplies - €150</p></div>
        </div>

        <div className="quick-access">
          <button>➕ New Expense</button>
          <button>🧾 Add Receipt</button>
          <button>📄 Create Report</button>
          <button>➕ Create Trip</button>
        </div>

        <div className="charts">
          <div className="chart">
            <h4>Team Spending Trend</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={teamData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#00ff99" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart">
            <h4>Day-to-Day Expenses</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={dayData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4facfe" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  );
}
