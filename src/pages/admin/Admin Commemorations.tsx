import { Plus, Edit, Trash2, Archive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { commemorations } from "@/api/mockData";

const AdminCommemorations = () => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-black font-display">Commemorations Management</h1>
      <Button className="gap-2 btn-brass border-0"><Plus className="h-4 w-4" /> Add Commemoration</Button>
    </div>
    <div className="rounded-xl bg-white/10 backdrop-blur-xl border border-white/15 overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left p-3 font-medium text-black/50">Title</th>
            <th className="text-left p-3 font-medium text-black/50 hidden sm:table-cell">Date</th>
            <th className="text-left p-3 font-medium text-black/50 hidden md:table-cell">Activities</th>
            <th className="text-right p-3 font-medium text-black/50">Actions</th>
          </tr>
        </thead>
        <tbody>
          {commemorations.map((item) => (
            <tr key={item.id} className="border-b border-white/8 last:border-0 hover:bg-white/5 transition-colors">
              <td className="p-3 text-black/80 font-medium">{item.title}</td>
              <td className="p-3 text-black/50 hidden sm:table-cell">{new Date(item.date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}</td>
              <td className="p-3 text-black/50 hidden md:table-cell">{item.nationalActivities.length} activities</td>
              <td className="p-3 text-right">
                <div className="flex justify-end gap-1">
                  <Button variant="ghost" size="icon" className="text-black/50 hover:text-black hover:bg-white/10" aria-label="Edit"><Edit className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="text-black/50 hover:text-accent hover:bg-accent/10" aria-label="Archive"><Archive className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="text-black/50 hover:text-destructive hover:bg-destructive/10" aria-label="Delete"><Trash2 className="h-4 w-4" /></Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminCommemorations;
