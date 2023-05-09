var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_exports = {};
__export(assets_manifest_exports, {
  default: () => assets_manifest_default
});
var assets_manifest_default, init_assets_manifest = __esm({
  "server-assets-manifest:@remix-run/dev/assets-manifest"() {
    assets_manifest_default = { version: "cc3cf4b0", entry: { module: "/build/entry.client-2W64VSRG.js", imports: ["/build/_shared/chunk-FF2YNTUO.js", "/build/_shared/chunk-BSQJPG6F.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-3HNX524D.js", imports: ["/build/_shared/chunk-UMMBYS3W.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-IEUT66JW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/songs": { id: "routes/songs", parentId: "root", path: "songs", index: void 0, caseSensitive: void 0, module: "/build/routes/songs-P2Z7XRT3.js", imports: ["/build/_shared/chunk-7SZNMF2N.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/songs.$author": { id: "routes/songs.$author", parentId: "routes/songs", path: ":author", index: void 0, caseSensitive: void 0, module: "/build/routes/songs.$author-OK5AVJNW.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/songs.$author.$song": { id: "routes/songs.$author.$song", parentId: "routes/songs.$author", path: ":song", index: void 0, caseSensitive: void 0, module: "/build/routes/songs.$author.$song-J7LZXVAR.js", imports: ["/build/_shared/chunk-UMMBYS3W.js", "/build/_shared/chunk-7SZNMF2N.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: "/build/css-bundle-W6XTMA3D.css", hmr: void 0, url: "/build/manifest-CC3CF4B0.js" };
  }
});

// node_modules/@remix-run/css-bundle/dist/server.js
var require_server = __commonJS({
  "node_modules/@remix-run/css-bundle/dist/server.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: !0 });
    var assetsManifest = (init_assets_manifest(), __toCommonJS(assets_manifest_exports));
    function _interopDefaultLegacy(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var assetsManifest__default = /* @__PURE__ */ _interopDefaultLegacy(assetsManifest), cssBundleHref2 = assetsManifest__default.default.cssBundleHref;
    exports.cssBundleHref = cssBundleHref2;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          console.error(error), responseStatusCode = 500;
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
var import_css_bundle = __toESM(require_server()), import_react6 = require("@remix-run/react");

// app/containers/ThemeContextContainer.tsx
var import_react3 = require("react");

// app/components/ThemeContext.ts
var import_react2 = __toESM(require("react"));

// app/constants/themes.ts
var Themes = /* @__PURE__ */ ((Themes2) => (Themes2.LIGHT = "light", Themes2.DARK = "dark", Themes2))(Themes || {});

// app/components/ThemeContext.ts
var CHANGE_THEME_ACTION = "CHANGE_THEME_ACTION", ThemeContext = import_react2.default.createContext({
  state: { theme: "dark" /* DARK */ }
});

// app/containers/ThemeContextContainer.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function themeReducer(state, action) {
  return action.type === CHANGE_THEME_ACTION ? { ...state, ...action.payload } : state;
}
var ThemeContextContainer = ({ children }) => {
  let [state, dispatch] = (0, import_react3.useReducer)(themeReducer, { theme: "dark" /* DARK */ }), contextValue = { state, dispatch };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(ThemeContext.Provider, { value: contextValue, children });
}, ThemeContextContainer_default = ThemeContextContainer;

// app/components/Header/Header.tsx
var import_react4 = require("react"), import_react5 = require("@remix-run/react"), import_IconButton = __toESM(require("@mui/material/IconButton"));

// app/constants/routes.ts
var Routes = /* @__PURE__ */ ((Routes2) => (Routes2.CORE = "/", Routes2.SONGS = "/songs", Routes2.CHORDS = "/chords", Routes2))(Routes || {}), routes_default = Routes;

// app/assets/Moon.tsx
var import_jsx_runtime3 = require("react/jsx-runtime"), Moon = (props) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    style: { width: "24px", height: "24px" },
    children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("g", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        "path",
        {
          fillRule: "nonzero",
          d: "M10 6a8 8 0 0 0 11.955 6.956C21.474 18.03 17.2 22 12 22 6.477 22 2 17.523 2 12c0-5.2 3.97-9.474 9.044-9.955A7.963 7.963 0 0 0 10 6zm-6 6a8 8 0 0 0 8 8 8.006 8.006 0 0 0 6.957-4.045c-.316.03-.636.045-.957.045-5.523 0-10-4.477-10-10 0-.321.015-.64.045-.957A8.006 8.006 0 0 0 4 12zm14.164-9.709L19 2.5v1l-.836.209a2 2 0 0 0-1.455 1.455L16.5 6h-1l-.209-.836a2 2 0 0 0-1.455-1.455L13 3.5v-1l.836-.209A2 2 0 0 0 15.29.836L15.5 0h1l.209.836a2 2 0 0 0 1.455 1.455zm5 5L24 7.5v1l-.836.209a2 2 0 0 0-1.455 1.455L21.5 11h-1l-.209-.836a2 2 0 0 0-1.455-1.455L18 8.5v-1l.836-.209a2 2 0 0 0 1.455-1.455L20.5 5h1l.209.836a2 2 0 0 0 1.455 1.455z"
        }
      )
    ] })
  }
), Moon_default = Moon;

// app/assets/Sun.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), Sun = (props) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
  "svg",
  {
    stroke: "currentColor",
    fill: "currentColor",
    strokeWidth: "0",
    viewBox: "0 0 24 24",
    height: "1em",
    width: "1em",
    xmlns: "http://www.w3.org/2000/svg",
    style: { width: "24px", height: "24px" },
    children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("g", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("path", { fill: "none", d: "M0 0h24v24H0z" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "path",
        {
          fillRule: "nonzero",
          d: "M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z"
        }
      )
    ] })
  }
), Sun_default = Sun;

// app/components/Header/Header.module.css
var Header_module_default = { header: "Aj8Bn", static: "K0yYh", fixed: "CC4RA", sticky: "qIyX3", relative: "gWjL9", transparent: "dxGo4", white: "u59Ql", slots: "_1F4zl", slot: "eFW-X" };

// app/components/Header/Header.tsx
var import_jsx_runtime5 = require("react/jsx-runtime"), Header = () => {
  let {
    state: { theme },
    dispatch
  } = (0, import_react4.useContext)(ThemeContext), changeTheme = (theme2) => dispatch({
    type: CHANGE_THEME_ACTION,
    payload: { theme: theme2 }
  });
  function toggleTheme() {
    theme === "light" /* LIGHT */ ? changeTheme("dark" /* DARK */) : changeTheme("light" /* LIGHT */);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { id: "header", className: Header_module_default.header, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: Header_module_default.slots, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: Header_module_default.slot }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: Header_module_default.slot, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.NavLink, { to: routes_default.CORE, children: "Lyrics" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.NavLink, { to: routes_default.CHORDS, children: "Chords" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: Header_module_default.slot, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_IconButton.default, { onClick: toggleTheme, "aria-label": "change theme", component: "label", children: theme === "light" /* LIGHT */ ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Moon_default, {}) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Sun_default, {}) }) })
  ] }) });
}, Header_default = Header;

// app/root.tsx
var import_jsx_runtime6 = require("react/jsx-runtime"), links = () => [
  ...import_css_bundle.cssBundleHref ? [{ rel: "stylesheet", href: import_css_bundle.cssBundleHref }, {
    rel: "stylesheet",
    href: "~/styles/global.css"
  }] : [{ rel: "stylesheet", href: "~/styles/global.css" }]
];
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("html", { lang: "ru", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(ThemeContextContainer_default, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Header_default, {}),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.Outlet, {})
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react6.LiveReload, {})
    ] })
  ] });
}

// app/routes/songs.$author.$song.tsx
var songs_author_song_exports = {};
__export(songs_author_song_exports, {
  default: () => Song,
  meta: () => meta
});
var import_react11 = require("react"), import_react12 = require("@remix-run/react");

// app/constants/songs.json
var songs_default = {
  "5nizza": {
    \u0412\u0435\u0441\u043D\u0430: {
      path: "5nizza - \u0412\u0435\u0441\u043D\u0430.txt"
    },
    \u0421\u0442\u0440\u0435\u043B\u0430: {
      path: "5nizza - \u0421\u0442\u0440\u0435\u043B\u0430.txt"
    }
  },
  "A Great Big World & Christina Aguilera": {
    "Say Something": {
      path: "A Great Big World & Christina Aguilera - Say Something.txt"
    }
  },
  "Animal Jazz": {
    "\u0422\u0440\u0438 \u043F\u043E\u043B\u043E\u0441\u043A\u0438": {
      path: "Animal Jazz - \u0422\u0440\u0438 \u043F\u043E\u043B\u043E\u0441\u043A\u0438.txt"
    }
  },
  "Billie Eilish & Khalid": {
    Lovely: {
      path: "Billie Eilish & Khalid - Lovely.txt"
    }
  },
  "Chris Isaak": {
    "Wicked Game": {
      path: "Chris Isaak - Wicked Game.txt"
    }
  },
  Coldplay: {
    "The Scientist": {
      path: "Coldplay - The Scientist.txt"
    }
  },
  "Ed Sheeran": {
    Perfect: {
      path: "Ed Sheeran - Perfect.txt"
    },
    "The A Team Chords": {
      path: "Ed Sheeran - The A Team Chords.txt"
    }
  },
  "Elvira T": {
    \u0422\u0430\u043A\u0441\u0438: {
      path: "Elvira T - \u0422\u0430\u043A\u0441\u0438.txt"
    }
  },
  Fl\u0451ur: {
    \u0428\u0435\u043B\u043A\u043E\u043F\u0440\u044F\u0434: {
      path: "Fl\u0451ur - \u0428\u0435\u043B\u043A\u043E\u043F\u0440\u044F\u0434.txt"
    }
  },
  "Hi-Fi": {
    "\u0421\u0435\u0434\u044C\u043C\u043E\u0439 \u043B\u0435\u043F\u0435\u0441\u0442\u043E\u043A": {
      path: "Hi-Fi - \u0421\u0435\u0434\u044C\u043C\u043E\u0439 \u043B\u0435\u043F\u0435\u0441\u0442\u043E\u043A.txt"
    }
  },
  IOWA: {
    \u041C\u0430\u043C\u0430: {
      path: "IOWA - \u041C\u0430\u043C\u0430.txt"
    },
    "\u041E\u0434\u043D\u043E \u0438 \u0442\u043E \u0436\u0435": {
      path: "IOWA - \u041E\u0434\u043D\u043E \u0438 \u0442\u043E \u0436\u0435.txt"
    }
  },
  "James Arthur": {
    "Lasting Lover": {
      path: "James Arthur - Lasting Lover.txt"
    },
    "Say You Wont Let Go": {
      path: "James Arthur - Say You Wont Let Go.txt"
    },
    "Train Wreck": {
      path: "James Arthur - Train Wreck.txt"
    },
    "Wrecking Ball": {
      path: "James Arthur - Wrecking Ball.txt"
    }
  },
  Jony: {
    \u041A\u043E\u043C\u0435\u0442\u0430: {
      path: "Jony - \u041A\u043E\u043C\u0435\u0442\u0430.txt"
    },
    \u0422\u0438\u0442\u0440\u044B: {
      path: "Jony - \u0422\u0438\u0442\u0440\u044B.txt"
    }
  },
  Kodaline: {
    "All I Want": {
      path: "Kodaline - All I Want.txt"
    }
  },
  "Lewis Capaldi": {
    Bruises: {
      path: "Lewis Capaldi - Bruises.txt"
    },
    "Someone You Loved": {
      path: "Lewis Capaldi - Someone You Loved.txt"
    }
  },
  Lifehouse: {
    Storm: {
      path: "Lifehouse - Storm.txt"
    }
  },
  "Limp Bizkit": {
    "Behind Blue Eyes": {
      path: "Limp Bizkit - Behind Blue Eyes.txt"
    }
  },
  Lumen: {
    \u0413\u043E\u0440\u0435\u0442\u044C: {
      path: "Lumen - \u0413\u043E\u0440\u0435\u0442\u044C.txt"
    },
    \u0421\u043A\u043E\u043B\u044C\u043A\u043E: {
      path: "Lumen - \u0421\u043A\u043E\u043B\u044C\u043A\u043E.txt"
    }
  },
  "Mary Gu": {
    \u041F\u0430\u043F\u0430: {
      path: "Mary Gu - \u041F\u0430\u043F\u0430.txt"
    }
  },
  Metallica: {
    "Nothing Else Matters": {
      path: "Metallica - Nothing Else Matters.txt"
    }
  },
  "Miyagi & Andy Panda": {
    \u041F\u0430\u0442\u0440\u043E\u043D: {
      path: "Miyagi & Andy Panda - \u041F\u0430\u0442\u0440\u043E\u043D.txt"
    }
  },
  Monatik: {
    \u0421\u0438\u043B\u044C\u043D\u043E: {
      path: "Monatik - \u0421\u0438\u043B\u044C\u043D\u043E.txt"
    }
  },
  OneRepublic: {
    Secrets: {
      path: "OneRepublic - Secrets.txt"
    }
  },
  "Pavluchenko & Alexey Krivdin": {
    \u0420\u0435\u043A\u0430: {
      path: "Pavluchenko & Alexey Krivdin - \u0420\u0435\u043A\u0430.txt"
    }
  },
  RadioHead: {
    Creep: {
      path: "RadioHead - Creep.txt"
    }
  },
  "Red Hot Chili Peppers": {
    Otherside: {
      path: "Red Hot Chili Peppers - Otherside.txt"
    }
  },
  "Rise Against": {
    "Swing Life Away": {
      path: "Rise Against - Swing Life Away.txt"
    }
  },
  Sheep\u043E\u0432\u0441\u043A\u0430\u044F: {
    "\u0421\u0430\u043D\u0430\u0442\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u0434\u0443\u0448\u0438": {
      path: "Sheep\u043E\u0432\u0441\u043A\u0430\u044F - \u0421\u0430\u043D\u0430\u0442\u043E\u0440\u0438\u0439 \u0434\u043B\u044F \u0434\u0443\u0448\u0438.txt"
    }
  },
  Sting: {
    "Shape Of My Heart": {
      path: "Sting - Shape Of My Heart.txt"
    }
  },
  "Stone Sour": {
    "Through Glass": {
      path: "Stone Sour - Through Glass.txt"
    }
  },
  "Sum 41": {
    Pieces: {
      path: "Sum 41 - Pieces.txt"
    }
  },
  "System of a Down": {
    Aerials: {
      path: "System of a Down - Aerials.txt"
    },
    "Lonely Day": {
      path: "System of a Down - Lonely Day.txt"
    }
  },
  "Taylor Swift": {
    "I Knew You Were Trouble": {
      path: "Taylor Swift - I Knew You Were Trouble.txt"
    }
  },
  "The Cranberries": {
    Zombie: {
      path: "The Cranberries - Zombie.txt"
    }
  },
  "The Frames": {
    "Seven Day Mile": {
      path: "The Frames - Seven Day Mile.txt"
    }
  },
  U2: {
    One: {
      path: "U2 - One.txt"
    }
  },
  \u0410\u0434\u0440\u0435\u043D\u0430\u043B\u0438\u043D: {
    "\u041A\u043E\u0432\u044B\u043B\u044F\u0439 \u043F\u043E\u0442\u0438\u0445\u043E\u043D\u0435\u0447\u043A\u0443": {
      path: "\u0410\u0434\u0440\u0435\u043D\u0430\u043B\u0438\u043D - \u041A\u043E\u0432\u044B\u043B\u044F\u0439 \u043F\u043E\u0442\u0438\u0445\u043E\u043D\u0435\u0447\u043A\u0443.txt"
    }
  },
  "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u041C\u0430\u0440\u0448\u0430\u043B": {
    \u041E\u0440\u0435\u043B: {
      path: "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u041C\u0430\u0440\u0448\u0430\u043B - \u041E\u0440\u0435\u043B.txt"
    }
  },
  "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041F\u043E\u043D\u043E\u043C\u0430\u0440\u0451\u0432": {
    "\u0410 \u043C\u044B \u043D\u0435 \u0430\u043D\u0433\u0435\u043B\u044B, \u043F\u0430\u0440\u0435\u043D\u044C": {
      path: "\u0410\u043B\u0435\u043A\u0441\u0435\u0439 \u041F\u043E\u043D\u043E\u043C\u0430\u0440\u0451\u0432 - \u0410 \u043C\u044B \u043D\u0435 \u0430\u043D\u0433\u0435\u043B\u044B, \u043F\u0430\u0440\u0435\u043D\u044C.txt"
    }
  },
  "\u0410\u043D\u0435\u0442 \u0421\u0430\u0439": {
    \u0421\u043B\u0451\u0437\u044B: {
      path: "\u0410\u043D\u0435\u0442 \u0421\u0430\u0439 - \u0421\u043B\u0451\u0437\u044B.txt"
    }
  },
  \u0410\u043D\u0438\u043C\u0430\u0446\u0438\u042F: {
    \u0420\u043E\u0434\u0438\u043D\u0430: {
      path: "\u0410\u043D\u0438\u043C\u0430\u0446\u0438\u042F - \u0420\u043E\u0434\u0438\u043D\u0430.txt"
    }
  },
  "\u0410\u043D\u043D\u0430 \u0413\u0435\u0440\u043C\u0430\u043D": {
    \u041D\u0435\u0436\u043D\u043E\u0441\u0442\u044C: {
      path: "\u0410\u043D\u043D\u0430 \u0413\u0435\u0440\u043C\u0430\u043D - \u041D\u0435\u0436\u043D\u043E\u0441\u0442\u044C.txt"
    }
  },
  \u0410\u0440\u0438\u044F: {
    "\u0411\u0435\u0441\u043F\u0435\u0447\u043D\u044B\u0439 \u0430\u043D\u0433\u0435\u043B": {
      path: "\u0410\u0440\u0438\u044F - \u0411\u0435\u0441\u043F\u0435\u0447\u043D\u044B\u0439 \u0430\u043D\u0433\u0435\u043B.txt"
    },
    "\u0412\u043E\u0437\u044C\u043C\u0438 \u043C\u043E\u0435 \u0441\u0435\u0440\u0434\u0446\u0435": {
      path: "\u0410\u0440\u0438\u044F - \u0412\u043E\u0437\u044C\u043C\u0438 \u043C\u043E\u0435 \u0441\u0435\u0440\u0434\u0446\u0435.txt"
    },
    \u041A\u043E\u043B\u0438\u0437\u0435\u0439: {
      path: "\u0410\u0440\u0438\u044F - \u041A\u043E\u043B\u0438\u0437\u0435\u0439.txt"
    },
    \u041E\u0431\u043C\u0430\u043D: {
      path: "\u0410\u0440\u0438\u044F - \u041E\u0431\u043C\u0430\u043D.txt"
    },
    "\u041E\u0441\u043A\u043E\u043B\u043E\u043A \u043B\u044C\u0434\u0430": {
      path: "\u0410\u0440\u0438\u044F - \u041E\u0441\u043A\u043E\u043B\u043E\u043A \u043B\u044C\u0434\u0430.txt"
    },
    "\u041F\u043E\u0442\u0435\u0440\u044F\u043D\u043D\u044B\u0439 \u0440\u0430\u0439": {
      path: "\u0410\u0440\u0438\u044F - \u041F\u043E\u0442\u0435\u0440\u044F\u043D\u043D\u044B\u0439 \u0440\u0430\u0439.txt"
    },
    "\u0423\u043B\u0438\u0446\u0430 \u0440\u043E\u0437": {
      path: "\u0410\u0440\u0438\u044F - \u0423\u043B\u0438\u0446\u0430 \u0440\u043E\u0437.txt"
    },
    \u0428\u0442\u0438\u043B\u044C: {
      path: "\u0410\u0440\u0438\u044F - \u0428\u0442\u0438\u043B\u044C.txt"
    }
  },
  "\u0410\u2019\u0421\u0442\u0443\u0434\u0438\u043E": {
    \u0423\u043B\u0435\u0442\u0430\u044E: {
      path: "\u0410\u2019\u0421\u0442\u0443\u0434\u0438\u043E - \u0423\u043B\u0435\u0442\u0430\u044E.txt"
    }
  },
  \u0411\u0430\u0441\u0442\u0430: {
    \u0421\u0430\u043D\u0441\u0430\u0440\u0430: {
      path: "\u0411\u0430\u0441\u0442\u0430 - \u0421\u0430\u043D\u0441\u0430\u0440\u0430.txt"
    }
  },
  "\u0411\u0438-2": {
    \u0412\u0430\u0440\u0432\u0430\u0440\u0430: {
      path: "\u0411\u0438-2 - \u0412\u0430\u0440\u0432\u0430\u0440\u0430.txt"
    },
    "\u0415\u0451 \u0433\u043B\u0430\u0437\u0430": {
      path: "\u0411\u0438-2 - \u0415\u0451 \u0433\u043B\u0430\u0437\u0430.txt"
    },
    \u041A\u043E\u043C\u043F\u0440\u043E\u043C\u0438\u0441\u0441: {
      path: "\u0411\u0438-2 - \u041A\u043E\u043C\u043F\u0440\u043E\u043C\u0438\u0441\u0441.txt"
    },
    "\u041C\u043E\u0439 \u0440\u043E\u043A-\u043D-\u0440\u043E\u043B\u043B": {
      path: "\u0411\u0438-2 - \u041C\u043E\u0439 \u0440\u043E\u043A-\u043D-\u0440\u043E\u043B\u043B.txt"
    },
    \u041C\u043E\u043B\u0438\u0442\u0432\u0430: {
      path: "\u0411\u0438-2 - \u041C\u043E\u043B\u0438\u0442\u0432\u0430.txt"
    },
    "\u041F\u043E\u043B\u043A\u043E\u0432\u043D\u0438\u043A\u0443 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043F\u0438\u0448\u0435\u0442": {
      path: "\u0411\u0438-2 - \u041F\u043E\u043B\u043A\u043E\u0432\u043D\u0438\u043A\u0443 \u043D\u0438\u043A\u0442\u043E \u043D\u0435 \u043F\u0438\u0448\u0435\u0442.txt"
    },
    "\u0421\u043A\u043E\u043B\u044C\u0437\u043A\u0438\u0435 \u0443\u043B\u0438\u0446\u044B": {
      path: "\u0411\u0438-2 - \u0421\u043A\u043E\u043B\u044C\u0437\u043A\u0438\u0435 \u0443\u043B\u0438\u0446\u044B.txt"
    }
  },
  \u0411\u0443\u043C\u0431\u043E\u043A\u0441: {
    \u0412\u0430\u0445\u0442\u0451\u0440\u0430\u043C: {
      path: "\u0411\u0443\u043C\u0431\u043E\u043A\u0441 - \u0412\u0430\u0445\u0442\u0451\u0440\u0430\u043C.txt"
    }
  },
  "\u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D \u0421\u0442\u0440\u044B\u043A\u0430\u043B\u043E": {
    "\u0414\u0435\u0448\u0451\u0432\u044B\u0435 \u0434\u0440\u0430\u043C\u044B": {
      path: "\u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D \u0421\u0442\u0440\u044B\u043A\u0430\u043B\u043E - \u0414\u0435\u0448\u0451\u0432\u044B\u0435 \u0434\u0440\u0430\u043C\u044B.txt"
    },
    "\u041D\u0430\u0448\u0435 \u043B\u0435\u0442\u043E": {
      path: "\u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D \u0421\u0442\u0440\u044B\u043A\u0430\u043B\u043E - \u041D\u0430\u0448\u0435 \u043B\u0435\u0442\u043E.txt"
    },
    \u0420\u0443\u0441\u0442\u0435\u043C: {
      path: "\u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D \u0421\u0442\u0440\u044B\u043A\u0430\u043B\u043E - \u0420\u0443\u0441\u0442\u0435\u043C.txt"
    },
    \u0421\u0435\u0440\u0435\u0436\u0430: {
      path: "\u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D \u0421\u0442\u0440\u044B\u043A\u0430\u043B\u043E - \u0421\u0435\u0440\u0435\u0436\u0430.txt"
    },
    "\u0422\u044B \u043D\u0435 \u0442\u0430\u043A\u0430\u044F": {
      path: "\u0412\u0430\u043B\u0435\u043D\u0442\u0438\u043D \u0421\u0442\u0440\u044B\u043A\u0430\u043B\u043E - \u0422\u044B \u043D\u0435 \u0442\u0430\u043A\u0430\u044F.txt"
    }
  },
  "\u0412\u0430\u043B\u0435\u0440\u0438\u0439 \u041A\u0438\u043F\u0435\u043B\u043E\u0432": {
    "\u042F \u0441\u0432\u043E\u0431\u043E\u0434\u0435\u043D": {
      path: "\u0412\u0430\u043B\u0435\u0440\u0438\u0439 \u041A\u0438\u043F\u0435\u043B\u043E\u0432 - \u042F \u0441\u0432\u043E\u0431\u043E\u0434\u0435\u043D.txt"
    }
  },
  \u0412\u0435\u043B\u044C\u0432\u0435\u0442: {
    \u0417\u0430\u0447\u0435\u043C: {
      path: "\u0412\u0435\u043B\u044C\u0432\u0435\u0442 - \u0417\u0430\u0447\u0435\u043C.txt"
    },
    "\u041D\u0435 \u043C\u043E\u043B\u0447\u0438": {
      path: "\u0412\u0435\u043B\u044C\u0432\u0435\u0442 - \u041D\u0435 \u043C\u043E\u043B\u0447\u0438.txt"
    },
    "\u041F\u0442\u0438\u0446\u044B-\u043A\u0430\u043D\u0430\u0440\u0435\u0439\u043A\u0438": {
      path: "\u0412\u0435\u043B\u044C\u0432\u0435\u0442 - \u041F\u0442\u0438\u0446\u044B-\u043A\u0430\u043D\u0430\u0440\u0435\u0439\u043A\u0438.txt"
    },
    \u0421\u043C\u0443\u0442\u043D\u043E\u0435: {
      path: "\u0412\u0435\u043B\u044C\u0432\u0435\u0442 - \u0421\u043C\u0443\u0442\u043D\u043E\u0435.txt"
    }
  },
  "\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440 \u041F\u0440\u0435\u0441\u043D\u044F\u043A\u043E\u0432": {
    "\u0422\u044B \u0443 \u043C\u0435\u043D\u044F \u043E\u0434\u043D\u0430": {
      path: "\u0412\u043B\u0430\u0434\u0438\u043C\u0438\u0440 \u041F\u0440\u0435\u0441\u043D\u044F\u043A\u043E\u0432 - \u0422\u044B \u0443 \u043C\u0435\u043D\u044F \u043E\u0434\u043D\u0430.txt"
    }
  },
  "\u0412\u043E\u0435\u043D\u043D\u044B\u0435 \u043F\u0435\u0441\u043D\u0438": {
    "\u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D (\u0421\u0442\u043E\u0438\u0442 \u0441\u043E\u0441\u043D\u0430)": {
      path: "\u0412\u043E\u0435\u043D\u043D\u044B\u0435 \u043F\u0435\u0441\u043D\u0438 - \u0410\u0444\u0433\u0430\u043D\u0438\u0441\u0442\u0430\u043D (\u0421\u0442\u043E\u0438\u0442 \u0441\u043E\u0441\u043D\u0430).txt"
    }
  },
  "\u0413\u043E\u0440\u043E\u0434 312": {
    "\u0412\u043D\u0435 \u0437\u043E\u043D\u044B \u0434\u043E\u0441\u0442\u0443\u043F\u0430": {
      path: "\u0413\u043E\u0440\u043E\u0434 312 - \u0412\u043D\u0435 \u0437\u043E\u043D\u044B \u0434\u043E\u0441\u0442\u0443\u043F\u0430.txt"
    },
    \u041E\u0431\u0435\u0440\u043D\u0438\u0441\u044C: {
      path: "\u0413\u043E\u0440\u043E\u0434 312 - \u041E\u0431\u0435\u0440\u043D\u0438\u0441\u044C.txt"
    },
    \u041E\u0441\u0442\u0430\u043D\u0443\u0441\u044C: {
      path: "\u0413\u043E\u0440\u043E\u0434 312 - \u041E\u0441\u0442\u0430\u043D\u0443\u0441\u044C.txt"
    }
  },
  \u0413\u0440\u0430\u0434\u0443\u0441\u044B: {
    \u0413\u043E\u043B\u0430\u044F: {
      path: "\u0413\u0440\u0430\u0434\u0443\u0441\u044B - \u0413\u043E\u043B\u0430\u044F.txt"
    },
    \u0420\u0435\u0436\u0438\u0441\u0441\u0435\u0440: {
      path: "\u0413\u0440\u0430\u0434\u0443\u0441\u044B - \u0420\u0435\u0436\u0438\u0441\u0441\u0435\u0440.txt"
    }
  },
  \u0414\u0414\u0422: {
    \u041C\u0435\u0442\u0435\u043B\u044C: {
      path: "\u0414\u0414\u0422 - \u041C\u0435\u0442\u0435\u043B\u044C.txt"
    },
    \u041F\u0440\u043E\u0441\u0432\u0438\u0441\u0442\u0435\u043B\u0430: {
      path: "\u0414\u0414\u0422 - \u041F\u0440\u043E\u0441\u0432\u0438\u0441\u0442\u0435\u043B\u0430.txt"
    },
    "\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043E\u0441\u0435\u043D\u044C": {
      path: "\u0414\u0414\u0422 - \u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 \u043E\u0441\u0435\u043D\u044C.txt"
    }
  },
  "\u0414\u043E\u043C\u0438\u043D\u0438\u043A \u0414\u0436\u043E\u043A\u0435\u0440": {
    "\u0415\u0441\u043B\u0438 \u0442\u044B \u0441\u043E \u043C\u043D\u043E\u0439": {
      path: "\u0414\u043E\u043C\u0438\u043D\u0438\u043A \u0414\u0436\u043E\u043A\u0435\u0440 - \u0415\u0441\u043B\u0438 \u0442\u044B \u0441\u043E \u043C\u043D\u043E\u0439.txt"
    }
  },
  \u0414\u0440\u0430\u0433\u043D\u0438: {
    "\u041A\u043E\u043C\u0435\u0442\u044B (feat. \u041C\u0430\u043A\u0441\u0438\u043C \u0421\u0432\u043E\u0431\u043E\u0434\u0430)": {
      path: "\u0414\u0440\u0430\u0433\u043D\u0438 - \u041A\u043E\u043C\u0435\u0442\u044B (feat. \u041C\u0430\u043A\u0441\u0438\u043C \u0421\u0432\u043E\u0431\u043E\u0434\u0430).txt"
    }
  },
  \u0416\u0443\u043A\u0438: {
    \u0411\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0430: {
      path: "\u0416\u0443\u043A\u0438 - \u0411\u0430\u0442\u0430\u0440\u0435\u0439\u043A\u0430.txt"
    },
    \u0422\u0430\u043D\u043A\u0438\u0441\u0442: {
      path: "\u0416\u0443\u043A\u0438 - \u0422\u0430\u043D\u043A\u0438\u0441\u0442.txt"
    }
  },
  \u0417\u0432\u0435\u0440\u0438: {
    "\u0412\u0441\u0435, \u0447\u0442\u043E \u0442\u0435\u0431\u044F \u043A\u0430\u0441\u0430\u0435\u0442\u0441\u044F": {
      path: "\u0417\u0432\u0435\u0440\u0438 - \u0412\u0441\u0435, \u0447\u0442\u043E \u0442\u0435\u0431\u044F \u043A\u0430\u0441\u0430\u0435\u0442\u0441\u044F.txt"
    },
    \u0413\u043E\u0432\u043E\u0440\u0438: {
      path: "\u0417\u0432\u0435\u0440\u0438 - \u0413\u043E\u0432\u043E\u0440\u0438.txt"
    },
    "\u0413\u043E\u0432\u043E\u0440\u0438 (cover)": {
      path: "\u0417\u0432\u0435\u0440\u0438 - \u0413\u043E\u0432\u043E\u0440\u0438 (cover).txt"
    },
    \u041A\u043B\u044F\u0442\u0432\u044B: {
      path: "\u0417\u0432\u0435\u0440\u0438 - \u041A\u043B\u044F\u0442\u0432\u044B.txt"
    },
    "\u041F\u0440\u043E\u0441\u0442\u043E \u0442\u0430\u043A\u0430\u044F \u0441\u0438\u043B\u044C\u043D\u0430\u044F \u043B\u044E\u0431\u043E\u0432\u044C": {
      path: "\u0417\u0432\u0435\u0440\u0438 - \u041F\u0440\u043E\u0441\u0442\u043E \u0442\u0430\u043A\u0430\u044F \u0441\u0438\u043B\u044C\u043D\u0430\u044F \u043B\u044E\u0431\u043E\u0432\u044C.txt"
    },
    "\u0420\u0430\u0439\u043E\u043D\u044B-\u043A\u0432\u0430\u0440\u0442\u0430\u043B\u044B": {
      path: "\u0417\u0432\u0435\u0440\u0438 - \u0420\u0430\u0439\u043E\u043D\u044B-\u043A\u0432\u0430\u0440\u0442\u0430\u043B\u044B.txt"
    }
  },
  \u0417\u0435\u043C\u0444\u0438\u0440\u0430: {
    \u0410\u0440\u0438\u0432\u0435\u0434\u0435\u0440\u0447\u0438: {
      path: "\u0417\u0435\u043C\u0444\u0438\u0440\u0430 - \u0410\u0440\u0438\u0432\u0435\u0434\u0435\u0440\u0447\u0438.txt"
    },
    \u0418\u0441\u043A\u0430\u043B\u0430: {
      path: "\u0417\u0435\u043C\u0444\u0438\u0440\u0430 - \u0418\u0441\u043A\u0430\u043B\u0430.txt"
    },
    "\u041F\u0440\u043E\u0441\u0442\u0438 \u043C\u0435\u043D\u044F, \u043C\u043E\u044F \u043B\u044E\u0431\u043E\u0432\u044C": {
      path: "\u0417\u0435\u043C\u0444\u0438\u0440\u0430 - \u041F\u0440\u043E\u0441\u0442\u0438 \u043C\u0435\u043D\u044F, \u043C\u043E\u044F \u043B\u044E\u0431\u043E\u0432\u044C.txt"
    },
    \u0425\u043E\u0447\u0435\u0448\u044C: {
      path: "\u0417\u0435\u043C\u0444\u0438\u0440\u0430 - \u0425\u043E\u0447\u0435\u0448\u044C.txt"
    }
  },
  "\u0418\u0433\u043E\u0440\u044C \u0422\u0430\u043B\u044C\u043A\u043E\u0432": {
    "\u042F \u0432\u0435\u0440\u043D\u0443\u0441\u044C": {
      path: "\u0418\u0433\u043E\u0440\u044C \u0422\u0430\u043B\u044C\u043A\u043E\u0432 - \u042F \u0432\u0435\u0440\u043D\u0443\u0441\u044C.txt"
    }
  },
  \u041A\u0438\u043D\u043E: {
    "\u0412\u0438\u0434\u0435\u043B\u0438 \u043D\u043E\u0447\u044C": {
      path: "\u041A\u0438\u043D\u043E - \u0412\u0438\u0434\u0435\u043B\u0438 \u043D\u043E\u0447\u044C.txt"
    },
    \u0412\u043E\u0441\u044C\u043C\u0438\u043A\u043B\u0430\u0441\u0441\u043D\u0438\u0446\u0430: {
      path: "\u041A\u0438\u043D\u043E - \u0412\u043E\u0441\u044C\u043C\u0438\u043A\u043B\u0430\u0441\u0441\u043D\u0438\u0446\u0430.txt"
    },
    "\u0413\u0440\u0443\u043F\u043F\u0430 \u043A\u0440\u043E\u0432\u0438": {
      path: "\u041A\u0438\u043D\u043E - \u0413\u0440\u0443\u043F\u043F\u0430 \u043A\u0440\u043E\u0432\u0438.txt"
    },
    "\u0417\u0432\u0435\u0437\u0434\u0430 \u043F\u043E \u0438\u043C\u0435\u043D\u0438 \u0441\u043E\u043B\u043D\u0446\u0435": {
      path: "\u041A\u0438\u043D\u043E - \u0417\u0432\u0435\u0437\u0434\u0430 \u043F\u043E \u0438\u043C\u0435\u043D\u0438 \u0441\u043E\u043B\u043D\u0446\u0435.txt"
    },
    "\u041A\u043E\u0433\u0434\u0430 \u0442\u0432\u043E\u044F \u0434\u0435\u0432\u0443\u0448\u043A\u0430 \u0431\u043E\u043B\u044C\u043D\u0430": {
      path: "\u041A\u0438\u043D\u043E - \u041A\u043E\u0433\u0434\u0430 \u0442\u0432\u043E\u044F \u0434\u0435\u0432\u0443\u0448\u043A\u0430 \u0431\u043E\u043B\u044C\u043D\u0430.txt"
    },
    \u041A\u0443\u043A\u0443\u0448\u043A\u0430: {
      path: "\u041A\u0438\u043D\u043E - \u041A\u0443\u043A\u0443\u0448\u043A\u0430.txt"
    },
    "\u041D\u0430\u043C \u0441 \u0442\u043E\u0431\u043E\u0439": {
      path: "\u041A\u0438\u043D\u043E - \u041D\u0430\u043C \u0441 \u0442\u043E\u0431\u043E\u0439.txt"
    },
    "\u041F\u0430\u0447\u043A\u0430 \u0441\u0438\u0433\u0430\u0440\u0435\u0442": {
      path: "\u041A\u0438\u043D\u043E - \u041F\u0430\u0447\u043A\u0430 \u0441\u0438\u0433\u0430\u0440\u0435\u0442.txt"
    },
    \u041F\u0435\u0440\u0435\u043C\u0435\u043D: {
      path: "\u041A\u0438\u043D\u043E - \u041F\u0435\u0440\u0435\u043C\u0435\u043D.txt"
    },
    \u0421\u0442\u0443\u043A: {
      path: "\u041A\u0438\u043D\u043E - \u0421\u0442\u0443\u043A.txt"
    }
  },
  \u041A\u043E\u043B\u0438\u0437\u0435\u0439: {
    "\u0418\u043C\u044F \u0442\u0432\u043E\u0435": {
      path: "\u041A\u043E\u043B\u0438\u0437\u0435\u0439 - \u0418\u043C\u044F \u0442\u0432\u043E\u0435.txt"
    }
  },
  "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442": {
    "\u0412\u0430\u043B\u0435\u0442 \u0438 \u0434\u0430\u043C\u0430": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u0412\u0430\u043B\u0435\u0442 \u0438 \u0434\u0430\u043C\u0430.txt"
    },
    "\u0412\u0434\u043E\u0432\u0430 \u0438 \u0413\u043E\u0440\u0431\u0443\u043D": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u0412\u0434\u043E\u0432\u0430 \u0438 \u0413\u043E\u0440\u0431\u0443\u043D.txt"
    },
    "\u0412\u0435\u0434\u044C\u043C\u0430 \u0438 \u043E\u0441\u0435\u043B": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u0412\u0435\u0434\u044C\u043C\u0430 \u0438 \u043E\u0441\u0435\u043B.txt"
    },
    "\u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u043A\u043E\u043B\u0434\u0443\u043D\u0430": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u043A\u043E\u043B\u0434\u0443\u043D\u0430.txt"
    },
    "\u0412\u043E\u0441\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F \u043E \u0431\u044B\u043B\u043E\u0439 \u043B\u044E\u0431\u0432\u0438": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u0412\u043E\u0441\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F \u043E \u0431\u044B\u043B\u043E\u0439 \u043B\u044E\u0431\u0432\u0438.txt"
    },
    "\u0414\u0432\u0430 \u043C\u043E\u043D\u0430\u0445\u0430 \u0432 \u043E\u0434\u043D\u0443 \u043D\u043E\u0447\u044C": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u0414\u0432\u0430 \u043C\u043E\u043D\u0430\u0445\u0430 \u0432 \u043E\u0434\u043D\u0443 \u043D\u043E\u0447\u044C.txt"
    },
    "\u0414\u0435\u0432\u0443\u0448\u043A\u0430 \u0438 \u0433\u0440\u0430\u0444": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u0414\u0435\u0432\u0443\u0448\u043A\u0430 \u0438 \u0433\u0440\u0430\u0444.txt"
    },
    "\u0417\u043B\u043E\u0434\u0435\u0439 \u0438 \u0448\u0430\u043F\u043A\u0430": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u0417\u043B\u043E\u0434\u0435\u0439 \u0438 \u0448\u0430\u043F\u043A\u0430.txt"
    },
    "\u041A\u0430\u043C\u043D\u0435\u043C \u043F\u043E \u0433\u043E\u043B\u043E\u0432\u0435": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u041A\u0430\u043C\u043D\u0435\u043C \u043F\u043E \u0433\u043E\u043B\u043E\u0432\u0435.txt"
    },
    "\u041A\u0443\u043A\u043B\u0430 \u043A\u043E\u043B\u0434\u0443\u043D\u0430": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u041A\u0443\u043A\u043B\u0430 \u043A\u043E\u043B\u0434\u0443\u043D\u0430.txt"
    },
    "\u041B\u044E\u0431\u043E\u0432\u044C \u0438 \u043F\u0440\u043E\u043F\u0435\u043B\u043B\u0435\u0440": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u041B\u044E\u0431\u043E\u0432\u044C \u0438 \u043F\u0440\u043E\u043F\u0435\u043B\u043B\u0435\u0440.txt"
    },
    \u041C\u0435\u0434\u0432\u0435\u0434\u044C: {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u041C\u0435\u0434\u0432\u0435\u0434\u044C.txt"
    },
    "\u041F\u043E\u043C\u043D\u044F\u0442 \u0441 \u0433\u043E\u0440\u0435\u0447\u044C\u044E \u0434\u0440\u0435\u0432\u043B\u044F\u043D\u0435": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u041F\u043E\u043C\u043D\u044F\u0442 \u0441 \u0433\u043E\u0440\u0435\u0447\u044C\u044E \u0434\u0440\u0435\u0432\u043B\u044F\u043D\u0435.txt"
    },
    "\u041F\u0440\u043E\u043A\u043B\u044F\u0442\u044B\u0439 \u0441\u0442\u0430\u0440\u044B\u0439 \u0434\u043E\u043C": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u041F\u0440\u043E\u043A\u043B\u044F\u0442\u044B\u0439 \u0441\u0442\u0430\u0440\u044B\u0439 \u0434\u043E\u043C.txt"
    },
    "\u041F\u0440\u044B\u0433\u043D\u0443 \u0441\u043E \u0441\u043A\u0430\u043B\u044B": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u041F\u0440\u044B\u0433\u043D\u0443 \u0441\u043E \u0441\u043A\u0430\u043B\u044B.txt"
    },
    \u0420\u043E\u0433\u0430\u0442\u044B\u0439: {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u0420\u043E\u0433\u0430\u0442\u044B\u0439.txt"
    },
    "\u0421\u043C\u0435\u043B\u044C\u0447\u0430\u043A \u0438 \u0432\u0435\u0442\u0435\u0440": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u0421\u043C\u0435\u043B\u044C\u0447\u0430\u043A \u0438 \u0432\u0435\u0442\u0435\u0440.txt"
    },
    "\u0423\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u0440\u0430\u0441\u0441\u0432\u0435\u0442": {
      path: "\u041A\u043E\u0440\u043E\u043B\u044C \u0438 \u0428\u0443\u0442 - \u0423\u0442\u0440\u0435\u043D\u043D\u0438\u0439 \u0440\u0430\u0441\u0441\u0432\u0435\u0442.txt"
    }
  },
  "\u041A\u043E\u0441\u0442\u0430 \u041B\u0430\u043A\u043E\u0441\u0442\u0430 & \u041B\u043E\u043B\u0438\u0442\u0430": {
    "\u041F\u043E-\u0434\u0440\u0443\u0433\u043E\u043C\u0443": {
      path: "\u041A\u043E\u0441\u0442\u0430 \u041B\u0430\u043A\u043E\u0441\u0442\u0430 & \u041B\u043E\u043B\u0438\u0442\u0430 - \u041F\u043E-\u0434\u0440\u0443\u0433\u043E\u043C\u0443.txt"
    }
  },
  \u041A\u0440\u0430\u0441\u043A\u0438: {
    "\u0421\u0442\u0430\u0440\u0448\u0438\u0439 \u0431\u0440\u0430\u0442": {
      path: "\u041A\u0440\u0430\u0441\u043A\u0438 - \u0421\u0442\u0430\u0440\u0448\u0438\u0439 \u0431\u0440\u0430\u0442.txt"
    }
  },
  "\u041A\u0440\u0438\u0441\u0442\u0438\u0430\u043D \u041B\u0435\u0439\u043D\u0438\u0445": {
    "\u0417\u0430\u0436\u0438\u0433\u0430\u0439 \u0441\u043E\u043B\u043D\u0446\u0435": {
      path: "\u041A\u0440\u0438\u0441\u0442\u0438\u0430\u043D \u041B\u0435\u0439\u043D\u0438\u0445 - \u0417\u0430\u0436\u0438\u0433\u0430\u0439 \u0441\u043E\u043B\u043D\u0446\u0435.txt"
    }
  },
  "\u041B\u0435\u043F\u0441 \u0413\u0440\u0438\u0433\u043E\u0440\u0438\u0439": {
    \u0412\u044C\u044E\u0433\u0430: {
      path: "\u041B\u0435\u043F\u0441 \u0413\u0440\u0438\u0433\u043E\u0440\u0438\u0439 - \u0412\u044C\u044E\u0433\u0430.txt"
    }
  },
  "\u041B\u044E\u0441\u044F \u0427\u0435\u0431\u043E\u0442\u0438\u043D\u0430": {
    "\u0421\u043E\u043B\u043D\u0446\u0435 \u041C\u043E\u043D\u0430\u043A\u043E": {
      path: "\u041B\u044E\u0441\u044F \u0427\u0435\u0431\u043E\u0442\u0438\u043D\u0430 - \u0421\u043E\u043B\u043D\u0446\u0435 \u041C\u043E\u043D\u0430\u043A\u043E.txt"
    }
  },
  "\u041B\u044F\u043F\u0438\u0441 \u0422\u0440\u0443\u0431\u0435\u0446\u043A\u043E\u0439": {
    \u0410\u0443: {
      path: "\u041B\u044F\u043F\u0438\u0441 \u0422\u0440\u0443\u0431\u0435\u0446\u043A\u043E\u0439 - \u0410\u0443.txt"
    },
    "\u0412 \u043F\u043B\u0430\u0442\u044C\u0435 \u0431\u0435\u043B\u043E\u043C": {
      path: "\u041B\u044F\u043F\u0438\u0441 \u0422\u0440\u0443\u0431\u0435\u0446\u043A\u043E\u0439 - \u0412 \u043F\u043B\u0430\u0442\u044C\u0435 \u0431\u0435\u043B\u043E\u043C.txt"
    },
    \u0415\u0432\u043F\u0430\u0442\u043E\u0440\u0438\u044F: {
      path: "\u041B\u044F\u043F\u0438\u0441 \u0422\u0440\u0443\u0431\u0435\u0446\u043A\u043E\u0439 - \u0415\u0432\u043F\u0430\u0442\u043E\u0440\u0438\u044F.txt"
    },
    \u041A\u0430\u043F\u0438\u0442\u0430\u043B: {
      path: "\u041B\u044F\u043F\u0438\u0441 \u0422\u0440\u0443\u0431\u0435\u0446\u043A\u043E\u0439 - \u041A\u0430\u043F\u0438\u0442\u0430\u043B.txt"
    },
    "\u0422\u044B \u043A\u0438\u043D\u0443\u043B\u0430": {
      path: "\u041B\u044F\u043F\u0438\u0441 \u0422\u0440\u0443\u0431\u0435\u0446\u043A\u043E\u0439 - \u0422\u044B \u043A\u0438\u043D\u0443\u043B\u0430.txt"
    }
  },
  "\u041C\u0430\u043A\u0441 \u041A\u043E\u0440\u0436": {
    "\u0414\u0432\u0430 \u0442\u0438\u043F\u0430 \u043B\u044E\u0434\u0435\u0439": {
      path: "\u041C\u0430\u043A\u0441 \u041A\u043E\u0440\u0436 - \u0414\u0432\u0430 \u0442\u0438\u043F\u0430 \u043B\u044E\u0434\u0435\u0439.txt"
    },
    \u0421\u0442\u0430\u043D\u044C: {
      path: "\u041C\u0430\u043A\u0441 \u041A\u043E\u0440\u0436 - \u0421\u0442\u0430\u043D\u044C.txt"
    },
    \u042D\u043D\u0434\u043E\u0440\u0444\u0438\u043D: {
      path: "\u041C\u0430\u043A\u0441 \u041A\u043E\u0440\u0436 - \u042D\u043D\u0434\u043E\u0440\u0444\u0438\u043D.txt"
    }
  },
  \u041C\u0430\u0440\u0441\u0435\u043B\u044C: {
    "\u041F\u0440\u0435\u0434\u0443\u0431\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u0438 \u0433\u043E\u0440\u0434\u043E\u0441\u0442\u044C": {
      path: "\u041C\u0430\u0440\u0441\u0435\u043B\u044C - \u041F\u0440\u0435\u0434\u0443\u0431\u0435\u0436\u0434\u0435\u043D\u0438\u0435 \u0438 \u0433\u043E\u0440\u0434\u043E\u0441\u0442\u044C.txt"
    }
  },
  \u041C\u0435\u043B\u044C\u043D\u0438\u0446\u0430: {
    "\u0414\u0432\u0435\u0440\u0438 \u0422\u0430\u043C\u0435\u0440\u043B\u0430\u043D\u0430": {
      path: "\u041C\u0435\u043B\u044C\u043D\u0438\u0446\u0430 - \u0414\u0432\u0435\u0440\u0438 \u0422\u0430\u043C\u0435\u0440\u043B\u0430\u043D\u0430.txt"
    },
    \u0414\u043E\u0440\u043E\u0433\u0438: {
      path: "\u041C\u0435\u043B\u044C\u043D\u0438\u0446\u0430 - \u0414\u043E\u0440\u043E\u0433\u0438.txt"
    }
  },
  "\u041D\u0430\u0443\u0442\u0438\u043B\u0443\u0441 \u041F\u043E\u043C\u043F\u0438\u043B\u0438\u0443\u0441": {
    "\u041F\u0440\u043E\u0433\u0443\u043B\u043A\u0438 \u043F\u043E \u0432\u043E\u0434\u0435": {
      path: "\u041D\u0430\u0443\u0442\u0438\u043B\u0443\u0441 \u041F\u043E\u043C\u043F\u0438\u043B\u0438\u0443\u0441 - \u041F\u0440\u043E\u0433\u0443\u043B\u043A\u0438 \u043F\u043E \u0432\u043E\u0434\u0435.txt"
    }
  },
  \u041D\u0435\u0440\u0432\u044B: {
    "\u041D\u0430\u0432\u0435\u0440\u043D\u043E\u0435 \u044F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0432\u043B\u044E\u0431\u043B\u0435\u043D": {
      path: "\u041D\u0435\u0440\u0432\u044B - \u041D\u0430\u0432\u0435\u0440\u043D\u043E\u0435 \u044F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0432\u043B\u044E\u0431\u043B\u0435\u043D.txt"
    },
    "\u0421\u0430\u043C\u044B\u0439 \u0434\u043E\u0440\u043E\u0433\u043E\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A": {
      path: "\u041D\u0435\u0440\u0432\u044B - \u0421\u0430\u043C\u044B\u0439 \u0434\u043E\u0440\u043E\u0433\u043E\u0439 \u0447\u0435\u043B\u043E\u0432\u0435\u043A.txt"
    }
  },
  "\u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u041D\u043E\u0441\u043A\u043E\u0432": {
    \u0420\u043E\u043C\u0430\u043D\u0441: {
      path: "\u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u041D\u043E\u0441\u043A\u043E\u0432 - \u0420\u043E\u043C\u0430\u043D\u0441.txt"
    },
    "\u042D\u0442\u043E \u0437\u0434\u043E\u0440\u043E\u0432\u043E": {
      path: "\u041D\u0438\u043A\u043E\u043B\u0430\u0439 \u041D\u043E\u0441\u043A\u043E\u0432 - \u042D\u0442\u043E \u0437\u0434\u043E\u0440\u043E\u0432\u043E.txt"
    }
  },
  "\u041D\u043E\u0447\u043D\u044B\u0435 \u0441\u043D\u0430\u0439\u043F\u0435\u0440\u044B": {
    "31-\u044F \u0432\u0435\u0441\u043D\u0430": {
      path: "\u041D\u043E\u0447\u043D\u044B\u0435 \u0441\u043D\u0430\u0439\u043F\u0435\u0440\u044B - 31-\u044F \u0432\u0435\u0441\u043D\u0430.txt"
    },
    \u0410\u0432\u0438\u0430\u0440\u0435\u0436\u0438\u043C: {
      path: "\u041D\u043E\u0447\u043D\u044B\u0435 \u0441\u043D\u0430\u0439\u043F\u0435\u0440\u044B - \u0410\u0432\u0438\u0430\u0440\u0435\u0436\u0438\u043C.txt"
    },
    \u0410\u0441\u0444\u0430\u043B\u044C\u0442: {
      path: "\u041D\u043E\u0447\u043D\u044B\u0435 \u0441\u043D\u0430\u0439\u043F\u0435\u0440\u044B - \u0410\u0441\u0444\u0430\u043B\u044C\u0442.txt"
    },
    \u041A\u0430\u0442\u0430\u0441\u0442\u0440\u043E\u0444\u0438\u0447\u0435\u0441\u043A\u0438: {
      path: "\u041D\u043E\u0447\u043D\u044B\u0435 \u0441\u043D\u0430\u0439\u043F\u0435\u0440\u044B - \u041A\u0430\u0442\u0430\u0441\u0442\u0440\u043E\u0444\u0438\u0447\u0435\u0441\u043A\u0438.txt"
    },
    "\u041D\u0435 \u043A\u0443\u0440\u0438 \u043F\u0440\u0438 \u043C\u043D\u0435": {
      path: "\u041D\u043E\u0447\u043D\u044B\u0435 \u0441\u043D\u0430\u0439\u043F\u0435\u0440\u044B - \u041D\u0435 \u043A\u0443\u0440\u0438 \u043F\u0440\u0438 \u043C\u043D\u0435.txt"
    },
    "\u0420\u0430\u0437\u0431\u0443\u0434\u0438 \u043C\u0435\u043D\u044F": {
      path: "\u041D\u043E\u0447\u043D\u044B\u0435 \u0441\u043D\u0430\u0439\u043F\u0435\u0440\u044B - \u0420\u0430\u0437\u0431\u0443\u0434\u0438 \u043C\u0435\u043D\u044F.txt"
    },
    "\u0421\u0435\u043A\u0443\u043D\u0434\u0443 \u043D\u0430\u0437\u0430\u0434": {
      path: "\u041D\u043E\u0447\u043D\u044B\u0435 \u0441\u043D\u0430\u0439\u043F\u0435\u0440\u044B - \u0421\u0435\u043A\u0443\u043D\u0434\u0443 \u043D\u0430\u0437\u0430\u0434.txt"
    }
  },
  "\u041E\u043A\u0435\u0430\u043D \u0415\u043B\u044C\u0437\u0438": {
    "\u0411\u0435\u0437 \u0431\u043E\u044E": {
      path: "\u041E\u043A\u0435\u0430\u043D \u0415\u043B\u044C\u0437\u0438 - \u0411\u0435\u0437 \u0431\u043E\u044E.txt"
    },
    \u041E\u0431\u0456\u0439\u043C\u0438: {
      path: "\u041E\u043A\u0435\u0430\u043D \u0415\u043B\u044C\u0437\u0438 - \u041E\u0431\u0456\u0439\u043C\u0438.txt"
    }
  },
  \u041F\u043E\u0440\u043D\u043E\u0444\u0438\u043B\u044C\u043C\u044B: {
    "\u042F \u0442\u0430\u043A \u0441\u043E\u0441\u043A\u0443\u0447\u0438\u043B\u0441\u044F": {
      path: "\u041F\u043E\u0440\u043D\u043E\u0444\u0438\u043B\u044C\u043C\u044B - \u042F \u0442\u0430\u043A \u0441\u043E\u0441\u043A\u0443\u0447\u0438\u043B\u0441\u044F.txt"
    }
  },
  \u041F\u0440\u043E\u043F\u0430\u0433\u0430\u043D\u0434\u0430: {
    "\u0414\u043E\u0436\u0434\u044C \u043F\u043E \u043A\u0440\u044B\u0448\u0430\u043C": {
      path: "\u041F\u0440\u043E\u043F\u0430\u0433\u0430\u043D\u0434\u0430 - \u0414\u043E\u0436\u0434\u044C \u043F\u043E \u043A\u0440\u044B\u0448\u0430\u043C.txt"
    },
    \u041C\u0435\u043B\u043E\u043C: {
      path: "\u041F\u0440\u043E\u043F\u0430\u0433\u0430\u043D\u0434\u0430 - \u041C\u0435\u043B\u043E\u043C.txt"
    }
  },
  "\u0420\u0443\u0441\u043B\u0430\u043D \u041A\u0443\u0440\u0438\u043A": {
    \u041A\u0440\u044B\u043B\u044C\u044F: {
      path: "\u0420\u0443\u0441\u043B\u0430\u043D \u041A\u0443\u0440\u0438\u043A - \u041A\u0440\u044B\u043B\u044C\u044F.txt"
    },
    "\u041F\u043E\u043A\u0430 \u0442\u0432\u043E\u0440\u0438\u0442 \u044D\u0442\u043E\u0442 \u0446\u0432\u0435\u0442": {
      path: "\u0420\u0443\u0441\u043B\u0430\u043D \u041A\u0443\u0440\u0438\u043A - \u041F\u043E\u043A\u0430 \u0442\u0432\u043E\u0440\u0438\u0442 \u044D\u0442\u043E\u0442 \u0446\u0432\u0435\u0442.txt"
    }
  },
  "\u0421\u0435\u043A\u0442\u043E\u0440 \u0413\u0430\u0437\u0430": {
    \u0414\u0435\u043C\u043E\u0431\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u044F: {
      path: "\u0421\u0435\u043A\u0442\u043E\u0440 \u0413\u0430\u0437\u0430 - \u0414\u0435\u043C\u043E\u0431\u0438\u043B\u0438\u0437\u0430\u0446\u0438\u044F.txt"
    },
    \u041B\u0438\u0440\u0438\u043A\u0430: {
      path: "\u0421\u0435\u043A\u0442\u043E\u0440 \u0413\u0430\u0437\u0430 - \u041B\u0438\u0440\u0438\u043A\u0430.txt"
    },
    "\u041B\u0438\u0440\u0438\u043A\u0430 (\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043D\u0430\u044F)": {
      path: "\u0421\u0435\u043A\u0442\u043E\u0440 \u0413\u0430\u0437\u0430 - \u041B\u0438\u0440\u0438\u043A\u0430 (\u0438\u0437\u043C\u0435\u043D\u0435\u043D\u043D\u0430\u044F).txt"
    }
  },
  "\u0421\u0435\u0440\u0433\u0435\u0439 \u0422\u0440\u043E\u0444\u0438\u043C\u043E\u0432": {
    \u0420\u043E\u0434\u0438\u043D\u0430: {
      path: "\u0421\u0435\u0440\u0433\u0435\u0439 \u0422\u0440\u043E\u0444\u0438\u043C\u043E\u0432 - \u0420\u043E\u0434\u0438\u043D\u0430.txt"
    }
  },
  \u0421\u043F\u043B\u0438\u043D: {
    "\u0410\u043D\u0433\u043B\u043E-\u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u0441\u043B\u043E\u0432\u0430\u0440\u044C (\u0414\u0430\u0432\u0430\u0439, \u041B\u0430\u043C\u0430)": {
      path: "\u0421\u043F\u043B\u0438\u043D - \u0410\u043D\u0433\u043B\u043E-\u0440\u0443\u0441\u0441\u043A\u0438\u0439 \u0441\u043B\u043E\u0432\u0430\u0440\u044C (\u0414\u0430\u0432\u0430\u0439, \u041B\u0430\u043C\u0430).txt"
    },
    "\u0412\u044B\u0445\u043E\u0434\u0430 \u043D\u0435\u0442": {
      path: "\u0421\u043F\u043B\u0438\u043D - \u0412\u044B\u0445\u043E\u0434\u0430 \u043D\u0435\u0442.txt"
    },
    "\u0414\u0432\u043E\u0435 \u043D\u0435 \u0441\u043F\u044F\u0442": {
      path: "\u0421\u043F\u043B\u0438\u043D - \u0414\u0432\u043E\u0435 \u043D\u0435 \u0441\u043F\u044F\u0442.txt"
    },
    "\u041C\u043E\u0435 \u0441\u0435\u0440\u0434\u0446\u0435": {
      path: "\u0421\u043F\u043B\u0438\u043D - \u041C\u043E\u0435 \u0441\u0435\u0440\u0434\u0446\u0435.txt"
    },
    "\u041D\u043E\u0432\u044B\u0435 \u043B\u044E\u0434\u0438": {
      path: "\u0421\u043F\u043B\u0438\u043D - \u041D\u043E\u0432\u044B\u0435 \u043B\u044E\u0434\u0438.txt"
    },
    "\u041F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u044D\u0442\u043E \u0413\u0430\u0440\u0440\u0438 \u041F\u043E\u0442\u0442\u0435\u0440\u0443, \u0435\u0441\u043B\u0438 \u0432\u0434\u0440\u0443\u0433 \u0435\u0433\u043E \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u0435": {
      path: "\u0421\u043F\u043B\u0438\u043D - \u041F\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u044D\u0442\u043E \u0413\u0430\u0440\u0440\u0438 \u041F\u043E\u0442\u0442\u0435\u0440\u0443, \u0435\u0441\u043B\u0438 \u0432\u0434\u0440\u0443\u0433 \u0435\u0433\u043E \u0432\u0441\u0442\u0440\u0435\u0442\u0438\u0442\u0435.txt"
    },
    \u0420\u043E\u043C\u0430\u043D\u0441: {
      path: "\u0421\u043F\u043B\u0438\u043D - \u0420\u043E\u043C\u0430\u043D\u0441.txt"
    },
    "\u0421\u043B\u043E\u043C\u0430\u043D\u043E \u0432\u0441\u0451": {
      path: "\u0421\u043F\u043B\u0438\u043D - \u0421\u043B\u043E\u043C\u0430\u043D\u043E \u0432\u0441\u0451.txt"
    }
  },
  "\u0422\u0430\u043D\u0446\u044B \u041C\u0438\u043D\u0443\u0441": {
    "10 \u043A\u0430\u043F\u0435\u043B\u044C": {
      path: "\u0422\u0430\u043D\u0446\u044B \u041C\u0438\u043D\u0443\u0441 - 10 \u043A\u0430\u043F\u0435\u043B\u044C.txt"
    },
    \u0413\u043E\u0440\u043E\u0434: {
      path: "\u0422\u0430\u043D\u0446\u044B \u041C\u0438\u043D\u0443\u0441 - \u0413\u043E\u0440\u043E\u0434.txt"
    },
    \u0418\u0434\u0443: {
      path: "\u0422\u0430\u043D\u0446\u044B \u041C\u0438\u043D\u0443\u0441 - \u0418\u0434\u0443.txt"
    },
    \u041F\u043E\u043B\u043E\u0432\u0438\u043D\u043A\u0430: {
      path: "\u0422\u0430\u043D\u0446\u044B \u041C\u0438\u043D\u0443\u0441 - \u041F\u043E\u043B\u043E\u0432\u0438\u043D\u043A\u0430.txt"
    }
  },
  "\u0422\u043E\u0440\u0431\u0430-\u043D\u0430-\u041A\u0440\u0443\u0447\u0435": {
    \u0414\u0440\u0443\u0433: {
      path: "\u0422\u043E\u0440\u0431\u0430-\u043D\u0430-\u041A\u0440\u0443\u0447\u0435 - \u0414\u0440\u0443\u0433.txt"
    }
  },
  "\u0427\u0438\u0436 & Co": {
    "\u0412\u043E\u0442 \u043F\u0443\u043B\u044F \u043F\u0440\u043E\u0441\u0432\u0438\u0441\u0442\u0435\u043B\u0430": {
      path: "\u0427\u0438\u0436 & Co - \u0412\u043E\u0442 \u043F\u0443\u043B\u044F \u043F\u0440\u043E\u0441\u0432\u0438\u0441\u0442\u0435\u043B\u0430.txt"
    },
    "\u041E \u043B\u044E\u0431\u0432\u0438": {
      path: "\u0427\u0438\u0436 & Co - \u041E \u043B\u044E\u0431\u0432\u0438.txt"
    },
    \u0424\u0430\u043D\u0442\u043E\u043C: {
      path: "\u0427\u0438\u0436 & Co - \u0424\u0430\u043D\u0442\u043E\u043C.txt"
    }
  },
  \u042E\u0442\u0430: {
    "\u0416\u0438\u043B\u0438-\u0431\u044B\u043B\u0438": {
      path: "\u042E\u0442\u0430 - \u0416\u0438\u043B\u0438-\u0431\u044B\u043B\u0438.txt"
    },
    "\u0425\u043C\u0435\u043B\u044C \u0438 \u0441\u043E\u043B\u043E\u0434": {
      path: "\u042E\u0442\u0430 - \u0425\u043C\u0435\u043B\u044C \u0438 \u0441\u043E\u043B\u043E\u0434.txt"
    }
  },
  \u042F\u043D\u0430: {
    "\u041E\u0434\u0438\u043D\u043E\u043A\u0438\u0439 \u0433\u043E\u043B\u0443\u0431\u044C": {
      path: "\u042F\u043D\u0430 - \u041E\u0434\u0438\u043D\u043E\u043A\u0438\u0439 \u0433\u043E\u043B\u0443\u0431\u044C.txt"
    }
  },
  "\u042F\u0441\u043A\u0435\u0432\u0438\u0447 \u041B\u0435\u0440\u0430": {
    "\u042F \u0443\u0441\u0442\u0430\u043B": {
      path: "\u042F\u0441\u043A\u0435\u0432\u0438\u0447 \u041B\u0435\u0440\u0430 - \u042F \u0443\u0441\u0442\u0430\u043B.txt"
    }
  }
};

// app/constants/SongsData.ts
var SongsData = songs_default, AuthorsList = Object.keys(SongsData);

// app/constants/chords.ts
var ChordsList = {
  A: [
    { chord: "A", name: "\u041B\u044F \u043C\u0430\u0436\u043E\u0440", src: "A.png" },
    { chord: "Am", name: "\u041B\u044F \u043C\u0438\u043D\u043E\u0440", src: "Am.png" },
    { chord: "A+", name: "\u041B\u044F \u043C\u0430\u0436\u043E\u0440 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u044B\u0439", src: "A+.png" },
    { chord: "A#", name: "\u041B\u044F-\u0434\u0438\u0435\u0437 \u043C\u0430\u0436\u043E\u0440", src: "A_.png" },
    {
      chord: "Amaj7",
      name: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u041B\u044F",
      src: "Amaj7.png"
    },
    {
      chord: "Asus4",
      name: "\u041B\u044F \u043C\u0430\u0436\u043E\u0440 \u0441 \u043A\u0432\u0430\u0440\u0442\u043E\u0439 \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u0435\u0440\u0446\u0438\u0438",
      src: "Asus4.png"
    },
    {
      chord: "A6",
      name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043A\u0441\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u041B\u044F",
      src: "A6.png"
    },
    {
      chord: "Am6",
      name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043A\u0441\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u041B\u044F",
      src: "Am6.png"
    },
    {
      chord: "A7",
      name: "\u0414\u043E\u043C\u0438\u043D\u0430\u043D\u0442\u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 (\u043C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434) \u043E\u0442 \u043D\u043E\u0442\u044B \u041B\u044F",
      src: "A7.png"
    },
    {
      chord: "Am7",
      name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u041B\u044F",
      src: "Am7.png"
    },
    {
      chord: "A#7",
      name: "\u0414\u043E\u043C\u0438\u043D\u0430\u043D\u0442\u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 (\u043C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434) \u043E\u0442 \u043D\u043E\u0442\u044B \u041B\u044F-\u0434\u0438\u0435\u0437",
      src: "A_7.png"
    },
    {
      chord: "Adim7",
      name: "\u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u041B\u044F",
      src: "Adim7.png"
    },
    {
      chord: "A7sus4",
      name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u0441 \u043A\u0432\u0430\u0440\u0442\u043E\u0439 \u043E\u0442 \u043D\u043E\u0442\u044B \u041B\u044F",
      src: "A7sus4.png"
    },
    {
      chord: "A7/6",
      name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u0441 \u0441\u0435\u043A\u0441\u0442\u043E\u0439 \u043E\u0442 \u043D\u043E\u0442\u044B \u041B\u044F",
      src: "A7-6.png"
    },
    {
      chord: "A9",
      name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u043D\u043E\u043D\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u041B\u044F",
      src: "A9.png"
    },
    {
      chord: "Am9",
      name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u043D\u043E\u043D\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u041B\u044F",
      src: "Am9.png"
    }
  ],
  C: [
    { chord: "C", name: "\u0414\u043E \u043C\u0430\u0436\u043E\u0440", src: "C.png" },
    { chord: "C+", name: "\u0414\u043E \u043C\u0430\u0436\u043E\u0440 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u044B\u0439", src: "C+.png" },
    { chord: "Cm", name: "\u0414\u043E \u043C\u0438\u043D\u043E\u0440", src: "Cm.png" },
    { chord: "C#", name: "\u0414\u043E-\u0434\u0438\u0435\u0437 \u043C\u0430\u0436\u043E\u0440", src: "C_.png" },
    { chord: "C#m", name: "\u0414\u043E-\u0434\u0438\u0435\u0437 \u043C\u0438\u043D\u043E\u0440", src: "C_m.png" },
    { chord: "C#+", name: "\u0414\u043E-\u0434\u0438\u0435\u0437 \u043C\u0430\u0436\u043E\u0440 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u044B\u0439", src: "C_+.png" },
    { chord: "Cmaj7", name: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E", src: "Cmaj7.png" },
    { chord: "C#maj7", name: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E-\u0434\u0438\u0435\u0437", src: "C_maj7.png" },
    { chord: "Csus4", name: "\u0414\u043E \u043C\u0430\u0436\u043E\u0440 \u0441 \u043A\u0432\u0430\u0440\u0442\u043E\u0439 \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u0435\u0440\u0446\u0438\u0438", src: "Csus4.png" },
    { chord: "C#sus4", name: "\u0414\u043E-\u0434\u0438\u0435\u0437 \u043C\u0430\u0436\u043E\u0440 \u0441 \u043A\u0432\u0430\u0440\u0442\u043E\u0439 \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u0435\u0440\u0446\u0438\u0438", src: "C_sus4.png" },
    { chord: "C6", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043A\u0441\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E", src: "C6.png" },
    { chord: "Cm6", name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043A\u0441\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E", src: "Cm6.png" },
    { chord: "C#6", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043A\u0441\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E-\u0434\u0438\u0435\u0437", src: "C_6.png" },
    { chord: "C#m6", name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043A\u0441\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E-\u0434\u0438\u0435\u0437", src: "C_m6.png" },
    { chord: "C7", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 (\u0434\u043E\u043C\u0438\u043D\u0430\u043D\u0442\u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434) \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E", src: "C7.png" },
    { chord: "Cm7", name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E", src: "Cm7.png" },
    {
      chord: "C#7",
      name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 (\u0434\u043E\u043C\u0438\u043D\u0430\u043D\u0442\u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434) \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E-\u0434\u0438\u0435\u0437",
      src: "C_7.png"
    },
    { chord: "C#m7", name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E-\u0434\u0438\u0435\u0437", src: "C_m7.png" },
    { chord: "Cdim7", name: "\u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E", src: "Cdim7.png" },
    { chord: "C#dim7", name: "\u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E-\u0434\u0438\u0435\u0437", src: "C_dim7.png" },
    { chord: "C7sus4", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u0441 \u043A\u0432\u0430\u0440\u0442\u043E\u0439 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E", src: "C7sus4.png" },
    {
      chord: "C#7sus4",
      name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u0441 \u043A\u0432\u0430\u0440\u0442\u043E\u0439 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E-\u0434\u0438\u0435\u0437",
      src: "C_7sus4.png"
    },
    { chord: "C7/6", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u0441 \u0441\u0435\u043A\u0441\u0442\u043E\u0439 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E", src: "C7-6.png" },
    { chord: "C#7/6", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u0441 \u0441\u0435\u043A\u0441\u0442\u043E\u0439 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E-\u0434\u0438\u0435\u0437", src: "C_7-6.png" },
    { chord: "C9", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u043D\u043E\u043D\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E", src: "C9.png" },
    { chord: "Cm9", name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u043D\u043E\u043D\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E", src: "Cm9.png" },
    { chord: "C#9", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u043D\u043E\u043D\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E-\u0434\u0438\u0435\u0437", src: "C_9.png" },
    { chord: "C#m9", name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u043D\u043E\u043D\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0414\u043E-\u0434\u0438\u0435\u0437", src: "C_m9.png" }
  ],
  D: [
    { chord: "D", name: "\u0420\u0435 \u043C\u0430\u0436\u043E\u0440", src: "D.png" },
    { chord: "Dm", name: "\u0420\u0435 \u043C\u0438\u043D\u043E\u0440", src: "Dm.png" },
    { chord: "D+", name: "\u0420\u0435 \u043C\u0430\u0436\u043E\u0440 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u044B\u0439", src: "D+.png" },
    { chord: "D#", name: "\u0420\u0435-\u0434\u0438\u0435\u0437 \u043C\u0430\u0436\u043E\u0440", src: "D_.png" },
    { chord: "D#m", name: "\u0420\u0435-\u0434\u0438\u0435\u0437 \u043C\u0438\u043D\u043E\u0440", src: "D_m.png" },
    { chord: "D#+", name: "\u0420\u0435-\u0434\u0438\u0435\u0437 \u043C\u0430\u0436\u043E\u0440 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u044B\u0439", src: "D_+.png" },
    { chord: "Dmaj7", name: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435", src: "Dmaj7.png" },
    { chord: "D#maj7", name: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435-\u0434\u0438\u0435\u0437", src: "D_maj7.png" },
    { chord: "Ddim", name: "\u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u043D\u044B\u0439 \u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435", src: "Ddim.png" },
    { chord: "D#dim", name: "\u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u043D\u044B\u0439 \u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435-\u0434\u0438\u0435\u0437", src: "D_dim.png" },
    { chord: "Dsus4", name: "\u0420\u0435 \u043C\u0430\u0436\u043E\u0440 \u0441 \u043A\u0432\u0430\u0440\u0442\u043E\u0439 \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u0435\u0440\u0446\u0438\u0438", src: "Dsus4.png" },
    { chord: "D#sus4", name: "\u0420\u0435-\u0434\u0438\u0435\u0437 \u043C\u0430\u0436\u043E\u0440 \u0441 \u043A\u0432\u0430\u0440\u0442\u043E\u0439 \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u0435\u0440\u0446\u0438\u0438", src: "D_sus4.png" },
    { chord: "D6", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043A\u0441\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435", src: "D6.png" },
    { chord: "Dm6", name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043A\u0441\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435", src: "Dm6.png" },
    { chord: "D#6", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043A\u0441\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435-\u0434\u0438\u0435\u0437", src: "D_6.png" },
    { chord: "D#m6", name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043A\u0441\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435-\u0434\u0438\u0435\u0437", src: "D_m6.png" },
    { chord: "D7", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 (\u0414\u043E\u043C\u0438\u043D\u0430\u043D\u0442\u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434) \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435", src: "D7.png" },
    { chord: "Dm7", name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435", src: "Dm7.png" },
    {
      chord: "D#7",
      name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 (\u0414\u043E\u043C\u0438\u043D\u0430\u043D\u0442\u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434) \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435-\u0434\u0438\u0435\u0437",
      src: "D_7.png"
    },
    { chord: "D#m7", name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435-\u0434\u0438\u0435\u0437", src: "D_m7.png" },
    { chord: "Ddim7", name: "\u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435", src: "Ddim7.png" },
    { chord: "D#dim7", name: "\u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435-\u0434\u0438\u0435\u0437", src: "D_dim7.png" },
    { chord: "D7sus4", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u0441 \u043A\u0432\u0430\u0440\u0442\u043E\u0439 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435", src: "D7sus4.png" },
    {
      chord: "D#7sus4",
      name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u0441 \u043A\u0432\u0430\u0440\u0442\u043E\u0439 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435-\u0434\u0438\u0435\u0437",
      src: "D_7sus4.png"
    },
    { chord: "D7/6", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u0441 \u0441\u0435\u043A\u0441\u0442\u043E\u0439 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435", src: "D7-6.png" },
    { chord: "D#7/6", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u0441 \u0441\u0435\u043A\u0441\u0442\u043E\u0439 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435-\u0434\u0438\u0435\u0437", src: "D_7-6.png" },
    { chord: "D9", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u043D\u043E\u043D\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435", src: "D9.png" },
    { chord: "Dm9", name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u043D\u043E\u043D\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435", src: "Dm9.png" },
    { chord: "D#9", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u043D\u043E\u043D\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435-\u0434\u0438\u0435\u0437", src: "D_9.png" },
    { chord: "D#m9", name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u043D\u043E\u043D\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u0420\u0435-\u0434\u0438\u0435\u0437", src: "D_m9.png" }
  ],
  E: [
    { chord: "E", name: "\u041C\u0438 \u043C\u0430\u0436\u043E\u0440", src: "E.png" },
    { chord: "Em", name: "\u041C\u0438 \u043C\u0438\u043D\u043E\u0440", src: "Em.png" },
    { chord: "E+", name: "\u041C\u0438 \u043C\u0430\u0436\u043E\u0440 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u043D\u044B\u0439", src: "E+.png" },
    { chord: "Emaj7", name: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439 \u043C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u041C\u0438", src: "Emaj7.png" },
    { chord: "Edim", name: "\u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u043D\u044B\u0439 \u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u041C\u0438", src: "Edim.png" },
    { chord: "Esus4", name: "\u041C\u0438 \u043C\u0430\u0436\u043E\u0440 \u0441 \u043A\u0432\u0430\u0440\u0442\u043E\u0439 \u0432\u043C\u0435\u0441\u0442\u043E \u0442\u0435\u0440\u0446\u0438\u0438", src: "Esus4.png" },
    { chord: "E6", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043A\u0441\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u041C\u0438", src: "E6.png" },
    { chord: "Em6", name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043A\u0441\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u041C\u0438", src: "Em6.png" },
    { chord: "E7", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 (\u0414\u043E\u043C\u0438\u043D\u0430\u043D\u0442\u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434) \u043E\u0442 \u043D\u043E\u0442\u044B \u041C\u0438", src: "E7.png" },
    { chord: "Em7", name: "\u041C\u0438\u043D\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u041C\u0438", src: "Em7.png" },
    { chord: "Edim7", name: "\u0423\u043C\u0435\u043D\u044C\u0448\u0435\u043D\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u043E\u0442 \u043D\u043E\u0442\u044B \u041C\u0438", src: "Edim7.png" },
    { chord: "E7sus4", name: "\u041C\u0430\u0436\u043E\u0440\u043D\u044B\u0439 \u0441\u0435\u043F\u0442\u0430\u043A\u043A\u043E\u0440\u0434 \u0441 \u043A\u0432\u0430\u0440\u0442\u043E\u0439 \u043E\u0442 \u043D\u043E\u0442\u044B \u041C\u0438", src: "E7sus4.png" }
  ],
  F: [{ chord: "F", name: "\u0424\u0430 \u043C\u0430\u0436\u043E\u0440", src: "F.png" }],
  G: [
    { chord: "Gm", name: "\u0421\u043E\u043B\u044C \u043C\u0438\u043D\u043E\u0440", src: "Gm.png" },
    { chord: "G#", name: "\u0421\u043E\u043B\u044C-\u0434\u0438\u0435\u0437 \u043C\u0430\u0436\u043E\u0440", src: "G_.png" }
  ],
  H: []
}, Chords = Object.keys(ChordsList).reduce(
  (chords, note) => (ChordsList[note.charAt(0)].forEach((elem) => {
    chords[elem.chord] = elem;
  }), chords),
  {}
), ChordsKeys = Object.keys(Chords);

// app/utils/stringHelper.ts
var CHORD_REGEX_PATTERN = /\b[A-H][b#]?(maj|min|m|\+|-|dim|aug|add)?\d*(sus)?\d*(\/[A-G][b#]?)?\b/g;
function getChordsFromString(line) {
  return Array.from(
    new Set(line.split(/\b/).filter((word) => word.match(CHORD_REGEX_PATTERN)))
  ).filter((chord) => ChordsKeys.includes(chord));
}
function isChordsRow(line) {
  if (line.length) {
    let pattern = new RegExp(CHORD_REGEX_PATTERN);
    return line.match(pattern) ? ["chords_row"] : [];
  }
  return [];
}

// app/api/songService.ts
async function getSong(author, name) {
  var _a;
  if (!author || !name || !((_a = SongsData[author]) != null && _a[name]))
    return Promise.reject();
  let path = `/songs/${SongsData[author][name].path}`, lines = (await (await fetch(path)).text()).split(`
`);
  return {
    name,
    lyrics: lines.map((line) => line === `${author} - ${name}` ? [] : [line.length ? line : `
`, ...isChordsRow(line)])
  };
}

// app/components/Lyrics/Lyrics.tsx
var import_react10 = require("react"), import_classnames = __toESM(require("classnames"));

// app/hooks/useInterval.ts
var import_react7 = require("react");
function useInterval(callback, delay) {
  let savedCallback = (0, import_react7.useRef)(callback);
  (0, import_react7.useEffect)(() => {
    savedCallback.current = callback;
  }, [callback]), (0, import_react7.useEffect)(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

// app/hooks/useTheme.ts
var import_react8 = require("react");
var useTheme = () => {
  let {
    state: { theme }
  } = (0, import_react8.useContext)(ThemeContext);
  return { theme: theme || "dark" /* DARK */ };
};

// app/utils/helper.ts
function scrollToTop(smooth) {
  window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
}

// app/components/FullscreenButton.tsx
var import_react9 = require("react"), import_IconButton2 = __toESM(require("@mui/material/IconButton"));

// app/assets/ExpandFullscreen.tsx
var import_jsx_runtime7 = require("react/jsx-runtime"), ExpandFullscreen = (props) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("svg", { width: "96px", height: "96px", viewBox: "0 0 96 96", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("title", {}),
  /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M30,0H6A5.9966,5.9966,0,0,0,0,6V30a6,6,0,0,0,12,0V12H30A6,6,0,0,0,30,0Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M90,0H66a6,6,0,0,0,0,12H84V30a6,6,0,0,0,12,0V6A5.9966,5.9966,0,0,0,90,0Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("path", { d: "M30,84H12V66A6,6,0,0,0,0,66V90a5.9966,5.9966,0,0,0,6,6H30a6,6,0,0,0,0-12Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "path",
      {
        d: "M90,60a5.9966,5.9966,0,0,0-6,6V84H66a6,6,0,0,0,0,12H90a5.9966,5.9966,0,0,0,6-6V66A5.9966,5.9966,0,0,0,90,60Z"
      }
    )
  ] })
] }), ExpandFullscreen_default = ExpandFullscreen;

// app/assets/ExitFullscreen.tsx
var import_jsx_runtime8 = require("react/jsx-runtime"), ExpandFullScreen = (props) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("svg", { width: "96px", height: "96px", viewBox: "0 0 96 96", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("title", {}),
  /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("g", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M30,60H6A6,6,0,0,0,6,72H24V90a6,6,0,0,0,12,0V66A5.9966,5.9966,0,0,0,30,60Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M90,60H66a5.9966,5.9966,0,0,0-6,6V90a6,6,0,0,0,12,0V72H90a6,6,0,0,0,0-12Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M66,36H90a6,6,0,0,0,0-12H72V6A6,6,0,0,0,60,6V30A5.9966,5.9966,0,0,0,66,36Z" }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "path",
      {
        d: "M30,0a5.9966,5.9966,0,0,0-6,6V24H6A6,6,0,0,0,6,36H30a5.9966,5.9966,0,0,0,6-6V6A5.9966,5.9966,0,0,0,30,0Z"
      }
    )
  ] })
] }), ExitFullscreen_default = ExpandFullScreen;

// app/components/FullscreenButton.tsx
var import_jsx_runtime9 = require("react/jsx-runtime"), FullscreenButton = () => {
  let [fullScreenEnabled, setFullScreenEnabled] = (0, import_react9.useState)(!!document.fullscreenElement);
  async function toggleFullscreen() {
    document.fullscreenElement ? document.exitFullscreen && (await document.exitFullscreen(), setFullScreenEnabled(!1)) : (await document.documentElement.requestFullscreen(), setFullScreenEnabled(!0));
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_IconButton2.default, { onClick: toggleFullscreen, "aria-label": "toggle fullscrean", component: "label", style: { height: "24px", width: "24px", padding: "0", borderRadius: "unset" }, children: fullScreenEnabled ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ExpandFullscreen_default, {}) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ExitFullscreen_default, {}) });
}, FullscreenButton_default = FullscreenButton;

// app/components/Lyrics/Lyrics.module.css
var Lyrics_module_default = { btn: "HP8Wt", scrollToTopBtn: "kPMGK" };

// app/components/Lyrics/Lyrics.tsx
var import_jsx_runtime10 = require("react/jsx-runtime"), { DARK } = Themes, DEFAULT_SPEED = 70, SPEED_DELTA = 10, TIMEOUT = 5, Lyrics = ({ author, song: { name, lyrics, speed: defaultSpeed = 0 } }) => {
  let { theme } = useTheme(), [speed, setSpeed] = (0, import_react10.useState)(0), [scrollBtnLabel, setScrollBtnLabel] = (0, import_react10.useState)("!"), [scrollable, setScrollable] = (0, import_react10.useState)(!1), [{ isModalOpen, activeRowChords }, setIsModalState] = (0, import_react10.useState)({}), [time, setTime] = (0, import_react10.useState)(-1), [chords, setChords] = (0, import_react10.useState)([]);
  (0, import_react10.useEffect)(() => {
    scrollToTop(), setSpeed(defaultSpeed);
    let allChords = /* @__PURE__ */ new Set();
    lyrics.forEach(([line, isChordsRow2]) => {
      isChordsRow2 && (allChords = /* @__PURE__ */ new Set([...Array.from(allChords), ...getChordsFromString(line)]));
    }), setChords(Array.from(allChords));
  }, [defaultSpeed, lyrics]), (0, import_react10.useEffect)(() => {
    let timeout;
    return time > 0 ? timeout = window.setTimeout(() => {
      setScrollBtnLabel(String(time - 1)), setTime((prevState) => prevState - 1);
    }, 500) : time === 0 && (setScrollBtnLabel(String(speed)), setScrollable(!0)), () => window.clearTimeout(timeout);
  }, [speed, time]);
  let autoscroll = (0, import_react10.useCallback)(
    () => scrollable && window.scrollBy({ top: 0.5, behavior: "smooth" }),
    [scrollable]
  ), onScrollToTopClick = (0, import_react10.useCallback)(() => {
    setScrollable(!1), scrollToTop();
  }, []);
  useInterval(autoscroll, DEFAULT_SPEED - speed * SPEED_DELTA);
  let toggleScrollable = async () => {
    scrollable ? setScrollable(!1) : (setScrollBtnLabel(String(TIMEOUT)), setTime(TIMEOUT));
  }, increaseSpeed = () => setSpeed((prevValue) => prevValue + 1), decreaseSpeed = () => setSpeed((prevValue) => prevValue - 1);
  function withThemeClassName(className) {
    return (0, import_classnames.default)(className, { [Lyrics_module_default.dark]: theme === DARK });
  }
  let onCloseModal = (0, import_react10.useCallback)(() => setIsModalState({}), []);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: Lyrics_module_default.content, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: withThemeClassName(Lyrics_module_default.header), children: [
        author,
        ` - ${name}`
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: Lyrics_module_default.lyrics, children: lyrics.map(
        ([text, isChordsRow2], index) => isChordsRow2 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "p",
          {
            className: withThemeClassName((0, import_classnames.default)(Lyrics_module_default.row, Lyrics_module_default.chord)),
            children: text
          },
          `row-${index}`
        ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: withThemeClassName(Lyrics_module_default.row), children: text }, `row-${index}`)
      ) })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: Lyrics_module_default.buttonsBlockWrapper, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: Lyrics_module_default.buttonsBlock, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: Lyrics_module_default.buttonsBlockContent, children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { onClick: onScrollToTopClick, className: Lyrics_module_default.scrollToTopBtn }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(FullscreenButton_default, {})
    ] }) }) })
  ] });
}, Lyrics_default = Lyrics;

// app/routes/songs.$author.$song.tsx
var import_jsx_runtime11 = require("react/jsx-runtime"), meta = () => [{ title: "Song" }];
function Song() {
  let { author, song } = (0, import_react12.useParams)(), [lyrics, setLyrics] = (0, import_react11.useState)(null);
  return (0, import_react11.useEffect)(() => {
    (async () => {
      try {
        let res = await getSong(author, song);
        setLyrics(res);
      } catch {
      }
    })();
  }, [author, song]), console.log(author, song), lyrics && author ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Lyrics_default, { author, song: lyrics }) : null;
}

// app/routes/songs.$author.tsx
var songs_author_exports = {};
__export(songs_author_exports, {
  default: () => Author,
  loader: () => loader,
  meta: () => meta2
});
var import_react13 = require("@remix-run/react"), import_router = require("@remix-run/router");
var import_jsx_runtime12 = require("react/jsx-runtime"), meta2 = () => [{ title: "Author" }], loader = async ({ params }) => {
  if (!params.author)
    (0, import_router.redirect)("/songs");
  else {
    console.log(SongsData[params.author]);
    let songs = Object.keys(SongsData[params.author]);
    songs.length === 1 && (console.log(5, `/songs/${params.author}/${songs[0]}`), (0, import_router.redirect)(`/songs/${params.author}/${songs[0]}`));
  }
};
function Author() {
  let { author } = (0, import_react13.useParams)();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: "This is where the individual teams will appear" }),
    Object.keys(SongsData[author]).map((name, index) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react13.Link, { to: `/songs/${author}/${name}`, children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("p", { children: name }) }, index)),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react13.Outlet, {})
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader2,
  meta: () => meta3
});
var import_router2 = require("@remix-run/router"), import_jsx_runtime13 = require("react/jsx-runtime"), meta3 = () => [{ title: "Home page" }], loader2 = async () => (0, import_router2.redirect)("/songs");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h1", { children: "Welcome to Songbook" }) });
}

// app/routes/songs.tsx
var songs_exports = {};
__export(songs_exports, {
  default: () => Songs
});
var import_react14 = require("@remix-run/react");
var import_jsx_runtime14 = require("react/jsx-runtime");
function Songs() {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("h1", { children: "Author index" }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("div", { style: { display: "flex", gap: "15px", width: "100%", flexFlow: "row wrap", padding: "15px", boxSizing: "border-box" }, children: [
      AuthorsList.map((author, index) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react14.Link, { to: `/songs/${author}`, children: author }, index)),
      /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_react14.Outlet, {})
    ] })
  ] });
}

// server-entry-module:@remix-run/dev/server-build
init_assets_manifest();
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/songs.$author.$song": {
    id: "routes/songs.$author.$song",
    parentId: "routes/songs.$author",
    path: ":song",
    index: void 0,
    caseSensitive: void 0,
    module: songs_author_song_exports
  },
  "routes/songs.$author": {
    id: "routes/songs.$author",
    parentId: "routes/songs",
    path: ":author",
    index: void 0,
    caseSensitive: void 0,
    module: songs_author_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/songs": {
    id: "routes/songs",
    parentId: "root",
    path: "songs",
    index: void 0,
    caseSensitive: void 0,
    module: songs_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
/*! Bundled license information:

@remix-run/css-bundle/dist/server.js:
  (**
   * @remix-run/css-bundle v1.16.0
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
