"use client";

import React from "react";
import { FloatingNav } from "../components/ui/floatingNav";
import { IconHome, IconServicemark, IconUser } from "@tabler/icons-react";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Services",
      link: "#services",
      icon: (
        <IconServicemark className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
      <FloatingNav navItems={navItems} />
  );
}