export const procedures = [
  { id: "limpeza-pele", name: "Limpeza de pele profunda", label: "CUIDADO FACIAL", description: "Um momento dedicado ao cuidado da sua pele.", image: "/images/limpeza-pele.jpg", alt: "Imagem ilustrativa de aplicação de máscara facial" },
  { id: "melan-off", name: "Melan Off", label: "PROTOCOLO ESTÉTICO", description: "Conheça o protocolo e converse sobre os objetivos da sua pele.", image: "/images/melan-off.jpg", alt: "Imagem ilustrativa de cuidado facial em uma clínica de estética" },
  { id: "drenagem", name: "Drenagem", label: "CUIDADO CORPORAL", description: "Reserve um tempo para cuidar de você e do seu corpo.", image: "/images/drenagem.jpg", alt: "Imagem ilustrativa de massagem na região abdominal" },
  { id: "metodo-ja", name: "Método JA", label: "CONHEÇA O MÉTODO", description: "Descubra com Janaína como funciona o Método JA.", image: "/images/metodo-ja.jpg", alt: "Imagem ilustrativa de atendimento de bem-estar corporal" },
  { id: "strioff", name: "Strioff", label: "PROTOCOLO ESTÉTICO", description: "Saiba mais sobre o protocolo, as sessões e os cuidados.", image: "/images/strioff.jpg", alt: "Imagem ilustrativa de cuidado com a pele do corpo" },
] as const;

export function procedureContactUrl(name: string) {
  return `https://wa.me/5582981513694?text=${encodeURIComponent(`Olá, Janaína! Gostaria de saber mais sobre ${name}, os valores e os horários disponíveis.`)}`;
}
