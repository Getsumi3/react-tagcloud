import { jsx as p } from "react/jsx-runtime";
const y = (e, t, n) => {
  const { className: s, style: a, ...o } = e.props || {}, c = t + "px", r = e.key || e.value, i = { ...d, color: n, fontSize: c, ...a };
  let l = "tag-cloud-tag";
  return s && (l += " " + s), /* @__PURE__ */ p("span", { className: l, style: i, ...o, children: e.value }, r);
}, d = {
  margin: "0px 3px",
  verticalAlign: "middle",
  display: "inline-block"
};
export {
  y as defaultRenderer
};
