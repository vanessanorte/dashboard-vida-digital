import React from "react";
import Card from "./Card";
import { 
  Mail, 
  Globe, 
  Folder, 
  Instagram, 
  Clock, 
  Download, 
  AppWindow, 
  MessageCircle, 
  HeartPulse 
} from "lucide-react";

const cards = [
  {
    title: "E-mails não lidos",
    value: 42,
    icon: <Mail className="w-8 h-8 text-white" />,
    color: "bg-blue-500",
  },
  {
    title: "Abas abertas",
    value: 12,
    icon: <Globe className="w-8 h-8 text-white" />,
    color: "bg-red-500",
  },
  {
    title: "Arquivos no Drive",
    value: 158,
    icon: <Folder className="w-8 h-8 text-white" />,
    color: "bg-green-500",
  },
  {
    title: "Posts no Insta",
    value: 87,
    icon: <Instagram className="w-8 h-8 text-white" />,
    color: "bg-pink-500",
  },
  {
    title: "Tempo de tela hoje",
    value: "6h 37min",
    icon: <Clock className="w-8 h-8 text-white" />,
    color: "bg-yellow-500",
  },
  {
    title: "Arquivos baixados",
    value: 24,
    icon: <Download className="w-8 h-8 text-white" />,
    color: "bg-indigo-500",
  },
  {
    title: "Apps abertos",
    value: 8,
    icon: <AppWindow className="w-8 h-8 text-white" />,
    color: "bg-teal-500",
  },
  {
    title: "Mensagens WhatsApp",
    value: 15,
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    color: "bg-lime-600",
  },
  {
    title: "Check-ins saúde",
    value: 2,
    icon: <HeartPulse className="w-8 h-8 text-white" />,
    color: "bg-rose-500",
  },
];

const DashboardVidaDigital = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default DashboardVidaDigital;
