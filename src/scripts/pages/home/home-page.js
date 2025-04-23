import HomePresenter from "./home-presenter";
import * as StoryAPI from "../../data/api";

import {
  generateStoryItemTemplate
} from "../../templates"

export default class HomePage {
  #presenter = null;

  async render() {
    return `
      <section class="container">
        <h1 class="title" >Daftar Cerita</h1>

        <div class="story-list__container">
          <div id="story-list"></div>
          <div id="story-list-loading-container"></div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    this.#presenter = new HomePresenter({
      view: this,
      model: StoryAPI,
    });

    await this.#presenter.showStoriesList()
  }

  populateStoryList(message, storyList) {
    
    console.log("storyList:", storyList);
    const html = storyList.reduce((accumulator, story) => {
      return accumulator.concat(
        generateStoryItemTemplate({
          ...story,
        }),
      );
      
    }, '');

    document.getElementById('story-list').innerHTML = `
      <div class="story-list">${html}</div>
    `;
  }

}
