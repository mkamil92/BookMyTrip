import BusOrdersComp from "../../components/busesComp/BusesOrderComp/BusesOrder";
import PaymentProvider from "../../context/paymentOrderContext/paymentProvider";

export default function BusOrderPage() {
    return (
        <PaymentProvider>
                <BusOrdersComp />
        </PaymentProvider>

    )
}