import Api from "./base.api";

class MoviesApi extends Api {
  constructor() {
    super("movies");
  }

  getList = async () => {
    try {
      const response = await this.request();
      return response;
    } catch (error) {
      console.error(error);
    }
  };
}

export default new MoviesApi();
