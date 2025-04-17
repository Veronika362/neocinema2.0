// Получаем параметр из URL
const urlParams = new URLSearchParams(window.location.search);
const filmId = urlParams.get("film");

const container = document.getElementById("movie-container");

fetch("movies.json")
  .then((res) => res.json())
  .then((movies) => {
    const movie = movies.find((m) => m.id === filmId);

    if (!movie) {
      container.innerHTML = "<p>Фильм не найден 🥺</p>";
      return;
    }

    container.innerHTML = `
      <div class="flex flex-col md:flex-row gap-6">
        <img src="${movie.poster}" alt="${movie.title}" class="w-64 rounded-lg shadow-lg" />
        <div>
          <h1 class="text-3xl font-bold mb-2">${movie.title} (${movie.year})</h1>
          <p class="italic text-gray-400 mb-4">${movie.tagline}</p>
          <p><strong>Страна:</strong> ${movie.country}</p>
          <p><strong>Жанр:</strong> ${movie.genre}</p>
          <p><strong>Режиссёр:</strong> ${movie.director}</p>
          <p><strong>Композитор:</strong> ${movie.composer}</p>
          <p><strong>Время:</strong> ${movie.duration}</p>
          <p class="mt-4 text-gray-300">${movie.description}</p>
        </div>
      </div>

      <div class="mt-6">
        <h2 class="text-xl font-semibold mb-2">🎬 Трейлер</h2>
        <video src="${movie.trailer}" controls class="w-full rounded-lg shadow-lg"></video>
      </div>
    `;
  });
