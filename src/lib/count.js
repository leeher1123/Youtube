// eslint-disable-next-line consistent-return
export const count = (sum) => {
  if (sum < 1000) return `${sum}`;
  if (sum >= 1000 && sum < 10000) {
    return `${(sum / 1000).toFixed(1)}천`;
  }
  if (sum >= 10000 && sum < 100000) {
    return `${Math.floor(sum / 10000)}만`;
  }
  if (sum >= 100000 && sum < 1000000) {
    return `${Math.floor(sum / 10000)}만`;
  }
  if (sum >= 1000000) {
    return `${Math.floor(sum / 10000)}만`;
  }
};
