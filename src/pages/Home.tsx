import { Container } from "../components/container";
import { FeatureItem } from "../components/featureItem";

export function Home() {
  return (
    <div>
      <section className="pt-8 pb-8">
        <Container>
          <FeatureItem
            title="Blend of British & Ukrainian Barber Experiences"
            src="./src/assets/barberWork.webp"
          >
            Chocolate Woods CRM brings the finest barber traditions from both
            British and Ukrainian cultures straight to your Kyiv-based barber
            shop. Unleash your barber’s potential with our top-notch CRM!
          </FeatureItem>
          <FeatureItem
            title="Unparalleled Tools for Smooth Operations"
            src="./src/assets/instruments.webp"
            order="flex-row-reverse"
          >
            Calendar management, seamless online bookings, exquisite balance
            features, and an extensive client database—manage your barber shop
            like never before with Chocolate Woods CRM.
          </FeatureItem>
        </Container>
      </section>
    </div>
  );
}
