import { Metadata } from "next";

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product Details Page ${params.productId}`,
    description: `Product Details Page ${params.productId}`,
  };
};

type Props = {
  params: {
    productId: string;
  };
};

function ProductDetails({ params }: { params: Props }) {
  return <h1>Product Details Page {params.productId}</h1>;
}

export default ProductDetails;
