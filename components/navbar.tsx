"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Recycle } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Inicio",
      active: pathname === "/",
    },
    {
      href: "/materiales",
      label: "Materiales",
      active: pathname === "/materiales",
    },
    {
      href: "/chat",
      label: "Chat",
      active: pathname === "/chat",
    },
  ];

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Recycle className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl">EcoConecta</span>
            </Link>
            <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  asChild
                  variant="ghost"
                  className={cn(
                    "text-sm font-medium transition-colors",
                    route.active
                      ? "text-black dark:text-white"
                      : "text-muted-foreground"
                  )}
                >
                  <Link href={route.href}>{route.label}</Link>
                </Button>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/auth/login">Iniciar Sesión</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/auth/register">Registrarse</Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
