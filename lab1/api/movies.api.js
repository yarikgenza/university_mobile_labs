import Api from "./base.api";

class MoviesApi extends Api {
  constructor() {
    super("movies");
  }

  getList = async () => {
    const response = await this.request();
    return response;
  };
}

export default new MoviesApi();
