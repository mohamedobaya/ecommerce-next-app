import ProductList from "@/components/ProductList";

export default async function Home() {
  return <ProductList filteredValue={"all"} />;
}
