"use client";
import {
  Navbar as NavRoot,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },
    { name: "Sourcing", link: "/sourcing" },
    { name: "About", link: "/about" },
  ];

  return (
    // Note: We don't need the outer div "relative w-full" here because 
    // the NavRoot is already fixed/sticky.
    <NavRoot>
      {/* Desktop Navigation */}
      <NavBody>
        <Link href="/" className="flex items-center">
          <NavbarLogo />
        </Link>
        <NavItems items={navItems} />
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/contact">
            <NavbarButton variant="secondary">Contact</NavbarButton>
          </Link>
          <Link href="/contact">
            <NavbarButton variant="primary">Get Quote</NavbarButton>
          </Link>
        </div>

        {/* Mobile Toggle (Hidden on Desktop) */}
        <div className="md:hidden">
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
        </div>
      </NavBody>

      {/* Mobile Navigation Menu */}
      <MobileNav>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
            >
              <span className="block p-2">{item.name}</span>
            </Link>
          ))}
          <div className="flex w-full flex-col gap-2 pt-2">
            <NavbarButton
              onClick={() => {
                setIsMobileMenuOpen(false);
                router.push("/contact");
              }}
              variant="secondary"
              className="w-full justify-center"
            >
              Contact
            </NavbarButton>
            <NavbarButton
              onClick={() => {
                setIsMobileMenuOpen(false);
                router.push("/contact");
              }}
              variant="primary"
              className="w-full justify-center"
            >
              Get Quote
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </NavRoot>
  );
}