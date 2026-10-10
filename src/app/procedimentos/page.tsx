import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Janaína Andrade | Agendamentos e procedimentos",
  description: "Agende seu atendimento, conheça os procedimentos e fale diretamente com Janaína Andrade.",
};

export default function ProceduresPage() {
  return <Home />;
}
