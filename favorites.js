
function updateFavoritesDisplay() {
    let favoritesList = document.getElementById('favoritesList');
    favoritesList.innerHTML = '';
    favorites.forEach(songIndex => {
        let favoriteHtml = `
                <div>
                    <p>Favorites</p>
                </div>
            <div class="song">
                
                <div class="img">
                    <img src="${All_song[songIndex].img}" />
                </div>
                <div class="more">
                    <audio src="${All_song[songIndex].path}" class="music"></audio>
                    <div class="song_info">
                        <p id="title">${All_song[songIndex].name}</p>
                        <p>${All_song[songIndex].singer}</p>
                    </div>
                    
                </div>
            </div>`;

        favoritesList.insertAdjacentHTML('beforeend', favoriteHtml);
    });
}
updateFavoritesDisplay();

