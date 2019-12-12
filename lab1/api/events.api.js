import config from "../config";

const { backendUrl } = config;

const getList = async () => {
  const headers = { "content-type": "application/json" };
  const url = `${backendUrl}/api/events`;

  const response = await fetch(url, { headers });
  const json = await response.json();
  return json;
};

const addEvent = async (body) => {
  const headers = { "content-type": "application/json" };
  const url = `${backendUrl}/api/events`;

  const response = await fetch(url, {
    method: 'post',
    headers,
    body: JSON.stringify(body),
  });

  const json = await response.json();
  return json;
}

export { getList, addEvent }
