import { Card } from "@/components/ui/card";
import { Leaf, Users, Globe, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1,000+",
    label: "Usuarios Activos",
  },
  {
    icon: Leaf,
    value: "50,000 kg",
    label: "Materiales Reciclados",
  },
  {
    icon: Globe,
    value: "15+",
    label: "Ciudades",
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfacción",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-green-600">
            Sobre EcoExchange
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-muted-foreground">
            Somos una plataforma innovadora que conecta personas y empresas
            comprometidas con la sostenibilidad y el reciclaje en Panamá.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground">
                Facilitar y promover el intercambio eficiente de materiales
                reciclables entre individuos y empresas, contribuyendo a la
                reducción de residuos y al desarrollo de una economía circular
                en Panamá.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground">
                Ser la plataforma líder en Panamá para el intercambio de
                materiales reciclables, creando un impacto positivo en el medio
                ambiente y fomentando prácticas sostenibles en la comunidad.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  <stat.icon className="h-8 w-8 text-green-600" />
                </div>
                <p className="mt-4 text-3xl font-extrabold">{stat.value}</p>
                <p className="mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg p-8 mt-16 bg-muted">
          <h3 className="text-2xl font-bold mb-4">¿Por qué EcoExchange?</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="p-6">
              <h4 className="text-lg font-semibold mb-2">Fácil de Usar</h4>
              <p className="text-muted-foreground">
                Interfaz intuitiva que facilita el proceso de intercambio de
                materiales.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="text-lg font-semibold mb-2">Comunidad Activa</h4>
              <p className="text-muted-foreground">
                Red creciente de usuarios comprometidos con el reciclaje.
              </p>
            </Card>
            <Card className="p-6">
              <h4 className="text-lg font-semibold mb-2">Impacto Real</h4>
              <p className="text-muted-foreground">
                Contribución directa a la reducción de residuos en Panamá.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
