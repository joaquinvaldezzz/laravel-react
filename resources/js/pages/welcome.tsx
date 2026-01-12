import { Fragment } from "react";
import { Head, Link } from "@inertiajs/react";

import { Button } from "@/components/ui/button";

export default function Welcome() {
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
      </div>
    </Fragment>
  );
}
