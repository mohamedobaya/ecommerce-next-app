import ProductList from "@/components/ProductList";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import Filter from "@/components/Filter";

interface Props {
  searchParams: Promise<{ category: string }>;
}

export const revalidate = 10;
export default async function page({ searchParams }: Props) {
  const { category } = await searchParams;
  const filteredValue = category ?? "all";

  return (
    <div className="mx-auto p-5">
      <div className="m-5"></div>
      <div className="mx-auto">
        <Suspense fallback={<Spinner />}>
          <Filter />

          <ProductList filteredValue={filteredValue} />
        </Suspense>
      </div>
    </div>
  );
}
