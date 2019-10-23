import config from "../config";

const { backendUrl } = config;

export default class Api {
  constructor(resource = "") {
    this.resource = resource;
  }

  request = async (url = "", params = {}, useResource = true) =>
    new Promise(async (resolve, reject) => {
      const headers = { "content-type": "application/json" };

      try {
        const response = await fetch(
          `${backendUrl}${useResource ? `/${this.resource}` : ""}/${url}`,
          { headers, ...params }
        );

        if (!response.ok) {
          return reject(
            new Error(`Error: /${url}. Status: ${response.status}`)
          );
        }

        try {
          const json = await response.json();
          resolve(json);
        } catch ({ message }) {
          reject(
            new Error(`Received a non-JSON response, aborting. | ${message}`)
          );
        }
      } catch ({ message }) {
        reject(message);
      }
    });
}
