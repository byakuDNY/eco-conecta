import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Recycle, Users } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
          EcoConecta Panamá
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Conectamos personas y empresas para dar nueva vida a los materiales
          reciclables. Juntos construimos un Panamá más sostenible.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/materiales">Explorar Materiales</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/auth/register">Registrarse</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">
        <Card className="p-6">
          <div className="mb-4">
            <Recycle className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Intercambio Fácil</h3>
          <p className="text-muted-foreground">
            Publica y encuentra materiales reciclables de forma sencilla.
            Conecta directamente con otros usuarios interesados.
          </p>
        </Card>

        <Card className="p-6">
          <div className="mb-4">
            <Users className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Comunidad Activa</h3>
          <p className="text-muted-foreground">
            Únete a una red creciente de ciudadanos y empresas comprometidos con
            la sostenibilidad en Panamá.
          </p>
        </Card>

        <Card className="p-6">
          <div className="mb-4">
            <Leaf className="w-12 h-12 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Impacto Ambiental</h3>
          <p className="text-muted-foreground">
            Contribuye a la economía circular y reduce el impacto ambiental
            dando nueva vida a los materiales.
          </p>
        </Card>
      </section>

      {/* Stats Section */}
      <section className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-8">Nuestro Impacto</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-4xl font-bold text-green-600">1,234</p>
            <p className="text-muted-foreground">Materiales Intercambiados</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600">567</p>
            <p className="text-muted-foreground">Usuarios Activos</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600">89</p>
            <p className="text-muted-foreground">Empresas Participantes</p>
          </div>
        </div>
      </section>
    </div>
  );
}
