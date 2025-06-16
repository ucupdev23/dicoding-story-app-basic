export class StoryPresenter {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async getStories() {
    this.view.showLoading();

    try {
      const stories = await this.model.getStories();
      this.view.renderStories(stories);
    } catch (error) {
      console.error("Presenter: Error in getStories", error);
      this.view.renderFailedMessage();
    }
  }
}
