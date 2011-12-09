$(document).ready(function(){
  $("#tweets").tweet({
    join_text: "auto",
    username: "tvrb",
    avatar_size: 48,
    count: 4,
    loading_text: "loading tweets...",
    template: '{avatar}{text} {time}'
  });
});
