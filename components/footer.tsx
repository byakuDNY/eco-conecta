import { Recycle, Facebook, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { href: "#", icon: <Facebook className="h-6 w-6" /> },
  { href: "#", icon: <Twitter className="h-6 w-6" /> },
  { href: "#", icon: <Instagram className="h-6 w-6" /> },
];

const quickLinks = [
  { href: "#how-it-works", label: "Sobre Nosotros" },
  { href: "#materials", label: "Materiales" },
  { href: "#about", label: "Chat" },
];

const resourcesLinks = [
  { href: "#", label: "Guía de Reciclaje" },
  { href: "#", label: "Blog" },
  { href: "#", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Recycle className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold">EcoExchange</span>
            </div>
            <p className="text-muted-foreground">
              Conectando personas y empresas para un Panamá más sostenible.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-muted-foreground"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-muted-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              {resourcesLinks.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="text-muted-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@ecoconecta.pa
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} EcoExchange. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
