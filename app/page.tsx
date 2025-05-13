"use client";

import { useState, useEffect } from "react";
import _ from "lodash";
import moment from "moment";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product 1",
    price: 999,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/images/products/product1.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 1499,
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/images/products/product2.jpg",
  },
  {
    id: 3,
    name: "Product 3",
    price: 1999,
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: "/images/products/product1.png",
  },
];

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filtered = _.filter(products, (product: Product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredProducts(filtered);
  }, [searchTerm]);

  const styles = {
    productGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
      gap: "20px",
      padding: "20px",
    },
    productCard: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "15px",
      backgroundColor: "#fff",
    },
    productImage: {
      width: "100%",
      height: "auto",
    },
    searchInput: {
      width: "100%",
      padding: "10px",
      marginBottom: "20px",
      fontSize: "16px",
    },
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />

      <div style={styles.productGrid}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={styles.productCard}>
            {/*Added next.js Image component to improve image performance
            (also to use a webp image format, which is much better for browser performance and load speed */}
            <Image
              src={product.image}
              style={styles.productImage}
              width={327.5}
              height={224.297}
              alt={`image of product ${product.name}`}
              priority={true}
            />
            <h2>{product.name}</h2>
            <p>
              Added:{" "}
              {moment().subtract(product.id, "days").format("MMMM Do YYYY")}
            </p>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button
              onClick={() => alert("Product added to cart!")}
              style={{
                backgroundColor: "#4CAF50",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
