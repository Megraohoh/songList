$(document).ready(function() {
    // Use jQuery to get a reference to `load-songs`
    const loadSongsBtn = $("#load-songs")
    // Use jQuery to get a reference to `song-list`
    const songList = $("#song-list")
    //Use ajax to load songs.json
    loadSongsBtn.on("click", function() {
        $.ajax("http://localhost:8088/songs").then(allSongs => {
            console.log(allSongs.forEach(
                currentSection => {
                    const songSection = document.createElement("section")
                    songSection.setAttribute("class", "song")
                }
            ))
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
})