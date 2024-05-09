const o = (t, n, e, r, u) => e - n === 0 ? Math.round((r + u) / 2) : Math.round((t - n) * (u - r) / (e - n) + r), c = (t, n) => Object.keys(t).reduce((e, r) => (~n.indexOf(r) || (e[r] = t[r]), e), {});
function f(t, n) {
  return n.reduce((e, r) => (e[r] = t[r], e), {});
}
function s(t) {
  return Object.keys(t);
}
export {
  o as fontSizeConverter,
  s as keys,
  c as omit,
  f as pick
};
