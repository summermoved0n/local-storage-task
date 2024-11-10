import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import { createStorage, getStorage } from './storage-service';

const STORAGE_NAME = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const time = getStorage(STORAGE_NAME);

if (time) {
  player.setCurrentTime(time);
}

player.on(
  'timeupdate',
  throttle(({ seconds }) => {
    createStorage(STORAGE_NAME, seconds);
  }, 1000)
);
