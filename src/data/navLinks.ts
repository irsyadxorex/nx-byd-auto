export interface NavLink {
  name: string;
  href: string;
  section: string;
}

export const navLinks: NavLink[] = [
  { name: "Tentang Kami", href: "#about", section: "about" },
  { name: "Model", href: "#models", section: "models" },
  { name: "Promo", href: "#promo", section: "promo" },
  { name: "Test Drive", href: "#test-drive", section: "test-drive" },
  { name: "Lokasi", href: "#location", section: "location" },
];
