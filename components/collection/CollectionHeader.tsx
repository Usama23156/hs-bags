import SiteHeader from "@/components/shared/SiteHeader";

interface CollectionHeaderProps {
  activeLink?: string;
}

export default function CollectionHeader({
  activeLink = "NEW COLLECTION",
}: CollectionHeaderProps) {
  return <SiteHeader activeLink={activeLink} />;
}
