"use client";
import React, { useEffect, useState, createContext, useContext } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";

/* -------------------------------------------------------------------------- */
/* CONTEXT (To share state between components)                                */
/* -------------------------------------------------------------------------- */

const NavbarContext = createContext({ isScrolled: false });

/* -------------------------------------------------------------------------- */
/* NAVBAR ROOT                                                                */
/* -------------------------------------------------------------------------- */

export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <NavbarContext.Provider value={{ isScrolled }}>
      <motion.nav
        layout
        className={cn(
          "fixed inset-x-0 top-4 z-50 mx-auto w-full px-4 transition-all duration-300 ease-in-out",
          isScrolled ? "max-w-2xl" : "max-w-5xl",
          className
        )}
      >
        {children}
      </motion.nav>
    </NavbarContext.Provider>
  );
};

/* -------------------------------------------------------------------------- */
/* NAV BODY (Updated for Transparency)                                        */
/* -------------------------------------------------------------------------- */

export const NavBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { isScrolled } = useContext(NavbarContext);

  return (
    <div
      className={cn(
        "relative flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300",
        // Logic: If Scrolled -> Solid Color & Border. If Top -> Transparent.
        isScrolled
          ? "bg-white border border-neutral-200 shadow-sm dark:bg-black dark:border-white/[0.2]"
          : "bg-transparent border-transparent shadow-none",
        className
      )}
    >
      {children}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* NAV ITEMS                                                                  */
/* -------------------------------------------------------------------------- */

export const NavItems = ({
  items,
  className,
}: {
  items: { name: string; link: string }[];
  className?: string;
}) => {
  return (
    <div className={cn("hidden items-center gap-6 md:flex", className)}>
      {items.map((item, idx) => (
        <Link
          key={`nav-item-${idx}`}
          href={item.link}
          className="text-sm font-medium text-neutral-600 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* NAV LOGO                                                                   */
/* -------------------------------------------------------------------------- */

export const NavbarLogo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="h-6 w-6 rounded-md bg-black dark:bg-white" />
      <span className="text-lg font-bold text-neutral-900 dark:text-white">
        Crypticonic Power
      </span>
    </Link>
  );
};

/* -------------------------------------------------------------------------- */
/* NAV BUTTON                                                                 */
/* -------------------------------------------------------------------------- */

interface NavbarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const NavbarButton = ({
  children,
  className,
  variant = "primary",
  ...props
}: NavbarButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
        variant === "primary"
          ? "bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200"
          : "bg-transparent text-neutral-600 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

/* -------------------------------------------------------------------------- */
/* MOBILE NAV                                                                 */
/* -------------------------------------------------------------------------- */

export const MobileNav = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("md:hidden", className)}>{children}</div>;
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
  className,
}: {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800",
        className
      )}
    >
      {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
    </button>
  );
};

export const MobileNavMenu = ({
  isOpen,
  onClose,
  children,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className={cn(
            "mt-2 flex flex-col gap-4 overflow-hidden rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl dark:border-white/[0.2] dark:bg-black",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};