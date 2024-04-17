import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const key_Player = 'videoplayer - current - time';

/* const currentVideoTime = JSON.parse(localStorage.getItem(key_Player)) || 0; */

player.on('timeupdate', throttle(localStoragePlayerTime, 1000));

function localStoragePlayerTime({ seconds }) {
  localStorage.setItem(key_Player, seconds);
}

if (localStorage.getItem(key_Player)) {
  player.setCurrentTime(localStorage.getItem(key_Player));
}

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
