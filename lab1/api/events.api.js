import config from "../config";

const { backendUrl } = config;

export default getList = async () => {
  const headers = { "content-type": "application/json" };
  const url = `${backendUrl}/api/events`;

  const response = await fetch(url, { headers });
  const json = await response.json();
  return json;
};
