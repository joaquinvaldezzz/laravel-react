import { Fragment } from "react";
import { Head, useForm } from "@inertiajs/react";
import { route } from "ziggy-js";

import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toastManager } from "@/components/ui/toast";

import type { FormEvent } from "react";

export default function Welcome() {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: "",
    content: "",
  });

  function submit(e: FormEvent) {
    e.preventDefault();
    post(route("posts.store"), {
      onSuccess: () => {
        toastManager.add({
          title: "Post created successfully!",
        });
        reset();
      },
    });
  }

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
      <div className="mx-auto max-w-prose px-4 pt-8">
        <Form onSubmit={(e) => submit(e)} errors={errors}>
          <Field name="title">
            <FieldLabel>Title</FieldLabel>
            <Input
              type="text"
              value={data.title}
              onChange={(e) => setData("title", e.target.value)}
            />
            {errors.title ? <FieldError>{errors.title}</FieldError> : null}
          </Field>

          <Field name="content">
            <FieldLabel>Content</FieldLabel>
            <Textarea value={data.content} onChange={(e) => setData("content", e.target.value)} />
            {errors.content ? <FieldError>{errors.content}</FieldError> : null}
          </Field>

          <Button type="submit" disabled={processing}>
            Submit
          </Button>
        </Form>
      </div>
    </Fragment>
  );
}
