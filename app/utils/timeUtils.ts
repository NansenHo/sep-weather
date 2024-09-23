export function extractHourFromTime(time: string) {
  return Number(time.slice(11, 13));
}
