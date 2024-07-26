/**
 * Random number in specified range
 * @returns random <b>float</b> in specified range
 */
export function randomRange(min: number, max: number): number {
  return (Math.random() * (max - min) + min);
}