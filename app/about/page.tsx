export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl text-green-600">
            Sobre EcoConecta Panama
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
      </div>
    </section>
  );
}
