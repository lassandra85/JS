import Player from '@vimeo/player';
/* import throttle from 'lodash.throttle'; */

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
console.log(player);

const currentVideoTime =
  JSON.parse(localStorage.getItem('videoplayer - current - time')) || 0;

console.log(currentVideoTime);

player.on('timeupdate', function ({ seconds }) {
  localStorage.setItem('videoplayer - current - time', JSON.stringify(seconds));
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

/* localStorage.clear(); */
