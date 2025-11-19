import { redirect } from 'next/navigation'

import { stripe } from '../../lib/stripe'
import { Section } from "../../../devlink/_Builtin";
import { Link, Heading, Text, Stack } from "@chakra-ui/react";

export default async function Welcome({ searchParams }) {
    const { session_id } = await searchParams

    if (!session_id)
        throw new Error('Please provide a valid session_id (`cs_test_...`)')

    const {
        status,
        customer_details: { email: customerEmail , name: customerName}
    } = await stripe.checkout.sessions.retrieve(session_id, {
        expand: ['line_items', 'payment_intent']
    })

    if (status === 'open') {
        return redirect('/')
    }

    if (status === 'complete') {
        return (
            <Section
                tag="section"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
            <Stack>
                <Heading size={'3xl'}>Welcome to soundBrilliance, {customerName}!</Heading>
                <Text>
                    You have successfully subscribed!
                    A confirmation email will be sent to{' '}{customerEmail}. If you have any questions, please email{' '}
                    <Link href="mailto:orders@example.com">orders@example.com</Link>
                </Text>
            </Stack>
            </Section>
        )
    }
}