import { StoryModel } from "./StoryModel";
import { StoryPresenter } from "./StoryPresenter";
import MapHelper from "../../utils/MapHelper";

export class StoryView {
  render() {
    return `
      <header>
        <h1>Daftar Cerita</h1>
        <nav>
          <a href="#/add">Tambah Cerita</a>
        </nav>
      </header>
      <main id="mainContent" class="container">
        <div id="stories-list-container">
        </div>
      </main>
      <footer style="text-align: center; padding: 20px;">
        <p>&copy; 2025 Story App</p>
      </footer>
    `;
  }

  async afterRender() {
    console.log("StoryView afterRender dipanggil.");
    const model = new StoryModel();
    const presenter = new StoryPresenter(model, this);

    await presenter.getStories();
  }

  showLoading() {
    document.getElementById("stories-list-container").innerHTML = `
      <div class="loading-indicator" style="text-align: center; padding: 50px;">
        <p>Sedang memuat data cerita...</p>
        </div>
    `;
  }

  renderStories(stories) {
    const container = document.getElementById("stories-list-container");
    if (!container) return;

    if (stories.length === 0) {
      container.innerHTML =
        '<p style="text-align: center; padding: 50px;">Belum ada cerita yang tersedia.</p>';
      return;
    }

    container.innerHTML = `
      <section id="stories-grid" class="stories-grid">
        ${stories
          .map(
            (story) => `
          <article class="story-item">
            <img src="${story.photoUrl}" alt="Gambar cerita oleh ${
              story.name
            }" class="story-image" loading="lazy">
            <div class="story-content">
              <h2 class="story-title">${story.name}</h2>
              <p class="story-description">${story.description.substring(
                0,
                100
              )}...</p>
              <p class="story-date">Diposting pada: ${new Date(
                story.createdAt
              ).toLocaleDateString()}</p>
              ${
                story.lat && story.lon
                  ? `
                <div class="story-map-wrapper">
                  <div id="map-${story.id}" class="story-map"></div>
                </div>
              `
                  : `<p class="no-location-info">Lokasi tidak tersedia</p>`
              }
            </div>
          </article>
        `
          )
          .join("")}
      </section>
    `;

    stories.forEach((story) => {
      console.log("Story data for map:", story);
      if (story.lat && story.lon) {
        const mapElementId = `map-${story.id}`;
        const mapHelper = new MapHelper(mapElementId, story.lat, story.lon, 15);
        const map = mapHelper.initMap();
        if (map) {
          const storyName = story.name || "Nama Tidak Diketahui";
          const storyDescription = story.description
            ? story.description.substring(0, 50) + "..."
            : "Deskripsi tidak tersedia.";
          mapHelper.addMarker(
            story.lat,
            story.lon,
            `<b>${storyName}</b><br>${storyDescription}`
          );
        }
      }
    });
  }

  renderFailedMessage() {
    const container = document.getElementById("stories-list-container");
    if (container) {
      container.innerHTML = `
        <div class="error-message" style="text-align: center; padding: 50px; color: red;">
          <p>Gagal memuat daftar cerita. Mohon coba lagi nanti.</p>
          <button onclick="window.location.reload()">Refresh Halaman</button>
        </div>
      `;
    }
  }
}
