import { sineInOut } from "svelte/easing";

export const fadeIn = () => ({
  duration: 300,
  delay: 300,
  easing: sineInOut,
  css: (t) => {return `opacity: ${t};`}
});

export const fadeOut = () => ({
  duration: 300,
  delay: 0,
  easing: sineInOut,
  css: (t) => {return `opacity: ${t};`}
});