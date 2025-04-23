export default class HomePresenter {
    #view;
    #model;
  
    constructor({ view, model }) {
      this.#view = view;
      this.#model = model;
    }

    async showStoriesList() {
      try {
        const response = await this.#model.getAllStories();

        console.log(response)
        this.#view.populateStoryList(response.message, response.listStory);
      } catch (err) {
        console.log("terjadi error: " + err);
      }
    }
    
}