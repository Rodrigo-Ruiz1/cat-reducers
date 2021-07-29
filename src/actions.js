export const ACTION_NAP = 'nap';
export const ACTION_EAT = 'eat';
export const ACTION_PLAY = 'play';

export function actionNapping() {
    return {
        type: ACTION_NAP
    };
}

export function actionEating() {
    return {
        type: ACTION_EAT
    };
}

export function actionPlaying() {
    return {
        type: ACTION_PLAY
    };
}