import { Section } from "../../ui/section";
import { User, Users } from "lucide-react";
import { siteConfig } from "@/config/site";
import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { cn } from "@/lib/utils";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  description = "Quisque porta mauris id leo maximus, quis hendrerit nulla porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  plans = [
    {
      name: "Grátis",
      description: "Pra todo mundo",
      price: 0,
      priceNote: "Grátis e de código aberto.",
      cta: {
        variant: "glow",
        label: "Acesse",
        href: "/docs/getting-started/introduction",
      },
      features: [
        "Proin ut feugiat nulla.",
        "Ultrices risu",
        "Venenatis convallis ut eget ligula",
      ],
      variant: "default",
      className: "hidden lg:flex",
    },
    {
      name: "Pro",
      icon: <User className="size-4" />,
      description: "Etiam nec faucibus lectus. Aenean id malesuada eros.",
      price: 99,
      priceNote: "Quisque tempor augue et erat hendrerit, nec porta dolor pellentesque.",
      cta: {
        variant: "default",
        label: "Acesso completo",
        href: siteConfig.pricing.pro,
      },
      features: [
        `${siteConfig.stats.websiteTemplates} Etiam nec faucibus lectus.`,
        `${siteConfig.stats.appTemplates} Aenean id malesuada eros.`,
        `${siteConfig.stats.sections} Ut eu augue ex`,
        `${siteConfig.stats.illustrations} Aliquam erat volutpat.`,
        `${siteConfig.stats.animations}  Donec viverra iaculis interdum.`,
      ],
      variant: "glow-brand",
    },
    {
      name: "Pro Team",
      icon: <Users className="size-4" />,
      description: "For teams and agencies working on cool products together",
      price: 499,
      priceNote: "Lifetime access. Free updates. No recurring fees.",
      cta: {
        variant: "default",
        label: "Acesso completo para sua familia",
        href: siteConfig.pricing.team,
      },
      features: [
        "Donec eu ante vitae ex placerat aliquam ac ultricies velit. Vestibulum auctor posuere pulvinar.",
      ],
      variant: "glow",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => (
              <PricingColumn
                key={plan.name}
                name={plan.name}
                icon={plan.icon}
                description={plan.description}
                price={plan.price}
                priceNote={plan.priceNote}
                cta={plan.cta}
                features={plan.features}
                variant={plan.variant}
                className={plan.className}
              />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
