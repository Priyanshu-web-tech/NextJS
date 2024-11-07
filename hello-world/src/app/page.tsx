import Link from "next/link";
import React from "react";

function Home() {
  return (
    <div>
      <h1>Welcome home!</h1>
      <Link href="/blog">Blog</Link>
      <br />
      <Link href="/products">Products</Link>

    </div>
  );
}

export default Home;
