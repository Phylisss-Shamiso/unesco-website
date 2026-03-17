import { Plus, Edit, Trash2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { publications } from "@/api/mockData";

const AdminPublications = () => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-foreground">Publications Management</h1>
      <Button className="gap-2"><Plus className="h-4 w-4" /> Add Publication</Button>
    </div>
    <div className="rounded-lg border border-border bg-card overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="text-left p-3 font-medium text-muted-foreground">Title</th>
            <th className="text-left p-3 font-medium text-muted-foreground hidden sm:table-cell">Category</th>
            <th className="text-left p-3 font-medium text-muted-foreground hidden md:table-cell">Date</th>
            <th className="text-right p-3 font-medium text-muted-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          {publications.map((item) => (
            <tr key={item.id} className="border-b border-border last:border-0">
              <td className="p-3 text-card-foreground font-medium">{item.title}</td>
              <td className="p-3 text-muted-foreground hidden sm:table-cell">{item.category}</td>
              <td className="p-3 text-muted-foreground hidden md:table-cell">{new Date(item.date).toLocaleDateString("en-GB")}</td>
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

export default AdminPublications;
