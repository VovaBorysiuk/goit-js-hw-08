import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const VIDEO_CUR_TIME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function getCurrentTime(currentTime) {
  localStorage.setItem(VIDEO_CUR_TIME, currentTime.seconds);
}
player.on('timeupdate', throttle(getCurrentTime, 1000));

const currentValue = localStorage.getItem(VIDEO_CUR_TIME) || 0;
player.setCurrentTime(currentValue);

