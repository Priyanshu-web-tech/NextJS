import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Blog",
// };

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

function page() {
  return <div>Blog</div>;
}

export default page;
