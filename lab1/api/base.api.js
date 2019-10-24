import config from "../config";

const { backendUrl } = config;

export default class Api {
  constructor(resource = "") {
    this.resource = resource;
  }

  request = async (url = "", params = {}, useResource = true) => {
    const headers = { "content-type": "application/json" };

    const response = await fetch(
      `${backendUrl}${useResource ? `/${this.resource}` : ""}/${url}`,
      { headers, ...params }
    );

    if (!response.ok) {
      throw new Error(`Error: /${url}. Status: ${response.status}`);
    }

    try {
      const json = await response.json();
      return json;
    } catch ({ message }) {
      throw new Error(`Received a non-JSON response, aborting. | ${message}`);
    }
  };
}
