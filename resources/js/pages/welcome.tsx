import { Fragment } from "react";
import { Head, Link } from "@inertiajs/react";

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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, aliquam beatae ducimus
          aperiam corporis enim, nostrum hic modi, sunt totam quam pariatur iste asperiores soluta.
          Fuga in veniam possimus blanditiis.
        </p>
        <Link href="/about" className="text-blue-500">
          About
        </Link>
      </div>
    </Fragment>
  );
}
