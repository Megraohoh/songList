//Practice jQuery
$(document).ready(function () {
    const btnLoadSongs = $('#load-songs')
    const divSongList = $('#song-list')

    btnLoadSongs.click(function () {
        $.ajax({ url: "songs.json", method: "GET" })
            .then( //when json is loaded...response is in relation to the loaded json
                response => response.songs.forEach(song => divSongList.append(
                    `    
                <section class="song">
                    <h1 class="song__title">${song.title}</h1>
                    <section class="song__description">
                    Performed by ${song.artist} on the album ${song.album}</section>
                </section>
                `
                ))
            )
    })
})
    /*
    Chain a `.then()` method to the ajax call, and when
    it is complete build a DOM component for each song with
    the following structure. Use the jQuery append() method
    to put an HTML representation of each song the DOM as a
    child component of the .
    
    <section class="song">
    <h1 class="song__title">{Title of song}</h1>
    <section class="song__description">
    Performed by {artist} on the album {album}
    </section>
    </section>
    */
