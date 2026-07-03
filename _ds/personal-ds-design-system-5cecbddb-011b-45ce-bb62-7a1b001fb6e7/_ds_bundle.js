/* @ds-bundle: {"format":3,"namespace":"PersonalDSDesignSystem_5cecbd","components":[],"sourceHashes":{"ui_kits/buttons/Button.jsx":"97e85d6569d0","ui_kits/buttons/Icons.jsx":"c58e0c9589f8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PersonalDSDesignSystem_5cecbd = window.PersonalDSDesignSystem_5cecbd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Button.jsx — pixel-recreation of the Personal DS button system.
// 5 types × 3 sizes × 5 states = 75 variants (matches Figma exactly).
// All measurements & colors lifted from the .fig pseudocode.

const BUTTON_SIZES = {
  large: {
    height: 48,
    padX: 20,
    padY: 14,
    gap: 8,
    font: 16,
    lineH: 18,
    icon: 20,
    radius: 8
  },
  medium: {
    height: 40,
    padX: 16,
    padY: 10,
    gap: 6,
    font: 14,
    lineH: 16,
    icon: 20,
    radius: 8
  },
  small: {
    height: 32,
    padX: 12,
    padY: 8,
    gap: 6,
    font: 12,
    lineH: 14,
    icon: 16,
    radius: 8
  }
};

// Each cell: { bg, border, fg, shadow }
// shadow: 'sm' (default), 'xs' (medium/small default), 'focus' (focus ring), 'none'
const BUTTON_PALETTE = {
  primary: {
    default: {
      bg: 'var(--brand-900)',
      border: 'var(--brand-900)',
      fg: 'var(--neutral-0)',
      shadow: 'sm'
    },
    hover: {
      bg: 'var(--brand-500)',
      border: 'var(--brand-500)',
      fg: 'var(--neutral-0)',
      shadow: 'sm'
    },
    pressed: {
      bg: 'var(--brand-500)',
      border: 'var(--brand-600)',
      fg: 'var(--indigo-200)',
      shadow: 'sm'
    },
    focus: {
      bg: 'var(--brand-500)',
      border: 'transparent',
      fg: 'var(--neutral-50)',
      shadow: 'focus'
    },
    disabled: {
      bg: 'var(--brand-300)',
      border: 'var(--brand-500)',
      fg: 'var(--indigo-100)',
      shadow: 'sm'
    }
  },
  secondary: {
    default: {
      bg: 'var(--indigo-50)',
      border: 'var(--indigo-100)',
      fg: 'var(--brand-900)',
      shadow: 'sm'
    },
    hover: {
      bg: 'var(--indigo-100)',
      border: 'var(--indigo-200)',
      fg: 'var(--brand-900)',
      shadow: 'sm'
    },
    pressed: {
      bg: 'var(--indigo-200)',
      border: 'var(--indigo-300)',
      fg: 'var(--brand-800)',
      shadow: 'sm'
    },
    focus: {
      bg: 'var(--indigo-50)',
      border: 'transparent',
      fg: 'var(--brand-900)',
      shadow: 'focus'
    },
    disabled: {
      bg: 'var(--indigo-50)',
      border: 'var(--indigo-100)',
      fg: 'var(--indigo-300)',
      shadow: 'sm'
    }
  },
  tertiary: {
    default: {
      bg: 'var(--neutral-0)',
      border: 'var(--neutral-400)',
      fg: 'var(--neutral-700)',
      shadow: 'sm'
    },
    hover: {
      bg: 'var(--neutral-50)',
      border: 'var(--neutral-400)',
      fg: 'var(--neutral-900)',
      shadow: 'sm'
    },
    pressed: {
      bg: 'var(--neutral-100)',
      border: 'var(--neutral-500)',
      fg: 'var(--neutral-900)',
      shadow: 'sm'
    },
    focus: {
      bg: 'var(--neutral-0)',
      border: 'transparent',
      fg: 'var(--neutral-700)',
      shadow: 'focus'
    },
    disabled: {
      bg: 'var(--neutral-0)',
      border: 'var(--neutral-300)',
      fg: 'var(--neutral-300)',
      shadow: 'sm'
    }
  },
  outlined: {
    default: {
      bg: 'var(--neutral-0)',
      border: 'var(--brand-900)',
      fg: 'var(--brand-900)',
      shadow: 'sm'
    },
    hover: {
      bg: 'var(--indigo-50)',
      border: 'var(--brand-900)',
      fg: 'var(--brand-900)',
      shadow: 'sm'
    },
    pressed: {
      bg: 'var(--indigo-100)',
      border: 'var(--brand-900)',
      fg: 'var(--brand-800)',
      shadow: 'sm'
    },
    focus: {
      bg: 'var(--neutral-0)',
      border: 'var(--brand-900)',
      fg: 'var(--brand-900)',
      shadow: 'focus'
    },
    disabled: {
      bg: 'var(--neutral-0)',
      border: 'var(--brand-300)',
      fg: 'var(--brand-300)',
      shadow: 'sm'
    }
  },
  link: {
    default: {
      bg: 'transparent',
      border: 'transparent',
      fg: 'var(--brand-900)',
      shadow: 'none'
    },
    hover: {
      bg: 'transparent',
      border: 'transparent',
      fg: 'var(--brand-500)',
      shadow: 'none'
    },
    pressed: {
      bg: 'transparent',
      border: 'transparent',
      fg: 'var(--brand-800)',
      shadow: 'none'
    },
    focus: {
      bg: 'transparent',
      border: 'transparent',
      fg: 'var(--brand-900)',
      shadow: 'focus'
    },
    disabled: {
      bg: 'transparent',
      border: 'transparent',
      fg: 'var(--brand-300)',
      shadow: 'none'
    }
  }
};
const SHADOW_MAP = {
  sm: 'var(--shadow-sm)',
  xs: 'var(--shadow-xs)',
  focus: 'var(--shadow-focus)',
  none: 'none'
};
function Button({
  size = 'medium',
  type = 'primary',
  state,
  // optional: forces a state ('default','hover','pressed','focus','disabled')
  iconLeft = null,
  // ReactNode (svg)
  iconRight = null,
  // ReactNode (svg)
  children = 'Button CTA',
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const [focused, setFocused] = React.useState(false);
  const liveState = state ?? (rest.disabled ? 'disabled' : pressed ? 'pressed' : hover ? 'hover' : focused ? 'focus' : 'default');
  const sz = BUTTON_SIZES[size];
  const pal = BUTTON_PALETTE[type][liveState];
  const shadow = size === 'large' && liveState !== 'focus' ? 'sm' : pal.shadow;
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    disabled: rest.disabled,
    style: {
      height: sz.height,
      padding: `${sz.padY}px ${sz.padX}px`,
      gap: sz.gap,
      borderRadius: sz.radius,
      background: pal.bg,
      border: `1px solid ${pal.border}`,
      color: pal.fg,
      boxShadow: SHADOW_MAP[shadow],
      fontFamily: 'var(--font-body)',
      fontWeight: 500,
      fontSize: sz.font,
      lineHeight: `${sz.lineH}px`,
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: rest.disabled ? 'not-allowed' : 'pointer',
      outline: 'none',
      transition: 'background 120ms ease, border-color 120ms ease, color 120ms ease, box-shadow 120ms ease',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      width: sz.icon,
      height: sz.icon,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      width: sz.icon,
      height: sz.icon,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, iconRight));
}
window.Button = Button;
window.BUTTON_SIZES = BUTTON_SIZES;
window.BUTTON_PALETTE = BUTTON_PALETTE;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// ui_kits/buttons/Icons.jsx
try { (() => {
// Icons.jsx — Lucide-style 20px icons. The Figma uses a generic "icon placeholder"
// (a circle), so for the kit we ship a small set of clean stroke icons that
// match the 20×20 / 16×16 box sizes. Stroke = currentColor so they inherit
// the button's text color automatically.

function makeIcon(paths) {
  return function Icon({
    size = 20,
    strokeWidth = 2,
    style = {}
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      style: style,
      "aria-hidden": "true"
    }, paths);
  };
}
const ArrowRight = makeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 5 7 7-7 7"
})));
const ArrowLeft = makeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M19 12H5"
}), /*#__PURE__*/React.createElement("path", {
  d: "m12 19-7-7 7-7"
})));
const Plus = makeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M12 5v14"
}), /*#__PURE__*/React.createElement("path", {
  d: "M5 12h14"
})));
const Check = makeIcon(/*#__PURE__*/React.createElement("path", {
  d: "M20 6 9 17l-5-5"
}));
const X = makeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18"
}), /*#__PURE__*/React.createElement("path", {
  d: "m6 6 12 12"
})));
const Download = makeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "7 10 12 15 17 10"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "15",
  x2: "12",
  y2: "3"
})));
const Upload = makeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}), /*#__PURE__*/React.createElement("polyline", {
  points: "17 8 12 3 7 8"
}), /*#__PURE__*/React.createElement("line", {
  x1: "12",
  y1: "3",
  x2: "12",
  y2: "15"
})));
const Search = makeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "8"
}), /*#__PURE__*/React.createElement("line", {
  x1: "21",
  y1: "21",
  x2: "16.65",
  y2: "16.65"
})));
const Settings = makeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "12",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"
})));
const Heart = makeIcon(/*#__PURE__*/React.createElement("path", {
  d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
}));
const Share = makeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "5",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "6",
  cy: "12",
  r: "3"
}), /*#__PURE__*/React.createElement("circle", {
  cx: "18",
  cy: "19",
  r: "3"
}), /*#__PURE__*/React.createElement("line", {
  x1: "8.59",
  y1: "13.51",
  x2: "15.42",
  y2: "17.49"
}), /*#__PURE__*/React.createElement("line", {
  x1: "15.41",
  y1: "6.51",
  x2: "8.59",
  y2: "10.49"
})));
const Trash = makeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("polyline", {
  points: "3 6 5 6 21 6"
}), /*#__PURE__*/React.createElement("path", {
  d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
})));
const Edit = makeIcon(/*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
  d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
}), /*#__PURE__*/React.createElement("path", {
  d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
})));
window.Icons = {
  ArrowRight,
  ArrowLeft,
  Plus,
  Check,
  X,
  Download,
  Upload,
  Search,
  Settings,
  Heart,
  Share,
  Trash,
  Edit
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/buttons/Icons.jsx", error: String((e && e.message) || e) }); }

})();
