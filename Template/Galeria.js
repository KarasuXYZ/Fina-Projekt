const imagePaths = [
  "https://preview.redd.it/this-pic-goes-hard-feel-free-to-screenshot-v0-ak639vwe7d5c1.jpg?width=640&crop=smart&auto=webp&s=49b18d5ee162048a2f631bb9ddea2dbc2d6b4b87",
  "https://pbs.twimg.com/media/FERfZ-kXsAIQUe1.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5rLs1yunosLxhXlSuJYJKs2W18LdUzXX9Tg&s",
  "https://pm1.aminoapps.com/8142/3b74e3e0a4d426533c65df224ef95d4fb4be8601r1-699-396v2_uhq.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwTP-kNMfdmvpHogb780y5WHhg8JF8v9BCrg&s",
  'https://www.edunews.pl/images/obrazki/matematyka12.jpg',
  "https://www.cb.szczecin.pl/wp-content/uploads/2023/05/matematyka-studia-podyplomowe.jpg",
  "https://www.dlamaturzysty.info/img/wo/5/65/Matematyka-na-Uniwersytecie-Gdanskim-kierunek-obrazek_sredni_6099565.jpg",
  "https://i.pinimg.com/736x/1b/fc/e9/1bfce97a85aecdd0c0a0cd48348c15ef.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhaTTHYe3pq6RYazy_xpEmcmxHs1TbwE2ffQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQH9PksC7p9Rn66Hxs9Sf3ozR9D9PSJEpTKA&s"
];

let currentIndex = 0;
// losujemy kolejność zdjęć
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// losujemy pierwszy obraz i kolejność
document.addEventListener("DOMContentLoaded", () => {
  shuffleArray(imagePaths);
  currentIndex = 0;
  document.getElementById("galleryImage").src = imagePaths[currentIndex];
});

function changeImage(step) {
  currentIndex = (currentIndex + step + imagePaths.length) % imagePaths.length;
  document.getElementById("galleryImage").src = imagePaths[currentIndex];
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") changeImage(-1);
  if (e.key === "ArrowRight") changeImage(1);
});
