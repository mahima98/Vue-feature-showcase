// services/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3008", // JSON-server URL
});

export async function searchProducts(query) {
  try {
    const response = await api.get("/stockData", {
      params: {
        _limit: 10, // Limit the number of results (adjust as needed)
        p_name_like: query, // Use the correct field name for product name
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function saveProduct(editedProduct) {
  try {
    // Send a PUT request to update the edited product on the server
    console.log("saving", editedProduct.id);
    const response = await fetch(
      `http://localhost:3008/stockData/${editedProduct.id}`,
      {
        method: "PUT",
        body: JSON.stringify(editedProduct),
        headers: {
          "Content-Type": "application/JSON",
        },
      }
    );

    const json = await response.json();
    return json;
  } catch (error) {
    // Handle the error as needed (e.g., display an error message)
    console.error("Error updating data:", error);
    throw error;
  }
}
