import { Plus, Edit, Trash2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockUsers = [
  { id: 1, name: "John Moyo", email: "john@unesco.org.zw", role: "Admin", lastLogin: "15 Nov 2024" },
  { id: 2, name: "Grace Mutasa", email: "grace@unesco.org.zw", role: "Editor", lastLogin: "14 Nov 2024" },
  { id: 3, name: "Tafadzwa Ncube", email: "tafadzwa@unesco.org.zw", role: "Editor", lastLogin: "13 Nov 2024" },
  { id: 4, name: "Blessing Chirwa", email: "blessing@unesco.org.zw", role: "Media Officer", lastLogin: "10 Nov 2024" },
  { id: 5, name: "Rumbidzai Phiri", email: "rumbi@unesco.org.zw", role: "Viewer", lastLogin: "8 Nov 2024" },
];

const AdminUsers = () => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-foreground">User Management</h1>
      <Button className="gap-2"><Plus className="h-4 w-4" /> Add User</Button>
    </div>
    <div className="rounded-lg border border-border bg-card overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="text-left p-3 font-medium text-muted-foreground">Name</th>
            <th className="text-left p-3 font-medium text-muted-foreground hidden sm:table-cell">Email</th>
            <th className="text-left p-3 font-medium text-muted-foreground hidden md:table-cell">Role</th>
            <th className="text-left p-3 font-medium text-muted-foreground hidden lg:table-cell">Last Login</th>
            <th className="text-right p-3 font-medium text-muted-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {mockUsers.map((user) => (
            <tr key={user.id} className="border-b border-border last:border-0">
              <td className="p-3 text-card-foreground font-medium">{user.name}</td>
              <td className="p-3 text-muted-foreground hidden sm:table-cell">{user.email}</td>
              <td className="p-3 hidden md:table-cell">
                <span className={`inline-flex items-center gap-1 rounded px-2 py-0.5 text-xs font-medium ${
                  user.role === "Admin" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                }`}>
                  {user.role === "Admin" && <Shield className="h-3 w-3" />}
                  {user.role}
                </span>
              </td>
              <td className="p-3 text-muted-foreground hidden lg:table-cell">{user.lastLogin}</td>
              <td className="p-3 text-right">
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="icon" aria-label="Edit"><Edit className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" aria-label="Delete"><Trash2 className="h-4 w-4 text-destructive" /></Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminUsers;
