import { Fragment } from "react";
import { Head, Link } from "@inertiajs/react";

import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function Welcome() {
  const items = [
    {
      content:
        "Base UI is a library of high-quality unstyled React components for design systems and web apps.",
      id: "1",
      title: "What is Base UI?",
    },
    {
      content:
        "Head to the \"Quick start\" guide in the docs. If you've used unstyled libraries before, you'll feel at home.",
      id: "2",
      title: "How do I get started?",
    },
    {
      content: "Of course! Base UI is free and open source.",
      id: "3",
      title: "Can I use it for my project?",
    },
  ];

  return (
    <Fragment>
      <Head title="Welcome">
        <meta name="description" content="Welcome to the Laravel 10.0.0" />
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <link
          href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
          rel="stylesheet"
        />
      </Head>
      <div className="mx-auto max-w-prose px-4">
        <h1 className="text-2xl font-bold tracking-tight">Welcome to the Laravel 10.0.0</h1>

        <Button render={<Link href="/about" />}>About</Button>

        <div className="my-8">
          <Label>
            <Checkbox />
            Accept terms and conditions
          </Label>
        </div>

        <Accordion className="w-full" multiple>
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionPanel>{item.content}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Fragment>
  );
}
