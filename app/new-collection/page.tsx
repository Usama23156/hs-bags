import CollectionHeader from "@/components/collection/CollectionHeader";
import CollectionIntro from "@/components/collection/CollectionIntro";
import CollectionMain from "@/components/collection/CollectionMain";
import DiscoverCTA from "@/components/collection/DiscoverCTA";

export default function NewCollectionPage() {
  return (
    <>
 
      <main className="bg-beige">
        <CollectionIntro />
        <CollectionMain />
        <DiscoverCTA />
      </main>
   
   
    </>
  );
}
