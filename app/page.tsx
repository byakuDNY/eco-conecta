import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Recycle, Users, TruckIcon, HandshakeIcon } from "lucide-react";
import Link from "next/link";

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
    icon: Leaf,
  },
];

const featureData = [
  {
    icon: Recycle,
    title: "Intercambio Fácil",
    description:
      "Publica y encuentra materiales reciclables de forma sencilla. Conecta directamente con otros usuarios interesados.",
  },
  {
    icon: Users,
    title: "Comunidad Activa",
    description:
      "Únete a una red creciente de ciudadanos y empresas comprometidos con la sostenibilidad en Panamá.",
  },
  {
    icon: Leaf,
    title: "Impacto Ambiental",
    description:
      "Contribuye a la economía circular y reduce el impacto ambiental dando nueva vida a los materiales.",
  },
];

const stats = [
  {
    value: "1,000+",
    label: "Usuarios Activos",
  },
  {
    value: "50,000 kg",
    label: "Materiales Reciclados",
  },
  {
    value: "15+",
    label: "Ciudades",
  },
  {
    value: "98%",
    label: "Satisfacción",
  },
];

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="p-6">
    <div className="mb-4">
      <Icon className="w-12 h-12 text-green-600" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </Card>
);

export default function Home() {
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
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>

      {/* How It Works Section */}
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

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <FeatureCard
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-8">Nuestro Impacto</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-bold text-green-600">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
