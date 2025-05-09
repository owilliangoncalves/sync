import { Section } from "../../ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";
import Link from "next/link";
import { ReactNode } from "react";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Perguntas e Respostas",
  items = [
    {
      question:
        "Por que dedicar algo que os dados estão públicos?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Hoje existem muitos dados que estão disponíveis na internet, mas acreditamos que o modo como são visualizados precisam ser melhorado.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Sync te ajuda nessa visualização de dados
          </p>
        </>
      ),
    },
    {
      question: "O projeto é OpenSource?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum sapien id justo aliquam, non lobortis quam pharetra. Curabitur pulvinar nulla metus, in imperdiet dui euismod eu. Donec vitae tincidunt orci, sit amet dictum nisi. Vestibulum pellentesque nunc sapien, sed commodo libero euismod eget. Morbi laoreet mi vulputate, tincidunt nunc.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat, neque eu congue consectetur, quam purus dignissim neque, eu dapibus dui sem non dui. Nullam interdum eu tortor ac scelerisque.
          </p>
        </>
      ),
    },
    {
      question:
        "Como contribuir com projeto?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta mauris id leo maximus, quis hendrerit nulla porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ullamcorper, enim sit amet malesuada facilisis, diam quam.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta mauris id leo maximus, quis hendrerit nulla porttitor.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Donec vitae tincidunt orci, sit amet dictum nisi. Vestibulum pellentesque nunc sapien, sed commodo libero euismod eget. Morbi laoreet mi vulputate, tincidunt nunc.
          </p>
        </>
      ),
    },
    {
      question: "Tem a versão paga?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta mauris id leo maximus, quis hendrerit nulla porttitor.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta mauris id leo maximus, quis hendrerit nulla porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi ullamcorper, enim sit amet malesuada facilisis, diam quam.
          </p>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Veja os valores{" "}
            <Link href="/pricing" className="text-foreground underline">
              preço de banana
            </Link>
            .
          </p>
        </>
      ),
    }
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
