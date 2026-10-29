import{n as e,o as t}from"./rolldown-runtime-2d059c5e81f4.js";import{Cc as n,bc as r,i,mi as a,rS as o,wc as s,ym as c}from"./app-initial-13f932cb2f13.js";import{t as l}from"./compiler-runtime-2015039f3c68.js";import{n as u,r as d}from"./message-bus-4113ba7287d7.js";import{n as f,t as p}from"./context-menu-135d786f5907.js";import{a as m,s as h}from"./lib-72ce426c00b2.js";import{a as g,r as _}from"./app-scope-2dce3358324c.js";import{n as v}from"./use-host-config-e86732ef3454.js";import{r as y}from"./toast-signal-9ee742aefd5f.js";import{t as b}from"./app-intl-signal-2e5fe62d40b5.js";import{c as x,t as S}from"./route-scope-38f8c9923d9d.js";import{Kh as C,qh as ee}from"./icons-7cdacefd7acc.js";import{n as te,r as w}from"./icon-ae748c1c97ac.js";import{n as T,t as E}from"./use-stable-callback-fea9bf8c6b03.js";import{n as ne,t as D}from"./tooltip-bbc77997508f.js";import{lt as re}from"./parsed-cmd-feb76d34f5a5.js";import{o as O,u as ie}from"./path-9d75f818f99e.js";import{n as k,t as ae}from"./use-platform-4b207ad78d0a.js";import{n as A,t as oe}from"./copy-to-clipboard-b8115137047d.js";import{n as se,r as ce,t as le}from"./use-resolved-theme-variant-831dc58fe351.js";import{n as ue,t as de}from"./open-in-targets-query-7083c377bb09.js";import{a as fe,i as j,n as pe,o as me,s as he,t as ge}from"./iconResolver-c27600649025.js";import{A as M,B as _e,C as N,D as ve,E as ye,F as be,H as P,I as xe,L as Se,M as F,N as Ce,O as we,P as Te,R as I,S as Ee,T as L,U as De,V as Oe,_ as ke,a as Ae,b as je,c as Me,d as R,f as Ne,g as Pe,h as Fe,i as Ie,j as Le,k as Re,l as ze,m as Be,n as Ve,o as z,p as He,r as B,s as Ue,t as We,u as Ge,w as Ke,x as qe,y as Je,z as Ye}from"./builder-f95387984534.js";import{i as Xe,n as Ze,r as Qe}from"./open-target-selection-720e00d46fc8.js";import{s as $e}from"./workspace-file-context-menu-d284a0160553.js";import{i as et,r as tt,t as nt}from"./use-target-apps-4b359460df98.js";var rt,V,H,it,at,ot,st,ct,lt;function ut(){return(ut=e((()=>{rt=`file-tree-container`,V=`data-file-tree-style`,H=`data-file-tree-unsafe-css`,it=`data-file-tree-scrollbar-measure`,at=`data-file-tree-scrollbar-gutter-measured`,ot=`--trees-scrollbar-gutter-measured`,st=`header`,ct=`context-menu`,lt=`context-menu-trigger`})))()}function dt(e,t){if(typeof e==`number`)return{itemHeight:t??ft.default.itemHeight,factor:e};let n=ft[e??`default`];return{itemHeight:t??n.itemHeight,factor:n.factor}}var ft;function pt(){return(pt=e((()=>{ft={compact:{itemHeight:24,factor:.8},default:{itemHeight:30,factor:1},relaxed:{itemHeight:36,factor:1.2}}})))()}var mt;function ht(){return(ht=e((()=>{pt(),mt=ft.default.itemHeight})))()}var gt;function U(){return(U=e((()=>{gt=`@layer base, theme, unsafe;

@layer base {
  :host {
    /*
      CSS variables use a fallback stack to ensure user and theme colors slot
      in with ease. User colors take precedence over theme colors, which take
      precedence over defaults.

      Fallback order:

      1. --trees-*-override (explicit)
      2. --trees-theme-* (e.g. Shiki/VS Code tokens)
      3. defaults

      Theme variable names mirror Shiki/VS Code theme file JSON tokens.

      // Available CSS Color Overrides
      --trees-fg-override
      --trees-fg-muted-override
      --trees-bg-override
      --trees-bg-muted-override
      --trees-accent-override
      --trees-border-color-override

      --trees-focus-ring-color-override
      --trees-focus-ring-width-override
      --trees-focus-ring-offset-override

      --trees-search-fg-override
      --trees-search-font-weight-override
      --trees-search-bg-override

      --trees-selected-fg-override
      --trees-selected-bg-override
      --trees-selected-focused-border-color-override

      // Git Status Color Overrides
      --trees-status-added-override
      --trees-status-ignored-override
      --trees-status-modified-override
      --trees-status-renamed-override
      --trees-status-untracked-override
      --trees-status-deleted-override
      --trees-git-added-color-override
      --trees-git-ignored-color-override
      --trees-git-modified-color-override
      --trees-git-renamed-color-override
      --trees-git-untracked-color-override
      --trees-git-deleted-color-override

      // Built-in File Icon Color Overrides
      --trees-file-icon-color
      --trees-file-icon-color-astro
      --trees-file-icon-color-babel
      --trees-file-icon-color-bash
      --trees-file-icon-color-biome
      --trees-file-icon-color-bootstrap
      --trees-file-icon-color-browserslist
      --trees-file-icon-color-bun
      --trees-file-icon-color-c
      --trees-file-icon-color-cpp
      --trees-file-icon-color-claude
      --trees-file-icon-color-css
      --trees-file-icon-color-database
      --trees-file-icon-color-default
      --trees-file-icon-color-docker
      --trees-file-icon-color-eslint
      --trees-file-icon-color-git
      --trees-file-icon-color-go
      --trees-file-icon-color-graphql
      --trees-file-icon-color-html
      --trees-file-icon-color-image
      --trees-file-icon-color-javascript
      --trees-file-icon-color-json
      --trees-file-icon-color-markdown
      --trees-file-icon-color-mcp
      --trees-file-icon-color-npm
      --trees-file-icon-color-oxc
      --trees-file-icon-color-postcss
      --trees-file-icon-color-prettier
      --trees-file-icon-color-python
      --trees-file-icon-color-react
      --trees-file-icon-color-ruby
      --trees-file-icon-color-rust
      --trees-file-icon-color-sass
      --trees-file-icon-color-svg
      --trees-file-icon-color-svelte
      --trees-file-icon-color-svgo
      --trees-file-icon-color-swift
      --trees-file-icon-color-table
      --trees-file-icon-color-text
      --trees-file-icon-color-tailwind
      --trees-file-icon-color-terraform
      --trees-file-icon-color-typescript
      --trees-file-icon-color-vite
      --trees-file-icon-color-vscode
      --trees-file-icon-color-vue
      --trees-file-icon-color-wasm
      --trees-file-icon-color-webpack
      --trees-file-icon-color-yml
      --trees-file-icon-color-zig
      --trees-file-icon-color-zip

      // Density
      //
      // A unitless scale factor for padding, gaps, and indentation. Usually
      // set via \`density\` on useFileTree. Individual overrides take precedence.
      //
      //   Compact: 0.8
      //   Default: 1
      //   Relaxed: 1.2
      //
      --trees-density-override

      // Available CSS Layout Overrides
      --trees-gap-override
      --trees-border-radius-override
      --trees-font-family-override
      --trees-font-size-override
      --trees-font-weight-regular-override
      --trees-font-weight-semibold-override
      --trees-level-gap-override
      --trees-item-padding-x-override
      --trees-item-margin-x-override
      --trees-item-row-gap-override
      --trees-icon-width-override
      --trees-icon-nudge-override
      --trees-scrollbar-gutter-override
      --trees-padding-inline-override
    */

    --trees-accent: var(--trees-accent-override, #009fff);
    --trees-fg: var(
      --trees-fg-override,
      var(--trees-theme-sidebar-fg, light-dark(#6c6c71, #adadb1))
    );
    --trees-fg-muted: var(
      --trees-fg-muted-override,
      var(--trees-theme-sidebar-header-fg, light-dark(#84848a, #84848a))
    );
    --trees-bg: var(
      --trees-bg-override,
      var(--trees-theme-sidebar-bg, light-dark(#f8f8f8, #141415))
    );
    /* var(--trees-theme-list-hover-bg, light-dark(#dfebff59, #19283c59)) */
    --trees-bg-muted: var(
      --trees-bg-muted-override,
      var(
        --trees-theme-list-hover-bg,
        light-dark(
          color-mix(
            in lab,
            var(--trees-accent) var(--trees-bg-alpha-light, 8%),
            var(--trees-bg)
          ),
          color-mix(
            in lab,
            var(--trees-accent) var(--trees-bg-alpha-dark, 10%),
            var(--trees-bg)
          )
        )
      )
    );
    --trees-input-bg: var(
      --trees-input-bg-override,
      light-dark(#f8f8f8, #070707)
    );

    --trees-added-light: #16a994;
    --trees-added-dark: #00cab1;
    --trees-ignored-light: #adadb1;
    --trees-ignored-dark: #4a4a4e;
    --trees-modified-light: #1ca1c7;
    --trees-modified-dark: #08c0ef;
    --trees-renamed-light: #d5a910;
    --trees-renamed-dark: #ffd452;
    --trees-untracked-light: #16a994;
    --trees-untracked-dark: #00cab1;
    --trees-deleted-light: #ff2e3f;
    --trees-deleted-dark: #ff6762;

    --trees-border-color: var(
      --trees-border-color-override,
      var(--trees-theme-sidebar-border, light-dark(#eeeeef, #070707))
    );
    --trees-indent-guide-bg: var(
      --trees-indent-guide-bg-override,
      color-mix(in lab, var(--trees-fg-muted) 25%, transparent)
    );
    --trees-density: var(--trees-density-override, 1);
    --trees-border-radius: var(
      --trees-border-radius-override,
      calc(6px * var(--trees-density))
    );

    --trees-font-family: var(--trees-font-family-override, system-ui);
    --trees-font-size: var(--trees-font-size-override, 13px);
    --trees-font-weight-regular: var(--trees-font-weight-regular-override, 400);
    --trees-font-weight-semibold: var(
      --trees-font-weight-semibold-override,
      600
    );

    --trees-focus-ring-color: var(
      --trees-focus-ring-color-override,
      var(--trees-theme-focus-ring, var(--trees-accent))
    );
    --trees-focus-ring-width: var(--trees-focus-ring-width-override, 1px);
    --trees-focus-ring-offset: var(--trees-focus-ring-offset-override, -1px);

    --trees-search-fg: var(
      --trees-search-fg-override,
      var(--trees-theme-input-fg, var(--trees-fg))
    );
    --trees-search-font-weight: var(--trees-search-font-weight-override, 600);
    --trees-search-bg: var(
      --trees-search-bg-override,
      var(--trees-theme-input-bg, var(--trees-input-bg))
    );

    --trees-scrollbar-thumb: var(
      --trees-scrollbar-thumb-override,
      var(
        --trees-theme-scrollbar-thumb,
        color-mix(in lab, var(--trees-fg) 25%, var(--trees-bg))
      )
    );

    --trees-selected-fg: var(
      --trees-selected-fg-override,
      var(--trees-theme-list-active-selection-fg, var(--trees-fg))
    );
    --trees-selected-bg: var(
      --trees-selected-bg-override,
      var(
        --trees-theme-list-active-selection-bg,
        light-dark(
          color-mix(in lab, var(--trees-accent) 12%, var(--trees-bg)),
          color-mix(in lab, var(--trees-accent) 15%, var(--trees-bg))
        )
      )
    );
    --trees-selected-focused-border-color: var(
      --trees-selected-focused-border-color-override,
      var(--trees-theme-focus-ring, var(--trees-accent))
    );

    /* Git status (e.g. from Shiki theme gitDecoration.*) */
    --trees-status-added: var(
      --trees-status-added-override,
      var(
        --trees-theme-git-added-fg,
        light-dark(var(--trees-added-light), var(--trees-added-dark))
      )
    );
    --trees-status-ignored: var(
      --trees-status-ignored-override,
      var(
        --trees-theme-git-ignored-fg,
        light-dark(var(--trees-ignored-light), var(--trees-ignored-dark))
      )
    );
    --trees-status-modified: var(
      --trees-status-modified-override,
      var(
        --trees-theme-git-modified-fg,
        light-dark(var(--trees-modified-light), var(--trees-modified-dark))
      )
    );
    --trees-status-renamed: var(
      --trees-status-renamed-override,
      var(
        --trees-theme-git-renamed-fg,
        light-dark(var(--trees-renamed-light), var(--trees-renamed-dark))
      )
    );
    --trees-status-untracked: var(
      --trees-status-untracked-override,
      var(
        --trees-theme-git-untracked-fg,
        light-dark(var(--trees-untracked-light), var(--trees-untracked-dark))
      )
    );
    --trees-status-deleted: var(
      --trees-status-deleted-override,
      var(
        --trees-theme-git-deleted-fg,
        light-dark(var(--trees-deleted-light), var(--trees-deleted-dark))
      )
    );
    --trees-git-modified-color: var(
      --trees-git-modified-color-override,
      var(--trees-status-modified)
    );
    --trees-git-added-color: var(
      --trees-git-added-color-override,
      var(--trees-status-added)
    );
    --trees-git-ignored-color: var(
      --trees-git-ignored-color-override,
      var(--trees-status-ignored)
    );
    --trees-git-deleted-color: var(
      --trees-git-deleted-color-override,
      var(--trees-status-deleted)
    );
    --trees-git-renamed-color: var(
      --trees-git-renamed-color-override,
      var(--trees-status-renamed)
    );
    --trees-git-untracked-color: var(
      --trees-git-untracked-color-override,
      var(--trees-status-untracked)
    );

    --trees-icon-gray: light-dark(#84848a, #adadb1);
    --trees-icon-red: light-dark(#d52c36, #ff6762);
    --trees-icon-vermilion: light-dark(#ff8c5b, #d5512f);
    --trees-icon-orange: light-dark(#d47628, #ffa359);
    --trees-icon-yellow: light-dark(#d5a910, #ffd452);
    --trees-icon-green: light-dark(#199f43, #5ecc71);
    --trees-icon-teal: light-dark(#17a5af, #64d1db);
    --trees-icon-cyan: light-dark(#1ca1c7, #68cdf2);
    --trees-icon-blue: light-dark(#1a85d4, #69b1ff);
    --trees-icon-indigo: light-dark(#693acf, #9d6afb);
    --trees-icon-purple: light-dark(#a631be, #d568ea);
    --trees-icon-pink: light-dark(#d32a61, #ff678d);
    --trees-icon-mauve: light-dark(#594c5b, #79697b);

    --trees-file-icon-color-default: var(
      --trees-file-icon-color,
      var(--trees-icon-gray)
    );
    --trees-file-icon-color-astro: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-babel: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-bash: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-biome: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-bootstrap: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-browserslist: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-bun: var(
      --trees-file-icon-color,
      var(--trees-icon-mauve)
    );
    --trees-file-icon-color-c: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-cpp: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-claude: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-css: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-database: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-docker: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-eslint: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-git: var(
      --trees-file-icon-vermilion,
      var(--trees-icon-vermilion)
    );
    --trees-file-icon-color-go: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-graphql: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-html: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-image: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-javascript: var(
      --trees-file-icon-color,
      var(--trees-icon-yellow)
    );
    --trees-file-icon-color-json: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-markdown: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-mcp: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-npm: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-oxc: var(
      --trees-file-icon-cyan,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-postcss: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-prettier: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-python: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-react: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-ruby: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-rust: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-sass: var(
      --trees-file-icon-color,
      var(--trees-icon-pink)
    );
    --trees-file-icon-color-svg: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-svelte: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-svgo: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-swift: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-table: var(
      --trees-file-icon-color,
      var(--trees-icon-teal)
    );
    --trees-file-icon-color-text: var(
      --trees-file-icon-color,
      var(--trees-icon-gray)
    );
    --trees-file-icon-color-tailwind: var(
      --trees-file-icon-color,
      var(--trees-icon-cyan)
    );
    --trees-file-icon-color-terraform: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-typescript: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-vite: var(
      --trees-file-icon-color,
      var(--trees-icon-purple)
    );
    --trees-file-icon-color-vscode: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-vue: var(
      --trees-file-icon-color,
      var(--trees-icon-green)
    );
    --trees-file-icon-color-wasm: var(
      --trees-file-icon-color,
      var(--trees-icon-indigo)
    );
    --trees-file-icon-color-webpack: var(
      --trees-file-icon-color,
      var(--trees-icon-blue)
    );
    --trees-file-icon-color-yml: var(
      --trees-file-icon-color,
      var(--trees-icon-red)
    );
    --trees-file-icon-color-zig: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );
    --trees-file-icon-color-zip: var(
      --trees-file-icon-color,
      var(--trees-icon-orange)
    );

    --trees-level-gap: var(
      --trees-level-gap-override,
      calc(8px * var(--trees-density))
    );
    --trees-item-padding-x: var(
      --trees-item-padding-x-override,
      calc(8px * var(--trees-density))
    );
    --trees-item-margin-x: var(
      --trees-item-margin-x-override,
      calc(2px * var(--trees-density))
    );
    --trees-item-row-gap: var(
      --trees-item-row-gap-override,
      calc(6px * var(--trees-density))
    );
    --trees-icon-width: var(--trees-icon-width-override, 16px);
    --trees-icon-nudge: var(
      --trees-icon-nudge-override,
      calc(1px * var(--trees-density))
    );
    --trees-row-height: var(--trees-item-height, 30px);
    --trees-git-lane-width: var(--trees-git-lane-width-override, 12px);
    --trees-action-lane-width: var(
      --trees-action-lane-width-override,
      calc(var(--trees-icon-width) + 2px)
    );
    /* Keep the floating trigger aligned with the row's action lane. Going in
       from the root's right edge: the scroll container reserves
       \`--trees-padding-inline\` of effective inset on each side (its asymmetric
       padding formula cancels the scrollbar gutter on the right), the row
       sits inside that inset, and its trailing \`--trees-item-padding-x\` is the
       action lane itself. The trigger's own focus-ring margin then trims one
       pixel back so the button's visible right edge lines up with the lane. */
    --trees-context-menu-trigger-inline-offset: calc(
      var(--trees-padding-inline) + var(--trees-item-padding-x) -
        var(--trees-focus-ring-width)
    );

    --trees-scrollbar-gutter: var(--trees-scrollbar-gutter-override, 6px);
    --trees-padding-inline: var(--trees-padding-inline-override, 16px);

    color-scheme: light dark;
    display: flex;
    flex-direction: column;
    font-size: var(--trees-font-size);
    color: var(--trees-fg);
    background-color: var(--trees-bg);
    --truncate-marker-background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
    font-family: var(--trees-font-family);
    font-weight: var(--trees-font-weight-regular);
  }

  :host([data-file-tree-virtualized='true']) {
    height: 100%;
    overflow: hidden;
  }

  [data-file-tree-virtualized-wrapper='true'] {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  [data-file-tree-virtualized-root='true'] {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  [data-file-tree-virtualized-scroll='true'],
  [data-file-tree-scrollbar-measure='true'] {
    --trees-scrollbar-thumb-current: transparent;
    overflow-y: auto;
    scrollbar-gutter: stable;

    &:hover {
      --trees-scrollbar-thumb-current: var(--trees-scrollbar-thumb);
    }

    &::-webkit-scrollbar {
      width: var(--trees-scrollbar-gutter);
      height: var(--trees-scrollbar-gutter);
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--trees-scrollbar-thumb-current);
      border: 1px solid transparent;
      background-clip: content-box;
      border-radius: calc(var(--trees-scrollbar-gutter) / 2);
    }

    &::-webkit-scrollbar-corner {
      background-color: transparent;
    }
  }

  /* These are styles for a temporarily generated element to measure the size
   * of the scrollbar.  It's intended to be somewhat similar in scrollbar style
   * scope to the scrollable tree so \`--trees-scrollbar-gutter-measured\` is an
   * accurate reflection of the size the scrollbar gutter takes up. */
  [data-file-tree-scrollbar-measure='true'] {
    position: absolute;
    top: 0;
    left: 0;
    visibility: hidden;
    pointer-events: none;
    width: 100px;
    height: 100px;
  }

  @supports (-moz-appearance: none) {
    [data-file-tree-virtualized-scroll='true'],
    [data-file-tree-scrollbar-measure='true'] {
      scrollbar-width: thin;
      scrollbar-color: var(--trees-scrollbar-thumb-current) transparent;
    }
  }

  [data-file-tree-virtualized-scroll='true'] {
    position: relative;
    overflow-y: auto;
    flex: 1 1 0;
    min-height: 0;
    padding-inline: max(
        calc(var(--trees-padding-inline) - var(--trees-item-margin-x)),
        0px
      )
      /* NOTE(amadeus): We can assume that all Webkit based browser gutters
       * will align to the value of '--trees-scrollbar-gutter', however if not, then
       * \`--trees-scrollbar-gutter-measured\` should correct it. Mostly we are
       * hoping to avoid SSR alignment jumps if possible. In non-SSR'd environments
       * \`--trees-scrollbar-gutter-measured\` should always be immediately available.
       */
      max(
        calc(
          var(--trees-padding-inline) - var(--trees-item-margin-x) -
            var(
              --trees-scrollbar-gutter-measured,
              var(--trees-scrollbar-gutter)
            )
        ),
        0px
      );
  }

  @supports (-moz-appearance: none) {
    [data-file-tree-virtualized-scroll='true'] {
      padding-inline: max(
          calc(var(--trees-padding-inline) - var(--trees-item-margin-x)),
          0px
        )
        /* NOTE(amadeus): However on Firefox it can vary a little bit, but most
         * likely the majority of cases will default to a 0px width scrollbar lets
         * inherit that first to avoid SSR jumps. In non-SSR'd environments
         * \`--trees-scrollbar-gutter-measured\` should always be immediately available.
         */
        max(
          calc(
            var(--trees-padding-inline) - var(--trees-item-margin-x) -
              var(--trees-scrollbar-gutter-measured, 0px)
          ),
          0px
        );
    }
  }

  [data-file-tree-sticky-overlay='true'] {
    position: sticky;
    top: 0;
    height: 0;
    z-index: 4;
    overflow: visible;
    pointer-events: none;
  }

  /* The overlay DOM is kept populated even at scrollTop=0 so the browser has
   * the rendered rows on hand the moment scrolling begins — otherwise the
   * compositor paints a scrolled frame before React can mount the overlay,
   * and the topmost sticky folder jumps up by a couple of pixels before it
   * "snaps" into its pinned position. We hide it via CSS whenever the scroll
   * is at the top and no scroll is in progress, so the preview doesn't leak
   * through at rest. \`data-overlay-reveal\` is stamped on the root only when
   * the user initiates a scroll while already at the top — exactly the case
   * where we need the pre-mounted overlay to be visible through the first
   * compositor frame. It is deliberately distinct from the general
   * \`data-is-scrolling\` flag so a scroll that ends at the top (e.g. ArrowUp
   * navigation) re-hides the overlay the instant the scroll lands, rather
   * than waiting for the hover-suppression timer to elapse. */
  [data-file-tree-virtualized-root='true'][data-scroll-at-top='true']:not(
      [data-overlay-reveal]
    )
    [data-file-tree-sticky-overlay='true'] {
    visibility: hidden;
  }

  [data-file-tree-sticky-overlay-content='true'] {
    background-color: var(--trees-bg);
    position: relative;
    pointer-events: none;
  }

  [data-file-tree-virtualized-list='true'] {
    background-color: var(--trees-bg);
    position: relative;
    min-height: 100%;
    width: 100%;
    overflow-anchor: none;

    &[data-is-scrolling] {
      pointer-events: none;
    }
  }

  [data-file-tree-virtualized-sticky-offset='true'] {
    contain: layout size;
  }

  [data-file-tree-virtualized-sticky='true'] {
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    isolation: isolate;
    /* Promote to its own compositor layer so text inside the window is
     * rasterized once and GPU-translated during scroll. Without this, the
     * browser re-paints the window (and its text) at every scroll frame,
     * which produces visible 1px shake / character tearing. */
    will-change: transform;
  }

  [data-file-tree-search-container] {
    display: flex;
    padding: 0;
    padding-inline: var(--trees-padding-inline);
    margin-bottom: var(--trees-item-row-gap);
  }

  [data-file-tree-search-input] {
    --trees-focus-ring-width: 2px;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    flex: 1;
    height: var(--trees-row-height);
    /* 1px breathing room so the focus-visible outline isn't clipped when the
     * input sits flush against the top of the scroll container. */
    margin-block: 1px;
    padding-inline: var(--trees-item-padding-x);
    line-height: var(--trees-row-height);
    color: var(--trees-search-fg);
    background-color: var(--trees-search-bg);
    border: 1px solid var(--trees-border-color);
    border-radius: var(--trees-border-radius);
    outline: none;

    &::placeholder {
      color: color-mix(
        in lab,
        var(--trees-search-fg) 65%,
        var(--trees-search-bg)
      );
    }

    &:focus-visible,
    &[data-file-tree-search-input-fake-focus='true'] {
      outline: var(--trees-focus-ring-width) solid var(--trees-focus-ring-color);
      outline-offset: var(--trees-focus-ring-offset);
    }
  }

  /* The wrapper for the tree items */
  [role='tree'] {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: var(--trees-gap-override, 0);
  }

  /* LIST ITEM */
  [data-type='item'] {
    color: inherit;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    text-align: start;
    outline: none;
    background-color: var(--trees-bg);
    border: none;
    position: relative;

    padding: 0 var(--trees-item-padding-x);
    margin: 0 var(--trees-item-margin-x);
    cursor: pointer;
    -webkit-user-select: none;
            user-select: none;
    -webkit-touch-callout: none;
    touch-action: manipulation;
    display: flex;
    flex: 0 0 var(--trees-row-height);
    align-items: center;
    height: var(--trees-row-height);
    line-height: var(--trees-row-height);
    gap: var(--trees-item-row-gap);
    border-radius: var(--trees-border-radius);
    /* Row states may be translucent, so markers paint the tree background first
     * and then the state color on top to avoid compositing the same alpha twice. */
    --truncate-marker-background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
    --truncate-marker-block-inset: 0px;

    &:hover,
    &[data-item-context-hover='true'] {
      background-color: var(--trees-bg-muted);
      --truncate-marker-background-overlay-color: var(--trees-bg-muted);
    }

    &[data-item-focused='true'],
    &:focus-visible {
      z-index: 2;

      /* Flattened segment markers sit high enough to cover the row outline unless
       * their painted background is inset by the focus ring width. */
      [data-item-flattened-subitems] {
        --truncate-marker-block-inset: var(--trees-focus-ring-width);
      }

      &::before {
        position: absolute;
        inset: 0;
        content: '';
        display: block;
        border-radius: var(--trees-border-radius);
        outline: var(--trees-focus-ring-width) solid
          var(--trees-focus-ring-color);
        outline-offset: var(--trees-focus-ring-offset);
        pointer-events: none;
      }

      &[data-item-selected='true']::before {
        outline-color: var(--trees-selected-focused-border-color);
      }
    }

    &[data-item-selected='true'] {
      color: var(--trees-selected-fg);
      background-color: var(--trees-selected-bg);
      --truncate-marker-background-overlay-color: var(--trees-selected-bg);
      z-index: 3;

      [data-item-section='icon'] {
        color: var(--trees-selected-fg);
      }
    }

    &[data-item-search-match='true'] {
      font-weight: var(--trees-search-font-weight);
    }
  }

  [data-type='item'][data-file-tree-sticky-row='true'] {
    pointer-events: auto;
  }

  /* Sticky rows opt back into pointer events because the overlay wrapper is
   * inert. During scroll, put them back under the same hover suppression as
   * the virtualized list so translucent hover states and menu triggers do not
   * paint over rows moving beneath the sticky stack. */
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true'] {
    pointer-events: none;
  }

  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true']:hover:not(
      [data-item-selected='true']
    ),
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='item'][data-file-tree-sticky-row='true'][data-item-context-hover='true']:not(
      [data-item-selected='true']
    ) {
    background-color: var(--trees-bg);
    --truncate-marker-background-overlay-color: transparent;
  }

  [data-item-selected='true']:has(+ [data-item-selected='true']) {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  [data-item-selected='true'] + [data-item-selected='true'] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  /* Flattened Directory Parts */
  [data-item-flattened-subitems] {
    display: inline-flex;
    align-items: center;
    gap: 2px;
  }
  [data-item-flattened-subitem]:hover,
  [data-item-flattened-subitem-drag-target='true'] {
    text-decoration: underline;
  }

  /* Icon for each item */
  [data-item-section='icon'] {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--trees-fg-muted);
    fill: currentColor;
    width: var(--trees-icon-width);
  }

  :where([data-item-section='icon'] > [data-icon-token]) {
    color: var(--trees-fg-muted);
  }

  [data-file-tree-colored-icons='true'] {
    [data-icon-token='astro'] {
      color: var(--trees-file-icon-color-astro);
    }
    [data-icon-token='babel'] {
      color: var(--trees-file-icon-color-babel);
    }
    [data-icon-token='bash'] {
      color: var(--trees-file-icon-color-bash);
    }
    [data-icon-token='biome'] {
      color: var(--trees-file-icon-color-biome);
    }
    [data-icon-token='bootstrap'] {
      color: var(--trees-file-icon-color-bootstrap);
    }
    [data-icon-token='browserslist'] {
      color: var(--trees-file-icon-color-browserslist);
    }
    [data-icon-token='bun'] {
      color: var(--trees-file-icon-color-bun);
    }
    [data-icon-token='c'] {
      color: var(--trees-file-icon-color-c);
    }
    [data-icon-token='cpp'] {
      color: var(--trees-file-icon-color-cpp);
    }
    [data-icon-token='claude'] {
      color: var(--trees-file-icon-color-claude);
    }
    [data-icon-token='css'] {
      color: var(--trees-file-icon-color-css);
    }
    [data-icon-token='database'] {
      color: var(--trees-file-icon-color-database);
    }
    [data-icon-token='default'] {
      color: var(--trees-file-icon-color-default);
    }
    [data-icon-token='docker'] {
      color: var(--trees-file-icon-color-docker);
    }
    [data-icon-token='eslint'] {
      color: var(--trees-file-icon-color-eslint);
    }
    [data-icon-token='git'] {
      color: var(--trees-file-icon-color-git);
    }
    [data-icon-token='go'] {
      color: var(--trees-file-icon-color-go);
    }
    [data-icon-token='graphql'] {
      color: var(--trees-file-icon-color-graphql);
    }
    [data-icon-token='html'] {
      color: var(--trees-file-icon-color-html);
    }
    [data-icon-token='image'] {
      color: var(--trees-file-icon-color-image);
    }
    [data-icon-token='javascript'] {
      color: var(--trees-file-icon-color-javascript);
    }
    [data-icon-token='json'] {
      color: var(--trees-file-icon-color-json);
    }
    [data-icon-token='markdown'] {
      color: var(--trees-file-icon-color-markdown);
    }
    [data-icon-token='mcp'] {
      color: var(--trees-file-icon-color-mcp);
    }
    [data-icon-token='npm'] {
      color: var(--trees-file-icon-color-npm);
    }
    [data-icon-token='oxc'] {
      color: var(--trees-file-icon-color-oxc);
    }
    [data-icon-token='postcss'] {
      color: var(--trees-file-icon-color-postcss);
    }
    [data-icon-token='prettier'] {
      color: var(--trees-file-icon-color-prettier);
    }
    [data-icon-token='python'] {
      color: var(--trees-file-icon-color-python);
    }
    [data-icon-token='react'] {
      color: var(--trees-file-icon-color-react);
    }
    [data-icon-token='ruby'] {
      color: var(--trees-file-icon-color-ruby);
    }
    [data-icon-token='rust'] {
      color: var(--trees-file-icon-color-rust);
    }
    [data-icon-token='sass'] {
      color: var(--trees-file-icon-color-sass);
    }
    [data-icon-token='svg'] {
      color: var(--trees-file-icon-color-svg);
    }
    [data-icon-token='svelte'] {
      color: var(--trees-file-icon-color-svelte);
    }
    [data-icon-token='svgo'] {
      color: var(--trees-file-icon-color-svgo);
    }
    [data-icon-token='swift'] {
      color: var(--trees-file-icon-color-swift);
    }
    [data-icon-token='table'] {
      color: var(--trees-file-icon-color-table);
    }
    [data-icon-token='text'] {
      color: var(--trees-file-icon-color-text);
    }
    [data-icon-token='tailwind'] {
      color: var(--trees-file-icon-color-tailwind);
    }
    [data-icon-token='terraform'] {
      color: var(--trees-file-icon-color-terraform);
    }
    [data-icon-token='typescript'] {
      color: var(--trees-file-icon-color-typescript);
    }
    [data-icon-token='vite'] {
      color: var(--trees-file-icon-color-vite);
    }
    [data-icon-token='vscode'] {
      color: var(--trees-file-icon-color-vscode);
    }
    [data-icon-token='vue'] {
      color: var(--trees-file-icon-color-vue);
    }
    [data-icon-token='wasm'] {
      color: var(--trees-file-icon-color-wasm);
    }
    [data-icon-token='webpack'] {
      color: var(--trees-file-icon-color-webpack);
    }
    [data-icon-token='yml'] {
      color: var(--trees-file-icon-color-yml);
    }
    [data-icon-token='zig'] {
      color: var(--trees-file-icon-color-zig);
    }
    [data-icon-token='zip'] {
      color: var(--trees-file-icon-color-zip);
    }
  }

  /* Chevron rotation and visual alignment */
  /* Chevron pointing down */
  [data-icon-name='file-tree-icon-chevron'] {
    &[data-align-capitals='false'] {
      transform: translate(0, var(--trees-icon-nudge));
    }
    &[data-align-capitals='true'] {
      transform: translate(0, 0);
    }
  }

  [data-item-section='content'] {
    flex: 0 1 auto;
    text-align: start;
    min-width: 0;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    /* Breaks middle truncate component to also set this */
    /* white-space: nowrap; */
  }

  [data-item-section='decoration'] {
    flex: 1 1 0;
    min-width: 0;
    display: flex;
    justify-content: flex-end;
    text-align: end;
    overflow: hidden;
    color: var(--trees-fg-muted);
  }

  [data-item-section='decoration'] > span {
    min-width: 0;
    max-width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  [data-item-section='git'],
  [data-item-section='action'] {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  [data-item-section='git'] {
    width: var(--trees-git-lane-width);
  }

  [data-item-section='action'] {
    width: var(--trees-action-lane-width);
    color: var(--trees-fg-muted);
    fill: currentColor;
    pointer-events: none;
  }

  [data-item-section='git'] > span,
  [data-item-section='action'] > span {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  [data-item-action-affordance='decorative'] {
    opacity: 0.85;
  }

  [data-item-rename-input] {
    appearance: none;
    width: 100%;
    min-width: 0;
    height: calc(var(--trees-row-height) - 4px);
    font-family: inherit;
    font-size: inherit;
    /* line-height: calc(var(--trees-row-height) - 8px); */
    color: inherit;
    background-color: transparent;
    border: 0;
    padding-inline: 6px;
    outline: none;
    box-sizing: border-box;
  }

  [data-item-section='content']:has([data-item-rename-input])
    ~ [data-item-section='action'],
  [data-item-section='content']:has([data-item-rename-input])
    ~ [data-item-section='decoration'] {
    display: none;
  }

  /* Chevron pointing right */
  [aria-expanded='false'][data-item-type='folder']
    > [data-item-section='icon']
    > [data-icon-name='file-tree-icon-chevron'] {
    &[data-align-capitals='true'] {
      transform: rotate(-90deg)
        translate(
          calc(var(--trees-icon-nudge) / 2),
          calc(var(--trees-icon-nudge) / 2)
        );
    }
    &[data-align-capitals='false'] {
      transform: rotate(-90deg)
        translate(
          calc(var(--trees-icon-nudge) / 2 * -1),
          calc(var(--trees-icon-nudge) / 2)
        );
    }
  }

  /* LIST IDENTATION */
  /* Spacing container */
  [data-item-section='spacing'] {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: var(--trees-row-height);
    padding-left: calc(calc(var(--trees-icon-width) / 2) - 0.5px);

    &:empty {
      padding-left: 0;
    }
  }

  /* Spacing per level */
  [data-item-section='spacing-item'] {
    transform: translateX(-0.25px);
    display: inline-block;
    border-left: 1px solid var(--trees-indent-guide-bg);
    height: 100%;
    margin-right: calc(var(--trees-level-gap) - 1px);
    opacity: 0;
    transition: opacity 150ms ease;

    & + & {
      margin-left: calc(
        var(--trees-item-row-gap) + calc(var(--trees-icon-width) / 2) - 0.5px
      );
    }
  }

  :host(:hover) [data-item-section='spacing-item'] {
    opacity: 0.75;
  }

  /* Git status indicator */

  /* This is a folder that contains a git change */
  [data-item-contains-git-change='true'] > [data-item-section='git'] {
    color: var(--trees-git-modified-color);
    opacity: 0.5;
    fill: currentColor;
  }

  /* These are files that have a git change */
  [data-item-git-status] {
    &
      > :where([data-item-section='icon'])
      > :where(:not([data-icon-name='file-tree-icon-chevron'])) {
      color: var(--trees-item-git-status-color);
    }
    & > [data-item-section='content'] {
      color: var(--trees-item-git-status-color);
    }
    & > [data-item-section='git'] {
      color: var(--trees-item-git-status-color);
      font-weight: var(--trees-font-weight-semibold);
    }
  }

  [data-item-git-status='added'] {
    --trees-item-git-status-color: var(--trees-git-added-color);
  }

  [data-item-git-status='deleted'] {
    --trees-item-git-status-color: var(--trees-git-deleted-color);
  }

  [data-item-git-status='ignored'] {
    --trees-item-git-status-color: var(--trees-git-ignored-color);

    & > [data-item-section='icon'] {
      opacity: 0.5;
    }
  }

  [data-item-section='git'] [data-icon-name='file-tree-icon-dot'] {
    /* this is a nudge to align the dot with the likely lowercase text. it's slightly
    generalizable, but other fonts are gonna need other nudges i assume */
    transform: translateY(calc(0.65ex - 50%));
  }

  [data-item-git-status='modified'] {
    --trees-item-git-status-color: var(--trees-git-modified-color);
  }

  [data-item-git-status='renamed'] {
    --trees-item-git-status-color: var(--trees-git-renamed-color);
  }

  [data-item-git-status='untracked'] {
    --trees-item-git-status-color: var(--trees-git-untracked-color);
  }

  /* Drag and drop */
  [data-item-drag-target='true'] {
    background-color: var(--trees-selected-bg);
  }

  [data-item-dragging='true'] {
    opacity: 0.5;
  }

  /* Lock icon for locked paths (sibling of content) */
  [data-item-section='lock'] {
    flex: 0 0 auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    color: var(--trees-fg-muted);
  }
  [data-item-section='lock'] svg {
    display: block;
  }

  [data-type='header-slot'] {
    display: block;
    flex: 0 0 auto;
  }

  [data-type='context-menu-wash'] {
    position: absolute;
    inset: 0;
    z-index: 3;
    background-color: transparent;
    touch-action: none;
  }

  [data-type='context-menu-anchor'] {
    position: absolute;
    top: 0;
    right: var(--trees-context-menu-trigger-inline-offset);
    z-index: 4;
    display: none;
    align-items: center;

    &[data-visible='true'] {
      display: flex;
    }
  }

  /* Hide the floating trigger while the scroll container is actively moving.
   * The anchor is positioned against the root, not the scroll content, so its
   * \`top\` follows the row via a React state update — one frame behind the
   * compositor. That delay is visible as the trigger hovering over the wrong
   * row during the first frame of a scroll. The \`data-is-scrolling\` flag on
   * the root is flipped synchronously on \`wheel\`/\`touchmove\`/\`keydown\` before
   * the compositor commits the next paint, so this selector hides the anchor
   * in the same frame the scroll begins. */
  [data-file-tree-virtualized-root='true'][data-is-scrolling]
    [data-type='context-menu-anchor'] {
    display: none;
  }

  [data-type='context-menu-anchor'] > slot[name='context-menu'] {
    display: block;
    width: 0;
    min-width: 0;
    flex: 0 0 0;
    overflow: visible;
  }

  /* Single floating context menu trigger */
  [data-type='context-menu-trigger'] {
    all: unset;
    align-items: center;
    justify-content: center;
    width: var(--trees-action-lane-width);
    color: var(--trees-fg-muted);
    fill: currentColor;
    cursor: pointer;
    font-family: var(--trees-font-family);
    font-size: var(--trees-font-size);
    border-top-right-radius: var(--trees-border-radius);
    border-bottom-right-radius: var(--trees-border-radius);
    margin: var(--trees-focus-ring-width);
    height: calc(var(--trees-row-height) - var(--trees-focus-ring-width) * 2);
    border-width: 0;
    transition: color 120ms ease;

    display: flex;
  }

  [data-type='context-menu-trigger']:hover,
  [data-type='context-menu-trigger'][aria-expanded='true'] {
    color: var(--trees-fg);
  }

  /** @pierre/truncate css here, manually copy pasted for now */
  [data-truncate-container] {
    /* CUSTOM TO TREES, TO SUPPORT THE OUTLINE */
    margin-top: -1px;
    margin-bottom: -1px;

    /* Width of the fade from default marker to text */
    --truncate-internal-marker-fade-width: var(
      --truncate-marker-fade-width,
      2px
    );
    /* Width of the solid color between the fade from the default marker to the text */
    --truncate-internal-marker-gap: var(--truncate-marker-gap, 0px);
    /* Opacity of the marker 'color' property, not of the element itself */
    --truncate-internal-marker-opacity: var(--truncate-marker-opacity, 50%);
    /* Opacity of the marker 'color' property specifically for the middle truncate, not opacity of the element itself */
    --truncate-internal-middle-marker-opacity: var(
      --truncate-middle-marker-opacity,
      80%
    );
    /* Background color of the default marker */
    --truncate-internal-marker-background-color: var(
      --truncate-marker-background-color,
      light-dark(white, black)
    );
    --truncate-internal-marker-background-overlay-color: var(
      --truncate-marker-background-overlay-color,
      transparent
    );
    --truncate-internal-marker-block-inset: var(
      --truncate-marker-block-inset,
      0px
    );
    /* Duration of the fade out animation for the marker */
    --truncate-internal-marker-fade-out-duration: var(
      --truncate-marker-fade-out-duration,
      0ms
    );
    /* Duration of the fade in animation for the marker */
    --truncate-internal-marker-fade-in-duration: var(
      --truncate-marker-fade-in-duration,
      100ms
    );

    /* FADE Variant specifics */
    --truncate-internal-fade-marker-color: var(
      --truncate-fade-marker-color,
      #000
    );
    --truncate-internal-fade-marker-width: var(
      --truncate-fade-marker-width,
      0.2lh
    );

    /*
    In some special cases people might be adding spacing in other ways
    that would benefit from being able to override this, however the container
    query below can't use this and would need to be redeclared with the overridden
    value. It's a bad time, but better than nothing.
    */
    --truncate-internal-single-line-height: 1lh;

    height: var(--truncate-internal-single-line-height);
    min-width: 0;
    overflow: hidden;
  }

  [data-truncate-marker] {
    display: flex;
    position: absolute;
    height: var(--truncate-internal-single-line-height);
    padding-block: var(--truncate-internal-marker-block-inset);
    box-sizing: border-box;
    align-items: center;
    background-clip: content-box;
    z-index: 2;
    color: color-mix(
      in srgb,
      currentColor var(--truncate-internal-marker-opacity),
      transparent
    );

    /* Core trick for hiding the marker until overflow occurs */
    opacity: 0;
    transition: opacity var(--truncate-internal-marker-fade-out-duration)
      ease-in-out;
  }

  @container measure (height > 1lh) {
    [data-truncate-marker] {
      opacity: 1;
      transition: opacity var(--truncate-internal-marker-fade-in-duration)
        ease-in-out;
    }
  }

  [data-truncate-grid] {
    display: grid;
    position: relative;
  }

  [data-truncate-content='visible'] {
    white-space: nowrap;
  }

  [data-truncate-content='overflow'] {
    opacity: 0;
    pointer-events: none;
    -webkit-user-select: none;
            user-select: none;
    word-break: break-all;
    margin-top: calc(-1 * var(--truncate-internal-single-line-height));
  }

  [data-truncate-marker-cell] {
    container: measure / size;
    overflow: visible;
    -webkit-user-select: none;
            user-select: none;
    pointer-events: none;
  }

  [data-truncate-container='truncate'] {
    & [data-truncate-grid] {
      grid-template-columns: minmax(0, max-content) 0;
    }
    & [data-truncate-marker] {
      right: 0;
    }
    & [data-truncate-fade] {
      margin-right: calc(-2 * var(--truncate-internal-fade-marker-width));
    }
  }

  [data-truncate-container='fruncate'] {
    & [data-truncate-grid] {
      grid-template-columns: 0 minmax(0, max-content) auto;
    }
    & [data-truncate-content] {
      direction: rtl;
    }
    & [data-truncate-content] > span {
      unicode-bidi: plaintext;
    }
    & [data-truncate-fade] {
      margin-left: calc(-2 * var(--truncate-internal-fade-marker-width));
    }
  }

  [data-truncate-variant='default'] {
    & [data-truncate-marker] {
      background-color: var(--truncate-internal-marker-background-color);
      background-image: linear-gradient(
        var(--truncate-internal-marker-background-overlay-color),
        var(--truncate-internal-marker-background-overlay-color)
      );
    }
    & [data-truncate-marker]::after,
    & [data-truncate-marker]::before {
      content: '';
      position: absolute;
      width: calc(
        var(--truncate-internal-marker-fade-width) +
          var(--truncate-internal-marker-gap)
      );
      inset-block-start: var(--truncate-internal-marker-block-inset);
      height: max(
        0px,
        calc(
          var(--truncate-internal-single-line-height) -
            var(--truncate-internal-marker-block-inset) * 2
        )
      );
      background-color: var(--truncate-internal-marker-background-color);
      background-image: linear-gradient(
        var(--truncate-internal-marker-background-overlay-color),
        var(--truncate-internal-marker-background-overlay-color)
      );
      mask-image: linear-gradient(
        var(--truncate-internal-fade-dir),
        #000 0%,
        #000 var(--truncate-internal-marker-gap),
        transparent 100%
      );
    }
    & [data-truncate-marker]::after {
      --truncate-internal-fade-dir: to right;
      right: calc(
        -1 *
          (
            var(--truncate-internal-marker-fade-width) +
              var(--truncate-internal-marker-gap)
          )
      );
    }
    & [data-truncate-marker]::before {
      --truncate-internal-fade-dir: to left;
      left: calc(
        -1 *
          (
            var(--truncate-internal-marker-fade-width) +
              var(--truncate-internal-marker-gap)
          )
      );
    }
  }

  [data-truncate-variant='fade'] {
    & [data-truncate-marker] {
      background: transparent;
    }
  }

  [data-truncate-fade] {
    box-shadow:
      0 0 calc(var(--truncate-internal-fade-marker-width) / 2)
        var(--truncate-internal-fade-marker-color),
      0 0 var(--truncate-internal-fade-marker-width)
        var(--truncate-internal-fade-marker-color);
    width: calc(var(--truncate-internal-fade-marker-width) * 2);
    height: calc(
      var(--truncate-internal-single-line-height) -
        (var(--truncate-internal-fade-marker-width) * 2)
    );
    margin: var(--truncate-internal-fade-marker-width) 0;
  }

  [data-truncate-group-container='middle'] {
    & [data-truncate-container] {
      --truncate-marker-opacity: var(--truncate-internal-middle-marker-opacity);
    }

    display: flex;
    min-width: 0;

    & > div {
      min-width: 0;
    }

    & > div[data-truncate-segment-priority='1'] {
      flex: 0 1 max-content;
    }
    & > div[data-truncate-segment-priority='2'] {
      flex: 0 999999 max-content;
    }
  }
}
`})))()}function _t(e){return`${vt}
@layer base {
  ${e}
}`}function W(e){return`${vt}
@layer unsafe {
  ${e}
}`}var vt;function yt(){return(yt=e((()=>{vt=`@layer base, unsafe;`})))()}function bt(e){let t=St.get(e);if(t!=null)return t;let n=document.createElement(`div`);n.setAttribute(it,`true`);let r=document.createElement(`div`);r.style.position=`relative`,r.style.height=`200%`,n.appendChild(r),e.appendChild(n);let i=Math.max(n.offsetWidth-n.clientWidth,0);return n.remove(),St.set(e,i),i}function xt(e,t){if(!e.isConnected)return;let n=bt(t);if(n==null)return;let r=t.querySelector(`style[${at}]`),i=r instanceof HTMLStyleElement?r:document.createElement(`style`);r instanceof HTMLStyleElement||(i.setAttribute(at,``),t.appendChild(i)),i.textContent=`:host { ${ot}: ${n}px; }`}var St;function Ct(){return(Ct=e((()=>{ut(),St=new WeakMap})))()}function wt(e){if(typeof CSSStyleSheet<`u`&&typeof CSSStyleSheet.prototype.replaceSync==`function`&&`adoptedStyleSheets`in e){Dt??(Dt=new CSSStyleSheet,Dt.replaceSync(_t(gt)));let t=!1;try{e.adoptedStyleSheets=[Dt],t=!0}catch{}if(t){e.querySelector(`style[${V}]`)?.remove();return}}if(e.querySelector(`style[data-file-tree-style]`)==null){let t=document.createElement(`style`);t.setAttribute(V,``),t.textContent=_t(gt),e.prepend(t)}}function Tt(e,t){Et(e,t),wt(t),xt(e,t)}function Et(e,t){let n=e.querySelector(`template[shadowrootmode="open"], template[data-file-tree-shadowrootmode="open"]`);n instanceof HTMLTemplateElement&&(t.childNodes.length>0||(t.appendChild(n.content.cloneNode(!0)),n.hasAttribute(`shadowrootmode`)&&n.remove()))}var Dt;function Ot(){return(Ot=e((()=>{if(ut(),U(),yt(),Ct(),typeof HTMLElement<`u`&&customElements.get(`file-tree-container`)==null){class e extends HTMLElement{constructor(){super()}connectedCallback(){let e=this.shadowRoot??this.attachShadow({mode:`open`});Tt(this,e)}}if(customElements.define(rt,e),typeof document<`u`)for(let e of Array.from(document.querySelectorAll(rt)))e instanceof HTMLElement&&Tt(e,e.shadowRoot??e.attachShadow({mode:`open`}))}})))()}function kt(e,t=`closed`,n=null){let r=jt(t);return{activeNodeCount:e.nodes.length-1,collapsedDirectoryIds:new Set,collapseNewDirectoriesByDefault:!1,defaultExpansion:r,directoriesOpenByDefault:r===`open`,hasCollapsedDirectoryOverrides:!1,directoryLoadInfoById:new Map,expandedDirectoryIds:new Set,instrumentation:n,listeners:new Map,pathCacheByNodeId:new Map([[e.rootId,{path:``,version:0}]]),pathCacheVersion:0,snapshot:e,transactionStack:[]}}function At(){return{affectedAncestorIds:new Set,affectedNodeIds:new Set,events:[]}}function jt(e){if(typeof e!=`number`)return e;if(!Number.isInteger(e)||e<0)throw Error(`initialExpansion must be "open", "closed", or a non-negative integer depth. Received: ${String(e)}`);return e}function Mt(e,t){return M(t,2)||e.defaultExpansion===`open`?!0:e.defaultExpansion!==`closed`&&we(t)<=e.defaultExpansion}function Nt(e,t,n=e.snapshot.nodes[t]){return n==null||!F(n)?!1:e.directoriesOpenByDefault&&!e.hasCollapsedDirectoryOverrides?!0:e.collapsedDirectoryIds.has(t)?!1:e.expandedDirectoryIds.has(t)?!0:Mt(e,n)}function Pt(e,t,n,r=e.snapshot.nodes[t]){if(r==null||!F(r))return;let i=Mt(e,r);if(n){if(i){e.collapsedDirectoryIds.delete(t),e.hasCollapsedDirectoryOverrides=e.collapsedDirectoryIds.size>0;return}e.expandedDirectoryIds.add(t);return}if(i){e.collapsedDirectoryIds.add(t),e.hasCollapsedDirectoryOverrides=!0;return}e.expandedDirectoryIds.delete(t)}function Ft(e,t){let n=e.directoryLoadInfoById.get(t);if(n!=null)return n;let r={activeAttemptId:null,errorMessage:null,nextAttemptId:1,state:`loaded`};return e.directoryLoadInfoById.set(t,r),r}function It(e,t){return e.directoryLoadInfoById.get(t)?.state??`loaded`}function Lt(e,t){let n=Ft(e,t);if(n.state===`loading`&&n.activeAttemptId!=null)return{attemptId:n.activeAttemptId,nodeId:t,reused:!0};let r=n.nextAttemptId;return n.activeAttemptId=r,n.errorMessage=null,n.nextAttemptId+=1,n.state=`loading`,{attemptId:r,nodeId:t,reused:!1}}function Rt(e,t){let n=Ft(e,t);n.activeAttemptId=null,n.errorMessage=null,n.state=`unloaded`}function zt(e,t,n){let r=e.directoryLoadInfoById.get(t);return r==null||r.activeAttemptId!==n?!1:(r.activeAttemptId=null,r.errorMessage=null,r.state=`loaded`,!0)}function Bt(e,t,n){return e.directoryLoadInfoById.get(t)?.activeAttemptId===n}function Vt(e,t,n,r){let i=e.directoryLoadInfoById.get(t);return i==null||i.activeAttemptId!==n?!1:(i.activeAttemptId=null,i.errorMessage=r??null,i.state=`error`,!0)}function Ht(e,t){e.directoryLoadInfoById.delete(t)}function Ut(){return(Ut=e((()=>{Le()})))()}function Wt(e,t,n){let r=n,i=e.listeners.get(t);return i==null?e.listeners.set(t,new Set([r])):i.add(r),()=>{let n=e.listeners.get(t);n!=null&&(n.delete(r),n.size===0&&e.listeners.delete(t))}}function Gt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,operation:`add`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function Kt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,operation:`remove`,path:e.path,projectionChanged:e.projectionChanged,recursive:e.recursive,visibleCountDelta:null}}function qt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,from:e.from,operation:`move`,projectionChanged:e.projectionChanged,to:e.to,visibleCountDelta:null}}function Jt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`expand`,path:e.path,projectionChanged:!0,visibleCountDelta:null}}function Yt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`collapse`,path:e.path,projectionChanged:!0,visibleCountDelta:null}}function Xt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`mark-directory-unloaded`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function Zt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,operation:`begin-child-load`,path:e.path,projectionChanged:e.projectionChanged,reused:e.reused,visibleCountDelta:null}}function Qt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:e.childEvents.some(e=>e.canonicalChanged),childEvents:e.childEvents,operation:`apply-child-patch`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function $t(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,operation:`complete-child-load`,path:e.path,projectionChanged:e.projectionChanged,stale:e.stale,visibleCountDelta:null}}function en(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,errorMessage:e.errorMessage,operation:`fail-child-load`,path:e.path,projectionChanged:e.projectionChanged,stale:e.stale,visibleCountDelta:null}}function tn(e){return{activeNodeCountAfter:e.activeNodeCountAfter,activeNodeCountBefore:e.activeNodeCountBefore,affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],cachedPathEntryCountAfter:e.cachedPathEntryCountAfter,cachedPathEntryCountBefore:e.cachedPathEntryCountBefore,canonicalChanged:!1,idsPreserved:e.idsPreserved,loadInfoEntryCountAfter:e.loadInfoEntryCountAfter,loadInfoEntryCountBefore:e.loadInfoEntryCountBefore,mode:e.mode,operation:`cleanup`,projectionChanged:e.projectionChanged,reclaimedCachedPathEntryCount:e.reclaimedCachedPathEntryCount,reclaimedLoadInfoEntryCount:e.reclaimedLoadInfoEntryCount,reclaimedNodeSlotCount:e.reclaimedNodeSlotCount,reclaimedSegmentCount:e.reclaimedSegmentCount,segmentCountAfter:e.segmentCountAfter,segmentCountBefore:e.segmentCountBefore,totalNodeSlotCountAfter:e.totalNodeSlotCountAfter,totalNodeSlotCountBefore:e.totalNodeSlotCountBefore,visibleCountDelta:null}}function nn(e,t,n){return{...n,visibleCountDelta:pn(e)-t}}function rn(e,t){let n=pn(e),r=At();e.transactionStack.push(r);try{t()}catch(t){throw on(e,r,!1),t}on(e,r,!0,pn(e)-n)}function G(e,t){let n=e.instrumentation;if(n==null){an(e,t);return}L(n,`store.events.record`,()=>an(e,t))}function an(e,t){let n=e.transactionStack[e.transactionStack.length-1]??null;if(n==null){dn(e,t);return}n.events.push(t),un(n,t)}function on(e,t,n,r=null){if(e.transactionStack.pop()!==t)throw Error(`Transaction stack underflow`);if(!n)return;let i=e.transactionStack[e.transactionStack.length-1]??null;if(i!=null){let n=e.instrumentation;n==null?ln(i,t):L(n,`store.events.batch.merge`,()=>ln(i,t));return}let a=sn(t,r),o=e.instrumentation;if(o==null){dn(e,a);return}L(o,`store.events.batch.commit`,()=>dn(e,a))}function sn(e,t){return{affectedAncestorIds:[...e.affectedAncestorIds],affectedNodeIds:[...e.affectedNodeIds],canonicalChanged:e.events.some(e=>e.canonicalChanged),events:[...e.events],operation:`batch`,projectionChanged:e.events.some(e=>e.projectionChanged),visibleCountDelta:t}}function cn(e,t){for(let n of t.affectedAncestorIds)e.affectedAncestorIds.add(n);for(let n of t.affectedNodeIds)e.affectedNodeIds.add(n)}function ln(e,t){for(let n of t.events)e.events.push(n);cn(e,t)}function un(e,t){for(let n of t.affectedNodeIds)e.affectedNodeIds.add(n);for(let n of t.affectedAncestorIds)e.affectedAncestorIds.add(n)}function dn(e,t){let n=e.instrumentation;if(n==null){fn(e,t);return}L(n,`store.events.emit`,()=>fn(e,t))}function fn(e,t){e.listeners.get(t.operation)?.forEach(e=>e(t)),e.listeners.get(`*`)?.forEach(e=>e(t))}function pn(e){return e.snapshot.nodes[e.snapshot.rootId]?.visibleSubtreeCount??0}function mn(){return(mn=e((()=>{N(),Ut()})))()}function hn(e,t){if(e.snapshot.options.flattenEmptyDirectories!==!0)return null;let n=e.snapshot.nodes[t];if(n==null||!F(n)||M(n,2))return null;let r=e.snapshot.directories.get(t);if(r==null||r.childIds.length!==1)return null;let i=r.childIds[0];if(i==null)return null;let a=e.snapshot.nodes[i];return a==null||!F(a)?null:i}function gn(e,t){let n=t;for(;;){let t=hn(e,n);if(t==null)return n;n=t}}function _n(e,t){let n=[t],r=t;for(;;){let t=hn(e,r);if(t==null)return n;n.push(t),r=t}}function vn(){return(vn=e((()=>{Le()})))()}function yn(e,t){let n=t==null?e.snapshot.rootId:On(e,t);return n==null?[]:An(e,n)}function bn(e,t){let n=Je(t),r=n.isDirectory?n.segments:n.segments.slice(0,-1),i=Gn(e,Wn(e,r)),{createdNodeIds:a,directoryId:o}=jn(e,r),s=new Set(a),c=o;if(n.isDirectory){let n=J(e,o);if(M(n,1))throw Error(`Path already exists: "${t}"`);ye(n,1),e.pathCacheByNodeId.set(o,{path:t,version:e.pathCacheVersion}),s.add(o)}else c=Nn(e,o,n.basename),s.add(c);Tn(e,o);let l=Gn(e,o);return Gt({affectedAncestorIds:Dn(e,c),affectedNodeIds:[...s],path:t,projectionChanged:Kn(i,l)})}function xn(e,t,n){let r=On(e,t);if(r==null)throw Error(`Path does not exist: "${t}"`);let i=J(e,r);if(M(i,2))throw Error(`The root node cannot be removed`);if(F(i)&&q(e,r).childIds.length>0&&n.recursive!==!0)throw Error(`Cannot remove a non-empty directory without recursive: "${t}"`);let a=i.parentId,o=Gn(e,a),s=Hn(e,r);In(e,a,r,i.nameId),Un(e,a),Tn(e,a);let c=Gn(e,a);return Kt({affectedAncestorIds:Dn(e,a),affectedNodeIds:s,path:t,projectionChanged:Kn(o,c),recursive:n.recursive===!0})}function Sn(e,t,n,r){let i=On(e,t);if(i==null)throw Error(`Source path does not exist: "${t}"`);let a=J(e,i);if(M(a,2))throw Error(`The root node cannot be moved`);let o=r.collision??`error`,s=Bn(e,i,n),c=Gn(e,a.parentId),l=Gn(e,s.parentId),u=R(e.snapshot.segmentTable,a.nameId),d=He(e.snapshot.segmentTable,s.basename);if(s.parentId===a.parentId&&u===s.basename)return null;if(F(a)&&Xn(e,i,s.parentId))throw Error(`Cannot move a directory into one of its descendants`);let f=xe(e.snapshot.nodes,q(e,s.parentId)).get(d),p=s.existingNodeId??f??null;if(p!=null&&p!==i&&Vn(e,p,o,Re(a))===`skip`)return null;let m=a.parentId;In(e,m,i,a.nameId),a.parentId=s.parentId,a.nameId=d,e.pathCacheByNodeId.delete(i),Yn(e,i),Fn(e,s.parentId,i),Un(e,m),e.pathCacheVersion++,Tn(e,m),s.parentId!==m&&Tn(e,s.parentId);let h=Gn(e,m),g=Gn(e,s.parentId);return qt({affectedAncestorIds:[...new Set([...Dn(e,m),...Dn(e,s.parentId)])],affectedNodeIds:[i],from:t,projectionChanged:qn([c,l],[h,g]),to:K(e,i)})}function Cn(e,t){let n=e.pathCacheByNodeId.get(t);return n!=null&&n.version===e.pathCacheVersion?n.path:null}function wn(e,t,n){return e.pathCacheByNodeId.set(t,{path:n,version:e.pathCacheVersion}),n}function K(e,t){let n=J(e,t),r=Cn(e,t);if(r!=null)return r;if(M(n,2))return wn(e,t,``);let i=K(e,n.parentId),a=R(e.snapshot.segmentTable,n.nameId),o=i.length===0?a:`${i}${a}`;return wn(e,t,F(n)?`${o}/`:o)}function Tn(e,t){let n=e.instrumentation;if(n==null){Qn(e,t);return}L(n,`store.recomputeCountsUpwardFrom`,()=>Qn(e,t))}function En(e,t){let n=[[t,0]],{nodes:r,directories:i}=e.snapshot;for(;n.length>0;){let t=n[n.length-1],a=t[0],o=r[a];if(o==null||!F(o)){Zn(e,a,o,!0),n.pop();continue}let s=i.get(a);if(s==null||t[1]>=s.childIds.length){Zn(e,a,o,!0),n.pop();continue}let c=s.childIds[t[1]++];n.push([c,0])}}function Dn(e,t){let n=[],r=t;for(;r!=null;){let t=J(e,r);if(n.push(r),r===e.snapshot.rootId)break;r=t.parentId}return n}function On(e,t){if(t.length===0)return e.snapshot.rootId;let n=je(t);return kn(e,n.segments,n.requiresDirectory)}function kn(e,t,n){let r=e.snapshot.rootId;for(let n of t){let t=e.snapshot.segmentTable.idByValue.get(n);if(t===void 0)return null;let i=q(e,r),a=xe(e.snapshot.nodes,i).get(t);if(a===void 0)return null;r=a}let i=J(e,r);return n&&!F(i)?null:r}function q(e,t){let n=e.snapshot.directories.get(t);if(n===void 0)throw Error(`Unknown directory child index for node ${String(t)}`);return n}function J(e,t){let n=e.snapshot.nodes[t];if(n===void 0||M(n,4))throw Error(`Unknown node ID: ${String(t)}`);return n}function An(e,t){let n=e.snapshot.nodes[t];if(n===void 0||M(n,4))return[];if(!F(n))return[K(e,t)];if(q(e,t).childIds.length===0)return M(n,1)&&!M(n,2)?[K(e,t)]:[];let r=[],i=[{childIndex:0,nodeId:t}];for(;i.length>0;){let t=i[i.length-1];if(t==null)break;let n=e.snapshot.nodes[t.nodeId];if(n===void 0||M(n,4)){i.pop();continue}if(!F(n)){r.push(K(e,t.nodeId)),i.pop();continue}let a=q(e,t.nodeId);if(a.childIds.length===0){M(n,1)&&!M(n,2)&&r.push(K(e,t.nodeId)),i.pop();continue}let o=a.childIds[t.childIndex];if(o==null){i.pop();continue}t.childIndex++,i.push({childIndex:0,nodeId:o})}return r}function jn(e,t){let n=[],r=e.snapshot.rootId;for(let i of t){let t=He(e.snapshot.segmentTable,i),a=q(e,r),o=xe(e.snapshot.nodes,a).get(t);if(o!==void 0){if(!F(J(e,o)))throw Error(`Cannot create a directory that collides with an existing file: "${i}"`);r=o;continue}r=Mn(e,r,t),n.push(r)}return{createdNodeIds:n,directoryId:r}}function Mn(e,t,n){let r=J(e,t),i=e.snapshot.nodes.length;return e.snapshot.nodes.push({depthAndFlags:ve(we(r)+1,0,1),nameId:n,parentId:t,subtreeNodeCount:1,visibleSubtreeCount:1}),e.snapshot.directories.set(i,be()),Fn(e,t,i),e.collapseNewDirectoriesByDefault&&(e.collapsedDirectoryIds.add(i),e.hasCollapsedDirectoryOverrides=!0),e.activeNodeCount++,i}function Nn(e,t,n){let r=He(e.snapshot.segmentTable,n),i=q(e,t);if(xe(e.snapshot.nodes,i).has(r))throw Error(`Path already exists: "${er(e,t,n)}"`);let a=J(e,t),o=e.snapshot.nodes.length;return e.snapshot.nodes.push({depthAndFlags:ve(we(a)+1,0),nameId:r,parentId:t,subtreeNodeCount:1,visibleSubtreeCount:1}),Fn(e,t,o),e.activeNodeCount++,o}function Pn(e,t,n){let r=0,i=t.childIds.length;for(;r<i;){let a=r+i>>>1,o=t.childIds[a];if(o==null){i=a;continue}Ln(e,n,o)<0?i=a:r=a+1}return r}function Fn(e,t,n){let r=q(e,t),i=J(e,n);xe(e.snapshot.nodes,r).set(i.nameId,n),Te(r,n,i.subtreeNodeCount,i.visibleSubtreeCount);let a=Pn(e,r,n);r.childIds.splice(a,0,n),De(r,a),Oe(e.snapshot.nodes,r)}function In(e,t,n,r){let i=q(e,t),a=Se(i),o=a.get(n)??-1;xe(e.snapshot.nodes,i).delete(r),a.delete(n);let s=e.snapshot.nodes[n];s!=null&&Te(i,n,-s.subtreeNodeCount,-s.visibleSubtreeCount),o>=0&&(i.childIds.splice(o,1),De(i,o),Oe(e.snapshot.nodes,i))}function Ln(e,t,n){let r=e.snapshot.options.sort;return r==="default"?Rn(e,t,n):r(zn(e,t),zn(e,n))}function Rn(e,t,n){let r=J(e,t),i=J(e,n),a=F(r);if(a!==F(i))return a?-1:1;let o=Be(Pe(e.snapshot.segmentTable,r.nameId),Pe(e.snapshot.segmentTable,i.nameId));if(o!==0)return o;let s=R(e.snapshot.segmentTable,r.nameId),c=R(e.snapshot.segmentTable,i.nameId);return s===c?t<n?-1:1:s<c?-1:1}function zn(e,t){let n=J(e,t),r=K(e,t),i=F(n),a=i?r.slice(0,-1):r;return{basename:R(e.snapshot.segmentTable,n.nameId),depth:we(n),isDirectory:i,path:r,segments:a.length===0?[]:a.split(`/`)}}function Bn(e,t,n){let r=J(e,t),i=On(e,n);if(i!=null){let t=J(e,i);if(F(t))return{basename:R(e.snapshot.segmentTable,r.nameId),existingNodeId:null,parentId:i};let a=je(n).segments;return{basename:a[a.length-1]??``,existingNodeId:i,parentId:t.parentId}}let a=je(n),o=a.segments[a.segments.length-1]??``,s=a.segments.slice(0,-1),c=s.length===0?e.snapshot.rootId:kn(e,s,!0);if(c==null)throw Error(`Destination parent does not exist: "${n}"`);return{basename:o,existingNodeId:null,parentId:c}}function Vn(e,t,n,r){if(n===`skip`)return`skip`;if(n===`error`)throw Error(`Destination already exists: "${K(e,t)}"`);let i=J(e,t);if(Re(i)!==r)throw Error(`replace collision requires the same source and destination kinds`);if(F(i)&&q(e,t).childIds.length>0)throw Error(`replace collision does not support non-empty directories`);let a=i.parentId,o=i.nameId;return Hn(e,t),In(e,a,t,o),Un(e,a),Tn(e,a),`handled`}function Hn(e,t){let n=[],r=[{nodeId:t,visitedChildren:!1}];for(;r.length>0;){let t=r.pop();if(t==null)break;let i=J(e,t.nodeId);if(t.visitedChildren||!F(i)){F(i)&&e.snapshot.directories.delete(t.nodeId),ye(i,4),e.pathCacheByNodeId.delete(t.nodeId),e.collapsedDirectoryIds.delete(t.nodeId)&&(e.hasCollapsedDirectoryOverrides=e.collapsedDirectoryIds.size>0),e.expandedDirectoryIds.delete(t.nodeId),Ht(e,t.nodeId),e.activeNodeCount--,n.push(t.nodeId);continue}r.push({nodeId:t.nodeId,visitedChildren:!0});let a=q(e,t.nodeId);for(let e=a.childIds.length-1;e>=0;e--){let t=a.childIds[e];t!=null&&r.push({nodeId:t,visitedChildren:!1})}}return n}function Un(e,t){let n=t;for(;n!=null;){let t=J(e,n);if(!F(t)||M(t,2)||q(e,n).childIds.length>0)return;ye(t,1),n=t.parentId===n?null:t.parentId}}function Wn(e,t){let n=e.snapshot.rootId;for(let r of t){let t=e.snapshot.segmentTable.idByValue.get(r);if(t==null)break;let i=xe(e.snapshot.nodes,q(e,n)).get(t);if(i==null||!F(J(e,i)))break;n=i}return n}function Gn(e,t){let n=Jn(e,t);if(n==null)return null;let r=gn(e,n),i=J(e,r),a=n===r?null:_n(e,n).map(t=>K(e,t));return JSON.stringify({flattenedSegmentPaths:a,hasChildren:q(e,r).childIds.length>0,path:K(e,r),terminalKind:Re(i)})}function Kn(e,t){return qn([e],[t])}function qn(e,t){for(let n=0;n<e.length;n+=1){let r=e[n],i=t[n];if(r==null||i==null||r!==i)return!0}return!1}function Jn(e,t){let n=t;for(;n!=null;){let t=J(e,n);if(!F(t)||M(t,2))return null;if(!Nt(e,n,t))return n;n=t.parentId}return null}function Yn(e,t){let n=J(e,t);if(Ce(n,(t===e.snapshot.rootId?-1:we(J(e,n.parentId)))+1),!F(n))return;let r=q(e,t);for(let t of r.childIds)Yn(e,t)}function Xn(e,t,n){let r=n;for(;r!=null;){if(r===t)return!0;let n=J(e,r);if(r===e.snapshot.rootId)return!1;r=n.parentId}return!1}function Zn(e,t,n=J(e,t),r=!1){let i=e.instrumentation;if(i==null){$n(e,t,n,r);return}L(i,`store.recomputeNodeCounts`,()=>$n(e,t,n,r))}function Qn(e,t){let n=t;for(;n!=null;){let t=J(e,n),r=t.subtreeNodeCount,i=t.visibleSubtreeCount;if(Zn(e,n,t),n===e.snapshot.rootId)return;let a=t.subtreeNodeCount-r,o=t.visibleSubtreeCount-i,s=t.parentId;(a!==0||o!==0)&&Te(q(e,s),n,a,o),n=s}}function $n(e,t,n,r){if(!F(n)){n.subtreeNodeCount=1,n.visibleSubtreeCount=1;return}let i=q(e,t);if(r){let t=e.instrumentation;t==null?_e(e.snapshot.nodes,i):L(t,`store.recomputeNodeCounts.rebuildChildAggregates`,()=>_e(e.snapshot.nodes,i))}let a=1+i.totalChildSubtreeNodeCount,o=i.totalChildVisibleSubtreeCount;if(n.subtreeNodeCount=a,M(n,2)){n.visibleSubtreeCount=o;return}n.visibleSubtreeCount=hn(e,t)==null?Nt(e,t,n)?1+o:1:o}function er(e,t,n){let r=K(e,t);return r.length===0?n:`${r}${n}`}function tr(){return(tr=e((()=>{Ye(),Le(),N(),ke(),Ne(),Ut(),mn(),vn()})))()}function nr(e){return e!=null&&!M(e,4)}function rr(e,t){let n=e.snapshot.nodes[t];return!nr(n)||!F(n)||M(n,2)?null:n}function ir(e){let t=0;for(let[n,r]of e.pathCacheByNodeId)r.version===e.pathCacheVersion&&nr(e.snapshot.nodes[n])&&(t+=1);return t}function ar(e){return Math.max(0,e.valueById.length-1)}function or(e){return{activeNodeCount:e.activeNodeCount,cachedPathEntryCount:ir(e),loadInfoEntryCount:e.directoryLoadInfoById.size,segmentCount:ar(e.snapshot.segmentTable),totalNodeSlotCount:Math.max(0,e.snapshot.nodes.length-1)}}function sr(e,t,n,r){return{activeNodeCountAfter:r.activeNodeCount,activeNodeCountBefore:n.activeNodeCount,cachedPathEntryCountAfter:r.cachedPathEntryCount,cachedPathEntryCountBefore:n.cachedPathEntryCount,idsPreserved:t,loadInfoEntryCountAfter:r.loadInfoEntryCount,loadInfoEntryCountBefore:n.loadInfoEntryCount,mode:e,reclaimedCachedPathEntryCount:n.cachedPathEntryCount-r.cachedPathEntryCount,reclaimedLoadInfoEntryCount:n.loadInfoEntryCount-r.loadInfoEntryCount,reclaimedNodeSlotCount:n.totalNodeSlotCount-r.totalNodeSlotCount,reclaimedSegmentCount:n.segmentCount-r.segmentCount,segmentCountAfter:r.segmentCount,segmentCountBefore:n.segmentCount,totalNodeSlotCountAfter:r.totalNodeSlotCount,totalNodeSlotCountBefore:n.totalNodeSlotCount}}function cr(e){let t=[],n=[];for(let n of e.collapsedDirectoryIds)rr(e,n)!=null&&t.push(K(e,n));for(let t of e.expandedDirectoryIds)rr(e,t)!=null&&n.push(K(e,t));return{collapsedPaths:t,expandedPaths:n}}function lr(e){let t=[];for(let[n,r]of e.directoryLoadInfoById)rr(e,n)!=null&&It(e,n)!==`loaded`&&t.push({info:{activeAttemptId:null,errorMessage:r.errorMessage,nextAttemptId:r.nextAttemptId,state:r.state},path:K(e,n)});return t}function ur(e,t){e.collapsedDirectoryIds.clear(),e.hasCollapsedDirectoryOverrides=!1,e.expandedDirectoryIds.clear();for(let n of t.expandedPaths){let t=On(e,n);t!=null&&Pt(e,t,!0,J(e,t))}for(let n of t.collapsedPaths){let t=On(e,n);t!=null&&Pt(e,t,!1,J(e,t))}}function dr(e,t){e.directoryLoadInfoById.clear();for(let n of t){let t=On(e,n.path);t!=null&&rr(e,t)!=null&&e.directoryLoadInfoById.set(t,{activeAttemptId:null,errorMessage:n.info.errorMessage,nextAttemptId:n.info.nextAttemptId,state:n.info.state})}}function fr(e){e.pathCacheVersion+=1,e.pathCacheByNodeId.clear(),e.pathCacheByNodeId.set(e.snapshot.rootId,{path:``,version:e.pathCacheVersion})}function pr(e){let t=e.snapshot.segmentTable,n=Ge();for(let r of e.snapshot.nodes)if(nr(r)){if(M(r,2)){r.nameId=0;continue}r.nameId=He(n,R(t,r.nameId))}e.snapshot.segmentTable=n}function mr(e){for(let[t,n]of e.snapshot.directories){let r=e.snapshot.nodes[t];if(!nr(r)||!F(r)){e.snapshot.directories.delete(t);continue}let i=n.childIds.filter(n=>{let r=e.snapshot.nodes[n];return nr(r)&&r.parentId===t});n.childIds=i,n.childIdByNameId=new Map(i.map(t=>[J(e,t).nameId,t])),n.childPositionById=new Map(i.map((e,t)=>[e,t])),_e(e.snapshot.nodes,n)}}function hr(e){let t=e.snapshot.nodes.length-1;for(;t>e.snapshot.rootId;){let n=e.snapshot.nodes[t];if(nr(n))break;--t}e.snapshot.nodes.length=t+1}function gr(e){let t=cr(e),n=lr(e);L(e.instrumentation,`store.cleanup.stable.clearPathCaches`,()=>fr(e)),L(e.instrumentation,`store.cleanup.stable.rebuildSegmentTable`,()=>pr(e)),L(e.instrumentation,`store.cleanup.stable.rebuildDirectoryIndexes`,()=>mr(e)),L(e.instrumentation,`store.cleanup.stable.trimTrailingRemovedNodeSlots`,()=>hr(e)),L(e.instrumentation,`store.cleanup.stable.restoreExpansionOverrides`,()=>ur(e,t)),L(e.instrumentation,`store.cleanup.stable.restoreDirectoryLoadInfos`,()=>dr(e,n)),L(e.instrumentation,`store.cleanup.stable.recomputeCounts`,()=>En(e,e.snapshot.rootId))}function _r(e){let t=cr(e),n=lr(e),r=L(e.instrumentation,`store.cleanup.aggressive.listPaths`,()=>yn(e)),i=qe({...e.snapshot.options},e.instrumentation),a=L(e.instrumentation,`store.cleanup.aggressive.rebuildSnapshot`,()=>{let e=new We(i);return e.appendPaths(r),e.finish()});e.snapshot=a,e.activeNodeCount=a.nodes.length-1,e.pathCacheByNodeId=new Map([[a.rootId,{path:``,version:0}]]),e.pathCacheVersion=0,L(e.instrumentation,`store.cleanup.aggressive.restoreExpansionOverrides`,()=>ur(e,t)),L(e.instrumentation,`store.cleanup.aggressive.restoreDirectoryLoadInfos`,()=>dr(e,n)),L(e.instrumentation,`store.cleanup.aggressive.recomputeCounts`,()=>En(e,e.snapshot.rootId))}function vr(e){for(let t of e.directoryLoadInfoById.values())if(t.state===`loading`&&t.activeAttemptId!=null)return!0;return!1}function yr(e,t){let n=or(e);t===`stable`?L(e.instrumentation,`store.cleanup.stable`,()=>gr(e)):L(e.instrumentation,`store.cleanup.aggressive`,()=>_r(e));let r=or(e);return sr(t,t===`stable`,n,r)}function br(){return(br=e((()=>{Ye(),Le(),N(),Ne(),Ae(),Ut(),tr()})))()}function xr(e,t){let n=t+2;if(n<=e.length)return e;let r=e.length;for(;r<n;)r*=2;let i=new Int32Array(r);return i.fill(-1),i.set(e),i}function Sr(e){return J(e,e.snapshot.rootId).visibleSubtreeCount}function Cr(e,t,n,r){let i=J(e,t.terminalNodeId),a=Math.max(1,i.visibleSubtreeCount);return Math.min(r-1,n+a-1)}function wr(e,t,n,r){return{ancestorPaths:r,index:t.index,posInSet:t.posInSet,row:Ur(e,t.cursor),setSize:t.setSize,subtreeEndIndex:Cr(e,t.cursor,t.index,n)}}function Tr(e,t,n,r,i,a){let o=q(e,t),{childIndex:s,childVisibleIndex:c,localVisibleIndex:l}=P(e.snapshot.nodes,o,n),u=o.childIds[s];if(u==null)throw Error(`Visible index ${String(n)} is out of range`);return Er(e,u,l,r+c,i+1,s,o.childIds.length,a)}function Er(e,t,n,r,i,a,o,s){if(!F(J(e,t))){if(n===0)return{ancestors:s,cursor:{headNodeId:t,terminalNodeId:t,visibleDepth:i},index:r,posInSet:a,setSize:o};throw Error(`Visible index ${String(n)} is out of range for file`)}let c=Lr(e,t,i);if(n===0)return{ancestors:s,cursor:c,index:r,posInSet:a,setSize:o};let l=J(e,c.terminalNodeId);if(!F(l)||!Nt(e,c.terminalNodeId,l))throw Error(`Visible index ${String(n)} is out of range for collapsed directory`);return Tr(e,c.terminalNodeId,n-1,r+1,c.visibleDepth,[...s,{cursor:c,index:r,posInSet:a,setSize:o}])}function Dr(e,t){let n=Sr(e);if(t<0||t>=n)return null;let r=Tr(e,e.snapshot.rootId,t,0,-1,[]),i=r.ancestors.map(t=>K(e,t.cursor.terminalNodeId)),a=null;return{ancestorPaths:i,get ancestorRows(){if(a!=null)return a;let t=[],i=[];for(let a of r.ancestors){let r=wr(e,a,n,[...i]);t.push(r),i.push(r.row.path)}return a=t,a},index:r.index,posInSet:r.posInSet,row:Ur(e,r.cursor),setSize:r.setSize,subtreeEndIndex:Cr(e,r.cursor,r.index,n)}}function Or(e,t,n){let r=e.instrumentation,i=Sr(e);if(i<=0||n<t)return[];let a=Math.max(0,Math.min(t,i-1)),o=Math.max(a,Math.min(n,i-1));if(r==null){if(a===0)return Hr(e,o+1);let t=[],n=Pr(e,a);for(let r=a;r<=o&&n!=null;r++){let r=Ur(e,n);t.push(r),n=zr(e,n)}return t}let s=[],c=0,l=0,u=L(r,`store.getVisibleSlice.selectFirstRow`,()=>Pr(e,a));for(let t=a;t<=o&&u!=null;t++){let t=L(r,`store.getVisibleSlice.materializeRow`,()=>Ur(e,u));s.push(t),t.isFlattened&&(c++,l+=t.flattenedSegments?.length??0),u=L(r,`store.getVisibleSlice.advanceCursor`,()=>zr(e,u))}return Ke(r,`workload.visibleRowsRead`,s.length),Ke(r,`workload.flattenedRowsRead`,c),Ke(r,`workload.flattenedSegmentsRead`,l),s}function kr(e,t=Sr(e)){let n=e.instrumentation;return n==null?Vr(e,t):L(n,`store.getVisibleTreeProjection`,()=>Vr(e,t))}function Ar(e){return Br(kr(e))}function jr(e,t){let n=On(e,t);if(n==null||n===e.snapshot.rootId||F(J(e,n))&&gn(e,n)!==n)return null;let r=0,i=n,{nodes:a,rootId:o}=e.snapshot;for(;i!==o;){let t=J(e,i).parentId,n=q(e,t),s=Se(n).get(i);if(s==null)throw Error(`Child ${String(i)} was not found in its parent index`);if(r+=I(a,n,s),t!==o){let n=J(e,t),a=hn(e,t);if(!Nt(e,t,n)&&a!==i)return null;gn(e,t)===t&&(r+=1)}i=t}return r}function Mr(e,t){let n=On(e,t);if(n==null)throw Error(`Path does not exist: "${t}"`);let r=J(e,n);if(!F(r))throw Error(`Path is not a directory: "${t}"`);return Nt(e,n,r)?null:(Pt(e,n,!0,r),Tn(e,n),Jt({affectedAncestorIds:Dn(e,n),affectedNodeIds:[n],path:t,projectionChanged:!0}))}function Nr(e,t){let n=On(e,t);if(n==null)throw Error(`Path does not exist: "${t}"`);let r=J(e,n);if(!F(r))throw Error(`Path is not a directory: "${t}"`);return Nt(e,n,r)?(Pt(e,n,!1,r),Tn(e,n),Yt({affectedAncestorIds:Dn(e,n),affectedNodeIds:[n],path:t,projectionChanged:!0})):null}function Pr(e,t){return t<0||t>=Sr(e)?null:Fr(e,e.snapshot.rootId,t,-1)}function Fr(e,t,n,r){let i=q(e,t),a=e.instrumentation,{childIndex:o,localVisibleIndex:s}=a==null?P(e.snapshot.nodes,i,n):L(a,`store.getVisibleSlice.selectChildIndex`,()=>P(e.snapshot.nodes,i,n)),c=i.childIds[o];if(c!=null)return Ir(e,c,s,r+1);throw Error(`Visible index ${String(n)} is out of range`)}function Ir(e,t,n,r){if(!F(J(e,t))){if(n===0)return{headNodeId:t,terminalNodeId:t,visibleDepth:r};throw Error(`Visible index ${String(n)} is out of range for file`)}let i=Lr(e,t,r);if(n===0)return i;let a=J(e,i.terminalNodeId);if(!F(a)||!Nt(e,i.terminalNodeId,a))throw Error(`Visible index ${String(n)} is out of range for collapsed directory`);return Fr(e,i.terminalNodeId,n-1,i.visibleDepth)}function Lr(e,t,n){return F(J(e,t))?e.instrumentation==null?{headNodeId:t,terminalNodeId:gn(e,t),visibleDepth:n}:{headNodeId:t,terminalNodeId:L(e.instrumentation,`store.getVisibleSlice.flatten.resolveTerminalDirectory`,()=>gn(e,t)),visibleDepth:n}:{headNodeId:t,terminalNodeId:t,visibleDepth:n}}function Rr(e,t){let n=J(e,t);if(!F(n))return!0;let r=n.parentId;return r===e.snapshot.rootId||hn(e,r)!==t}function zr(e,t){let n=J(e,t.terminalNodeId);if(F(n)){let r=q(e,t.terminalNodeId);if(Nt(e,t.terminalNodeId,n)&&r.childIds.length>0){let n=r.childIds[0];return n==null?null:Ir(e,n,0,t.visibleDepth+1)}}let r=t.terminalNodeId,i=t.visibleDepth;for(;;){let t=J(e,r);if(r===e.snapshot.rootId)return null;let n=t.parentId,a=q(e,n),o=Se(a).get(r)??-1;if(o<0)throw Error(`Child ${String(r)} was not found in its parent index`);let s=a.childIds[o+1]??null;if(s!=null)return Ir(e,s,0,i);Rr(e,r)&&i--,r=n}}function Br(e){let t=e.paths.length,n=Array(t);for(let r=0;r<t;r+=1){let t=e.getParentIndex(r);n[r]={index:r,parentPath:t>=0?e.paths[t]??null:null,path:e.paths[r]??``,posInSet:e.posInSetByIndex[r]??0,setSize:e.setSizeByIndex[r]??0}}return{getParentIndex:e.getParentIndex,rows:n,get visibleIndexByPath(){return e.visibleIndexByPath}}}function Vr(e,t){let n=Array(t),r=new Int32Array(t),i=new Int32Array(t),a=new Int32Array(t),o=new Int32Array(Gr);o.fill(-1);let s=0,{nodes:c,directories:l,segmentTable:u}=e.snapshot,d=[[l.get(e.snapshot.rootId),0,-1,``]],f=e.snapshot.options.flattenEmptyDirectories,p=e.pathCacheByNodeId,m=e.pathCacheVersion,h=u.valueById;for(;d.length>0&&s<t;){let t=d[d.length-1],u=t[0];if(t[1]>=u.childIds.length){d.pop();continue}let g=t[1],_=u.childIds[t[1]++],v=c[_],y=t[2]+1,b=t[3];o=xr(o,y);let x,S=_;if(F(v))S=f?gn(e,_):_,x=S===_?`${b}${h[v.nameId]}/`:K(e,S);else{let e=p.get(_);x=e!=null&&e.version===m?e.path:`${b}${h[v.nameId]}`}r[s]=o[y],n[s]=x,i[s]=g,a[s]=u.childIds.length,o[y+1]=s,s+=1;let C=c[S];C!=null&&F(C)&&Nt(e,S,C)&&d.push([l.get(S),0,y,x])}s<t&&(n.length=s);let g=r.subarray(0,s),_=i.subarray(0,s),v=a.subarray(0,s),y=null;return{getParentIndex(e){return e<0||e>=s?-1:g[e]??-1},paths:n,posInSetByIndex:_,setSizeByIndex:v,get visibleIndexByPath(){if(y==null){y=new Map;for(let e=0;e<s;e+=1)y.set(n[e]??``,e)}return y}}}function Hr(e,t){let n=Array(t),r=0,{nodes:i,directories:a,segmentTable:o}=e.snapshot,s=[[a.get(e.snapshot.rootId),0,-1]],c=o.valueById,l=e.snapshot.options.flattenEmptyDirectories,u=e.pathCacheByNodeId,d=e.pathCacheVersion;for(;s.length>0&&r<t;){let t=s[s.length-1],o=t[0];if(t[1]>=o.childIds.length){s.pop();continue}let f=o.childIds[t[1]++],p=i[f],m=t[2]+1;if(!F(p)){let t=u.get(f);n[r++]={depth:m,flattenedSegments:void 0,hasChildren:!1,id:f,isExpanded:!1,isFlattened:!1,isLoading:!1,kind:`file`,loadState:void 0,name:c[p.nameId],path:t!=null&&t.version===d?t.path:K(e,f)};continue}let h=l?gn(e,f):f,g={headNodeId:f,terminalNodeId:h,visibleDepth:m};n[r++]=Ur(e,g);let _=i[h];_!=null&&F(_)&&Nt(e,h,_)&&s.push([a.get(h),0,m])}return r<t&&(n.length=r),n}function Ur(e,t){let n=J(e,t.terminalNodeId),r=F(n)?Wr(e,t):null,i=K(e,t.terminalNodeId),a=R(e.snapshot.segmentTable,n.nameId),o=F(n)&&q(e,t.terminalNodeId).childIds.length>0,s=t.headNodeId!==t.terminalNodeId,c=e.instrumentation,l=s?c==null?_n(e,t.headNodeId).map(n=>{let r=J(e,n);return{isTerminal:n===t.terminalNodeId,name:R(e.snapshot.segmentTable,r.nameId),nodeId:n,path:K(e,n)}}):L(c,`store.getVisibleSlice.flatten.collectSegments`,()=>_n(e,t.headNodeId).map(n=>{let r=J(e,n);return{isTerminal:n===t.terminalNodeId,name:R(e.snapshot.segmentTable,r.nameId),nodeId:n,path:K(e,n)}})):void 0;return{depth:t.visibleDepth,flattenedSegments:l,hasChildren:o,id:t.terminalNodeId,isExpanded:F(n)&&Nt(e,t.terminalNodeId,n),isFlattened:s,isLoading:r===`loading`,kind:F(n)?`directory`:`file`,loadState:r==null||r===`loaded`?void 0:r,name:a,path:i}}function Wr(e,t){if(t.headNodeId===t.terminalNodeId)return It(e,t.terminalNodeId);let n=_n(e,t.headNodeId),r=!1,i=!1;for(let t of n){let n=It(e,t);if(n===`loading`)return`loading`;if(n===`error`){i=!0;continue}n===`unloaded`&&(r=!0)}return i?`error`:r?`unloaded`:`loaded`}var Gr;function Kr(){return(Kr=e((()=>{Ye(),Le(),N(),Ne(),Ut(),mn(),vn(),tr(),Gr=64})))()}function qr(e){let{directories:t,nodes:n,options:r,rootId:i,presortedDirectoryNodeIds:a}=e.snapshot,o=r.flattenEmptyDirectories===!0,s=e=>{let r=n[e];if(r==null||!F(r))return;let i=t.get(e);if(i==null)throw Error(`Unknown directory child index for node ${String(e)}`);let a=i.childIds,s=a.length,c=0,l=0;for(let e=0;e<s;e++){let t=a[e];if(t==null)continue;let r=n[t];c+=r.subtreeNodeCount,l+=r.visibleSubtreeCount}i.totalChildSubtreeNodeCount=c,i.totalChildVisibleSubtreeCount=l,s>=128&&Oe(n,i),r.subtreeNodeCount=1+c;let u;if(o&&s===1){let e=n[a[0]];u=e!=null&&F(e)?l:1+l}else u=1+l;r.visibleSubtreeCount=u};if(a!=null)for(let e=a.length-1;e>=0;e--)s(a[e]);else for(let e=n.length-1;e>=1;e--)s(e);let c=n[i],l=t.get(i);if(c==null||l==null)return;let u=l.childIds,d=0,f=0;for(let e=0;e<u.length;e++){let t=u[e];if(t==null)continue;let r=n[t];d+=r.subtreeNodeCount,f+=r.visibleSubtreeCount}l.totalChildSubtreeNodeCount=d,l.totalChildVisibleSubtreeCount=f,Oe(n,l),c.subtreeNodeCount=1+d,c.visibleSubtreeCount=f}function Jr(e){return e.initialExpansion===`open`&&(e.initialExpandedPaths==null||e.initialExpandedPaths.length===0)}function Yr(e,t){switch(t.type){case`add`:case`remove`:if(!t.path.startsWith(e)||t.path===e)throw Error(`Child patch operation must stay within ${e}: "${t.path}"`);break;case`move`:if(!t.from.startsWith(e)||!t.to.startsWith(e)||t.from===e||t.to===e)throw Error(`Child patch move must stay within ${e}: "${t.from}" -> "${t.to}"`)}}var Xr;function Zr(){return(Zr=e((()=>{Ye(),Le(),N(),ke(),Ae(),Ut(),mn(),vn(),tr(),br(),Kr(),Xr=class e{#e;constructor(e={}){let t=Ee(e),n=L(t,`store.builder.create`,()=>new We(e));if(e.preparedInput!=null){let t=B(e.preparedInput);t==null?n.appendPreparedPaths(Ve(e.preparedInput),!1):n.appendPresortedPaths(t,Ie(e.preparedInput))}else{let r=e.paths??[];e.presorted===!0?n.appendPaths(r):n.appendPreparedPaths(L(t,`store.preparePathEntries`,()=>Ue(r,e)))}let r=L(t,`store.builder.finish`,()=>n.finish({skipSubtreeCountPass:!0})),i=L(t,`store.state.detectAllDirectoriesExpanded`,()=>(e.initialExpansion??`closed`)===`closed`&&n.didMatchAllInitialExpandedPaths());this.#e=L(t,`store.state.create`,()=>kt(r,i?`open`:e.initialExpansion??`closed`,t)),i&&(this.#e.collapseNewDirectoriesByDefault=!0);let a=i?this.#e.snapshot.directories.size-1:L(t,`store.state.initializeExpandedPaths`,()=>this.initializeExpandedPaths(e.initialExpandedPaths));i||Jr(e)||(e.initialExpansion??`closed`)===`closed`&&a===this.#e.snapshot.directories.size-1||(e.initialExpandedPaths?.length??0)>0&&L(t,`store.state.checkAllDirectoriesExpanded`,()=>this.hasAllDirectoriesExpanded())?L(t,`store.state.initializeOpenVisibleCounts`,()=>qr(this.#e)):L(t,`store.state.recomputeCounts`,()=>En(this.#e,this.#e.snapshot.rootId))}static preparePaths(e,t={}){return Me(e,t)}static prepareInput(e,t={}){return z(e,t)}static preparePresortedInput(e){return ze(e)}list(e){return L(this.#e.instrumentation,`store.list`,()=>yn(this.#e,e))}add(e){L(this.#e.instrumentation,`store.add`,()=>{let t=Sr(this.#e);G(this.#e,nn(this.#e,t,bn(this.#e,e)))})}remove(e,t={}){L(this.#e.instrumentation,`store.remove`,()=>{let n=Sr(this.#e);G(this.#e,nn(this.#e,n,xn(this.#e,e,t)))})}move(e,t,n={}){L(this.#e.instrumentation,`store.move`,()=>{let r=Sr(this.#e),i=Sn(this.#e,e,t,n);i!=null&&G(this.#e,nn(this.#e,r,i))})}batch(e){rn(this.#e,()=>{if(typeof e==`function`){e(this);return}for(let t of e)switch(t.type){case`add`:this.add(t.path);break;case`remove`:this.remove(t.path,{recursive:t.recursive});break;case`move`:this.move(t.from,t.to,{collision:t.collision})}})}getVisibleCount(){return L(this.#e.instrumentation,`store.getVisibleCount`,()=>Sr(this.#e))}getVisibleSlice(e,t){return L(this.#e.instrumentation,`store.getVisibleSlice`,()=>Or(this.#e,e,t))}getVisibleRowContext(e){return L(this.#e.instrumentation,`store.getVisibleRowContext`,()=>Dr(this.#e,e))}getVisibleTreeProjection(){return Ar(this.#e)}getVisibleTreeProjectionData(e){return kr(this.#e,e)}getVisibleIndex(e){return L(this.#e.instrumentation,`store.getVisibleIndex`,()=>jr(this.#e,e))}getPathInfo(e){return L(this.#e.instrumentation,`store.getPathInfo`,()=>{let t=On(this.#e,e);if(t==null)return null;let n=J(this.#e,t);return{depth:we(n),kind:F(n)?`directory`:`file`,path:K(this.#e,t)}})}isExpanded(e){return L(this.#e.instrumentation,`store.isExpanded`,()=>{let t=this.requireDirectoryNodeId(e),n=J(this.#e,t);return Nt(this.#e,t,n)})}expand(e){L(this.#e.instrumentation,`store.expand`,()=>{let t=Sr(this.#e),n=Mr(this.#e,e);n!=null&&G(this.#e,nn(this.#e,t,n))})}collapse(e){L(this.#e.instrumentation,`store.collapse`,()=>{let t=Sr(this.#e),n=Nr(this.#e,e);n!=null&&G(this.#e,nn(this.#e,t,n))})}on(e,t){return Wt(this.#e,e,t)}getDirectoryLoadState(e){let t=this.requireDirectoryNodeId(e);return It(this.#e,t)}markDirectoryUnloaded(e){L(this.#e.instrumentation,`store.markDirectoryUnloaded`,()=>{let t=this.requireDirectoryNodeId(e);if(q(this.#e,t).childIds.length>0)throw Error(`Cannot mark a directory with known children as unloaded: "${e}"`);let n=Sr(this.#e);Rt(this.#e,t),G(this.#e,nn(this.#e,n,Xt({affectedAncestorIds:Dn(this.#e,t),affectedNodeIds:[t],path:e,projectionChanged:this.isDirectoryProjectionVisible(t)})))})}beginChildLoad(e){return L(this.#e.instrumentation,`store.beginChildLoad`,()=>{let t=this.requireDirectoryNodeId(e),n=Sr(this.#e),r=Lt(this.#e,t);return G(this.#e,nn(this.#e,n,Zt({affectedAncestorIds:Dn(this.#e,t),affectedNodeIds:[t],attemptId:r.attemptId,path:e,projectionChanged:this.isDirectoryProjectionVisible(t),reused:r.reused}))),r})}applyChildPatch(e,t){return L(this.#e.instrumentation,`store.applyChildPatch`,()=>{let n=this.resolveActiveDirectoryNodeId(e.nodeId);if(n==null||It(this.#e,n)!==`loading`||!Bt(this.#e,n,e.attemptId))return!1;let r=K(this.#e,n);this.validateChildPatch(r,t);let i=Sr(this.#e),a=[];for(let e of t.operations){Yr(r,e);let t=Sr(this.#e);switch(e.type){case`add`:a.push(nn(this.#e,t,bn(this.#e,e.path)));break;case`remove`:a.push(nn(this.#e,t,xn(this.#e,e.path,{recursive:e.recursive})));break;case`move`:{let n=Sn(this.#e,e.from,e.to,{collision:e.collision});n!=null&&a.push(nn(this.#e,t,n));break}}}let o=a.some(e=>e.projectionChanged)||this.isDirectoryProjectionVisible(n);return G(this.#e,nn(this.#e,i,Qt({affectedAncestorIds:Dn(this.#e,n),affectedNodeIds:[n],attemptId:e.attemptId,childEvents:a,path:K(this.#e,n),projectionChanged:o}))),!0})}completeChildLoad(e){return L(this.#e.instrumentation,`store.completeChildLoad`,()=>{let t=this.resolveActiveDirectoryNodeId(e.nodeId);if(t==null)return!1;let n=Sr(this.#e),r=zt(this.#e,t,e.attemptId);return G(this.#e,nn(this.#e,n,$t({affectedAncestorIds:Dn(this.#e,t),affectedNodeIds:[t],attemptId:e.attemptId,path:K(this.#e,t),projectionChanged:this.isDirectoryProjectionVisible(t),stale:!r}))),r})}failChildLoad(e,t){return L(this.#e.instrumentation,`store.failChildLoad`,()=>{let n=this.resolveActiveDirectoryNodeId(e.nodeId);if(n==null)return!1;let r=Sr(this.#e),i=Vt(this.#e,n,e.attemptId,t);return G(this.#e,nn(this.#e,r,en({affectedAncestorIds:Dn(this.#e,n),affectedNodeIds:[n],attemptId:e.attemptId,errorMessage:t,path:K(this.#e,n),projectionChanged:this.isDirectoryProjectionVisible(n),stale:!i}))),i})}cleanup(e={}){return L(this.#e.instrumentation,`store.cleanup`,()=>{if(this.#e.transactionStack.length>0)throw Error(`Cleanup cannot run during an open batch or transaction.`);if(vr(this.#e))throw Error(`Cleanup cannot run while directory loads are active.`);let t=Sr(this.#e),n=yr(this.#e,e.mode??`stable`);return G(this.#e,nn(this.#e,t,tn({...n,affectedAncestorIds:[],affectedNodeIds:[],projectionChanged:n.idsPreserved===!1}))),n})}getNodeCount(){return this.#e.activeNodeCount}initializeExpandedPaths(e){if(e==null||e.length===0)return 0;let t=0,n=[],r=[],i=0,a=null,o=this.#e.snapshot.segmentTable,s=o.valueById,c=this.#e.snapshot.nodes,l=new Map;for(let u of e){a!=null&&u<a&&(a=null,i=0,n.length=0,r.length=0);let e=u.length>0&&u.charCodeAt(u.length-1)===47?u.length-1:u.length;if(e===0){a=u,i=e,n.length=0,r.length=0;continue}let d=0,f=0;if(a!=null){let t=Math.min(e,i),n=!0;for(let e=0;e<t;e+=1){let t=u.charCodeAt(e);if(t!==a.charCodeAt(e)){n=!1;break}t===47&&(d+=1,f=e+1)}n&&(t===i&&e>t&&u.charCodeAt(t)===47?(d+=1,f=t+1):t===e&&i>t&&a.charCodeAt(t)===47&&(d+=1,f=e+1)),d=Math.min(d,r.length)}let p=d===0?this.#e.snapshot.rootId:r[d-1]??this.#e.snapshot.rootId,m=d,h=!0,g=f;for(;g<=e;){let t=u.indexOf(`/`,g),i=t===-1||t>e?e:t,a=u.slice(g,i),f=q(this.#e,p).childIds,_=m===d?n[m]??0:0,v=_,y,b=l.get(a)??Fe(a);l.set(a,b);let x=(e,t)=>{for(v=e;v<t;v+=1){let e=f[v],t=c[e],n=s[t.nameId];if(n===a)return y=e,!0;let r=Be(Pe(o,t.nameId),b);if(r>0||r===0&&n>a)return!1}return!1};if(!x(_,f.length)&&_>0&&x(0,_),y===void 0){h=!1;break}if(!F(J(this.#e,y))){h=!1;break}if(n[m]=v,r[m]=y,p=y,m+=1,i===e)break;g=i+1}if(a=u,i=e,n.length=m,r.length=m,!h){a=null,i=0,n.length=0,r.length=0;continue}for(let e=d;e<m;e+=1){let n=r[e];if(n==null)continue;let i=J(this.#e,n);Nt(this.#e,n,i)||(Pt(this.#e,n,!0,i),t+=1)}}return t}hasAllDirectoriesExpanded(){for(let e of this.#e.snapshot.directories.keys()){if(e===this.#e.snapshot.rootId)continue;let t=J(this.#e,e);if(!Nt(this.#e,e,t))return!1}return!0}requireDirectoryNodeId(e){let t=On(this.#e,e);if(t==null)throw Error(`Path does not exist: "${e}"`);if(!F(J(this.#e,t)))throw Error(`Path is not a directory: "${e}"`);return t}resolveActiveDirectoryNodeId(e){try{if(!F(J(this.#e,e)))throw Error(`Node is not a directory: ${String(e)}`);return e}catch{return null}}isDirectoryProjectionVisible(e){let t=e;for(;t!==this.#e.snapshot.rootId;){let e=J(this.#e,t).parentId;if(e!==this.#e.snapshot.rootId){let n=J(this.#e,e),r=hn(this.#e,e);if(!Nt(this.#e,e,n)&&r!==t)return!1}t=e}return!0}validateChildPatch(t,n){new e({paths:this.list(t),presorted:!0,sort:this.#e.snapshot.options.sort}).batch(n.operations)}}})))()}var Qr;function $r(){return($r=e((()=>{ut(),Qr=e=>e.startsWith(`f::`)?e.slice(3):e})))()}function ei(e){let t=e.lastIndexOf(`/`);return t<0?{parentPath:``,baseName:e}:{parentPath:e.slice(0,t),baseName:e.slice(t+1)}}function ti(e,t){return e===``?t:`${e}/${t}`}function ni({files:e,path:t,isFolder:n,nextBasename:r}){let i=Qr(t),a=r.trim();if(a.length===0)return{error:`Name cannot be empty.`};if(a.includes(`/`))return{error:`Name cannot include "/".`};let{parentPath:o,baseName:s}=ei(i);if(a===s)return{nextFiles:e,sourcePath:i,destinationPath:i,isFolder:n};let c=ti(o,a),l=Array(e.length),u=new Set;if(!n){let t=`${c}/`,r=!1;for(let n=0;n<e.length;n++){let a=e[n];if(a!==i&&a.startsWith(t))return{error:`"${c}" already exists.`};let o=a===i?c:a;if(u.has(o))return{error:`"${c}" already exists.`};u.add(o),l[n]=o,a===i&&(r=!0)}return r?{nextFiles:l,sourcePath:i,destinationPath:c,isFolder:n}:{error:`Could not find the selected file to rename.`}}let d=`${i}/`,f=`${c}/`,p=0;for(let t=0;t<e.length;t++){let n=e[t],r=n===i||n.startsWith(d);if(!r&&(n===c||n.startsWith(f)))return{error:`"${c}" already exists.`};let a=r?`${c}${n.slice(i.length)}`:n;if(u.has(a))return{error:`"${c}" already exists.`};u.add(a),l[t]=a,r&&p++}return p===0?{error:`Could not find the selected folder to rename.`}:{nextFiles:l,sourcePath:i,destinationPath:c,isFolder:n}}function ri(){return(ri=e((()=>{$r()})))()}function ii(e){return e.endsWith(`/`)}function ai(e){let t=e.endsWith(`/`)?e.slice(0,-1):e,n=t.lastIndexOf(`/`),r=n<0?t:t.slice(n+1);return e.endsWith(`/`)?`${r}/`:r}function oi(e){let t=[],n=new Set;for(let r of e)n.has(r)||(n.add(r),t.push(r));let r=new Set;for(let e of t.toSorted((e,t)=>e.length===t.length?e.localeCompare(t):e.length-t.length)){let t=(e.endsWith(`/`)?e.slice(0,-1):e).split(`/`),n=!1;for(let e=0;e<t.length-1;e+=1){let i=`${t.slice(0,e+1).join(`/`)}/`;if(r.has(i)){n=!0;break}}n||r.add(e)}return t.filter(e=>r.has(e))}function si(e,t){return t.includes(e)?oi(t):[e]}function ci(e,t){return e===t?!0:e==null||t==null?!1:e.kind===t.kind&&e.directoryPath===t.directoryPath&&e.flattenedSegmentPath===t.flattenedSegmentPath&&e.hoveredPath===t.hoveredPath}function li(e,t){return{draggedPaths:e,target:t}}function ui(e,t){if(t.kind!==`directory`||t.directoryPath==null)return!1;for(let n of e)if(ii(n)&&(t.directoryPath===n||t.directoryPath.startsWith(n)))return!0;return!1}function di(e,t){return t.kind===`root`||t.directoryPath==null?ai(e):t.directoryPath}function fi(e,t){let n=e.map(e=>{let n=di(e,t);return n===e?null:{from:e,to:n,type:`move`}}).filter(e=>e!=null);return n.length===0?null:{operations:n,result:{draggedPaths:e,operation:n.length===1?`move`:`batch`,target:t}}}function pi(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(e[n]!==t[n])return!1;return!0}function mi(e,t,n){let{paths:r,preparedInput:i}=e;if(i==null){if(r==null)throw Error(`FileTree requires paths or preparedInput`);return{paths:r,preparedInput:void 0}}let a=i.paths;if(r==null)return{paths:a,preparedInput:i};if(!pi(Xr.preparePaths(r,n==null?{}:{sort:n}),a))throw Error(`FileTree ${t} received paths and preparedInput for different path lists`);return{paths:a,preparedInput:i}}function hi(){return(hi=e((()=>{Zr()})))()}function gi(e){return e.operation===`add`||e.operation===`remove`||e.operation===`move`||e.operation===`batch`}function _i(e,t,n){if(e===t)return n;let r=t.endsWith(`/`)?t:`${t}/`;return e.startsWith(r)?`${n.endsWith(`/`)?n:`${n}/`}${e.slice(r.length)}`:e}function vi(e,t){if(e===t)return!0;let n=t.endsWith(`/`)?t:`${t}/`;return e.startsWith(n)}function yi(e,t,n=!1){if(e==null)return null;switch(t.operation){case`add`:case`expand`:case`collapse`:case`mark-directory-unloaded`:case`begin-child-load`:case`apply-child-patch`:case`complete-child-load`:case`fail-child-load`:case`cleanup`:return e;case`remove`:return vi(e,t.path)?n?e:null:e;case`move`:return _i(e,t.from,t.to);case`batch`:{let r=e;for(let e of t.events)if(r=yi(r,e,n),r==null)return null;return r}}}function bi(e){return{canonicalChanged:e.canonicalChanged,projectionChanged:e.projectionChanged,visibleCountDelta:e.visibleCountDelta}}function xi(e){switch(e.operation){case`add`:return{...bi(e),operation:`add`,path:e.path};case`remove`:return{...bi(e),operation:`remove`,path:e.path,recursive:e.recursive};case`move`:return{...bi(e),from:e.from,operation:`move`,to:e.to}}}function Si(e){return{...bi(e),events:e.events.filter(e=>e.operation===`add`||e.operation===`remove`||e.operation===`move`).map(e=>xi(e)),operation:`batch`}}function Ci(e){switch(e.operation){case`add`:case`remove`:case`move`:return xi(e);case`batch`:return Si(e);default:return null}}function wi(e,t){if(e.size!==t.length)return!1;for(let n of t)if(!e.has(n))return!1;return!0}function Ti(e){let t=e.endsWith(`/`)?e.slice(0,-1):e;if(t.length===0)return[];let n=t.split(`/`);return n.slice(0,-1).map((e,t)=>`${n.slice(0,t+1).join(`/`)}/`)}function Ei(e){return Ti(e).at(-1)??null}function Di(e,t){return t==null?e:e.startsWith(t)?e.slice(t.length):e}function Oi(e){return e.endsWith(`/`)}var ki;function Ai(){return(Ai=e((()=>{ki=e=>e.toLowerCase()})))()}function ji(e){let t=e.endsWith(`/`)?e.slice(0,-1):e,n=t.lastIndexOf(`/`);return n<0?t:t.slice(n+1)}function Mi(e){return e.endsWith(`/`)?e.slice(0,-1):e}function Ni(e,t){return t&&!e.endsWith(`/`)?`${e}/`:e}var Pi;function Fi(){return(Fi=e((()=>{Pi=e=>{let t=e.trim();return t.length===0?``:(t.includes(`\\`)?t.replaceAll(`\\`,`/`):t).toLowerCase()}})))()}function Ii(e){return e===`top`||e===`center`?e:`nearest`}function Li(e,t,n){if(e===0)return-1;if(n!=null){let e=t(n);if(e!=null)return e;let r=Ti(n);for(let e=r.length-1;e>=0;--e){let n=r[e];if(n==null)continue;let i=t(n);if(i!=null)return i}}return 0}function Ri(e,t,n){if(e.paths.length===0)return{focusedIndex:-1,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};if(t==null)return{focusedIndex:0,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};let r=n??(t=>e.visibleIndexByPath.get(t)??null);return{focusedIndex:Li(e.paths.length,r,t),getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex}}var zi,Bi,Vi,Hi;function Ui(){return(Ui=e((()=>{Zr(),ri(),hi(),Ai(),Fi(),zi=Symbol(`FILE_TREE_RENAME_VIEW`),Bi=512,Vi=512,Hi=class{#e;#t=new Set;#n=new Map;#r=null;#i=null;#a=new Map;#o=new Map;#s=-1;#c=null;#l=!1;#u=e=>-1;#d=new Map;#f=null;#p=null;#m=null;#h=null;#g=null;#_;#v;#y;#b=[];#x=new Int32Array;#S=new Int32Array;#C=void 0;#w=!1;#T=null;#E=``;#D=!1;#O=new Set;#k=[];#A;#j=null;#M=null;#N=null;#P=null;#F=null;#I=null;#L=null;#R=0;#z=null;#B=new Set;#V=0;#H;#U=0;#W=!1;#G=0;#K;constructor(e){let{dragAndDrop:t,fileTreeSearchMode:n,initialSearchQuery:r,initialSelectedPaths:i,renaming:a,onSearchChange:o,paths:s,preparedInput:c,...l}=e,u=mi({paths:s,preparedInput:c},`constructor`,l.sort);this.#e=l,t!=null&&t!==!1&&(this.#r=t===!0?{}:t),this.#w=a!=null&&a!==!1,a!=null&&a!==!1&&a!==!0&&(this.#C=a.canRename,this.#v=a.onError,this.#_=a.onRename),this.#y=o,this.#A=n??`hide-non-matches`,this.#H=this.#le(u.paths,u.preparedInput);let d=i?.map(e=>this.#Ne(e)).filter(e=>e!=null)??[],f=d.at(-1)??null;d.length>0&&(this.#B=new Set(d),this.#z=f,this.#V=1),this.#je(f,!1),r!=null&&this.#Te(r,!1),this.#K=this.#Re()}destroy(){this.#K?.(),this.#K=null,this.#n.clear(),this.#t.clear(),this.#d.clear(),this.#i=null,this.#he()}focusFirstItem(){this.#be().length>0&&this.#Fe(0)}focusLastItem(){this.#G<=0||(this.#Ie(),this.#Fe(this.#G-1))}focusNextItem(){this.#Ae(1)}focusParentItem(){if(this.#c==null)return;let e=Ei(this.#c);if(e==null)return;let t=this.#Z(e);t>=0&&this.#Fe(t)}focusPath(e){let t=this.#H.getPathInfo(e)?.path??null;if(t==null)return;this.#Ie();let n=this.#Z(t);n>=0&&this.#Fe(n)}scrollToPath(e,t){let n=this.#H.getPathInfo(e)?.path??null;if(n==null)return;this.#Ie();let r=this.#xe(n);r<0||this.#Me(r)!=null&&(t?.focus!==!1&&this.#Fe(r,!1),this.#L={id:this.#R+=1,offset:Ii(t?.offset),visibleIndex:r},this.#De())}focusMountedPathFromInput(e){let t=this.#H.getPathInfo(e)?.path??null;if(t==null)return;let n=this.#Z(t);n>=0&&this.#Fe(n)}focusNearestPath(e){let t=this.resolveNearestVisiblePath(e);if(t==null)return null;let n=this.#Z(t);return n>=0?(this.#Fe(n),this.#be()[n]??t):null}focusPreviousItem(){this.#Ae(-1)}getFocusedIndex(){return this.#s}getFocusedItem(){return this.#c==null?null:this.#Q(this.#c)}getFocusedPath(){return this.#c}getScrollRequest(){return this.#L}clearScrollRequest(e){this.#L?.id===e&&(this.#L=null)}resolveNearestVisiblePath(e){let t=this.#be();if(this.#G===0)return null;if(e==null)return this.#c??t[0]??null;let n=this.#H.getPathInfo(e)?.path??e,r=this.#Z(n);return r>=0?t[r]??n:this.#X(n)??this.#c??t[0]??null}getSelectedPaths(){return[...this.#B]}getSelectionVersion(){return this.#V}getVisibleCount(){return this.#G}getVisibleRows(e,t){if(t<e||this.#G===0)return[];let n=Math.max(0,e),r=Math.min(this.#G-1,t);if(r<n)return[];let i=r-n+1;if(this.#F==null&&!this.#l&&r>=this.#b.length&&i<=Vi){let e=[];for(let t=n;t<=r;t+=1){let n=this.#H.getVisibleRowContext(t);if(n==null)break;e.push(this.#ee(n))}return e}if(!this.#l&&r>=this.#b.length&&this.#Ie(),this.#F!=null){let e=Array.from({length:r-n+1},(e,t)=>this.#Se(n+t)),t=new Map,i=e[0]??-1,a=i;for(let n=1;n<=e.length;n+=1){let r=e[n];if(r!=null&&r===a+1){a=r;continue}if(i>=0&&this.#H.getVisibleSlice(i,a).forEach((e,n)=>{t.set(i+n,e)}),r==null){i=-1,a=-1;continue}i=r,a=r}return Array.from({length:r-n+1},(e,r)=>{let i=n+r,a=this.#Se(i),o=t.get(a),s=this.#b[a];if(o==null||s==null)throw Error(`Missing projection row for filtered visible index ${String(i)}`);return this.#$(o,i,a,{ancestorPaths:this.#re(a),path:s})})}return this.#H.getVisibleSlice(n,r).map((e,t)=>{let r=n+t,i=this.#b[r];if(i==null)throw Error(`Missing projection path for visible index ${String(r)}`);return this.#$(e,r,r,{ancestorPaths:this.#re(r),path:i})})}getStickyRowCandidates(e,t){if(this.#F!=null)return null;if(this.#G===0||e<=0||t<=0)return[];let n=[];for(let r=0;r<this.#G;r+=1){let i=e+r*t,a=Math.min(this.#G-1,Math.floor(i/t)),o=this.#te(a,r)??(a>0?this.#te(a-1,r):void 0);if(o==null)break;n.push({row:this.#ee(o),subtreeEndIndex:o.subtreeEndIndex})}return n}getItem(e){let t=this.#H.getPathInfo(e);return t==null?null:this.#Q(t.path,t)}resolveMountedDirectoryPathFromInput(e){let t=this.#H.getPathInfo(e);return t?.kind===`directory`?t.path:null}toggleMountedDirectoryFromInput(e){let t=this.resolveMountedDirectoryPathFromInput(e);t!=null&&this.#ze(t)}selectAllVisiblePaths(){this.#Ie();let e=[...this.#be()];this.#ae(e,this.#c??this.#z)}selectOnlyPath(e){let t=this.#Ne(e);t!=null&&this.#ae([t],t)}selectOnlyMountedPathFromInput(e){this.#ae([e],e)}selectPath(e){let t=this.#Ne(e);t==null||this.#B.has(t)||this.#ae([...this.#B,t])}deselectPath(e){let t=this.#Ne(e);t!=null&&this.#B.has(t)&&this.#ae([...this.#B].filter(e=>e!==t))}toggleFocusedSelection(){this.#c!=null&&this.togglePathSelectionFromInput(this.#c)}togglePathSelection(e){let t=this.#Ne(e);if(t!=null){if(this.#B.has(t)){this.deselectPath(t);return}this.selectPath(t)}}togglePathSelectionFromInput(e){let t=this.#Ne(e);if(t!=null){if(this.#B.has(t)){this.#ae([...this.#B].filter(e=>e!==t),t);return}this.#ae([...this.#B,t],t)}}selectPathRange(e,t){let n=this.#Ne(e);if(n==null)return;this.#Ie();let r=this.#z,i=r==null?-1:this.#Ce(r),a=this.#Ce(n);if(i===-1||a===-1){let e=t?[...this.#B,n]:[n];this.#ae(e,n);return}let[o,s]=i<=a?[i,a]:[a,i],c=this.#be().slice(o,s+1),l=t?[...this.#B,...c]:c;this.#ae(l,r)}extendSelectionFromFocused(e){if(this.#c==null)return;let t=this.#s;if(t===-1)return;let n=Math.min(this.#G-1,Math.max(0,t+e));if(n===t)return;!this.#l&&n>=this.#b.length&&this.#Ie();let r=this.#be(),i=r[t]??null,a=r[n]??null;if(i==null||a==null)return;let o=new Set(this.#B);o.has(i)&&o.has(a)?o.delete(i):o.add(a),this.#ae([...o],this.#z??i,!1),this.#Fe(n)}getDragAndDropConfig(){return this.#r}isDragAndDropEnabled(){return this.#r!=null}getDragSession(){return this.#i==null?null:{draggedPaths:[...this.#i.draggedPaths],primaryPath:this.#i.primaryPath,target:this.#i.target==null?null:{...this.#i.target}}}startDrag(e){if(this.#r==null)return!1;let t=this.#Ne(e);if(t==null||this.#M!=null&&this.#M.length>0)return!1;let n=this.getSelectedPaths(),r=si(t,n);return this.#r.canDrag?.(r)!==!1&&(n.includes(t)||this.#ae([t],t,!1),this.#Pe(t),this.#i={draggedPaths:r,primaryPath:t,target:null},this.#De(),!0)}setDragTarget(e){let t=this.#i;if(t==null)return;let n=e;if(n!=null){let e=li(t.draggedPaths,n);(ui(t.draggedPaths,n)||this.#r?.canDrop?.(e)===!1)&&(n=null)}ci(t.target,n)||(this.#i={...t,target:n},this.#De())}cancelDrag(){this.#i!=null&&(this.#i=null,this.#De())}completeDrag(){let e=this.#i;if(e==null)return!1;this.#i=null;let t=e.target==null?null:{...e.target};if(t==null)return this.#De(),!1;let n=li(e.draggedPaths,t);if(ui(e.draggedPaths,t)||this.#r?.canDrop?.(n)===!1)return this.#De(),!1;let r=fi(e.draggedPaths,t);if(r==null)return this.#De(),!1;try{if(r.operations.length===1){let e=r.operations[0];if(e==null||e.type!==`move`)throw Error(`Expected a single move operation for one-item drops`);this.#H.move(e.from,e.to,{collision:e.collision})}else this.#ce(r.operations),this.#H.batch(r.operations)}catch(e){return this.#De(),this.#r?.onDropError?.(e instanceof Error?e.message:String(e),n),!1}return this.#r?.onDropComplete?.(r.result),!0}subscribe(e){return this.#t.add(e),e(),()=>{this.#t.delete(e)}}add(e){this.#H.add(e)}remove(e,t={}){this.#H.remove(e,t)}move(e,t,n={}){this.#H.move(e,t,n)}batch(e){this.#H.batch(e)}onMutation(e,t){let n=e,r=t,i=this.#n.get(n);return i??(i=new Set,this.#n.set(n,i)),i.add(r),()=>{let e=this.#n.get(n);e?.delete(r),e?.size===0&&this.#n.delete(n)}}setSearch(e){this.#Te(e,!0)}openSearch(e=``){this.#Te(e,!0)}closeSearch(){this.#Te(null,!0)}isSearchOpen(){return this.#M!==null}getSearchValue(){return this.#M??``}getSearchMatchingPaths(){return this.#k}focusNextSearchMatch(){this.#we(1)}focusPreviousSearchMatch(){this.#we(-1)}startRenaming(e=this.#c??``,t={}){if(!this.#w)return!1;let n=this.#H.getPathInfo(e);if(n==null)return!1;let r=n.path,i=Oi(r),a=Mi(r);if(this.#C?.({isFolder:i,path:a})===!1)return!1;for(let e of Ti(r))this.#H.isExpanded(e)||this.#H.expand(e);return this.#ae([r],r,!1),this.#M!=null&&(this.#Te(null,!1),this.#y?.(this.#M)),this.#Pe(r),this.#T=r,this.#E=ji(r),this.#D=t.removeIfCanceled??!1,this.#De(),!0}[zi](){return{cancel:()=>{this.#q()},commit:()=>{this.#J()},getPath:()=>this.#T,getValue:()=>this.#E,isActive:()=>this.#T!=null,setValue:e=>{this.#Y(e)}}}#q(){if(this.#T==null)return;let e=this.#T,t=this.#D;if(this.#T=null,this.#E=``,this.#D=!1,t){this.remove(e,Oi(e)?{recursive:!0}:void 0);return}this.#Pe(e),this.#De()}#J(){let e=this.#T;if(e==null)return;if(this.#D&&this.#E.trim().length===0){this.#T=null,this.#E=``,this.#D=!1,this.remove(e,Oi(e)?{recursive:!0}:void 0);return}let t=Oi(e),n=ni({files:this.#H.list(),isFolder:t,nextBasename:this.#E,path:Mi(e)});if(this.#T=null,this.#E=``,this.#D=!1,`error`in n){this.#Pe(e),this.#v?.(n.error),this.#De();return}if(n.sourcePath===n.destinationPath){this.#Pe(e),this.#De();return}this.#_?.({destinationPath:n.destinationPath,isFolder:n.isFolder,sourcePath:n.sourcePath}),this.move(Ni(n.sourcePath,t),Ni(n.destinationPath,t))}#Y(e){this.#T!=null&&this.#E!==e&&(this.#E=e,this.#De())}resetPaths(e,t={}){let n=this.#H.list().length,r=this.#G,i=mi({paths:e,preparedInput:t.preparedInput},`resetPaths`,this.#e.sort),a=this.#le(i.paths,i.preparedInput,t.initialExpandedPaths),o=this.#c,s=this.#T,c=this.getSelectedPaths(),l=this.#z;this.#K?.(),this.#H=a,this.#d.clear(),this.#he();let u=c.map(e=>a.getPathInfo(e)?.path??null).filter(e=>e!=null),d=!wi(this.#B,u);this.#B=new Set(u),d&&(this.#V+=1),this.#z=l==null?null:a.getPathInfo(l)?.path??null,this.#T=s==null?null:a.getPathInfo(s)?.path??null,this.#T??(this.#E=``,this.#D=!1),this.#je(o,o!=null||u.length>0||this.#z!=null),this.#K=this.#Re(),this.#De(),this.#Oe({canonicalChanged:!0,operation:`reset`,pathCountAfter:i.paths.length,pathCountBefore:n,projectionChanged:!0,usedPreparedInput:t.preparedInput!=null,visibleCountDelta:this.#G-r})}#X(e){this.#Ie();let t=Ei(e),n=Di(e,t),r=null,i=null;for(let e of this.#be()){if(Ei(e)!==t)continue;let a=Di(e,t);if(a<n){r=e;continue}if(a>n){i=e;break}}return r??i}#Z(e){let t=this.#Ce(e);if(t!==-1)return t;let n=Ti(e);for(let e=n.length-1;e>=0;--e){let t=n[e];if(t==null)continue;let r=this.#Ce(t);if(r!==-1)return r}return this.#be().length>0?0:-1}#Q(e,t){let n=this.#d.get(e);if(n!=null)return n;let r=t??this.#H.getPathInfo(e);if(r==null)return null;let i=r.kind===`directory`?this.#oe(r.path):this.#se(r.path);return this.#d.set(r.path,i),i}#$(e,t,n,r){return{ancestorPaths:r.ancestorPaths,depth:e.depth,flattenedSegments:e.flattenedSegments?.map(e=>({isTerminal:e.isTerminal,name:e.name,path:e.path})),hasChildren:e.hasChildren,index:t,isExpanded:e.isExpanded,isFlattened:e.isFlattened,isFocused:r.path===this.#c,isSelected:this.#B.has(r.path),kind:e.kind,level:e.depth,name:e.name,path:r.path,posInSet:r.posInSet??this.#x[n]??0,setSize:r.setSize??this.#S[n]??0}}#ee(e){return this.#$(e.row,e.index,e.index,{ancestorPaths:e.ancestorPaths,path:e.row.path,posInSet:e.posInSet,setSize:e.setSize})}#te(e,t){let n=this.#H.getVisibleRowContext(e);return n==null?void 0:n.ancestorRows[t]??(t===n.ancestorRows.length&&n.row.kind===`directory`&&n.row.isExpanded?n:void 0)}#ne(e){let t=this.#a.get(e);if(t!=null)return t;let n=this.#u(e),r=n<0?[]:[...this.#ne(n),n];return this.#a.set(e,r),r}#re(e){let t=this.#o.get(e);if(t!=null)return t;let n=this.#ne(e).map(e=>this.#b[e]??``).filter(e=>e!==``);return this.#o.set(e,n),n}#ie(e){this.#H.collapse(e)}#ae(e,t=this.#z,n=!0){let r=[...new Set(e)],i=!wi(this.#B,r),a=this.#z!==t;(i||a)&&(this.#B=new Set(r),this.#z=t,i&&(this.#V+=1),n&&this.#De())}#oe(e){return{collapse:()=>{this.#ie(e)},deselect:()=>{this.deselectPath(e)},expand:()=>{this.#ke(e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!0,isExpanded:()=>this.#H.isExpanded(e),isFocused:()=>this.#c===e,isSelected:()=>this.#B.has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)},toggle:()=>{this.#ze(e)}}}#se(e){return{deselect:()=>{this.deselectPath(e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!1,isFocused:()=>this.#c===e,isSelected:()=>this.#B.has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)}}}#ce(e){let t=this.#H.list();this.#le(t).batch(e)}#le(e,t,n){return new Xr({...this.#e,paths:e,preparedInput:t??void 0,...n===void 0?{}:{initialExpandedPaths:n}})}#ue(){return this.#h??=this.#H.list(),this.#h}#de(){if(this.#m!=null)return this.#m;let e=new Set;for(let t of this.#ue()){e.add(t);for(let n of Ti(t))e.add(n)}return this.#m=[...e].sort(),this.#m}#fe(){return this.#g??=this.#ue().map(ki),this.#g}#pe(){return this.#f??=this.#de().filter(e=>e.endsWith(`/`)),this.#f}#me(){return this.#p??=this.#pe().map(ki),this.#p}#he(){this.#f=null,this.#p=null,this.#m=null,this.#h=null,this.#g=null}#ge(){return this.#pe().filter(e=>this.#H.isExpanded(e))}#_e(e){let t=new Set(this.#j??[]);if(e)for(let e of this.#B)for(let n of Ti(e))t.add(n);this.#ve(t)}#ve(e){this.#W=!0;try{for(let t of this.#pe()){let n=e.has(t),r=this.#H.isExpanded(t);n&&!r?this.#H.expand(t):!n&&r&&this.#H.collapse(t)}}finally{this.#W=!1}}#ye(){if(this.#M==null||this.#M.length===0){this.#k=[],this.#F=null,this.#I=null,this.#P=null,this.#G=this.#U;return}let e=this.#b;if(this.#k=e.filter(e=>this.#O.has(e)),this.#A!==`hide-non-matches`||this.#O.size===0){this.#F=null,this.#I=null,this.#P=null,this.#G=this.#U;return}let t=[],n=[],r=new Map;for(let[i,a]of e.entries())this.#N?.has(a)===!0&&(r.set(a,n.length),t.push(i),n.push(a));this.#F=t,this.#I=n,this.#P=r,this.#G=n.length}#be(){return this.#I??this.#b}#xe(e){return this.#I==null?this.#H.getVisibleIndex(e)??-1:this.#P?.get(e)??-1}#Se(e){return this.#F?.[e]??e}#Ce(e){return this.#P?.get(e)??this.#H.getVisibleIndex(e)??-1}#we(e){let t=this.#k;if(t.length===0)return;let n=this.#c,r=n==null?-1:t.indexOf(n),i=t[r<0?e>0?0:t.length-1:Math.min(t.length-1,Math.max(0,r+e))];i!=null&&this.focusPath(i)}#Te(e,t){let n=e==null?null:Pi(e),r=this.#M;if(r!==n){if(r==null&&n!=null&&(this.#j=this.#ge()),this.#M=n,n==null)this.#_e(!0),this.#j=null,this.#O.clear(),this.#N=null,this.#je(this.#c,!0);else if(n.length===0)this.#_e(!1),this.#O.clear(),this.#N=null,this.#je(this.#c,!0);else{let e=this.#Ee();this.#je(e,!0)}t&&(this.#y?.(this.#M),this.#De())}}#Ee(){if(this.#M==null||this.#M.length===0)return this.#O.clear(),this.#c;let e=this.#M,t=this.#ue(),n=this.#fe(),r=[],i=new Set,a=null;for(let o=0;o<t.length;o+=1){if(!n[o].includes(e))continue;let s=t[o];r.push(s),i.add(s),a??=s}let o=this.#pe(),s=this.#me();for(let t=0;t<o.length;t+=1){if(!s[t].includes(e))continue;let n=o[t];i.has(n)||(r.push(n),i.add(n),a??=n)}this.#O=i;let c=this.#A===`hide-non-matches`&&r.length>0?new Set:null;this.#N=c;let l=this.#A===`expand-matches`?new Set(this.#j??[]):new Set;for(let e of r){c?.add(e),e.endsWith(`/`)&&l.add(e);for(let t of Ti(e))l.add(t),c?.add(t)}return this.#ve(l),a??this.#c}#De(){for(let e of this.#t)e()}#Oe(e){this.#n.get(e.operation)?.forEach(t=>{t(e)}),this.#n.get(`*`)?.forEach(t=>{t(e)})}#ke(e){for(let t of Ti(e))this.#H.isExpanded(t)||this.#H.expand(t);this.#H.isExpanded(e)||this.#H.expand(e)}#Ae(e){let t=this.#G;if(t===0)return;let n=this.#s===-1?0:this.#s,r=Math.min(t-1,Math.max(0,n+e));(r!==n||this.#s===-1)&&(!this.#l&&this.#F==null&&r>=this.#b.length&&this.#Ie(),this.#Fe(r))}#je(e,t=!0){let n=this.#H.getVisibleCount();this.#U=n;let r=Ri(this.#H.getVisibleTreeProjectionData(t?void 0:Math.min(n,Bi)),e,t?e=>this.#H.getVisibleIndex(e):void 0);this.#a.clear(),this.#o.clear(),this.#l=r.paths.length>=n,this.#u=r.getParentIndex,this.#b=r.paths,this.#x=r.posInSetByIndex,this.#S=r.setSizeByIndex,this.#ye(),this.#s=e==null?this.#be().length>0?0:-1:this.#Z(e),this.#c=this.#s<0?null:this.#Me(this.#s)}#Me(e){return this.#be()[e]??(this.#F==null?this.#H.getVisibleRowContext(e)?.row.path??null:null)}#Ne(e){return this.#H.getPathInfo(e)?.path??null}#Pe(e){if(e==null)return;let t=this.#Z(e);t>=0&&this.#Fe(t,!1)}#Fe(e,t=!0){let n=this.#Me(e);n!=null&&(this.#s!==e||this.#c!==n)&&(this.#s=e,this.#c=n,t&&this.#De())}#Ie(){this.#l||this.#je(this.#c,!0)}#Le(e){let t=yi(this.#T,e);t==null&&this.#T!=null&&(this.#E=``),this.#T=t;let n=yi(this.#c,e,!0),r=[...this.#B].map(t=>yi(t,e)).filter(e=>e!=null).map(e=>this.#H.getPathInfo(e)?.path??null).filter(e=>e!=null),i=yi(this.#z,e),a=i==null?null:this.#H.getPathInfo(i)?.path??null,o=[...new Set(r)];return wi(this.#B,o)||(this.#B=new Set(o),this.#V+=1),this.#z=a,n}#Re(){return this.#H.on(`*`,e=>{if(this.#W)return;e.canonicalChanged&&(this.#d.clear(),this.#he()),this.#i!=null&&gi(e)&&(this.#i=null);let t=gi(e)?this.#Le(e):this.#c,n=this.#M!=null&&this.#M.length>0?this.#Ee():this.#M===``?this.#c:t,r=this.#M!=null||e.operation!==`expand`&&e.operation!==`collapse`;this.#je(n,r),this.#De();let i=Ci(e);i!=null&&this.#Oe(i)})}#ze(e){if(this.#H.isExpanded(e)){this.#ie(e);return}this.#ke(e)}}})))()}var Wi;function Gi(){return(Gi=e((()=>{Wi=e=>{if(e==null||e.length===0)return`0`;let t=`${e.length}`;for(let n of e)t+=`\0${n.path}\0${n.status}`;return t}})))()}function Ki(e){let t=e.endsWith(`/`),n=``,r=-1;for(let t=0;t<=e.length;t+=1){if(e[t]!==`/`&&t!==e.length){r===-1&&(r=t);continue}r!==-1&&(n!==``&&(n+=`/`),n+=e.slice(r,t),r=-1)}return n===``?null:{isDirectory:t,path:n}}function qi(e){let t=e.endsWith(`/`)?e.slice(0,-1):e;if(t.length===0)return[];let n=t.split(`/`);return n.slice(0,-1).map((e,t)=>`${n.slice(0,t+1).join(`/`)}/`)}function Ji(e,t){return t?`${e}/`:e}function Yi(e,t=null){let n=Wi(e==null?void 0:[...e]);if(n===`0`)return null;if(t?.signature===n)return t;let r=new Map,i=new Set,a=new Set;for(let t of e??[]){let e=Ki(t.path);if(e==null)continue;let n=Ji(e.path,e.isDirectory);r.set(n,t.status),t.status===`ignored`&&e.isDirectory?a.add(n):e.isDirectory&&a.delete(n);for(let t of qi(e.path))i.add(t)}return{directoriesWithChanges:i,ignoredDirectoryPaths:a,signature:n,statusByPath:r}}function Xi(){return(Xi=e((()=>{Gi()})))()}function Zi(e){e&&e.parentNode&&e.remove()}function Qi(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`&&typeof e!=`function`?i=t[a]:o[a]=t[a];return arguments.length>2&&(o.children=arguments.length>3?Fa.call(arguments,2):n),$i(e,o,r,i,null)}function $i(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Ca,__i:-1,__u:0};return i==null&&Y.vnode!=null&&Y.vnode(a),a}function ea(e){return e.children}function ta(e,t){this.props=e,this.context=t,this.__g=0}function na(e,t){if(t==null)return e.__?na(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?na(e):null}function ra(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=n.__e;break}return ra(e)}}function ia(e){(8&e.__g||!(e.__g|=8)||!wa.push(e)||Ea++)&&Ta==Y.debounceRendering||((Ta=Y.debounceRendering)||queueMicrotask)(aa)}function aa(){for(var e,t,n,r,i,a,o,s,c=1;wa.length;)wa.length>c&&wa.sort(Da),e=wa.shift(),c=wa.length,8&e.__g&&(n=void 0,i=(r=(t=e).__v).__e,a=[],o=[],(s=t.__P)&&((n=Ia({},r)).__v=r.__v+1,Y.vnode&&Y.vnode(n),pa(s,n,r,t.__n,s.namespaceURI,32&r.__u?[i]:null,a,i??na(r),!!(32&r.__u),o,s.ownerDocument),n.__v=r.__v,n.__.__k[n.__i]=n,ha(a,n,o),n.__e!=i&&ra(n)));Ea=0}function oa(e,t,n,r,i,a,o,s,c,l,u,d){var f,p,m,h,g,_,v,y=r&&r.__k||Na,b=t.length;for(c=sa(n,t,y,c,b),f=0;f<b;f++)(m=n.__k[f])!=null&&(p=m.__i==-1?Ma:y[m.__i]||Ma,m.__i=f,_=pa(e,m,p,i,a,o,s,c,l,u,d),h=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&va(p.ref,null,m),u.push(m.ref,m.__c||h,m)),g==null&&h!=null&&(g=h),(v=!!(4&m.__u))||p.__k===m.__k?c=ca(m,c,e,v):typeof m.type==`function`&&_!==void 0?c=_:h&&(c=h.nextSibling),m.__u&=-7);return n.__e=g,c}function sa(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(c=a+f,(o=e.__k[a]=typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?$i(null,o,null,null,null):Pa(o)?$i(ea,{children:o},null,null,null):o.constructor==null&&o.__b>0?$i(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,s=null,(l=o.__i=la(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=na(s)),ya(s,s));return r}function ca(e,t,n,r){var i,a;if(typeof e.type==`function`){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=ca(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=na(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function la(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&!(2&l.__u);if(l===null&&e.key==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function ua(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n??``}function da(e,t,n,r,i){var a;n:if(t==`style`){if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||ua(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||ua(e.style,t,n[t])}}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(Oa,`$1`)),(t=t.slice(2))[0].toLowerCase()!=t[0]&&(t=t.toLowerCase()),e.__l||={},e.__l[t+a]=n,n?r?n.l=r.l:(n.l=ka,e.addEventListener(t,a?ja:Aa,a)):e.removeEventListener(t,a?ja:Aa,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function fa(e){return function(t){if(this.__l){var n=this.__l[t.type+e];if(t.u==null)t.u=ka++;else if(t.u<n.l)return;return n(Y.event?Y.event(t):t)}}}function pa(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_,v,y,b,x,S,C,ee,te,w,T,E,ne,D,re,O=t.type;if(t.constructor!=null)return null;128&n.__u&&(c=!!(32&n.__u),n.__c.__z&&(s=t.__e=n.__e=(a=n.__c.__z)[0],n.__c.__z=null)),(d=Y.__b)&&d(t);n:if(typeof O==`function`)try{if(v=t.props,y=`prototype`in O&&O.prototype.render,b=(d=O.contextType)&&r[d.__c],x=d?b?b.props.value:d.__:r,n.__c?2&(f=t.__c=n.__c).__g&&(f.__g|=1,_=!0):(y?t.__c=f=new O(v,x):(t.__c=f=new ta(v,x),f.constructor=O,f.render=ba),b&&b.sub(f),f.props=v,f.state||(f.state={}),f.context=x,f.__n=r,p=!0,f.__g|=8,f.__h=[],f._sb=[]),y&&f.__s==null&&(f.__s=f.state),y&&O.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=Ia({},f.__s)),Ia(f.__s,O.getDerivedStateFromProps(v,f.__s))),m=f.props,h=f.state,f.__v=t,p)y&&O.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),y&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(y&&O.getDerivedStateFromProps==null&&v!==m&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(v,x),!(4&f.__g)&&f.shouldComponentUpdate!=null&&!1===f.shouldComponentUpdate(v,f.__s,x)||t.__v==n.__v){for(t.__v!=n.__v&&(f.props=v,f.state=f.__s,f.__g&=-9),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),S=0;S<f._sb.length;S++)f.__h.push(f._sb[S]);f._sb=[],f.__h.length&&o.push(f);break n}f.componentWillUpdate!=null&&f.componentWillUpdate(v,f.__s,x),y&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(m,h,g)})}if(f.context=x,f.props=v,f.__P=e,f.__g&=-5,C=Y.__r,ee=0,y){for(f.state=f.__s,f.__g&=-9,C&&C(t),d=f.render(f.props,f.state,f.context),te=0;te<f._sb.length;te++)f.__h.push(f._sb[te]);f._sb=[]}else do f.__g&=-9,C&&C(t),d=f.render(f.props,f.state,f.context),f.state=f.__s;while(8&f.__g&&++ee<25);f.state=f.__s,f.getChildContext!=null&&(r=Ia({},r,f.getChildContext())),y&&!p&&f.getSnapshotBeforeUpdate!=null&&(g=f.getSnapshotBeforeUpdate(m,h)),w=d,d!=null&&d.type===ea&&d.key==null&&(w=ga(d.props.children)),s=oa(e,Pa(w)?w:[w],t,n,r,i,a,o,s,c,l,u),t.__u&=-161,f.__h.length&&o.push(f),_&&(f.__g&=-4)}catch(e){if(t.__v=null,c||a!=null){if(e.then){for(T=0,E=!1,t.__u|=c?160:128,t.__c.__z=[],ne=0;ne<a.length;ne++)(D=a[ne])==null||E||(D.nodeType==8&&D.data==`$s`?(T>0&&t.__c.__z.push(D),T++,a[ne]=null):D.nodeType==8&&D.data==`/$s`?(--T>0&&t.__c.__z.push(D),E=T===0,s=a[ne],a[ne]=null):T>0&&(t.__c.__z.push(D),a[ne]=null));if(!E){for(;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a[a.indexOf(s)]=null,t.__c.__z=[s]}t.__e=s}else{for(re=a.length;re--;)Zi(a[re]);ma(t)}}else t.__e=n.__e,t.__k=n.__k,e.then||ma(t);Y.__e(e,t,n)}else s=t.__e=_a(n.__e,t,n,r,i,a,o,c,l,u);return(d=Y.diffed)&&d(t),128&t.__u?void 0:s}function ma(e){e&&e.__c&&(e.__c.__g|=4),e&&e.__k&&e.__k.forEach(ma)}function ha(e,t,n){for(var r=0;r<n.length;r++)va(n[r],n[++r],n[++r]);Y.__c&&Y.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){Y.__e(e,t.__v)}})}function ga(e){return typeof e!=`object`||!e||e.__b&&e.__b>0?e:Pa(e)?e.map(ga):Ia({},e)}function _a(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v=n.props,y=t.props,b=t.type;if(b==`svg`?i=`http://www.w3.org/2000/svg`:b==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a!=null){for(u=0;u<a.length;u++)if((m=a[u])&&`setAttribute`in m==!!b&&(b?m.localName==b:m.nodeType==3)){e=m,a[u]=null;break}}if(e==null){if(b==null)return l.createTextNode(y);e=l.createElementNS(i,b,y.is&&y),s&&=(Y.__m&&Y.__m(t,a),!1),a=null}if(b==null)v===y||s&&e.data==y||(e.data=y);else{if(a&&=Fa.call(e.childNodes),v=n.props||Ma,!s&&a!=null)for(v={},u=0;u<e.attributes.length;u++)v[(m=e.attributes[u]).name]=m.value;for(u in v)if(m=v[u],u!=`children`){if(u==`dangerouslySetInnerHTML`)f=m;else if(!(u in y)){if(u==`value`&&`defaultValue`in y||u==`checked`&&`defaultChecked`in y)continue;da(e,u,null,m,i)}}for(u in _=1&n.__u,y)m=y[u],u==`children`?p=m:u==`dangerouslySetInnerHTML`?d=m:u==`value`?h=m:u==`checked`?g=m:s&&typeof m!=`function`||v[u]===m&&!_||da(e,u,m,v[u],i);if(d)s||f&&(d.__html==f.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(f&&(e.innerHTML=``),oa(b==`template`?e.content:e,Pa(p)?p:[p],t,n,r,b==`foreignObject`?`http://www.w3.org/1999/xhtml`:i,a,o,a?a[0]:n.__k&&na(n,0),s,c,l),a!=null)for(u=a.length;u--;)Zi(a[u]);s||(u=`value`,b==`progress`&&h==null?e.removeAttribute(`value`):h==null||h===e[u]&&(b!==`progress`||h)||da(e,u,h,v[u],i),u=`checked`,g!=null&&g!=e[u]&&da(e,u,g,v[u],i))}return e}function va(e,t,n){try{if(typeof e==`function`){var r=typeof e.__u==`function`;r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(e){Y.__e(e,n)}}function ya(e,t,n){var r,i;if(Y.unmount&&Y.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||va(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){Y.__e(e,t)}r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&ya(r[i],t,n||typeof e.type!=`function`);n||Zi(e.__e),e.__e&&e.__e.__l&&(e.__e.__l=null),e.__e=e.__c=e.__=null}function ba(e,t,n){return this.constructor(e,n)}function xa(e,t){var n,r,i,a;t==document&&(t=document.documentElement),Y.__&&Y.__(e,t),r=(n=!!(e&&32&e.__u))?null:t.__k,e=t.__k=Qi(ea,null,[e]),i=[],a=[],pa(t,e,r||Ma,Ma,t.namespaceURI,r?null:t.firstChild?Fa.call(t.childNodes):null,i,r?r.__e:t.firstChild,n,a,t.ownerDocument),ha(i,e,a)}function Sa(e,t){e.__u|=32,xa(e,t)}var Y,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia;function La(){return(La=e((()=>{Ma={},Na=[],Pa=Array.isArray,Fa=Na.slice,Ia=Object.assign,Y={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!(1&i.__g)){i.__g|=4;try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=8&i.__g),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=8&i.__g),o)return void(i.__g|=2)}catch(t){e=t}}throw Ea=0,e}},Ca=0,ta.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Ia({},this.state);typeof e==`function`&&(e=e(Ia({},n),this.props)),e&&Ia(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ia(this))},ta.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),ia(this))},ta.prototype.render=ea,wa=[],Ea=0,Da=function(e,t){return e.__v.__b-t.__v.__b},Oa=/(PointerCapture)$|Capture$/i,ka=0,Aa=fa(!1),ja=fa(!0)})))()}function X(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c&&typeof e!=`function`)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ra,__i:-1,__u:0,__source:i,__self:a};return Y.vnode&&Y.vnode(l),l}var Ra;function za(){return(za=e((()=>{La(),Ra=0,Array.isArray})))()}function Ba({name:e,remappedFrom:t,token:n,width:r,height:i,viewBox:a,label:o,alignCapitals:s=!1}){"use no memo";let c=`#${e.replace(/^#/,``)}`,{width:l,height:u,viewBox:d}=Ua[e]??{width:Va,height:Ha},f=r??l,p=i??u,m=a??d??`0 0 ${l} ${u}`;return X(`svg`,{"data-icon-name":t??e,"data-icon-token":n,"data-align-capitals":s,...o==null?{"aria-hidden":!0}:{"aria-label":o,role:`img`},viewBox:m,width:f,height:p,children:X(`use`,{href:c})})}var Va,Ha,Ua;function Wa(){return(Wa=e((()=>{za(),Va=16,Ha=16,Ua={}})))()}function Ga({children:e,marker:t,variant:n=`default`}){"use no memo";return X(`div`,{"aria-hidden":!0,"data-truncate-marker-cell":!0,children:X(`div`,{"data-truncate-marker":!0,children:typeof t==`function`?t({children:e}):n===`fade`?X(`span`,{"data-truncate-fade":!0}):t})})}function Ka(e){"use no memo";let{mode:t,children:n}=e;return X(`div`,{children:[X(`div`,{"data-truncate-content":`visible`,children:t===`fruncate`?X(`span`,{children:n}):n}),X(`div`,{"data-truncate-content":`overflow`,"aria-hidden":!0,children:t===`fruncate`?X(`span`,{children:n}):n})]})}function qa({children:e,mode:t=`truncate`,marker:n=`…`,variant:r=`default`,...i}){"use no memo";let a=X(Ka,{mode:t,children:e},`content`),o=X(Ga,{marker:n,mode:t,variant:r},`marker`),s=X(`div`,{"data-truncate-fill":!0},`fill`);return X(`div`,{"data-truncate-container":t,"data-truncate-variant":r,...i,children:X(`div`,{"data-truncate-grid":!0,children:t===`truncate`?[a,o]:[o,a,s]})})}function Ja({children:e,...t}){"use no memo";return X(qa,{mode:`truncate`,...t,children:e})}function Ya({children:e,...t}){"use no memo";return X(qa,{mode:`fruncate`,...t,children:e})}function Xa({children:e,contents:t,priority:n=`end`,split:r=`center`,minimumLength:i=12,className:a,style:o,...s}){"use no memo";let c=null,l=null;if(Array.isArray(t)){if(t.length!==2)return console.error(`MiddleTruncate: contents must be an array of two items`),null;c=X(Ja,{...s,children:t[0]}),l=X(Ya,{...s,children:t[1]})}else{if(typeof e!=`string`)return console.error(`MiddleTruncate: children must be a string`),null;if(e.length===0)return X(`div`,{className:a,style:o});if(e.length<i)return X(n===`end`?Ya:Ja,{...s,className:a,style:o,children:e});let t=null,u=null,d=null;if(typeof r==`string`)r===`center`?t=Za:r===`extension`?t=Qa:r===`leaf-path`&&(t=$a);else if(typeof r==`number`)t=eo,u=r;else if(Array.isArray(r)){let[e,n]=r;d=n,e===`last`?t=to:e===`first`&&(t=no)}else typeof r==`function`&&(t=r);t??=Za;let[f,p]=t(e,{priority:n,variant:s.variant,splitIndex:typeof u==`number`?u:void 0,splitOffset:typeof d==`number`?d:void 0}),m=f.length>=p.length,h=n===`equal`&&!m,g=n===`equal`&&m,_={},v={};h&&(_.marker=``),g&&(v.marker=``),c=X(Ja,{...s,..._,children:f}),l=X(Ya,{...s,...v,children:p})}return X(`div`,{"data-truncate-group-container":`middle`,className:a,style:o,children:[X(`div`,{"data-truncate-segment-priority":n===`start`||n===`equal`?`1`:`2`,children:c}),X(`div`,{"data-truncate-segment-priority":n===`end`||n===`equal`?`1`:`2`,children:l})]})}var Za,Qa,$a,eo,to,no;function ro(){return(ro=e((()=>{za(),Za=e=>{if(e.length<2)return[e,``];let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]},Qa=e=>{if(e.length<4)return[e,``];let t=e.lastIndexOf(`.`)+1,n=e.length-t>10,r=t>=1&&!n?t:Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]},$a=e=>{if(e.length<4)return[e,``];let t=e.lastIndexOf(`/`)+1,n=e.length-t>25,r=t>=1&&!n?t:Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]},eo=(e,{splitIndex:t}={})=>{if(typeof t!=`number`){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}return[e.slice(0,t),e.slice(t)]},to=(e,{splitOffset:t}={})=>{if(typeof t!=`number`||t<=0||t>=e.length){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}let n=e.length-t;return[e.slice(0,n),e.slice(n)]},no=(e,{splitOffset:t}={})=>{if(typeof t!=`number`||t<=0||t>=e.length){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}let n=t;return[e.slice(0,n),e.slice(n)]}})))()}function io(e,t,n){return Math.min(Math.max(e,t),n)}function ao(e,t){return e<0||t<e?go:{endIndex:t,startIndex:e}}function oo(e){return e.startIndex<0||e.endIndex<e.startIndex}function so(e,t){return oo(e)?0:(e.endIndex-e.startIndex+1)*t}function co(e,t,n){if(t<=0)return-1;let r=t*n;return e<=0?0:e>=r?t:Math.floor(e/n)}function lo(e,t,n){return t<=0||e<=0?-1:e>=t*n?t-1:Math.ceil(e/n)-1}function uo(e){let t=new Map;return e.forEach((e,n)=>{if(e.kind!==`directory`||!e.isExpanded)return;let r=e.ancestorPaths.length,i=t.get(r);if(i==null){t.set(r,[n]);return}i.push(n)}),t}function fo(e,t){let n=0,r=e.length-1,i=-1;for(;n<=r;){let a=Math.floor((n+r)/2),o=e[a];if(o==null)break;if(o<=t){i=a,n=a+1;continue}r=a-1}return i}function po(e){let t=new Map,n=[];for(let r=0;r<e.length;r+=1){let i=e[r];if(i==null)continue;let a=i.kind===`directory`&&i.isExpanded?[...i.ancestorPaths,i.path]:i.ancestorPaths,o=0;for(;o<n.length&&o<a.length&&n[o]===a[o];)o+=1;for(let e=n.length-1;e>=o;--e){let i=n[e];i!=null&&t.set(i,r-1)}n.length=o;for(let e=o;e<a.length;e+=1){let t=a[e];t!=null&&n.push(t)}}let r=e.length-1;for(let e of n)t.set(e,r);return t}function mo(e,t,n){if(e.length===0||t<=0)return[];let r=po(e),i=uo(e),a=[];for(let r=0;r<e.length;r+=1){let o=i.get(r);if(o==null||o.length===0)break;let s=t+r*n,c=fo(o,Math.min(e.length-1,Math.floor(s/n))),l=null;for(;c>=0;){let t=o[c],n=t==null?null:e[t]??null;if(n!=null&&(r===0||n.ancestorPaths[r-1]===a[r-1]?.path)){l=n;break}--c}if(l==null)break;a.push(l)}return a.map((i,a)=>{let o=a*n,s=(r.get(i.path)??e.length-1)+1;if(s>=e.length)return{row:i,top:o};let c=s*n-t;return{row:i,top:Math.min(o,c-n)}}).filter(e=>e.top+n>0)}function ho(e,t){let n=t.totalRowCount??e.length,r=n*t.itemHeight,i=Math.max(0,t.viewportHeight),a=Math.max(0,Math.floor(t.overscan)),o=Math.max(0,r-i),s=io(t.scrollTop,0,o),c=t.stickyRows??mo(e,s,t.itemHeight),l=c.reduce((e,n)=>Math.max(e,n.top+t.itemHeight),0),u=Math.min(r,s+l),d=Math.max(0,i-l),f=Math.max(0,r-u),p=co(s,n,t.itemHeight),m=co(u,n,t.itemHeight),h=l<=0||p<0||p>=n?-1:p,g=h===-1?-1:Math.min(n-1,m-1),_=h===-1||g<h?0:g-h+1,v=d<=0||m>=n?go:ao(m,lo(u+d,n,t.itemHeight)),y=g+1,b=oo(v)?go:ao(Math.max(y,v.startIndex-a),Math.min(n-1,v.endIndex+a)),x=so(b,t.itemHeight);return{occlusion:{firstOccludedIndex:h,lastOccludedIndex:g,occludedCount:_},physical:{itemHeight:t.itemHeight,maxScrollTop:o,overscan:a,scrollTop:s,totalHeight:r,totalRowCount:n,viewportHeight:i},projected:{contentHeight:f,paneHeight:d,paneTop:u},sticky:{height:l,rows:c},visible:v,window:{endIndex:b.endIndex,height:x,offsetTop:oo(b)?0:b.startIndex*t.itemHeight,startIndex:b.startIndex}}}var go;function _o(){return(_o=e((()=>{go={endIndex:-1,startIndex:-1}})))()}var vo,yo,bo;function xo(){return(xo=e((()=>{vo={added:`A`,deleted:`D`,ignored:null,modified:`M`,renamed:`R`,untracked:`U`},yo={added:`Git status: added`,deleted:`Git status: deleted`,ignored:`Git status: ignored`,modified:`Git status: modified`,renamed:`Git status: renamed`,untracked:`Git status: untracked`},bo=`Contains git status items`})))()}function So(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:i=0,viewportHeight:a}=e;if(n<0)return null;let o=Math.max(0,i),s=n*r,c=s+r;if(s<t+o){let e=Math.max(0,s-o);return e===t?null:e}if(c>t+a){let e=c-a;return e===t?null:e}return null}function Co(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,offset:i,topInset:a=0,totalHeight:o,viewportHeight:s}=e;if(i===`nearest`)return So({currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:a,viewportHeight:s});if(n<0)return null;let c=Math.max(0,a),l=n*r,u=Math.max(0,s-c),d=i===`center`?c+Math.max(0,(u-r)/2):c,f=Math.max(0,o-s),p=Math.max(0,Math.min(l-d,f));return p===t?null:p}function wo(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,targetViewportOffset:i,totalHeight:a,viewportHeight:o}=e;if(n<0)return null;let s=Math.max(0,i),c=n*r,l=c+r,u=t+s,d=t+o;if(c>=u&&l<=d)return null;let f=Math.max(0,a-o),p=Math.max(0,Math.min(c-s,f));return p===t?null:p}function To(e){if(e==null||!e.isConnected||e===document.body||e===document.documentElement)return!1;e.focus({preventScroll:!0});let t=e.getRootNode();return t instanceof ShadowRoot?t.activeElement===e:document.activeElement===e}function Eo(e){let t=e.getRootNode();if(t instanceof ShadowRoot){let e=t.activeElement;return e instanceof HTMLElement?e:null}let n=document.activeElement;return n instanceof HTMLElement&&e.contains(n)?n:null}function Do(e,t){if(e==null)return t;let n=e.getBoundingClientRect().height;return n>0?n:e.clientHeight>0?e.clientHeight:t}function Oo(e,t){return e!=null&&e>0?e:t}function ko(e){let t=e.borderBoxSize,n=Array.isArray(t)?t[0]:t;return n!=null&&Number.isFinite(n.blockSize)&&n.blockSize>0?n.blockSize:e.contentRect.height>0?e.contentRect.height:null}function Ao(e,t,n,r,i=0){let a=So({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,topInset:i,viewportHeight:r});return a!=null&&(e.scrollTop=a,!0)}function jo(e,t,n,r,i,a,o=0){let s=Co({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,offset:a,topInset:o,totalHeight:i,viewportHeight:r});return s!=null&&(e.scrollTop=s,!0)}function Mo(e,t,n,r,i,a){let o=wo({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,targetViewportOffset:a,totalHeight:i,viewportHeight:r});return o!=null&&(e.scrollTop=o,!0)}function No(e,t,n,r){return n.end<n.start?null:e<n.start?-t:e>n.end?r:null}function Po(){return(Po=e((()=>{})))()}function Fo(e){let{renamingPath:t,previousRenamingPath:n,hasRenderedInput:r}=e;return t==null?`reset`:r?n===t?`ignore`:`focus-input`:`reveal-canonical`}function Io({ariaLabel:e,isFlattened:t=!1,ref:n,value:r,onBlur:i,onInput:a}){return X(`input`,{ref:n,"data-item-rename-input":!0,...t?{"data-item-flattened-rename-input":!0}:{},"aria-label":e,value:r,onBlur:i,onInput:a,onClick:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation()})}function Lo(){return(Lo=e((()=>{za()})))()}function Ro(e){let{row:t,mode:n,targetPath:r,ariaLabel:i,domId:a,isParked:o,itemHeight:s,features:c,state:l,extraStyle:u}=e,d=n===`sticky`,f=t.ancestorPaths.at(-1)??``,p={};return l.isFocusRinged&&(p[`data-item-focused`]=!0),t.isSelected&&(p[`data-item-selected`]=!0),l.isContextHovered&&(p[`data-item-context-hover`]=`true`),l.isDragTarget&&(p[`data-item-drag-target`]=!0),l.isDragging&&(p[`data-item-dragging`]=!0),l.effectiveGitStatus!=null&&(p[`data-item-git-status`]=l.effectiveGitStatus),l.containsGitChange&&(p[`data-item-contains-git-change`]=`true`),{"aria-expanded":!d&&t.kind===`directory`?t.isExpanded:void 0,"aria-haspopup":c.contextMenuEnabled?`menu`:void 0,"aria-label":i,"aria-level":d?void 0:t.level+1,"aria-posinset":d?void 0:t.posInSet+1,"aria-selected":d?void 0:t.isSelected?`true`:`false`,"aria-setsize":d?void 0:t.setSize,"data-file-tree-sticky-path":d?r:void 0,"data-file-tree-sticky-row":d?`true`:void 0,"data-item-context-menu-button-visibility":c.actionLaneEnabled?c.contextMenuButtonVisibility:void 0,"data-item-context-menu-trigger-mode":c.contextMenuEnabled?c.contextMenuTriggerMode:void 0,"data-item-has-context-menu-action-lane":c.actionLaneEnabled?`true`:void 0,"data-item-has-git-lane":c.gitLaneActive?`true`:void 0,"data-item-parent-path":f.length>0?f:void 0,"data-item-parked":o?`true`:void 0,"data-item-path":r,"data-item-type":t.kind===`directory`?`folder`:`file`,"data-type":`item`,id:d?void 0:a,role:d?void 0:`treeitem`,style:{minHeight:`${s}px`,...u},tabIndex:!d&&t.isFocused?0:-1,...p}}function zo(e){let{event:t,mode:n,isSearchOpen:r,isDirectory:i}=e,a=t.ctrlKey||t.metaKey,o=t.shiftKey||a,s=t.shiftKey?{additive:a,kind:`range`}:a?{kind:`toggle`}:{kind:`single`};return{closeSearch:r,revealCanonical:n===`sticky`,selection:s,toggleDirectory:!o&&i}}function Bo(e,t){$.__h&&$.__h(Q,e,rs||t),rs=0;var n=Q.__H||(Q.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Vo(e){return rs=1,Ho(Qo,e)}function Ho(e,t,n){var r=Bo($o++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Qo(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);ns(t,n)||(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=Q,!Q.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=r.__c.__H.__.filter(function(e){return!!e.__c});if(i.every(function(e){return!e.__N}))return!a||a.call(this,e,t,n);var o=r.__c.props!==e;return i.forEach(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,ns(t,e.__[0])||(o=!0)}}),a&&a.call(this,e,t,n)||o};Q.__f=!0;var a=Q.shouldComponentUpdate,o=Q.componentWillUpdate;Q.componentWillUpdate=function(e,t,n){if(4&this.__g){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},Q.shouldComponentUpdate=i}return r.__N||r.__}function Uo(e,t){var n=Bo($o++,3);!$.__s&&Zo(n.__H,t)&&(n.__=e,n.u=t,Q.__H.__h.push(n))}function Wo(e,t){var n=Bo($o++,4);!$.__s&&Zo(n.__H,t)&&(n.__=e,n.u=t,Q.__h.push(n))}function Z(e){return rs=5,Go(function(){return{current:e}},[])}function Go(e,t){var n=Bo($o++,7);return Zo(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Ko(e,t){return rs=8,Go(function(){return e},t)}function qo(){for(var e;e=is.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Yo),e.__H.__h.forEach(Xo),e.__H.__h=[]}catch(t){e.__H.__h=[],$.__e(t,e.__v)}}function Jo(e){var t,n=function(){clearTimeout(r),ds&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);ds&&(t=requestAnimationFrame(n))}function Yo(e){var t=Q,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),Q=t}function Xo(e){var t=Q;e.__c=e.__(),Q=t}function Zo(e,t){return!e||e.length!==t.length||t.some(function(t,n){return!ns(t,e[n])})}function Qo(e,t){return typeof t==`function`?t(e):t}var $o,Q,es,ts,ns,rs,is,$,as,os,ss,cs,ls,us,ds;function fs(){return(fs=e((()=>{La(),ns=Object.is,rs=0,is=[],$=Y,as=$.__b,os=$.__r,ss=$.diffed,cs=$.__c,ls=$.unmount,us=$.__,$.__b=function(e){Q=null,as&&as(e)},$.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),us&&us(e,t)},$.__r=function(e){os&&os(e),$o=0;var t=(Q=e.__c).__H;t&&(es===Q?(t.__h=[],Q.__h=[],t.__.forEach(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.forEach(Yo),t.__h.forEach(Xo),t.__h=[],$o=0)),es=Q},$.diffed=function(e){ss&&ss(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(is.push(t)!==1&&ts===$.requestAnimationFrame||((ts=$.requestAnimationFrame)||Jo)(qo)),t.__H.__.forEach(function(e){e.u&&(e.__H=e.u),e.u=void 0})),es=Q=null},$.__c=function(e,t){t.some(function(e){try{e.__h.forEach(Yo),e.__h=e.__h.filter(function(e){return!e.__||Xo(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],$.__e(n,e.__v)}}),cs&&cs(e,t)},$.unmount=function(e){ls&&ls(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(e){try{Yo(e)}catch(e){t=e}}),n.__H=void 0,t&&$.__e(t,n.__v))},ds=typeof requestAnimationFrame==`function`})))()}function ps(e,t=null,n=null){"use no memo";let r=e.flattenedSegments;return r==null||r.length===0?t??e.name:X(`span`,{"data-item-flattened-subitems":!0,children:r.map((e,i)=>{let a=i===r.length-1;return X(ea,{children:[X(`span`,{"data-item-flattened-subitem":e.path,"data-item-flattened-subitem-drag-target":n===e.path?`true`:void 0,children:a&&t!=null?t:X(Ja,{children:e.name})}),i<r.length-1?` / `:``]},e.path)})})}function ms(e){return e.isFlattened?e.flattenedSegments?.findLast(e=>e.isTerminal)?.path??e.path:e.path}function hs(e){let t=e.flattenedSegments;return t==null||t.length===0?e.name:t.map(e=>e.name).join(` / `)}function gs(e,t,n,r){return e.map((e,i)=>{let a=i*n,o=e.subtreeEndIndex+1;if(o>=r)return{row:e.row,top:a};let s=o*n-t;return{row:e.row,top:Math.min(a,s-n)}}).filter(e=>e.top+n>0)}function _s({controller:e,itemHeight:t,overscan:n,scrollTop:r,stickyFolders:i,viewportHeight:a}){let o=e.getVisibleCount(),s=i&&o>0?e.getStickyRowCandidates(r,t):[],c=s==null&&i&&o>0?e.getVisibleRows(0,o-1):[],l=ho(c,{itemHeight:t,overscan:n,scrollTop:r,stickyRows:s==null?void 0:gs(s,r,t,o),totalRowCount:o,viewportHeight:a}),u=i&&r<=0&&o>0?e.getStickyRowCandidates(1,t):[],d=u!=null&&r<=0?gs(u,1,t,o):i&&r<=0&&c.length>0?mo(c,1,t):l.sticky.rows;return{overlayHeight:d.reduce((e,n)=>Math.max(e,n.top+t),0),overlayRows:d,snapshot:l,visibleRows:c}}function vs(e,t,n){let r=e,i=document.elementFromPoint?.bind(document)??null,a=r.elementFromPoint?.(t,n)??i?.(t,n)??null;return e instanceof ShadowRoot&&(a==null||!e.contains(a))?ys(e,t,n):a instanceof HTMLElement?a:null}function ys(e,t,n){let r=Array.from(e.querySelectorAll(`[data-type="item"], [data-item-flattened-subitem]`));for(let e=r.length-1;e>=0;e--){let i=r[e],a=i.getBoundingClientRect();if(t>=a.left&&t<=a.right&&n>=a.top&&n<=a.bottom)return i}return null}function bs(e){let t=e?.closest?.(`[data-type="item"]`);if(!(t instanceof HTMLElement))return null;let n=t.dataset.itemPath??null;if(n==null)return null;let r=e?.closest?.(`[data-item-flattened-subitem]`),i=r instanceof HTMLElement?r.getAttribute(`data-item-flattened-subitem`)??null:null;if(i!=null&&i.endsWith(`/`))return{directoryPath:i,flattenedSegmentPath:i,hoveredPath:n,kind:`directory`};if(t.dataset.itemType===`folder`)return{directoryPath:n,flattenedSegmentPath:null,hoveredPath:n,kind:`directory`};let a=t.dataset.itemParentPath??null;return a==null||a.length===0?{directoryPath:null,flattenedSegmentPath:null,hoveredPath:n,kind:`root`}:{directoryPath:a,flattenedSegmentPath:null,hoveredPath:n,kind:`directory`}}function xs(e){let t=e.cloneNode(!0);return t.removeAttribute(`id`),t.dataset.fileTreeDragPreview=`true`,t.setAttribute(`aria-hidden`,`true`),t.tabIndex=-1,Object.assign(t.style,{boxShadow:`0 4px 12px rgba(0, 0, 0, 0.15)`,left:`0px`,margin:`0`,pointerEvents:`none`,position:`fixed`,top:`0px`,willChange:`transform`,zIndex:`10000`}),t}function Ss(){return navigator.vendor!==`Apple Computer, Inc.`}function Cs(e,t){let n=e-t.top;if(n<Qs)return-Math.ceil((Qs-Math.max(0,n))/Qs*$s);let r=t.bottom-e;return r<Qs?Math.ceil((Qs-Math.max(0,r))/Qs*$s):0}function ws(e,t){if(e!=null){let t=vo[e];return t==null?null:{text:t,title:yo[e]}}return t?{icon:{name:`file-tree-icon-dot`,width:6,height:6},title:bo}:null}function Ts(e,t,n){if(t==null||t.size===0)return null;let r=[];for(let i=e.length-1;i>=0;--i){let a=e[i],o=n.get(a);if(o!=null){for(let e of r)n.set(e,o);return o?`ignored`:null}if(t.has(a)){n.set(a,!0);for(let e of r)n.set(e,!0);return`ignored`}r.push(a)}for(let e of r)n.set(e,!1);return null}function Es(e){return e!=null&&`toggle`in e}function Ds(e){return e.code===`Space`||e.key===` `||e.key===`Spacebar`}function Os(e){return e.key.length===1&&/^[\p{L}\p{N}]$/u.test(e.key)&&!e.ctrlKey&&!e.metaKey&&!e.altKey}function ks(e){return e==null?``:`[data-item-section="spacing-item"][data-ancestor-path="${e.replaceAll(`\\`,`\\\\`).replaceAll(`"`,`\\"`)}"] { opacity: 1; }`}function As(e){return e.shiftKey&&e.key===`F10`||e.key===`ContextMenu`}function js(e,t){return t&&As(e)||(e.ctrlKey||e.metaKey)&&Ds(e)?!0:e.key===`ArrowDown`||e.key===`ArrowLeft`||e.key===`ArrowRight`||e.key===`ArrowUp`}function Ms(e){for(let t of e.composedPath())if(t instanceof HTMLElement&&(t.dataset.fileTreeContextMenuRoot===`true`||t.dataset.type===`context-menu-anchor`||t.dataset.type===`context-menu-trigger`||t.getAttribute(`slot`)===`context-menu`))return!0;return!1}function Ns(e){return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width,x:e.x,y:e.y}}function Ps(e,t){return{bottom:t,height:0,left:e,right:e,top:t,width:0,x:e,y:t}}function Fs(e,t){if(e==null)return t.offsetTop;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect();return n.top-r.top}function Is(e,t,n){if(n==null){e.delete(t);return}e.set(t,n)}function Ls(e,t,n){if(e==null)return null;let r=t.get(e)??null;if(r!=null)return r;let i=n.get(e)??null;return i?.dataset.itemParked===`true`?null:i}function Rs(e){if(e==null)return[];let t=[];for(let n of e.querySelectorAll(`button[data-file-tree-sticky-row="true"]`)){if(!(n instanceof HTMLElement))continue;let e=n.dataset.fileTreeStickyPath;e!=null&&t.push(e)}return t}function zs(e,t){if(e==null||t==null)return null;for(let n of e.querySelectorAll(`button[data-item-focused="true"][data-item-parked="true"]`))if(n instanceof HTMLElement&&n.dataset.itemPath===t)return n;return null}function Bs(e,t,n,r,i,a,o){let s=Math.max(0,a-i),c=t?.getBoundingClientRect()??null,l=c==null||n==null?null:n.getBoundingClientRect().top-c.top,u=zs(e,r),d=c==null||u==null?null:u.getBoundingClientRect().top-c.top;return Math.max(0,Math.min(d??Math.max(l??0,s),Math.max(0,o-i)))}function Vs(e,t){return{kind:e.kind,name:hs(e),path:t}}function Hs(e){return e==null?void 0:`${e}__tree`}function Us(e,t,n){if(e!=null)return`${e}__focused-item-${encodeURIComponent(t)}${n?`__parked`:``}`}function Ws(e){return e===`file-tree-icon-chevron`||e===`file-tree-icon-dot`||e===`file-tree-icon-file`||e===`file-tree-icon-lock`}function Gs(e,t){if(e==null)return null;if(`text`in e)return X(`span`,{title:e.title,children:e.text});let n=typeof e.icon==`string`?Ws(e.icon)?t(e.icon):{name:e.icon}:Ws(e.icon.name)?(()=>{let n=t(e.icon.name),{name:r,...i}=e.icon;return{...n,...i}})():e.icon;return X(`span`,{title:e.title,children:X(Ba,{...n})})}function Ks(e){e!=null&&To(e.querySelector([`button:not([disabled])`,`[href]`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`].join(`, `))??e)}function qs(e,t,{actionLaneEnabled:n=!1,customDecoration:r=null,decorationLaneEnabled:i=!1,dragTargetFlattenedSegmentPath:a=null,gitDecoration:o=null,gitLaneActive:s=!1,renameInput:c=null,showDecorativeActionAffordance:l=!1}={}){let u=ms(e);return X(ea,{children:[e.depth>0?X(`div`,{"data-item-section":`spacing`,children:Array.from({length:e.depth}).map((t,n)=>X(`div`,{"data-item-section":`spacing-item`,"data-ancestor-path":e.ancestorPaths[n]},n))}):null,X(`div`,{"data-item-section":`icon`,children:e.kind===`directory`?X(Ba,{...t(`file-tree-icon-chevron`)}):X(Ba,{...t(`file-tree-icon-file`,u)})}),X(`div`,{"data-item-section":`content`,children:e.isFlattened?ps(e,c,a):c??X(Xa,{minimumLength:5,split:`extension`,children:e.name})}),i?X(`div`,{"data-item-section":`decoration`,children:r==null?null:Gs(r,t)}):null,s?X(`div`,{"data-item-section":`git`,children:Gs(o,t)}):null,n?X(`div`,{"data-item-section":`action`,children:l?X(`span`,{"aria-hidden":`true`,"data-item-action-affordance":`decorative`,children:X(Ba,{...t(`file-tree-icon-ellipsis`)})}):null}):null]})}function Js(e,t,n,r={}){let{controller:i,renameView:a,visualFocusPath:o,contextHoverPath:s,draggedPathSet:c,dragTarget:l,dragAndDropEnabled:u,shouldSuppressContextMenu:d,handleRowDragStart:f,handleRowDragEnd:p,handleRowTouchStart:m,instanceId:h,itemHeight:g,gitStatusByPath:_,ignoredGitDirectories:v,ignoredInheritanceCache:y,directoriesWithGitChanges:b,gitLaneActive:x,contextMenuEnabled:S,contextMenuTriggerMode:C,contextMenuButtonTriggerEnabled:ee,contextMenuButtonVisibility:te,contextMenuRightClickEnabled:w,registerRenameInput:T,registerButton:E,resolveIcon:ne,renderDecorationForRow:D,openContextMenuForRow:re,onRowClick:O,onKeyDown:ie}=e,k=ms(t),{isParked:ae=!1,mode:A=`flow`,style:oe}=r,se=A===`sticky`,ce=_?.get(k)??null??Ts(t.ancestorPaths,v,y),le=t.kind===`directory`&&(b?.has(k)??!1),ue=D(t,k),de=ws(ce,le),fe=S&&ee,j=ue!=null||x||fe,pe=fe&&te===`always`,me=a.getPath()===k,he=me?a.getValue():``,ge=se||!me?null:X(Io,{ref:T,ariaLabel:`Rename ${hs(t)}`,isFlattened:t.isFlattened,value:he,onBlur:()=>{a.commit()},onInput:e=>{a.setValue(e.currentTarget.value)}}),M=qs(t,ne,{actionLaneEnabled:fe,customDecoration:ue,decorationLaneEnabled:j,dragTargetFlattenedSegmentPath:l?.flattenedSegmentPath??null,gitDecoration:de,gitLaneActive:x,renameInput:ge,showDecorativeActionAffordance:pe}),_e={...Ro({ariaLabel:hs(t),domId:t.isFocused?Us(h,k,ae):void 0,extraStyle:oe,features:{actionLaneEnabled:fe,contextMenuButtonVisibility:fe?te:null,contextMenuEnabled:S,contextMenuTriggerMode:S?C:null,gitLaneActive:x},isParked:ae,itemHeight:g,mode:A,row:t,state:{containsGitChange:le,effectiveGitStatus:ce,isContextHovered:s===k,isDragTarget:l?.kind===`directory`&&l.directoryPath===k,isDragging:c?.has(k)===!0,isFocusRinged:t.isFocused&&o===k},targetPath:k}),key:n,onContextMenu:S||u?e=>{if(d()){e.preventDefault();return}S&&(e.preventDefault(),w&&(i.focusMountedPathFromInput(k),re(t,k,{anchorRect:Ps(e.clientX,e.clientY),source:`right-click`})))}:void 0,onFocus:se?void 0:()=>{i.focusMountedPathFromInput(k)},onKeyDown:se?void 0:ie,ref:e=>{E(k,e)}};return!se&&me?X(`div`,{..._e,children:M}):X(`button`,{..._e,type:`button`,draggable:u&&!ae,onDragEnd:u&&!ae?p:void 0,onDragStart:u&&!ae?e=>{f(e,t,k)}:void 0,onMouseDown:e=>{if(se){e.preventDefault();return}i.isSearchOpen()&&e.preventDefault()},onTouchStart:u&&!ae?e=>{m(e,t,k)}:void 0,onClick:e=>{O(e,t,k,A)},children:M})}function Ys(e,t,n){return t.end<t.start?[]:e.controller.getVisibleRows(t.start,t.end).filter(e=>!n.has(ms(e))).map((n,r)=>Js(e,n,t.start+r))}function Xs({composition:e,controller:t,gitStatusByPath:n,ignoredGitDirectories:r,directoriesWithGitChanges:i,icons:a,instanceId:o,itemHeight:s=mt,overscan:c=10,renamingEnabled:l=!1,renderRowDecoration:u,searchBlurBehavior:d=`close`,searchEnabled:f=!1,searchFakeFocus:p=!1,slotHost:m,stickyFolders:h=!1,initialViewportHeight:g=420}){"use no memo";let _=Z(null),v=Z(null),y=Z(!1),b=Z(null),x=Z(null),S=Z(null),C=Z(null),ee=Z(null),te=Z(new Map),w=Z(new Map),T=Z(()=>{}),E=Z(null),ne=Z(0),D=Z(!1),re=Z(null);re.current!==t&&(D.current=!1,re.current=t);let O=Z(!1),ie=Z(null),k=Z(null),ae=Z(!1),A=Z(null),oe=Z(null),se=Z(null),ce=Z(null),le=Z(null),ue=Z(null),de=Z(null),fe=Z(null),j=Z(!1),pe=Z(null),me=Z(null),he=Z(null),M=Z(null),_e=Go(()=>new Map,[]),[,N]=Vo(0),[ve,ye]=Vo(null),[be,P]=Vo(null),[xe,Se]=Vo(null),[F,Ce]=Vo(null),[we,Te]=Vo(0),[I,Ee]=Vo(null),L=Z(I);L.current=I;let De=Z(null),Oe=Z(null),ke=Z(null),Ae=Z(null),je=Z(null),Me=Z(!1),R=()=>{Oe.current=null,ke.current=null,Ae.current=null},Ne=(e,t)=>{Oe.current=e,ke.current=null,Ae.current=t==null?null:{path:e,scrollTop:t}},Pe=(e,t)=>{Oe.current=null,ke.current={path:e,viewportOffset:t},Ae.current=null},Fe=Z(d===`retain`&&t.isSearchOpen()),[Ie,Le]=Vo(p);Uo(()=>{p||Le(!1)},[p]);let Re=Z(!1),ze=Ko(()=>{Re.current=!0,Le(e=>e&&!1)},[]),[Be,Ve]=Vo(()=>_s({controller:t,itemHeight:s,overscan:c,scrollTop:0,stickyFolders:h,viewportHeight:g})),[z,He]=Vo(!1);Uo(()=>{He(!0)},[]);let B=e?.contextMenu?.enabled===!0||e?.contextMenu?.render!=null||e?.contextMenu?.onOpen!=null||e?.contextMenu?.onClose!=null,Ue=e?.contextMenu?.triggerMode??(B?`right-click`:`both`),We=Ue===`both`||Ue===`button`,Ge=e?.contextMenu?.buttonVisibility??`when-needed`,Ke=Ue===`both`||Ue===`right-click`;Wo(()=>{let e=S.current;if(e==null)return;let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail?.path??null;je.current=t,P(t),Ce(t==null?null:`pointer`)},n=e=>{e instanceof CustomEvent&&(Me.current=e.detail?.disabled===!0)};return e.addEventListener(`file-tree-debug-set-context-menu-trigger`,t),e.addEventListener(`file-tree-debug-set-scroll-suppression`,n),()=>{e.removeEventListener(`file-tree-debug-set-context-menu-trigger`,t),e.removeEventListener(`file-tree-debug-set-scroll-suppression`,n)}},[]);let qe=Ko((e,t)=>{Is(te.current,e,t)},[]),Je=Ko((e,t)=>{Is(w.current,e,t)},[]),Ye=Ko(e=>{x.current=e},[]),Xe=Ko(e=>Ls(e,w.current,te.current),[]),Ze=n!=null||r!=null||i!=null,{resolveIcon:Qe}=Go(()=>ge(a),[a]),$e=t[zi](),et=$e.getPath(),tt=et!=null,nt=t.isSearchOpen(),rt=t.getSearchValue(),V=t.getFocusedPath(),H=t.getFocusedIndex(),it=t.getScrollRequest(),at=t.isDragAndDropEnabled(),ot=t.getDragSession(),ut=Go(()=>ot==null?null:new Set(ot.draggedPaths),[ot]),dt=ot?.target??null,ft=ot?.primaryPath??null,pt=Hs(o),{overlayHeight:ht,overlayRows:gt,snapshot:U,visibleRows:_t}=Be,W=U.physical.viewportHeight,vt=Go(()=>({end:U.window.endIndex,start:U.window.startIndex}),[U.window.endIndex,U.window.startIndex]),yt=gt,bt=U.sticky.rows,xt=U.physical.totalHeight,St=U.sticky.height,Ct=Go(()=>new Set(bt.map(e=>ms(e.row))),[bt]),wt=H>=0&&H>=vt.start&&H<=vt.end,Tt=Ko((e,t)=>u?.({item:Vs(e,t),row:e})??null,[u]),Et=Ko(e=>To(e==null?null:te.current.get(e)??null)?!0:To(S.current),[]),Dt=Ko(e=>{Et(t.focusNearestPath(e))},[t,Et]),Ot=Z(Dt);Ot.current=Dt;let kt=Z(!0),At=Z(()=>{}),jt=Ko((t=!0)=>{let n=L.current;n!=null&&(kt.current=kt.current&&t,Ee(null),e?.contextMenu?.onClose?.(),kt.current&&Dt(n.path))},[e?.contextMenu,Dt]);At.current=jt;let Mt=Ko(e=>{let t=e==null?null:Fs(S.current,e);Se(e=>e===t?e:t)},[]),Nt=Ko((e,n,r)=>{let i=t.getItem(n);if(i==null)return;let a=Xe(n);if(a?.dataset.fileTreeStickyRow===`true`){let e=C.current;Ne(n,e?.scrollTop??null),O.current=!0,ye(e=>e===n?e:n)}i.focus(),Mt(a),kt.current=!0,Ee({anchorRect:r?.anchorRect??null,item:Vs(e,n),path:n,source:r?.source??`keyboard`})},[t,Xe,Mt]),Pt=Ko(e=>{if(l){if(t.isSearchOpen()){let e=C.current,t=Do(e,W);A.current=H<0||e==null?null:Math.max(0,Math.min(H*s-e.scrollTop,Math.max(0,t-s))),ae.current=!0}t.startRenaming(e)!==!1&&(Ce(`focus`),N(e=>e+1))}},[t,H,s,l,W]),Ft=Ko((e,{restoreTreeFocus:n=!0,targetOffset:r=`live-overlay`}={})=>{let i=C.current;if(i==null)return!1;t.focusPath(e);let a=t.getFocusedIndex();if(a<0)return!1;let o=t.getVisibleRows(a,a)[0]??null;if(o==null)return!1;let l=Do(i,W),u=t.getVisibleCount()*s,d=r===`sticky-parents`?o.ancestorPaths.length*s:_s({controller:t,itemHeight:s,overscan:c,scrollTop:i.scrollTop,stickyFolders:h,viewportHeight:l}).snapshot.sticky.height;return O.current=!0,Mo(i,a,s,l,u,d),T.current(),De.current=n?e:null,!0},[t,s,c,W,h]),It=()=>y.current===!0||M.current!=null||j.current===!0,Lt=e=>typeof window.requestAnimationFrame==`function`?window.requestAnimationFrame(()=>{e()}):window.setTimeout(e,16),Rt=e=>{if(e!=null){if(typeof window.cancelAnimationFrame==`function`){window.cancelAnimationFrame(e);return}window.clearTimeout(e)}},zt=()=>{ce.current!=null&&(clearTimeout(ce.current),ce.current=null),se.current=null},Bt=()=>{ue.current?.remove(),ue.current=null},Vt=()=>{Rt(oe.current),oe.current=null,le.current=null},Ht=e=>{let t=S.current?.getRootNode();if(t instanceof ShadowRoot){t.append(e);return}document.body.append(e)},Ut=()=>{fe.current?.(),fe.current=null,M.current!=null&&(clearTimeout(M.current),M.current=null),j.current=!1,pe.current=null,he.current=null,me.current!=null&&(me.current.setAttribute(`draggable`,`true`),me.current.style.removeProperty(`touch-action`),me.current=null),Bt(),zt(),Vt(),de.current=null},Wt=(e,n)=>{let r=S.current?.getRootNode(),i=bs(vs(r instanceof ShadowRoot?r:document,e,n));return t.setDragTarget(i),t.getDragSession()?.target??null},Gt=e=>{let n=t.getDragAndDropConfig()?.openOnDropDelay??800;if(e==null||e.kind!==`directory`||e.directoryPath==null||n<=0){zt();return}let r=t.getItem(e.directoryPath),i=Es(r)?r:null;if(i==null||i.isExpanded()){zt();return}let a=`${e.directoryPath}::${e.flattenedSegmentPath??``}`;se.current!==a&&(zt(),se.current=a,ce.current=setTimeout(()=>{let n=t.getDragSession()?.target;n?.kind===`directory`&&n.directoryPath===e.directoryPath&&n.flattenedSegmentPath===e.flattenedSegmentPath&&i.expand()},n))},Kt=()=>{oe.current=null;let e=le.current,n=C.current;if(e==null||n==null||t.getDragSession()==null)return;let r=n.getBoundingClientRect(),i=Cs(e.clientY,r);if(i===0)return;let a=Math.max(0,n.scrollHeight-n.clientHeight),o=Math.max(0,Math.min(a,n.scrollTop+i));o!==n.scrollTop&&(n.scrollTop=o,T.current()),Gt(Wt(e.clientX,e.clientY)),oe.current=Lt(Kt)},qt=(e,t)=>{le.current={clientX:e,clientY:t},oe.current??=Lt(Kt)},Jt=(e,n,r)=>{let i=e.currentTarget;if(i!=null){if(Ut(),Bt(),zt(),Vt(),t.startDrag(r)===!1){e.preventDefault();return}if(de.current=n,e.dataTransfer!=null&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.dropEffect=`move`,e.dataTransfer.setData(`text/plain`,r),Ss())){let t=xs(i),n=i.getBoundingClientRect();Object.assign(t.style,{height:`${n.height}px`,opacity:`0.85`,transform:`translate3d(-9999px, 0px, 0)`,width:`${n.width}px`}),Ht(t),ue.current=t,e.dataTransfer.setDragImage(t,Math.max(0,e.clientX-n.left),Math.max(0,e.clientY-n.top))}}},Yt=()=>{Bt(),zt(),Vt(),de.current=null,t.cancelDrag()},Xt=(e,n,r)=>{if(M.current!=null||j.current)return;let i=e.touches[0],a=e.currentTarget;if(i==null||a==null)return;he.current={clientX:i.clientX,clientY:i.clientY},me.current=a,a.setAttribute(`draggable`,`false`);let o=(e={})=>{let t=e.restoreNativeDraggable??!j.current;M.current!=null&&(clearTimeout(M.current),M.current=null),document.removeEventListener(`touchmove`,s),document.removeEventListener(`touchend`,c),document.removeEventListener(`touchcancel`,c),fe.current===o&&(fe.current=null),t&&(a.setAttribute(`draggable`,`true`),me.current===a&&(me.current=null),he.current=null)},s=e=>{let t=e.touches[0],n=he.current;if(t==null||n==null)return;let r=t.clientX-n.clientX,i=t.clientY-n.clientY;r*r+i*i<=100||o()},c=()=>{o()};document.addEventListener(`touchmove`,s,{passive:!0}),document.addEventListener(`touchend`,c),document.addEventListener(`touchcancel`,c),fe.current=o,M.current=setTimeout(()=>{if(o({restoreNativeDraggable:!1}),t.startDrag(r)===!1){a.setAttribute(`draggable`,`true`),me.current===a&&(me.current=null),he.current=null;return}j.current=!0,me.current=a,a.setAttribute(`draggable`,`false`),a.style.setProperty(`touch-action`,`none`),de.current=n;let e=a.getBoundingClientRect(),s=xs(a);Object.assign(s.style,{height:`${e.height}px`,opacity:`0.85`,transform:`translate3d(${e.left}px, ${e.top}px, 0)`,width:`${e.width}px`}),Ht(s),ue.current=s,pe.current={x:i.clientX-e.left,y:i.clientY-e.top};let c=e=>{let t=e.touches[0];if(t==null)return;e.preventDefault();let n=pe.current;n!=null&&ue.current!=null&&(ue.current.style.transform=`translate3d(${t.clientX-n.x}px, ${t.clientY-n.y}px, 0)`),Gt(Wt(t.clientX,t.clientY)),qt(t.clientX,t.clientY)},l=e=>{let n=e.changedTouches[0];n!=null&&Wt(n.clientX,n.clientY),t.completeDrag(),Ut()},u=()=>{t.cancelDrag(),Ut()};fe.current=()=>{document.removeEventListener(`touchmove`,c),document.removeEventListener(`touchend`,l),document.removeEventListener(`touchcancel`,u)},document.addEventListener(`touchmove`,c,{passive:!1}),document.addEventListener(`touchend`,l),document.addEventListener(`touchcancel`,u)},Zs)},Zt=e=>{if(I!=null){if(e.key===`Escape`){jt(),e.preventDefault(),e.stopPropagation();return}ec.has(e.key)&&(e.preventDefault(),e.stopPropagation());return}if($e.isActive()){if(e.key===`Escape`)$e.cancel();else if(e.key===`Enter`)$e.commit();else return;Ce(`focus`),N(e=>e+1),e.preventDefault(),e.stopPropagation();return}if(l&&e.key===`F2`){Pt(V??void 0),e.preventDefault(),e.stopPropagation();return}if(nt){if(e.key===`Escape`)ae.current=!1,A.current=null,t.closeSearch();else if(e.key===`Enter`){let e=t.getFocusedPath();e!=null&&t.selectOnlyPath(e);let n=C.current,r=Do(n,W);A.current=H<0||n==null?null:Math.max(0,Math.min(H*s-n.scrollTop,Math.max(0,r-s))),ae.current=!0,t.closeSearch()}else if(e.key===`ArrowDown`)t.focusNextSearchMatch();else if(e.key===`ArrowUp`)t.focusPreviousSearchMatch();else return;Ce(`focus`),N(e=>e+1),e.preventDefault(),e.stopPropagation();return}if(f&&Os(e)){t.openSearch(e.key),N(e=>e+1),e.preventDefault(),e.stopPropagation();return}let n=B&&As(e),r=js(e,B),i=r&&S.current!=null?Eo(S.current):null,a=r?new Set(Rs(S.current)):new Set,o=i?.dataset.fileTreeStickyPath??null,c=i?.dataset.fileTreeStickyRow===`true`&&o!=null;if(c&&o!==V&&a.has(o)){let e=C.current;Ne(o,e?.scrollTop??null),t.focusPath(o)}let u=t.getFocusedPath(),d=t.getFocusedIndex(),p=t.getFocusedItem();if(p==null)return;let m=Es(p)?p:null,h=u!=null&&(Ct.has(u)||c&&o===u&&a.has(u)),g=e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`ArrowRight`&&m!=null&&m.isExpanded(),_=e.key===`ArrowLeft`&&h&&m!=null&&m.isExpanded(),v=C.current,y=!0;if(e.shiftKey&&e.key===`ArrowDown`)t.extendSelectionFromFocused(1);else if(e.shiftKey&&e.key===`ArrowUp`)t.extendSelectionFromFocused(-1);else if(n&&u!=null&&d>=0){let e=t.getVisibleRows(d,d)[0]??null,n=Ls(u,w.current,te.current);e==null||n==null?y=!1:Nt(e,u)}else if((e.ctrlKey||e.metaKey)&&Ds(e))t.toggleFocusedSelection();else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`)t.selectAllVisiblePaths();else switch(e.key){case`ArrowDown`:t.focusNextItem();break;case`ArrowUp`:t.focusPreviousItem();break;case`ArrowRight`:m==null||m.isExpanded()?t.focusNextItem():m.expand();break;case`ArrowLeft`:m!=null&&m.isExpanded()?m.collapse():t.focusParentItem();break;case`Home`:t.focusFirstItem();break;case`End`:t.focusLastItem();break;default:y=!1}if(!y)return;Ce(`focus`);let b=t.getFocusedPath(),x=b!=null&&(Ct.has(b)||a.has(b)),ee=g&&b!==u,T=n&&c&&o===u&&b===u;if((h||T)&&b!=null&&(ee&&x||T))Ne(b,v?.scrollTop??null),O.current=!0,ye(e=>e===b?e:b);else{let t=e.key===`ArrowUp`&&h&&b!==u;b!=null&&(t||_&&b===u)?(Pe(b,Bs(S.current,v,i,u,s,St,W)),O.current=!0,ye(e=>e===b?e:b)):R()}N(e=>e+1),e.preventDefault(),e.stopPropagation()};Wo(()=>{if(f&&nt){if(Fe.current){Fe.current=!1;return}To(ee.current)}},[nt,f]),Wo(()=>{let e=x.current;switch(Fo({hasRenderedInput:e!=null,previousRenamingPath:k.current,renamingPath:et})){case`reset`:k.current=null;return;case`reveal-canonical`:et!=null&&Ft(et,{restoreTreeFocus:!1,targetOffset:`live-overlay`});return;case`ignore`:return;case`focus-input`:e!=null&&(De.current=null,k.current=et,To(e),e.select());return}},[vt.end,vt.start,et,Ft,Ct]),Wo(()=>{let e=S.current;if(e==null)return;let t=null,n=()=>{t!=null&&(clearTimeout(t),t=null)},r=()=>{let t=Eo(e)?.dataset.itemPath??null;ye(e=>e===t?e:t)},i=()=>{n(),O.current=!0,r()},a=i=>{let a=i.relatedTarget;if(a==null){n(),t=setTimeout(()=>{if(t=null,Eo(e)!=null){r();return}O.current=!1,ye(null)},0);return}if(!(a instanceof Node)||!e.contains(a)){n(),O.current=!1,ye(null);return}let o=a instanceof HTMLElement?a.dataset.itemPath??null:null;ye(e=>e===o?e:o)};return e.addEventListener(`focusin`,i),e.addEventListener(`focusout`,a),()=>{n(),e.removeEventListener(`focusin`,i),e.removeEventListener(`focusout`,a)}},[]),Wo(()=>{let e=S.current;e!=null&&(U.physical.scrollTop<=0?e.dataset.scrollAtTop=`true`:delete e.dataset.scrollAtTop)},[U.physical.scrollTop]),Wo(()=>{let e=null,n=C.current,r=b.current,i=S.current;if(n==null)return;E.current=Do(n,g);let a=()=>{let e=t.getVisibleCount(),r=Oo(E.current,g),i=Math.max(0,e*s-r);n.scrollTop>i&&(n.scrollTop=i),Ve(_s({controller:t,itemHeight:s,overscan:c,scrollTop:Math.min(n.scrollTop,i),stickyFolders:h,viewportHeight:r}))};if(!D.current){D.current=!0;let e=t.getFocusedIndex();if(e>=0){let r=Oo(E.current,g),i=t.getVisibleRows(e,e)[0]??null;Ao(n,e,s,r,h&&i!=null?Math.max(0,Math.min(i.ancestorPaths.length*s,Math.max(0,r-s))):0)}}T.current=a;let o=!1,l=t.subscribe(()=>{o?N(e=>e+1):o=!0,a()}),u=()=>{Me.current!==!0&&(r!=null&&(r.dataset.isScrolling??=``),i!=null&&(i.dataset.isScrolling??=``),y.current=!0,e!=null&&clearTimeout(e),e=setTimeout(()=>{r!=null&&delete r.dataset.isScrolling,i!=null&&delete i.dataset.isScrolling,y.current=!1,Te(e=>e+1),e=null},50))},d=null,f=()=>{i!=null&&delete i.dataset.overlayReveal,d!=null&&(clearTimeout(d),d=null)},p=()=>{i!=null&&Me.current!==!0&&(n.scrollTop>0||(i.dataset.overlayReveal=`true`,d!=null&&clearTimeout(d),d=setTimeout(()=>{f()},200)))},m=()=>{if(a(),n.scrollTop>0&&f(),L.current!=null&&y.current&&At.current(),Me.current===!0){y.current=!1;return}P(e=>e==null?e:null),u()},_=()=>{u(),p()},v=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`PageUp`,`PageDown`,`Home`,`End`,` `,`Spacebar`]),x=e=>{v.has(e.key)&&_()};n.addEventListener(`scroll`,m,{passive:!0}),n.addEventListener(`wheel`,_,{passive:!0}),n.addEventListener(`touchmove`,_,{passive:!0}),n.addEventListener(`keydown`,x);let ee=typeof ResizeObserver<`u`?new ResizeObserver(e=>{E.current=(e[0]==null?null:ko(e[0]))??Do(n,g),a()}):null;return ee?.observe(n),()=>{T.current=()=>{},l(),n.removeEventListener(`scroll`,m),n.removeEventListener(`wheel`,_),n.removeEventListener(`touchmove`,_),n.removeEventListener(`keydown`,x),e!=null&&clearTimeout(e),d!=null&&clearTimeout(d),r!=null&&delete r.dataset.isScrolling,i!=null&&(delete i.dataset.isScrolling,delete i.dataset.overlayReveal),y.current=!1,E.current=null,ee?.disconnect()}},[t,g,s,c,h]),Wo(()=>{B||I==null||jt(!1)},[jt,B,I]);let Qt=Go(()=>I==null?null:`${I.path}::${I.source}`,[I]);Wo(()=>{if(Qt==null){m?.clearSlotContent(ct);return}let t=L.current;if(t==null)return;let n=v.current??_.current;if(n==null)return;let r={anchorElement:n,anchorRect:t.anchorRect??Ns(n.getBoundingClientRect()),close:e=>{At.current(e?.restoreFocus??!0)},restoreFocus:()=>{kt.current&&Ot.current(L.current?.path??null)}},i=e?.contextMenu?.render?.(t.item,r)??null;return m?.setSlotContent(ct,i),e?.contextMenu?.onOpen?.(t.item,r),Ks(i),queueMicrotask(()=>{i!=null&&i.isConnected&&document.activeElement===i&&Ks(i)}),()=>{m?.clearSlotContent(ct)}},[Qt,e?.contextMenu,m]),Wo(()=>{I!=null&&t.getItem(I.path)==null&&jt()},[jt,I,t]),Wo(()=>{if(I==null)return;let e=S.current?.getRootNode(),t=e instanceof ShadowRoot?e.host:S.current,n=e=>{let n=e.target;n instanceof Node&&(Ms(e)||_.current?.contains(n)!==!0&&t?.contains(n)!==!0&&jt())},r=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),jt())};return document.addEventListener(`mousedown`,n,!0),document.addEventListener(`keydown`,r,!0),()=>{document.removeEventListener(`mousedown`,n,!0),document.removeEventListener(`keydown`,r,!0)}},[jt,I]),Wo(()=>{let e=C.current,n=S.current;if(e==null||n==null){ie.current=V;return}let r=V==null?null:te.current.get(V)??null,i=Eo(n),a=i?.dataset.itemPath??null,o=tt&&x.current===i,c=f&&ee.current===i,l=ae.current&&!nt,u=A.current??0,d=De.current,p=Oe.current,m=ke.current,g=Ae.current,_=i!=null,v=O.current||_,y=ie.current!==V,b=p!=null&&p===V&&V!=null,w=!1,E=!1;if(it!=null&&it.id!==ne.current){ne.current=it.id;let n=it.visibleIndex,r=t.getVisibleRows(n,n)[0]??null;if(r!=null){let t=h?Math.max(0,Math.min(r.ancestorPaths.length*s,Math.max(0,W-s))):St;w=!0,E=jo(e,n,s,W,xt,it.offset,t)}t.clearScrollRequest(it.id)}let D=!w&&l&&Mo(e,H,s,W,xt,u),re=!w&&d!=null&&d===V&&Mo(e,H,s,W,xt,St),k=!w&&m!=null&&m.path===V&&Mo(e,H,s,W,xt,m.viewportOffset),oe=!w&&g!=null&&g.path===V&&e.scrollTop!==g.scrollTop;if(oe&&(e.scrollTop=g.scrollTop),(oe||E||re||k||D||v&&y&&d!==V&&!b&&Ao(e,H,s,W,St))&&T.current(),w){ie.current=V;return}if(!v){ie.current=V;return}if(o){ie.current=V;return}if(c&&!l){ie.current=V;return}if(r==null){l&&H>=0&&(Mo(e,H,s,W,xt,u),T.current()),ie.current=V;return}(y||l||d===V||p===V||m?.path===V||g?.path===V||a==null||a!==V)&&(To(r),d===V&&(De.current=null),p===V&&(Oe.current=null),m?.path===V&&(ke.current=null),g?.path===V&&(Ae.current=null),ae.current=!1,A.current=null),ie.current=V},[t,H,V,wt,s,tt,nt,vt,W,f,it,h,St,xt,_t]);let $t=H>=0&&H>=U.visible.startIndex&&H<=U.visible.endIndex,en=V!=null&&yt.some(e=>ms(e.row)===V),tn=$t||en,nn=We&&O.current===!0&&tn?V:null,rn=F===`pointer`?be:null,G=I?.path??je.current??rn??nn??be,an=I?.source===`right-click`;Wo(()=>{y.current&&I==null||Mt(Xe(G))},[I,Xe,vt,W,we,yt,G,Mt,_t]);let on=Ko(e=>{if(y.current||Ms(e))return;let t=e.target;if(!(t instanceof HTMLElement)||t.closest?.(`[data-type="context-menu-trigger"]`)!=null)return;let n=t.closest?.(`[data-file-tree-sticky-row="true"]`),r=t.closest?.(`[data-type="item"]`),i=n instanceof HTMLElement?n.dataset.fileTreeStickyPath??null:r instanceof HTMLElement?r.dataset.itemPath??null:null;i!=null&&Ce(e=>e===`pointer`?e:`pointer`),P(e=>e===i?e:i)},[]),sn=Ko(()=>{P(null)},[]);Wo(()=>{if(!at)return;let e=()=>{Ut(),t.cancelDrag()};return window.addEventListener(`dragend`,e),()=>{window.removeEventListener(`dragend`,e),Ut(),t.cancelDrag()}},[t,at]);let cn=e=>{if(!at||t.getDragSession()==null||j.current)return;let n=bs(e.target instanceof HTMLElement?e.target:null);t.setDragTarget(n),Gt(t.getDragSession()?.target??null),qt(e.clientX,e.clientY),e.dataTransfer!=null&&(e.dataTransfer.dropEffect=`move`),e.preventDefault()},ln=e=>{if(!at||t.getDragSession()==null||j.current)return;let n=e.relatedTarget;n instanceof Node&&S.current?.contains(n)===!0||(zt(),Vt(),t.setDragTarget(null))},un=e=>{at&&t.getDragSession()!=null&&!j.current&&(e.preventDefault(),Wt(e.clientX,e.clientY),t.completeDrag(),Bt(),zt(),Vt(),de.current=null)},dn=U.window.height,fn=U.window.offsetTop,pn=Math.min(0,W-dn),mn=Math.min(0,W-dn-St),hn=ve===V||ae.current,gn=V!=null&&hn&&!wt&&H>=0?_t[H]??t.getVisibleRows(H,H)[0]??null:null,_n=gn==null?null:No(H,s,vt,dn),vn=de.current,yn=ft!=null&&vn!=null&&vn.path===ft&&vn.index>=vt.start&&vn.index<=vt.end,bn=ft!=null&&vn!=null&&vn.path===ft&&!yn&&vn.path!==gn?.path?vn:null,xn=bn==null?null:No(bn.index,s,vt,dn),Sn=ks((H>=0?_t[H]??t.getVisibleRows(H,H)[0]??null:null)?.ancestorPaths.at(-1)??null),Cn=nt&&V!=null?Us(o,V,!wt):void 0,wn=I?.path??(nt?V:ve),K=I?.path??be,Tn=Xe(G),En=B&&We&&!an&&!tt&&Tn!=null&&xe!=null&&G!=null,Dn=B&&(En||I!=null),On=I?.anchorRect,kn=On==null&&Tn!=null&&xe!=null&&(I!=null||En)?xe:null,q=On==null?kn==null?void 0:{top:`${kn}px`}:{left:`${On.left}px`,position:`fixed`,right:`auto`,top:`${On.top}px`},J=an?{opacity:`0`}:void 0,An=Ko((e,n,r,i)=>{let a=zo({event:{ctrlKey:e.ctrlKey,metaKey:e.metaKey,shiftKey:e.shiftKey},isDirectory:n.kind===`directory`,isSearchOpen:nt,mode:i}),o=a.toggleDirectory&&n.kind===`directory`,s=o?t.resolveMountedDirectoryPathFromInput(r):null;if(o&&s==null)return;let c=s??r;switch(a.selection.kind){case`range`:t.selectPathRange(c,a.selection.additive);break;case`toggle`:t.togglePathSelectionFromInput(c);break;case`single`:t.selectOnlyMountedPathFromInput(c)}let l=e.currentTarget instanceof HTMLElement?e.currentTarget:null,u=n.index>=U.visible.startIndex&&n.index<=U.visible.endIndex,d=i===`flow`&&u&&l!=null&&l.dataset.itemParked!==`true`;t.focusMountedPathFromInput(c),d&&(O.current=!0,ye(e=>e===c?e:c),Ce(`focus`)),o&&t.toggleMountedDirectoryFromInput(c),a.closeSearch&&t.closeSearch(),a.revealCanonical&&Ft(c,{targetOffset:`sticky-parents`})},[t,nt,U.visible.endIndex,U.visible.startIndex,Ft]),jn=()=>{if(y.current||!We||G==null||Tn==null)return;let e=t.getItem(G);e!=null&&(Mt(Tn),kt.current=!0,Ee({anchorRect:null,item:{kind:e.isDirectory()?`directory`:`file`,name:Tn.getAttribute(`aria-label`)??G,path:e.getPath()},path:e.getPath(),source:`button`}))},Mn={contextHoverPath:K,contextMenuButtonTriggerEnabled:We,contextMenuButtonVisibility:Ge,contextMenuEnabled:B,contextMenuRightClickEnabled:Ke,contextMenuTriggerMode:Ue,controller:t,directoriesWithGitChanges:i,dragAndDropEnabled:at,draggedPathSet:ut,dragTarget:dt,gitLaneActive:Ze,gitStatusByPath:n,handleRowDragEnd:Yt,handleRowDragStart:Jt,handleRowTouchStart:Xt,ignoredGitDirectories:r,ignoredInheritanceCache:_e,instanceId:o,itemHeight:s,onKeyDown:Zt,onRowClick:An,openContextMenuForRow:Nt,registerButton:qe,registerRenameInput:Ye,renameView:$e,renderDecorationForRow:Tt,resolveIcon:Qe,shouldSuppressContextMenu:It,visualFocusPath:wn},Nn={...Mn,registerButton:Je};return X(`div`,{ref:S,id:pt,"data-file-tree-context-menu-button-visibility":B&&We?Ge:void 0,"data-file-tree-context-menu-trigger-mode":B?Ue:void 0,"data-file-tree-has-context-menu-action-lane":B&&We?`true`:void 0,"data-file-tree-has-git-lane":Ze?`true`:void 0,"data-file-tree-virtualized-root":`true`,onDragLeave:at?ln:void 0,onDragOver:at?cn:void 0,onDrop:at?un:void 0,onKeyDown:Zt,onPointerLeave:B?sn:void 0,onPointerOver:B?on:void 0,role:`tree`,tabIndex:-1,style:{outline:`none`,position:`relative`},children:[X(`style`,{"data-file-tree-guide-style":`true`,dangerouslySetInnerHTML:{__html:Sn}}),X(`slot`,{name:st,"data-type":`header-slot`}),f?X(`div`,{"data-file-tree-search-container":!0,"data-open":nt?`true`:`false`,children:X(`input`,{ref:ee,"aria-activedescendant":Cn,"aria-controls":pt,placeholder:`Search…`,"data-file-tree-search-input":!0,"data-file-tree-search-input-fake-focus":Ie?`true`:void 0,value:rt,onBlur:()=>{(d!==`retain`||Re.current)&&t.closeSearch()},onFocus:ze,onPointerDown:ze,onInput:e=>{ze();let n=e.currentTarget;t.setSearch(n.value)}})}):null,X(`div`,{ref:C,"data-file-tree-virtualized-scroll":`true`,children:[h&&z&&yt.length>0?X(`div`,{"aria-hidden":`true`,"data-file-tree-sticky-overlay":`true`,children:X(`div`,{"data-file-tree-sticky-overlay-content":`true`,style:{height:`${ht}px`},children:yt.map((e,t)=>Js(Nn,e.row,`sticky:${ms(e.row)}`,{mode:`sticky`,style:{left:`0`,position:`absolute`,right:`0`,top:`${e.top}px`,zIndex:`${yt.length-t}`}}))})}):null,X(`div`,{ref:b,"data-file-tree-virtualized-list":`true`,style:{height:`${xt}px`},children:[X(`div`,{"data-file-tree-virtualized-sticky-offset":`true`,"aria-hidden":`true`,style:{height:`${fn}px`}}),X(`div`,{"data-file-tree-virtualized-sticky":`true`,style:{height:`${dn}px`,top:`${pn}px`,bottom:`${mn}px`},children:[Ys(Mn,vt,Ct),gn!=null&&_n!=null?Js(Mn,gn,`parked:${gn.path}`,{isParked:!0,style:{left:`0`,opacity:`0`,pointerEvents:ft===gn.path?`none`:void 0,position:`absolute`,right:`0`,top:`${_n}px`}}):null,bn!=null&&xn!=null?Js(Mn,bn,`parked-drag:${bn.path}`,{isParked:!0,style:{left:`0`,opacity:`0`,pointerEvents:`none`,position:`absolute`,right:`0`,top:`${xn}px`}}):null]})]})]}),B?X(`div`,{ref:_,"data-type":`context-menu-anchor`,"data-visible":Dn?`true`:`false`,style:q,children:[X(`button`,{ref:v,type:`button`,"data-type":lt,"aria-label":`Options`,"aria-haspopup":`menu`,"aria-expanded":I==null?`false`:`true`,"data-visible":En?`true`:`false`,onMouseDown:e=>{e.preventDefault()},onClick:e=>{if(e.preventDefault(),e.stopPropagation(),I!=null){jt();return}jn()},tabIndex:-1,style:J,children:X(Ba,{...Qe(`file-tree-icon-ellipsis`)})}),I==null?null:X(`slot`,{name:ct})]}):null,I==null?null:X(`div`,{"data-type":`context-menu-wash`,"aria-hidden":`true`,onMouseDownCapture:e=>{e.preventDefault(),jt()},onTouchStartCapture:e=>{e.preventDefault(),e.stopPropagation(),jt()},onTouchMoveCapture:e=>{e.preventDefault(),e.stopPropagation()},onWheelCapture:e=>{e.preventDefault(),e.stopPropagation()}})]})}var Zs,Qs,$s,ec;function tc(){return(tc=e((()=>{ut(),pe(),ht(),Ui(),Wa(),ro(),_o(),xo(),Po(),Lo(),La(),fs(),za(),Zs=400,Qs=40,$s=18,ec=new Set([`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`End`,`Home`,`PageDown`,`PageUp`])})))()}function nc(e,t){ac.renderRoot(e,t)}function rc(e,t){ac.hydrateRoot(e,t)}function ic(e){ac.unmountRoot(e)}var ac;function oc(){return(oc=e((()=>{tc(),La(),ac={hydrateRoot:(e,t)=>{Sa(Qi(Xs,t),e)},renderRoot:(e,t)=>{xa(Qi(Xs,t),e)},unmountRoot:e=>{xa(null,e)}}})))()}var sc;function cc(){return(cc=e((()=>{sc=class{#e=new Map;#t=null;clearAll(){for(let e of this.#e.values())e.remove();this.#e.clear()}clearSlotContent(e){let t=this.#n(e);t!=null&&(t.remove(),this.#e.delete(e))}setHost(e){if(this.#t=e,e!=null){this.#i(e);for(let[e,t]of this.#e)this.#r(e,t)}}setSlotContent(e,t){let n=this.#n(e);if(n===t){t!=null&&(this.#e.set(e,t),this.#r(e,t));return}if(n?.remove(),t==null){this.#e.delete(e);return}this.#e.set(e,t),this.#r(e,t)}setSlotHtml(e,t){let n=t?.trim()??``;if(n.length===0){this.setSlotContent(e,null);return}let r=this.#n(e);if(r!=null&&r.innerHTML===n){this.#e.set(e,r),this.#r(e,r);return}let i=document.createElement(`div`);i.innerHTML=n,this.setSlotContent(e,i)}#n(e){let t=this.#e.get(e)??null;if(t!=null)return t;let n=this.#t;if(n==null)return null;for(let t of Array.from(n.children))if(t instanceof HTMLElement&&t.dataset.fileTreeManagedSlot===e)return t;return null}#r(e,t){t.slot=e,t.dataset.fileTreeManagedSlot=e,this.#t!=null&&t.parentNode!==this.#t&&this.#t.appendChild(t)}#i(e){for(let t of Array.from(e.children)){if(!(t instanceof HTMLElement))continue;let e=t.dataset.fileTreeManagedSlot;e==null||this.#e.has(e)||this.#e.set(e,t)}}}})))()}function lc(){return(lc=e((()=>{La(),Array.isArray})))()}function uc(e){return e!=null&&e.length>0?e:(hc+=1,`pst_ft_${hc}`)}function dc({initialVisibleRowCount:e,itemHeight:t}){return e==null?420:Math.max(0,e)*(t??mt)}function fc(e){if(typeof document>`u`)return;let t=document.createElement(`div`);t.innerHTML=e;let n=t.querySelector(`svg`);return n instanceof SVGElement?n:void 0}function pc(e){return e.querySelector(`#file-tree-icon-chevron`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-file`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-dot`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-lock`)instanceof SVGElement}function mc(e){return Array.from(e.children).filter(e=>e instanceof SVGElement)}var hc,gc;function _c(){return(_c=e((()=>{me(),ut(),pt(),ht(),yt(),Ot(),Ui(),Xi(),oc(),cc(),La(),lc(),hc=0,gc=class{static LoadedCustomComponent=!0;#e;#t;#n;#r;#i;#a;#o;#s;#c;#l=new sc;#u;#d;#f;#p;#m;#h;#g;#_;#v;#y=null;#b;#x=!1;#S=!1;constructor(e){let{composition:t,density:n,fileTreeSearchMode:r,gitStatus:i,id:a,initialSearchQuery:o,icons:s,itemHeight:c,onSearchChange:l,onSelectionChange:u,overscan:d,renderRowDecoration:f,renaming:p,search:m,searchBlurBehavior:h,searchFakeFocus:g,stickyFolders:_,unsafeCSS:v,initialVisibleRowCount:y,...b}=e;this.#e=t,this.#n=uc(a),this.#p=Yi(i),this.#m=s,this.#h=v,this.#r=u,this.#i=f,this.#a=p!=null&&p!==!1,this.#o=h,this.#s=m===!0,this.#c=g===!0,this.#u=dt(n,c),this.#d={itemHeight:this.#u.itemHeight,overscan:d,stickyFolders:_,initialVisibleRowCount:y},this.#t=new Hi({...b,fileTreeSearchMode:r,initialSearchQuery:o,onSearchChange:l,renaming:p}),this.#v=this.#t.getSelectionVersion(),this.#y=this.#r==null?null:this.subscribe(()=>{this.#D()})}unmount(){this.#b!=null&&(ic(this.#b),delete this.#b.dataset.fileTreeVirtualizedWrapper,this.#b=void 0),this.#l.clearAll(),this.#l.setHost(null),this.#f!=null&&(delete this.#f.dataset.fileTreeVirtualized,this.#I(this.#f),this.#f=void 0)}cleanUp(){this.unmount(),this.#y?.(),this.#y=null,this.#t.destroy()}getFileTreeContainer(){return this.#f}getItem(e){return this.#t.getItem(e)}getFocusedItem(){return this.#t.getFocusedItem()}getFocusedPath(){return this.#t.getFocusedPath()}getSelectedPaths(){return this.#t.getSelectedPaths()}getComposition(){return this.#e}getItemHeight(){return this.#u.itemHeight}getDensityFactor(){return this.#u.factor}subscribe(e){let t=!1;return this.#t.subscribe(()=>{if(!t){t=!0;return}e()})}focusPath(e){this.#t.focusPath(e)}scrollToPath(e,t){this.#t.scrollToPath(e,t)}focusNearestPath(e){return this.#t.focusNearestPath(e)}add(e){this.#t.add(e)}batch(e){this.#t.batch(e)}move(e,t,n){this.#t.move(e,t,n)}onMutation(e,t){return this.#t.onMutation(e,t)}setSearch(e){this.#t.setSearch(e)}openSearch(e){this.#t.openSearch(e)}closeSearch(){this.#t.closeSearch()}isSearchOpen(){return this.#t.isSearchOpen()}getSearchValue(){return this.#t.getSearchValue()}getSearchMatchingPaths(){return this.#t.getSearchMatchingPaths()}focusNextSearchMatch(){this.#t.focusNextSearchMatch()}focusPreviousSearchMatch(){this.#t.focusPreviousSearchMatch()}startRenaming(e,t){return this.#t.startRenaming(e,t)}remove(e,t){this.#t.remove(e,t)}resetPaths(e,t){this.#t.resetPaths(e,t)}setComposition(e){this.#e=e;let t=this.#T();t!=null&&(this.#O(),nc(t.wrapper,this.#w()))}setGitStatus(e){this.#p=Yi(e,this.#p);let t=this.#T();t!=null&&nc(t.wrapper,this.#w())}setIcons(e){this.#m=e;let t=this.#T();t!=null&&(this.#E(t.host,t.wrapper),nc(t.wrapper,this.#w()))}hydrate({fileTreeContainer:e}){let t=this.#P(e),n=this.#N(t);this.#O(),rc(n,this.#w())}render({containerWrapper:e,fileTreeContainer:t}){let n=this.#P(t??this.#f,e),r=this.#N(n);this.#O(),nc(r,this.#w())}#C(){return{initialViewportHeight:dc({initialVisibleRowCount:this.#d.initialVisibleRowCount,itemHeight:this.#d.itemHeight}),itemHeight:this.#d.itemHeight,overscan:this.#d.overscan,stickyFolders:this.#d.stickyFolders}}#w(){return{composition:this.#e,controller:this.#t,gitStatusByPath:this.#p?.statusByPath,ignoredGitDirectories:this.#p?.ignoredDirectoryPaths,directoriesWithGitChanges:this.#p?.directoriesWithChanges,icons:this.#m,instanceId:this.#n,renamingEnabled:this.#a,renderRowDecoration:this.#i,searchBlurBehavior:this.#o,searchEnabled:this.#s,searchFakeFocus:this.#c,slotHost:this.#l,...this.#C()}}#T(){let e=this.#f,t=this.#b;return e==null||t==null?null:{host:e,wrapper:t}}#E(e,t){let n=e.shadowRoot;n!=null&&(this.#k(n),this.#A(n)),this.#j(t)}#D(){let e=this.#r;if(e==null)return;let t=this.#t.getSelectionVersion();t!==this.#v&&(this.#v=t,e(this.#t.getSelectedPaths()))}#O(){let e=this.#e?.header?.render;if(e!=null){this.#l.setSlotContent(st,e());return}this.#l.setSlotHtml(st,this.#e?.header?.html??null)}#k(e){let t=mc(e).find(e=>pc(e)),n=fc(fe(j(this.#m).set));n!=null&&(t==null||t.outerHTML!==n.outerHTML)&&(t==null?e.prepend(n):t.replaceWith(n))}#A(e){let t=mc(e),n=t.find(e=>pc(e)),r=t.filter(e=>e!==n),i=j(this.#m).spriteSheet?.trim()??``;if(i.length===0){for(let e of r)e.remove();return}let a=fc(i);if(a==null){for(let e of r)e.remove();return}if(r.length!==1||r[0].outerHTML!==a.outerHTML){for(let e of r)e.remove();e.appendChild(a)}}#j(e){let t=j(this.#m);t.colored&&he(t.set)?e.dataset.fileTreeColoredIcons=`true`:delete e.dataset.fileTreeColoredIcons}#M(e){let t=e.querySelector(`style[${H}]`);if(this.#g==null&&t instanceof HTMLStyleElement&&(this.#g=t),this.#h==null||this.#h===``){this.#g?.remove(),this.#g=void 0,this.#_=void 0;return}(this.#g?.parentNode!==e||this.#_!==this.#h)&&(this.#g??=document.createElement(`style`),this.#g.setAttribute(H,``),this.#g.parentNode!==e&&e.appendChild(this.#g),this.#g.textContent=W(this.#h),this.#_=this.#h)}#N(e){if(this.#b!=null)return this.#b;let t=e.shadowRoot;if(t==null)throw Error(`FileTree requires a shadow root`);let n=Array.from(t.children).filter(e=>e instanceof HTMLDivElement&&typeof e.dataset.fileTreeId==`string`&&e.dataset.fileTreeId.length>0),r=n.find(e=>e.dataset.fileTreeId===this.#n)??n[0];return r!=null&&(this.#n=r.dataset.fileTreeId??this.#n),this.#b=r??document.createElement(`div`),this.#b.dataset.fileTreeId=this.#n,this.#b.dataset.fileTreeVirtualizedWrapper=`true`,this.#E(e,this.#b),this.#b.parentNode!==t&&t.appendChild(this.#b),this.#b}#P(e,t){let n=e??this.#f??document.createElement(`file-tree-container`);t!=null&&n.parentNode!==t&&t.appendChild(n);let r=n.shadowRoot??n.attachShadow({mode:`open`});return Tt(n,r),this.#M(r),n.dataset.fileTreeVirtualized=`true`,n.style.display=`flex`,this.#F(n),this.#l.setHost(n),this.#f=n,n}#F(e){e.style.getPropertyValue(`--trees-item-height`)===``&&(e.style.setProperty(`--trees-item-height`,`${String(this.#u.itemHeight)}px`),this.#x=!0),e.style.getPropertyValue(`--trees-density-override`)===``&&(e.style.setProperty(`--trees-density-override`,String(this.#u.factor)),this.#S=!0)}#I(e){this.#x&&=(e.style.removeProperty(`--trees-item-height`),!1),this.#S&&=(e.style.removeProperty(`--trees-density-override`),!1)}}})))()}function vc(e,t,n){let r=e==null?null:(0,wc.jsx)(`div`,{slot:st,children:e}),i=t!=null&&n!=null?(0,wc.jsx)(`div`,{slot:ct,children:t(n.item,n.context)}):null;return r==null&&i==null?null:(0,wc.jsxs)(wc.Fragment,{children:[r,i]})}function yc(e,t){return typeof window>`u`&&t!=null?(0,wc.jsxs)(wc.Fragment,{children:[(0,wc.jsx)(`template`,{shadowrootmode:`open`,dangerouslySetInnerHTML:{__html:t.shadowHtml}}),e]}):(0,wc.jsx)(wc.Fragment,{children:e})}function bc(e){let t=e.shadowRoot;return t?.querySelector(`[data-file-tree-id]`)instanceof HTMLElement||t?.querySelector(`[data-file-tree-id]`)instanceof SVGElement||e.querySelector(`template[shadowrootmode="open"]`)instanceof HTMLTemplateElement}function xc(e,t,n,r,i){let a={...e??{}};if(t!=null&&delete a.header,n){let t=e?.contextMenu,n=t?.onClose,o=t?.onOpen;a.contextMenu={...t??{},enabled:!0,onClose:()=>{n?.(),r()},onOpen:(e,t)=>{i(e,t),o?.(e,t)}},delete a.contextMenu.render}return a.header!=null||a.contextMenu!=null?a:void 0}function Sc({header:e,id:t,model:n,preloadedData:r,renderContextMenu:i,...a}){let[o,s]=(0,Cc.useState)(null),[c,l]=(0,Cc.useState)(null),u=(0,Cc.useRef)(n.getComposition()),d=(0,Cc.useRef)(n);d.current!==n&&(d.current=n,u.current=n.getComposition());let f=i!=null,p=(0,Cc.useCallback)(()=>{s(null)},[]),m=(0,Cc.useCallback)((e,t)=>{s({context:t,item:e})},[]),h=u.current,g=(0,Cc.useMemo)(()=>xc(h,e,f,p,m),[h,p,m,f,e]),_=(0,Cc.useCallback)(e=>{l(e)},[]);(0,Cc.useEffect)(()=>{f||s(null)},[f]),Tc(()=>{n.setComposition(g)},[g,n]),Tc(()=>{if(c!=null)return r!=null&&bc(c)?n.hydrate({fileTreeContainer:c}):n.render({fileTreeContainer:c}),()=>{n.unmount(),n.setComposition(h)}},[h,c,n,r]);let v=yc(vc(e,i,o),r),y=t??r?.id,b={"--trees-item-height":`${String(n.getItemHeight())}px`,"--trees-density-override":n.getDensityFactor(),...a.style};return(0,wc.jsx)(rt,{...a,id:y,ref:_,style:b,suppressHydrationWarning:r!=null,children:v})}var Cc,wc,Tc;function Ec(){return(Ec=e((()=>{ut(),Cc=o(),wc=c(),Tc=typeof window>`u`?Cc.useEffect:Cc.useLayoutEffect})))()}function Dc(e){let[t]=(0,Oc.useState)(()=>new gc(e)),n=(0,Oc.useRef)({timeout:null,model:t});return(0,Oc.useEffect)(()=>{let{current:e}=n;return e.timeout!=null&&(clearTimeout(e.timeout),e.timeout=null),()=>{e.timeout=setTimeout(()=>e.model.cleanUp(),1)}},[]),{model:t}}var Oc;function kc(){return(kc=e((()=>{_c(),Oc=o()})))()}function Ac({isLoadingOpenTargets:e=!1,onAddToChat:t,onCopyPath:n,onOpenInTarget:r,onSaveAs:i,primaryTarget:a,targetPath:o,visibleTargets:s}){if(o==null)return[];let c=n==null?`workspace`:`review`,l=[];return i!=null&&l.push({id:`save-as`,message:m({id:`markdown.fileReference.saveAs`,defaultMessage:`Save as…`,description:`Context menu action to save a file tree item to a user-selected location`}),onSelect:()=>{i(o)}}),n!=null&&l.push({id:`copy-path`,message:m({id:`codex.review.fileTree.contextMenu.copyPath`,defaultMessage:`Copy path`,description:`Context menu action to copy the path of a file tree item`}),onSelect:()=>{n(o)}}),t!=null&&l.push({id:`add-to-chat`,selectAfterClose:!0,message:m({id:`threadSidePanel.workspaceBrowser.addToChat`,defaultMessage:`Add to chat`,description:`Context menu action for adding a file from the file tree to the current chat`}),onSelect:()=>{t(o)}}),e?[{id:`open-in-loading`,message:Nc(c),tooltipMessage:m({id:`threadSidePanel.workspaceBrowser.openIn.loading`,defaultMessage:`Loading available apps…`,description:`Tooltip shown when the file tree is still loading app options for opening a file`}),enabled:!1},{id:`open-in-separator`,type:`separator`},...l]:a==null?l:[...$e({idPrefix:jc(c),messages:Mc(c),onOpenInTarget:(e,t)=>{r(e,t,o)},primaryTarget:a,visibleTargets:s}),{id:`open-in-separator`,type:`separator`},...l]}function jc(e){switch(e){case`review`:return`review-file-tree-open`;case`workspace`:return`workspace-directory-tree-open`}}function Mc(e){switch(e){case`review`:return{openInTarget:m({id:`codex.review.fileTree.contextMenu.openInTarget`,defaultMessage:`Open in {target}`,description:`Context menu action to open a review file in the preferred app`}),openIn:Nc(e),openInTargetSubmenu:m({id:`codex.review.fileTree.contextMenu.openWithTarget`,defaultMessage:`{target}`,description:`Context menu action to open a review file in a specific app`})};case`workspace`:return{openInTarget:m({id:`threadSidePanel.workspaceBrowser.openInTarget`,defaultMessage:`Open in {target}`,description:`Context menu action to open a workspace browser file in the preferred app`}),openIn:Nc(e),openInTargetSubmenu:m({id:`threadSidePanel.workspaceBrowser.openInTargetSubmenu`,defaultMessage:`{target}`,description:`Context menu action to open a workspace browser file in a specific app`})}}}function Nc(e){switch(e){case`review`:return m({id:`codex.review.fileTree.contextMenu.openWith`,defaultMessage:`Open with`,description:`Context menu submenu label for choosing an app to open a review file`});case`workspace`:return m({id:`threadSidePanel.workspaceBrowser.openIn`,defaultMessage:`Open in…`,description:`Context menu submenu label for choosing an app to open a workspace browser file`})}}function Pc({cwd:e,isWindowsHost:t,itemPath:n,targetPathByDisplayPath:r}){return n==null?null:r.get(n)??O(e??``,n,t)}function Fc(){return(Fc=e((()=>{h(),ie()})))()}function Ic(e,{includeDirectories:t=!1}={}){for(let n of e.composedPath()){if(!(n instanceof Element))continue;let e=n.getAttribute(`data-item-type`);if(e!==`file`&&!(t&&e===`folder`))continue;let r=n.getAttribute(`data-item-path`);if(r)return r}return null}function Lc(){return(Lc=e((()=>{})))()}var Rc;function zc(){return(zc=e((()=>{Rc=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 6.41797C10.367 6.41815 10.6649 6.71599 10.665 7.08301V9.33496H12.916C13.2832 9.33496 13.5809 9.63287 13.5811 10C13.5809 10.3671 13.2832 10.665 12.916 10.665H10.665V12.916C10.665 13.2832 10.3671 13.5809 10 13.5811C9.63284 13.5809 9.33496 13.2832 9.33496 12.916V10.665H7.08301C6.71596 10.6649 6.41815 10.367 6.41797 10C6.41813 9.63295 6.71595 9.33509 7.08301 9.33496H9.33496V7.08301C9.33513 6.71596 9.63295 6.4181 10 6.41797Z" fill="currentColor" />
  <path d="M12.666 2.66797C13.3549 2.66797 13.9121 2.66735 14.3623 2.7041C14.8202 2.74151 15.2268 2.82084 15.6035 3.0127C16.1989 3.31608 16.6829 3.80115 16.9863 4.39649C17.1781 4.77304 17.2575 5.17902 17.2949 5.63672C17.3317 6.08689 17.3311 6.64406 17.3311 7.33301V12.666C17.3311 13.3549 17.3317 13.9121 17.2949 14.3623C17.2575 14.8203 17.1782 15.2268 16.9863 15.6035C16.6829 16.1988 16.1988 16.6829 15.6035 16.9863C15.2268 17.1783 14.8203 17.2575 14.3623 17.2949C13.9121 17.3317 13.3549 17.3311 12.666 17.3311H7.33301C6.64403 17.3311 6.08691 17.3317 5.63672 17.2949C5.17899 17.2575 4.77306 17.1781 4.39649 16.9863C3.80114 16.6829 3.31609 16.1989 3.0127 15.6035C2.82085 15.2269 2.74151 14.8202 2.7041 14.3623C2.66736 13.9122 2.66797 13.3548 2.66797 12.666V7.33301C2.66797 6.64406 2.66732 6.08689 2.7041 5.63672C2.74152 5.17904 2.82093 4.77302 3.0127 4.39649C3.31613 3.80104 3.80103 3.31611 4.39649 3.0127C4.77304 2.82092 5.17902 2.74152 5.63672 2.7041C6.08691 2.66732 6.64403 2.66797 7.33301 2.66797H12.666ZM7.33301 3.99805C6.6221 3.99805 6.12859 3.99894 5.74512 4.03027C5.36955 4.06098 5.15798 4.11775 5 4.19824C4.65484 4.37414 4.37416 4.65485 4.19824 5C4.11775 5.15797 4.06098 5.36959 4.03027 5.74512C3.99894 6.12858 3.99805 6.62214 3.99805 7.33301V12.666C3.99805 13.3767 3.99898 13.8705 4.03027 14.2539C4.06094 14.6292 4.11788 14.8411 4.19824 14.999C4.37412 15.3442 4.65487 15.6258 5 15.8018C5.15795 15.8822 5.36972 15.939 5.74512 15.9697C6.12859 16.0011 6.6221 16.001 7.33301 16.001H12.666C13.3767 16.001 13.8705 16.001 14.2539 15.9697C14.6292 15.9391 14.8411 15.8821 14.999 15.8018C15.3443 15.6258 15.6258 15.3443 15.8018 14.999C15.8821 14.8411 15.9391 14.6292 15.9697 14.2539C16.001 13.8705 16.001 13.3767 16.001 12.666V7.33301C16.001 6.62213 16.0011 6.12858 15.9697 5.74512C15.939 5.36976 15.8822 5.15795 15.8018 5C15.6258 4.65488 15.3442 4.37411 14.999 4.19824C14.8411 4.11787 14.6292 4.06094 14.2539 4.03027C13.8705 3.99898 13.3767 3.99805 12.666 3.99805H7.33301Z" fill="currentColor" />
</svg>
`})))()}var Bc;function Vc(){return(Vc=e((()=>{Bc=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.916 9.33496C13.2833 9.33496 13.5811 9.63273 13.5811 10C13.5811 10.3673 13.2833 10.665 12.916 10.665H7.08301C6.71585 10.6649 6.41797 10.3672 6.41797 10C6.41797 9.63281 6.71585 9.33509 7.08301 9.33496H12.916Z" fill="currentColor" />
  <path d="M12.666 2.66797C13.3549 2.66797 13.9121 2.66735 14.3623 2.7041C14.8202 2.74151 15.2268 2.82084 15.6035 3.0127C16.1989 3.31608 16.6829 3.80115 16.9863 4.39649C17.1781 4.77304 17.2575 5.17902 17.2949 5.63672C17.3317 6.08689 17.3311 6.64406 17.3311 7.33301V12.666C17.3311 13.3549 17.3317 13.9121 17.2949 14.3623C17.2575 14.8203 17.1782 15.2268 16.9863 15.6035C16.6829 16.1988 16.1988 16.6829 15.6035 16.9863C15.2268 17.1783 14.8203 17.2575 14.3623 17.2949C13.9121 17.3317 13.3549 17.3311 12.666 17.3311H7.33301C6.64403 17.3311 6.08691 17.3317 5.63672 17.2949C5.17899 17.2575 4.77306 17.1781 4.39649 16.9863C3.80114 16.6829 3.31609 16.1989 3.0127 15.6035C2.82085 15.2269 2.74151 14.8202 2.7041 14.3623C2.66736 13.9122 2.66797 13.3548 2.66797 12.666V7.33301C2.66797 6.64406 2.66732 6.08689 2.7041 5.63672C2.74152 5.17904 2.82093 4.77302 3.0127 4.39649C3.31613 3.80104 3.80103 3.31611 4.39649 3.0127C4.77304 2.82092 5.17902 2.74152 5.63672 2.7041C6.08691 2.66732 6.64403 2.66797 7.33301 2.66797H12.666ZM7.33301 3.99805C6.6221 3.99805 6.12859 3.99894 5.74512 4.03027C5.36955 4.06098 5.15798 4.11775 5 4.19824C4.65484 4.37414 4.37416 4.65485 4.19824 5C4.11775 5.15797 4.06098 5.36959 4.03027 5.74512C3.99894 6.12858 3.99805 6.62214 3.99805 7.33301V12.666C3.99805 13.3767 3.99898 13.8705 4.03027 14.2539C4.06094 14.6292 4.11788 14.8411 4.19824 14.999C4.37412 15.3442 4.65487 15.6258 5 15.8018C5.15795 15.8822 5.36972 15.939 5.74512 15.9697C6.12859 16.0011 6.6221 16.001 7.33301 16.001H12.666C13.3767 16.001 13.8705 16.001 14.2539 15.9697C14.6292 15.9391 14.8411 15.8821 14.999 15.8018C15.3443 15.6258 15.6258 15.3443 15.8018 14.999C15.8821 14.8411 15.9391 14.6292 15.9697 14.2539C16.001 13.8705 16.001 13.3767 16.001 12.666V7.33301C16.001 6.62213 16.0011 6.12858 15.9697 5.74512C15.939 5.36976 15.8822 5.15795 15.8018 5C15.6258 4.65488 15.3442 4.37411 14.999 4.19824C14.8411 4.11787 14.6292 4.06094 14.2539 4.03027C13.8705 3.99898 13.3767 3.99805 12.666 3.99805H7.33301Z" fill="currentColor" />
</svg>
`})))()}var Hc;function Uc(){return(Uc=e((()=>{Hc=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 8.33301C10.9205 8.33301 11.667 9.07953 11.667 10C11.667 10.9205 10.9205 11.667 10 11.667C9.07961 11.6669 8.334 10.9204 8.33399 10C8.33399 9.07958 9.0796 8.3331 10 8.33301Z" fill="currentColor" />
  <path d="M12.667 2.66797C13.3558 2.66797 13.9132 2.66734 14.3633 2.7041C14.8211 2.74154 15.2279 2.82079 15.6045 3.0127C16.1998 3.31614 16.6839 3.8011 16.9873 4.39649C17.1791 4.77306 17.2585 5.17899 17.2959 5.63672C17.3327 6.08689 17.332 6.64406 17.332 7.33301V12.666C17.332 13.3548 17.3326 13.9122 17.2959 14.3623C17.2585 14.8201 17.1791 15.2269 16.9873 15.6035C16.684 16.1987 16.1996 16.6829 15.6045 16.9863C15.2279 17.1782 14.8211 17.2575 14.3633 17.2949C13.9132 17.3317 13.3558 17.3311 12.667 17.3311H7.33399C6.64513 17.3311 6.08786 17.3317 5.6377 17.2949C5.17997 17.2575 4.77403 17.1781 4.39746 16.9863C3.80197 16.6829 3.31712 16.199 3.01367 15.6035C2.82172 15.2268 2.7425 14.8203 2.70508 14.3623C2.66833 13.9121 2.66895 13.3549 2.66895 12.666V7.33301C2.66895 6.64406 2.6683 6.08689 2.70508 5.63672C2.7425 5.17907 2.82191 4.77301 3.01367 4.39649C3.31713 3.80115 3.80208 3.31606 4.39746 3.0127C4.77393 2.82108 5.18011 2.7415 5.6377 2.7041C6.08785 2.66736 6.64515 2.66797 7.33399 2.66797H12.667ZM7.33399 3.99805C6.62326 3.99805 6.12954 3.99898 5.74609 4.03027C5.37079 4.06094 5.15893 4.11787 5.00098 4.19824C4.65588 4.37409 4.37516 4.65496 4.19922 5C4.11874 5.15796 4.06196 5.36963 4.03125 5.74512C3.99992 6.12858 3.99902 6.62213 3.99902 7.33301V12.666C3.99902 13.3767 3.99996 13.8705 4.03125 14.2539C4.06193 14.6295 4.11878 14.841 4.19922 14.999C4.37515 15.3443 4.6557 15.6258 5.00098 15.8018C5.15894 15.8821 5.37074 15.9391 5.74609 15.9697C6.12955 16.001 6.62323 16.001 7.33399 16.001H12.667C13.3776 16.001 13.8715 16.001 14.2549 15.9697C14.6299 15.939 14.8421 15.8821 15 15.8018C15.345 15.6258 15.6269 15.3441 15.8027 14.999C15.883 14.8411 15.9401 14.6289 15.9707 14.2539C16.002 13.8705 16.002 13.3767 16.002 12.666V7.33301C16.002 6.62213 16.002 6.12858 15.9707 5.74512C15.94 5.36972 15.8832 5.15795 15.8027 5C15.6269 4.65483 15.3451 4.37417 15 4.19824C14.8421 4.11782 14.6302 4.06097 14.2549 4.03027C13.8715 3.99897 13.3776 3.99805 12.667 3.99805H7.33399Z" fill="currentColor" />
</svg>
`})))()}function Wc(e,t){let n=new Set(e),r=new Set(t),i=[];for(let e of[...n].filter(e=>!r.has(e)).sort().reverse())i.push({type:`remove`,path:e});for(let e of r)n.has(e)||i.push({type:`add`,path:e});return i}function Gc(e){let t=new Set(e);for(let n of e)for(let e=Kc.default.posix.dirname(n);e!==`.`&&e!==`/`&&!t.has(`${e}/`);e=Kc.default.posix.dirname(e))t.add(`${e}/`);return[...t]}var Kc;function qc(){return(qc=e((()=>{Kc=t(a(),1)})))()}function Jc(e){let t=(0,Xc.c)(21),{children:n,model:r,getPathDescription:i,targetPathByDisplayPath:a}=e,[o,s]=(0,Zc.useState)(null),[c,l]=(0,Zc.useState)(null),u;t[0]!==c||t[1]!==a?(u=c==null?null:a.get(c.path)??c.path,t[0]=c,t[1]=a,t[2]=u):u=t[2];let d=u,f;t[3]!==i||t[4]!==d||t[5]!==c?(f=c==null?null:i?.(c.path)??d,t[3]=i,t[4]=d,t[5]=c,t[6]=f):f=t[6];let p=f,m,h;t[7]!==o||t[8]!==r?(m=()=>{let e=r.getFileTreeContainer()?.shadowRoot?.querySelector(`[data-file-tree-id]`);if(o==null||e==null)return;let t,n=()=>clearTimeout(t),i=()=>{n(),l(null)},a=e=>{let r=Yc(e.composedPath()[0]);if(r==null){i();return}if(r.element!==Yc(e.relatedTarget)?.element){if(e instanceof PointerEvent){if(e.pointerType===`touch`||e.buttons!==0)return;n(),t=setTimeout(()=>{r.element.isConnected&&l(r)},$c)}else r.element.matches(`:focus-visible`)&&(n(),l(r))}},s=e=>{Yc(e.composedPath()[0])?.element!==Yc(e.relatedTarget)?.element&&n()},c=new AbortController,u={signal:c.signal};e.addEventListener(`pointerover`,a,u),e.addEventListener(`pointerout`,s,u),e.addEventListener(`focusin`,a,u),e.addEventListener(`focusout`,s,u),e.addEventListener(`pointerdown`,i,u),e.addEventListener(`scroll`,i,{...u,capture:!0}),e.addEventListener(`keydown`,e=>{e.key===`Escape`&&i()},u);let d=r.onMutation(`*`,i);return()=>{n(),c.abort(),d()}},h=[o,r],t[7]=o,t[8]=r,t[9]=m,t[10]=h):(m=t[9],h=t[10]),(0,Zc.useEffect)(m,h);let g,_;t[11]!==p||t[12]!==c?(g=()=>{if(c!=null&&p!=null)return c.element.setAttribute(`aria-description`,p),()=>c.element.removeAttribute(`aria-description`)},_=[p,c],t[11]=p,t[12]=c,t[13]=g,t[14]=_):(g=t[13],_=t[14]),(0,Zc.useEffect)(g,_);let v;t[15]!==p||t[16]!==c?(v=c==null?null:(0,Qc.jsx)(D,{align:`start`,closeOnTriggerClick:!0,disableHoverOpen:!0,open:!0,onOpenChange:e=>{e||l(null)},scaleAvailableSizeWithZoom:!0,selectable:!0,side:`bottom`,tooltipContent:(0,Qc.jsx)(`div`,{className:`text-start wrap-anywhere`,children:p}),triggerElement:c.element,children:null}),t[15]=p,t[16]=c,t[17]=v):v=t[17];let y;return t[18]!==n||t[19]!==v?(y=(0,Qc.jsxs)(`div`,{ref:s,className:`contents`,children:[n,v]}),t[18]=n,t[19]=v,t[20]=y):y=t[20],y}function Yc(e){if(!(e instanceof Element)||e.closest(`[data-item-section='git'], [data-item-section='decoration'], [data-item-section='action'], input`)!=null)return null;let t=e.closest(`[data-item-path]`),n=t?.getAttribute(`data-item-path`);return t!=null&&n?{element:t,path:n}:null}var Xc,Zc,Qc,$c;function el(){return(el=e((()=>{Xc=l(),Zc=o(),ne(),Qc=c(),$c=500})))()}function tl(e){let t=(0,_l.c)(130),{cwd:n,contextMenuEnabled:r,decorationAlignment:i,decorationIcons:a,flattenEmptyDirectories:o,gitStatus:s,hostId:c,icons:l,initialExpandedPaths:u,initialScrollTop:d,itemHeight:f,onClick:m,onDoubleClick:h,onExpandedPathsChange:_,onSelectionChange:v,onStateChange:y,getPathDescription:b,paths:x,revealSelectedPath:C,revealSelectedPathScrollOffset:ee,renderRowDecoration:te,resetKey:w,selectedPath:E,sectioned:ne,sort:D,surface:ie,unsafeCSS:ae}=e,A=r===void 0||r,le=i===void 0?`inline`:i,ue=o!==void 0&&o,de=d===void 0?0:d,fe=f===void 0?xl:f,j=C!==void 0&&C,pe=ee===void 0?`nearest`:ee,me=ne!==void 0&&ne,he=ie===void 0?`main`:ie,ge=g(S),M=se(),_e=ce(M),{platform:N}=k(),ve;t[0]!==n||t[1]!==c?(ve={cwd:n,hostId:c},t[0]=n,t[1]=c,t[2]=ve):ve=t[2];let ye=et(ve),be;t[3]===x?be=t[4]:(be=Gc(x.map(il)),t[3]=x,t[4]=be);let P=be,xe;if(t[5]!==n||t[6]!==x||t[7]!==N){xe=new Map;for(let e of x)typeof e!=`string`&&xe.set(e.displayPath,O(n??``,e.path,N===`windows`));t[5]=n,t[6]=x,t[7]=N,t[8]=xe}else xe=t[8];let Se=xe,F;t[9]!==a||t[10]!==l?(F=ol(l,a),t[9]=a,t[10]=l,t[11]=F):F=t[11];let Ce=F,we=he===`dropdown`?`var(--color-surface-elevated-secondary)`:`var(--color-surface)`,Te=me?`var(--color-blue)`:`var(--color-codex-git-modified)`,I=(0,yl.useRef)(null),Ee;t[12]===u?Ee=t[13]:(Ee=Array.from(u??[]),t[12]=u,t[13]=Ee);let L=(0,yl.useRef)(Ee),De=(0,yl.useRef)(null),Oe=(0,yl.useRef)(de),ke=(0,yl.useRef)(!1),Ae=(0,yl.useRef)(E??null),je=(0,yl.useRef)(!1),Me;t[14]===y?Me=t[15]:(Me=()=>{y?.({expandedPaths:L.current,scrollTop:Oe.current,selectedPath:Ae.current})},t[14]=y,t[15]=Me);let R=T(Me),Ne;t[16]!==_||t[17]!==R?(Ne=e=>{L.current=e,_?.(e),R()},t[16]=_,t[17]=R,t[18]=Ne):Ne=t[18];let Pe=T(Ne),Fe;t[19]!==v||t[20]!==R?(Fe=e=>{je.current||(Ae.current=e[0]??null,v?.(e),R())},t[19]=v,t[20]=R,t[21]=Fe):Fe=t[21];let Ie=T(Fe),Le;t[22]===te?Le=t[23]:(Le=e=>te?.(e)??null,t[22]=te,t[23]=Le);let Re=T(Le),ze;t[24]===E?ze=t[25]:(ze=E==null?void 0:[E],t[24]=E,t[25]=ze);let Be=`
      :host {
        --trees-bg-override: ${we};
        --trees-bg-muted-override: var(--color-background-primary-ghost-hover);
        --trees-border-color-override: var(--color-border);
        --trees-fg-override: var(--color-text);
        --trees-font-size-override: 13px;
        --trees-focus-ring-color-override: var(--color-ring);
        --trees-git-added-color-override: var(--color-codex-git-added);
        --trees-git-deleted-color-override: var(--color-codex-git-deleted);
        --trees-git-ignored-color-override: var(--color-codex-git-ignored);
        --trees-git-lane-width-override: 20px;
        --trees-git-modified-color-override: ${Te};
        --trees-git-renamed-color-override: ${Te};
        --trees-git-untracked-color-override: var(--color-codex-git-added);
        --trees-item-padding-x-override: 3px;
        --trees-item-margin-x-override: 0px;
        --trees-level-gap-override: 0px;
        --trees-padding-inline-override: 0px;
        --trees-scrollbar-gutter-override: 0px;
        --trees-scrollbar-gutter-measured: 0px;
        --trees-selected-bg-override: var(--color-background-primary-soft-active);
        --trees-selected-fg-override: var(--color-text-emphasis);
        --trees-item-row-gap-override: 5px;
      }

      /* Halve indentation while keeping guides aligned with full-size icon centers. */
      [data-item-section='spacing']:not(:empty) {
        margin-right: calc((1px - var(--trees-icon-width)) / 4);
      }

      [data-item-section='spacing-item'] + [data-item-section='spacing-item'] {
        margin-left: calc(var(--trees-item-row-gap) + (var(--trees-icon-width) - 1px) / 4);
      }

      [data-item-type='file'] > [data-item-section='spacing']:not(:empty) {
        margin-right: 0;
      }

      [data-file-tree-sticky-overlay-content='true'],
      [data-file-tree-sticky-row='true'] {
        background-color: ${we};
      }

      [data-file-tree-virtualized-scroll='true'] {
        scrollbar-gutter: auto;
      }

      [role="treeitem"] {
        cursor: var(--cursor-interaction) !important;
      }

      [role="treeitem"] * {
        cursor: var(--cursor-interaction) !important;
      }

      [data-item-type='file'][data-item-path$='/']:has([data-item-section='content']:empty) {
        display: none;
      }

      [data-item-git-status] > [data-item-section='content'] {
        color: ${me?`var(--trees-item-git-status-color)`:`inherit`};
      }

      /* Preserve spaces when Pierre splits a label into truncation segments. */
      [data-truncate-content='visible'] {
        white-space: pre;
      }

      ${me?`[role='treeitem'][aria-level='1'][aria-posinset='2'] {
              border-top: 1px solid var(--color-border);
            }`:``}

      ${le===`end`?`[data-item-section='decoration'] {
              flex: 1 0 auto;
              justify-content: flex-end;
            }`:``}

      /* Clip at the row edge instead of shortening every folder or filename. */
      [data-item-flattened-subitems],
      [data-truncate-group-container='middle'] {
        min-width: max-content;
      }

      [data-item-git-status='added'] > [data-item-section='git'] > span,
      [data-item-git-status='deleted'] > [data-item-section='git'] > span,
      [data-item-git-status='modified'] > [data-item-section='git'] > span {
        font-size: 0;
      }

      [data-item-git-status='added'] > [data-item-section='git'] > span::before,
      [data-item-git-status='deleted'] > [data-item-section='git'] > span::before,
      [data-item-git-status='modified'] > [data-item-section='git'] > span::before {
        width: 20px;
        height: 20px;
        background-color: currentColor;
        content: '';
        mask: var(--base-file-tree-git-status-icon) center / contain no-repeat;
      }

      [data-item-git-status='added'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${Cl}");
      }

      [data-item-git-status='deleted'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${wl}");
      }

      [data-item-git-status='modified'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${Tl}");
      }

      /* Filter out @pierre/truncate's subpixel one-line overflow false positives. */
      @container measure (height <= calc(1lh + 1px)) {
        [data-truncate-marker] {
          opacity: 0;
        }
      }

      ${ae??``}
    `,Ve;t[26]!==Ce||t[27]!==ue||t[28]!==s||t[29]!==Ie||t[30]!==u||t[31]!==fe||t[32]!==Re||t[33]!==D||t[34]!==ze||t[35]!==Be||t[36]!==P?(Ve={fileTreeSearchMode:`hide-non-matches`,flattenEmptyDirectories:ue,gitStatus:s,icons:Ce,initialExpandedPaths:u,initialSelectedPaths:ze,itemHeight:fe,onSelectionChange:Ie,paths:P,renderRowDecoration:Re,search:!1,sort:D,stickyFolders:!0,unsafeCSS:Be},t[26]=Ce,t[27]=ue,t[28]=s,t[29]=Ie,t[30]=u,t[31]=fe,t[32]=Re,t[33]=D,t[34]=ze,t[35]=Be,t[36]=P,t[37]=Ve):Ve=t[37];let{model:z}=Dc(Ve),He;t[38]!==u||t[39]!==D?(He=D==null?u??[]:[],t[38]=u,t[39]=D,t[40]=He):He=t[40];let B;t[41]!==z||t[42]!==w||t[43]!==He||t[44]!==P?(B={initialExpandedPaths:He,model:z,resetKey:w,treePaths:P},t[41]=z,t[42]=w,t[43]=He,t[44]=P,t[45]=B):B=t[45];let Ue=(0,yl.useRef)(B),We,Ge;t[46]!==u||t[47]!==z||t[48]!==w||t[49]!==D||t[50]!==P?(We=()=>{let e=Array.from(u??[]),t=Ue.current;if(t.model===z&&t.resetKey===w&&re(t.treePaths,P)&&re(t.initialExpandedPaths,e))return;let n=t.model!==z||t.resetKey!==w;Ue.current={initialExpandedPaths:e,model:z,resetKey:w,treePaths:Array.from(P)},L.current=e,ke.current=!0,n?z.resetPaths(P,{initialExpandedPaths:u}):re(t.treePaths,P)||z.batch(Wc(t.treePaths,P));let r=new Set((D==null?Gc(e.filter(e=>z.getItem(e)?.isDirectory())):e).map(rl));for(let e of r){let t=z.getItem(e);t!=null&&gl(t)&&!t.isExpanded()&&t.expand()}for(let e of P){if(!e.endsWith(`/`)||r.has(e.slice(0,-1)))continue;let t=z.getItem(e);t!=null&&gl(t)&&t.isExpanded()&&t.collapse()}ke.current=!1;let i=De.current?.path;(n||i!=null&&z.getItem(i)==null)&&(De.current=null)},Ge=[u,z,w,D,P],t[46]=u,t[47]=z,t[48]=w,t[49]=D,t[50]=P,t[51]=We,t[52]=Ge):(We=t[51],Ge=t[52]),(0,yl.useEffect)(We,Ge);let Ke,qe;t[53]!==de||t[54]!==z?(Ke=()=>{let e=null,t=0,n=()=>{e=null,!hl(z,de)&&(t>=Sl||(t+=1,e=window.requestAnimationFrame(n)))};return de>0?(Oe.current=de,n()):Oe.current=0,()=>{e!=null&&window.cancelAnimationFrame(e)}},qe=[de,z],t[53]=de,t[54]=z,t[55]=Ke,t[56]=qe):(Ke=t[55],qe=t[56]),(0,yl.useEffect)(Ke,qe);let Je;t[57]!==z||t[58]!==j||t[59]!==pe||t[60]!==E?(Je=()=>{if(Ae.current=E??null,je.current=!0,dl(z,E),je.current=!1,!j||E==null){De.current=null;return}(De.current?.path!==E||De.current.scrollOffset!==pe)&&fl(z,E,pe)&&(De.current={path:E,scrollOffset:pe})},t[57]=z,t[58]=j,t[59]=pe,t[60]=E,t[61]=Je):Je=t[61];let Ye;t[62]!==z||t[63]!==w||t[64]!==j||t[65]!==pe||t[66]!==E||t[67]!==P?(Ye=[z,j,pe,w,E,P],t[62]=z,t[63]=w,t[64]=j,t[65]=pe,t[66]=E,t[67]=P,t[68]=Ye):Ye=t[68],(0,yl.useEffect)(Je,Ye);let Xe;t[69]===z?Xe=t[70]:(Xe=()=>{let e=z.getFileTreeContainer();e!=null&&z.render({fileTreeContainer:e})},t[69]=z,t[70]=Xe);let Ze;t[71]!==z||t[72]!==te?(Ze=[z,te],t[71]=z,t[72]=te,t[73]=Ze):Ze=t[73],(0,yl.useEffect)(Xe,Ze);let Qe,$e;t[74]!==s||t[75]!==z?(Qe=()=>{z.setGitStatus(s)},$e=[s,z],t[74]=s,t[75]=z,t[76]=Qe,t[77]=$e):(Qe=t[76],$e=t[77]),(0,yl.useEffect)(Qe,$e);let tt,rt;t[78]!==Ce||t[79]!==z?(tt=()=>{z.setIcons(Ce)},rt=[Ce,z],t[78]=Ce,t[79]=z,t[80]=tt,t[81]=rt):(tt=t[80],rt=t[81]),(0,yl.useEffect)(tt,rt);let V,H;t[82]!==Pe||t[83]!==z||t[84]!==P?(V=()=>z.subscribe(()=>{ke.current||(Oe.current=ml(z),Pe(ul(z,P)))}),H=[Pe,z,P],t[82]=Pe,t[83]=z,t[84]=P,t[85]=V,t[86]=H):(V=t[85],H=t[86]),(0,yl.useEffect)(V,H);let it,at;t[87]!==z||t[88]!==R?(it=()=>{let e=null,t=0,n=null,r=()=>{e=null;let i=pl(z);if(i!=null){let e=()=>{Oe.current=i.scrollTop,R()};i.addEventListener(`scroll`,e,{passive:!0}),n=()=>{i.removeEventListener(`scroll`,e)};return}t>=Sl||(t+=1,e=window.requestAnimationFrame(r))};return r(),()=>{e!=null&&window.cancelAnimationFrame(e),n?.()}},at=[z,R],t[87]=z,t[88]=R,t[89]=it,t[90]=at):(it=t[89],at=t[90]),(0,yl.useEffect)(it,at);let ot;t[91]!==A||t[92]!==n||t[93]!==c?(ot=A?(0,bl.jsx)(nt,{cwd:n,hostId:c}):null,t[91]=A,t[92]=n,t[93]=c,t[94]=ot):ot=t[94];let st;t[95]!==A||t[96]!==n||t[97]!==ye||t[98]!==c||t[99]!==N||t[100]!==ge||t[101]!==Se?(st=()=>{if(!A)return[];let e=Pc({cwd:n,isWindowsHost:N===`windows`,itemPath:I.current,targetPathByDisplayPath:Se});return Ac({...cl({scope:ge,cwd:n,fallbackOpenTargets:ye,hostId:c,targetPath:e}),onAddToChat:c!=null&&!I.current?.endsWith(`/`)?nl:void 0,onCopyPath:oe,onOpenInTarget:(e,t,n)=>{ye.open(e,{appPath:t,persistPreferred:!1,path:n})},onSaveAs:void 0,targetPath:e})},t[95]=A,t[96]=n,t[97]=ye,t[98]=c,t[99]=N,t[100]=ge,t[101]=Se,t[102]=st):st=t[102];let ct;t[103]!==A||t[104]!==n||t[105]!==c||t[106]!==N||t[107]!==ge||t[108]!==Se?(ct=()=>{if(A)return ll({scope:ge,cwd:n,hostId:c,targetPath:Pc({cwd:n,isWindowsHost:N===`windows`,itemPath:I.current,targetPathByDisplayPath:Se})})},t[103]=A,t[104]=n,t[105]=c,t[106]=N,t[107]=ge,t[108]=Se,t[109]=ct):ct=t[109];let lt;t[110]===Symbol.for(`react.memo_cache_sentinel`)?(lt=e=>{I.current=Ic(e.nativeEvent,{includeDirectories:!0})},t[110]=lt):lt=t[110];let ut;t[111]===_e?ut=t[112]:(ut={backgroundColor:`var(--color-surface)`,color:`var(--color-text)`,colorScheme:_e,width:`100%`},t[111]=_e,t[112]=ut);let dt;t[113]!==z||t[114]!==m||t[115]!==h||t[116]!==ut?(dt=(0,bl.jsx)(Sc,{"data-tab-preview-pin-exempt":!0,onClick:m,onContextMenu:lt,onDoubleClick:h,model:z,style:ut}),t[113]=z,t[114]=m,t[115]=h,t[116]=ut,t[117]=dt):dt=t[117];let ft;t[118]!==st||t[119]!==ct||t[120]!==dt?(ft=(0,bl.jsx)(p,{awaitBeforeOpen:!1,getItems:st,onBeforeOpen:ct,children:dt}),t[118]=st,t[119]=ct,t[120]=dt,t[121]=ft):ft=t[121];let pt;t[122]!==b||t[123]!==z||t[124]!==ft||t[125]!==Se?(pt=(0,bl.jsx)(Jc,{model:z,getPathDescription:b,targetPathByDisplayPath:Se,children:ft}),t[122]=b,t[123]=z,t[124]=ft,t[125]=Se,t[126]=pt):pt=t[126];let mt;return t[127]!==ot||t[128]!==pt?(mt=(0,bl.jsxs)(bl.Fragment,{children:[ot,pt]}),t[127]=ot,t[128]=pt,t[129]=mt):mt=t[129],mt}function nl(e){let t=n(e)||s(e)?vl.default.win32:vl.default.posix;d.dispatchHostMessage({type:`add-context-file`,file:{label:t.basename(e),path:e,fsPath:e}})}function rl(e){return e.replace(/\/$/,``)}function il(e){return typeof e==`string`?e:e.displayPath}function al(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function ol(e,t){let n=typeof e==`string`?{set:e}:e,r=[{name:C.name,...C.canvas,body:w(C).body},...t??[]].map(e=>`<symbol id="${e.name}" viewBox="${e.viewBox??`0 0 ${e.width??0} ${e.height??0}`}">${e.body}</symbol>`).join(``),i=sl(n?.spriteSheet,r);return{...n,set:n?.set??`complete`,spriteSheet:i,remap:{...n?.remap,"file-tree-icon-chevron":{name:C.name,width:C.canvas.width,height:C.canvas.height}}}}function sl(e,t){return e==null?`<svg data-icon-sprite aria-hidden="true" width="0" height="0" xmlns="http://www.w3.org/2000/svg">${t}</svg>`:e.replace(`</svg>`,`${t}</svg>`)}function cl({scope:e,cwd:t,fallbackOpenTargets:n,hostId:r,targetPath:i}){if(i==null)return{isLoadingOpenTargets:!1,primaryTarget:null,visibleTargets:[]};let a=e.query.snapshot(ue,{cwd:t,hostId:r,path:i}),o=a.getData(),s=o?.targets??n.targets,c=o?.availableTargets??n.availableTargets,l=o?.preferredTarget??n.preferredTarget,u=o?.mode??n.mode;return{isLoadingOpenTargets:o==null&&!n.hasLoadedTargets&&e.queryClient.getQueryState(a.queryKey)?.status!==`error`,primaryTarget:Qe({preferredTarget:l,targets:s,availableTargets:c,mode:u}),visibleTargets:Ze({targets:s,availableTargets:c,includeHiddenTargets:!0,mode:u})}}function ll({scope:e,cwd:t,hostId:n,targetPath:r}){}function ul(e,t){let n=[];for(let r of t){if(!r.endsWith(`/`))continue;let t=r.slice(0,-1),i=e.getItem(t);i!=null&&gl(i)&&i.isExpanded()&&n.push(t)}return n}function dl(e,t){let n=e.getSelectedPaths();if(t==null){for(let t of n)e.getItem(t)?.deselect();return}if(n.length!==1||n[0]!==t){for(let t of n)e.getItem(t)?.deselect();e.getItem(t)?.select()}}function fl(e,t,n){return e.getItem(t)!=null&&(e.scrollToPath(t,{offset:n}),!0)}function pl(e){return e.getFileTreeContainer()?.shadowRoot?.querySelector(`[data-file-tree-virtualized-scroll='true']`)??null}function ml(e){return pl(e)?.scrollTop??0}function hl(e,t){let n=pl(e);return n!=null&&(n.scrollTop=Math.max(0,t),!0)}function gl(e){return e.isDirectory()}var _l,vl,yl,bl,xl,Sl,Cl,wl,Tl;function El(){return(El=e((()=>{_l=l(),ee(),Ec(),kc(),_(),vl=t(a(),1),r(),yl=o(),f(),te(),y(),Fc(),de(),ae(),zc(),Vc(),Uc(),b(),Xe(),tt(),u(),x(),v(),le(),A(),i(),ie(),E(),qc(),el(),bl=c(),xl=28,Sl=60,Cl=al(Rc),wl=al(Bc),Tl=al(Hc)})))()}export{Lc as i,El as n,Ic as r,tl as t};
//# sourceMappingURL=base-file-tree-bb649c8b740a.js.map