$(document).ready(function() {

  function printSongs(songList) {
    console.log("argument value", songList);

    for (var i = 0; i < songList.songs.length; i++) {
      var currentSong = songList.songs[i];
      console.log("currentSong", currentSong);
      $(".flex-item right__sidebar").append("<h1>" + currentSong.title + "</h1>");
      $(".flex-item right__sidebar").append("<div>Performed by " + currentSong.artist + "</div>");
      $(".flex-item right__sidebar").append("<div>On the album " + currentSong.album + "</div>");
    }
  }

  $.ajax({
    url: "songs.json"
  }).done(function(list) {
    console.log("list", list);
    printSongs(list);
  });

  $("#more").click(function() {
    $.ajax({
      url: "songstwo.json"
    }).done(function(songList) {
      $(".flex-item right__sidebar").append(printSongs(songList));
      console.log(songList)
    });
  });

  var more = document.getElementById("more");

});