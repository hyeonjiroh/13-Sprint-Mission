const BASE_URL = "https://panda-market-api.vercel.app";

export async function getItems(order = "") {
  const query = `orderBy=${order}`;
  const response = await fetch(`${BASE_URL}/products?${query}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다");
  }
  const body = await response.json();
  return body;
}