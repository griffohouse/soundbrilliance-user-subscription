import Checkout from '../../../components/checkout'
import { Section } from "@/devlink/_Builtin";

export default function Page() {
    return (
        <Section
            tag="section"
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
        <div id="checkout">
            <Checkout />
        </div>
        </Section>
    )
}