# NSS Exercise: Load a song list after button click

### Description:
>  Attach a click handler to the button with jQuery. When the button is clicked, use $.ajax() to load `songs.json` from the file system.  Chain a `.then()` method to the ajax call, and when it is complete build a DOM component for each song with the following structure. Use the jQuery append() method to put an HTML representation of each song the DOM as a child component of the section.
            >```
            > <section class="song">
            >   <h1 class="song__title">{Title of song}</h1>
            >   <section class="song__description">
            >     Performed by {artist} on the album {album}
            > </section>
            ></section> 
            >``` 


### Final Result:
> Obviously not a fabulous site, but it fulfills the requirements.


<!-- ![Articles Screenshot](https://raw.githubusercontent.com/morecallan/CSS-exercise-articles/master/screenshots/Article.png) -->


### How to run (Node must be installed on your machine):
```
git clone git@github.com:Megraohoh/songList.git
cd songList
npm install http-server -g
http-server -p 8080
```

This will show in your browser at:
`http://localhost:8080`

### Contributors:
[Meghan Debity](https://github.com/Megraohoh)