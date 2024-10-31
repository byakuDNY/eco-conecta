import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Leaf,
  Recycle,
  Users,
  TruckIcon,
  HandshakeIcon,
  LeafIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const steps = [
    {
      title: "Registra tus Materiales",
      description:
        "Lista los materiales reciclables que tienes disponibles para intercambiar.",
      icon: Recycle,
    },
    {
      title: "Conecta",
      description:
        "Encuentra personas u organizaciones interesadas en tus materiales.",
      icon: HandshakeIcon,
    },
    {
      title: "Coordina",
      description: "Organiza la entrega o recogida de los materiales.",
      icon: TruckIcon,
    },
    {
      title: "Contribuye",
      description:
        "Ayuda al medio ambiente y forma parte de la economía circular.",
      icon: LeafIcon,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="block">Intercambia y Reutiliza</span>
          <span className="block text-green-600">Materiales Reciclables</span>
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

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              ¿Cómo Funciona?
            </h2>
            <p className="mt-4 text-lg">
              Cuatro simples pasos para comenzar a intercambiar materiales
              reciclables
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4">
                    <step.icon className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
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
