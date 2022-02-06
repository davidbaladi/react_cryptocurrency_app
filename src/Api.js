import axios from "axios";

const URL =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

const Api = async () => {
  try {
    const { data } = await axios.get(URL);
    console.log("Api Return:", data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
export default Api;
