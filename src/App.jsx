import React, {useState} from "react";
import profileImage from './assets/HackNet.jpeg';
import linkedinIcon from './assets/icons8-linkedin.svg';
import githubIcon from './assets/icons8-github.svg';
import youtubeIcon from './assets/icons8-youtube.svg';
import { Link } from "react-router-dom"; // Importa Link
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="flex h-screen text-white bg-zinc-900">
      <aside className="w-60 bg-zinc-800 border-r border-green-500 flex flex-col items-center p-6">
        <img src={profileImage} alt="Profile" className="w-24 h-24 rounded-full mb-6" />
        <nav className="flex flex-col gap-6 text-lg">
          <Link to="/" className="hover:text-green-500">Home</Link>
          <Link to="/writeup" className="hover:text-green-500">Writeup</Link>
          <Link to="/apuntes" className="hover:text-green-500">Apuntes</Link>
        </nav>
        <div className="flex gap-4 mt-auto mb-4">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" className="w-8 h-8 hover:scale-110 transition-transform duration-200" />
          </a>
        </div>
      </aside>
      <main className="flex-1 p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/writeup" element={<Writeup />} />
          <Route path="/apuntes" element={<Apuntes />} />
        </Routes>
      </main>
    </div>
  );
}

function Home() {
  return <main className="flex-1 p-10">
  <h1 className="text-2xl border-b-2 border-green-500 inline-block mb-8">Home</h1>
  <section>
    <h2 className="text-3xl mb-4">Whoami <span role="img" aria-label="wave">👋</span></h2>
    <p className="mb-4">
      Hola, soy Agustín, Analista de Sistemas con un fuerte interés en la seguridad informática.
      Actualmente me estoy especializando en este apasionante campo, combinando teoría y práctica
      para desarrollar habilidades sólidas.
    </p>
    <p className="mb-4">
      En este sitio compartiré writeups de las máquinas que voy resolviendo, junto con apuntes
      y materiales de estudio de distintos cursos.
    </p>
    <p>
      Mi objetivo es desarrollarme como especialista en ciberseguridad ofensiva, participando
      en proyectos que representen desafíos reales y fomenten la mejora continua.
    </p>
  </section>
</main>
}


function Writeup() {
  const [selectedMachine, setSelectedMachine] = useState(null); // Máquina seleccionada
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado del modal
  const [isWriteupOpen, setIsWriteupOpen] = useState(false); // Estado del modal del writeup escrito

  const writeups = [
    {
      category: "HackTheBox",
      machines: [
        { id: 1, title: "Máquina 1: HackTheBox", video: "https://www.youtube.com/embed/video1", dificulty: "easy", writeup: "Este es el writeup de la Máquina 1 de HackTheBox." },
        { id: 2, title: "Máquina 2: HackTheBox", video: "https://www.youtube.com/embed/video2", dificulty: "medium", writeup: "Este es el writeup de la Máquina 2 de HackTheBox." },
      ],
    },
    {
      category: "TryHackMe",
      machines: [
        { id: 3, title: "Máquina 1: TryHackMe", video: "https://www.youtube.com/embed/video3", dificulty: "easy", writeup: "Este es el writeup de la Máquina 1 de TryHackMe." },
        { id: 4, title: "Máquina 2: TryHackMe", video: "https://www.youtube.com/embed/video4", dificulty: "easy", writeup: "Este es el writeup de la Máquina 2 de TryHackMe." },
      ],
    },
  ];

  const openModal = (machine) => {
    setSelectedMachine(machine);
    setIsModalOpen(true);
  };

  const openWriteupModal = (machine) => {
    setSelectedMachine(machine);
    setIsWriteupOpen(true);
  };

  const closeModal = () => {
    setSelectedMachine(null);
    setIsModalOpen(false);
    setIsWriteupOpen(false);
  };

  return (
    <div>
      <h1 className="text-3xl border-b-2 border-green-500 mb-6">Writeups</h1>
      <ul className="space-y-6">
        {writeups.map((category, index) => (
          <li key={index} className="p-4 bg-zinc-800 rounded-lg shadow-md">
            <details className="group">
              <summary className="cursor-pointer text-xl font-semibold text-green-400 hover:text-green-500 transition-colors duration-200">
                {category.category}
              </summary>
              <ul className="mt-4 ml-6 space-y-2 border-l-2 border-green-500 pl-4">
                {category.machines.map((machine) => (
                  <li key={machine.id} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-lg text-green-300">{machine.title}</span>
                      <span className="text-sm text-gray-400">Dificultad: {machine.dificulty}</span>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => openModal(machine)}
                        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200"
                      >
                        Ver Video
                      </button>
                      <button
                        onClick={() => openWriteupModal(machine)}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
                      >
                        Leer Writeup
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ))}
      </ul>

      {/* Modal de Video */}
      {isModalOpen && selectedMachine && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl text-green-500 mb-4">{selectedMachine.title}</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={selectedMachine.video}
                title={selectedMachine.title}
                className="w-full h-full rounded"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors duration-200"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}

      {/* Modal de Writeup */}
      {isWriteupOpen && selectedMachine && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-zinc-900 p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl text-green-500 mb-4">{selectedMachine.title}</h2>
            <p className="text-white mb-4">{selectedMachine.writeup}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Apuntes() {
  return (
    <div>
      <h1>Esta es la página de Apuntes</h1>
      <p>Aquí puedes agregar contenido relacionado con tus apuntes.</p>
    </div>
  );
}