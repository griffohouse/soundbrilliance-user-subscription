"use client";

import { SubmitButton } from '@/devlink/SubmitButton';
import { SoundbrillianceLogo } from "@/devlink/SoundbrillianceLogo";
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
    Text,
    Container
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
        <Container height={'100%'} width={'100%'} fluid={true} paddingTop={'3rem'} paddingBottom={'3rem'} centerContent={true}>
            <SoundbrillianceLogo></SoundbrillianceLogo>
            <form onSubmit={handleSubmit}>
                <Fieldset.Root marginTop={'2rem'} width={'20rem'} size="lg" maxW="2xl">
                    <Stack textAlign="center">
                        <Fieldset.Legend color="black">
                            Create an Account
                        </Fieldset.Legend>
                    </Stack>

                    <Fieldset.Content>
                        <Field.Root>
                            <Field.Label>Access Code</Field.Label>
                            <Input bg={'white'} required name="accessCode" type="number" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Name</Field.Label>
                            <Input bg={'white'} required name="name" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Email address</Field.Label>
                            <Input bg={'white'} required name="email" type="email" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Password</Field.Label>
                            <Input bg={'white'} required name="password" type="password" />
                        </Field.Root>

                        <Field.Root>
                            <Field.Label>Confirm Password</Field.Label>
                            <Input bg={'white'} required name="confirmPassword" type="password" />
                        </Field.Root>

                        <Checkbox.Root required name="termsAgreement">
                            <Checkbox.HiddenInput />
                            <Checkbox.Control bg={'white'} />
                            <Checkbox.Label>
                                I accept terms and conditions
                            </Checkbox.Label>
                        </Checkbox.Root>
                    </Fieldset.Content>
                    {error ? <Text color={'#F4576A'}>Error: {error}</Text> : <div></div>}
                    <SubmitButton></SubmitButton>
                </Fieldset.Root>
            </form>
        </Container>
    );
}
