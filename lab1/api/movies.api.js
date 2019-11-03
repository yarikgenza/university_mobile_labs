import config from "../config";

const { backendUrl } = config;

export default getList = async () => {
  const headers = { "content-type": "application/json" };
  const url = `${backendUrl}/movies`;

  const response = await fetch(url, { headers });
  const json = await response.json();
  return json;
};
