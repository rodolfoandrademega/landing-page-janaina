const whatsapp = "https://wa.me/5582981513694";

export const bioData = {
  name: "Janaína Andrade",
  handle: "@janaina.estetica",
  role: "Esteticista & Cosmetóloga",
  coverUrl: "/images/janaina-andrade.png",
  logoUrl: "/images/logo-janaina.png",
  bio: "Seu próximo cuidado começa aqui.",
  featuredLink: {
    title: "Agendar meu atendimento",
    subtitle: "Escolha seu horário pelo WhatsApp",
    url: `${whatsapp}?text=${encodeURIComponent("Olá, Janaína! Gostaria de agendar um atendimento. Quais horários estão disponíveis?")}`,
  },
  links: [
    {
      id: "procedures",
      title: "Conhecer os procedimentos",
      subtitle: "Cuidados faciais, protocolos e valores",
      url: `${whatsapp}?text=${encodeURIComponent("Olá, Janaína! Gostaria de conhecer os procedimentos disponíveis e os valores.")}`,
    },
    {
      id: "instagram",
      title: "Acompanhar no Instagram",
      subtitle: "Dicas, cuidados e novidades",
      url: "https://instagram.com/janaina.estetica",
    },
    {
      id: "location",
      title: "Como chegar",
      subtitle: "Solicite a localização do consultório",
      url: `${whatsapp}?text=${encodeURIComponent("Olá, Janaína! Pode me enviar a localização do consultório?")}`,
    },
  ],
};
