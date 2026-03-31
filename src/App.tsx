import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import PublicLayout from "@/components/layout/PublicLayout";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import AreasPage from "@/pages/AreasPage";
import ProgrammesPage from "@/pages/ProgrammesPage";
import NewsPage from "@/pages/NewsPage";
import EventsPage from "@/pages/EventsPage";
import PublicationsPage from "@/pages/PublicationsPage";
import MediaPage from "@/pages/MediaPage";
import ContactPage from "@/pages/ContactPage";
import CommemorationsPage from "@/pages/CommemorationsPage";
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminLayout from "@/pages/admin/AdminLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import AdminPages from "@/pages/admin/AdminPages";
import AdminNews from "@/pages/admin/AdminNews";
import AdminEvents from "@/pages/admin/AdminEvents";
import AdminPublications from "@/pages/admin/AdminPublications";
import AdminMedia from "@/pages/admin/AdminMedia";
import AdminUsers from "@/pages/admin/AdminUsers";
import AdminCommemorations from "@/pages/admin/Admin Commemorations";

import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/areas" element={<AreasPage />} />
            <Route path="/programmes" element={<ProgrammesPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/media" element={<MediaPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/commemorations" element={<CommemorationsPage />} />
          </Route>

          {/* Admin routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="pages" element={<AdminPages />} />
            <Route path="news" element={<AdminNews />} />
            <Route path="events" element={<AdminEvents />} />
            <Route path="publications" element={<AdminPublications />} />
            <Route path="media" element={<AdminMedia />} />
            <Route path="users" element={<AdminUsers />} />
            <Route path="commemorations" element={<AdminCommemorations/>} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
