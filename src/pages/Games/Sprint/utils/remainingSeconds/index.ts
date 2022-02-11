import { TIME_DURATION } from '../consts';

let remainingSeconds = TIME_DURATION;

export const getRemainingSeconds = () => remainingSeconds;
export const setRemainingSeconds = (value: number) => (remainingSeconds = value);
