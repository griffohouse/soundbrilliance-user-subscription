"use client";
import { Section } from "@/devlink/_Builtin";
import Form from 'next/form'
import {
    Button,
    Checkbox,
    Field,
    Fieldset,
    Input,
    Stack,
} from "@chakra-ui/react"


export default async function Page()  {
    return (
    <Section
      tag="section"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <Form action={'/create_password'}>
            <Fieldset.Root size="lg" maxW="md">
                <Stack>
                    <Fieldset.Legend color='black'>Create an Account</Fieldset.Legend>
                    <Fieldset.HelperText >
                        Please provide your user details below.
                    </Fieldset.HelperText>
                </Stack>

                <Fieldset.Content>
                    <Field.Root>
                        <Field.Label>Name</Field.Label>
                        <Input name="name" />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Email address</Field.Label>
                        <Input name="email" type="email" />
                    </Field.Root>

                    <Field.Root>
                        <Field.Label>Access Code</Field.Label>
                        <Input name="access code" type="number" />
                    </Field.Root>

                    <Checkbox.Root>
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label>I accept terms and conditions</Checkbox.Label>
                    </Checkbox.Root>

                </Fieldset.Content>

                <Button type="submit" alignSelf="flex-start">
                    Submit
                </Button>
            </Fieldset.Root>
        </Form>
    </Section>
    )
}

