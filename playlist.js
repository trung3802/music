let All_song = [
    {
      album: "Album 1",
      songs: [
        {
            name: "11", // tên bài hát
            path: "music/1.mp3",  // file mp3 em tải xuống
            img: "images/1.jpg",    // ảnh bài hát or ca sĩ
            singer: "Sơn tùng",   
            music:"Nắng ấm xa dần"
          },
          {
            name: "12",
            path: "music/2.mp3",
            img: "images/2.jpg",
            singer: "Sơn tùng",   
            music:"Nắng ấm xa dần"
          },
          {
            name: "13",
            path: "music/3.mp3",
            img: "images/3.jpg",
            singer: "Sơn tùng",   
            music:"Nắng ấm xa dần"
          },
      ]
    },
    {
      album: "Album 2",
      songs: [
        {
            name: "14",
            path: "music/4.mp3",
            img: "images/4.jpg",
            singer: "Sơn tùng",   
            music:"Nắng ấm xa dần"
          },
          {
            name: "15",
            path: "music/5.mp3",
            img: "images/5.jpg",
            singer: "Sơn tùng",   
            music:"Nắng ấm xa dần"
          },
          {
           name: "16",
           path: "music/6.mp3",
           img: "images/1.jpg",
           singer: "Sơn tùng",   
            music:"Nắng ấm xa dần"
          }
      ]
    },
  ];
  let tracks = document.querySelector('.tracks');

  for (let i = 0; i < All_song.length; i++) {
      // Create a container for the album
      let albumContainer = document.createElement('div');
      albumContainer.classList.add('album-container');
  
      // Add the album name to the container
      let albumTitle = document.createElement('p');
      albumTitle.textContent = All_song[i].album;
      albumContainer.appendChild(albumTitle);
  
      // Add each song inside the album container
      for (let j = 0; j < All_song[i].songs.length; j++) {
          let songHtml = `
              <div class="song">
                  <div class="img">
                      <img src="${All_song[i].songs[j].img}" alt="${All_song[i].songs[j].name}" />
                  </div>
                  <div class="more">
                      <audio src="${All_song[i].songs[j].path}" id="music${i}_${j}"></audio>
                      <div class="song_info">
                          <p>${All_song[i].songs[j].name}</p>
                          <p>${All_song[i].songs[j].singer}</p>
                          <p>${All_song[i].songs[j].music}</p>
                      </div>
                  </div>
              </div>`;
  
          // Add the song HTML to the album container
          albumContainer.insertAdjacentHTML("beforeend", songHtml);
      }
  
      // Add the album container to the tracks container
      tracks.appendChild(albumContainer);
  
      // Add spacing between album containers
      if (i < All_song.length - 1) {
          let space = document.createElement('div');
          space.style.marginBottom = '20px';
          tracks.appendChild(space);
      }
  }
  
  
  
// Create a new song object
let newsong = [
    {
      name: "1", // tên bài hát
      path: "music/1.mp3",  // file mp3 em tải xuống
      img: "images/1.jpg",    // ảnh bài hát or ca sĩ
      singer: "Sơn tùng",   
      music:"Nắng ấm xa dần"
    },
    {
      name: "2",
      path: "music/2.mp3",
      img: "images/2.jpg",
      singer: "Sơn tùng",   
      music:"Nắng ấm xa dần"
    },
    {
      name: "3",
      path: "music/3.mp3",
      img: "images/3.jpg",
      singer: "Sơn tùng",   
      music:"Nắng ấm xa dần"
    },
    {
      name: "4",
      path: "music/4.mp3",
      img: "images/4.jpg",
      singer: "Sơn tùng",   
      music:"Nắng ấm xa dần"
    },
    {
      name: "5",
      path: "music/5.mp3",
      img: "images/5.jpg",
      singer: "Sơn tùng",   
      music:"Nắng ấm xa dần"
    },
    {
     name: "6",
     path: "music/6.mp3",
     img: "images/1.jpg",
     singer: "Sơn tùng",   
      music:"Nắng ấm xa dần"
    }
  ];
 
  for (let i = 0; i < newsong.length; i++) {
    let Html = ` <div class="song" data-song-index="${i}">
      <div>
        <h5>Danh sách bài hát</h5>
      </div>
      <div class="img">
        <img src="${newsong[i].img}" />
      </div>
      <div class="more">
        <audio src="${newsong[i].path}" id="music${i}"></audio>
        <div class="song_info">
          <p id="title">${newsong[i].name}</p>
          <p>${newsong[i].singer}</p>
          <p>${newsong[i].music}</p>
        </div>
        <button class="add-song">Thêm</button>
        <div class="album-dropdown">
          <label for="albumSelect">Chọn Album:</label>
          <select class="album-select" id="albumSelect">
            <option value="0">Album 1</option>
            <option value="1">Album 2</option>
          </select>
        </div>
      </div>
    </div>`;
  
    tracks.insertAdjacentHTML("beforeend", Html);
  }
  // Add event listeners for the "Thêm" buttons
document.querySelectorAll('.add-song').forEach(function (button) {
  button.addEventListener('click', function () {
    let songElement = button.closest('.song');
    let songIndex = parseInt(songElement.getAttribute('data-song-index'));
    let selectedAlbum = songElement.querySelector('.album-select');
    let albumIndex = parseInt(selectedAlbum.value);

    // Đảm bảo rằng newSong tồn tại và có thuộc tính 'name'
    let newSong = newsong[songIndex];
    if (newSong && newSong.name) {
      // Thêm bài hát vào album tương ứng trong All_song
      All_song[albumIndex].songs.push(newSong);

      // Hiển thị thông báo
      console.log(`Đã thêm bài hát "${newSong.name}" vào Album ${albumIndex + 1}`);

      // Cập nhật UI
      updateUI();
    } else {
      console.error('Lỗi khi truy cập thông tin bài hát.');
    }
  });
});
function updateUI() {
  // Xóa nội dung hiện tại trong container của tracks
  tracks.innerHTML = '';

  for (let i = 0; i < All_song.length; i++) {
    let albumContainer = document.createElement('div');
    albumContainer.classList.add('album-container');

    let albumTitle = document.createElement('p');
    albumTitle.textContent = All_song[i].album;
    albumContainer.appendChild(albumTitle);

    for (let j = 0; j < All_song[i].songs.length; j++) {
      let songHtml = `
        <div class="song">
          <div class="img">
            <img src="${All_song[i].songs[j].img}" alt="${All_song[i].songs[j].name}" />
          </div>
          <div class="more">
            <audio src="${All_song[i].songs[j].path}" id="music${i}_${j}"></audio>
            <div class="song_info">
              <p>${All_song[i].songs[j].name}</p>
              <p>${All_song[i].songs[j].singer}</p>
              <p>${All_song[i].songs[j].music}</p>
            </div>
          </div>
        </div>`;

      albumContainer.insertAdjacentHTML("beforeend", songHtml);
    }

    tracks.appendChild(albumContainer);

    if (i < All_song.length - 1) {
      let space = document.createElement('div');
      space.style.marginBottom = '20px';
      tracks.appendChild(space);
    }
  }

  // Thêm bài hát từ newsong
  for (let i = 0; i < newsong.length; i++) {
    let Html = ` 
      <div class="song" data-song-index="${i}">
        <div>
          <h5>Danh sách bài hát</h5>
        </div>
        <div class="img">
          <img src="${newsong[i].img}" />
        </div>
        <div class="more">
          <audio src="${newsong[i].path}" id="music${i}"></audio>
          <div class="song_info">
            <p id="title">${newsong[i].name}</p>
            <p>${newsong[i].singer}</p>
            <p>${newsong[i].music}</p>
          </div>
          <button class="add-song">Thêm</button>
          <button class="delete-song">Xoá</button> 
          <div class="album-dropdown">
            <label for="albumSelect">Chọn Album:</label>

            <select class="album-select" id="albumSelect">
              <option value="0">Album 1</option>
              <option value="1">Album 2</option>
            </select>
          </div>
        </div>
      </div>`;

    tracks.insertAdjacentHTML("beforeend", Html);
  }

  // Thêm lại sự kiện cho nút "Thêm" trong bài hát mới
  document.querySelectorAll('.add-song').forEach(function (button) {
    button.addEventListener('click', function () {
      let songElement = button.closest('.song');
      let songIndex = parseInt(songElement.getAttribute('data-song-index'));
      let selectedAlbum = songElement.querySelector('.album-select');
      let albumIndex = parseInt(selectedAlbum.value);

      let newSong = newsong[songIndex];
      if (newSong && newSong.name) {
        All_song[albumIndex].songs.push(newSong);

        console.log(`Đã thêm bài hát "${newSong.name}" vào Album ${albumIndex + 1}`);

        // Cập nhật lại giao diện
        updateUI();
      } else {
        console.error('Lỗi khi truy cập thông tin bài hát.');
      }
    });
  });
  document.querySelectorAll('.delete-song').forEach(function (button) {
    button.addEventListener('click', function () {
      let songElement = button.closest('.song');
      let songIndex = parseInt(songElement.getAttribute('data-song-index'));
  
      // Lấy chỉ mục của album chứa bài hát trong All_song
      let albumIndexInAllSong = All_song.findIndex(album => album.songs.includes(newsong[songIndex]));
      // Xoá bài hát khỏi danh sách All_song
      if (albumIndexInAllSong !== -1) {
        All_song[albumIndexInAllSong].songs = All_song[albumIndexInAllSong].songs.filter(song => song !== newsong[songIndex]);
      }
        // Hiển thị thông báo
      console.log(`Đã xoá bài hát "${newsong[songIndex].name}" khỏi danh sách All_song`);  
      // Cập nhật UI
      updateUI();
    });
  });
  
  
  
}