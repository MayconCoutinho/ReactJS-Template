import { createContext, useState } from "react";

export const GlobalContext = createContext({});

export function GlobalProvider({ children }) {
  const [boasVindas, setBoasVindas] = useState(
    "Bem-vindo 👋 ao meu template React.js! 🎉 É uma estrutura organizada para desenvolver aplicativos web modernos. 🌐 Com pastas para componentes reutilizáveis, constantes, recursos globais, hooks, páginas, rotas, serviços e estilos, este modelo é um ponto de partida sólido para seu projeto. 💪 Personalize-o para atender às suas necessidades específicas. 🚀 Espero que ajude você a construir aplicativos incríveis!"
  );

  return (
    <GlobalContext.Provider value={{ boasVindas, setBoasVindas }}>
      {children}
    </GlobalContext.Provider>
  );
}
