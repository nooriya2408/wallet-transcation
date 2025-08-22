// src/services/api.js
import axios from "axios";

const API_BASE = "http://64.227.189.27/wallet/api/v1";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiMjgyMDUiLCJtb2JpbGUiOiI3MzU4MjIxMzU0IiwiYXBwX2lkIjoiNjAiLCJtaWQiOiIzNDgiLCJ0b2tlbiI6IjZjZjFhMzNhZDJkOGQyNjFkMWYwNDBiMWIwZGViMjc1IiwiZ3JvdXBJZCI6IjIxMDYxIiwiaXNzIjoiMjgyMDUifQ.ADopz72M1Z-eKpFXJd04RZvLxXHyJ8fFaT4HnzxxQCk";

export const fetchTransactions = async (page = 0) => {
  try {
    const res = await axios.get(`${API_BASE}/transaction_history`, {
      params: { service_id: 111, page },
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    throw error.response?.data || { message: "API Error" };
  }
};
