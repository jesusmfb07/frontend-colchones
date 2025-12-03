const API = "http://localhost:5005/api";

export async function getProducts() {
  const res = await fetch(`${API}/products`);
  return res.json();
}