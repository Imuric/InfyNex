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

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Features", link: "#features" },
    { name: "Clients", link: "#products" },
    { name: "About", link: "#about" },
  ];

  return (
    // Note: We don't need the outer div "relative w-full" here because 
    // the NavRoot is already fixed/sticky.
    <NavRoot>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="hidden items-center gap-4 md:flex">
          <NavbarButton variant="secondary">Contact</NavbarButton>
          <NavbarButton variant="primary">Get Quote</NavbarButton>
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
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white"
            >
              <span className="block p-2">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-2 pt-2">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="secondary"
              className="w-full justify-center"
            >
              Contact
            </NavbarButton>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
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