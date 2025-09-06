export function getContrastingTextColor(hex: string): string {
  const r = parseInt(hex.substring(1, 3), 16) / 255;
  const g = parseInt(hex.substring(3, 5), 16) / 255;
  const b = parseInt(hex.substring(5, 7), 16) / 255;

  const luminance = 0.2126 * getChannel(r) +
    0.7152 * getChannel(g) +
    0.0722 * getChannel(b);

  return luminance > 0.5 ? "#000000" : "#FFFFFF";
}

function getChannel(channel: number): number {
  return channel <= 0.03928
    ? channel / 12.92
    : Math.pow((channel + 0.055) / 1.055, 2.4);
}
