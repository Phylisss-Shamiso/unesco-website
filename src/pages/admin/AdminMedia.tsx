import { Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mediaItems } from "@/api/mockData";

const AdminMedia = () => (
  <div>
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-2xl font-bold text-foreground">Media Management</h1>
      <Button className="gap-2"><Plus className="h-4 w-4" /> Upload Media</Button>
    </div>

    {/* Upload zone */}
    <div className="mb-6 rounded-lg border-2 border-dashed border-input bg-muted p-8 text-center text-sm text-muted-foreground">
      Drag & drop files here, or click to browse. Supports JPG, PNG, MP4.
    </div>

    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {mediaItems.map((item) => (
        <div key={item.id} className="group relative rounded-lg border border-border bg-card overflow-hidden">
          <img src={item.thumbnail} alt={item.title} className="aspect-square w-full object-cover" loading="lazy" />
          <div className="p-2">
            <p className="text-xs font-medium text-card-foreground truncate">{item.title}</p>
            <p className="text-xs text-muted-foreground">{item.event}</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity bg-card/80"
            aria-label="Delete"
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>
      ))}
    </div>
  </div>
);

export default AdminMedia;
