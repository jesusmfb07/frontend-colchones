/*const API = "http://localhost:5005/api";

export async function getProducts() {
  const res = await fetch(`${API}/products`);
  return res.json();
}*/


const API = "http://localhost:5005/api"

export async function getProducts() {
  try {
    const res = await fetch(`${API}/products`)
    if (!res.ok) throw new Error("Failed to fetch products")
    return res.json()
  } catch (error) {
    console.error("[v0] Error fetching products:", error)
    return []
  }
}
