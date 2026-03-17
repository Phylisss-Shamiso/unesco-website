import { useState } from "react";
import { Plus, Edit, Trash2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { newsItems } from "@/api/mockData";

const AdminNews = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-foreground">News Management</h1>
        <Button onClick={() => setShowForm(!showForm)} className="gap-2">
          <Plus className="h-4 w-4" /> Add Article
        </Button>
      </div>

      {showForm && (
        <div className="mb-6 rounded-lg border border-border bg-card p-6 animate-fade-in">
          <h2 className="text-lg font-semibold text-foreground mb-4">New Article</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Title</label>
              <input className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Category</label>
                <select className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Education</option><option>Culture</option><option>Science</option><option>Communication</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Date</label>
                <input type="date" className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Content</label>
              <div className="rounded-lg border border-input bg-muted p-8 text-center text-sm text-muted-foreground">
                Rich Text Editor Placeholder — Integrate TipTap, Quill, or similar
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Featured Image</label>
              <div className="rounded-lg border-2 border-dashed border-input bg-muted p-6 text-center text-sm text-muted-foreground">
                Drag & drop or click to upload image
              </div>
            </div>
            <div className="flex gap-2">
              <Button type="button">Save Article</Button>
              <Button type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
            </div>
          </form>
        </div>
      )}

      {/* Search */}
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input placeholder="Search articles..." className="w-full rounded-lg border border-input bg-background py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
      </div>

      {/* Table */}
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
            {newsItems.map((item) => (
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
};

export default AdminNews;
