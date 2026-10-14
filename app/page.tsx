import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/*
        As demais seções (O Escritório, Áreas de Atuação, Situações,
        Avaliações, Quem Conduz o Caso, Método, Valores, Onde Atendemos,
        FAQ, Contato, Rodapé) permanecem na versão estática aprovada
        (branch legacy-static-site / tag v1-static-site-backup) até
        serem redesenhadas em etapas futuras, uma a uma, com o mesmo
        padrão SITE PRO. Nada foi removido — apenas ainda não migrado.
      */}
    </>
  );
}
