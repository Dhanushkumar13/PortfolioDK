import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { RemixServer, Link as Link$1, useLocation, useNavigate, useNavigation, useLoaderData, useFetcher, Meta, Links, Outlet, ScrollRestoration, Scripts, useRouteError, useActionData, Form } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { createCookieSessionStorage, json } from "@remix-run/cloudflare";
import { createContext, useContext, forwardRef, useRef, useEffect, useState, memo, Fragment, useCallback, useId, Children, useSyncExternalStore, lazy, Suspense } from "react";
import { useReducedMotion, AnimatePresence, usePresence, useSpring } from "framer-motion";
import { useMDXComponents, MDXProvider } from "@mdx-js/react";
import axios from "axios";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  const body = await renderToReadableStream(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
    {
      signal: request.signal,
      onError(error2) {
        console.error(error2);
        responseStatusCode = 500;
      }
    }
  );
  if (isBotRequest(request.headers.get("user-agent"))) {
    await body.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const GothamBoldItalic = "/assets/gotham-bold-italic-C_msAlmW.woff2";
const GothamBold = "/assets/gotham-bold-D1kvQ7KV.woff2";
const GothamBookItalic = "/assets/gotham-book-italic-Bm2IEtSK.woff2";
const GothamBook = "/assets/gotham-book-Bnaws0Ef.woff2";
const GothamMediumItalic = "/assets/gotham-medium-italic-Dok430ou.woff2";
const GothamMedium = "/assets/gotham-medium-0VT3RO8I.woff2";
const IPAGothic = "/assets/ipa-gothic-DimHCOud.woff2";
const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400
};
const numToPx = (num) => `${num}px`;
const pxToRem = (px) => `${px / 16}rem`;
const msToNum = (msString) => Number(msString.replace("ms", ""));
const numToMs = (num) => `${num}ms`;
function cssProps(props, style = {}) {
  let result = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    let value2 = props[key];
    if (typeof value2 === "number" && key === "delay") {
      value2 = numToMs(value2);
    }
    if (typeof value2 === "number" && key !== "opacity") {
      value2 = numToPx(value2);
    }
    if (typeof value2 === "number" && key === "opacity") {
      value2 = `${value2 * 100}%`;
    }
    result[`--${key}`] = value2;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
const baseTokens = {
  black: "oklch(0% 0 0)",
  white: "oklch(100% 0 0)",
  bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  durationXS: "200ms",
  durationS: "300ms",
  durationM: "400ms",
  durationL: "600ms",
  durationXL: "800ms",
  systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
  fontStack: `Gotham, var(--systemFontStack)`,
  monoFontStack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  japaneseFontStack: "IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeBodyXL: pxToRem(22),
  fontSizeBodyL: pxToRem(20),
  fontSizeBodyM: pxToRem(18),
  fontSizeBodyS: pxToRem(16),
  fontSizeBodyXS: pxToRem(14),
  lineHeightTitle: "1.1",
  lineHeightBody: "1.6",
  maxWidthS: "540px",
  maxWidthM: "720px",
  maxWidthL: "1096px",
  maxWidthXL: "1680px",
  spaceOuter: "64px",
  spaceXS: "4px",
  spaceS: "8px",
  spaceM: "16px",
  spaceL: "24px",
  spaceXL: "32px",
  space2XL: "48px",
  space3XL: "64px",
  space4XL: "96px",
  space5XL: "128px",
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64
};
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80)
};
const tokensLaptop = {
  maxWidthS: "480px",
  maxWidthM: "640px",
  maxWidthL: "1000px",
  maxWidthXL: "1100px",
  spaceOuter: "48px",
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22)
};
const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20)
};
const tokensMobile = {
  spaceOuter: "24px",
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14)
};
const tokensMobileSmall = {
  spaceOuter: "16px",
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20)
};
const dark = {
  background: "oklch(17.76% 0 0)",
  backgroundLight: "oklch(21.78% 0 0)",
  primary: "oklch(84.42% 0.19 202.24)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(65.91% 0.249 13.76)",
  text: "var(--white)",
  textTitle: "var(--text)",
  textBody: "color-mix(in lab, var(--text) 80%, transparent)",
  textLight: "color-mix(in lab, var(--text) 60%, transparent)"
};
const light = {
  background: "oklch(96.12% 0 0)",
  backgroundLight: "var(--white)",
  primary: "var(--black)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(63.17% 0.259 25.41)",
  text: "var(--black)",
  textTitle: "color-mix(in lab, var(--text) 90%, transparent)",
  textBody: "color-mix(in lab, var(--text) 75%, transparent)",
  textLight: "color-mix(in lab, var(--text) 55%, transparent)"
};
const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall
};
const themes = { dark, light };
const ThemeContext = createContext({});
const ThemeProvider = ({
  theme = "dark",
  children,
  className,
  as: Component = "div",
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;
  return /* @__PURE__ */ jsxs(
    ThemeContext.Provider,
    {
      value: {
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme
      },
      children: [
        isRootProvider && children,
        !isRootProvider && /* @__PURE__ */ jsx(Component, { className: classes(className), "data-theme": theme, ...rest, children })
      ]
    }
  );
};
function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}
function squish(styles2) {
  return styles2.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(
    Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join("\n\n")
  );
}
function createMediaTokenProperties() {
  return squish(
    Object.keys(media).map((key) => {
      return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
    }).join("\n")
  );
}
const layerStyles = squish(`
  @layer theme, base, components, layout;
`);
const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);
const fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBookItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMediumItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBold}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBoldItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${IPAGothic}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`);
const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
const notFoundPoster = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wgARCABAAEADAREAAhEBAxEB/8QAGwAAAgIDAQAAAAAAAAAAAAAABAYDBQABBwL/xAAYAQADAQEAAAAAAAAAAAAAAAABAgMABP/aAAwDAQACEAMQAAAA5V08yLHoDDYNgxJHRa8hFEklbmS9AoObTssxD6/KwqJ6VRg4APobRBbZj3O5QslX1GlT21TtokddVIHubc7rotmtg0vhhlBMtofQzWMe2qits4MULqvSbGlenLMibq3QhVZWsVXV6BHLM8lcqXKySlWe0besFLm6rgBirP8A/8QAJBAAAgICAgMBAAIDAAAAAAAAAgMAAQQFERIGITETFDIgIiP/2gAIAQEAAT8A2eWY49zPdbGl/hgl1dVzUt74dVEIqmWVzea2qximxTa3lUpdyllF4pFXyIxDptepoEF+NVcDD7B6mev+UsqqbTRf9ruVqxD7UHXK5jEgu+BmMpY8EU1D080NXUwMcWBVjD3YY43XaZO9pz+OZ1F+P2D7HA0LuIxWPLmbUixw4mHtmoZzRTxzzCl8Uwo/OY0vsE2du08c2Fc0DLmXjJbj9g4mH+aFl2nkmTTWlQwoDSD5cwfGGtP2MzPHLQn+sDVuSfYJh5TxDofMHHbkDdDN1rWJu7uovCY0vVQNI66/rMLZoAuPU2mWgkWVwtoi2WHqIpLq7DxMNqkD7nkmekyuvU0P4tZ7qGKgD0NTHYX6fZsmM/iX7v5GtMX37v7NLmECq7XLyLeF0E3K2U/3PGkXXu5lF/pP/8QAGxEAAwEBAAMAAAAAAAAAAAAAAAECERASICH/2gAIAQIBAT8AbG/WRiejXMFJhKKrCZQ5MMF2xs0Q0Io0pb2R8rrrBUJmjrDdMPEuBJokS0uCVghDKXIof0tYIR//xAAbEQADAQEBAQEAAAAAAAAAAAAAAQIREhAgMf/aAAgBAwEBPwCCV8MsRCwXumlkoVCo00Q0OWRJEHJhhnnJKwz5Xzpp0I06Js0ejbQrIKYxEswuNOcI/CvP/9k=";
const notFoundVideo = "/assets/notfound-Cfa33_DP.mp4";
const flatlinePoster = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAASCAYAAABB7B6eAAAACXBIWXMAAAsRAAALEQF/ZF+RAAACnElEQVQ4y1VU4ZrbIAyzwc3dbft2P/f+T7lrAniS7dBb+xHaAJYly+ifX58uoqLa8GzSMHc1jC69dTGM1rCigm1Llk+ZPuScQy6Ohf9ribsLv/fH62mP3jHFafwnkMYCp46HdZWjmzwsQQCBoENsXPI1sB/jEoImyB0+fiGefRwHssLBJTFL8olgwEbwJj8Ok7eHBRiPngD4e/ZKJkdbZLd2eGK5gsHv93cZeH/NJWM66OYiZekYhzUE7wFymMWhc1hIyoTcybzJ1FkAmT3Z8L99fvyM4E+gfF0Th7ER2ZBBQ4YEMowHmHBEwngM7LnsiKR8aQAgpGhBMDhrEwye2NTPiaULS0PGGEWc2ZFR0ues+ZZ2CCNYe8jqGmbQqJ1vgGtOsTd7IBKlaXghyIiMMyipUjJuvAq0N0gTMiIY5IHHxAAkkKzhHJkTiEXveGe3rfSWJAb1zVqQJgGeI8kzU+rudEW5hsUOcLquSSTcshxi9DKznjNt1mqjxCEPoAGAwaJrnBXuWiVd2sVzoT6tMmbt7LzYNF7Fosak5tkWZbpVTBZkXBHo1VgsLIcU41U2Z3KUy87BjgTAymylFhSPSIzSpXXKetmWEnOOVlAB6tkrlI1MjPoy+6Tsm16MVDjrUiCRqd41k2g+BsvMpZyke7agXsG1Cnb3gNyWjH7IgCKvfYa+4DxVy3XZyemkPGteskTStdj/c5RWwBepuKe2a5g9xqq5uvlmay+becjQ6pJj0/Z2A2z77PtSv7Gk5lOzZxIsS89vApQYmaWyZ+JwAtUNy4Pq+8ZULdvyhq2iuGq1RlqYgBtA9AaSLUn7JpVX+qt0avLS+XaTfjeus5sna5DRwt7qL/3y3t61kapFywO7e7PPfFv4/k3zcPwDeTTjchlA+6QAAAAASUVORK5CYII=";
const flatlineVideo = "/assets/flatline-DaiGY3H4.mp4";
const icon$2 = "_icon_1tdl1_2";
const styles$w = {
  icon: icon$2
};
const sprites = "/assets/icons-DwZf4zH8.svg";
const Icon = forwardRef(({ icon: icon2, className, size, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": true,
      ref,
      className: classes(styles$w.icon, className),
      width: size || 24,
      height: size || 24,
      ...rest,
      children: /* @__PURE__ */ jsx("use", { href: `${sprites}#${icon2}` })
    }
  );
});
const text$5 = "_text_13dm1_2";
const styles$v = {
  text: text$5
};
const Text = ({
  children,
  size = "m",
  as: Component = "span",
  align = "auto",
  weight = "auto",
  secondary,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$v.text, className),
      "data-align": align,
      "data-size": size,
      "data-weight": weight,
      "data-secondary": secondary,
      ...rest,
      children
    }
  );
};
const loader$6 = "_loader_1o1zt_2";
const text$4 = "_text_1o1zt_17";
const span = "_span_1o1zt_43";
const loaderSpan = "_loaderSpan_1o1zt_1";
const styles$u = {
  loader: loader$6,
  text: text$4,
  span,
  loaderSpan
};
const Loader = forwardRef(
  ({ className, style, width = 32, height = 4, text: text2 = "Loading...", center, ...rest }, ref) => {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) {
      return /* @__PURE__ */ jsx(Text, { className: classes(styles$u.text, className), weight: "medium", ...rest, children: text2 });
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classes(styles$u.loader, className),
        "data-center": center,
        style: cssProps({ width, height }, style),
        ...rest,
        children: /* @__PURE__ */ jsx("div", { className: styles$u.span })
      }
    );
  }
);
const Transition = ({ children, in: show, unmount, initial = true, ...props }) => {
  const enterTimeout = useRef();
  const exitTimeout = useRef();
  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx(
    TransitionContent,
    {
      enterTimeout,
      exitTimeout,
      in: show,
      initial,
      ...props,
      children
    }
  ) });
};
const TransitionContent = ({
  children,
  timeout = 0,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  initial,
  nodeRef: defaultNodeRef,
  in: show
}) => {
  const [status, setStatus] = useState(initial ? "exited" : "entered");
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(initial ? false : true);
  const splitTimeout = typeof timeout === "object";
  const internalNodeRef = useRef(null);
  const nodeRef = defaultNodeRef || internalNodeRef;
  const visible = hasEntered && show ? isPresent : false;
  useEffect(() => {
    var _a;
    if (hasEntered || !show)
      return;
    const actualTimeout = splitTimeout ? timeout.enter : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setHasEntered(true);
    setStatus("entering");
    onEnter == null ? void 0 : onEnter();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    enterTimeout.current = setTimeout(() => {
      setStatus("entered");
      onEntered == null ? void 0 : onEntered();
    }, actualTimeout);
  }, [onEnter, onEntered, timeout, status, show]);
  useEffect(() => {
    var _a;
    if (isPresent && show)
      return;
    const actualTimeout = splitTimeout ? timeout.exit : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setStatus("exiting");
    onExit == null ? void 0 : onExit();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    exitTimeout.current = setTimeout(() => {
      setStatus("exited");
      safeToRemove == null ? void 0 : safeToRemove();
      onExited == null ? void 0 : onExited();
    }, actualTimeout);
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);
  return children({ visible, status, nodeRef });
};
const button$5 = "_button_1l2e3_2";
const text$3 = "_text_1l2e3_132";
const loader$5 = "_loader_1l2e3_145";
const icon$1 = "_icon_1l2e3_158";
const styles$t = {
  button: button$5,
  text: text$3,
  loader: loader$5,
  icon: icon$1
};
function isExternalLink(href) {
  return href == null ? void 0 : href.includes("://");
}
const Button = forwardRef(({ href, ...rest }, ref) => {
  if (isExternalLink(href) || !href) {
    return /* @__PURE__ */ jsx(ButtonContent, { href, ref, ...rest });
  }
  return /* @__PURE__ */ jsx(
    ButtonContent,
    {
      unstable_viewTransition: true,
      as: Link$1,
      prefetch: "intent",
      to: href,
      ref,
      ...rest
    }
  );
});
const ButtonContent = forwardRef(
  ({
    className,
    as,
    secondary,
    loading,
    loadingText = "loading",
    icon: icon2,
    iconEnd,
    iconHoverShift,
    iconOnly,
    children,
    rel,
    target,
    href,
    disabled,
    ...rest
  }, ref) => {
    const isExternal = isExternalLink(href);
    const defaultComponent = href ? "a" : "button";
    const Component = as || defaultComponent;
    return /* @__PURE__ */ jsxs(
      Component,
      {
        className: classes(styles$t.button, className),
        "data-loading": loading,
        "data-icon-only": iconOnly,
        "data-secondary": secondary,
        "data-icon": icon2,
        href,
        rel: rel || isExternal ? "noopener noreferrer" : void 0,
        target: target || isExternal ? "_blank" : void 0,
        disabled,
        ref,
        ...rest,
        children: [
          !!icon2 && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$t.icon,
              "data-start": !iconOnly,
              "data-shift": iconHoverShift,
              icon: icon2
            }
          ),
          !!children && /* @__PURE__ */ jsx("span", { className: styles$t.text, children }),
          !!iconEnd && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$t.icon,
              "data-end": !iconOnly,
              "data-shift": iconHoverShift,
              icon: iconEnd
            }
          ),
          /* @__PURE__ */ jsx(Transition, { unmount: true, in: loading, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(
            Loader,
            {
              ref: nodeRef,
              className: styles$t.loader,
              size: 32,
              text: loadingText,
              "data-visible": visible
            }
          ) })
        ]
      }
    );
  }
);
const hidden = "_hidden_1mhmf_2";
const styles$s = {
  hidden
};
const VisuallyHidden = forwardRef(
  ({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        className: classes(styles$s.hidden, className),
        "data-hidden": !visible && !showOnFocus,
        "data-show-on-focus": showOnFocus,
        ref,
        ...rest,
        children
      }
    );
  }
);
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const text$2 = "_text_1v07c_2";
const glyph = "_glyph_1v07c_9";
const value = "_value_1v07c_16";
const styles$r = {
  text: text$2,
  glyph,
  value
};
const glyphs = [
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
  "サ",
  "シ",
  "ス",
  "セ",
  "ソ",
  "タ",
  "チ",
  "ツ",
  "テ",
  "ト",
  "ナ",
  "ニ",
  "ヌ",
  "ネ",
  "ノ",
  "ハ",
  "ヒ",
  "フ",
  "ヘ",
  "ホ",
  "マ",
  "ミ",
  "ム",
  "メ",
  "モ",
  "ヤ",
  "ユ",
  "ヨ",
  "ー",
  "ラ",
  "リ",
  "ル",
  "レ",
  "ロ",
  "ワ",
  "ヰ",
  "ヱ",
  "ヲ",
  "ン",
  "ガ",
  "ギ",
  "グ",
  "ゲ",
  "ゴ",
  "ザ",
  "ジ",
  "ズ",
  "ゼ",
  "ゾ",
  "ダ",
  "ヂ",
  "ヅ",
  "デ",
  "ド",
  "バ",
  "ビ",
  "ブ",
  "ベ",
  "ボ",
  "パ",
  "ピ",
  "プ",
  "ペ",
  "ポ"
];
const CharType = {
  Glyph: "glyph",
  Value: "value"
};
function shuffle(content2, output, position) {
  return content2.map((value2, index2) => {
    if (index2 < position) {
      return { type: CharType.Value, value: value2 };
    }
    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    return { type: CharType.Glyph, value: output[index2].value };
  });
}
const DecoderText = memo(
  ({ text: text2, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: "" }]);
    const container2 = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });
    useEffect(() => {
      const containerInstance = container2.current;
      const content2 = text2.split("");
      let animation;
      const renderOutput = () => {
        const characterMap = output.current.map((item2) => {
          return `<span class="${styles$r[item2.type]}">${item2.value}</span>`;
        });
        containerInstance.innerHTML = characterMap.join("");
      };
      const unsubscribeSpring = decoderSpring.on("change", (value2) => {
        output.current = shuffle(content2, output.current, value2);
        renderOutput();
      });
      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content2.length);
      };
      if (start && !animation && !reduceMotion) {
        startSpring();
      }
      if (reduceMotion) {
        output.current = content2.map((value2, index2) => ({
          type: CharType.Value,
          value: content2[index2]
        }));
        renderOutput();
      }
      return () => {
        unsubscribeSpring == null ? void 0 : unsubscribeSpring();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text2]);
    return /* @__PURE__ */ jsxs("span", { className: classes(styles$r.text, className), ...rest, children: [
      /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$r.label, children: text2 }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: styles$r.content, ref: container2 })
    ] });
  }
);
const heading$2 = "_heading_e2qtd_2";
const styles$q = {
  heading: heading$2
};
const Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$q.heading, className),
      "data-align": align,
      "data-weight": weight,
      "data-level": clampedLevel,
      ...rest,
      children
    }
  ) });
};
const page = "_page_memxv_2";
const videoContainer = "_videoContainer_memxv_22";
const video = "_video_memxv_22";
const credit = "_credit_memxv_78";
const details$3 = "_details_memxv_102";
const text$1 = "_text_memxv_115";
const title$5 = "_title_memxv_122";
const titleFlatline = "_titleFlatline_memxv_123";
const subheading = "_subheading_memxv_155";
const description$3 = "_description_memxv_185";
const button$4 = "_button_memxv_204";
const styles$p = {
  page,
  videoContainer,
  video,
  credit,
  details: details$3,
  text: text$1,
  title: title$5,
  titleFlatline,
  subheading,
  description: description$3,
  button: button$4
};
function useFormInput(initialValue = "") {
  const [value2, setValue] = useState(initialValue);
  const [error2, setError] = useState();
  const [isDirty, setIsDirty] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
    setIsDirty(true);
    if (error2 && event.target.checkValidity()) {
      setError(null);
    }
  };
  const handleInvalid = (event) => {
    event.preventDefault();
    setError(event.target.validationMessage);
  };
  const handleBlur = (event) => {
    if (isDirty) {
      event.target.checkValidity();
    }
  };
  return {
    value: value2,
    error: error2,
    onChange: handleChange,
    onBlur: handleBlur,
    onInvalid: handleInvalid
  };
}
function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
function useInterval(callback, delay2, reset) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay2 !== null) {
      let id = setInterval(tick, delay2);
      return () => clearInterval(id);
    }
  }, [delay2, reset]);
}
function useInViewport(elementRef, unobserveOnIntersect, options = {}, shouldObserve = true) {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);
  useEffect(() => {
    if (!(elementRef == null ? void 0 : elementRef.current))
      return;
    const observer = new IntersectionObserver(([entry2]) => {
      const { isIntersecting, target } = entry2;
      setIntersect(isIntersecting);
      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options);
    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]);
  return intersect;
}
function useParallax(multiplier, onChange) {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    let ticking = false;
    let animationFrame = null;
    const animate = () => {
      const { innerHeight } = window;
      const offsetValue = Math.max(0, window.scrollY) * multiplier;
      const clampedOffsetValue = Math.max(
        -innerHeight,
        Math.min(innerHeight, offsetValue)
      );
      onChange(clampedOffsetValue);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };
    if (!reduceMotion) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}
function usePrevious(value2) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value2;
  }, [value2]);
  return ref.current;
}
function useScrollToHash() {
  const scrollTimeout = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split("#")[1];
      const targetElement = document.getElementById(id);
      targetElement.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll);
          if (window.location.pathname === location.pathname) {
            onDone == null ? void 0 : onDone();
            navigate(`${location.pathname}#${id}`, { scroll: false });
          }
        }, 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location.pathname]
  );
  return scrollToHash;
}
function useWindowSize() {
  const dimensions = useRef(() => ({ w: 1280, h: 800 }));
  const createRuler = useCallback(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed";
    ruler.style.height = "100vh";
    ruler.style.width = 0;
    ruler.style.top = 0;
    document.documentElement.appendChild(ruler);
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);
  const getHeight = useCallback(() => {
    const isIOS = navigator == null ? void 0 : navigator.userAgent.match(/iphone|ipod|ipad/i);
    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }
    return window.innerHeight;
  }, [createRuler]);
  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: getHeight()
    };
  }, [getHeight]);
  const [windowSize, setWindowSize] = useState(dimensions.current);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]);
  return windowSize;
}
async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error("No image src or srcSet provided");
      }
      let tempImage = new Image();
      if (src) {
        tempImage.src = src;
      }
      if (srcSet) {
        tempImage.srcset = srcSet;
      }
      if (sizes) {
        tempImage.sizes = sizes;
      }
      const onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        const source = tempImage.currentSrc;
        tempImage = null;
        resolve(source);
      };
      tempImage.addEventListener("load", onLoad);
    } catch (error2) {
      reject(`Error loading ${srcSet}: ${error2}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
    canvas.toBlob(async (blob) => {
      if (!blob)
        throw new Error("Video thumbnail failed to load");
      const image2 = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image2);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  const sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      const [src, width] = srcString.split(" ");
      const size = Number(width.replace("w", ""));
      const image2 = await generateImage(size);
      return { src, image: image2, width };
    })
  );
  const fakeSrcSet = sources.map(({ image: image2, width }) => `${image2} ${width}`).join(", ");
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  const output = sources.find((src) => src.image === fakeSrc);
  return output.src;
}
const image$3 = "_image_4szht_2";
const container$2 = "_container_4szht_42";
const elementWrapper = "_elementWrapper_4szht_49";
const placeholder = "_placeholder_4szht_71";
const element = "_element_4szht_49";
const button$3 = "_button_4szht_104";
const styles$o = {
  image: image$3,
  container: container$2,
  elementWrapper,
  placeholder,
  element,
  button: button$3
};
const Image$1 = ({
  className,
  style,
  reveal,
  delay: delay2 = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder: placeholder2,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef();
  const src = baseSrc || srcSet.split(" ")[0];
  const inViewport = useInViewport(containerRef, !getIsVideo(src));
  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes(styles$o.image, className),
      "data-visible": inViewport || loaded,
      "data-reveal": reveal,
      "data-raised": raised,
      "data-theme": theme,
      style: cssProps({ delay: numToMs(delay2) }, style),
      ref: containerRef,
      children: /* @__PURE__ */ jsx(
        ImageElements,
        {
          delay: delay2,
          onLoad,
          loaded,
          inViewport,
          reveal,
          src,
          srcSet,
          placeholder: placeholder2,
          ...rest
        }
      )
    }
  );
};
const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder: placeholder2,
  delay: delay2,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [videoSrc, setVideoSrc] = useState();
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef();
  const videoRef = useRef();
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const hasMounted = useHasMounted();
  useEffect(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    };
    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src);
    }
  }, [isVideo, sizes, src, srcSet]);
  useEffect(() => {
    if (!videoRef.current || !videoSrc)
      return;
    const playVideo = () => {
      setPlaying(true);
      videoRef.current.play();
    };
    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };
    if (!play) {
      pauseVideo();
      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }
    if (videoInteracted)
      return;
    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  const togglePlaying = (event) => {
    event.preventDefault();
    setVideoInteracted(true);
    if (videoRef.current.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$o.elementWrapper,
      "data-reveal": reveal,
      "data-visible": inViewport || loaded,
      style: cssProps({ delay: numToMs(delay2 + 1e3) }),
      children: [
        isVideo && hasMounted && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              muted: true,
              loop: true,
              playsInline: true,
              className: styles$o.element,
              "data-loaded": loaded,
              "data-cover": cover,
              autoPlay: !reduceMotion,
              onLoadStart: onLoad,
              src: videoSrc,
              "aria-label": alt,
              ref: videoRef,
              ...rest
            }
          ),
          !noPauseButton && /* @__PURE__ */ jsxs(Button, { className: styles$o.button, onClick: togglePlaying, children: [
            /* @__PURE__ */ jsx(Icon, { icon: playing ? "pause" : "play" }),
            playing ? "Pause" : "Play"
          ] })
        ] }),
        !isVideo && /* @__PURE__ */ jsx(
          "img",
          {
            className: styles$o.element,
            "data-loaded": loaded,
            "data-cover": cover,
            onLoad,
            decoding: "async",
            src: showFullRes ? src : void 0,
            srcSet: showFullRes ? srcSet : void 0,
            width,
            height,
            alt,
            sizes,
            ...rest
          }
        ),
        showPlaceholder && /* @__PURE__ */ jsx(
          "img",
          {
            "aria-hidden": true,
            className: styles$o.placeholder,
            "data-loaded": loaded,
            "data-cover": cover,
            style: cssProps({ delay: numToMs(delay2) }),
            ref: placeholderRef,
            src: placeholder2,
            width,
            height,
            onTransitionEnd: () => setShowPlaceholder(false),
            decoding: "async",
            loading: "lazy",
            alt: "",
            role: "presentation"
          }
        )
      ]
    }
  );
};
function getIsVideo(src) {
  return typeof src === "string" && src.includes(".mp4");
}
const flatlineSkull = "/assets/error-flatline-eK98OAAk.svg";
function Error$1({ error: error2 }) {
  const flatlined = !error2.status;
  const getMessage = () => {
    switch (error2.status) {
      case 404:
        return {
          summary: "Error: redacted",
          message: "This page could not be found. It either doesn’t exist or was deleted. Or perhaps you don’t exist and this webpage couldn’t find you."
        };
      case 405:
        return {
          summary: "Error: method denied",
          message: error2.data
        };
      default:
        return {
          summary: "Error: anomaly",
          message: error2.statusText || error2.data || error2.toString()
        };
    }
  };
  const { summary: summary2, message } = getMessage();
  return /* @__PURE__ */ jsxs("section", { className: styles$p.page, children: [
    flatlined && /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
            [data-theme='dark'] {
              --primary: oklch(69.27% 0.242 25.41);
              --accent: oklch(69.27% 0.242 25.41);
            }
            [data-theme='light'] {
              --primary: oklch(56.29% 0.182 26.5);
              --accent: oklch(56.29% 0.182 26.5);
            }
          `
        }
      }
    ),
    /* @__PURE__ */ jsx(Transition, { in: true, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$p.details, children: /* @__PURE__ */ jsxs("div", { className: styles$p.text, children: [
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$p.title,
            "data-visible": visible,
            level: 0,
            weight: "bold",
            children: error2.status
          }
        ),
        flatlined && /* @__PURE__ */ jsxs(
          Heading,
          {
            className: styles$p.titleFlatline,
            "data-visible": visible,
            level: 2,
            as: "h1",
            children: [
              /* @__PURE__ */ jsx("svg", { width: "60", height: "80", viewBox: "0 0 60 80", children: /* @__PURE__ */ jsx("use", { href: `${flatlineSkull}#skull` }) }),
              /* @__PURE__ */ jsx(DecoderText, { text: "Flatlined", start: visible, delay: 300 })
            ]
          }
        ),
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            "aria-hidden": true,
            className: styles$p.subheading,
            "data-visible": visible,
            as: "h2",
            level: 4,
            children: /* @__PURE__ */ jsx(DecoderText, { text: summary2, start: visible, delay: 300 })
          }
        ),
        /* @__PURE__ */ jsx(Text, { className: styles$p.description, "data-visible": visible, as: "p", children: message }),
        flatlined ? /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$p.button,
            "data-visible": visible,
            href: "https://www.youtube.com/watch?v=EuQzHGcsjlA",
            icon: "chevron-right",
            children: "Emotional support"
          }
        ) : /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$p.button,
            "data-visible": visible,
            href: "/",
            icon: "chevron-right",
            children: "Back to homepage"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: styles$p.videoContainer, "data-visible": visible, children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            reveal: true,
            cover: true,
            noPauseButton: true,
            delay: 600,
            className: styles$p.video,
            src: flatlined ? flatlineVideo : notFoundVideo,
            placeholder: flatlined ? flatlinePoster : notFoundPoster
          }
        ),
        flatlined ? /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$p.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0318871/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Berserk (1997)"
          }
        ) : /* @__PURE__ */ jsx(
          "a",
          {
            className: styles$p.credit,
            "data-visible": visible,
            href: "https://www.imdb.com/title/tt0113568/",
            target: "_blank",
            rel: "noopener noreferrer",
            children: "Animation from Ghost in the Shell (1995)"
          }
        )
      ] })
    ] }) })
  ] });
}
const toggle$1 = "_toggle_1lvbt_2";
const inner = "_inner_1lvbt_17";
const icon = "_icon_1lvbt_25";
const styles$n = {
  toggle: toggle$1,
  inner,
  icon
};
const NavToggle = ({ menuOpen, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$n.toggle,
      "aria-label": "Menu",
      "aria-expanded": menuOpen,
      ...rest,
      children: /* @__PURE__ */ jsxs("div", { className: styles$n.inner, children: [
        /* @__PURE__ */ jsx(Icon, { className: styles$n.icon, "data-menu": true, "data-open": menuOpen, icon: "menu" }),
        /* @__PURE__ */ jsx(
          Icon,
          {
            className: styles$n.icon,
            "data-close": true,
            "data-open": menuOpen,
            icon: "close"
          }
        )
      ] })
    }
  );
};
const toggle = "_toggle_1phd7_2";
const circle = "_circle_1phd7_29";
const mask = "_mask_1phd7_54";
const path = "_path_1phd7_72";
const styles$m = {
  toggle,
  circle,
  mask,
  path
};
const ThemeToggle = ({ isMobile, ...rest }) => {
  const id = useId();
  const { toggleTheme } = useTheme();
  const maskId = `${id}theme-toggle-mask`;
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$m.toggle,
      "data-mobile": isMobile,
      "aria-label": "Toggle theme",
      onClick: () => toggleTheme(),
      ...rest,
      children: /* @__PURE__ */ jsxs("svg", { "aria-hidden": true, className: styles$m.svg, width: "38", height: "38", viewBox: "0 0 38 38", children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
          /* @__PURE__ */ jsx("circle", { className: styles$m.circle, "data-mask": true, cx: "19", cy: "19", r: "13" }),
          /* @__PURE__ */ jsx("circle", { className: styles$m.mask, cx: "25", cy: "14", r: "9" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: styles$m.path,
            d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: styles$m.circle,
            mask: `url(#${maskId})`,
            cx: "19",
            cy: "19",
            r: "12"
          }
        )
      ] })
    }
  );
};
const name$2 = "Dhanush Kumar";
const role = "Developer";
const disciplines = [
  "MERN Stack",
  "Frontend Developer",
  "Devops",
  "Problem Solver"
];
const url$1 = "";
const twitter$1 = "@@Dhanush131199";
const github = "Dhanushkumar13";
const repo = "";
const ascii = "__  __  __\n\\ \\ \\ \\ \\∕\n \\ \\∕\\ \\\n  \\∕  \\∕\n";
const config = {
  name: name$2,
  role,
  disciplines,
  url: url$1,
  twitter: twitter$1,
  github,
  repo,
  ascii
};
const navLinks = [
  {
    label: "Projects",
    pathname: "/#project-1"
  },
  {
    label: "Details",
    pathname: "/#details"
  },
  {
    label: "Experience",
    pathname: "/articles"
  },
  {
    label: "Contact",
    pathname: "/contact"
  }
];
const socialLinks = [
  {
    label: "Twitter",
    url: `https://twitter.com/${config.twitter}`,
    icon: "twitter"
  },
  {
    label: "Github",
    url: `https://github.com/${config.github}`,
    icon: "github"
  }
];
const navbar = "_navbar_zzi78_2";
const logo = "_logo_zzi78_27";
const nav = "_nav_zzi78_2";
const navList = "_navList_zzi78_51";
const navLink = "_navLink_zzi78_59";
const navIcons = "_navIcons_zzi78_102";
const navIconLink = "_navIconLink_zzi78_126";
const navIcon = "_navIcon_zzi78_102";
const mobileNav = "_mobileNav_zzi78_147";
const mobileNavLink = "_mobileNavLink_zzi78_177";
const styles$l = {
  navbar,
  logo,
  nav,
  navList,
  navLink,
  navIcons,
  navIconLink,
  navIcon,
  mobileNav,
  mobileNavLink
};
const dkLogo = "/assets/dk1-C3HwkvrW.webp";
const Navbar = () => {
  const [current, setCurrent] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();
  const { theme } = useTheme();
  const location = useLocation();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const scrollToHash = useScrollToHash();
  useEffect(() => {
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]);
  useEffect(() => {
    if (!target || location.pathname !== "/")
      return;
    setCurrent(`${location.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location.pathname, scrollToHash, target]);
  useEffect(() => {
    const navItems = document.querySelectorAll("[data-navbar-item]");
    const inverseTheme = theme === "dark" ? "light" : "dark";
    const { innerHeight } = window;
    let inverseMeasurements = [];
    let navItemMeasurements = [];
    const isOverlap = (rect1, rect2, scrollY) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };
    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = "";
      }
    };
    const handleInversion = () => {
      const invertedElements = document.querySelectorAll(
        `[data-theme='${inverseTheme}'][data-invert]`
      );
      if (!invertedElements)
        return;
      inverseMeasurements = Array.from(invertedElements).map((item2) => ({
        element: item2,
        top: item2.offsetTop,
        bottom: item2.offsetTop + item2.offsetHeight
      }));
      const { scrollY } = window;
      resetNavTheme();
      for (const inverseMeasurement of inverseMeasurements) {
        if (inverseMeasurement.top - scrollY > innerHeight || inverseMeasurement.bottom - scrollY < 0) {
          continue;
        }
        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = "";
          }
        }
      }
    };
    if (theme === "light") {
      navItemMeasurements = Array.from(navItems).map((item2) => {
        const rect = item2.getBoundingClientRect();
        return {
          element: item2,
          top: rect.top,
          bottom: rect.bottom
        };
      });
      document.addEventListener("scroll", handleInversion);
      handleInversion();
    }
    return () => {
      document.removeEventListener("scroll", handleInversion);
      resetNavTheme();
    };
  }, [theme, windowSize, location.key]);
  const getCurrent = (url2 = "") => {
    const nonTrailing = (current == null ? void 0 : current.endsWith("/")) ? current == null ? void 0 : current.slice(0, -1) : current;
    if (url2 === nonTrailing) {
      return "page";
    }
    return "";
  };
  const handleNavItemClick = (event) => {
    const hash = event.currentTarget.href.split("#")[1];
    setTarget(null);
    if (hash && location.pathname === "/") {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };
  const handleMobileNavClick = (event) => {
    handleNavItemClick(event);
    if (menuOpen)
      setMenuOpen(false);
  };
  return /* @__PURE__ */ jsxs("header", { className: styles$l.navbar, ref: headerRef, children: [
    /* @__PURE__ */ jsx(
      Link$1,
      {
        unstable_viewTransition: true,
        prefetch: "intent",
        to: location.pathname === "/" ? "/#intro" : "/",
        "data-navbar-item": true,
        className: styles$l.logo,
        "aria-label": `${config.name}, ${config.role}`,
        onClick: handleMobileNavClick,
        children: /* @__PURE__ */ jsx(
          "img",
          {
            src: dkLogo,
            alt: config.name,
            style: { height: "100px", width: "auto" }
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
    /* @__PURE__ */ jsxs("nav", { className: styles$l.nav, children: [
      /* @__PURE__ */ jsx("div", { className: styles$l.navList, children: navLinks.map(({ label: label2, pathname }) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          "data-navbar-item": true,
          className: styles$l.navLink,
          "aria-current": getCurrent(pathname),
          onClick: handleNavItemClick,
          children: label2
        },
        label2
      )) }),
      /* @__PURE__ */ jsx(NavbarIcons, { desktop: true })
    ] }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: menuOpen, timeout: msToNum(tokens.base.durationL), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("nav", { className: styles$l.mobileNav, "data-visible": visible, ref: nodeRef, children: [
      navLinks.map(({ label: label2, pathname }, index2) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          className: styles$l.mobileNavLink,
          "data-visible": visible,
          "aria-current": getCurrent(pathname),
          onClick: handleMobileNavClick,
          style: cssProps({
            transitionDelay: numToMs(
              Number(msToNum(tokens.base.durationS)) + index2 * 50
            )
          }),
          children: label2
        },
        label2
      )),
      /* @__PURE__ */ jsx(NavbarIcons, {}),
      /* @__PURE__ */ jsx(ThemeToggle, { isMobile: true })
    ] }) }),
    !isMobile && /* @__PURE__ */ jsx(ThemeToggle, { "data-navbar-item": true })
  ] });
};
const NavbarIcons = ({ desktop }) => /* @__PURE__ */ jsx("div", { className: styles$l.navIcons, children: socialLinks.map(({ label: label2, url: url2, icon: icon2 }) => /* @__PURE__ */ jsx(
  "a",
  {
    "data-navbar-item": desktop || void 0,
    className: styles$l.navIconLink,
    "aria-label": label2,
    href: url2,
    target: "_blank",
    rel: "noopener noreferrer",
    children: /* @__PURE__ */ jsx(Icon, { className: styles$l.navIcon, icon: icon2 })
  },
  label2
)) });
const progress = "_progress_3typo_2";
const styles$k = {
  progress
};
function Progress() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible, setVisible] = useState(false);
  const { state } = useNavigation();
  const progressRef = useRef();
  const timeout = useRef(0);
  useEffect(() => {
    clearTimeout(timeout.current);
    if (state !== "idle") {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [state, animationComplete]);
  useEffect(() => {
    if (!progressRef.current)
      return;
    const controller = new AbortController();
    if (state !== "idle") {
      return setAnimationComplete(false);
    }
    Promise.all(
      progressRef.current.getAnimations({ subtree: true }).map((animation) => animation.finished)
    ).then(() => {
      if (controller.signal.aborted)
        return;
      setAnimationComplete(true);
    });
    return () => {
      controller.abort();
    };
  }, [state]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: styles$k.progress,
      "data-status": state,
      "data-visible": visible,
      "data-complete": animationComplete,
      ref: progressRef
    }
  );
}
const container$1 = "_container_j3vhn_2";
const skip = "_skip_j3vhn_12";
const styles$j = {
  container: container$1,
  skip
};
const reset_module = {};
const global_module = {};
const links$1 = () => [
  {
    rel: "preload",
    href: GothamMedium,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  {
    rel: "preload",
    href: GothamBook,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  { rel: "manifest", href: "/manifest.json" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "shortcut_icon", href: "/shortcut.png", type: "image/png", sizes: "64x64" },
  { rel: "apple-touch-icon", href: "/icon-256.png", sizes: "256x256" },
  { rel: "author", href: "/humans.txt", type: "text/plain" }
];
const loader$4 = async ({ request, context }) => {
  const { url: url2 } = request;
  const { pathname } = new URL(url2);
  const pathnameSliced = pathname.endsWith("/") ? pathname.slice(0, -1) : url2;
  const canonicalUrl = `${config.url}${pathnameSliced}`;
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || "7c885bfd59314c89a3c6c2ad2e1a5c45"],
      secure: true
    }
  });
  let session;
  try {
    session = await getSession(request.headers.get("Cookie"));
  } catch (err) {
    console.error("Session parsing error:", err);
    session = await getSession();
  }
  const theme = session.get("theme") || "dark";
  return json(
    { canonicalUrl, theme },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
};
function App() {
  var _a;
  let { canonicalUrl, theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();
  if ((_a = fetcher.formData) == null ? void 0 : _a.has("theme")) {
    theme = fetcher.formData.get("theme");
  }
  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme ? newTheme : theme === "dark" ? "light" : "dark" },
      { action: "/api/set-theme", method: "post" }
    );
  }
  useEffect(() => {
    console.info(
      `${config.ascii}
`,
      `Taking a peek huh? Check out the source code: ${config.repo}

`
    );
  }, []);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "color-scheme",
          content: theme === "light" ? "light dark" : "dark light"
        }
      ),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl })
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": theme, children: [
      /* @__PURE__ */ jsxs(ThemeProvider, { theme, toggleTheme, children: [
        /* @__PURE__ */ jsx(Progress, {}),
        /* @__PURE__ */ jsx(VisuallyHidden, { showOnFocus: true, as: "a", className: styles$j.skip, href: "#main-content", children: "Skip to main content" }),
        /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsx(
          "main",
          {
            id: "main-content",
            className: styles$j.container,
            tabIndex: -1,
            "data-loading": state === "loading",
            children: /* @__PURE__ */ jsx(Outlet, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function ErrorBoundary$1() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#111" }),
      /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "dark light" }),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": "dark", children: [
      /* @__PURE__ */ jsx(Error$1, { error: error2 }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: App,
  links: links$1,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$2 = {
  "title": "Datahive Labs",
  "abstract": "Worked as SDE intern for a period of 7 months. Primarily contributed on design and development of a Quick Remote Consultation Channel for ensuring easy and quick diagnosis for patients at comfort of homes. Also worked on ideation of a `Content Delivery System` with content-based filtering. Also developed a whatsapp chatbot for doctor-patient communication.",
  "date": "2021-12-31",
  "enddate": "2022-07-01",
  "banner": "/static/hello-world-banner.jpg"
};
function _createMdxContent$2(props) {
  return jsx(Fragment$1, {});
}
function MDXContent$2(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$2, {
      ...props
    })
  }) : _createMdxContent$2();
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$2,
  frontmatter: frontmatter$2
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = {
  "title": "Tata Consultancy Services",
  "abstract": "Working as a Frontend developer in food and beverages domain. Next js, react js and node js are the tech stacks I use on a day-to-day basis.",
  "date": "2022-02-10",
  "enddate": "2023-07-23",
  "banner": "/static/modern-styling-in-react-banner.jpg",
  "featured": true
};
function _createMdxContent$1(props) {
  return jsx(Fragment$1, {});
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1();
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  frontmatter: frontmatter$1
}, Symbol.toStringTag, { value: "Module" }));
const { name: name$1, url, twitter } = config;
const defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title: title2,
  description: description2,
  prefix = name$1,
  ogImage = defaultOgImage
}) {
  const titleText = [prefix, title2].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description2 },
    { name: "author", content: name$1 },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "800" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name$1 },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:description", content: description2 },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:description", content: description2 },
    { property: "twitter:title", content: titleText },
    { property: "twitter:site", content: url },
    { property: "twitter:creator", content: twitter },
    { property: "twitter:image", content: ogImage }
  ];
}
const frontmatter = {
  "title": "MLH Fellowship Prep",
  "abstract": "Got the opportunity to collaborate and build with developers across the globe as a part of the prestigious MLH Fellowship. Developed a portfolio website template and a weather application in react js .",
  "date": "2022-07-10",
  "enddate": "2022-07-31",
  "banner": "/static/hello-world-banner.jpg"
};
function _createMdxContent(props) {
  return jsx(Fragment$1, {});
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter
}, Symbol.toStringTag, { value: "Module" }));
const __variableDynamicImportRuntimeHelper = (glob, path2) => {
  const v = glob[path2];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path2)));
  });
};
function formatTimecode(time) {
  const hours = time / 1e3 / 60 / 60;
  const h = Math.floor(hours);
  const m = Math.floor((hours - h) * 60);
  const s = Math.floor(((hours - h) * 60 - m) * 60);
  const c = Math.floor((((hours - h) * 60 - m) * 60 - s) * 1e3 / 10);
  return `${zeroPrefix(h)}:${zeroPrefix(m)}:${zeroPrefix(s)}:${zeroPrefix(c)}`;
}
function zeroPrefix(value2) {
  return value2 < 10 ? `0${value2}` : `${value2}`;
}
function readingTime(text2) {
  const wpm = 225;
  const words = text2.trim().split(/\s+/).length;
  const time = words / wpm;
  return time * 1e3 * 60;
}
async function getPosts() {
  const modules = /* @__PURE__ */ Object.assign({ "../articles.datahive.mdx": route1, "../articles.mlh.mdx": route5, "../articles.ongoing.mdx": route2 });
  const build = await Promise.resolve().then(() => serverBuild);
  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post2]) => {
      let id = file.replace("../", "routes/").replace(/\.mdx$/, "");
      let slug = build.routes[id].path;
      if (slug === void 0)
        throw new Error(`No route for ${id}`);
      const text2 = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.datahive.mdx": () => import("./articles.datahive-BKb6r3xX.js"), "../articles.mlh.mdx": () => import("./articles.mlh-DV1xg2Te.js"), "../articles.ongoing.mdx": () => import("./articles.ongoing-BTxVqLUB.js") }), `../articles.${slug}.mdx`);
      const readTime = readingTime(text2.default);
      const timecode2 = formatTimecode(readTime);
      return {
        slug,
        timecode: timecode2,
        frontmatter: post2.frontmatter
      };
    })
  );
  return sortBy(posts, (post2) => post2.frontmatter.date, "desc");
}
function sortBy(arr, key, dir = "asc") {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === "asc" ? res : -res;
  });
}
function compare(a, b) {
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}
const divider$2 = "_divider_ucnqf_2";
const line$1 = "_line_ucnqf_8";
const notch = "_notch_ucnqf_30";
const styles$i = {
  divider: divider$2,
  line: line$1,
  notch
};
const Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: classes(styles$i.divider, className),
    style: cssProps(
      {
        lineWidth,
        lineHeight,
        notchWidth,
        notchHeight,
        collapseDelay: numToMs(collapseDelay)
      },
      style
    ),
    ...rest,
    children: [
      /* @__PURE__ */ jsx("div", { className: styles$i.line, "data-collapsed": collapsed }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$i.notch,
          "data-collapsed": collapsed,
          style: cssProps({ collapseDelay: numToMs(collapseDelay + 160) })
        }
      )
    ]
  }
);
Divider.defaultProps = {
  lineWidth: "100%",
  lineHeight: "2px",
  notchWidth: "90px",
  notchHeight: "10px",
  collapsed: false,
  collapseDelay: 0
};
const link$1 = "_link_1h1qj_2";
const styles$h = {
  link: link$1
};
const VALID_EXT = ["txt", "png", "jpg"];
function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href == null ? void 0 : href.split(".").pop());
  return (href == null ? void 0 : href.includes("://")) || (href == null ? void 0 : href[0]) === "#" || isValidExtension;
}
const Link = forwardRef(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    const isExternal = href == null ? void 0 : href.includes("://");
    const relValue = rel || (isExternal ? "noreferrer noopener" : void 0);
    const targetValue = target || (isExternal ? "_blank" : void 0);
    const linkProps = {
      className: classes(styles$h.link, className),
      ["data-secondary"]: secondary,
      rel: relValue,
      href,
      target: targetValue,
      ref,
      ...rest
    };
    if (isAnchor(href)) {
      return /* @__PURE__ */ jsx("a", { ...linkProps, href, children });
    }
    return /* @__PURE__ */ jsx(Link$1, { unstable_viewTransition: true, prefetch: "intent", ...linkProps, to: href, children });
  }
);
const footer$1 = "_footer_gmxrz_2";
const link = "_link_gmxrz_16";
const date$1 = "_date_gmxrz_20";
const styles$g = {
  footer: footer$1,
  link,
  date: date$1
};
const Footer = ({ className }) => /* @__PURE__ */ jsx("footer", { className: classes(styles$g.footer, className), children: /* @__PURE__ */ jsx(Text, { size: "s", align: "center", children: /* @__PURE__ */ jsx(Link, { secondary: true, className: styles$g.link, href: "https://drive.google.com/file/d/1xotLKNvopW52k0qUVHqCufX3-uQJtYbL/view?usp=sharing", target: "_self", children: "Dhanush Kumar" }) }) });
const section$2 = "_section_cvvm4_2";
const styles$f = {
  section: section$2
};
const Section = forwardRef(
  ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx(Component, { className: classes(styles$f.section, className), ref, ...rest, children })
);
function formatDate(date2) {
  return new Date(date2).toLocaleDateString("default", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });
}
const articles = "_articles_nr520_3";
const grid = "_grid_nr520_15";
const header$2 = "_header_nr520_53";
const heading$1 = "_heading_nr520_71";
const list$2 = "_list_nr520_76";
const divider$1 = "_divider_nr520_80";
const skeleton = "_skeleton_nr520_85";
const skeletonBone = "_skeletonBone_nr520_94";
const post$1 = "_post_nr520_98";
const postLabel = "_postLabel_nr520_148";
const postTag = "_postTag_nr520_149";
const labelIn = "_labelIn_nr520_1";
const tagIn = "_tagIn_nr520_1";
const postLink = "_postLink_nr520_223";
const postDate = "_postDate_nr520_280";
const postImage = "_postImage_nr520_290";
const postDetails = "_postDetails_nr520_340";
const postFooter = "_postFooter_nr520_356";
const timecode$1 = "_timecode_nr520_370";
const barcode = "_barcode_nr520_383";
const styles$e = {
  articles,
  grid,
  header: header$2,
  heading: heading$1,
  list: list$2,
  divider: divider$1,
  skeleton,
  skeletonBone,
  post: post$1,
  postLabel,
  postTag,
  labelIn,
  tagIn,
  postLink,
  postDate,
  postImage,
  postDetails,
  postFooter,
  timecode: timecode$1,
  barcode
};
function ArticlesPost({ slug, frontmatter: frontmatter2, timecode: timecode2, index: index2 }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const [endDateTime, setEndDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title: title2, abstract, date: date2, featured, banner: banner2, enddate } = frontmatter2;
  useEffect(() => {
    setDateTime(formatDate(date2));
  }, [date2, dateTime]);
  useEffect(() => {
    setEndDateTime(formatDate(enddate));
  }, [enddate, endDateTime]);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: styles$e.post,
      "data-featured": !!featured,
      style: index2 !== void 0 ? cssProps({ delay: index2 * 100 + 200 }) : void 0,
      children: [
        featured && /* @__PURE__ */ jsx(Text, { className: styles$e.postLabel, size: "s", children: "Ongoing" }),
        featured && !!banner2 && /* @__PURE__ */ jsx("div", { className: styles$e.postImage, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            noPauseButton: true,
            play: !reduceMotion ? hovered : void 0,
            src: banner2,
            placeholder: `${banner2.split(".")[0]}-placeholder.jpg`,
            alt: "",
            role: "presentation"
          }
        ) }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            unstable_viewTransition: true,
            className: styles$e.postLink,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: /* @__PURE__ */ jsxs("div", { className: styles$e.postDetails, children: [
              /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$e.postDate, children: [
                /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px" }),
                dateTime
              ] }),
              /* @__PURE__ */ jsx(Heading, { as: "h2", level: featured ? 2 : 4, children: title2 }),
              /* @__PURE__ */ jsx(Text, { size: featured ? "l" : "s", as: "p", children: abstract }),
              /* @__PURE__ */ jsxs("div", { className: styles$e.postFooter, children: [
                featured && /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$e.postDate, style: { "margin-left": "40%" }, children: [
                  /* @__PURE__ */ jsx(Divider, { notchWidth: "34px", notchHeight: "8px" }),
                  "Ongoing"
                ] }),
                !featured && /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$e.postDate, style: { "margin-left": "40%" }, children: [
                  /* @__PURE__ */ jsx(Divider, { notchWidth: "34px", notchHeight: "8px" }),
                  endDateTime
                ] })
              ] })
            ] })
          }
        )
      ]
    }
  );
}
function Articles$1() {
  const { posts, featured } = useLoaderData();
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;
  const postsHeader = /* @__PURE__ */ jsxs("header", { className: styles$e.header, children: [
    /* @__PURE__ */ jsx(Heading, { className: styles$e.heading, level: 5, as: "h1", children: /* @__PURE__ */ jsx(DecoderText, { text: "Previous Endeavors" }) }),
    /* @__PURE__ */ jsx(Barcode, { className: styles$e.barcode })
  ] });
  const postList = /* @__PURE__ */ jsxs("div", { className: styles$e.list, children: [
    !isSingleColumn && postsHeader,
    posts.map(({ slug, ...post2 }, index2) => (console.log(post2), /* @__PURE__ */ jsx(ArticlesPost, { slug, index: index2, ...post2 }, slug)))
  ] });
  const featuredPost = /* @__PURE__ */ jsx(ArticlesPost, { ...featured });
  return /* @__PURE__ */ jsxs("article", { className: styles$e.articles, children: [
    /* @__PURE__ */ jsxs(Section, { className: styles$e.content, children: [
      !isSingleColumn && /* @__PURE__ */ jsx("div", { className: styles$e.grid, children: featuredPost }),
      isSingleColumn && /* @__PURE__ */ jsxs("div", { className: styles$e.grid, children: [
        postsHeader,
        featuredPost,
        postList
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Barcode({ className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      width: "153",
      height: "20",
      fill: "currentColor",
      viewBox: "0 0 153 20",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillOpacity: ".6",
          d: "M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"
        }
      )
    }
  );
}
async function loader$3() {
  const allPosts = await getPosts();
  const featured = allPosts.filter((post2) => post2.frontmatter.featured)[0];
  const posts = allPosts.filter((post2) => (featured == null ? void 0 : featured.slug) !== post2.slug);
  return json({ posts, featured });
}
function meta$6() {
  return baseMeta({
    title: "Articles",
    description: "A collection of technical design and development articles. May contain incoherent ramblings."
  });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles$1,
  loader: loader$3,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
async function action$1({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get("theme");
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  session.set("theme", theme);
  return json(
    { status: "success" },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1
}, Symbol.toStringTag, { value: "Module" }));
const clamp = (number, boundOne, boundTwo) => {
  if (!boundTwo) {
    return Math.max(number, boundOne) === boundOne ? number : boundOne;
  } else if (Math.min(number, boundOne) === number) {
    return boundOne;
  } else if (Math.max(number, boundTwo) === number) {
    return boundTwo;
  }
  return number;
};
const post = "_post_kr7uo_20";
const header$1 = "_header_kr7uo_44";
const headerText = "_headerText_kr7uo_55";
const date = "_date_kr7uo_79";
const dateText = "_dateText_kr7uo_91";
const titleWordWrapper = "_titleWordWrapper_kr7uo_118";
const titleWord = "_titleWord_kr7uo_118";
const postTitleWord = "_postTitleWord_kr7uo_1";
const banner = "_banner_kr7uo_138";
const bannerImage = "_bannerImage_kr7uo_190";
const bannerImageBlur = "_bannerImageBlur_kr7uo_191";
const details$2 = "_details_kr7uo_202";
const arrow = "_arrow_kr7uo_209";
const timecode = "_timecode_kr7uo_233";
const wrapper = "_wrapper_kr7uo_254";
const content$3 = "_content_kr7uo_266";
const styles$d = {
  post,
  header: header$1,
  headerText,
  date,
  dateText,
  titleWordWrapper,
  titleWord,
  postTitleWord,
  banner,
  bannerImage,
  bannerImageBlur,
  details: details$2,
  arrow,
  timecode,
  wrapper,
  content: content$3
};
const Post = ({ children, title: title2, date: date2, banner: banner2, timecode: timecode2 }) => {
  const scrollToHash = useScrollToHash();
  const imageRef = useRef();
  const [dateTime, setDateTime] = useState(null);
  useEffect(() => {
    setDateTime(formatDate(date2));
  }, [date2, dateTime]);
  useParallax(4e-3, (value2) => {
    if (!imageRef.current)
      return;
    imageRef.current.style.setProperty("--blurOpacity", clamp(value2, 0, 1));
  });
  const handleScrollIndicatorClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  const placeholder2 = `${banner2 == null ? void 0 : banner2.split(".")[0]}-placeholder.jpg`;
  return /* @__PURE__ */ jsxs("article", { className: styles$d.post, children: [
    /* @__PURE__ */ jsxs(Section, { children: [
      banner2 && /* @__PURE__ */ jsxs("div", { className: styles$d.banner, ref: imageRef, children: [
        /* @__PURE__ */ jsx("div", { className: styles$d.bannerImage, children: /* @__PURE__ */ jsx(Image$1, { role: "presentation", src: banner2, placeholder: placeholder2, alt: "" }) }),
        /* @__PURE__ */ jsx("div", { className: styles$d.bannerImageBlur, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            role: "presentation",
            src: placeholder2,
            placeholder: placeholder2,
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("header", { className: styles$d.header, children: /* @__PURE__ */ jsxs("div", { className: styles$d.headerText, children: [
        /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$d.date, ref: nodeRef, children: [
          /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px", collapsed: !visible }),
          /* @__PURE__ */ jsx(Text, { className: styles$d.dateText, "data-visible": visible, children: dateTime })
        ] }) }),
        /* @__PURE__ */ jsx(Heading, { level: 2, as: "h1", className: styles$d.title, "aria-label": title2, children: title2.split(" ").map((word2, index2) => /* @__PURE__ */ jsx("span", { className: styles$d.titleWordWrapper, children: /* @__PURE__ */ jsxs(
          "span",
          {
            className: styles$d.titleWord,
            style: cssProps({ delay: numToMs(index2 * 100 + 100) }),
            children: [
              word2,
              index2 !== title2.split(" ").length - 1 ? " " : ""
            ]
          }
        ) }, `${word2}-${index2}`)) }),
        /* @__PURE__ */ jsxs("div", { className: styles$d.details, children: [
          /* @__PURE__ */ jsx(
            Link$1,
            {
              to: "#postContent",
              className: styles$d.arrow,
              "aria-label": "Scroll to post content",
              onClick: handleScrollIndicatorClick,
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$d.timecode, children: timecode2 })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: styles$d.wrapper, id: "postContent", tabIndex: -1, children: /* @__PURE__ */ jsx(Text, { as: "div", size: "l", className: styles$d.content, children }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const code$1 = "_code_113ft_2";
const actions = "_actions_113ft_159";
const copyIcon = "_copyIcon_113ft_176";
const lang = "_lang_113ft_198";
const styles$c = {
  code: code$1,
  actions,
  copyIcon,
  lang
};
const Code = (props) => {
  var _a;
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const elementRef = useRef();
  const copyTimeout = useRef();
  const lang2 = (_a = props.className) == null ? void 0 : _a.split("-")[1];
  const handleCopy = () => {
    clearTimeout(copyTimeout);
    navigator.clipboard.writeText(elementRef.current.textContent);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$c.code, "data-theme": theme, children: [
    !!lang2 && /* @__PURE__ */ jsx(Text, { secondary: true, size: "s", className: styles$c.lang, children: lang2 }),
    /* @__PURE__ */ jsx("pre", { ref: elementRef, ...props }),
    /* @__PURE__ */ jsx("div", { className: styles$c.actions, children: /* @__PURE__ */ jsx(Button, { iconOnly: true, onClick: handleCopy, "aria-label": "Copy", children: /* @__PURE__ */ jsxs("span", { className: styles$c.copyIcon, children: [
      /* @__PURE__ */ jsx(Transition, { in: !copied, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(Icon, { ref: nodeRef, icon: "copy", "data-visible": visible }) }),
      /* @__PURE__ */ jsx(Transition, { in: copied, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(Icon, { ref: nodeRef, icon: "check", "data-visible": visible }) })
    ] }) }) })
  ] });
};
const list$1 = "_list_1ecfb_2";
const item = "_item_1ecfb_15";
const styles$b = {
  list: list$1,
  item
};
const List = ({ ordered, children, className, ...rest }) => {
  const Element = ordered ? "ol" : "ul";
  return /* @__PURE__ */ jsx(Element, { className: classes(styles$b.list, className), ...rest, children });
};
const ListItem = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsx("li", { className: styles$b.item, ...rest, children });
};
const heading = "_heading_69uyj_2";
const paragraph = "_paragraph_69uyj_14";
const list = "_list_69uyj_14";
const image$2 = "_image_69uyj_14";
const headingLink = "_headingLink_69uyj_19";
const code = "_code_69uyj_72";
const pre = "_pre_69uyj_90";
const hr = "_hr_69uyj_106";
const blockquote = "_blockquote_69uyj_120";
const strong = "_strong_69uyj_139";
const embed = "_embed_69uyj_143";
const styles$a = {
  heading,
  paragraph,
  list,
  image: image$2,
  headingLink,
  code,
  pre,
  hr,
  blockquote,
  strong,
  embed
};
const PostHeadingLink = ({ id }) => {
  return /* @__PURE__ */ jsx(Link$1, { className: styles$a.headingLink, to: `#${id}`, "aria-label": "Link to heading", children: /* @__PURE__ */ jsx(Icon, { icon: "link" }) });
};
const PostH1 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$a.heading, id, level: 2, as: "h1", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH2 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$a.heading, id, level: 3, as: "h2", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH3 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$a.heading, id, level: 4, as: "h3", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH4 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$a.heading, id, level: 5, as: "h4", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostParagraph = ({ children, ...rest }) => {
  const hasSingleChild = Children.count(children) === 1;
  const firstChild = Children.toArray(children)[0];
  if (hasSingleChild && firstChild.type === PostImage) {
    return children;
  }
  return /* @__PURE__ */ jsx(Text, { className: styles$a.paragraph, size: "l", as: "p", ...rest, children });
};
const PostLink = ({ ...props }) => /* @__PURE__ */ jsx(Link, { ...props });
const PostUl = (props) => {
  return /* @__PURE__ */ jsx(List, { className: styles$a.list, ...props });
};
const PostOl = (props) => {
  return /* @__PURE__ */ jsx(List, { className: styles$a.list, ordered: true, ...props });
};
const PostLi = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(ListItem, { ...props, children });
};
const PostCode = ({ children, ...rest }) => /* @__PURE__ */ jsx("code", { className: styles$a.code, ...rest, children });
const PostPre = (props) => {
  return /* @__PURE__ */ jsx("div", { className: styles$a.pre, children: /* @__PURE__ */ jsx(Code, { ...props }) });
};
const PostBlockquote = (props) => {
  return /* @__PURE__ */ jsx("blockquote", { className: styles$a.blockquote, ...props });
};
const PostHr = (props) => {
  return /* @__PURE__ */ jsx("hr", { className: styles$a.hr, ...props });
};
const PostStrong = (props) => {
  return /* @__PURE__ */ jsx("strong", { className: styles$a.strong, ...props });
};
const PostImage = ({ src, alt, width, height, ...rest }) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      className: styles$a.image,
      src,
      loading: "lazy",
      alt,
      width,
      height,
      ...rest
    }
  );
};
const Embed = ({ src }) => {
  return /* @__PURE__ */ jsx("div", { className: styles$a.embed, children: /* @__PURE__ */ jsx("iframe", { src, loading: "lazy", title: "Embed" }) });
};
const postMarkdown = {
  h1: PostH1,
  h2: PostH2,
  h3: PostH3,
  h4: PostH4,
  p: PostParagraph,
  a: PostLink,
  ul: PostUl,
  ol: PostOl,
  li: PostLi,
  pre: PostPre,
  code: PostCode,
  blockquote: PostBlockquote,
  hr: PostHr,
  img: PostImage,
  strong: PostStrong,
  Embed
};
async function loader$2({ request }) {
  const slug = request.url.split("/").at(-1);
  const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.datahive.mdx": () => Promise.resolve().then(() => route1), "../articles.mlh.mdx": () => Promise.resolve().then(() => route5), "../articles.ongoing.mdx": () => Promise.resolve().then(() => route2) }), `../articles.${slug}.mdx`);
  const text2 = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.datahive.mdx": () => import("./articles.datahive-BKb6r3xX.js"), "../articles.mlh.mdx": () => import("./articles.mlh-DV1xg2Te.js"), "../articles.ongoing.mdx": () => import("./articles.ongoing-BTxVqLUB.js") }), `../articles.${slug}.mdx`);
  const readTime = readingTime(text2.default);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;
  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime)
  });
}
function meta$5({ data }) {
  const { title: title2, abstract } = data.frontmatter;
  return baseMeta({ title: title2, description: abstract, prefix: "", ogImage: data.ogImage });
}
function Articles() {
  const { frontmatter: frontmatter2, timecode: timecode2 } = useLoaderData();
  return /* @__PURE__ */ jsx(MDXProvider, { components: postMarkdown, children: /* @__PURE__ */ jsx(Post, { ...frontmatter2, timecode: timecode2, children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles,
  loader: loader$2,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
const textarea = "_textarea_1ly3z_2";
const styles$9 = {
  textarea
};
const TextArea = ({
  className,
  resize = "none",
  value: value2,
  onChange,
  minRows = 1,
  maxRows,
  ...rest
}) => {
  const [rows, setRows] = useState(minRows);
  const [textareaDimensions, setTextareaDimensions] = useState();
  const textareaRef = useRef();
  useEffect(() => {
    const style = getComputedStyle(textareaRef.current);
    const lineHeight = parseInt(style.lineHeight, 10);
    const paddingHeight = parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10);
    setTextareaDimensions({ lineHeight, paddingHeight });
  }, []);
  const handleChange = (event) => {
    onChange(event);
    const { lineHeight, paddingHeight } = textareaDimensions;
    const previousRows = event.target.rows;
    event.target.rows = minRows;
    const currentRows = ~~((event.target.scrollHeight - paddingHeight) / lineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (maxRows && currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setRows(maxRows && currentRows > maxRows ? maxRows : currentRows);
  };
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: classes(styles$9.textarea, className),
      ref: textareaRef,
      onChange: handleChange,
      style: cssProps({ resize }),
      rows,
      value: value2,
      ...rest
    }
  );
};
const container = "_container_1ukhq_2";
const content$2 = "_content_1ukhq_16";
const input$1 = "_input_1ukhq_21";
const root = "_root_1ukhq_1";
const underline = "_underline_1ukhq_55";
const label = "_label_1ukhq_73";
const error = "_error_1ukhq_95";
const errorMessage = "_errorMessage_1ukhq_111";
const styles$8 = {
  container,
  content: content$2,
  input: input$1,
  root,
  underline,
  label,
  error,
  errorMessage
};
const Input = ({
  id,
  label: label2,
  value: value2,
  multiline,
  className,
  style,
  error: error2,
  onBlur,
  autoComplete,
  required,
  maxLength,
  type,
  onChange,
  name: name2,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const generatedId = useId();
  const errorRef = useRef();
  const inputId = id || `${generatedId}input`;
  const labelId = `${inputId}-label`;
  const errorId = `${inputId}-error`;
  const InputElement = multiline ? TextArea : "input";
  const handleBlur = (event) => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$8.container, className),
      "data-error": !!error2,
      style,
      ...rest,
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$8.content, children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: styles$8.label,
              "data-focused": focused,
              "data-filled": !!value2,
              id: labelId,
              htmlFor: inputId,
              children: label2
            }
          ),
          /* @__PURE__ */ jsx(
            InputElement,
            {
              className: styles$8.input,
              id: inputId,
              "aria-labelledby": labelId,
              "aria-describedby": error2 ? errorId : void 0,
              onFocus: () => setFocused(true),
              onBlur: handleBlur,
              value: value2,
              onChange,
              autoComplete,
              required,
              maxLength,
              type,
              name: name2
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$8.underline, "data-focused": focused })
        ] }),
        /* @__PURE__ */ jsx(Transition, { unmount: true, in: error2, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => {
          var _a;
          return /* @__PURE__ */ jsx(
            "div",
            {
              ref: nodeRef,
              className: styles$8.error,
              "data-visible": visible,
              id: errorId,
              role: "alert",
              style: cssProps({
                height: visible ? (_a = errorRef.current) == null ? void 0 : _a.getBoundingClientRect().height : 0
              }),
              children: /* @__PURE__ */ jsxs("div", { className: styles$8.errorMessage, ref: errorRef, children: [
                /* @__PURE__ */ jsx(Icon, { icon: "error" }),
                error2
              ] })
            }
          );
        } })
      ]
    }
  );
};
const contact = "_contact_xvg9q_1";
const form = "_form_xvg9q_18";
const title$4 = "_title_xvg9q_30";
const divider = "_divider_xvg9q_60";
const input = "_input_xvg9q_98";
const botkiller = "_botkiller_xvg9q_140";
const button$2 = "_button_xvg9q_144";
const complete = "_complete_xvg9q_204";
const completeTitle = "_completeTitle_xvg9q_215";
const completeText = "_completeText_xvg9q_234";
const completeButton = "_completeButton_xvg9q_253";
const formError = "_formError_xvg9q_279";
const formErrorContent = "_formErrorContent_xvg9q_291";
const formErrorMessage = "_formErrorMessage_xvg9q_295";
const formErrorIcon = "_formErrorIcon_xvg9q_303";
const footer = "_footer_xvg9q_308";
const styles$7 = {
  contact,
  form,
  title: title$4,
  divider,
  input,
  botkiller,
  button: button$2,
  complete,
  completeTitle,
  completeText,
  completeButton,
  formError,
  formErrorContent,
  formErrorMessage,
  formErrorIcon,
  footer
};
const meta$4 = () => {
  return baseMeta({
    title: "Contact",
    description: "Send me a message if you’re interested in discussing a project or if you just want to say hi"
  });
};
const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;
async function action({ context, request }) {
  const formData = await request.formData();
  const isBot = String(formData.get("name"));
  const email = String(formData.get("email"));
  const message = String(formData.get("message"));
  const errors = {};
  if (isBot)
    return json({ success: true });
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message) {
    errors.message = "Please enter a message.";
  }
  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
  }
  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }
  const templateParams = {
    email,
    message
  };
  try {
    const res = await axios.post("https://portfolio-backend-three-mu.vercel.app/send-email", templateParams);
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
  return json({ success: true });
}
const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput("");
  const message = useFormInput("");
  const initDelay2 = tokens.base.durationS;
  const actionData = useActionData();
  const { state } = useNavigation();
  const sending = state === "submitting";
  useEffect(() => {
  }, []);
  return /* @__PURE__ */ jsxs(Section, { className: styles$7.contact, children: [
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: !(actionData == null ? void 0 : actionData.success), timeout: 1600, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs(
      Form,
      {
        unstable_viewTransition: true,
        className: styles$7.form,
        method: "post",
        ref: nodeRef,
        children: [
          /* @__PURE__ */ jsx(
            Heading,
            {
              className: styles$7.title,
              "data-status": status,
              level: 3,
              as: "h1",
              style: getDelay(tokens.base.durationXS, initDelay2, 0.3),
              children: /* @__PURE__ */ jsx(DecoderText, { text: "Say hello", start: status !== "exited", delay: 300 })
            }
          ),
          /* @__PURE__ */ jsx(
            Divider,
            {
              className: styles$7.divider,
              "data-status": status,
              style: getDelay(tokens.base.durationXS, initDelay2, 0.4)
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: styles$7.botkiller,
              label: "Name",
              name: "name",
              maxLength: MAX_EMAIL_LENGTH
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              className: styles$7.input,
              "data-status": status,
              style: getDelay(tokens.base.durationXS, initDelay2),
              autoComplete: "email",
              label: "Your email",
              type: "email",
              name: "email",
              maxLength: MAX_EMAIL_LENGTH,
              ...email
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              multiline: true,
              className: styles$7.input,
              "data-status": status,
              style: getDelay(tokens.base.durationS, initDelay2),
              autoComplete: "off",
              label: "Message",
              name: "message",
              maxLength: MAX_MESSAGE_LENGTH,
              ...message
            }
          ),
          /* @__PURE__ */ jsx(
            Transition,
            {
              unmount: true,
              in: !sending && (actionData == null ? void 0 : actionData.errors),
              timeout: msToNum(tokens.base.durationM),
              children: ({ status: errorStatus, nodeRef: nodeRef2 }) => {
                var _a, _b, _c;
                return /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: styles$7.formError,
                    ref: nodeRef2,
                    "data-status": errorStatus,
                    style: cssProps({
                      height: errorStatus ? (_a = errorRef.current) == null ? void 0 : _a.offsetHeight : 0
                    }),
                    children: /* @__PURE__ */ jsx("div", { className: styles$7.formErrorContent, ref: errorRef, children: /* @__PURE__ */ jsxs("div", { className: styles$7.formErrorMessage, children: [
                      /* @__PURE__ */ jsx(Icon, { className: styles$7.formErrorIcon, icon: "error" }),
                      (_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email,
                      (_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.message
                    ] }) })
                  }
                );
              }
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              className: styles$7.button,
              "data-status": status,
              style: getDelay(tokens.base.durationM, initDelay2),
              disabled: sending,
              loading: sending,
              loadingText: "Sending...",
              icon: "send",
              type: "submit",
              children: "Send message"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: actionData == null ? void 0 : actionData.success, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$7.complete, "aria-live": "polite", ref: nodeRef, children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h3",
          className: styles$7.completeTitle,
          "data-status": status,
          children: "Message Sent"
        }
      ),
      /* @__PURE__ */ jsx(
        Text,
        {
          size: "l",
          as: "p",
          className: styles$7.completeText,
          "data-status": status,
          style: getDelay(tokens.base.durationXS),
          children: "I’ll get back to you within a couple days, sit tight"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          secondary: true,
          iconHoverShift: true,
          className: styles$7.completeButton,
          "data-status": status,
          style: getDelay(tokens.base.durationM),
          href: "/",
          icon: "chevron-right",
          children: "Back to homepage"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Footer, { className: styles$7.footer })
  ] });
};
function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Contact,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const onlineIDE = "/assets/OnlineIDE-1ebMLXVF.png";
const ShortURL = "/assets/UrlShortner-Cq9qGKNy.png";
const ShortURLLight = "/assets/shortURL.Light-DwX83rkn.png";
const sprTexturePlaceholder = "/assets/spr-lesson-builder-dark-placeholder-BYjrS8rr.jpg";
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
const intro = "_intro_x8c4c_1";
const text = "_text_x8c4c_9";
const name = "_name_x8c4c_36";
const title$3 = "_title_x8c4c_74";
const row$1 = "_row_x8c4c_78";
const word = "_word_x8c4c_107";
const introTextReveal = "_introTextReveal_x8c4c_1";
const line = "_line_x8c4c_183";
const introLine = "_introLine_x8c4c_1";
const scrollIndicator = "_scrollIndicator_x8c4c_232";
const introScrollIndicator = "_introScrollIndicator_x8c4c_1";
const mobileScrollIndicator = "_mobileScrollIndicator_x8c4c_299";
const introMobileScrollIndicator = "_introMobileScrollIndicator_x8c4c_1";
const styles$6 = {
  intro,
  text,
  name,
  title: title$3,
  row: row$1,
  word,
  introTextReveal,
  line,
  introLine,
  scrollIndicator,
  introScrollIndicator,
  mobileScrollIndicator,
  introMobileScrollIndicator
};
// const DisplacementSphere = lazy(
//   () => import("./displacement-sphere-hMH1Ftv3.js").then((module) => ({ default: module.DisplacementSphere }))
// );

const modules = import.meta.glob('./displacement-sphere-*.js');

const DisplacementSphere = lazy(async () => {
  const paths = Object.keys(modules);
  if (!paths.length) {
    throw new Error('No displacement-sphere module found');
  }
  const module = await modules[paths[0]](); // Assuming only one file matches
  return { default: module.DisplacementSphere };
});

function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines: disciplines2 } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines2.slice(0, -1).join(", "), disciplines2.slice(-1)[0]].join(
    ", and "
  );
  const currentDiscipline = disciplines2.find((item2, index2) => index2 === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();
  useInterval(
    () => {
      const index2 = (disciplineIndex + 1) % disciplines2.length;
      setDisciplineIndex(index2);
    },
    5e3,
    theme
  );
  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);
  const handleScrollClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$6.intro,
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx(Transition, { in: true, timeout: 3e3, children: ({ visible, status }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        isHydrated && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(DisplacementSphere, {}) }),
        /* @__PURE__ */ jsxs("header", { className: styles$6.text, children: [
          /* @__PURE__ */ jsx("h1", { className: styles$6.name, "data-visible": visible, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: config.name, delay: 500 }) }),
          /* @__PURE__ */ jsxs(Heading, { level: 0, as: "h2", className: styles$6.title, children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$6.label, children: `${config.role} + ${introLabel}` }),
            /* @__PURE__ */ jsxs("span", { "aria-hidden": true, className: styles$6.row, children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: styles$6.word,
                  "data-status": status,
                  style: cssProps({ delay: tokens.base.durationXS }),
                  children: config.role
                }
              ),
              /* @__PURE__ */ jsx("span", { className: styles$6.line, "data-status": status })
            ] }),
            /* @__PURE__ */ jsx("div", { className: styles$6.row, children: disciplines2.map((item2) => /* @__PURE__ */ jsx(
              Transition,
              {
                unmount: true,
                in: item2 === currentDiscipline,
                timeout: { enter: 3e3, exit: 2e3 },
                children: ({ status: status2, nodeRef }) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    ref: nodeRef,
                    className: styles$6.word,
                    "data-plus": true,
                    "data-status": status2,
                    style: cssProps({ delay: tokens.base.durationL }),
                    children: item2
                  }
                )
              },
              item2
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            to: "/#project-1",
            className: styles$6.scrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" })
          }
        ),
        /* @__PURE__ */ jsxs(
          Link$1,
          {
            to: "/#project-1",
            className: styles$6.mobileScrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: [
              /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            ]
          }
        )
      ] }) }, theme)
    }
  );
}
const profileImgPlaceholder = "/assets/profile-placeholder-BpFpcSu8.jpg";
const profileImg = "/assets/profile-dk-NTK44VFd.jpg";
const profile = "_profile_s38cy_1";
const content$1 = "_content_s38cy_37";
const column = "_column_s38cy_50";
const title$2 = "_title_s38cy_59";
const description$2 = "_description_s38cy_70";
const tag = "_tag_s38cy_80";
const tagText = "_tagText_s38cy_93";
const image$1 = "_image_s38cy_114";
const svg$1 = "_svg_s38cy_119";
const button$1 = "_button_s38cy_135";
const styles$5 = {
  profile,
  content: content$1,
  column,
  title: title$2,
  description: description$2,
  tag,
  tagText,
  image: image$1,
  svg: svg$1,
  button: button$1
};
const ProfileText = ({ visible, titleId }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Heading, { className: styles$5.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: "Hi there", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsxs(Text, { className: styles$5.description, "data-visible": visible, size: "l", as: "p", children: [
    "This is Dhanush Kumar, currently I live in Chennai, India working as Frontend Engineer at",
    " ",
    /* @__PURE__ */ jsx(Link, { href: "https://www.tcs.com/", children: "Tata Consultancy Services" }),
    '. "Passionate Software Developer with a strong foundation in full-stack development. Currently, I work mostly with TypeScript, React and Nodejs. Proven track record in designing and implementing scalable, resilient, and user-centric applications. Adept at leveraging modern technologies to solve complex problems and deliver impactful solutions, Being comfortable with code allows me to rapidly prototype and validate experiences. If you’re interested in the tools and software I use check out my ',
    /* @__PURE__ */ jsx(Link, { href: "/uses", children: "uses page" }),
    "."
  ] }),
  /* @__PURE__ */ jsxs(Text, { className: styles$5.description, "data-visible": visible, size: "l", as: "p", children: [
    "Love to explore a lot - be it gaming 🎮,gym 💪,cricket 🏏and cafehopping 🏃🧋",
    " ",
    "Wanna work me, come say hi!"
  ] })
] });
const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$5.profile,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      id,
      ref: sectionRef,
      "aria-labelledby": titleId,
      tabIndex: -1,
      children: /* @__PURE__ */ jsx(Transition, { in: visible || focused, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$5.content, ref: nodeRef, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$5.column, children: [
          /* @__PURE__ */ jsx(ProfileText, { visible: visible2, titleId }),
          /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              className: styles$5.button,
              "data-visible": visible2,
              href: "/contact",
              icon: "send",
              children: "Send me a message"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$5.column, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$5.tag, "aria-hidden": true, children: [
            /* @__PURE__ */ jsx(
              Divider,
              {
                notchWidth: "64px",
                notchHeight: "8px",
                collapsed: !visible2,
                collapseDelay: 1e3
              }
            ),
            /* @__PURE__ */ jsx("div", { className: styles$5.tagText, "data-visible": visible2, children: "About me" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: styles$5.image, children: /* @__PURE__ */ jsx(
            Image$1,
            {
              reveal: true,
              delay: 100,
              placeholder: profileImgPlaceholder,
              srcSet: `${profileImg} 320w, ${profileImg} 960w`,
              width: 960,
              height: 1080,
              sizes: `(max-width: ${media.mobile}px) 100vw, 480px`,
              alt: "Me smiling like a goofball at the Qwilr office in Sydney"
            }
          ) })
        ] })
      ] }) })
    }
  );
};
const iphone11 = "/assets/iphone-11-DGIHa_Ph.glb";
const macbookPro = "/assets/macbook-pro-DZn-FKKF.glb";
const ModelAnimationType = {
  SpringUp: "spring-up",
  LaptopOpen: "laptop-open"
};
const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen
  }
};
const summary = "_summary_1cfqm_1";
const content = "_content_1cfqm_35";
const details$1 = "_details_1cfqm_65";
const preview = "_preview_1cfqm_78";
const model = "_model_1cfqm_88";
const loader$1 = "_loader_1cfqm_142";
const svg = "_svg_1cfqm_151";
const index = "_index_1cfqm_192";
const indexNumber = "_indexNumber_1cfqm_201";
const title$1 = "_title_1cfqm_222";
const description$1 = "_description_1cfqm_241";
const button = "_button_1cfqm_260";
const styles$4 = {
  summary,
  content,
  details: details$1,
  preview,
  model,
  loader: loader$1,
  svg,
  index,
  indexNumber,
  title: title$1,
  description: description$1,
  button
};
const Model = lazy(
  () => import("./index-CdsS3Txa.js").then((module) => ({ default: module.Model }))
);
function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index: index2,
  title: title2,
  description: description2,
  model: model2,
  buttonText,
  buttonText2,
  buttonLink,
  buttonLink2,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const indexText = index2 < 10 ? `0${index2}` : index2;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  function handleModelLoad() {
    setModelLoaded(true);
  }
  function renderKatakana(device, visible) {
    return /* @__PURE__ */ jsx("div", {});
  }
  function renderDetails(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$4.details, children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$4.index, children: [
        /* @__PURE__ */ jsx(
          Divider,
          {
            notchWidth: "64px",
            notchHeight: "8px",
            collapsed: !visible,
            collapseDelay: 1e3
          }
        ),
        /* @__PURE__ */ jsx("span", { className: styles$4.indexNumber, "data-visible": visible, children: indexText })
      ] }),
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h2",
          className: styles$4.title,
          "data-visible": visible,
          id: titleId,
          children: title2
        }
      ),
      /* @__PURE__ */ jsx(Text, { className: styles$4.description, "data-visible": visible, as: "p", children: description2 }),
      /* @__PURE__ */ jsxs("div", { style: {
        display: "flex",
        gap: "1rem"
      }, className: styles$4.button, "data-visible": visible, children: [
        /* @__PURE__ */ jsx(Button, { iconHoverShift: true, href: buttonLink, iconEnd: "arrow-right", children: buttonText }),
        /* @__PURE__ */ jsx(Button, { iconHoverShift: true, href: buttonLink2, iconEnd: "arrow-right", children: buttonText2 })
      ] })
    ] });
  }
  function renderPreview(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$4.preview, children: [
      model2.type === "laptop" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        renderKatakana(),
        /* @__PURE__ */ jsxs("div", { className: styles$4.model, "data-device": "laptop", children: [
          !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$4.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
            Model,
            {
              alt: model2.alt,
              cameraPosition: { x: 0, y: 0, z: 8 },
              showDelay: 700,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.laptop,
                  texture: {
                    ...model2.textures[0],
                    sizes: laptopSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] }),
      model2.type === "phone" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        renderKatakana(),
        /* @__PURE__ */ jsxs("div", { className: styles$4.model, "data-device": "phone", children: [
          !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$4.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
            Model,
            {
              alt: model2.alt,
              cameraPosition: { x: 0, y: 0, z: 11.5 },
              showDelay: 300,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.phone,
                  position: { x: -0.6, y: 1.1, z: 0 },
                  texture: {
                    ...model2.textures[0],
                    sizes: phoneSizes
                  }
                },
                {
                  ...deviceModels.phone,
                  position: { x: 0.6, y: -0.5, z: 0.3 },
                  texture: {
                    ...model2.textures[1],
                    sizes: phoneSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$4.summary,
      "data-alternate": alternate,
      "data-first": index2 === 1,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx("div", { className: styles$4.content, children: /* @__PURE__ */ jsx(Transition, { in: sectionVisible || focused, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        !alternate && !isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderDetails(visible),
          renderPreview(visible)
        ] }),
        (alternate || isMobile) && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderPreview(visible),
          renderDetails(visible)
        ] })
      ] }) }) })
    }
  );
}
const home = "_home_1e7fe_1";
const styles$3 = {
  home
};
const mealsApp1 = "/assets/mealsApp1-7miXQw2r.png";
const mealsApp2 = "/assets/mealsApp2-BHuLhxeU.png";
const malwareClassification = "/assets/malwareClassification-CriWZyBT.png";
const chessWhite = "/assets/chessWhite-B5ytsmp0.png";
const chessBlack = "/assets/chessBlack-C_ptiO9F.png";
const excalidraw = "/assets/excalidraw-Cuye_0WW.png";
const links = () => {
  return [
    {
      rel: "prefetch",
      href: "/draco/draco_wasm_wrapper.js",
      as: "script",
      type: "text/javascript",
      importance: "low"
    },
    {
      rel: "prefetch",
      href: "/draco/draco_decoder.wasm",
      as: "fetch",
      type: "application/wasm",
      importance: "low"
    }
  ];
};
const meta$3 = () => {
  return baseMeta({
    title: "Developer",
    description: `Developer portfolio of ${config.name}`
  });
};
const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro2 = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const details2 = useRef();
  useEffect(() => {
    const sections = [intro2, projectOne, projectTwo, projectThree, projectFour, details2];
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            const section2 = entry2.target;
            observer.unobserve(section2);
            if (visibleSections.includes(section2))
              return;
            setVisibleSections((prevSections) => [...prevSections, section2]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    const indicatorObserver = new IntersectionObserver(
      ([entry2]) => {
        setScrollIndicatorHidden(!entry2.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );
    sections.forEach((section2) => {
      sectionObserver.observe(section2.current);
    });
    indicatorObserver.observe(intro2.current);
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  return /* @__PURE__ */ jsxs("div", { className: styles$3.home, children: [
    /* @__PURE__ */ jsx(
      Intro,
      {
        id: "intro",
        sectionRef: intro2,
        scrollIndicatorHidden
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-1",
        sectionRef: projectOne,
        visible: visibleSections.includes(projectOne.current),
        index: 1,
        title: "CodeIT - Online IDE",
        description: "Developed an online IDE platform using React + Typescript",
        buttonText: "View Code",
        buttonLink: "https://github.com/Dhanushkumar13/Replit-main.git",
        buttonText2: "View project",
        buttonLink2: "https://code-it-nu.vercel.app/",
        model: {
          type: "laptop",
          alt: "Online Editor",
          textures: [
            {
              srcSet: `${onlineIDE} 1280w, ${onlineIDE} 2560w`,
              placeholder: sprTexturePlaceholder
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-2",
        alternate: true,
        sectionRef: projectTwo,
        visible: visibleSections.includes(projectTwo.current),
        index: 2,
        title: "ShortURL",
        description: "A modern and minimal URL shortener built with Next.js, designed to convert long URLs into compact, shareable links.",
        buttonText: "View Code",
        buttonLink: "https://github.com/Dhanushkumar13/shortURL.git",
        buttonText2: "View Project",
        buttonLink2: "https://sh-beta-two.vercel.app/",
        model: {
          type: "phone",
          alt: "URL shortner Website",
          textures: [
            {
              srcSet: `${ShortURL} 375w, ${ShortURL} 750w`,
              placeholder: ShortURL
            },
            {
              srcSet: `${ShortURLLight} 375w, ${ShortURLLight} 750w`,
              placeholder: ShortURLLight
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-3",
        alternate: true,
        sectionRef: projectThree,
        visible: visibleSections.includes(projectThree.current),
        index: 3,
        title: "Chess.com",
        description: "A sleek chess game built with Next.js 13 and React 18, styled using Tailwind CSS and enhanced with smooth UI components from Radix UI.",
        buttonText: "View Code",
        buttonLink: "https://github.com/Dhanushkumar13/Chess.git",
        buttonText2: "View project",
        buttonLink2: "https://chess-kappa-blond.vercel.app/",
        model: {
          type: "phone",
          alt: "Meals App",
          textures: [
            {
              srcSet: `${chessWhite} 375w, ${chessWhite} 750w`,
              placeholder: mealsApp1
            },
            {
              srcSet: `${chessBlack} 375w, ${chessBlack} 750w`,
              placeholder: mealsApp2
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-4",
        sectionRef: projectFour,
        visible: visibleSections.includes(projectFour.current),
        index: 4,
        title: "Excalidraw",
        description: "Excalidraw- A Canvas application using NextJs, NodeJs, and Websocket to share and collaborate with your friends",
        buttonText: "View Code",
        buttonLink: "https://github.com/Dhanushkumar13/excalidraw.git",
        buttonText2: "View project",
        buttonLink2: "https://github.com/Dhanushkumar13/excalidraw.git",
        model: {
          type: "laptop",
          alt: "Malware Classification",
          textures: [
            {
              srcSet: `${excalidraw} 800w, ${excalidraw} 1920w`,
              placeholder: malwareClassification
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      Profile,
      {
        sectionRef: details2,
        visible: visibleSections.includes(details2.current),
        id: "details"
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home,
  links,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const usesBackgroundPlaceholder = "/assets/uses-background-placeholder-ppC4yTdE.jpg";
const usesBackground = "/assets/dbz-ui-Cyb73gut.mp4";
const table = "_table_1ajow_2";
const row = "_row_1ajow_7";
const head = "_head_1ajow_16";
const headCell = "_headCell_1ajow_21";
const cell = "_cell_1ajow_26";
const styles$2 = {
  table,
  row,
  head,
  headCell,
  cell
};
const Table = ({ children }) => /* @__PURE__ */ jsx("table", { className: styles$2.table, children });
const TableRow = ({ children }) => /* @__PURE__ */ jsx("tr", { className: styles$2.row, children });
const TableBody = ({ children }) => /* @__PURE__ */ jsx("tbody", { className: styles$2.body, children });
const TableHeadCell = ({ children }) => /* @__PURE__ */ jsx("th", { className: styles$2.headCell, children });
const TableCell = ({ children }) => /* @__PURE__ */ jsx("td", { className: styles$2.cell, children });
const project = "_project_7xwsz_20";
const section$1 = "_section_7xwsz_29";
const sectionInner = "_sectionInner_7xwsz_44";
const sectionBackground = "_sectionBackground_7xwsz_89";
const backgroundImage = "_backgroundImage_7xwsz_138";
const backgroundImageElement = "_backgroundImageElement_7xwsz_157";
const backgroundScrim = "_backgroundScrim_7xwsz_176";
const header = "_header_7xwsz_192";
const headerContent = "_headerContent_7xwsz_212";
const details = "_details_7xwsz_250";
const title = "_title_7xwsz_262";
const projectFadeSlide = "_projectFadeSlide_7xwsz_1";
const description = "_description_7xwsz_272";
const linkButton = "_linkButton_7xwsz_282";
const meta$2 = "_meta_7xwsz_292";
const metaItem = "_metaItem_7xwsz_307";
const image = "_image_7xwsz_327";
const sectionContent = "_sectionContent_7xwsz_335";
const sectionHeading = "_sectionHeading_7xwsz_358";
const sectionText = "_sectionText_7xwsz_362";
const textRow = "_textRow_7xwsz_369";
const sectionColumns = "_sectionColumns_7xwsz_425";
const styles$1 = {
  project,
  section: section$1,
  sectionInner,
  sectionBackground,
  backgroundImage,
  backgroundImageElement,
  backgroundScrim,
  header,
  headerContent,
  details,
  title,
  projectFadeSlide,
  description,
  linkButton,
  meta: meta$2,
  metaItem,
  image,
  sectionContent,
  sectionHeading,
  sectionText,
  textRow,
  sectionColumns
};
const initDelay = 300;
function ProjectHeader({
  title: title2,
  description: description2,
  linkLabel = "Visit website",
  url: url2,
  roles,
  className
}) {
  return /* @__PURE__ */ jsx(Section, { className: classes(styles$1.header, className), as: "section", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$1.headerContent,
      style: cssProps({ initDelay: numToMs(initDelay) }),
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$1.details, children: [
          /* @__PURE__ */ jsx(Heading, { className: styles$1.title, level: 2, as: "h1", children: title2 }),
          /* @__PURE__ */ jsx(Text, { className: styles$1.description, size: "xl", as: "p", children: description2 }),
          !!url2 && /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              iconHoverShift: true,
              className: styles$1.linkButton,
              icon: "chevron-right",
              href: url2,
              children: linkLabel
            }
          )
        ] }),
        !!(roles == null ? void 0 : roles.length) && /* @__PURE__ */ jsx("ul", { className: styles$1.meta, children: roles == null ? void 0 : roles.map((role2, index2) => /* @__PURE__ */ jsx(
          "li",
          {
            className: styles$1.metaItem,
            style: cssProps({ delay: numToMs(initDelay + 300 + index2 * 140) }),
            children: /* @__PURE__ */ jsx(Text, { secondary: true, children: role2 })
          },
          role2
        )) })
      ]
    }
  ) });
}
const ProjectContainer = ({ className, ...rest }) => /* @__PURE__ */ jsx("article", { className: classes(styles$1.project, className), ...rest });
const ProjectSection = forwardRef(
  ({
    className,
    light: light2,
    padding = "both",
    fullHeight,
    backgroundOverlayOpacity = 0.9,
    backgroundElement,
    children,
    ...rest
  }, ref) => /* @__PURE__ */ jsxs(
    "section",
    {
      className: classes(styles$1.section, className),
      "data-light": light2,
      "data-full-height": fullHeight,
      ref,
      ...rest,
      children: [
        !!backgroundElement && /* @__PURE__ */ jsx(
          "div",
          {
            className: styles$1.sectionBackground,
            style: cssProps({ opacity: backgroundOverlayOpacity }),
            children: backgroundElement
          }
        ),
        /* @__PURE__ */ jsx(Section, { className: styles$1.sectionInner, "data-padding": padding, children })
      ]
    }
  )
);
const ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
  const imageRef = useRef();
  useParallax(0.6, (value2) => {
    if (!imageRef.current)
      return;
    imageRef.current.style.setProperty("--offset", `${value2}px`);
  });
  return /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$1.backgroundImage, className),
      "data-visible": visible,
      ref: nodeRef,
      children: [
        /* @__PURE__ */ jsx("div", { className: styles$1.backgroundImageElement, ref: imageRef, children: /* @__PURE__ */ jsx(Image$1, { cover: true, alt: "", role: "presentation", ...rest }) }),
        /* @__PURE__ */ jsx("div", { className: styles$1.backgroundScrim, style: cssProps({ opacity }) })
      ]
    }
  ) });
};
const ProjectSectionContent = ({ className, width = "l", ...rest }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$1.sectionContent, className),
    "data-width": width,
    ...rest
  }
);
const ProjectSectionHeading = ({ className, level = 3, as = "h2", ...rest }) => /* @__PURE__ */ jsx(
  Heading,
  {
    className: classes(styles$1.sectionHeading, className),
    as,
    level,
    align: "auto",
    ...rest
  }
);
const ProjectSectionText = ({ className, ...rest }) => /* @__PURE__ */ jsx(Text, { className: classes(styles$1.sectionText, className), size: "l", as: "p", ...rest });
const ProjectTextRow = ({
  center,
  stretch,
  justify = "center",
  width = "m",
  noMargin,
  className,
  centerMobile,
  ...rest
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$1.textRow, className),
    "data-center": center,
    "data-stretch": stretch,
    "data-center-mobile": centerMobile,
    "data-no-margin": noMargin,
    "data-width": width,
    "data-justify": justify,
    ...rest
  }
);
const uses = "_uses_7vfxj_1";
const section = "_section_7vfxj_5";
const styles = {
  uses,
  section
};
const meta$1 = () => {
  return baseMeta({
    title: "Uses",
    description: "A list of hardware and software I use to do my thing"
  });
};
const Uses = () => {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles.uses, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: usesBackground,
          placeholder: usesBackgroundPlaceholder,
          opacity: 0.7
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: "Uses",
          description: "A List of software and hardware tools that I use to be productive and yeah, that is a Goku in the background."
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Development" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs(List, { children: [
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I use ",
            /* @__PURE__ */ jsx(Link, { href: "https://code.visualstudio.com/", children: "VSCode" }),
            " as my text editor with the Dracula Official theme"
          ] }),
          /* @__PURE__ */ jsx(ListItem, { children: "Chrome is my main browser for both development and general use." }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            /* @__PURE__ */ jsx(Link, { href: "https://nextjs.org/", children: "NextJs" }),
            " is my front end Javascript library of choice."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For developing backends I generally use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://nodejs.org/en/", children: "Node js" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            /* @__PURE__ */ jsx(Link, { href: "https://tailwindcss.com/", children: "TailwindCSS" }),
            " to get upcoming CSS features today."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "As far as databases I have experience with SQL,No-SQL & Graph databases. Some of the renowned names include ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.mongodb.com/", children: "Mongo DB" }),
            ", ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.postgresql.org/", children: "Postgres" })
          ] }),
          /* @__PURE__ */ jsx(ListItem, { children: "Currently using AWS EC2 for deployment" }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "As far as containerization is concerned, I use ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.docker.com/", children: "Docker" }),
            " for creating reproducible development and production environments."
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { stretch: true, width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Hardware" }),
        /* @__PURE__ */ jsx(Table, { children: /* @__PURE__ */ jsxs(TableBody, { children: [
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Operating system" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Windows 11" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Processor" }),
            /* @__PURE__ */ jsx(TableCell, { children: "AMD Ryzen 7 3700x" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "GPU" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Colorful 3070" })
          ] })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uses,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader() {
  throw new Response(null, { status: 404, statusText: "Not found" });
}
const meta = () => {
  return [{ title: "404 | Redacted" }];
};
function ErrorBoundary() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsx(Error$1, { error: error2 });
}
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Di73JlwL.js?client-route=1", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-DvzA8iXO.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-Dkalud7e.js?client-route=1", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-DvzA8iXO.js", "/assets/heading-DIHkTIQH.js", "/assets/decoder-text-xXFa128Z.js", "/assets/image-B2sklpy4.js", "/assets/config-CsqaLvxp.js", "/assets/useWindowSize-DlOz3mXe.js", "/assets/useScrollToHash-VOAaAgFR.js", "/assets/error-C34s4jTB.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/image-CQFqa4Pm.css", "/assets/decoder-text-CdS84zvp.css", "/assets/error-CmEnn51Q.css", "/assets/root-BXvHnrOf.css"] }, "routes/articles.datahive": { "id": "routes/articles.datahive", "parentId": "routes/articles", "path": "datahive", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.datahive-Df50Exbt.js?client-route=1", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/index-CGtxawJD.js"], "css": [] }, "routes/articles.ongoing": { "id": "routes/articles.ongoing", "parentId": "routes/articles", "path": "ongoing", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.ongoing-Df50Exbt.js?client-route=1", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/index-CGtxawJD.js"], "css": [] }, "routes/articles_._index": { "id": "routes/articles_._index", "parentId": "root", "path": "articles", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Bc7--Ydw.js?client-route=1", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-DvzA8iXO.js", "/assets/config-CsqaLvxp.js", "/assets/heading-DIHkTIQH.js", "/assets/section-CEHL8gEU.js", "/assets/date-DvyCAN0s.js", "/assets/decoder-text-xXFa128Z.js", "/assets/image-B2sklpy4.js", "/assets/divider-C2ZAxAst.js", "/assets/useWindowSize-DlOz3mXe.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/section-CUrllC_C.css", "/assets/decoder-text-CdS84zvp.css", "/assets/image-CQFqa4Pm.css", "/assets/divider-CJ0zz9kw.css", "/assets/route-DtSYASGB.css"] }, "routes/api.set-theme": { "id": "routes/api.set-theme", "parentId": "root", "path": "api/set-theme", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-theme-l0sNRNKZ.js?client-route=1", "imports": [], "css": [] }, "routes/articles.mlh": { "id": "routes/articles.mlh", "parentId": "routes/articles", "path": "mlh", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.mlh-Df50Exbt.js?client-route=1", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/index-CGtxawJD.js"], "css": [] }, "routes/articles": { "id": "routes/articles", "parentId": "root", "path": "articles", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CTU7IENW.js?client-route=1", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-DvzA8iXO.js", "/assets/config-CsqaLvxp.js", "/assets/heading-DIHkTIQH.js", "/assets/section-CEHL8gEU.js", "/assets/index-CGtxawJD.js", "/assets/list-CyKO2tQH.js", "/assets/image-B2sklpy4.js", "/assets/date-DvyCAN0s.js", "/assets/divider-C2ZAxAst.js", "/assets/useScrollToHash-VOAaAgFR.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/section-CUrllC_C.css", "/assets/list-DkijDrbu.css", "/assets/image-CQFqa4Pm.css", "/assets/divider-CJ0zz9kw.css", "/assets/route-CMd6_K8x.css"] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-B-1Wv3WS.js?client-route=1", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-DvzA8iXO.js", "/assets/config-CsqaLvxp.js", "/assets/heading-DIHkTIQH.js", "/assets/section-CEHL8gEU.js", "/assets/decoder-text-xXFa128Z.js", "/assets/divider-C2ZAxAst.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/section-CUrllC_C.css", "/assets/decoder-text-CdS84zvp.css", "/assets/divider-CJ0zz9kw.css", "/assets/route-DZ4V55Yk.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-ClQasfpK.js?client-route=1", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-DvzA8iXO.js", "/assets/config-CsqaLvxp.js", "/assets/heading-DIHkTIQH.js", "/assets/section-CEHL8gEU.js", "/assets/image-B2sklpy4.js", "/assets/decoder-text-xXFa128Z.js", "/assets/useScrollToHash-VOAaAgFR.js", "/assets/divider-C2ZAxAst.js", "/assets/useWindowSize-DlOz3mXe.js", "/assets/route-AFDvzX2w.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/section-CUrllC_C.css", "/assets/image-CQFqa4Pm.css", "/assets/decoder-text-CdS84zvp.css", "/assets/divider-CJ0zz9kw.css", "/assets/route-B0j0lWmR.css"] }, "routes/uses": { "id": "routes/uses", "parentId": "root", "path": "uses", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-NESCUafZ.js?client-route=1", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-DvzA8iXO.js", "/assets/config-CsqaLvxp.js", "/assets/heading-DIHkTIQH.js", "/assets/section-CEHL8gEU.js", "/assets/image-B2sklpy4.js", "/assets/list-CyKO2tQH.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/section-CUrllC_C.css", "/assets/image-CQFqa4Pm.css", "/assets/list-DkijDrbu.css", "/assets/route-LsLfgIIe.css"] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/_-DgUxl8Rq.js?client-route=1", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-DvzA8iXO.js", "/assets/heading-DIHkTIQH.js", "/assets/decoder-text-xXFa128Z.js", "/assets/image-B2sklpy4.js", "/assets/error-C34s4jTB.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/decoder-text-CdS84zvp.css", "/assets/image-CQFqa4Pm.css", "/assets/error-CmEnn51Q.css"] }, "routes/home/route": { "id": "routes/home/route", "parentId": "root", "path": "/", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-ClQasfpK.js?client-route=1", "imports": ["/assets/jsx-runtime-BMrMXMSG.js", "/assets/components-DvzA8iXO.js", "/assets/config-CsqaLvxp.js", "/assets/heading-DIHkTIQH.js", "/assets/section-CEHL8gEU.js", "/assets/image-B2sklpy4.js", "/assets/decoder-text-xXFa128Z.js", "/assets/useScrollToHash-VOAaAgFR.js", "/assets/divider-C2ZAxAst.js", "/assets/useWindowSize-DlOz3mXe.js", "/assets/route-AFDvzX2w.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/section-CUrllC_C.css", "/assets/image-CQFqa4Pm.css", "/assets/decoder-text-CdS84zvp.css", "/assets/divider-CJ0zz9kw.css", "/assets/route-B0j0lWmR.css"] } }, "url": "/assets/manifest-8d62fdee.js", "version": "8d62fdee" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/articles.datahive": {
    id: "routes/articles.datahive",
    parentId: "routes/articles",
    path: "datahive",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/articles.ongoing": {
    id: "routes/articles.ongoing",
    parentId: "routes/articles",
    path: "ongoing",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/articles_._index": {
    id: "routes/articles_._index",
    parentId: "root",
    path: "articles",
    index: true,
    caseSensitive: void 0,
    module: route3
  },
  "routes/api.set-theme": {
    id: "routes/api.set-theme",
    parentId: "root",
    path: "api/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/articles.mlh": {
    id: "routes/articles.mlh",
    parentId: "routes/articles",
    path: "mlh",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/articles": {
    id: "routes/articles",
    parentId: "root",
    path: "articles",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/uses": {
    id: "routes/uses",
    parentId: "root",
    path: "uses",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/home/route": {
    id: "routes/home/route",
    parentId: "root",
    path: "/",
    index: true,
    caseSensitive: void 0,
    module: route11
  }
};
const serverBuild = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assets: serverManifest,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
}, Symbol.toStringTag, { value: "Module" }));
export {
  ModelAnimationType as M,
  Transition as T,
  useInViewport as a,
  useWindowSize as b,
  classes as c,
  cssProps as d,
  mode as e,
  assetsBuildDirectory as f,
  basename as g,
  future as h,
  isSpaMode as i,
  entry as j,
  routes as k,
  media as m,
  numToMs as n,
  publicPath as p,
  resolveSrcFromSrcSet as r,
  serverManifest as s,
  useTheme as u
};
