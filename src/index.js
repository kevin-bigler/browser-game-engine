'use strict';

// import Game from './main/state/Game';
// import {getState} from './main/state/states';
// import bb from './main/bb';
// import GameLoop from './main/GameLoop';
// import writeFps from './main/writeFps';

import Controller from './main/Controller';

const main = () => {
    console.log('main start');
    // bb.currentState = 'Game';
    // // TODO make fps configurable
    // bb.fps = 60.0;
    // const gameLoop = new GameLoop({fps: bb.fps, fn: getUpdateFn, onFpsUpdate: writeFps});
    // gameLoop.start();
    // TODO: draw the stuff


    // const keyPresses = new Map();
    // document.addEventListener('keydown', (e) => {
    //     if (!keyPresses.has(e.key)) {
    //         keyPresses.set(e.key, {startTime: time()});
    //         console.log('Key down:', e);
    //     } else {
    //         const {startTime, duration} = keyPresses.get(e.key);
    //         keyPresses.set(e.key, {duration: time() - startTime, startTime});
    //     }
    // });
    // document.addEventListener('keyup', (e) => {
    //     keyPresses.delete(e.key);
    //     console.log('Key up:', e);
    // });

    const defaultKeyMap = null; // TODO
    const controller = new Controller({keyMap: defaultKeyMap});
};

const time = () => +new Date();

// const getUpdateFn = () => {
//     const state = getState(bb.currentState);
//     state.update();
// };

main();