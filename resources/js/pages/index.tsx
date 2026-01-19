import { Head, useForm } from "@inertiajs/react";
import { route } from "ziggy-js";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardPanel, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toastManager } from "@/components/ui/toast";

import type { FormEvent } from "react";

export default function Index({ tasks }: { tasks: { id: number; title: string }[] }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    title: "",
  });

  function submit(e: FormEvent) {
    e.preventDefault();
    post(route("tasks.store"), {
      onSuccess: () => {
        toastManager.add({
          title: "Task created successfully!",
        });
        reset();
      },
    });
  }

  console.log(errors);

  return (
    <div>
      <Head title="Welcome">
        {/* <meta name="description" content="Welcome to the Laravel 10.0.0" /> */}
      </Head>

      <div className="container mx-auto px-4 pt-8 md:px-8">
        <div>
          <h1>Tasks</h1>

          {tasks.length === 0 && <p>No tasks yet.</p>}

          <ul className="list-disc pl-4">
            {tasks.map((task) => (
              <li key={task.id}>{task.title}</li>
            ))}
          </ul>
        </div>

        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle>Create a new task</CardTitle>
            <CardDescription>Create one by completing this form.</CardDescription>
          </CardHeader>
          <CardPanel>
            <Form onSubmit={(e) => submit(e)}>
              <Field name="task">
                <FieldLabel>Task</FieldLabel>
                <Input
                  type="text"
                  value={data.title}
                  onChange={(e) => setData("title", e.target.value)}
                />
                {errors.title ? <FieldError>{errors.title}</FieldError> : null}
              </Field>

              <Button type="submit" disabled={processing}>
                Submit
              </Button>
            </Form>
          </CardPanel>
        </Card>
      </div>
    </div>
  );
}
