import CollectionHeader from "@/components/collection/CollectionHeader";
import CollectionIntro from "@/components/collection/CollectionIntro";
import CollectionMain from "@/components/collection/CollectionMain";
import DiscoverCTA from "@/components/collection/DiscoverCTA";
import CollectionFooter from "@/components/collection/CollectionFooter";
import WhatsAppFloat from "@/components/home/WhatsAppFloat";

export default function NewCollectionPage() {
  return (
    <>
      <CollectionHeader />
      <main className="bg-beige">
        <CollectionIntro />
        <CollectionMain />
        <DiscoverCTA />
      </main>
      <CollectionFooter />
      <WhatsAppFloat />
    </>
  );
}
