import { Newspaper, CalendarDays, BookOpen, Image, Users, Eye } from "lucide-react";

const stats = [
  { label: "News Articles", value: "24", icon: Newspaper, change: "+3 this month" },
  { label: "Events", value: "8", icon: CalendarDays, change: "2 upcoming" },
  { label: "Publications", value: "15", icon: BookOpen, change: "+1 this week" },
  { label: "Media Files", value: "142", icon: Image, change: "+12 this month" },
  { label: "Users", value: "5", icon: Users, change: "3 active" },
  { label: "Site Visits", value: "3,241", icon: Eye, change: "+18% this month" },
];

const AdminDashboard = () => (
  <div>
    <h1 className="text-2xl font-bold text-foreground mb-6">Dashboard</h1>

    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-lg border border-border bg-card p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </div>
          <p className="text-2xl font-bold text-card-foreground">{stat.value}</p>
          <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
        </div>
      ))}
    </div>

    {/* Recent activity */}
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h2>
      <div className="rounded-lg border border-border bg-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="text-left p-3 font-medium text-muted-foreground">Action</th>
              <th className="text-left p-3 font-medium text-muted-foreground hidden sm:table-cell">User</th>
              <th className="text-left p-3 font-medium text-muted-foreground hidden md:table-cell">Date</th>
            </tr>
          </thead>
          <tbody>
            {[
              { action: "Published: 'Zimbabwe Hosts Regional Education Forum'", user: "Admin", date: "15 Nov 2024" },
              { action: "Updated: Events calendar for Q1 2025", user: "Editor", date: "14 Nov 2024" },
              { action: "Uploaded: 12 new media files", user: "Media Officer", date: "13 Nov 2024" },
              { action: "Published: 'Great Zimbabwe Conservation Update'", user: "Admin", date: "10 Nov 2024" },
              { action: "Added: New publication - Annual Report 2023-2024", user: "Editor", date: "8 Nov 2024" },
            ].map((row, i) => (
              <tr key={i} className="border-b border-border last:border-0">
                <td className="p-3 text-card-foreground">{row.action}</td>
                <td className="p-3 text-muted-foreground hidden sm:table-cell">{row.user}</td>
                <td className="p-3 text-muted-foreground hidden md:table-cell">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default AdminDashboard;
