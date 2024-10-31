import { Recycle, Facebook, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" border-t">
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
              <Link href="#" className="text-muted-foreground">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#how-it-works" className="text-muted-foreground">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#materials" className="text-muted-foreground">
                  Materiales
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground">
                  Chat
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground">
                  Guía de Reciclaje
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@ecoexchange.pa
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
