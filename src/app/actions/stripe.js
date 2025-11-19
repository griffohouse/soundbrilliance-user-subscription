'use server'

import {cookies, headers} from 'next/headers'

import { stripe } from '../lib/stripe'

export async function fetchClientSecret() {
    const origin = (await headers()).get('origin')

    const cookies = await (await import('next/headers')).cookies()
    const stripeCustomerId = cookies.get("stripe_customer_id")?.value
    //
    // try {
    //     const response = await fetch(
    //         "https://xpzx-vpjp-v6yl.n7.xano.io/api:YM0i2R_3/get_enterprise_user",
    //         {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({
    //                 access_code: accessCode,
    //                 name,
    //                 email,
    //                 password,
    //                 terms_agreement: new Date().toISOString(),
    //             }),
    //         }
    //     );
    //
    //     if (!response.ok) {
    //         const err = await response.json();
    //         return { error: err.message || "Failed to submit data to Xano." };
    //     }
    //
    //     const user = await response.json();
    //
    //     (await cookies()).set("stripe_customer_id", user.stripe_customer_id);
    //
    //
    //     return { success: true };
    // } catch (e: any) {
    //     return { error: e.message };
    // }


    if (!stripeCustomerId) {
        throw new Error("Missing Stripe Customer ID")
    }

    const session = await stripe.checkout.sessions.create({
        ui_mode: 'embedded',
        customer: stripeCustomerId,
        line_items: [
            { price: 'price_1SPSWb0ZsBlZ8v4sjfZ3VYSo', quantity: 1 }
        ],
        mode: 'subscription',
        return_url: `${origin}/app/welcome?session_id={CHECKOUT_SESSION_ID}`,
    })

    return session.client_secret
}