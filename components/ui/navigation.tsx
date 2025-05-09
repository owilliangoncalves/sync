"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./navigation-menu";
import SyncUi from "../logos/sync-ui";
import { siteConfig } from "@/config/site";
import { ReactNode } from "react";

interface ComponentItem {
  title: string;
  href: string;
  description: string;
}

interface MenuItem {
  title: string;
  href?: string;
  isLink?: boolean;
  content?: ReactNode;
}

interface NavigationProps {
  menuItems?: MenuItem[];
  components?: ComponentItem[];
  logo?: ReactNode;
  logoTitle?: string;
  logoDescription?: string;
  logoHref?: string;
  introItems?: {
    title: string;
    href: string;
    description: string;
  }[];
}

export default function Navigation({
  menuItems = [
    {
      title: "Projeto",
      content: "default",
    },
    {
      title: "Download",
      content: "",
    },
    {
      title: "Mapas",
      isLink: true,
      href: siteConfig.url,
    },
  ],
  components = [
    {
      title: "Alert Dialog",
      href: "",
      description:
        "Quisque quis tellus et urna iaculis tincidunt.",
    },
    {
      title: "Hover Card",
      href: "",
      description:
        "Proin ut feugiat nulla.",
    },
    {
      title: "Progress",
      href: "",
      description:
        "Maecenas vestibulum purus rutrum sem fringilla, sit amet consectetur ante dignissim",
    },
    {
      title: "Scroll-area",
      href: "",
      description: "Nulla rhoncus libero odio, sit amet imperdiet magna auctor malesuada.",
    },
    {
      title: "Tabs",
      href: "",
      description:
        "Aliquam erat volutpat.",
    },
    {
      title: "Tooltip",
      href: "",
      description:
        "Curabitur dapibus ante id ligula porta blandit.",
    },
  ],
  logo = <SyncUi />,
  logoTitle = "Sync",
  logoDescription = "Praesent ultrices semper lectus condimentum cursus. Nulla vitae massa quis turpis tempor ullamcorper. Nunc pretium purus in posuere aliquam.",
  logoHref = siteConfig.url,
  introItems = [
    {
      title: "Projeto",
      href: siteConfig.url,
      description:
        "Curabitur dapibus ante id ligula porta blandit. ",
    },
    {
      title: "Mapas",
      href: siteConfig.url,
      description: "Ut eu augue ex.",
    },
    {
      title: "Download",
      href: siteConfig.url,
      description: "Nunc pretium purus in posuere aliquam.",
    },
  ],
}: NavigationProps) {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {menuItems.map((item, index) => (
          <NavigationMenuItem key={index}>
            {item.isLink ? (
              <Link href={item.href || ""} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            ) : (
              <>
                <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  {item.content === "default" ? (
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                            href={logoHref}
                          >
                            {logo}
                            <div className="mt-4 mb-2 text-lg font-medium">
                              {logoTitle}
                            </div>
                            <p className="text-muted-foreground text-sm leading-tight">
                              {logoDescription}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {introItems.map((intro, i) => (
                        <ListItem key={i} href={intro.href} title={intro.title}>
                          {intro.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : item.content === "components" ? (
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  ) : (
                    item.content
                  )}
                </NavigationMenuContent>
              </>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  className,
  title,
  children,
  ...props
}: React.ComponentProps<"a"> & { title: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          data-slot="list-item"
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
            className,
          )}
          {...props}
        >
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
