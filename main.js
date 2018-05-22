// const $ = require("jquery")
$(document).ready(function() {
    // Use jQuery to get a reference to `load-songs`
    const loadSongsBtn = $("#load-songs")
    //Use ajax to load songs.json
    loadSongsBtn.on("click", function() {
        $.ajax("http://localhost:8088/songs").then(allSongs => {
            allSongs.forEach(currentSong => {
                // Use jQuery to get a reference to `song-list`
                    const songList = $("#song-list")

                    const songSection = document.createElement("section")
                    songSection.setAttribute("class", "song")
                    songList.append(songSection)

                    const songHeader = document.createElement("h1")
                    songHeader.textContent = currentSong.title
                    songHeader.setAttribute("class", "song__title")

                    songSection.append(songHeader)

                    const songDescriptionSection = document.createElement("section")
                    songDescriptionSection.setAttribute("class", "song__description")
                    songDescriptionSection.textContent = "Performed by " + `${currentSong.artist}` + " on the album " + `${currentSong.album}`
                    songSection.append(songDescriptionSection)
                }
            )
        })
    })
})