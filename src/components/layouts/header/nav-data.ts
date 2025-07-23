export type NavItem = {
  label: string;
  path: string;
};

export const navData: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/#about" },
  { label: "Products", path: "/#products" },
  { label: "Why Invest", path: "/#invest" },
  { label: "Contact Us", path: "/#contact" },
];
