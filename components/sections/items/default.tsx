import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import { Item, ItemIcon, ItemTitle, ItemDescription } from "../../ui/item";
import { Section } from "../../ui/section";
import { ReactNode } from "react";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Tudo o que você precisa. Tudo em um só lugar.",
  items = [
    {
      title: "Acessibilidade em primeiro lugar",
      description: "Seguimos complemente as regras da WCAG 2.0. Site feito com as melhores práticas.",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "Design Responsivo",
      description: "Não importa se é no computador ou no celular",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Light e dark mode",
      description:
        "Claro ou escuro? Pra gente tanto faz!",
      icon: <EclipseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Fácil de visualizar",
      description: "Aqui tudo é feito para ser fácil",
      icon: <BlocksIcon className="size-5 stroke-1" />,
    },
    {
      title: "Rápido",
      description: "Usamos o que existe de melhor para que seja rápido",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Crie seus projetos",
      description: "Disponibilizamos os dados tratados para seu projeto",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
    {
      title: "Disponível em outras línguas",
      description:
        "Vamos ajudar nossos amigos gringos a se protegerem",
      icon: <LanguagesIcon className="size-5 stroke-1" />,
    },
    {
      title: "Tome notas",
      description:
        "Busque por um local desconhecido e anote os principais perigos",
      icon: <SquarePenIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
