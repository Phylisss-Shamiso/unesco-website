const AdminPages = () => (
  <div>
    <h1 className="text-2xl font-bold text-foreground mb-6">Pages Management</h1>
    <div className="rounded-lg border border-border bg-card overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            <th className="text-left p-3 font-medium text-muted-foreground">Page</th>
            <th className="text-left p-3 font-medium text-muted-foreground hidden sm:table-cell">Status</th>
            <th className="text-left p-3 font-medium text-muted-foreground hidden md:table-cell">Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {["Home", "About Us", "Areas of Competence", "Contact"].map((page, i) => (
            <tr key={page} className="border-b border-border last:border-0">
              <td className="p-3 text-card-foreground font-medium">{page}</td>
              <td className="p-3 hidden sm:table-cell"><span className="text-xs bg-green-100 text-green-700 rounded px-2 py-0.5">Published</span></td>
              <td className="p-3 text-muted-foreground hidden md:table-cell">{`${15 - i} Nov 2024`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AdminPages;
