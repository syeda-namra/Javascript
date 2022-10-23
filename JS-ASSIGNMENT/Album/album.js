// function make_album(artistName,albumTitle){

    
//     const musicAlbum = Object.assign({},artistName,albumTitle);
//     // make_album.aName=artistName ;
//     // make_album.aTitle=albumTitle;
//     console.log(musicAlbum);

// }

// function make_album(artistName,albumTitle){

//     this.artistName = artistName;
//     this.albumTitle = albumTitle;

//     console.log();
// }


function make_album(artistName,albumTitle, trackNumber= null ){

    const musicAlbum={
        "Artist Name": artistName,
        "Album Title" : albumTitle
    }

    if (trackNumber==0){

        musicAlbum['Numbers of Tracks'] = trackNumber;
    }else{

        musicAlbum['Numbers of Tracks'] = trackNumber
    }

    return musicAlbum;
}

album1= make_album("Atif Aslam", "DOURI", 4);
console.log(album1);

album2= make_album("Michael Jaksob","Life");
console.log(album2);