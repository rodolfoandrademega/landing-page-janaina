const whatsapp = "https://wa.me/5582981513694";

export const bioData = {
  name: "Janaína Andrade",
  handle: "@esteticajanainaandrade",
  role: "Esteticista & Cosmetóloga",
  coverUrl: "/images/janaina-andrade.png",
  logoUrl: "/images/logo-janaina.png",
  bio: "Seu próximo cuidado começa aqui.",
  location: {
    address: "R. Dom Expedito Lopes, 126 — Centro, Surubim–PE, 55750-000",
    destination: "-7.8380813,-35.7579048",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=-7.8380813%2C-35.7579048",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.543119891444!2d-35.75790479999999!3d-7.8380813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7abdca3e57ee847%3A0x2ee5956171636aa8!2sR.%20Dom%20Expedito%20Lopes%2C%20126%20-%20Centro%2C%20Surubim%20-%20PE%2C%2055750-000!5e0!3m2!1spt-BR!2sbr!4v1791649179382!5m2!1spt-BR!2sbr",
  },
  rennove: {
    title: "Conheça a Rennove",
    subtitle: "Site em desenvolvimento",
  },
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
      url: "https://www.instagram.com/esteticajanainaandrade/",
    },
    {
      id: "location",
      title: "Como chegar",
      subtitle: "Veja o mapa e trace sua rota",
      url: "https://www.google.com/maps/search/?api=1&query=-7.8380813%2C-35.7579048",
    },
  ],
};
