"use client";
import { Section } from "@/devlink/_Builtin";
import {useState} from "react";
import Form from 'next/form';
import Image from 'next/image';
import {
    Button,
    Field,
    Fieldset,
    Input,
    Stack,
} from "@chakra-ui/react"


export default async function Page()  {
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [matchPasswordError, setMatchPassword] = useState();

    const verifyPassword = () => {

    }
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
                        <Image src={'src/assets/soundBrillianceLogo.jpg'} alt="soundBrilliance logo" />
                        <Fieldset.Legend color='black'>Create a Password</Fieldset.Legend>
                        <Fieldset.HelperText >
                            Create a secure password
                        </Fieldset.HelperText>
                    </Stack>

                    <Fieldset.Content>
                        <Field.Root>
                            <Field.Label>Password</Field.Label>
                            <Input name="name" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Confirm Password</Field.Label>
                            <Input name="email" type="email" />
                        </Field.Root>

                    </Fieldset.Content>

                    <Button type="submit" alignSelf="flex-start">
                        Submit
                    </Button>
                </Fieldset.Root>
            </Form>
        </Section>
    )
}

