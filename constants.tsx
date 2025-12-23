
import React from 'react';
import { ShieldCheck, HeartPulse, UserCheck, Award } from 'lucide-react';
import { BeforeAfterPair, GalleryItem } from './types.ts';

export const EXPERT_NAME = "Klaus Steyllon Santos";
export const INSTAGRAM_URL = "https://www.instagram.com/klausteyllon/";

export const IMAGES = {
  hero: "https://i.imgur.com/SZX6aL1.png",
  backstage: [
    "https://i.imgur.com/3p7T9n5.jpeg",
    "https://i.imgur.com/RLUEv80.png",
    "https://i.imgur.com/BM6a1TY.png"
  ],
  socialProof: [
    "https://i.imgur.com/qLGFp2X.png",
    "https://i.imgur.com/bClLUiw.png",
    "https://i.imgur.com/jh2Iqmy.png"
  ],
  kids: [
    "https://i.imgur.com/VeMNUTh.png",
    "https://i.imgur.com/FFG9au0.png",
    "https://i.imgur.com/nZF8wu1.png",
    "https://i.imgur.com/e8VfgKR.png",
    "https://i.imgur.com/1q377sV.png"
  ]
};

export const BEFORE_AFTER_PAIRS: BeforeAfterPair[] = [
  {
    before: "https://i.imgur.com/iaGQt6W.png",
    after: "https://i.imgur.com/xU9KW6j.png",
    title: "Transformação Estética I"
  },
  {
    before: "https://i.imgur.com/uTOC5pj.png",
    after: "https://i.imgur.com/KYqehFv.png",
    title: "Transformação Estética II"
  }
];

export const FEATURES = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    title: "Avaliação Honesta",
    description: "Sem tratamentos desnecessários. Clareza total sobre o que você realmente precisa."
  },
  {
    icon: <UserCheck className="w-8 h-8 text-indigo-600" />,
    title: "Atendimento Exclusivo",
    description: "Você não é apenas mais um. O atendimento é feito 100% por mim, do início ao fim."
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-indigo-600" />,
    title: "Odontologia Sem Medo",
    description: "Técnicas modernas e acolhedoras para garantir o máximo de conforto, inclusive para crianças."
  },
  {
    icon: <Award className="w-8 h-8 text-indigo-600" />,
    title: "Autoridade Técnica",
    description: "Professor, Mestre e Presidente de Comissão no CRO-RN. Ciência aplicada ao seu sorriso."
  }
];

export const STEPS = [
  {
    number: "01",
    title: "Contato Inicial",
    description: "Clique no botão e fale comigo diretamente via Instagram para tirar suas dúvidas."
  },
  {
    number: "02",
    title: "Agendamento",
    description: "Escolheremos o melhor horário para sua primeira consulta gratuita e sem compromisso."
  },
  {
    number: "03",
    title: "Avaliação Premium",
    description: "No consultório, faremos um diagnóstico completo e personalizado para o seu caso."
  }
];