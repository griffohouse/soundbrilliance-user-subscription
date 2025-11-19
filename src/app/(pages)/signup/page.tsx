"use client";

import { Section } from "@/devlink/_Builtin";
import { createEnterpriseUser } from "../../actions/createuser";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    Button,
    Checkbox,
    Field,
    Fieldset,
    Input,
    Stack,
} from "@chakra-ui/react";

export default function Page() {
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);

        const formData = new FormData(e.currentTarget);

        const result = await createEnterpriseUser(formData);

        if (result?.error) {
            console.log('result error', result.error)
            setError(result.error);
            return;
        }
        router.push("/checkout");
    }

    useEffect(() => {
        console.log("Updated error state:", error);
    }, [error]);

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
            <form onSubmit={handleSubmit}>
                <Fieldset.Root size="lg" maxW="md">
                    <Stack>
                        <Fieldset.Legend color="black">
                            Create an Account
                        </Fieldset.Legend>
                    </Stack>

                    <Fieldset.Content>
                        <Field.Root>
                            <Field.Label>Access Code</Field.Label>
                            <Input required name="accessCode" type="number" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Name</Field.Label>
                            <Input required name="name" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Email address</Field.Label>
                            <Input required name="email" type="email" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Password</Field.Label>
                            <Input required name="password" type="password" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Confirm Password</Field.Label>
                            <Input required name="confirmPassword" type="password" />
                        </Field.Root>

                        <Checkbox.Root required name="termsAgreement">
                            <Checkbox.HiddenInput />
                            <Checkbox.Control />
                            <Checkbox.Label>
                                I accept terms and conditions
                            </Checkbox.Label>
                        </Checkbox.Root>
                    </Fieldset.Content>
                    {error ?? <Fieldset.ErrorText>{error}</Fieldset.ErrorText>}


                    <Button type="submit" alignSelf="flex-start">
                        Submit
                    </Button>
                </Fieldset.Root>
            </form>
        </Section>
    );
}
