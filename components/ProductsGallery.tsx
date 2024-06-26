import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Products } from "../types/types";

function Product({ id, title, description, images }: Products) {
  const t = useTranslations("Index");
  return (
    <div className="product ">
      <div className="product-img-container">
        <Image src={images[0]} alt={title} width={250} height={200} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <Link href={`/${id}`}>
        <button>{t("Product.addToCart")}</button>
      </Link>
    </div>
  );
}

export default function ProductsGallery({ products }) {
  return (
    <div className="products-container flex items-center h-full">
      {products.map((product: Products, id: number) => (
        <Product key={id} {...product} />
      ))}
    </div>
  );
}
