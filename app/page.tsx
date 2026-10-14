import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EditorialCards from "@/components/EditorialCards";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <EditorialCards />
      {/*
        As demais seções (Situações, Avaliações, Quem Conduz o Caso,
        Método, Valores, Onde Atendemos, FAQ, Contato, Rodapé, e a
        seção completa de Áreas de Atuação com as 4 frentes) permanecem
        na versão estática aprovada (branch legacy-static-site / tag
        v1-static-site-backup) até serem redesenhadas em etapas futuras,
        uma a uma, com o mesmo padrão SITE PRO. Nada foi removido —
        apenas ainda não migrado.
      */}
    </>
  );
}
