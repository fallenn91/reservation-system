export default function AvisoLegal() {
    return (
        <div className="w-full h-full">
            <div className="flex flex-col w-full h-full my-24 p-4 md:p-12 justify-center items-center text-justify">
                <h1 className="text-2xl font-bold mb-4 md:text-3xl text-[var(--gold)]">Aviso Legal</h1>
                <div className="glassmorphForm w-full md:w-[80%] h-full p-12 text-[var(--white)] rounded-lg">
                <p>
                    <strong>Identificación del Responsable:</strong><br />
                    - Nombre o Razón Social: TheDiloFitness<br />
                    - Correo Electrónico: thedilofitness1@gmail.com<br /><br />

                    <strong>Objeto:</strong><br />
                    El presente aviso legal regula el uso de los servicios y del sitio web propuesto por TheDiloFitness.<br /><br />

                    <strong>Propiedad Intelectual e Industrial: </strong><br />
                    Todos los derechos de propiedad intelectual del contenido de este sitio web y su diseño gráfico corresponden de forma exclusiva a TheDiloFitness y quedan estrictamente prohibida la reproducción, distribución, comunicación pública y transformación de los mismos sin contar con la autorización explícita de sus titulares.
                </p>
                </div>
            </div>
        </div>
    );
};
