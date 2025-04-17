<script>
  const modal = document.getElementById('movieModal');
  const modalVideo = document.getElementById('modalVideo');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const closeModal = document.getElementById('closeModal');

  // Добавим обработчики ко всем карточкам
  document.querySelectorAll('.movie-card').forEach(card => {
    card.addEventListener('click', () => {
      const videoSrc = card.querySelector('video').getAttribute('src');
      const title = card.querySelector('h2').innerText;
      const description = card.querySelector('p').innerText;

      modalVideo.src = videoSrc;
      modalTitle.innerText = title;
      modalDescription.innerText = `Описание для «${title}».`; // Можешь заменить на своё
      modal.classList.remove('hidden');
    });
  });

  closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modalVideo.pause();
    modalVideo.currentTime = 0;
  });

  // Закрытие по фону
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
      modalVideo.pause();
      modalVideo.currentTime = 0;
    }
  });
</script>
