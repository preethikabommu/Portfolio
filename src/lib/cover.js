/** Eggplant-to-orchid "cover art" gradient; the hue nudges each card within the purple/pink family. */
export const coverStyle = (hue) => ({
  background: `linear-gradient(135deg, hsl(${hue} 52% 38%), hsl(${hue + 24} 58% 24%))`,
});
