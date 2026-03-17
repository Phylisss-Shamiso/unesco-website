export interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

export interface EventItem {
  id: number;
  title: string;
  description: string;
  date: string;
  endDate?: string;
  location: string;
  image: string;
  type: string;
}

export interface Programme {
  id: number;
  title: string;
  description: string;
  sector: string;
  status: "ongoing" | "completed" | "upcoming";
  image: string;
  startDate: string;
  endDate?: string;
}

export interface Publication {
  id: number;
  title: string;
  description: string;
  category: string;
  fileUrl: string;
  fileType: string;
  date: string;
  thumbnail: string;
}

export interface MediaItem {
  id: number;
  title: string;
  type: "image" | "video";
  url: string;
  thumbnail: string;
  date: string;
  event: string;
}

export interface Sector {
  id: number;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export const sectors: Sector[] = [
  { id: 1, title: "Education", description: "Promoting inclusive, quality education and lifelong learning for all Zimbabweans.", icon: "GraduationCap", slug: "education" },
  { id: 2, title: "Natural Sciences", description: "Advancing scientific cooperation and environmental sustainability across the region.", icon: "Microscope", slug: "natural-sciences" },
  { id: 3, title: "Social & Human Sciences", description: "Fostering social inclusion, human rights, and ethical governance frameworks.", icon: "Users", slug: "social-human-sciences" },
  { id: 4, title: "Culture", description: "Safeguarding cultural heritage and promoting creative diversity in Zimbabwe.", icon: "Landmark", slug: "culture" },
  { id: 5, title: "Communication & Information", description: "Championing press freedom, media literacy, and access to information.", icon: "Radio", slug: "communication-information" },
];

export const newsItems: NewsItem[] = [
  { id: 1, title: "Zimbabwe Hosts Regional UNESCO Education Forum 2024", excerpt: "Over 200 delegates gather in Harare to discuss the future of education in Southern Africa.", content: "", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80", date: "2024-11-15", category: "Education", author: "ZNCU Secretariat" },
  { id: 2, title: "Great Zimbabwe World Heritage Site Conservation Update", excerpt: "New preservation efforts launched to protect one of Africa's most significant archaeological sites.", content: "", image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80", date: "2024-11-10", category: "Culture", author: "Heritage Division" },
  { id: 3, title: "World Press Freedom Day Celebrations in Harare", excerpt: "Journalists and media practitioners mark the importance of press freedom in democratic societies.", content: "", image: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&q=80", date: "2024-05-03", category: "Communication", author: "ZNCU Media Unit" },
  { id: 4, title: "Youth Innovation Lab Launches Across Five Provinces", excerpt: "A new initiative brings STEM education to underserved communities throughout Zimbabwe.", content: "", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", date: "2024-10-22", category: "Science", author: "Science Division" },
  { id: 5, title: "International Day for Biodiversity Marked in Zimbabwe", excerpt: "Activities highlight Zimbabwe's rich biodiversity and conservation challenges ahead.", content: "", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80", date: "2024-05-22", category: "Natural Sciences", author: "ZNCU Secretariat" },
  { id: 6, title: "New Partnerships for Inclusive Education Initiatives", excerpt: "Collaboration with international organizations to improve education access for vulnerable groups.", content: "", image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80", date: "2024-09-15", category: "Education", author: "Education Division" },
];

export const events: EventItem[] = [
  { id: 1, title: "National Education Stakeholders Conference", description: "Annual gathering of educators, policymakers, and civil society to shape education policy.", date: "2025-02-15", location: "Harare International Conference Centre", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80", type: "Conference" },
  { id: 2, title: "World Heritage Day Celebrations", description: "Celebrating Zimbabwe's rich cultural and natural heritage sites.", date: "2025-04-18", location: "Great Zimbabwe National Monument", image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80", type: "Commemoration" },
  { id: 3, title: "World Press Freedom Day", description: "Promoting and defending press freedom across the region.", date: "2025-05-03", location: "Rainbow Towers, Harare", image: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&q=80", type: "International Day" },
  { id: 4, title: "Science & Innovation Week", description: "Showcasing youth-led scientific innovations from across Zimbabwe.", date: "2025-06-10", endDate: "2025-06-14", location: "University of Zimbabwe", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80", type: "Exhibition" },
];

export const programmes: Programme[] = [
  { id: 1, title: "Education 2030 Zimbabwe", description: "Supporting the national implementation of SDG 4 - ensuring inclusive and equitable quality education.", sector: "Education", status: "ongoing", image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80", startDate: "2020-01-01" },
  { id: 2, title: "Cultural Heritage Mapping Initiative", description: "Comprehensive documentation of tangible and intangible cultural heritage across all provinces.", sector: "Culture", status: "ongoing", image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80", startDate: "2022-03-01" },
  { id: 3, title: "STEM for Girls Programme", description: "Encouraging female participation in science, technology, engineering and mathematics fields.", sector: "Natural Sciences", status: "ongoing", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80", startDate: "2021-06-01" },
  { id: 4, title: "Media Literacy for Youth", description: "Building digital and media literacy skills among Zimbabwean youth.", sector: "Communication & Information", status: "ongoing", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", startDate: "2023-01-01" },
  { id: 5, title: "Biodiversity Assessment Project", description: "National assessment of biodiversity hotspots and conservation priorities.", sector: "Natural Sciences", status: "completed", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80", startDate: "2019-01-01", endDate: "2023-12-31" },
  { id: 6, title: "Social Inclusion Research Initiative", description: "Research on policies promoting social cohesion and inclusion for marginalized communities.", sector: "Social & Human Sciences", status: "upcoming", image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80", startDate: "2025-04-01" },
];

export const publications: Publication[] = [
  { id: 1, title: "Annual Report 2023-2024", description: "Comprehensive overview of ZNCU activities and achievements.", category: "Reports", fileUrl: "#", fileType: "PDF", date: "2024-06-30", thumbnail: "https://images.unsplash.com/photo-1568667256549-094345857637?w=400&q=80" },
  { id: 2, title: "Education Sector Policy Brief", description: "Analysis of current education challenges and policy recommendations.", category: "Policy Briefs", fileUrl: "#", fileType: "PDF", date: "2024-03-15", thumbnail: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&q=80" },
  { id: 3, title: "Cultural Heritage Atlas of Zimbabwe", description: "Visual guide to Zimbabwe's registered heritage sites and monuments.", category: "Publications", fileUrl: "#", fileType: "PDF", date: "2023-12-01", thumbnail: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400&q=80" },
  { id: 4, title: "Press Freedom Index: Zimbabwe 2024", description: "Assessment of press freedom conditions in the country.", category: "Reports", fileUrl: "#", fileType: "PDF", date: "2024-05-03", thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&q=80" },
  { id: 5, title: "STEM Education Guidelines for Schools", description: "Framework for integrating STEM education in secondary schools.", category: "Guidelines", fileUrl: "#", fileType: "PDF", date: "2024-01-20", thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80" },
];

export const mediaItems: MediaItem[] = [
  { id: 1, title: "Education Forum 2024 Opening Ceremony", type: "image", url: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80", thumbnail: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&q=80", date: "2024-11-15", event: "Education Forum" },
  { id: 2, title: "Great Zimbabwe Conservation Works", type: "image", url: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&q=80", thumbnail: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=400&q=80", date: "2024-10-20", event: "Heritage Conservation" },
  { id: 3, title: "Youth Innovation Lab Launch", type: "image", url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80", date: "2024-10-22", event: "Innovation Lab" },
  { id: 4, title: "World Press Freedom Day Harare", type: "image", url: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=800&q=80", thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168d6c?w=400&q=80", date: "2024-05-03", event: "Press Freedom Day" },
  { id: 5, title: "Biodiversity Day Activities", type: "image", url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80", thumbnail: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&q=80", date: "2024-05-22", event: "Biodiversity Day" },
  { id: 6, title: "STEM Girls Programme Workshop", type: "image", url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80", thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", date: "2024-09-10", event: "STEM for Girls" },
  { id: 7, title: "Rural Education Outreach", type: "image", url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80", thumbnail: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80", date: "2024-08-05", event: "Education Outreach" },
  { id: 8, title: "Cultural Festival Highlights", type: "image", url: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80", thumbnail: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=400&q=80", date: "2024-07-15", event: "Cultural Festival" },
];
