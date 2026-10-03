import{n as e}from"./rolldown-runtime-2d059c5e81f4.js";import{A_t as t,F1 as n,Jat as r,Kat as i,M_t as a,P1 as o,_kt as s,fDt as c,gkt as l}from"./app-initial-f1c3ec6698cf.js";import{$2 as u,Gbt as d,XAt as f,YAt as p,e4 as m,qbt as h}from"./app-initial-a42f602681b3.js";import{Bqt as g,Ddt as _,EY as v,Edt as y,HQt as b,M1t as x,OY as S,Odt as C,P$t as ee,TY as te,WQt as ne,XIt as re,Xqt as ie,YIt as ae,dxt as w,kY as T,m1t as E,rJt as oe,t1t as D,u1t as se,uxt as ce,wY as O,zqt as le}from"./app-initial-48c569ae16a4.js";import{Sa as ue,xa as de}from"./app-initial-cb4050427ba6.js";import{a as fe,i as k,n as A,o as pe,s as me,t as he}from"./iconResolver-c27600649025.js";import{A as j,B as M,C as N,D as ge,E as _e,F as ve,H as P,I as ye,L as be,M as F,N as xe,O as Se,P as Ce,R as we,S as Te,T as I,U as Ee,V as De,_ as Oe,a as L,b as ke,c as Ae,d as je,f as Me,g as Ne,h as Pe,i as Fe,j as R,k as Ie,l as Le,m as Re,n as ze,o as Be,p as Ve,r as He,s as Ue,t as z,u as We,w as Ge,x as Ke,y as qe,z as Je}from"./builder-f95387984534.js";import{n as Ye,r as Xe,t as Ze}from"./use-target-apps-4a7df6a5bab9.js";var Qe,$e,et,tt,nt,rt,it,at,ot;function st(){return(st=e((()=>{Qe=`file-tree-container`,$e=`data-file-tree-style`,et=`data-file-tree-unsafe-css`,tt=`data-file-tree-scrollbar-measure`,nt=`data-file-tree-scrollbar-gutter-measured`,rt=`--trees-scrollbar-gutter-measured`,it=`header`,at=`context-menu`,ot=`context-menu-trigger`})))()}function B(e,t){if(typeof e==`number`)return{itemHeight:t??V.default.itemHeight,factor:e};let n=V[e??`default`];return{itemHeight:t??n.itemHeight,factor:n.factor}}var V;function ct(){return(ct=e((()=>{V={compact:{itemHeight:24,factor:.8},default:{itemHeight:30,factor:1},relaxed:{itemHeight:36,factor:1.2}}})))()}var lt;function ut(){return(ut=e((()=>{ct(),lt=V.default.itemHeight})))()}var dt;function ft(){return(ft=e((()=>{dt=`@layer base, theme, unsafe;

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
`})))()}function pt(e){return`${ht}
@layer base {
  ${e}
}`}function mt(e){return`${ht}
@layer unsafe {
  ${e}
}`}var ht;function gt(){return(gt=e((()=>{ht=`@layer base, unsafe;`})))()}function _t(e){let t=vt.get(e);if(t!=null)return t;let n=document.createElement(`div`);n.setAttribute(tt,`true`);let r=document.createElement(`div`);r.style.position=`relative`,r.style.height=`200%`,n.appendChild(r),e.appendChild(n);let i=Math.max(n.offsetWidth-n.clientWidth,0);return n.remove(),vt.set(e,i),i}function H(e,t){if(!e.isConnected)return;let n=_t(t);if(n==null)return;let r=t.querySelector(`style[${nt}]`),i=r instanceof HTMLStyleElement?r:document.createElement(`style`);r instanceof HTMLStyleElement||(i.setAttribute(nt,``),t.appendChild(i)),i.textContent=`:host { ${rt}: ${n}px; }`}var vt;function U(){return(U=e((()=>{st(),vt=new WeakMap})))()}function yt(e){if(typeof CSSStyleSheet<`u`&&typeof CSSStyleSheet.prototype.replaceSync==`function`&&`adoptedStyleSheets`in e){St??(St=new CSSStyleSheet,St.replaceSync(pt(dt)));let t=!1;try{e.adoptedStyleSheets=[St],t=!0}catch{}if(t){e.querySelector(`style[${$e}]`)?.remove();return}}if(e.querySelector(`style[data-file-tree-style]`)==null){let t=document.createElement(`style`);t.setAttribute($e,``),t.textContent=pt(dt),e.prepend(t)}}function bt(e,t){xt(e,t),yt(t),H(e,t)}function xt(e,t){let n=e.querySelector(`template[shadowrootmode="open"], template[data-file-tree-shadowrootmode="open"]`);n instanceof HTMLTemplateElement&&(t.childNodes.length>0||(t.appendChild(n.content.cloneNode(!0)),n.hasAttribute(`shadowrootmode`)&&n.remove()))}var St;function Ct(){return(Ct=e((()=>{if(st(),ft(),gt(),U(),typeof HTMLElement<`u`&&customElements.get(`file-tree-container`)==null){class e extends HTMLElement{constructor(){super()}connectedCallback(){let e=this.shadowRoot??this.attachShadow({mode:`open`});bt(this,e)}}if(customElements.define(Qe,e),typeof document<`u`)for(let e of Array.from(document.querySelectorAll(Qe)))e instanceof HTMLElement&&bt(e,e.shadowRoot??e.attachShadow({mode:`open`}))}})))()}function wt(e,t=`closed`,n=null){let r=Et(t);return{activeNodeCount:e.nodes.length-1,collapsedDirectoryIds:new Set,collapseNewDirectoriesByDefault:!1,defaultExpansion:r,directoriesOpenByDefault:r===`open`,hasCollapsedDirectoryOverrides:!1,directoryLoadInfoById:new Map,expandedDirectoryIds:new Set,instrumentation:n,listeners:new Map,pathCacheByNodeId:new Map([[e.rootId,{path:``,version:0}]]),pathCacheVersion:0,snapshot:e,transactionStack:[]}}function Tt(){return{affectedAncestorIds:new Set,affectedNodeIds:new Set,events:[]}}function Et(e){if(typeof e!=`number`)return e;if(!Number.isInteger(e)||e<0)throw Error(`initialExpansion must be "open", "closed", or a non-negative integer depth. Received: ${String(e)}`);return e}function Dt(e,t){return j(t,2)||e.defaultExpansion===`open`?!0:e.defaultExpansion!==`closed`&&Se(t)<=e.defaultExpansion}function W(e,t,n=e.snapshot.nodes[t]){return n==null||!F(n)?!1:e.directoriesOpenByDefault&&!e.hasCollapsedDirectoryOverrides?!0:e.collapsedDirectoryIds.has(t)?!1:e.expandedDirectoryIds.has(t)?!0:Dt(e,n)}function Ot(e,t,n,r=e.snapshot.nodes[t]){if(r==null||!F(r))return;let i=Dt(e,r);if(n){if(i){e.collapsedDirectoryIds.delete(t),e.hasCollapsedDirectoryOverrides=e.collapsedDirectoryIds.size>0;return}e.expandedDirectoryIds.add(t);return}if(i){e.collapsedDirectoryIds.add(t),e.hasCollapsedDirectoryOverrides=!0;return}e.expandedDirectoryIds.delete(t)}function kt(e,t){let n=e.directoryLoadInfoById.get(t);if(n!=null)return n;let r={activeAttemptId:null,errorMessage:null,nextAttemptId:1,state:`loaded`};return e.directoryLoadInfoById.set(t,r),r}function At(e,t){return e.directoryLoadInfoById.get(t)?.state??`loaded`}function jt(e,t){let n=kt(e,t);if(n.state===`loading`&&n.activeAttemptId!=null)return{attemptId:n.activeAttemptId,nodeId:t,reused:!0};let r=n.nextAttemptId;return n.activeAttemptId=r,n.errorMessage=null,n.nextAttemptId+=1,n.state=`loading`,{attemptId:r,nodeId:t,reused:!1}}function Mt(e,t){let n=kt(e,t);n.activeAttemptId=null,n.errorMessage=null,n.state=`unloaded`}function Nt(e,t,n){let r=e.directoryLoadInfoById.get(t);return r==null||r.activeAttemptId!==n?!1:(r.activeAttemptId=null,r.errorMessage=null,r.state=`loaded`,!0)}function Pt(e,t,n){return e.directoryLoadInfoById.get(t)?.activeAttemptId===n}function Ft(e,t,n,r){let i=e.directoryLoadInfoById.get(t);return i==null||i.activeAttemptId!==n?!1:(i.activeAttemptId=null,i.errorMessage=r??null,i.state=`error`,!0)}function It(e,t){e.directoryLoadInfoById.delete(t)}function Lt(){return(Lt=e((()=>{R()})))()}function Rt(e,t,n){let r=n,i=e.listeners.get(t);return i==null?e.listeners.set(t,new Set([r])):i.add(r),()=>{let n=e.listeners.get(t);n!=null&&(n.delete(r),n.size===0&&e.listeners.delete(t))}}function zt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,operation:`add`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function Bt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,operation:`remove`,path:e.path,projectionChanged:e.projectionChanged,recursive:e.recursive,visibleCountDelta:null}}function Vt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!0,from:e.from,operation:`move`,projectionChanged:e.projectionChanged,to:e.to,visibleCountDelta:null}}function Ht(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`expand`,path:e.path,projectionChanged:!0,visibleCountDelta:null}}function Ut(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`collapse`,path:e.path,projectionChanged:!0,visibleCountDelta:null}}function Wt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],canonicalChanged:!1,operation:`mark-directory-unloaded`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function Gt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,operation:`begin-child-load`,path:e.path,projectionChanged:e.projectionChanged,reused:e.reused,visibleCountDelta:null}}function Kt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:e.childEvents.some(e=>e.canonicalChanged),childEvents:e.childEvents,operation:`apply-child-patch`,path:e.path,projectionChanged:e.projectionChanged,visibleCountDelta:null}}function qt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,operation:`complete-child-load`,path:e.path,projectionChanged:e.projectionChanged,stale:e.stale,visibleCountDelta:null}}function Jt(e){return{affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],attemptId:e.attemptId,canonicalChanged:!1,errorMessage:e.errorMessage,operation:`fail-child-load`,path:e.path,projectionChanged:e.projectionChanged,stale:e.stale,visibleCountDelta:null}}function Yt(e){return{activeNodeCountAfter:e.activeNodeCountAfter,activeNodeCountBefore:e.activeNodeCountBefore,affectedAncestorIds:e.affectedAncestorIds??[],affectedNodeIds:e.affectedNodeIds??[],cachedPathEntryCountAfter:e.cachedPathEntryCountAfter,cachedPathEntryCountBefore:e.cachedPathEntryCountBefore,canonicalChanged:!1,idsPreserved:e.idsPreserved,loadInfoEntryCountAfter:e.loadInfoEntryCountAfter,loadInfoEntryCountBefore:e.loadInfoEntryCountBefore,mode:e.mode,operation:`cleanup`,projectionChanged:e.projectionChanged,reclaimedCachedPathEntryCount:e.reclaimedCachedPathEntryCount,reclaimedLoadInfoEntryCount:e.reclaimedLoadInfoEntryCount,reclaimedNodeSlotCount:e.reclaimedNodeSlotCount,reclaimedSegmentCount:e.reclaimedSegmentCount,segmentCountAfter:e.segmentCountAfter,segmentCountBefore:e.segmentCountBefore,totalNodeSlotCountAfter:e.totalNodeSlotCountAfter,totalNodeSlotCountBefore:e.totalNodeSlotCountBefore,visibleCountDelta:null}}function Xt(e,t,n){return{...n,visibleCountDelta:cn(e)-t}}function Zt(e,t){let n=cn(e),r=Tt();e.transactionStack.push(r);try{t()}catch(t){throw en(e,r,!1),t}en(e,r,!0,cn(e)-n)}function Qt(e,t){let n=e.instrumentation;if(n==null){$t(e,t);return}I(n,`store.events.record`,()=>$t(e,t))}function $t(e,t){let n=e.transactionStack[e.transactionStack.length-1]??null;if(n==null){on(e,t);return}n.events.push(t),an(n,t)}function en(e,t,n,r=null){if(e.transactionStack.pop()!==t)throw Error(`Transaction stack underflow`);if(!n)return;let i=e.transactionStack[e.transactionStack.length-1]??null;if(i!=null){let n=e.instrumentation;n==null?rn(i,t):I(n,`store.events.batch.merge`,()=>rn(i,t));return}let a=tn(t,r),o=e.instrumentation;if(o==null){on(e,a);return}I(o,`store.events.batch.commit`,()=>on(e,a))}function tn(e,t){return{affectedAncestorIds:[...e.affectedAncestorIds],affectedNodeIds:[...e.affectedNodeIds],canonicalChanged:e.events.some(e=>e.canonicalChanged),events:[...e.events],operation:`batch`,projectionChanged:e.events.some(e=>e.projectionChanged),visibleCountDelta:t}}function nn(e,t){for(let n of t.affectedAncestorIds)e.affectedAncestorIds.add(n);for(let n of t.affectedNodeIds)e.affectedNodeIds.add(n)}function rn(e,t){for(let n of t.events)e.events.push(n);nn(e,t)}function an(e,t){for(let n of t.affectedNodeIds)e.affectedNodeIds.add(n);for(let n of t.affectedAncestorIds)e.affectedAncestorIds.add(n)}function on(e,t){let n=e.instrumentation;if(n==null){sn(e,t);return}I(n,`store.events.emit`,()=>sn(e,t))}function sn(e,t){e.listeners.get(t.operation)?.forEach(e=>e(t)),e.listeners.get(`*`)?.forEach(e=>e(t))}function cn(e){return e.snapshot.nodes[e.snapshot.rootId]?.visibleSubtreeCount??0}function ln(){return(ln=e((()=>{N(),Lt()})))()}function un(e,t){if(e.snapshot.options.flattenEmptyDirectories!==!0)return null;let n=e.snapshot.nodes[t];if(n==null||!F(n)||j(n,2))return null;let r=e.snapshot.directories.get(t);if(r==null||r.childIds.length!==1)return null;let i=r.childIds[0];if(i==null)return null;let a=e.snapshot.nodes[i];return a==null||!F(a)?null:i}function dn(e,t){let n=t;for(;;){let t=un(e,n);if(t==null)return n;n=t}}function fn(e,t){let n=[t],r=t;for(;;){let t=un(e,r);if(t==null)return n;n.push(t),r=t}}function pn(){return(pn=e((()=>{R()})))()}function mn(e,t){let n=t==null?e.snapshot.rootId:Cn(e,t);return n==null?[]:Tn(e,n)}function hn(e,t){let n=qe(t),r=n.isDirectory?n.segments:n.segments.slice(0,-1),i=Bn(e,zn(e,r)),{createdNodeIds:a,directoryId:o}=En(e,r),s=new Set(a),c=o;if(n.isDirectory){let n=q(e,o);if(j(n,1))throw Error(`Path already exists: "${t}"`);_e(n,1),e.pathCacheByNodeId.set(o,{path:t,version:e.pathCacheVersion}),s.add(o)}else c=On(e,o,n.basename),s.add(c);bn(e,o);let l=Bn(e,o);return zt({affectedAncestorIds:Sn(e,c),affectedNodeIds:[...s],path:t,projectionChanged:Vn(i,l)})}function gn(e,t,n){let r=Cn(e,t);if(r==null)throw Error(`Path does not exist: "${t}"`);let i=q(e,r);if(j(i,2))throw Error(`The root node cannot be removed`);if(F(i)&&K(e,r).childIds.length>0&&n.recursive!==!0)throw Error(`Cannot remove a non-empty directory without recursive: "${t}"`);let a=i.parentId,o=Bn(e,a),s=Ln(e,r);jn(e,a,r,i.nameId),Rn(e,a),bn(e,a);let c=Bn(e,a);return Bt({affectedAncestorIds:Sn(e,a),affectedNodeIds:s,path:t,projectionChanged:Vn(o,c),recursive:n.recursive===!0})}function _n(e,t,n,r){let i=Cn(e,t);if(i==null)throw Error(`Source path does not exist: "${t}"`);let a=q(e,i);if(j(a,2))throw Error(`The root node cannot be moved`);let o=r.collision??`error`,s=Fn(e,i,n),c=Bn(e,a.parentId),l=Bn(e,s.parentId),u=je(e.snapshot.segmentTable,a.nameId),d=Ve(e.snapshot.segmentTable,s.basename);if(s.parentId===a.parentId&&u===s.basename)return null;if(F(a)&&Gn(e,i,s.parentId))throw Error(`Cannot move a directory into one of its descendants`);let f=ye(e.snapshot.nodes,K(e,s.parentId)).get(d),p=s.existingNodeId??f??null;if(p!=null&&p!==i&&In(e,p,o,Ie(a))===`skip`)return null;let m=a.parentId;jn(e,m,i,a.nameId),a.parentId=s.parentId,a.nameId=d,e.pathCacheByNodeId.delete(i),Wn(e,i),An(e,s.parentId,i),Rn(e,m),e.pathCacheVersion++,bn(e,m),s.parentId!==m&&bn(e,s.parentId);let h=Bn(e,m),g=Bn(e,s.parentId);return Vt({affectedAncestorIds:[...new Set([...Sn(e,m),...Sn(e,s.parentId)])],affectedNodeIds:[i],from:t,projectionChanged:Hn([c,l],[h,g]),to:G(e,i)})}function vn(e,t){let n=e.pathCacheByNodeId.get(t);return n!=null&&n.version===e.pathCacheVersion?n.path:null}function yn(e,t,n){return e.pathCacheByNodeId.set(t,{path:n,version:e.pathCacheVersion}),n}function G(e,t){let n=q(e,t),r=vn(e,t);if(r!=null)return r;if(j(n,2))return yn(e,t,``);let i=G(e,n.parentId),a=je(e.snapshot.segmentTable,n.nameId),o=i.length===0?a:`${i}${a}`;return yn(e,t,F(n)?`${o}/`:o)}function bn(e,t){let n=e.instrumentation;if(n==null){qn(e,t);return}I(n,`store.recomputeCountsUpwardFrom`,()=>qn(e,t))}function xn(e,t){let n=[[t,0]],{nodes:r,directories:i}=e.snapshot;for(;n.length>0;){let t=n[n.length-1],a=t[0],o=r[a];if(o==null||!F(o)){Kn(e,a,o,!0),n.pop();continue}let s=i.get(a);if(s==null||t[1]>=s.childIds.length){Kn(e,a,o,!0),n.pop();continue}let c=s.childIds[t[1]++];n.push([c,0])}}function Sn(e,t){let n=[],r=t;for(;r!=null;){let t=q(e,r);if(n.push(r),r===e.snapshot.rootId)break;r=t.parentId}return n}function Cn(e,t){if(t.length===0)return e.snapshot.rootId;let n=ke(t);return wn(e,n.segments,n.requiresDirectory)}function wn(e,t,n){let r=e.snapshot.rootId;for(let n of t){let t=e.snapshot.segmentTable.idByValue.get(n);if(t===void 0)return null;let i=K(e,r),a=ye(e.snapshot.nodes,i).get(t);if(a===void 0)return null;r=a}let i=q(e,r);return n&&!F(i)?null:r}function K(e,t){let n=e.snapshot.directories.get(t);if(n===void 0)throw Error(`Unknown directory child index for node ${String(t)}`);return n}function q(e,t){let n=e.snapshot.nodes[t];if(n===void 0||j(n,4))throw Error(`Unknown node ID: ${String(t)}`);return n}function Tn(e,t){let n=e.snapshot.nodes[t];if(n===void 0||j(n,4))return[];if(!F(n))return[G(e,t)];if(K(e,t).childIds.length===0)return j(n,1)&&!j(n,2)?[G(e,t)]:[];let r=[],i=[{childIndex:0,nodeId:t}];for(;i.length>0;){let t=i[i.length-1];if(t==null)break;let n=e.snapshot.nodes[t.nodeId];if(n===void 0||j(n,4)){i.pop();continue}if(!F(n)){r.push(G(e,t.nodeId)),i.pop();continue}let a=K(e,t.nodeId);if(a.childIds.length===0){j(n,1)&&!j(n,2)&&r.push(G(e,t.nodeId)),i.pop();continue}let o=a.childIds[t.childIndex];if(o==null){i.pop();continue}t.childIndex++,i.push({childIndex:0,nodeId:o})}return r}function En(e,t){let n=[],r=e.snapshot.rootId;for(let i of t){let t=Ve(e.snapshot.segmentTable,i),a=K(e,r),o=ye(e.snapshot.nodes,a).get(t);if(o!==void 0){if(!F(q(e,o)))throw Error(`Cannot create a directory that collides with an existing file: "${i}"`);r=o;continue}r=Dn(e,r,t),n.push(r)}return{createdNodeIds:n,directoryId:r}}function Dn(e,t,n){let r=q(e,t),i=e.snapshot.nodes.length;return e.snapshot.nodes.push({depthAndFlags:ge(Se(r)+1,0,1),nameId:n,parentId:t,subtreeNodeCount:1,visibleSubtreeCount:1}),e.snapshot.directories.set(i,ve()),An(e,t,i),e.collapseNewDirectoriesByDefault&&(e.collapsedDirectoryIds.add(i),e.hasCollapsedDirectoryOverrides=!0),e.activeNodeCount++,i}function On(e,t,n){let r=Ve(e.snapshot.segmentTable,n),i=K(e,t);if(ye(e.snapshot.nodes,i).has(r))throw Error(`Path already exists: "${Yn(e,t,n)}"`);let a=q(e,t),o=e.snapshot.nodes.length;return e.snapshot.nodes.push({depthAndFlags:ge(Se(a)+1,0),nameId:r,parentId:t,subtreeNodeCount:1,visibleSubtreeCount:1}),An(e,t,o),e.activeNodeCount++,o}function kn(e,t,n){let r=0,i=t.childIds.length;for(;r<i;){let a=r+i>>>1,o=t.childIds[a];if(o==null){i=a;continue}Mn(e,n,o)<0?i=a:r=a+1}return r}function An(e,t,n){let r=K(e,t),i=q(e,n);ye(e.snapshot.nodes,r).set(i.nameId,n),Ce(r,n,i.subtreeNodeCount,i.visibleSubtreeCount);let a=kn(e,r,n);r.childIds.splice(a,0,n),Ee(r,a),De(e.snapshot.nodes,r)}function jn(e,t,n,r){let i=K(e,t),a=be(i),o=a.get(n)??-1;ye(e.snapshot.nodes,i).delete(r),a.delete(n);let s=e.snapshot.nodes[n];s!=null&&Ce(i,n,-s.subtreeNodeCount,-s.visibleSubtreeCount),o>=0&&(i.childIds.splice(o,1),Ee(i,o),De(e.snapshot.nodes,i))}function Mn(e,t,n){let r=e.snapshot.options.sort;return r==="default"?Nn(e,t,n):r(Pn(e,t),Pn(e,n))}function Nn(e,t,n){let r=q(e,t),i=q(e,n),a=F(r);if(a!==F(i))return a?-1:1;let o=Re(Ne(e.snapshot.segmentTable,r.nameId),Ne(e.snapshot.segmentTable,i.nameId));if(o!==0)return o;let s=je(e.snapshot.segmentTable,r.nameId),c=je(e.snapshot.segmentTable,i.nameId);return s===c?t<n?-1:1:s<c?-1:1}function Pn(e,t){let n=q(e,t),r=G(e,t),i=F(n),a=i?r.slice(0,-1):r;return{basename:je(e.snapshot.segmentTable,n.nameId),depth:Se(n),isDirectory:i,path:r,segments:a.length===0?[]:a.split(`/`)}}function Fn(e,t,n){let r=q(e,t),i=Cn(e,n);if(i!=null){let t=q(e,i);if(F(t))return{basename:je(e.snapshot.segmentTable,r.nameId),existingNodeId:null,parentId:i};let a=ke(n).segments;return{basename:a[a.length-1]??``,existingNodeId:i,parentId:t.parentId}}let a=ke(n),o=a.segments[a.segments.length-1]??``,s=a.segments.slice(0,-1),c=s.length===0?e.snapshot.rootId:wn(e,s,!0);if(c==null)throw Error(`Destination parent does not exist: "${n}"`);return{basename:o,existingNodeId:null,parentId:c}}function In(e,t,n,r){if(n===`skip`)return`skip`;if(n===`error`)throw Error(`Destination already exists: "${G(e,t)}"`);let i=q(e,t);if(Ie(i)!==r)throw Error(`replace collision requires the same source and destination kinds`);if(F(i)&&K(e,t).childIds.length>0)throw Error(`replace collision does not support non-empty directories`);let a=i.parentId,o=i.nameId;return Ln(e,t),jn(e,a,t,o),Rn(e,a),bn(e,a),`handled`}function Ln(e,t){let n=[],r=[{nodeId:t,visitedChildren:!1}];for(;r.length>0;){let t=r.pop();if(t==null)break;let i=q(e,t.nodeId);if(t.visitedChildren||!F(i)){F(i)&&e.snapshot.directories.delete(t.nodeId),_e(i,4),e.pathCacheByNodeId.delete(t.nodeId),e.collapsedDirectoryIds.delete(t.nodeId)&&(e.hasCollapsedDirectoryOverrides=e.collapsedDirectoryIds.size>0),e.expandedDirectoryIds.delete(t.nodeId),It(e,t.nodeId),e.activeNodeCount--,n.push(t.nodeId);continue}r.push({nodeId:t.nodeId,visitedChildren:!0});let a=K(e,t.nodeId);for(let e=a.childIds.length-1;e>=0;e--){let t=a.childIds[e];t!=null&&r.push({nodeId:t,visitedChildren:!1})}}return n}function Rn(e,t){let n=t;for(;n!=null;){let t=q(e,n);if(!F(t)||j(t,2)||K(e,n).childIds.length>0)return;_e(t,1),n=t.parentId===n?null:t.parentId}}function zn(e,t){let n=e.snapshot.rootId;for(let r of t){let t=e.snapshot.segmentTable.idByValue.get(r);if(t==null)break;let i=ye(e.snapshot.nodes,K(e,n)).get(t);if(i==null||!F(q(e,i)))break;n=i}return n}function Bn(e,t){let n=Un(e,t);if(n==null)return null;let r=dn(e,n),i=q(e,r),a=n===r?null:fn(e,n).map(t=>G(e,t));return JSON.stringify({flattenedSegmentPaths:a,hasChildren:K(e,r).childIds.length>0,path:G(e,r),terminalKind:Ie(i)})}function Vn(e,t){return Hn([e],[t])}function Hn(e,t){for(let n=0;n<e.length;n+=1){let r=e[n],i=t[n];if(r==null||i==null||r!==i)return!0}return!1}function Un(e,t){let n=t;for(;n!=null;){let t=q(e,n);if(!F(t)||j(t,2))return null;if(!W(e,n,t))return n;n=t.parentId}return null}function Wn(e,t){let n=q(e,t);if(xe(n,(t===e.snapshot.rootId?-1:Se(q(e,n.parentId)))+1),!F(n))return;let r=K(e,t);for(let t of r.childIds)Wn(e,t)}function Gn(e,t,n){let r=n;for(;r!=null;){if(r===t)return!0;let n=q(e,r);if(r===e.snapshot.rootId)return!1;r=n.parentId}return!1}function Kn(e,t,n=q(e,t),r=!1){let i=e.instrumentation;if(i==null){Jn(e,t,n,r);return}I(i,`store.recomputeNodeCounts`,()=>Jn(e,t,n,r))}function qn(e,t){let n=t;for(;n!=null;){let t=q(e,n),r=t.subtreeNodeCount,i=t.visibleSubtreeCount;if(Kn(e,n,t),n===e.snapshot.rootId)return;let a=t.subtreeNodeCount-r,o=t.visibleSubtreeCount-i,s=t.parentId;(a!==0||o!==0)&&Ce(K(e,s),n,a,o),n=s}}function Jn(e,t,n,r){if(!F(n)){n.subtreeNodeCount=1,n.visibleSubtreeCount=1;return}let i=K(e,t);if(r){let t=e.instrumentation;t==null?M(e.snapshot.nodes,i):I(t,`store.recomputeNodeCounts.rebuildChildAggregates`,()=>M(e.snapshot.nodes,i))}let a=1+i.totalChildSubtreeNodeCount,o=i.totalChildVisibleSubtreeCount;if(n.subtreeNodeCount=a,j(n,2)){n.visibleSubtreeCount=o;return}n.visibleSubtreeCount=un(e,t)==null?W(e,t,n)?1+o:1:o}function Yn(e,t,n){let r=G(e,t);return r.length===0?n:`${r}${n}`}function Xn(){return(Xn=e((()=>{Je(),R(),N(),Oe(),Me(),Lt(),ln(),pn()})))()}function Zn(e){return e!=null&&!j(e,4)}function Qn(e,t){let n=e.snapshot.nodes[t];return!Zn(n)||!F(n)||j(n,2)?null:n}function $n(e){let t=0;for(let[n,r]of e.pathCacheByNodeId)r.version===e.pathCacheVersion&&Zn(e.snapshot.nodes[n])&&(t+=1);return t}function er(e){return Math.max(0,e.valueById.length-1)}function tr(e){return{activeNodeCount:e.activeNodeCount,cachedPathEntryCount:$n(e),loadInfoEntryCount:e.directoryLoadInfoById.size,segmentCount:er(e.snapshot.segmentTable),totalNodeSlotCount:Math.max(0,e.snapshot.nodes.length-1)}}function nr(e,t,n,r){return{activeNodeCountAfter:r.activeNodeCount,activeNodeCountBefore:n.activeNodeCount,cachedPathEntryCountAfter:r.cachedPathEntryCount,cachedPathEntryCountBefore:n.cachedPathEntryCount,idsPreserved:t,loadInfoEntryCountAfter:r.loadInfoEntryCount,loadInfoEntryCountBefore:n.loadInfoEntryCount,mode:e,reclaimedCachedPathEntryCount:n.cachedPathEntryCount-r.cachedPathEntryCount,reclaimedLoadInfoEntryCount:n.loadInfoEntryCount-r.loadInfoEntryCount,reclaimedNodeSlotCount:n.totalNodeSlotCount-r.totalNodeSlotCount,reclaimedSegmentCount:n.segmentCount-r.segmentCount,segmentCountAfter:r.segmentCount,segmentCountBefore:n.segmentCount,totalNodeSlotCountAfter:r.totalNodeSlotCount,totalNodeSlotCountBefore:n.totalNodeSlotCount}}function rr(e){let t=[],n=[];for(let n of e.collapsedDirectoryIds)Qn(e,n)!=null&&t.push(G(e,n));for(let t of e.expandedDirectoryIds)Qn(e,t)!=null&&n.push(G(e,t));return{collapsedPaths:t,expandedPaths:n}}function ir(e){let t=[];for(let[n,r]of e.directoryLoadInfoById)Qn(e,n)!=null&&At(e,n)!==`loaded`&&t.push({info:{activeAttemptId:null,errorMessage:r.errorMessage,nextAttemptId:r.nextAttemptId,state:r.state},path:G(e,n)});return t}function ar(e,t){e.collapsedDirectoryIds.clear(),e.hasCollapsedDirectoryOverrides=!1,e.expandedDirectoryIds.clear();for(let n of t.expandedPaths){let t=Cn(e,n);t!=null&&Ot(e,t,!0,q(e,t))}for(let n of t.collapsedPaths){let t=Cn(e,n);t!=null&&Ot(e,t,!1,q(e,t))}}function or(e,t){e.directoryLoadInfoById.clear();for(let n of t){let t=Cn(e,n.path);t!=null&&Qn(e,t)!=null&&e.directoryLoadInfoById.set(t,{activeAttemptId:null,errorMessage:n.info.errorMessage,nextAttemptId:n.info.nextAttemptId,state:n.info.state})}}function sr(e){e.pathCacheVersion+=1,e.pathCacheByNodeId.clear(),e.pathCacheByNodeId.set(e.snapshot.rootId,{path:``,version:e.pathCacheVersion})}function cr(e){let t=e.snapshot.segmentTable,n=We();for(let r of e.snapshot.nodes)if(Zn(r)){if(j(r,2)){r.nameId=0;continue}r.nameId=Ve(n,je(t,r.nameId))}e.snapshot.segmentTable=n}function lr(e){for(let[t,n]of e.snapshot.directories){let r=e.snapshot.nodes[t];if(!Zn(r)||!F(r)){e.snapshot.directories.delete(t);continue}let i=n.childIds.filter(n=>{let r=e.snapshot.nodes[n];return Zn(r)&&r.parentId===t});n.childIds=i,n.childIdByNameId=new Map(i.map(t=>[q(e,t).nameId,t])),n.childPositionById=new Map(i.map((e,t)=>[e,t])),M(e.snapshot.nodes,n)}}function ur(e){let t=e.snapshot.nodes.length-1;for(;t>e.snapshot.rootId;){let n=e.snapshot.nodes[t];if(Zn(n))break;--t}e.snapshot.nodes.length=t+1}function dr(e){let t=rr(e),n=ir(e);I(e.instrumentation,`store.cleanup.stable.clearPathCaches`,()=>sr(e)),I(e.instrumentation,`store.cleanup.stable.rebuildSegmentTable`,()=>cr(e)),I(e.instrumentation,`store.cleanup.stable.rebuildDirectoryIndexes`,()=>lr(e)),I(e.instrumentation,`store.cleanup.stable.trimTrailingRemovedNodeSlots`,()=>ur(e)),I(e.instrumentation,`store.cleanup.stable.restoreExpansionOverrides`,()=>ar(e,t)),I(e.instrumentation,`store.cleanup.stable.restoreDirectoryLoadInfos`,()=>or(e,n)),I(e.instrumentation,`store.cleanup.stable.recomputeCounts`,()=>xn(e,e.snapshot.rootId))}function fr(e){let t=rr(e),n=ir(e),r=I(e.instrumentation,`store.cleanup.aggressive.listPaths`,()=>mn(e)),i=Ke({...e.snapshot.options},e.instrumentation),a=I(e.instrumentation,`store.cleanup.aggressive.rebuildSnapshot`,()=>{let e=new z(i);return e.appendPaths(r),e.finish()});e.snapshot=a,e.activeNodeCount=a.nodes.length-1,e.pathCacheByNodeId=new Map([[a.rootId,{path:``,version:0}]]),e.pathCacheVersion=0,I(e.instrumentation,`store.cleanup.aggressive.restoreExpansionOverrides`,()=>ar(e,t)),I(e.instrumentation,`store.cleanup.aggressive.restoreDirectoryLoadInfos`,()=>or(e,n)),I(e.instrumentation,`store.cleanup.aggressive.recomputeCounts`,()=>xn(e,e.snapshot.rootId))}function pr(e){for(let t of e.directoryLoadInfoById.values())if(t.state===`loading`&&t.activeAttemptId!=null)return!0;return!1}function mr(e,t){let n=tr(e);t===`stable`?I(e.instrumentation,`store.cleanup.stable`,()=>dr(e)):I(e.instrumentation,`store.cleanup.aggressive`,()=>fr(e));let r=tr(e);return nr(t,t===`stable`,n,r)}function hr(){return(hr=e((()=>{Je(),R(),N(),Me(),L(),Lt(),Xn()})))()}function gr(e,t){let n=t+2;if(n<=e.length)return e;let r=e.length;for(;r<n;)r*=2;let i=new Int32Array(r);return i.fill(-1),i.set(e),i}function J(e){return q(e,e.snapshot.rootId).visibleSubtreeCount}function _r(e,t,n,r){let i=q(e,t.terminalNodeId),a=Math.max(1,i.visibleSubtreeCount);return Math.min(r-1,n+a-1)}function vr(e,t,n,r){return{ancestorPaths:r,index:t.index,posInSet:t.posInSet,row:Lr(e,t.cursor),setSize:t.setSize,subtreeEndIndex:_r(e,t.cursor,t.index,n)}}function yr(e,t,n,r,i,a){let o=K(e,t),{childIndex:s,childVisibleIndex:c,localVisibleIndex:l}=P(e.snapshot.nodes,o,n),u=o.childIds[s];if(u==null)throw Error(`Visible index ${String(n)} is out of range`);return br(e,u,l,r+c,i+1,s,o.childIds.length,a)}function br(e,t,n,r,i,a,o,s){if(!F(q(e,t))){if(n===0)return{ancestors:s,cursor:{headNodeId:t,terminalNodeId:t,visibleDepth:i},index:r,posInSet:a,setSize:o};throw Error(`Visible index ${String(n)} is out of range for file`)}let c=jr(e,t,i);if(n===0)return{ancestors:s,cursor:c,index:r,posInSet:a,setSize:o};let l=q(e,c.terminalNodeId);if(!F(l)||!W(e,c.terminalNodeId,l))throw Error(`Visible index ${String(n)} is out of range for collapsed directory`);return yr(e,c.terminalNodeId,n-1,r+1,c.visibleDepth,[...s,{cursor:c,index:r,posInSet:a,setSize:o}])}function xr(e,t){let n=J(e);if(t<0||t>=n)return null;let r=yr(e,e.snapshot.rootId,t,0,-1,[]),i=r.ancestors.map(t=>G(e,t.cursor.terminalNodeId)),a=null;return{ancestorPaths:i,get ancestorRows(){if(a!=null)return a;let t=[],i=[];for(let a of r.ancestors){let r=vr(e,a,n,[...i]);t.push(r),i.push(r.row.path)}return a=t,a},index:r.index,posInSet:r.posInSet,row:Lr(e,r.cursor),setSize:r.setSize,subtreeEndIndex:_r(e,r.cursor,r.index,n)}}function Sr(e,t,n){let r=e.instrumentation,i=J(e);if(i<=0||n<t)return[];let a=Math.max(0,Math.min(t,i-1)),o=Math.max(a,Math.min(n,i-1));if(r==null){if(a===0)return Ir(e,o+1);let t=[],n=Or(e,a);for(let r=a;r<=o&&n!=null;r++){let r=Lr(e,n);t.push(r),n=Nr(e,n)}return t}let s=[],c=0,l=0,u=I(r,`store.getVisibleSlice.selectFirstRow`,()=>Or(e,a));for(let t=a;t<=o&&u!=null;t++){let t=I(r,`store.getVisibleSlice.materializeRow`,()=>Lr(e,u));s.push(t),t.isFlattened&&(c++,l+=t.flattenedSegments?.length??0),u=I(r,`store.getVisibleSlice.advanceCursor`,()=>Nr(e,u))}return Ge(r,`workload.visibleRowsRead`,s.length),Ge(r,`workload.flattenedRowsRead`,c),Ge(r,`workload.flattenedSegmentsRead`,l),s}function Cr(e,t=J(e)){let n=e.instrumentation;return n==null?Fr(e,t):I(n,`store.getVisibleTreeProjection`,()=>Fr(e,t))}function wr(e){return Pr(Cr(e))}function Tr(e,t){let n=Cn(e,t);if(n==null||n===e.snapshot.rootId||F(q(e,n))&&dn(e,n)!==n)return null;let r=0,i=n,{nodes:a,rootId:o}=e.snapshot;for(;i!==o;){let t=q(e,i).parentId,n=K(e,t),s=be(n).get(i);if(s==null)throw Error(`Child ${String(i)} was not found in its parent index`);if(r+=we(a,n,s),t!==o){let n=q(e,t),a=un(e,t);if(!W(e,t,n)&&a!==i)return null;dn(e,t)===t&&(r+=1)}i=t}return r}function Er(e,t){let n=Cn(e,t);if(n==null)throw Error(`Path does not exist: "${t}"`);let r=q(e,n);if(!F(r))throw Error(`Path is not a directory: "${t}"`);return W(e,n,r)?null:(Ot(e,n,!0,r),bn(e,n),Ht({affectedAncestorIds:Sn(e,n),affectedNodeIds:[n],path:t,projectionChanged:!0}))}function Dr(e,t){let n=Cn(e,t);if(n==null)throw Error(`Path does not exist: "${t}"`);let r=q(e,n);if(!F(r))throw Error(`Path is not a directory: "${t}"`);return W(e,n,r)?(Ot(e,n,!1,r),bn(e,n),Ut({affectedAncestorIds:Sn(e,n),affectedNodeIds:[n],path:t,projectionChanged:!0})):null}function Or(e,t){return t<0||t>=J(e)?null:kr(e,e.snapshot.rootId,t,-1)}function kr(e,t,n,r){let i=K(e,t),a=e.instrumentation,{childIndex:o,localVisibleIndex:s}=a==null?P(e.snapshot.nodes,i,n):I(a,`store.getVisibleSlice.selectChildIndex`,()=>P(e.snapshot.nodes,i,n)),c=i.childIds[o];if(c!=null)return Ar(e,c,s,r+1);throw Error(`Visible index ${String(n)} is out of range`)}function Ar(e,t,n,r){if(!F(q(e,t))){if(n===0)return{headNodeId:t,terminalNodeId:t,visibleDepth:r};throw Error(`Visible index ${String(n)} is out of range for file`)}let i=jr(e,t,r);if(n===0)return i;let a=q(e,i.terminalNodeId);if(!F(a)||!W(e,i.terminalNodeId,a))throw Error(`Visible index ${String(n)} is out of range for collapsed directory`);return kr(e,i.terminalNodeId,n-1,i.visibleDepth)}function jr(e,t,n){return F(q(e,t))?e.instrumentation==null?{headNodeId:t,terminalNodeId:dn(e,t),visibleDepth:n}:{headNodeId:t,terminalNodeId:I(e.instrumentation,`store.getVisibleSlice.flatten.resolveTerminalDirectory`,()=>dn(e,t)),visibleDepth:n}:{headNodeId:t,terminalNodeId:t,visibleDepth:n}}function Mr(e,t){let n=q(e,t);if(!F(n))return!0;let r=n.parentId;return r===e.snapshot.rootId||un(e,r)!==t}function Nr(e,t){let n=q(e,t.terminalNodeId);if(F(n)){let r=K(e,t.terminalNodeId);if(W(e,t.terminalNodeId,n)&&r.childIds.length>0){let n=r.childIds[0];return n==null?null:Ar(e,n,0,t.visibleDepth+1)}}let r=t.terminalNodeId,i=t.visibleDepth;for(;;){let t=q(e,r);if(r===e.snapshot.rootId)return null;let n=t.parentId,a=K(e,n),o=be(a).get(r)??-1;if(o<0)throw Error(`Child ${String(r)} was not found in its parent index`);let s=a.childIds[o+1]??null;if(s!=null)return Ar(e,s,0,i);Mr(e,r)&&i--,r=n}}function Pr(e){let t=e.paths.length,n=Array(t);for(let r=0;r<t;r+=1){let t=e.getParentIndex(r);n[r]={index:r,parentPath:t>=0?e.paths[t]??null:null,path:e.paths[r]??``,posInSet:e.posInSetByIndex[r]??0,setSize:e.setSizeByIndex[r]??0}}return{getParentIndex:e.getParentIndex,rows:n,get visibleIndexByPath(){return e.visibleIndexByPath}}}function Fr(e,t){let n=Array(t),r=new Int32Array(t),i=new Int32Array(t),a=new Int32Array(t),o=new Int32Array(zr);o.fill(-1);let s=0,{nodes:c,directories:l,segmentTable:u}=e.snapshot,d=[[l.get(e.snapshot.rootId),0,-1,``]],f=e.snapshot.options.flattenEmptyDirectories,p=e.pathCacheByNodeId,m=e.pathCacheVersion,h=u.valueById;for(;d.length>0&&s<t;){let t=d[d.length-1],u=t[0];if(t[1]>=u.childIds.length){d.pop();continue}let g=t[1],_=u.childIds[t[1]++],v=c[_],y=t[2]+1,b=t[3];o=gr(o,y);let x,S=_;if(F(v))S=f?dn(e,_):_,x=S===_?`${b}${h[v.nameId]}/`:G(e,S);else{let e=p.get(_);x=e!=null&&e.version===m?e.path:`${b}${h[v.nameId]}`}r[s]=o[y],n[s]=x,i[s]=g,a[s]=u.childIds.length,o[y+1]=s,s+=1;let C=c[S];C!=null&&F(C)&&W(e,S,C)&&d.push([l.get(S),0,y,x])}s<t&&(n.length=s);let g=r.subarray(0,s),_=i.subarray(0,s),v=a.subarray(0,s),y=null;return{getParentIndex(e){return e<0||e>=s?-1:g[e]??-1},paths:n,posInSetByIndex:_,setSizeByIndex:v,get visibleIndexByPath(){if(y==null){y=new Map;for(let e=0;e<s;e+=1)y.set(n[e]??``,e)}return y}}}function Ir(e,t){let n=Array(t),r=0,{nodes:i,directories:a,segmentTable:o}=e.snapshot,s=[[a.get(e.snapshot.rootId),0,-1]],c=o.valueById,l=e.snapshot.options.flattenEmptyDirectories,u=e.pathCacheByNodeId,d=e.pathCacheVersion;for(;s.length>0&&r<t;){let t=s[s.length-1],o=t[0];if(t[1]>=o.childIds.length){s.pop();continue}let f=o.childIds[t[1]++],p=i[f],m=t[2]+1;if(!F(p)){let t=u.get(f);n[r++]={depth:m,flattenedSegments:void 0,hasChildren:!1,id:f,isExpanded:!1,isFlattened:!1,isLoading:!1,kind:`file`,loadState:void 0,name:c[p.nameId],path:t!=null&&t.version===d?t.path:G(e,f)};continue}let h=l?dn(e,f):f,g={headNodeId:f,terminalNodeId:h,visibleDepth:m};n[r++]=Lr(e,g);let _=i[h];_!=null&&F(_)&&W(e,h,_)&&s.push([a.get(h),0,m])}return r<t&&(n.length=r),n}function Lr(e,t){let n=q(e,t.terminalNodeId),r=F(n)?Rr(e,t):null,i=G(e,t.terminalNodeId),a=je(e.snapshot.segmentTable,n.nameId),o=F(n)&&K(e,t.terminalNodeId).childIds.length>0,s=t.headNodeId!==t.terminalNodeId,c=e.instrumentation,l=s?c==null?fn(e,t.headNodeId).map(n=>{let r=q(e,n);return{isTerminal:n===t.terminalNodeId,name:je(e.snapshot.segmentTable,r.nameId),nodeId:n,path:G(e,n)}}):I(c,`store.getVisibleSlice.flatten.collectSegments`,()=>fn(e,t.headNodeId).map(n=>{let r=q(e,n);return{isTerminal:n===t.terminalNodeId,name:je(e.snapshot.segmentTable,r.nameId),nodeId:n,path:G(e,n)}})):void 0;return{depth:t.visibleDepth,flattenedSegments:l,hasChildren:o,id:t.terminalNodeId,isExpanded:F(n)&&W(e,t.terminalNodeId,n),isFlattened:s,isLoading:r===`loading`,kind:F(n)?`directory`:`file`,loadState:r==null||r===`loaded`?void 0:r,name:a,path:i}}function Rr(e,t){if(t.headNodeId===t.terminalNodeId)return At(e,t.terminalNodeId);let n=fn(e,t.headNodeId),r=!1,i=!1;for(let t of n){let n=At(e,t);if(n===`loading`)return`loading`;if(n===`error`){i=!0;continue}n===`unloaded`&&(r=!0)}return i?`error`:r?`unloaded`:`loaded`}var zr;function Br(){return(Br=e((()=>{Je(),R(),N(),Me(),Lt(),ln(),pn(),Xn(),zr=64})))()}function Vr(e){let{directories:t,nodes:n,options:r,rootId:i,presortedDirectoryNodeIds:a}=e.snapshot,o=r.flattenEmptyDirectories===!0,s=e=>{let r=n[e];if(r==null||!F(r))return;let i=t.get(e);if(i==null)throw Error(`Unknown directory child index for node ${String(e)}`);let a=i.childIds,s=a.length,c=0,l=0;for(let e=0;e<s;e++){let t=a[e];if(t==null)continue;let r=n[t];c+=r.subtreeNodeCount,l+=r.visibleSubtreeCount}i.totalChildSubtreeNodeCount=c,i.totalChildVisibleSubtreeCount=l,s>=128&&De(n,i),r.subtreeNodeCount=1+c;let u;if(o&&s===1){let e=n[a[0]];u=e!=null&&F(e)?l:1+l}else u=1+l;r.visibleSubtreeCount=u};if(a!=null)for(let e=a.length-1;e>=0;e--)s(a[e]);else for(let e=n.length-1;e>=1;e--)s(e);let c=n[i],l=t.get(i);if(c==null||l==null)return;let u=l.childIds,d=0,f=0;for(let e=0;e<u.length;e++){let t=u[e];if(t==null)continue;let r=n[t];d+=r.subtreeNodeCount,f+=r.visibleSubtreeCount}l.totalChildSubtreeNodeCount=d,l.totalChildVisibleSubtreeCount=f,De(n,l),c.subtreeNodeCount=1+d,c.visibleSubtreeCount=f}function Hr(e){return e.initialExpansion===`open`&&(e.initialExpandedPaths==null||e.initialExpandedPaths.length===0)}function Ur(e,t){switch(t.type){case`add`:case`remove`:if(!t.path.startsWith(e)||t.path===e)throw Error(`Child patch operation must stay within ${e}: "${t.path}"`);break;case`move`:if(!t.from.startsWith(e)||!t.to.startsWith(e)||t.from===e||t.to===e)throw Error(`Child patch move must stay within ${e}: "${t.from}" -> "${t.to}"`)}}var Wr;function Gr(){return(Gr=e((()=>{Je(),R(),N(),Oe(),L(),Lt(),ln(),pn(),Xn(),hr(),Br(),Wr=class e{#e;constructor(e={}){let t=Te(e),n=I(t,`store.builder.create`,()=>new z(e));if(e.preparedInput!=null){let t=He(e.preparedInput);t==null?n.appendPreparedPaths(ze(e.preparedInput),!1):n.appendPresortedPaths(t,Fe(e.preparedInput))}else{let r=e.paths??[];e.presorted===!0?n.appendPaths(r):n.appendPreparedPaths(I(t,`store.preparePathEntries`,()=>Ue(r,e)))}let r=I(t,`store.builder.finish`,()=>n.finish({skipSubtreeCountPass:!0})),i=I(t,`store.state.detectAllDirectoriesExpanded`,()=>(e.initialExpansion??`closed`)===`closed`&&n.didMatchAllInitialExpandedPaths());this.#e=I(t,`store.state.create`,()=>wt(r,i?`open`:e.initialExpansion??`closed`,t)),i&&(this.#e.collapseNewDirectoriesByDefault=!0);let a=i?this.#e.snapshot.directories.size-1:I(t,`store.state.initializeExpandedPaths`,()=>this.initializeExpandedPaths(e.initialExpandedPaths));i||Hr(e)||(e.initialExpansion??`closed`)===`closed`&&a===this.#e.snapshot.directories.size-1||(e.initialExpandedPaths?.length??0)>0&&I(t,`store.state.checkAllDirectoriesExpanded`,()=>this.hasAllDirectoriesExpanded())?I(t,`store.state.initializeOpenVisibleCounts`,()=>Vr(this.#e)):I(t,`store.state.recomputeCounts`,()=>xn(this.#e,this.#e.snapshot.rootId))}static preparePaths(e,t={}){return Ae(e,t)}static prepareInput(e,t={}){return Be(e,t)}static preparePresortedInput(e){return Le(e)}list(e){return I(this.#e.instrumentation,`store.list`,()=>mn(this.#e,e))}add(e){I(this.#e.instrumentation,`store.add`,()=>{let t=J(this.#e);Qt(this.#e,Xt(this.#e,t,hn(this.#e,e)))})}remove(e,t={}){I(this.#e.instrumentation,`store.remove`,()=>{let n=J(this.#e);Qt(this.#e,Xt(this.#e,n,gn(this.#e,e,t)))})}move(e,t,n={}){I(this.#e.instrumentation,`store.move`,()=>{let r=J(this.#e),i=_n(this.#e,e,t,n);i!=null&&Qt(this.#e,Xt(this.#e,r,i))})}batch(e){Zt(this.#e,()=>{if(typeof e==`function`){e(this);return}for(let t of e)switch(t.type){case`add`:this.add(t.path);break;case`remove`:this.remove(t.path,{recursive:t.recursive});break;case`move`:this.move(t.from,t.to,{collision:t.collision})}})}getVisibleCount(){return I(this.#e.instrumentation,`store.getVisibleCount`,()=>J(this.#e))}getVisibleSlice(e,t){return I(this.#e.instrumentation,`store.getVisibleSlice`,()=>Sr(this.#e,e,t))}getVisibleRowContext(e){return I(this.#e.instrumentation,`store.getVisibleRowContext`,()=>xr(this.#e,e))}getVisibleTreeProjection(){return wr(this.#e)}getVisibleTreeProjectionData(e){return Cr(this.#e,e)}getVisibleIndex(e){return I(this.#e.instrumentation,`store.getVisibleIndex`,()=>Tr(this.#e,e))}getPathInfo(e){return I(this.#e.instrumentation,`store.getPathInfo`,()=>{let t=Cn(this.#e,e);if(t==null)return null;let n=q(this.#e,t);return{depth:Se(n),kind:F(n)?`directory`:`file`,path:G(this.#e,t)}})}isExpanded(e){return I(this.#e.instrumentation,`store.isExpanded`,()=>{let t=this.requireDirectoryNodeId(e),n=q(this.#e,t);return W(this.#e,t,n)})}expand(e){I(this.#e.instrumentation,`store.expand`,()=>{let t=J(this.#e),n=Er(this.#e,e);n!=null&&Qt(this.#e,Xt(this.#e,t,n))})}collapse(e){I(this.#e.instrumentation,`store.collapse`,()=>{let t=J(this.#e),n=Dr(this.#e,e);n!=null&&Qt(this.#e,Xt(this.#e,t,n))})}on(e,t){return Rt(this.#e,e,t)}getDirectoryLoadState(e){let t=this.requireDirectoryNodeId(e);return At(this.#e,t)}markDirectoryUnloaded(e){I(this.#e.instrumentation,`store.markDirectoryUnloaded`,()=>{let t=this.requireDirectoryNodeId(e);if(K(this.#e,t).childIds.length>0)throw Error(`Cannot mark a directory with known children as unloaded: "${e}"`);let n=J(this.#e);Mt(this.#e,t),Qt(this.#e,Xt(this.#e,n,Wt({affectedAncestorIds:Sn(this.#e,t),affectedNodeIds:[t],path:e,projectionChanged:this.isDirectoryProjectionVisible(t)})))})}beginChildLoad(e){return I(this.#e.instrumentation,`store.beginChildLoad`,()=>{let t=this.requireDirectoryNodeId(e),n=J(this.#e),r=jt(this.#e,t);return Qt(this.#e,Xt(this.#e,n,Gt({affectedAncestorIds:Sn(this.#e,t),affectedNodeIds:[t],attemptId:r.attemptId,path:e,projectionChanged:this.isDirectoryProjectionVisible(t),reused:r.reused}))),r})}applyChildPatch(e,t){return I(this.#e.instrumentation,`store.applyChildPatch`,()=>{let n=this.resolveActiveDirectoryNodeId(e.nodeId);if(n==null||At(this.#e,n)!==`loading`||!Pt(this.#e,n,e.attemptId))return!1;let r=G(this.#e,n);this.validateChildPatch(r,t);let i=J(this.#e),a=[];for(let e of t.operations){Ur(r,e);let t=J(this.#e);switch(e.type){case`add`:a.push(Xt(this.#e,t,hn(this.#e,e.path)));break;case`remove`:a.push(Xt(this.#e,t,gn(this.#e,e.path,{recursive:e.recursive})));break;case`move`:{let n=_n(this.#e,e.from,e.to,{collision:e.collision});n!=null&&a.push(Xt(this.#e,t,n));break}}}let o=a.some(e=>e.projectionChanged)||this.isDirectoryProjectionVisible(n);return Qt(this.#e,Xt(this.#e,i,Kt({affectedAncestorIds:Sn(this.#e,n),affectedNodeIds:[n],attemptId:e.attemptId,childEvents:a,path:G(this.#e,n),projectionChanged:o}))),!0})}completeChildLoad(e){return I(this.#e.instrumentation,`store.completeChildLoad`,()=>{let t=this.resolveActiveDirectoryNodeId(e.nodeId);if(t==null)return!1;let n=J(this.#e),r=Nt(this.#e,t,e.attemptId);return Qt(this.#e,Xt(this.#e,n,qt({affectedAncestorIds:Sn(this.#e,t),affectedNodeIds:[t],attemptId:e.attemptId,path:G(this.#e,t),projectionChanged:this.isDirectoryProjectionVisible(t),stale:!r}))),r})}failChildLoad(e,t){return I(this.#e.instrumentation,`store.failChildLoad`,()=>{let n=this.resolveActiveDirectoryNodeId(e.nodeId);if(n==null)return!1;let r=J(this.#e),i=Ft(this.#e,n,e.attemptId,t);return Qt(this.#e,Xt(this.#e,r,Jt({affectedAncestorIds:Sn(this.#e,n),affectedNodeIds:[n],attemptId:e.attemptId,errorMessage:t,path:G(this.#e,n),projectionChanged:this.isDirectoryProjectionVisible(n),stale:!i}))),i})}cleanup(e={}){return I(this.#e.instrumentation,`store.cleanup`,()=>{if(this.#e.transactionStack.length>0)throw Error(`Cleanup cannot run during an open batch or transaction.`);if(pr(this.#e))throw Error(`Cleanup cannot run while directory loads are active.`);let t=J(this.#e),n=mr(this.#e,e.mode??`stable`);return Qt(this.#e,Xt(this.#e,t,Yt({...n,affectedAncestorIds:[],affectedNodeIds:[],projectionChanged:n.idsPreserved===!1}))),n})}getNodeCount(){return this.#e.activeNodeCount}initializeExpandedPaths(e){if(e==null||e.length===0)return 0;let t=0,n=[],r=[],i=0,a=null,o=this.#e.snapshot.segmentTable,s=o.valueById,c=this.#e.snapshot.nodes,l=new Map;for(let u of e){a!=null&&u<a&&(a=null,i=0,n.length=0,r.length=0);let e=u.length>0&&u.charCodeAt(u.length-1)===47?u.length-1:u.length;if(e===0){a=u,i=e,n.length=0,r.length=0;continue}let d=0,f=0;if(a!=null){let t=Math.min(e,i),n=!0;for(let e=0;e<t;e+=1){let t=u.charCodeAt(e);if(t!==a.charCodeAt(e)){n=!1;break}t===47&&(d+=1,f=e+1)}n&&(t===i&&e>t&&u.charCodeAt(t)===47?(d+=1,f=t+1):t===e&&i>t&&a.charCodeAt(t)===47&&(d+=1,f=e+1)),d=Math.min(d,r.length)}let p=d===0?this.#e.snapshot.rootId:r[d-1]??this.#e.snapshot.rootId,m=d,h=!0,g=f;for(;g<=e;){let t=u.indexOf(`/`,g),i=t===-1||t>e?e:t,a=u.slice(g,i),f=K(this.#e,p).childIds,_=m===d?n[m]??0:0,v=_,y,b=l.get(a)??Pe(a);l.set(a,b);let x=(e,t)=>{for(v=e;v<t;v+=1){let e=f[v],t=c[e],n=s[t.nameId];if(n===a)return y=e,!0;let r=Re(Ne(o,t.nameId),b);if(r>0||r===0&&n>a)return!1}return!1};if(!x(_,f.length)&&_>0&&x(0,_),y===void 0){h=!1;break}if(!F(q(this.#e,y))){h=!1;break}if(n[m]=v,r[m]=y,p=y,m+=1,i===e)break;g=i+1}if(a=u,i=e,n.length=m,r.length=m,!h){a=null,i=0,n.length=0,r.length=0;continue}for(let e=d;e<m;e+=1){let n=r[e];if(n==null)continue;let i=q(this.#e,n);W(this.#e,n,i)||(Ot(this.#e,n,!0,i),t+=1)}}return t}hasAllDirectoriesExpanded(){for(let e of this.#e.snapshot.directories.keys()){if(e===this.#e.snapshot.rootId)continue;let t=q(this.#e,e);if(!W(this.#e,e,t))return!1}return!0}requireDirectoryNodeId(e){let t=Cn(this.#e,e);if(t==null)throw Error(`Path does not exist: "${e}"`);if(!F(q(this.#e,t)))throw Error(`Path is not a directory: "${e}"`);return t}resolveActiveDirectoryNodeId(e){try{if(!F(q(this.#e,e)))throw Error(`Node is not a directory: ${String(e)}`);return e}catch{return null}}isDirectoryProjectionVisible(e){let t=e;for(;t!==this.#e.snapshot.rootId;){let e=q(this.#e,t).parentId;if(e!==this.#e.snapshot.rootId){let n=q(this.#e,e),r=un(this.#e,e);if(!W(this.#e,e,n)&&r!==t)return!1}t=e}return!0}validateChildPatch(t,n){new e({paths:this.list(t),presorted:!0,sort:this.#e.snapshot.options.sort}).batch(n.operations)}}})))()}var Kr;function qr(){return(qr=e((()=>{st(),Kr=e=>e.startsWith(`f::`)?e.slice(3):e})))()}function Jr(e){let t=e.lastIndexOf(`/`);return t<0?{parentPath:``,baseName:e}:{parentPath:e.slice(0,t),baseName:e.slice(t+1)}}function Yr(e,t){return e===``?t:`${e}/${t}`}function Xr({files:e,path:t,isFolder:n,nextBasename:r}){let i=Kr(t),a=r.trim();if(a.length===0)return{error:`Name cannot be empty.`};if(a.includes(`/`))return{error:`Name cannot include "/".`};let{parentPath:o,baseName:s}=Jr(i);if(a===s)return{nextFiles:e,sourcePath:i,destinationPath:i,isFolder:n};let c=Yr(o,a),l=Array(e.length),u=new Set;if(!n){let t=`${c}/`,r=!1;for(let n=0;n<e.length;n++){let a=e[n];if(a!==i&&a.startsWith(t))return{error:`"${c}" already exists.`};let o=a===i?c:a;if(u.has(o))return{error:`"${c}" already exists.`};u.add(o),l[n]=o,a===i&&(r=!0)}return r?{nextFiles:l,sourcePath:i,destinationPath:c,isFolder:n}:{error:`Could not find the selected file to rename.`}}let d=`${i}/`,f=`${c}/`,p=0;for(let t=0;t<e.length;t++){let n=e[t],r=n===i||n.startsWith(d);if(!r&&(n===c||n.startsWith(f)))return{error:`"${c}" already exists.`};let a=r?`${c}${n.slice(i.length)}`:n;if(u.has(a))return{error:`"${c}" already exists.`};u.add(a),l[t]=a,r&&p++}return p===0?{error:`Could not find the selected folder to rename.`}:{nextFiles:l,sourcePath:i,destinationPath:c,isFolder:n}}function Zr(){return(Zr=e((()=>{qr()})))()}function Qr(e){return e.endsWith(`/`)}function $r(e){let t=e.endsWith(`/`)?e.slice(0,-1):e,n=t.lastIndexOf(`/`),r=n<0?t:t.slice(n+1);return e.endsWith(`/`)?`${r}/`:r}function ei(e){let t=[],n=new Set;for(let r of e)n.has(r)||(n.add(r),t.push(r));let r=new Set;for(let e of t.toSorted((e,t)=>e.length===t.length?e.localeCompare(t):e.length-t.length)){let t=(e.endsWith(`/`)?e.slice(0,-1):e).split(`/`),n=!1;for(let e=0;e<t.length-1;e+=1){let i=`${t.slice(0,e+1).join(`/`)}/`;if(r.has(i)){n=!0;break}}n||r.add(e)}return t.filter(e=>r.has(e))}function ti(e,t){return t.includes(e)?ei(t):[e]}function ni(e,t){return e===t?!0:e==null||t==null?!1:e.kind===t.kind&&e.directoryPath===t.directoryPath&&e.flattenedSegmentPath===t.flattenedSegmentPath&&e.hoveredPath===t.hoveredPath}function ri(e,t){return{draggedPaths:e,target:t}}function ii(e,t){if(t.kind!==`directory`||t.directoryPath==null)return!1;for(let n of e)if(Qr(n)&&(t.directoryPath===n||t.directoryPath.startsWith(n)))return!0;return!1}function ai(e,t){return t.kind===`root`||t.directoryPath==null?$r(e):t.directoryPath}function oi(e,t){let n=e.map(e=>{let n=ai(e,t);return n===e?null:{from:e,to:n,type:`move`}}).filter(e=>e!=null);return n.length===0?null:{operations:n,result:{draggedPaths:e,operation:n.length===1?`move`:`batch`,target:t}}}function si(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(e[n]!==t[n])return!1;return!0}function ci(e,t,n){let{paths:r,preparedInput:i}=e;if(i==null){if(r==null)throw Error(`FileTree requires paths or preparedInput`);return{paths:r,preparedInput:void 0}}let a=i.paths;if(r==null)return{paths:a,preparedInput:i};if(!si(Wr.preparePaths(r,n==null?{}:{sort:n}),a))throw Error(`FileTree ${t} received paths and preparedInput for different path lists`);return{paths:a,preparedInput:i}}function li(){return(li=e((()=>{Gr()})))()}function ui(e){return e.operation===`add`||e.operation===`remove`||e.operation===`move`||e.operation===`batch`}function di(e,t,n){if(e===t)return n;let r=t.endsWith(`/`)?t:`${t}/`;return e.startsWith(r)?`${n.endsWith(`/`)?n:`${n}/`}${e.slice(r.length)}`:e}function fi(e,t){if(e===t)return!0;let n=t.endsWith(`/`)?t:`${t}/`;return e.startsWith(n)}function pi(e,t,n=!1){if(e==null)return null;switch(t.operation){case`add`:case`expand`:case`collapse`:case`mark-directory-unloaded`:case`begin-child-load`:case`apply-child-patch`:case`complete-child-load`:case`fail-child-load`:case`cleanup`:return e;case`remove`:return fi(e,t.path)?n?e:null:e;case`move`:return di(e,t.from,t.to);case`batch`:{let r=e;for(let e of t.events)if(r=pi(r,e,n),r==null)return null;return r}}}function mi(e){return{canonicalChanged:e.canonicalChanged,projectionChanged:e.projectionChanged,visibleCountDelta:e.visibleCountDelta}}function hi(e){switch(e.operation){case`add`:return{...mi(e),operation:`add`,path:e.path};case`remove`:return{...mi(e),operation:`remove`,path:e.path,recursive:e.recursive};case`move`:return{...mi(e),from:e.from,operation:`move`,to:e.to}}}function gi(e){return{...mi(e),events:e.events.filter(e=>e.operation===`add`||e.operation===`remove`||e.operation===`move`).map(e=>hi(e)),operation:`batch`}}function _i(e){switch(e.operation){case`add`:case`remove`:case`move`:return hi(e);case`batch`:return gi(e);default:return null}}function vi(e,t){if(e.size!==t.length)return!1;for(let n of t)if(!e.has(n))return!1;return!0}function yi(e){let t=e.endsWith(`/`)?e.slice(0,-1):e;if(t.length===0)return[];let n=t.split(`/`);return n.slice(0,-1).map((e,t)=>`${n.slice(0,t+1).join(`/`)}/`)}function bi(e){return yi(e).at(-1)??null}function xi(e,t){return t==null?e:e.startsWith(t)?e.slice(t.length):e}function Si(e){return e.endsWith(`/`)}var Ci;function wi(){return(wi=e((()=>{Ci=e=>e.toLowerCase()})))()}function Ti(e){let t=e.endsWith(`/`)?e.slice(0,-1):e,n=t.lastIndexOf(`/`);return n<0?t:t.slice(n+1)}function Ei(e){return e.endsWith(`/`)?e.slice(0,-1):e}function Di(e,t){return t&&!e.endsWith(`/`)?`${e}/`:e}var Oi;function ki(){return(ki=e((()=>{Oi=e=>{let t=e.trim();return t.length===0?``:(t.includes(`\\`)?t.replaceAll(`\\`,`/`):t).toLowerCase()}})))()}function Ai(e){return e===`top`||e===`center`?e:`nearest`}function ji(e,t,n){if(e===0)return-1;if(n!=null){let e=t(n);if(e!=null)return e;let r=yi(n);for(let e=r.length-1;e>=0;--e){let n=r[e];if(n==null)continue;let i=t(n);if(i!=null)return i}}return 0}function Mi(e,t,n){if(e.paths.length===0)return{focusedIndex:-1,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};if(t==null)return{focusedIndex:0,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};let r=n??(t=>e.visibleIndexByPath.get(t)??null);return{focusedIndex:ji(e.paths.length,r,t),getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex}}var Ni,Pi,Fi,Ii;function Li(){return(Li=e((()=>{Gr(),Zr(),li(),wi(),ki(),Ni=Symbol(`FILE_TREE_RENAME_VIEW`),Pi=512,Fi=512,Ii=class{#e;#t=new Set;#n=new Map;#r=null;#i=null;#a=new Map;#o=new Map;#s=-1;#c=null;#l=!1;#u=e=>-1;#d=new Map;#f=null;#p=null;#m=null;#h=null;#g=null;#_;#v;#y;#b=[];#x=new Int32Array;#S=new Int32Array;#C=void 0;#w=!1;#T=null;#E=``;#D=!1;#O=new Set;#k=[];#A;#j=null;#M=null;#N=null;#P=null;#F=null;#I=null;#L=null;#R=0;#z=null;#B=new Set;#V=0;#H;#U=0;#W=!1;#G=0;#K;constructor(e){let{dragAndDrop:t,fileTreeSearchMode:n,initialSearchQuery:r,initialSelectedPaths:i,renaming:a,onSearchChange:o,paths:s,preparedInput:c,...l}=e,u=ci({paths:s,preparedInput:c},`constructor`,l.sort);this.#e=l,t!=null&&t!==!1&&(this.#r=t===!0?{}:t),this.#w=a!=null&&a!==!1,a!=null&&a!==!1&&a!==!0&&(this.#C=a.canRename,this.#v=a.onError,this.#_=a.onRename),this.#y=o,this.#A=n??`hide-non-matches`,this.#H=this.#le(u.paths,u.preparedInput);let d=i?.map(e=>this.#Ne(e)).filter(e=>e!=null)??[],f=d.at(-1)??null;d.length>0&&(this.#B=new Set(d),this.#z=f,this.#V=1),this.#je(f,!1),r!=null&&this.#Te(r,!1),this.#K=this.#Re()}destroy(){this.#K?.(),this.#K=null,this.#n.clear(),this.#t.clear(),this.#d.clear(),this.#i=null,this.#he()}focusFirstItem(){this.#be().length>0&&this.#Fe(0)}focusLastItem(){this.#G<=0||(this.#Ie(),this.#Fe(this.#G-1))}focusNextItem(){this.#Ae(1)}focusParentItem(){if(this.#c==null)return;let e=bi(this.#c);if(e==null)return;let t=this.#Z(e);t>=0&&this.#Fe(t)}focusPath(e){let t=this.#H.getPathInfo(e)?.path??null;if(t==null)return;this.#Ie();let n=this.#Z(t);n>=0&&this.#Fe(n)}scrollToPath(e,t){let n=this.#H.getPathInfo(e)?.path??null;if(n==null)return;this.#Ie();let r=this.#xe(n);r<0||this.#Me(r)!=null&&(t?.focus!==!1&&this.#Fe(r,!1),this.#L={id:this.#R+=1,offset:Ai(t?.offset),visibleIndex:r},this.#De())}focusMountedPathFromInput(e){let t=this.#H.getPathInfo(e)?.path??null;if(t==null)return;let n=this.#Z(t);n>=0&&this.#Fe(n)}focusNearestPath(e){let t=this.resolveNearestVisiblePath(e);if(t==null)return null;let n=this.#Z(t);return n>=0?(this.#Fe(n),this.#be()[n]??t):null}focusPreviousItem(){this.#Ae(-1)}getFocusedIndex(){return this.#s}getFocusedItem(){return this.#c==null?null:this.#Q(this.#c)}getFocusedPath(){return this.#c}getScrollRequest(){return this.#L}clearScrollRequest(e){this.#L?.id===e&&(this.#L=null)}resolveNearestVisiblePath(e){let t=this.#be();if(this.#G===0)return null;if(e==null)return this.#c??t[0]??null;let n=this.#H.getPathInfo(e)?.path??e,r=this.#Z(n);return r>=0?t[r]??n:this.#X(n)??this.#c??t[0]??null}getSelectedPaths(){return[...this.#B]}getSelectionVersion(){return this.#V}getVisibleCount(){return this.#G}getVisibleRows(e,t){if(t<e||this.#G===0)return[];let n=Math.max(0,e),r=Math.min(this.#G-1,t);if(r<n)return[];let i=r-n+1;if(this.#F==null&&!this.#l&&r>=this.#b.length&&i<=Fi){let e=[];for(let t=n;t<=r;t+=1){let n=this.#H.getVisibleRowContext(t);if(n==null)break;e.push(this.#ee(n))}return e}if(!this.#l&&r>=this.#b.length&&this.#Ie(),this.#F!=null){let e=Array.from({length:r-n+1},(e,t)=>this.#Se(n+t)),t=new Map,i=e[0]??-1,a=i;for(let n=1;n<=e.length;n+=1){let r=e[n];if(r!=null&&r===a+1){a=r;continue}if(i>=0&&this.#H.getVisibleSlice(i,a).forEach((e,n)=>{t.set(i+n,e)}),r==null){i=-1,a=-1;continue}i=r,a=r}return Array.from({length:r-n+1},(e,r)=>{let i=n+r,a=this.#Se(i),o=t.get(a),s=this.#b[a];if(o==null||s==null)throw Error(`Missing projection row for filtered visible index ${String(i)}`);return this.#$(o,i,a,{ancestorPaths:this.#re(a),path:s})})}return this.#H.getVisibleSlice(n,r).map((e,t)=>{let r=n+t,i=this.#b[r];if(i==null)throw Error(`Missing projection path for visible index ${String(r)}`);return this.#$(e,r,r,{ancestorPaths:this.#re(r),path:i})})}getStickyRowCandidates(e,t){if(this.#F!=null)return null;if(this.#G===0||e<=0||t<=0)return[];let n=[];for(let r=0;r<this.#G;r+=1){let i=e+r*t,a=Math.min(this.#G-1,Math.floor(i/t)),o=this.#te(a,r)??(a>0?this.#te(a-1,r):void 0);if(o==null)break;n.push({row:this.#ee(o),subtreeEndIndex:o.subtreeEndIndex})}return n}getItem(e){let t=this.#H.getPathInfo(e);return t==null?null:this.#Q(t.path,t)}resolveMountedDirectoryPathFromInput(e){let t=this.#H.getPathInfo(e);return t?.kind===`directory`?t.path:null}toggleMountedDirectoryFromInput(e){let t=this.resolveMountedDirectoryPathFromInput(e);t!=null&&this.#ze(t)}selectAllVisiblePaths(){this.#Ie();let e=[...this.#be()];this.#ae(e,this.#c??this.#z)}selectOnlyPath(e){let t=this.#Ne(e);t!=null&&this.#ae([t],t)}selectOnlyMountedPathFromInput(e){this.#ae([e],e)}selectPath(e){let t=this.#Ne(e);t==null||this.#B.has(t)||this.#ae([...this.#B,t])}deselectPath(e){let t=this.#Ne(e);t!=null&&this.#B.has(t)&&this.#ae([...this.#B].filter(e=>e!==t))}toggleFocusedSelection(){this.#c!=null&&this.togglePathSelectionFromInput(this.#c)}togglePathSelection(e){let t=this.#Ne(e);if(t!=null){if(this.#B.has(t)){this.deselectPath(t);return}this.selectPath(t)}}togglePathSelectionFromInput(e){let t=this.#Ne(e);if(t!=null){if(this.#B.has(t)){this.#ae([...this.#B].filter(e=>e!==t),t);return}this.#ae([...this.#B,t],t)}}selectPathRange(e,t){let n=this.#Ne(e);if(n==null)return;this.#Ie();let r=this.#z,i=r==null?-1:this.#Ce(r),a=this.#Ce(n);if(i===-1||a===-1){let e=t?[...this.#B,n]:[n];this.#ae(e,n);return}let[o,s]=i<=a?[i,a]:[a,i],c=this.#be().slice(o,s+1),l=t?[...this.#B,...c]:c;this.#ae(l,r)}extendSelectionFromFocused(e){if(this.#c==null)return;let t=this.#s;if(t===-1)return;let n=Math.min(this.#G-1,Math.max(0,t+e));if(n===t)return;!this.#l&&n>=this.#b.length&&this.#Ie();let r=this.#be(),i=r[t]??null,a=r[n]??null;if(i==null||a==null)return;let o=new Set(this.#B);o.has(i)&&o.has(a)?o.delete(i):o.add(a),this.#ae([...o],this.#z??i,!1),this.#Fe(n)}getDragAndDropConfig(){return this.#r}isDragAndDropEnabled(){return this.#r!=null}getDragSession(){return this.#i==null?null:{draggedPaths:[...this.#i.draggedPaths],primaryPath:this.#i.primaryPath,target:this.#i.target==null?null:{...this.#i.target}}}startDrag(e){if(this.#r==null)return!1;let t=this.#Ne(e);if(t==null||this.#M!=null&&this.#M.length>0)return!1;let n=this.getSelectedPaths(),r=ti(t,n);return this.#r.canDrag?.(r)!==!1&&(n.includes(t)||this.#ae([t],t,!1),this.#Pe(t),this.#i={draggedPaths:r,primaryPath:t,target:null},this.#De(),!0)}setDragTarget(e){let t=this.#i;if(t==null)return;let n=e;if(n!=null){let e=ri(t.draggedPaths,n);(ii(t.draggedPaths,n)||this.#r?.canDrop?.(e)===!1)&&(n=null)}ni(t.target,n)||(this.#i={...t,target:n},this.#De())}cancelDrag(){this.#i!=null&&(this.#i=null,this.#De())}completeDrag(){let e=this.#i;if(e==null)return!1;this.#i=null;let t=e.target==null?null:{...e.target};if(t==null)return this.#De(),!1;let n=ri(e.draggedPaths,t);if(ii(e.draggedPaths,t)||this.#r?.canDrop?.(n)===!1)return this.#De(),!1;let r=oi(e.draggedPaths,t);if(r==null)return this.#De(),!1;try{if(r.operations.length===1){let e=r.operations[0];if(e==null||e.type!==`move`)throw Error(`Expected a single move operation for one-item drops`);this.#H.move(e.from,e.to,{collision:e.collision})}else this.#ce(r.operations),this.#H.batch(r.operations)}catch(e){return this.#De(),this.#r?.onDropError?.(e instanceof Error?e.message:String(e),n),!1}return this.#r?.onDropComplete?.(r.result),!0}subscribe(e){return this.#t.add(e),e(),()=>{this.#t.delete(e)}}add(e){this.#H.add(e)}remove(e,t={}){this.#H.remove(e,t)}move(e,t,n={}){this.#H.move(e,t,n)}batch(e){this.#H.batch(e)}onMutation(e,t){let n=e,r=t,i=this.#n.get(n);return i??(i=new Set,this.#n.set(n,i)),i.add(r),()=>{let e=this.#n.get(n);e?.delete(r),e?.size===0&&this.#n.delete(n)}}setSearch(e){this.#Te(e,!0)}openSearch(e=``){this.#Te(e,!0)}closeSearch(){this.#Te(null,!0)}isSearchOpen(){return this.#M!==null}getSearchValue(){return this.#M??``}getSearchMatchingPaths(){return this.#k}focusNextSearchMatch(){this.#we(1)}focusPreviousSearchMatch(){this.#we(-1)}startRenaming(e=this.#c??``,t={}){if(!this.#w)return!1;let n=this.#H.getPathInfo(e);if(n==null)return!1;let r=n.path,i=Si(r),a=Ei(r);if(this.#C?.({isFolder:i,path:a})===!1)return!1;for(let e of yi(r))this.#H.isExpanded(e)||this.#H.expand(e);return this.#ae([r],r,!1),this.#M!=null&&(this.#Te(null,!1),this.#y?.(this.#M)),this.#Pe(r),this.#T=r,this.#E=Ti(r),this.#D=t.removeIfCanceled??!1,this.#De(),!0}[Ni](){return{cancel:()=>{this.#q()},commit:()=>{this.#J()},getPath:()=>this.#T,getValue:()=>this.#E,isActive:()=>this.#T!=null,setValue:e=>{this.#Y(e)}}}#q(){if(this.#T==null)return;let e=this.#T,t=this.#D;if(this.#T=null,this.#E=``,this.#D=!1,t){this.remove(e,Si(e)?{recursive:!0}:void 0);return}this.#Pe(e),this.#De()}#J(){let e=this.#T;if(e==null)return;if(this.#D&&this.#E.trim().length===0){this.#T=null,this.#E=``,this.#D=!1,this.remove(e,Si(e)?{recursive:!0}:void 0);return}let t=Si(e),n=Xr({files:this.#H.list(),isFolder:t,nextBasename:this.#E,path:Ei(e)});if(this.#T=null,this.#E=``,this.#D=!1,`error`in n){this.#Pe(e),this.#v?.(n.error),this.#De();return}if(n.sourcePath===n.destinationPath){this.#Pe(e),this.#De();return}this.#_?.({destinationPath:n.destinationPath,isFolder:n.isFolder,sourcePath:n.sourcePath}),this.move(Di(n.sourcePath,t),Di(n.destinationPath,t))}#Y(e){this.#T!=null&&this.#E!==e&&(this.#E=e,this.#De())}resetPaths(e,t={}){let n=this.#H.list().length,r=this.#G,i=ci({paths:e,preparedInput:t.preparedInput},`resetPaths`,this.#e.sort),a=this.#le(i.paths,i.preparedInput,t.initialExpandedPaths),o=this.#c,s=this.#T,c=this.getSelectedPaths(),l=this.#z;this.#K?.(),this.#H=a,this.#d.clear(),this.#he();let u=c.map(e=>a.getPathInfo(e)?.path??null).filter(e=>e!=null),d=!vi(this.#B,u);this.#B=new Set(u),d&&(this.#V+=1),this.#z=l==null?null:a.getPathInfo(l)?.path??null,this.#T=s==null?null:a.getPathInfo(s)?.path??null,this.#T??(this.#E=``,this.#D=!1),this.#je(o,o!=null||u.length>0||this.#z!=null),this.#K=this.#Re(),this.#De(),this.#Oe({canonicalChanged:!0,operation:`reset`,pathCountAfter:i.paths.length,pathCountBefore:n,projectionChanged:!0,usedPreparedInput:t.preparedInput!=null,visibleCountDelta:this.#G-r})}#X(e){this.#Ie();let t=bi(e),n=xi(e,t),r=null,i=null;for(let e of this.#be()){if(bi(e)!==t)continue;let a=xi(e,t);if(a<n){r=e;continue}if(a>n){i=e;break}}return r??i}#Z(e){let t=this.#Ce(e);if(t!==-1)return t;let n=yi(e);for(let e=n.length-1;e>=0;--e){let t=n[e];if(t==null)continue;let r=this.#Ce(t);if(r!==-1)return r}return this.#be().length>0?0:-1}#Q(e,t){let n=this.#d.get(e);if(n!=null)return n;let r=t??this.#H.getPathInfo(e);if(r==null)return null;let i=r.kind===`directory`?this.#oe(r.path):this.#se(r.path);return this.#d.set(r.path,i),i}#$(e,t,n,r){return{ancestorPaths:r.ancestorPaths,depth:e.depth,flattenedSegments:e.flattenedSegments?.map(e=>({isTerminal:e.isTerminal,name:e.name,path:e.path})),hasChildren:e.hasChildren,index:t,isExpanded:e.isExpanded,isFlattened:e.isFlattened,isFocused:r.path===this.#c,isSelected:this.#B.has(r.path),kind:e.kind,level:e.depth,name:e.name,path:r.path,posInSet:r.posInSet??this.#x[n]??0,setSize:r.setSize??this.#S[n]??0}}#ee(e){return this.#$(e.row,e.index,e.index,{ancestorPaths:e.ancestorPaths,path:e.row.path,posInSet:e.posInSet,setSize:e.setSize})}#te(e,t){let n=this.#H.getVisibleRowContext(e);return n==null?void 0:n.ancestorRows[t]??(t===n.ancestorRows.length&&n.row.kind===`directory`&&n.row.isExpanded?n:void 0)}#ne(e){let t=this.#a.get(e);if(t!=null)return t;let n=this.#u(e),r=n<0?[]:[...this.#ne(n),n];return this.#a.set(e,r),r}#re(e){let t=this.#o.get(e);if(t!=null)return t;let n=this.#ne(e).map(e=>this.#b[e]??``).filter(e=>e!==``);return this.#o.set(e,n),n}#ie(e){this.#H.collapse(e)}#ae(e,t=this.#z,n=!0){let r=[...new Set(e)],i=!vi(this.#B,r),a=this.#z!==t;(i||a)&&(this.#B=new Set(r),this.#z=t,i&&(this.#V+=1),n&&this.#De())}#oe(e){return{collapse:()=>{this.#ie(e)},deselect:()=>{this.deselectPath(e)},expand:()=>{this.#ke(e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!0,isExpanded:()=>this.#H.isExpanded(e),isFocused:()=>this.#c===e,isSelected:()=>this.#B.has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)},toggle:()=>{this.#ze(e)}}}#se(e){return{deselect:()=>{this.deselectPath(e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!1,isFocused:()=>this.#c===e,isSelected:()=>this.#B.has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)}}}#ce(e){let t=this.#H.list();this.#le(t).batch(e)}#le(e,t,n){return new Wr({...this.#e,paths:e,preparedInput:t??void 0,...n===void 0?{}:{initialExpandedPaths:n}})}#ue(){return this.#h??=this.#H.list(),this.#h}#de(){if(this.#m!=null)return this.#m;let e=new Set;for(let t of this.#ue()){e.add(t);for(let n of yi(t))e.add(n)}return this.#m=[...e].sort(),this.#m}#fe(){return this.#g??=this.#ue().map(Ci),this.#g}#pe(){return this.#f??=this.#de().filter(e=>e.endsWith(`/`)),this.#f}#me(){return this.#p??=this.#pe().map(Ci),this.#p}#he(){this.#f=null,this.#p=null,this.#m=null,this.#h=null,this.#g=null}#ge(){return this.#pe().filter(e=>this.#H.isExpanded(e))}#_e(e){let t=new Set(this.#j??[]);if(e)for(let e of this.#B)for(let n of yi(e))t.add(n);this.#ve(t)}#ve(e){this.#W=!0;try{for(let t of this.#pe()){let n=e.has(t),r=this.#H.isExpanded(t);n&&!r?this.#H.expand(t):!n&&r&&this.#H.collapse(t)}}finally{this.#W=!1}}#ye(){if(this.#M==null||this.#M.length===0){this.#k=[],this.#F=null,this.#I=null,this.#P=null,this.#G=this.#U;return}let e=this.#b;if(this.#k=e.filter(e=>this.#O.has(e)),this.#A!==`hide-non-matches`||this.#O.size===0){this.#F=null,this.#I=null,this.#P=null,this.#G=this.#U;return}let t=[],n=[],r=new Map;for(let[i,a]of e.entries())this.#N?.has(a)===!0&&(r.set(a,n.length),t.push(i),n.push(a));this.#F=t,this.#I=n,this.#P=r,this.#G=n.length}#be(){return this.#I??this.#b}#xe(e){return this.#I==null?this.#H.getVisibleIndex(e)??-1:this.#P?.get(e)??-1}#Se(e){return this.#F?.[e]??e}#Ce(e){return this.#P?.get(e)??this.#H.getVisibleIndex(e)??-1}#we(e){let t=this.#k;if(t.length===0)return;let n=this.#c,r=n==null?-1:t.indexOf(n),i=t[r<0?e>0?0:t.length-1:Math.min(t.length-1,Math.max(0,r+e))];i!=null&&this.focusPath(i)}#Te(e,t){let n=e==null?null:Oi(e),r=this.#M;if(r!==n){if(r==null&&n!=null&&(this.#j=this.#ge()),this.#M=n,n==null)this.#_e(!0),this.#j=null,this.#O.clear(),this.#N=null,this.#je(this.#c,!0);else if(n.length===0)this.#_e(!1),this.#O.clear(),this.#N=null,this.#je(this.#c,!0);else{let e=this.#Ee();this.#je(e,!0)}t&&(this.#y?.(this.#M),this.#De())}}#Ee(){if(this.#M==null||this.#M.length===0)return this.#O.clear(),this.#c;let e=this.#M,t=this.#ue(),n=this.#fe(),r=[],i=new Set,a=null;for(let o=0;o<t.length;o+=1){if(!n[o].includes(e))continue;let s=t[o];r.push(s),i.add(s),a??=s}let o=this.#pe(),s=this.#me();for(let t=0;t<o.length;t+=1){if(!s[t].includes(e))continue;let n=o[t];i.has(n)||(r.push(n),i.add(n),a??=n)}this.#O=i;let c=this.#A===`hide-non-matches`&&r.length>0?new Set:null;this.#N=c;let l=this.#A===`expand-matches`?new Set(this.#j??[]):new Set;for(let e of r){c?.add(e),e.endsWith(`/`)&&l.add(e);for(let t of yi(e))l.add(t),c?.add(t)}return this.#ve(l),a??this.#c}#De(){for(let e of this.#t)e()}#Oe(e){this.#n.get(e.operation)?.forEach(t=>{t(e)}),this.#n.get(`*`)?.forEach(t=>{t(e)})}#ke(e){for(let t of yi(e))this.#H.isExpanded(t)||this.#H.expand(t);this.#H.isExpanded(e)||this.#H.expand(e)}#Ae(e){let t=this.#G;if(t===0)return;let n=this.#s===-1?0:this.#s,r=Math.min(t-1,Math.max(0,n+e));(r!==n||this.#s===-1)&&(!this.#l&&this.#F==null&&r>=this.#b.length&&this.#Ie(),this.#Fe(r))}#je(e,t=!0){let n=this.#H.getVisibleCount();this.#U=n;let r=Mi(this.#H.getVisibleTreeProjectionData(t?void 0:Math.min(n,Pi)),e,t?e=>this.#H.getVisibleIndex(e):void 0);this.#a.clear(),this.#o.clear(),this.#l=r.paths.length>=n,this.#u=r.getParentIndex,this.#b=r.paths,this.#x=r.posInSetByIndex,this.#S=r.setSizeByIndex,this.#ye(),this.#s=e==null?this.#be().length>0?0:-1:this.#Z(e),this.#c=this.#s<0?null:this.#Me(this.#s)}#Me(e){return this.#be()[e]??(this.#F==null?this.#H.getVisibleRowContext(e)?.row.path??null:null)}#Ne(e){return this.#H.getPathInfo(e)?.path??null}#Pe(e){if(e==null)return;let t=this.#Z(e);t>=0&&this.#Fe(t,!1)}#Fe(e,t=!0){let n=this.#Me(e);n!=null&&(this.#s!==e||this.#c!==n)&&(this.#s=e,this.#c=n,t&&this.#De())}#Ie(){this.#l||this.#je(this.#c,!0)}#Le(e){let t=pi(this.#T,e);t==null&&this.#T!=null&&(this.#E=``),this.#T=t;let n=pi(this.#c,e,!0),r=[...this.#B].map(t=>pi(t,e)).filter(e=>e!=null).map(e=>this.#H.getPathInfo(e)?.path??null).filter(e=>e!=null),i=pi(this.#z,e),a=i==null?null:this.#H.getPathInfo(i)?.path??null,o=[...new Set(r)];return vi(this.#B,o)||(this.#B=new Set(o),this.#V+=1),this.#z=a,n}#Re(){return this.#H.on(`*`,e=>{if(this.#W)return;e.canonicalChanged&&(this.#d.clear(),this.#he()),this.#i!=null&&ui(e)&&(this.#i=null);let t=ui(e)?this.#Le(e):this.#c,n=this.#M!=null&&this.#M.length>0?this.#Ee():this.#M===``?this.#c:t,r=this.#M!=null||e.operation!==`expand`&&e.operation!==`collapse`;this.#je(n,r),this.#De();let i=_i(e);i!=null&&this.#Oe(i)})}#ze(e){if(this.#H.isExpanded(e)){this.#ie(e);return}this.#ke(e)}}})))()}var Ri;function zi(){return(zi=e((()=>{Ri=e=>{if(e==null||e.length===0)return`0`;let t=`${e.length}`;for(let n of e)t+=`\0${n.path}\0${n.status}`;return t}})))()}function Bi(e){let t=e.endsWith(`/`),n=``,r=-1;for(let t=0;t<=e.length;t+=1){if(e[t]!==`/`&&t!==e.length){r===-1&&(r=t);continue}r!==-1&&(n!==``&&(n+=`/`),n+=e.slice(r,t),r=-1)}return n===``?null:{isDirectory:t,path:n}}function Vi(e){let t=e.endsWith(`/`)?e.slice(0,-1):e;if(t.length===0)return[];let n=t.split(`/`);return n.slice(0,-1).map((e,t)=>`${n.slice(0,t+1).join(`/`)}/`)}function Hi(e,t){return t?`${e}/`:e}function Ui(e,t=null){let n=Ri(e==null?void 0:[...e]);if(n===`0`)return null;if(t?.signature===n)return t;let r=new Map,i=new Set,a=new Set;for(let t of e??[]){let e=Bi(t.path);if(e==null)continue;let n=Hi(e.path,e.isDirectory);r.set(n,t.status),t.status===`ignored`&&e.isDirectory?a.add(n):e.isDirectory&&a.delete(n);for(let t of Vi(e.path))i.add(t)}return{directoriesWithChanges:i,ignoredDirectoryPaths:a,signature:n,statusByPath:r}}function Wi(){return(Wi=e((()=>{zi()})))()}function Gi(e){e&&e.parentNode&&e.remove()}function Ki(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`&&typeof e!=`function`?i=t[a]:o[a]=t[a];return arguments.length>2&&(o.children=arguments.length>3?ka.call(arguments,2):n),qi(e,o,r,i,null)}function qi(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++_a,__i:-1,__u:0};return i==null&&Y.vnode!=null&&Y.vnode(a),a}function Ji(e){return e.children}function Yi(e,t){this.props=e,this.context=t,this.__g=0}function Xi(e,t){if(t==null)return e.__?Xi(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?Xi(e):null}function Zi(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=n.__e;break}return Zi(e)}}function Qi(e){(8&e.__g||!(e.__g|=8)||!va.push(e)||ba++)&&ya==Y.debounceRendering||((ya=Y.debounceRendering)||queueMicrotask)($i)}function $i(){for(var e,t,n,r,i,a,o,s,c=1;va.length;)va.length>c&&va.sort(xa),e=va.shift(),c=va.length,8&e.__g&&(n=void 0,i=(r=(t=e).__v).__e,a=[],o=[],(s=t.__P)&&((n=Aa({},r)).__v=r.__v+1,Y.vnode&&Y.vnode(n),sa(s,n,r,t.__n,s.namespaceURI,32&r.__u?[i]:null,a,i??Xi(r),!!(32&r.__u),o,s.ownerDocument),n.__v=r.__v,n.__.__k[n.__i]=n,la(a,n,o),n.__e!=i&&Zi(n)));ba=0}function ea(e,t,n,r,i,a,o,s,c,l,u,d){var f,p,m,h,g,_,v,y=r&&r.__k||Da,b=t.length;for(c=ta(n,t,y,c,b),f=0;f<b;f++)(m=n.__k[f])!=null&&(p=m.__i==-1?Ea:y[m.__i]||Ea,m.__i=f,_=sa(e,m,p,i,a,o,s,c,l,u,d),h=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&fa(p.ref,null,m),u.push(m.ref,m.__c||h,m)),g==null&&h!=null&&(g=h),(v=!!(4&m.__u))||p.__k===m.__k?c=na(m,c,e,v):typeof m.type==`function`&&_!==void 0?c=_:h&&(c=h.nextSibling),m.__u&=-7);return n.__e=g,c}function ta(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(c=a+f,(o=e.__k[a]=typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?qi(null,o,null,null,null):Oa(o)?qi(Ji,{children:o},null,null,null):o.constructor==null&&o.__b>0?qi(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,s=null,(l=o.__i=ra(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=Xi(s)),pa(s,s));return r}function na(e,t,n,r){var i,a;if(typeof e.type==`function`){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=na(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=Xi(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function ra(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&!(2&l.__u);if(l===null&&e.key==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function ia(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n??``}function aa(e,t,n,r,i){var a;n:if(t==`style`){if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||ia(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||ia(e.style,t,n[t])}}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(Sa,`$1`)),(t=t.slice(2))[0].toLowerCase()!=t[0]&&(t=t.toLowerCase()),e.__l||={},e.__l[t+a]=n,n?r?n.l=r.l:(n.l=Ca,e.addEventListener(t,a?Ta:wa,a)):e.removeEventListener(t,a?Ta:wa,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function oa(e){return function(t){if(this.__l){var n=this.__l[t.type+e];if(t.u==null)t.u=Ca++;else if(t.u<n.l)return;return n(Y.event?Y.event(t):t)}}}function sa(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_,v,y,b,x,S,C,ee,te,ne,re,ie,ae,w,T,E=t.type;if(t.constructor!=null)return null;128&n.__u&&(c=!!(32&n.__u),n.__c.__z&&(s=t.__e=n.__e=(a=n.__c.__z)[0],n.__c.__z=null)),(d=Y.__b)&&d(t);n:if(typeof E==`function`)try{if(v=t.props,y=`prototype`in E&&E.prototype.render,b=(d=E.contextType)&&r[d.__c],x=d?b?b.props.value:d.__:r,n.__c?2&(f=t.__c=n.__c).__g&&(f.__g|=1,_=!0):(y?t.__c=f=new E(v,x):(t.__c=f=new Yi(v,x),f.constructor=E,f.render=ma),b&&b.sub(f),f.props=v,f.state||(f.state={}),f.context=x,f.__n=r,p=!0,f.__g|=8,f.__h=[],f._sb=[]),y&&f.__s==null&&(f.__s=f.state),y&&E.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=Aa({},f.__s)),Aa(f.__s,E.getDerivedStateFromProps(v,f.__s))),m=f.props,h=f.state,f.__v=t,p)y&&E.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),y&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(y&&E.getDerivedStateFromProps==null&&v!==m&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(v,x),!(4&f.__g)&&f.shouldComponentUpdate!=null&&!1===f.shouldComponentUpdate(v,f.__s,x)||t.__v==n.__v){for(t.__v!=n.__v&&(f.props=v,f.state=f.__s,f.__g&=-9),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),S=0;S<f._sb.length;S++)f.__h.push(f._sb[S]);f._sb=[],f.__h.length&&o.push(f);break n}f.componentWillUpdate!=null&&f.componentWillUpdate(v,f.__s,x),y&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(m,h,g)})}if(f.context=x,f.props=v,f.__P=e,f.__g&=-5,C=Y.__r,ee=0,y){for(f.state=f.__s,f.__g&=-9,C&&C(t),d=f.render(f.props,f.state,f.context),te=0;te<f._sb.length;te++)f.__h.push(f._sb[te]);f._sb=[]}else do f.__g&=-9,C&&C(t),d=f.render(f.props,f.state,f.context),f.state=f.__s;while(8&f.__g&&++ee<25);f.state=f.__s,f.getChildContext!=null&&(r=Aa({},r,f.getChildContext())),y&&!p&&f.getSnapshotBeforeUpdate!=null&&(g=f.getSnapshotBeforeUpdate(m,h)),ne=d,d!=null&&d.type===Ji&&d.key==null&&(ne=ua(d.props.children)),s=ea(e,Oa(ne)?ne:[ne],t,n,r,i,a,o,s,c,l,u),t.__u&=-161,f.__h.length&&o.push(f),_&&(f.__g&=-4)}catch(e){if(t.__v=null,c||a!=null){if(e.then){for(re=0,ie=!1,t.__u|=c?160:128,t.__c.__z=[],ae=0;ae<a.length;ae++)(w=a[ae])==null||ie||(w.nodeType==8&&w.data==`$s`?(re>0&&t.__c.__z.push(w),re++,a[ae]=null):w.nodeType==8&&w.data==`/$s`?(--re>0&&t.__c.__z.push(w),ie=re===0,s=a[ae],a[ae]=null):re>0&&(t.__c.__z.push(w),a[ae]=null));if(!ie){for(;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a[a.indexOf(s)]=null,t.__c.__z=[s]}t.__e=s}else{for(T=a.length;T--;)Gi(a[T]);ca(t)}}else t.__e=n.__e,t.__k=n.__k,e.then||ca(t);Y.__e(e,t,n)}else s=t.__e=da(n.__e,t,n,r,i,a,o,c,l,u);return(d=Y.diffed)&&d(t),128&t.__u?void 0:s}function ca(e){e&&e.__c&&(e.__c.__g|=4),e&&e.__k&&e.__k.forEach(ca)}function la(e,t,n){for(var r=0;r<n.length;r++)fa(n[r],n[++r],n[++r]);Y.__c&&Y.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){Y.__e(e,t.__v)}})}function ua(e){return typeof e!=`object`||!e||e.__b&&e.__b>0?e:Oa(e)?e.map(ua):Aa({},e)}function da(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v=n.props,y=t.props,b=t.type;if(b==`svg`?i=`http://www.w3.org/2000/svg`:b==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a!=null){for(u=0;u<a.length;u++)if((m=a[u])&&`setAttribute`in m==!!b&&(b?m.localName==b:m.nodeType==3)){e=m,a[u]=null;break}}if(e==null){if(b==null)return l.createTextNode(y);e=l.createElementNS(i,b,y.is&&y),s&&=(Y.__m&&Y.__m(t,a),!1),a=null}if(b==null)v===y||s&&e.data==y||(e.data=y);else{if(a&&=ka.call(e.childNodes),v=n.props||Ea,!s&&a!=null)for(v={},u=0;u<e.attributes.length;u++)v[(m=e.attributes[u]).name]=m.value;for(u in v)if(m=v[u],u!=`children`){if(u==`dangerouslySetInnerHTML`)f=m;else if(!(u in y)){if(u==`value`&&`defaultValue`in y||u==`checked`&&`defaultChecked`in y)continue;aa(e,u,null,m,i)}}for(u in _=1&n.__u,y)m=y[u],u==`children`?p=m:u==`dangerouslySetInnerHTML`?d=m:u==`value`?h=m:u==`checked`?g=m:s&&typeof m!=`function`||v[u]===m&&!_||aa(e,u,m,v[u],i);if(d)s||f&&(d.__html==f.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(f&&(e.innerHTML=``),ea(b==`template`?e.content:e,Oa(p)?p:[p],t,n,r,b==`foreignObject`?`http://www.w3.org/1999/xhtml`:i,a,o,a?a[0]:n.__k&&Xi(n,0),s,c,l),a!=null)for(u=a.length;u--;)Gi(a[u]);s||(u=`value`,b==`progress`&&h==null?e.removeAttribute(`value`):h==null||h===e[u]&&(b!==`progress`||h)||aa(e,u,h,v[u],i),u=`checked`,g!=null&&g!=e[u]&&aa(e,u,g,v[u],i))}return e}function fa(e,t,n){try{if(typeof e==`function`){var r=typeof e.__u==`function`;r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(e){Y.__e(e,n)}}function pa(e,t,n){var r,i;if(Y.unmount&&Y.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||fa(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){Y.__e(e,t)}r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&pa(r[i],t,n||typeof e.type!=`function`);n||Gi(e.__e),e.__e&&e.__e.__l&&(e.__e.__l=null),e.__e=e.__c=e.__=null}function ma(e,t,n){return this.constructor(e,n)}function ha(e,t){var n,r,i,a;t==document&&(t=document.documentElement),Y.__&&Y.__(e,t),r=(n=!!(e&&32&e.__u))?null:t.__k,e=t.__k=Ki(Ji,null,[e]),i=[],a=[],sa(t,e,r||Ea,Ea,t.namespaceURI,r?null:t.firstChild?ka.call(t.childNodes):null,i,r?r.__e:t.firstChild,n,a,t.ownerDocument),la(i,e,a)}function ga(e,t){e.__u|=32,ha(e,t)}var Y,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa;function ja(){return(ja=e((()=>{Ea={},Da=[],Oa=Array.isArray,ka=Da.slice,Aa=Object.assign,Y={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!(1&i.__g)){i.__g|=4;try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=8&i.__g),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=8&i.__g),o)return void(i.__g|=2)}catch(t){e=t}}throw ba=0,e}},_a=0,Yi.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=Aa({},this.state);typeof e==`function`&&(e=e(Aa({},n),this.props)),e&&Aa(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Qi(this))},Yi.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),Qi(this))},Yi.prototype.render=Ji,va=[],ba=0,xa=function(e,t){return e.__v.__b-t.__v.__b},Sa=/(PointerCapture)$|Capture$/i,Ca=0,wa=oa(!1),Ta=oa(!0)})))()}function X(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c&&typeof e!=`function`)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--Ma,__i:-1,__u:0,__source:i,__self:a};return Y.vnode&&Y.vnode(l),l}var Ma;function Na(){return(Na=e((()=>{ja(),Ma=0,Array.isArray})))()}function Pa({name:e,remappedFrom:t,token:n,width:r,height:i,viewBox:a,label:o,alignCapitals:s=!1}){"use no memo";let c=`#${e.replace(/^#/,``)}`,{width:l,height:u,viewBox:d}=La[e]??{width:Fa,height:Ia},f=r??l,p=i??u,m=a??d??`0 0 ${l} ${u}`;return X(`svg`,{"data-icon-name":t??e,"data-icon-token":n,"data-align-capitals":s,...o==null?{"aria-hidden":!0}:{"aria-label":o,role:`img`},viewBox:m,width:f,height:p,children:X(`use`,{href:c})})}var Fa,Ia,La;function Ra(){return(Ra=e((()=>{Na(),Fa=16,Ia=16,La={}})))()}function za({children:e,marker:t,variant:n=`default`}){"use no memo";return X(`div`,{"aria-hidden":!0,"data-truncate-marker-cell":!0,children:X(`div`,{"data-truncate-marker":!0,children:typeof t==`function`?t({children:e}):n===`fade`?X(`span`,{"data-truncate-fade":!0}):t})})}function Ba(e){"use no memo";let{mode:t,children:n}=e;return X(`div`,{children:[X(`div`,{"data-truncate-content":`visible`,children:t===`fruncate`?X(`span`,{children:n}):n}),X(`div`,{"data-truncate-content":`overflow`,"aria-hidden":!0,children:t===`fruncate`?X(`span`,{children:n}):n})]})}function Va({children:e,mode:t=`truncate`,marker:n=`…`,variant:r=`default`,...i}){"use no memo";let a=X(Ba,{mode:t,children:e},`content`),o=X(za,{marker:n,mode:t,variant:r},`marker`),s=X(`div`,{"data-truncate-fill":!0},`fill`);return X(`div`,{"data-truncate-container":t,"data-truncate-variant":r,...i,children:X(`div`,{"data-truncate-grid":!0,children:t===`truncate`?[a,o]:[o,a,s]})})}function Ha({children:e,...t}){"use no memo";return X(Va,{mode:`truncate`,...t,children:e})}function Ua({children:e,...t}){"use no memo";return X(Va,{mode:`fruncate`,...t,children:e})}function Wa({children:e,contents:t,priority:n=`end`,split:r=`center`,minimumLength:i=12,className:a,style:o,...s}){"use no memo";let c=null,l=null;if(Array.isArray(t)){if(t.length!==2)return console.error(`MiddleTruncate: contents must be an array of two items`),null;c=X(Ha,{...s,children:t[0]}),l=X(Ua,{...s,children:t[1]})}else{if(typeof e!=`string`)return console.error(`MiddleTruncate: children must be a string`),null;if(e.length===0)return X(`div`,{className:a,style:o});if(e.length<i)return X(n===`end`?Ua:Ha,{...s,className:a,style:o,children:e});let t=null,u=null,d=null;if(typeof r==`string`)r===`center`?t=Ga:r===`extension`?t=Ka:r===`leaf-path`&&(t=qa);else if(typeof r==`number`)t=Ja,u=r;else if(Array.isArray(r)){let[e,n]=r;d=n,e===`last`?t=Ya:e===`first`&&(t=Xa)}else typeof r==`function`&&(t=r);t??=Ga;let[f,p]=t(e,{priority:n,variant:s.variant,splitIndex:typeof u==`number`?u:void 0,splitOffset:typeof d==`number`?d:void 0}),m=f.length>=p.length,h=n===`equal`&&!m,g=n===`equal`&&m,_={},v={};h&&(_.marker=``),g&&(v.marker=``),c=X(Ha,{...s,..._,children:f}),l=X(Ua,{...s,...v,children:p})}return X(`div`,{"data-truncate-group-container":`middle`,className:a,style:o,children:[X(`div`,{"data-truncate-segment-priority":n===`start`||n===`equal`?`1`:`2`,children:c}),X(`div`,{"data-truncate-segment-priority":n===`end`||n===`equal`?`1`:`2`,children:l})]})}var Ga,Ka,qa,Ja,Ya,Xa;function Za(){return(Za=e((()=>{Na(),Ga=e=>{if(e.length<2)return[e,``];let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]},Ka=e=>{if(e.length<4)return[e,``];let t=e.lastIndexOf(`.`)+1,n=e.length-t>10,r=t>=1&&!n?t:Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]},qa=e=>{if(e.length<4)return[e,``];let t=e.lastIndexOf(`/`)+1,n=e.length-t>25,r=t>=1&&!n?t:Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]},Ja=(e,{splitIndex:t}={})=>{if(typeof t!=`number`){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}return[e.slice(0,t),e.slice(t)]},Ya=(e,{splitOffset:t}={})=>{if(typeof t!=`number`||t<=0||t>=e.length){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}let n=e.length-t;return[e.slice(0,n),e.slice(n)]},Xa=(e,{splitOffset:t}={})=>{if(typeof t!=`number`||t<=0||t>=e.length){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}let n=t;return[e.slice(0,n),e.slice(n)]}})))()}function Qa(e,t,n){return Math.min(Math.max(e,t),n)}function $a(e,t){return e<0||t<e?lo:{endIndex:t,startIndex:e}}function eo(e){return e.startIndex<0||e.endIndex<e.startIndex}function to(e,t){return eo(e)?0:(e.endIndex-e.startIndex+1)*t}function no(e,t,n){if(t<=0)return-1;let r=t*n;return e<=0?0:e>=r?t:Math.floor(e/n)}function ro(e,t,n){return t<=0||e<=0?-1:e>=t*n?t-1:Math.ceil(e/n)-1}function io(e){let t=new Map;return e.forEach((e,n)=>{if(e.kind!==`directory`||!e.isExpanded)return;let r=e.ancestorPaths.length,i=t.get(r);if(i==null){t.set(r,[n]);return}i.push(n)}),t}function ao(e,t){let n=0,r=e.length-1,i=-1;for(;n<=r;){let a=Math.floor((n+r)/2),o=e[a];if(o==null)break;if(o<=t){i=a,n=a+1;continue}r=a-1}return i}function oo(e){let t=new Map,n=[];for(let r=0;r<e.length;r+=1){let i=e[r];if(i==null)continue;let a=i.kind===`directory`&&i.isExpanded?[...i.ancestorPaths,i.path]:i.ancestorPaths,o=0;for(;o<n.length&&o<a.length&&n[o]===a[o];)o+=1;for(let e=n.length-1;e>=o;--e){let i=n[e];i!=null&&t.set(i,r-1)}n.length=o;for(let e=o;e<a.length;e+=1){let t=a[e];t!=null&&n.push(t)}}let r=e.length-1;for(let e of n)t.set(e,r);return t}function so(e,t,n){if(e.length===0||t<=0)return[];let r=oo(e),i=io(e),a=[];for(let r=0;r<e.length;r+=1){let o=i.get(r);if(o==null||o.length===0)break;let s=t+r*n,c=ao(o,Math.min(e.length-1,Math.floor(s/n))),l=null;for(;c>=0;){let t=o[c],n=t==null?null:e[t]??null;if(n!=null&&(r===0||n.ancestorPaths[r-1]===a[r-1]?.path)){l=n;break}--c}if(l==null)break;a.push(l)}return a.map((i,a)=>{let o=a*n,s=(r.get(i.path)??e.length-1)+1;if(s>=e.length)return{row:i,top:o};let c=s*n-t;return{row:i,top:Math.min(o,c-n)}}).filter(e=>e.top+n>0)}function co(e,t){let n=t.totalRowCount??e.length,r=n*t.itemHeight,i=Math.max(0,t.viewportHeight),a=Math.max(0,Math.floor(t.overscan)),o=Math.max(0,r-i),s=Qa(t.scrollTop,0,o),c=t.stickyRows??so(e,s,t.itemHeight),l=c.reduce((e,n)=>Math.max(e,n.top+t.itemHeight),0),u=Math.min(r,s+l),d=Math.max(0,i-l),f=Math.max(0,r-u),p=no(s,n,t.itemHeight),m=no(u,n,t.itemHeight),h=l<=0||p<0||p>=n?-1:p,g=h===-1?-1:Math.min(n-1,m-1),_=h===-1||g<h?0:g-h+1,v=d<=0||m>=n?lo:$a(m,ro(u+d,n,t.itemHeight)),y=g+1,b=eo(v)?lo:$a(Math.max(y,v.startIndex-a),Math.min(n-1,v.endIndex+a)),x=to(b,t.itemHeight);return{occlusion:{firstOccludedIndex:h,lastOccludedIndex:g,occludedCount:_},physical:{itemHeight:t.itemHeight,maxScrollTop:o,overscan:a,scrollTop:s,totalHeight:r,totalRowCount:n,viewportHeight:i},projected:{contentHeight:f,paneHeight:d,paneTop:u},sticky:{height:l,rows:c},visible:v,window:{endIndex:b.endIndex,height:x,offsetTop:eo(b)?0:b.startIndex*t.itemHeight,startIndex:b.startIndex}}}var lo;function uo(){return(uo=e((()=>{lo={endIndex:-1,startIndex:-1}})))()}var fo,po,mo;function ho(){return(ho=e((()=>{fo={added:`A`,deleted:`D`,ignored:null,modified:`M`,renamed:`R`,untracked:`U`},po={added:`Git status: added`,deleted:`Git status: deleted`,ignored:`Git status: ignored`,modified:`Git status: modified`,renamed:`Git status: renamed`,untracked:`Git status: untracked`},mo=`Contains git status items`})))()}function go(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:i=0,viewportHeight:a}=e;if(n<0)return null;let o=Math.max(0,i),s=n*r,c=s+r;if(s<t+o){let e=Math.max(0,s-o);return e===t?null:e}if(c>t+a){let e=c-a;return e===t?null:e}return null}function _o(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,offset:i,topInset:a=0,totalHeight:o,viewportHeight:s}=e;if(i===`nearest`)return go({currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:a,viewportHeight:s});if(n<0)return null;let c=Math.max(0,a),l=n*r,u=Math.max(0,s-c),d=i===`center`?c+Math.max(0,(u-r)/2):c,f=Math.max(0,o-s),p=Math.max(0,Math.min(l-d,f));return p===t?null:p}function vo(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,targetViewportOffset:i,totalHeight:a,viewportHeight:o}=e;if(n<0)return null;let s=Math.max(0,i),c=n*r,l=c+r,u=t+s,d=t+o;if(c>=u&&l<=d)return null;let f=Math.max(0,a-o),p=Math.max(0,Math.min(c-s,f));return p===t?null:p}function yo(e){if(e==null||!e.isConnected||e===document.body||e===document.documentElement)return!1;e.focus({preventScroll:!0});let t=e.getRootNode();return t instanceof ShadowRoot?t.activeElement===e:document.activeElement===e}function bo(e){let t=e.getRootNode();if(t instanceof ShadowRoot){let e=t.activeElement;return e instanceof HTMLElement?e:null}let n=document.activeElement;return n instanceof HTMLElement&&e.contains(n)?n:null}function xo(e,t){if(e==null)return t;let n=e.getBoundingClientRect().height;return n>0?n:e.clientHeight>0?e.clientHeight:t}function So(e,t){return e!=null&&e>0?e:t}function Co(e){let t=e.borderBoxSize,n=Array.isArray(t)?t[0]:t;return n!=null&&Number.isFinite(n.blockSize)&&n.blockSize>0?n.blockSize:e.contentRect.height>0?e.contentRect.height:null}function wo(e,t,n,r,i=0){let a=go({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,topInset:i,viewportHeight:r});return a!=null&&(e.scrollTop=a,!0)}function To(e,t,n,r,i,a,o=0){let s=_o({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,offset:a,topInset:o,totalHeight:i,viewportHeight:r});return s!=null&&(e.scrollTop=s,!0)}function Eo(e,t,n,r,i,a){let o=vo({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,targetViewportOffset:a,totalHeight:i,viewportHeight:r});return o!=null&&(e.scrollTop=o,!0)}function Do(e,t,n,r){return n.end<n.start?null:e<n.start?-t:e>n.end?r:null}function Oo(){return(Oo=e((()=>{})))()}function ko(e){let{renamingPath:t,previousRenamingPath:n,hasRenderedInput:r}=e;return t==null?`reset`:r?n===t?`ignore`:`focus-input`:`reveal-canonical`}function Ao({ariaLabel:e,isFlattened:t=!1,ref:n,value:r,onBlur:i,onInput:a}){return X(`input`,{ref:n,"data-item-rename-input":!0,...t?{"data-item-flattened-rename-input":!0}:{},"aria-label":e,value:r,onBlur:i,onInput:a,onClick:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation()})}function jo(){return(jo=e((()=>{Na()})))()}function Mo(e){let{row:t,mode:n,targetPath:r,ariaLabel:i,domId:a,isParked:o,itemHeight:s,features:c,state:l,extraStyle:u}=e,d=n===`sticky`,f=t.ancestorPaths.at(-1)??``,p={};return l.isFocusRinged&&(p[`data-item-focused`]=!0),t.isSelected&&(p[`data-item-selected`]=!0),l.isContextHovered&&(p[`data-item-context-hover`]=`true`),l.isDragTarget&&(p[`data-item-drag-target`]=!0),l.isDragging&&(p[`data-item-dragging`]=!0),l.effectiveGitStatus!=null&&(p[`data-item-git-status`]=l.effectiveGitStatus),l.containsGitChange&&(p[`data-item-contains-git-change`]=`true`),{"aria-expanded":!d&&t.kind===`directory`?t.isExpanded:void 0,"aria-haspopup":c.contextMenuEnabled?`menu`:void 0,"aria-label":i,"aria-level":d?void 0:t.level+1,"aria-posinset":d?void 0:t.posInSet+1,"aria-selected":d?void 0:t.isSelected?`true`:`false`,"aria-setsize":d?void 0:t.setSize,"data-file-tree-sticky-path":d?r:void 0,"data-file-tree-sticky-row":d?`true`:void 0,"data-item-context-menu-button-visibility":c.actionLaneEnabled?c.contextMenuButtonVisibility:void 0,"data-item-context-menu-trigger-mode":c.contextMenuEnabled?c.contextMenuTriggerMode:void 0,"data-item-has-context-menu-action-lane":c.actionLaneEnabled?`true`:void 0,"data-item-has-git-lane":c.gitLaneActive?`true`:void 0,"data-item-parent-path":f.length>0?f:void 0,"data-item-parked":o?`true`:void 0,"data-item-path":r,"data-item-type":t.kind===`directory`?`folder`:`file`,"data-type":`item`,id:d?void 0:a,role:d?void 0:`treeitem`,style:{minHeight:`${s}px`,...u},tabIndex:!d&&t.isFocused?0:-1,...p}}function No(e){let{event:t,mode:n,isSearchOpen:r,isDirectory:i}=e,a=t.ctrlKey||t.metaKey,o=t.shiftKey||a,s=t.shiftKey?{additive:a,kind:`range`}:a?{kind:`toggle`}:{kind:`single`};return{closeSearch:r,revealCanonical:n===`sticky`,selection:s,toggleDirectory:!o&&i}}function Po(e,t){$.__h&&$.__h(Q,e,Zo||t),Zo=0;var n=Q.__H||(Q.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function Fo(e){return Zo=1,Io(Ko,e)}function Io(e,t,n){var r=Po(qo++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ko(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);Xo(t,n)||(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=Q,!Q.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=r.__c.__H.__.filter(function(e){return!!e.__c});if(i.every(function(e){return!e.__N}))return!a||a.call(this,e,t,n);var o=r.__c.props!==e;return i.forEach(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,Xo(t,e.__[0])||(o=!0)}}),a&&a.call(this,e,t,n)||o};Q.__f=!0;var a=Q.shouldComponentUpdate,o=Q.componentWillUpdate;Q.componentWillUpdate=function(e,t,n){if(4&this.__g){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},Q.shouldComponentUpdate=i}return r.__N||r.__}function Lo(e,t){var n=Po(qo++,3);!$.__s&&Go(n.__H,t)&&(n.__=e,n.u=t,Q.__H.__h.push(n))}function Ro(e,t){var n=Po(qo++,4);!$.__s&&Go(n.__H,t)&&(n.__=e,n.u=t,Q.__h.push(n))}function Z(e){return Zo=5,zo(function(){return{current:e}},[])}function zo(e,t){var n=Po(qo++,7);return Go(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Bo(e,t){return Zo=8,zo(function(){return e},t)}function Vo(){for(var e;e=Qo.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Uo),e.__H.__h.forEach(Wo),e.__H.__h=[]}catch(t){e.__H.__h=[],$.__e(t,e.__v)}}function Ho(e){var t,n=function(){clearTimeout(r),as&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);as&&(t=requestAnimationFrame(n))}function Uo(e){var t=Q,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),Q=t}function Wo(e){var t=Q;e.__c=e.__(),Q=t}function Go(e,t){return!e||e.length!==t.length||t.some(function(t,n){return!Xo(t,e[n])})}function Ko(e,t){return typeof t==`function`?t(e):t}var qo,Q,Jo,Yo,Xo,Zo,Qo,$,$o,es,ts,ns,rs,is,as;function os(){return(os=e((()=>{ja(),Xo=Object.is,Zo=0,Qo=[],$=Y,$o=$.__b,es=$.__r,ts=$.diffed,ns=$.__c,rs=$.unmount,is=$.__,$.__b=function(e){Q=null,$o&&$o(e)},$.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),is&&is(e,t)},$.__r=function(e){es&&es(e),qo=0;var t=(Q=e.__c).__H;t&&(Jo===Q?(t.__h=[],Q.__h=[],t.__.forEach(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.forEach(Uo),t.__h.forEach(Wo),t.__h=[],qo=0)),Jo=Q},$.diffed=function(e){ts&&ts(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Qo.push(t)!==1&&Yo===$.requestAnimationFrame||((Yo=$.requestAnimationFrame)||Ho)(Vo)),t.__H.__.forEach(function(e){e.u&&(e.__H=e.u),e.u=void 0})),Jo=Q=null},$.__c=function(e,t){t.some(function(e){try{e.__h.forEach(Uo),e.__h=e.__h.filter(function(e){return!e.__||Wo(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],$.__e(n,e.__v)}}),ns&&ns(e,t)},$.unmount=function(e){rs&&rs(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(e){try{Uo(e)}catch(e){t=e}}),n.__H=void 0,t&&$.__e(t,n.__v))},as=typeof requestAnimationFrame==`function`})))()}function ss(e,t=null,n=null){"use no memo";let r=e.flattenedSegments;return r==null||r.length===0?t??e.name:X(`span`,{"data-item-flattened-subitems":!0,children:r.map((e,i)=>{let a=i===r.length-1;return X(Ji,{children:[X(`span`,{"data-item-flattened-subitem":e.path,"data-item-flattened-subitem-drag-target":n===e.path?`true`:void 0,children:a&&t!=null?t:X(Ha,{children:e.name})}),i<r.length-1?` / `:``]},e.path)})})}function cs(e){return e.isFlattened?e.flattenedSegments?.findLast(e=>e.isTerminal)?.path??e.path:e.path}function ls(e){let t=e.flattenedSegments;return t==null||t.length===0?e.name:t.map(e=>e.name).join(` / `)}function us(e,t,n,r){return e.map((e,i)=>{let a=i*n,o=e.subtreeEndIndex+1;if(o>=r)return{row:e.row,top:a};let s=o*n-t;return{row:e.row,top:Math.min(a,s-n)}}).filter(e=>e.top+n>0)}function ds({controller:e,itemHeight:t,overscan:n,scrollTop:r,stickyFolders:i,viewportHeight:a}){let o=e.getVisibleCount(),s=i&&o>0?e.getStickyRowCandidates(r,t):[],c=s==null&&i&&o>0?e.getVisibleRows(0,o-1):[],l=co(c,{itemHeight:t,overscan:n,scrollTop:r,stickyRows:s==null?void 0:us(s,r,t,o),totalRowCount:o,viewportHeight:a}),u=i&&r<=0&&o>0?e.getStickyRowCandidates(1,t):[],d=u!=null&&r<=0?us(u,1,t,o):i&&r<=0&&c.length>0?so(c,1,t):l.sticky.rows;return{overlayHeight:d.reduce((e,n)=>Math.max(e,n.top+t),0),overlayRows:d,snapshot:l,visibleRows:c}}function fs(e,t,n){let r=e,i=document.elementFromPoint?.bind(document)??null,a=r.elementFromPoint?.(t,n)??i?.(t,n)??null;return e instanceof ShadowRoot&&(a==null||!e.contains(a))?ps(e,t,n):a instanceof HTMLElement?a:null}function ps(e,t,n){let r=Array.from(e.querySelectorAll(`[data-type="item"], [data-item-flattened-subitem]`));for(let e=r.length-1;e>=0;e--){let i=r[e],a=i.getBoundingClientRect();if(t>=a.left&&t<=a.right&&n>=a.top&&n<=a.bottom)return i}return null}function ms(e){let t=e?.closest?.(`[data-type="item"]`);if(!(t instanceof HTMLElement))return null;let n=t.dataset.itemPath??null;if(n==null)return null;let r=e?.closest?.(`[data-item-flattened-subitem]`),i=r instanceof HTMLElement?r.getAttribute(`data-item-flattened-subitem`)??null:null;if(i!=null&&i.endsWith(`/`))return{directoryPath:i,flattenedSegmentPath:i,hoveredPath:n,kind:`directory`};if(t.dataset.itemType===`folder`)return{directoryPath:n,flattenedSegmentPath:null,hoveredPath:n,kind:`directory`};let a=t.dataset.itemParentPath??null;return a==null||a.length===0?{directoryPath:null,flattenedSegmentPath:null,hoveredPath:n,kind:`root`}:{directoryPath:a,flattenedSegmentPath:null,hoveredPath:n,kind:`directory`}}function hs(e){let t=e.cloneNode(!0);return t.removeAttribute(`id`),t.dataset.fileTreeDragPreview=`true`,t.setAttribute(`aria-hidden`,`true`),t.tabIndex=-1,Object.assign(t.style,{boxShadow:`0 4px 12px rgba(0, 0, 0, 0.15)`,left:`0px`,margin:`0`,pointerEvents:`none`,position:`fixed`,top:`0px`,willChange:`transform`,zIndex:`10000`}),t}function gs(){return navigator.vendor!==`Apple Computer, Inc.`}function _s(e,t){let n=e-t.top;if(n<Ks)return-Math.ceil((Ks-Math.max(0,n))/Ks*qs);let r=t.bottom-e;return r<Ks?Math.ceil((Ks-Math.max(0,r))/Ks*qs):0}function vs(e,t){if(e!=null){let t=fo[e];return t==null?null:{text:t,title:po[e]}}return t?{icon:{name:`file-tree-icon-dot`,width:6,height:6},title:mo}:null}function ys(e,t,n){if(t==null||t.size===0)return null;let r=[];for(let i=e.length-1;i>=0;--i){let a=e[i],o=n.get(a);if(o!=null){for(let e of r)n.set(e,o);return o?`ignored`:null}if(t.has(a)){n.set(a,!0);for(let e of r)n.set(e,!0);return`ignored`}r.push(a)}for(let e of r)n.set(e,!1);return null}function bs(e){return e!=null&&`toggle`in e}function xs(e){return e.code===`Space`||e.key===` `||e.key===`Spacebar`}function Ss(e){return e.key.length===1&&/^[\p{L}\p{N}]$/u.test(e.key)&&!e.ctrlKey&&!e.metaKey&&!e.altKey}function Cs(e){return e==null?``:`[data-item-section="spacing-item"][data-ancestor-path="${e.replaceAll(`\\`,`\\\\`).replaceAll(`"`,`\\"`)}"] { opacity: 1; }`}function ws(e){return e.shiftKey&&e.key===`F10`||e.key===`ContextMenu`}function Ts(e,t){return t&&ws(e)||(e.ctrlKey||e.metaKey)&&xs(e)?!0:e.key===`ArrowDown`||e.key===`ArrowLeft`||e.key===`ArrowRight`||e.key===`ArrowUp`}function Es(e){for(let t of e.composedPath())if(t instanceof HTMLElement&&(t.dataset.fileTreeContextMenuRoot===`true`||t.dataset.type===`context-menu-anchor`||t.dataset.type===`context-menu-trigger`||t.getAttribute(`slot`)===`context-menu`))return!0;return!1}function Ds(e){return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width,x:e.x,y:e.y}}function Os(e,t){return{bottom:t,height:0,left:e,right:e,top:t,width:0,x:e,y:t}}function ks(e,t){if(e==null)return t.offsetTop;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect();return n.top-r.top}function As(e,t,n){if(n==null){e.delete(t);return}e.set(t,n)}function js(e,t,n){if(e==null)return null;let r=t.get(e)??null;if(r!=null)return r;let i=n.get(e)??null;return i?.dataset.itemParked===`true`?null:i}function Ms(e){if(e==null)return[];let t=[];for(let n of e.querySelectorAll(`button[data-file-tree-sticky-row="true"]`)){if(!(n instanceof HTMLElement))continue;let e=n.dataset.fileTreeStickyPath;e!=null&&t.push(e)}return t}function Ns(e,t){if(e==null||t==null)return null;for(let n of e.querySelectorAll(`button[data-item-focused="true"][data-item-parked="true"]`))if(n instanceof HTMLElement&&n.dataset.itemPath===t)return n;return null}function Ps(e,t,n,r,i,a,o){let s=Math.max(0,a-i),c=t?.getBoundingClientRect()??null,l=c==null||n==null?null:n.getBoundingClientRect().top-c.top,u=Ns(e,r),d=c==null||u==null?null:u.getBoundingClientRect().top-c.top;return Math.max(0,Math.min(d??Math.max(l??0,s),Math.max(0,o-i)))}function Fs(e,t){return{kind:e.kind,name:ls(e),path:t}}function Is(e){return e==null?void 0:`${e}__tree`}function Ls(e,t,n){if(e!=null)return`${e}__focused-item-${encodeURIComponent(t)}${n?`__parked`:``}`}function Rs(e){return e===`file-tree-icon-chevron`||e===`file-tree-icon-dot`||e===`file-tree-icon-file`||e===`file-tree-icon-lock`}function zs(e,t){if(e==null)return null;if(`text`in e)return X(`span`,{title:e.title,children:e.text});let n=typeof e.icon==`string`?Rs(e.icon)?t(e.icon):{name:e.icon}:Rs(e.icon.name)?(()=>{let n=t(e.icon.name),{name:r,...i}=e.icon;return{...n,...i}})():e.icon;return X(`span`,{title:e.title,children:X(Pa,{...n})})}function Bs(e){e!=null&&yo(e.querySelector([`button:not([disabled])`,`[href]`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`].join(`, `))??e)}function Vs(e,t,{actionLaneEnabled:n=!1,customDecoration:r=null,decorationLaneEnabled:i=!1,dragTargetFlattenedSegmentPath:a=null,gitDecoration:o=null,gitLaneActive:s=!1,renameInput:c=null,showDecorativeActionAffordance:l=!1}={}){let u=cs(e);return X(Ji,{children:[e.depth>0?X(`div`,{"data-item-section":`spacing`,children:Array.from({length:e.depth}).map((t,n)=>X(`div`,{"data-item-section":`spacing-item`,"data-ancestor-path":e.ancestorPaths[n]},n))}):null,X(`div`,{"data-item-section":`icon`,children:e.kind===`directory`?X(Pa,{...t(`file-tree-icon-chevron`)}):X(Pa,{...t(`file-tree-icon-file`,u)})}),X(`div`,{"data-item-section":`content`,children:e.isFlattened?ss(e,c,a):c??X(Wa,{minimumLength:5,split:`extension`,children:e.name})}),i?X(`div`,{"data-item-section":`decoration`,children:r==null?null:zs(r,t)}):null,s?X(`div`,{"data-item-section":`git`,children:zs(o,t)}):null,n?X(`div`,{"data-item-section":`action`,children:l?X(`span`,{"aria-hidden":`true`,"data-item-action-affordance":`decorative`,children:X(Pa,{...t(`file-tree-icon-ellipsis`)})}):null}):null]})}function Hs(e,t,n,r={}){let{controller:i,renameView:a,visualFocusPath:o,contextHoverPath:s,draggedPathSet:c,dragTarget:l,dragAndDropEnabled:u,shouldSuppressContextMenu:d,handleRowDragStart:f,handleRowDragEnd:p,handleRowTouchStart:m,instanceId:h,itemHeight:g,gitStatusByPath:_,ignoredGitDirectories:v,ignoredInheritanceCache:y,directoriesWithGitChanges:b,gitLaneActive:x,contextMenuEnabled:S,contextMenuTriggerMode:C,contextMenuButtonTriggerEnabled:ee,contextMenuButtonVisibility:te,contextMenuRightClickEnabled:ne,registerRenameInput:re,registerButton:ie,resolveIcon:ae,renderDecorationForRow:w,openContextMenuForRow:T,onRowClick:E,onKeyDown:oe}=e,D=cs(t),{isParked:se=!1,mode:ce=`flow`,style:O}=r,le=ce===`sticky`,ue=_?.get(D)??null??ys(t.ancestorPaths,v,y),de=t.kind===`directory`&&(b?.has(D)??!1),fe=w(t,D),k=vs(ue,de),A=S&&ee,pe=fe!=null||x||A,me=A&&te===`always`,he=a.getPath()===D,j=he?a.getValue():``,M=le||!he?null:X(Ao,{ref:re,ariaLabel:`Rename ${ls(t)}`,isFlattened:t.isFlattened,value:j,onBlur:()=>{a.commit()},onInput:e=>{a.setValue(e.currentTarget.value)}}),N=Vs(t,ae,{actionLaneEnabled:A,customDecoration:fe,decorationLaneEnabled:pe,dragTargetFlattenedSegmentPath:l?.flattenedSegmentPath??null,gitDecoration:k,gitLaneActive:x,renameInput:M,showDecorativeActionAffordance:me}),ge={...Mo({ariaLabel:ls(t),domId:t.isFocused?Ls(h,D,se):void 0,extraStyle:O,features:{actionLaneEnabled:A,contextMenuButtonVisibility:A?te:null,contextMenuEnabled:S,contextMenuTriggerMode:S?C:null,gitLaneActive:x},isParked:se,itemHeight:g,mode:ce,row:t,state:{containsGitChange:de,effectiveGitStatus:ue,isContextHovered:s===D,isDragTarget:l?.kind===`directory`&&l.directoryPath===D,isDragging:c?.has(D)===!0,isFocusRinged:t.isFocused&&o===D},targetPath:D}),key:n,onContextMenu:S||u?e=>{if(d()){e.preventDefault();return}S&&(e.preventDefault(),ne&&(i.focusMountedPathFromInput(D),T(t,D,{anchorRect:Os(e.clientX,e.clientY),source:`right-click`})))}:void 0,onFocus:le?void 0:()=>{i.focusMountedPathFromInput(D)},onKeyDown:le?void 0:oe,ref:e=>{ie(D,e)}};return!le&&he?X(`div`,{...ge,children:N}):X(`button`,{...ge,type:`button`,draggable:u&&!se,onDragEnd:u&&!se?p:void 0,onDragStart:u&&!se?e=>{f(e,t,D)}:void 0,onMouseDown:e=>{if(le){e.preventDefault();return}i.isSearchOpen()&&e.preventDefault()},onTouchStart:u&&!se?e=>{m(e,t,D)}:void 0,onClick:e=>{E(e,t,D,ce)},children:N})}function Us(e,t,n){return t.end<t.start?[]:e.controller.getVisibleRows(t.start,t.end).filter(e=>!n.has(cs(e))).map((n,r)=>Hs(e,n,t.start+r))}function Ws({composition:e,controller:t,gitStatusByPath:n,ignoredGitDirectories:r,directoriesWithGitChanges:i,icons:a,instanceId:o,itemHeight:s=lt,overscan:c=10,renamingEnabled:l=!1,renderRowDecoration:u,searchBlurBehavior:d=`close`,searchEnabled:f=!1,searchFakeFocus:p=!1,slotHost:m,stickyFolders:h=!1,initialViewportHeight:g=420}){"use no memo";let _=Z(null),v=Z(null),y=Z(!1),b=Z(null),x=Z(null),S=Z(null),C=Z(null),ee=Z(null),te=Z(new Map),ne=Z(new Map),re=Z(()=>{}),ie=Z(null),ae=Z(0),w=Z(!1),T=Z(null);T.current!==t&&(w.current=!1,T.current=t);let E=Z(!1),oe=Z(null),D=Z(null),se=Z(!1),ce=Z(null),O=Z(null),le=Z(null),ue=Z(null),de=Z(null),fe=Z(null),k=Z(null),A=Z(null),pe=Z(!1),me=Z(null),j=Z(null),M=Z(null),N=Z(null),ge=zo(()=>new Map,[]),[,_e]=Fo(0),[ve,P]=Fo(null),[ye,be]=Fo(null),[F,xe]=Fo(null),[Se,Ce]=Fo(null),[we,Te]=Fo(0),[I,Ee]=Fo(null),De=Z(I);De.current=I;let Oe=Z(null),L=Z(null),ke=Z(null),Ae=Z(null),je=Z(null),Me=Z(!1),Ne=()=>{L.current=null,ke.current=null,Ae.current=null},Pe=(e,t)=>{L.current=e,ke.current=null,Ae.current=t==null?null:{path:e,scrollTop:t}},Fe=(e,t)=>{L.current=null,ke.current={path:e,viewportOffset:t},Ae.current=null},R=Z(d===`retain`&&t.isSearchOpen()),[Ie,Le]=Fo(p);Lo(()=>{p||Le(!1)},[p]);let Re=Z(!1),ze=Bo(()=>{Re.current=!0,Le(e=>e&&!1)},[]),[Be,Ve]=Fo(()=>ds({controller:t,itemHeight:s,overscan:c,scrollTop:0,stickyFolders:h,viewportHeight:g})),[He,Ue]=Fo(!1);Lo(()=>{Ue(!0)},[]);let z=e?.contextMenu?.enabled===!0||e?.contextMenu?.render!=null||e?.contextMenu?.onOpen!=null||e?.contextMenu?.onClose!=null,We=e?.contextMenu?.triggerMode??(z?`right-click`:`both`),Ge=We===`both`||We===`button`,Ke=e?.contextMenu?.buttonVisibility??`when-needed`,qe=We===`both`||We===`right-click`;Ro(()=>{let e=S.current;if(e==null)return;let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail?.path??null;je.current=t,be(t),Ce(t==null?null:`pointer`)},n=e=>{e instanceof CustomEvent&&(Me.current=e.detail?.disabled===!0)};return e.addEventListener(`file-tree-debug-set-context-menu-trigger`,t),e.addEventListener(`file-tree-debug-set-scroll-suppression`,n),()=>{e.removeEventListener(`file-tree-debug-set-context-menu-trigger`,t),e.removeEventListener(`file-tree-debug-set-scroll-suppression`,n)}},[]);let Je=Bo((e,t)=>{As(te.current,e,t)},[]),Ye=Bo((e,t)=>{As(ne.current,e,t)},[]),Xe=Bo(e=>{x.current=e},[]),Ze=Bo(e=>js(e,ne.current,te.current),[]),Qe=n!=null||r!=null||i!=null,{resolveIcon:$e}=zo(()=>he(a),[a]),et=t[Ni](),tt=et.getPath(),nt=tt!=null,rt=t.isSearchOpen(),st=t.getSearchValue(),B=t.getFocusedPath(),V=t.getFocusedIndex(),ct=t.getScrollRequest(),ut=t.isDragAndDropEnabled(),dt=t.getDragSession(),ft=zo(()=>dt==null?null:new Set(dt.draggedPaths),[dt]),pt=dt?.target??null,mt=dt?.primaryPath??null,ht=Is(o),{overlayHeight:gt,overlayRows:_t,snapshot:H,visibleRows:vt}=Be,U=H.physical.viewportHeight,yt=zo(()=>({end:H.window.endIndex,start:H.window.startIndex}),[H.window.endIndex,H.window.startIndex]),bt=_t,xt=H.sticky.rows,St=H.physical.totalHeight,Ct=H.sticky.height,wt=zo(()=>new Set(xt.map(e=>cs(e.row))),[xt]),Tt=V>=0&&V>=yt.start&&V<=yt.end,Et=Bo((e,t)=>u?.({item:Fs(e,t),row:e})??null,[u]),Dt=Bo(e=>yo(e==null?null:te.current.get(e)??null)?!0:yo(S.current),[]),W=Bo(e=>{Dt(t.focusNearestPath(e))},[t,Dt]),Ot=Z(W);Ot.current=W;let kt=Z(!0),At=Z(()=>{}),jt=Bo((t=!0)=>{let n=De.current;n!=null&&(kt.current=kt.current&&t,Ee(null),e?.contextMenu?.onClose?.(),kt.current&&W(n.path))},[e?.contextMenu,W]);At.current=jt;let Mt=Bo(e=>{let t=e==null?null:ks(S.current,e);xe(e=>e===t?e:t)},[]),Nt=Bo((e,n,r)=>{let i=t.getItem(n);if(i==null)return;let a=Ze(n);if(a?.dataset.fileTreeStickyRow===`true`){let e=C.current;Pe(n,e?.scrollTop??null),E.current=!0,P(e=>e===n?e:n)}i.focus(),Mt(a),kt.current=!0,Ee({anchorRect:r?.anchorRect??null,item:Fs(e,n),path:n,source:r?.source??`keyboard`})},[t,Ze,Mt]),Pt=Bo(e=>{if(l){if(t.isSearchOpen()){let e=C.current,t=xo(e,U);ce.current=V<0||e==null?null:Math.max(0,Math.min(V*s-e.scrollTop,Math.max(0,t-s))),se.current=!0}t.startRenaming(e)!==!1&&(Ce(`focus`),_e(e=>e+1))}},[t,V,s,l,U]),Ft=Bo((e,{restoreTreeFocus:n=!0,targetOffset:r=`live-overlay`}={})=>{let i=C.current;if(i==null)return!1;t.focusPath(e);let a=t.getFocusedIndex();if(a<0)return!1;let o=t.getVisibleRows(a,a)[0]??null;if(o==null)return!1;let l=xo(i,U),u=t.getVisibleCount()*s,d=r===`sticky-parents`?o.ancestorPaths.length*s:ds({controller:t,itemHeight:s,overscan:c,scrollTop:i.scrollTop,stickyFolders:h,viewportHeight:l}).snapshot.sticky.height;return E.current=!0,Eo(i,a,s,l,u,d),re.current(),Oe.current=n?e:null,!0},[t,s,c,U,h]),It=()=>y.current===!0||N.current!=null||pe.current===!0,Lt=e=>typeof window.requestAnimationFrame==`function`?window.requestAnimationFrame(()=>{e()}):window.setTimeout(e,16),Rt=e=>{if(e!=null){if(typeof window.cancelAnimationFrame==`function`){window.cancelAnimationFrame(e);return}window.clearTimeout(e)}},zt=()=>{ue.current!=null&&(clearTimeout(ue.current),ue.current=null),le.current=null},Bt=()=>{fe.current?.remove(),fe.current=null},Vt=()=>{Rt(O.current),O.current=null,de.current=null},Ht=e=>{let t=S.current?.getRootNode();if(t instanceof ShadowRoot){t.append(e);return}document.body.append(e)},Ut=()=>{A.current?.(),A.current=null,N.current!=null&&(clearTimeout(N.current),N.current=null),pe.current=!1,me.current=null,M.current=null,j.current!=null&&(j.current.setAttribute(`draggable`,`true`),j.current.style.removeProperty(`touch-action`),j.current=null),Bt(),zt(),Vt(),k.current=null},Wt=(e,n)=>{let r=S.current?.getRootNode(),i=ms(fs(r instanceof ShadowRoot?r:document,e,n));return t.setDragTarget(i),t.getDragSession()?.target??null},Gt=e=>{let n=t.getDragAndDropConfig()?.openOnDropDelay??800;if(e==null||e.kind!==`directory`||e.directoryPath==null||n<=0){zt();return}let r=t.getItem(e.directoryPath),i=bs(r)?r:null;if(i==null||i.isExpanded()){zt();return}let a=`${e.directoryPath}::${e.flattenedSegmentPath??``}`;le.current!==a&&(zt(),le.current=a,ue.current=setTimeout(()=>{let n=t.getDragSession()?.target;n?.kind===`directory`&&n.directoryPath===e.directoryPath&&n.flattenedSegmentPath===e.flattenedSegmentPath&&i.expand()},n))},Kt=()=>{O.current=null;let e=de.current,n=C.current;if(e==null||n==null||t.getDragSession()==null)return;let r=n.getBoundingClientRect(),i=_s(e.clientY,r);if(i===0)return;let a=Math.max(0,n.scrollHeight-n.clientHeight),o=Math.max(0,Math.min(a,n.scrollTop+i));o!==n.scrollTop&&(n.scrollTop=o,re.current()),Gt(Wt(e.clientX,e.clientY)),O.current=Lt(Kt)},qt=(e,t)=>{de.current={clientX:e,clientY:t},O.current??=Lt(Kt)},Jt=(e,n,r)=>{let i=e.currentTarget;if(i!=null){if(Ut(),Bt(),zt(),Vt(),t.startDrag(r)===!1){e.preventDefault();return}if(k.current=n,e.dataTransfer!=null&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.dropEffect=`move`,e.dataTransfer.setData(`text/plain`,r),gs())){let t=hs(i),n=i.getBoundingClientRect();Object.assign(t.style,{height:`${n.height}px`,opacity:`0.85`,transform:`translate3d(-9999px, 0px, 0)`,width:`${n.width}px`}),Ht(t),fe.current=t,e.dataTransfer.setDragImage(t,Math.max(0,e.clientX-n.left),Math.max(0,e.clientY-n.top))}}},Yt=()=>{Bt(),zt(),Vt(),k.current=null,t.cancelDrag()},Xt=(e,n,r)=>{if(N.current!=null||pe.current)return;let i=e.touches[0],a=e.currentTarget;if(i==null||a==null)return;M.current={clientX:i.clientX,clientY:i.clientY},j.current=a,a.setAttribute(`draggable`,`false`);let o=(e={})=>{let t=e.restoreNativeDraggable??!pe.current;N.current!=null&&(clearTimeout(N.current),N.current=null),document.removeEventListener(`touchmove`,s),document.removeEventListener(`touchend`,c),document.removeEventListener(`touchcancel`,c),A.current===o&&(A.current=null),t&&(a.setAttribute(`draggable`,`true`),j.current===a&&(j.current=null),M.current=null)},s=e=>{let t=e.touches[0],n=M.current;if(t==null||n==null)return;let r=t.clientX-n.clientX,i=t.clientY-n.clientY;r*r+i*i<=100||o()},c=()=>{o()};document.addEventListener(`touchmove`,s,{passive:!0}),document.addEventListener(`touchend`,c),document.addEventListener(`touchcancel`,c),A.current=o,N.current=setTimeout(()=>{if(o({restoreNativeDraggable:!1}),t.startDrag(r)===!1){a.setAttribute(`draggable`,`true`),j.current===a&&(j.current=null),M.current=null;return}pe.current=!0,j.current=a,a.setAttribute(`draggable`,`false`),a.style.setProperty(`touch-action`,`none`),k.current=n;let e=a.getBoundingClientRect(),s=hs(a);Object.assign(s.style,{height:`${e.height}px`,opacity:`0.85`,transform:`translate3d(${e.left}px, ${e.top}px, 0)`,width:`${e.width}px`}),Ht(s),fe.current=s,me.current={x:i.clientX-e.left,y:i.clientY-e.top};let c=e=>{let t=e.touches[0];if(t==null)return;e.preventDefault();let n=me.current;n!=null&&fe.current!=null&&(fe.current.style.transform=`translate3d(${t.clientX-n.x}px, ${t.clientY-n.y}px, 0)`),Gt(Wt(t.clientX,t.clientY)),qt(t.clientX,t.clientY)},l=e=>{let n=e.changedTouches[0];n!=null&&Wt(n.clientX,n.clientY),t.completeDrag(),Ut()},u=()=>{t.cancelDrag(),Ut()};A.current=()=>{document.removeEventListener(`touchmove`,c),document.removeEventListener(`touchend`,l),document.removeEventListener(`touchcancel`,u)},document.addEventListener(`touchmove`,c,{passive:!1}),document.addEventListener(`touchend`,l),document.addEventListener(`touchcancel`,u)},Gs)},Zt=e=>{if(I!=null){if(e.key===`Escape`){jt(),e.preventDefault(),e.stopPropagation();return}Js.has(e.key)&&(e.preventDefault(),e.stopPropagation());return}if(et.isActive()){if(e.key===`Escape`)et.cancel();else if(e.key===`Enter`)et.commit();else return;Ce(`focus`),_e(e=>e+1),e.preventDefault(),e.stopPropagation();return}if(l&&e.key===`F2`){Pt(B??void 0),e.preventDefault(),e.stopPropagation();return}if(rt){if(e.key===`Escape`)se.current=!1,ce.current=null,t.closeSearch();else if(e.key===`Enter`){let e=t.getFocusedPath();e!=null&&t.selectOnlyPath(e);let n=C.current,r=xo(n,U);ce.current=V<0||n==null?null:Math.max(0,Math.min(V*s-n.scrollTop,Math.max(0,r-s))),se.current=!0,t.closeSearch()}else if(e.key===`ArrowDown`)t.focusNextSearchMatch();else if(e.key===`ArrowUp`)t.focusPreviousSearchMatch();else return;Ce(`focus`),_e(e=>e+1),e.preventDefault(),e.stopPropagation();return}if(f&&Ss(e)){t.openSearch(e.key),_e(e=>e+1),e.preventDefault(),e.stopPropagation();return}let n=z&&ws(e),r=Ts(e,z),i=r&&S.current!=null?bo(S.current):null,a=r?new Set(Ms(S.current)):new Set,o=i?.dataset.fileTreeStickyPath??null,c=i?.dataset.fileTreeStickyRow===`true`&&o!=null;if(c&&o!==B&&a.has(o)){let e=C.current;Pe(o,e?.scrollTop??null),t.focusPath(o)}let u=t.getFocusedPath(),d=t.getFocusedIndex(),p=t.getFocusedItem();if(p==null)return;let m=bs(p)?p:null,h=u!=null&&(wt.has(u)||c&&o===u&&a.has(u)),g=e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`ArrowRight`&&m!=null&&m.isExpanded(),_=e.key===`ArrowLeft`&&h&&m!=null&&m.isExpanded(),v=C.current,y=!0;if(e.shiftKey&&e.key===`ArrowDown`)t.extendSelectionFromFocused(1);else if(e.shiftKey&&e.key===`ArrowUp`)t.extendSelectionFromFocused(-1);else if(n&&u!=null&&d>=0){let e=t.getVisibleRows(d,d)[0]??null,n=js(u,ne.current,te.current);e==null||n==null?y=!1:Nt(e,u)}else if((e.ctrlKey||e.metaKey)&&xs(e))t.toggleFocusedSelection();else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`)t.selectAllVisiblePaths();else switch(e.key){case`ArrowDown`:t.focusNextItem();break;case`ArrowUp`:t.focusPreviousItem();break;case`ArrowRight`:m==null||m.isExpanded()?t.focusNextItem():m.expand();break;case`ArrowLeft`:m!=null&&m.isExpanded()?m.collapse():t.focusParentItem();break;case`Home`:t.focusFirstItem();break;case`End`:t.focusLastItem();break;default:y=!1}if(!y)return;Ce(`focus`);let b=t.getFocusedPath(),x=b!=null&&(wt.has(b)||a.has(b)),ee=g&&b!==u,re=n&&c&&o===u&&b===u;if((h||re)&&b!=null&&(ee&&x||re))Pe(b,v?.scrollTop??null),E.current=!0,P(e=>e===b?e:b);else{let t=e.key===`ArrowUp`&&h&&b!==u;b!=null&&(t||_&&b===u)?(Fe(b,Ps(S.current,v,i,u,s,Ct,U)),E.current=!0,P(e=>e===b?e:b)):Ne()}_e(e=>e+1),e.preventDefault(),e.stopPropagation()};Ro(()=>{if(f&&rt){if(R.current){R.current=!1;return}yo(ee.current)}},[rt,f]),Ro(()=>{let e=x.current;switch(ko({hasRenderedInput:e!=null,previousRenamingPath:D.current,renamingPath:tt})){case`reset`:D.current=null;return;case`reveal-canonical`:tt!=null&&Ft(tt,{restoreTreeFocus:!1,targetOffset:`live-overlay`});return;case`ignore`:return;case`focus-input`:e!=null&&(Oe.current=null,D.current=tt,yo(e),e.select());return}},[yt.end,yt.start,tt,Ft,wt]),Ro(()=>{let e=S.current;if(e==null)return;let t=null,n=()=>{t!=null&&(clearTimeout(t),t=null)},r=()=>{let t=bo(e)?.dataset.itemPath??null;P(e=>e===t?e:t)},i=()=>{n(),E.current=!0,r()},a=i=>{let a=i.relatedTarget;if(a==null){n(),t=setTimeout(()=>{if(t=null,bo(e)!=null){r();return}E.current=!1,P(null)},0);return}if(!(a instanceof Node)||!e.contains(a)){n(),E.current=!1,P(null);return}let o=a instanceof HTMLElement?a.dataset.itemPath??null:null;P(e=>e===o?e:o)};return e.addEventListener(`focusin`,i),e.addEventListener(`focusout`,a),()=>{n(),e.removeEventListener(`focusin`,i),e.removeEventListener(`focusout`,a)}},[]),Ro(()=>{let e=S.current;e!=null&&(H.physical.scrollTop<=0?e.dataset.scrollAtTop=`true`:delete e.dataset.scrollAtTop)},[H.physical.scrollTop]),Ro(()=>{let e=null,n=C.current,r=b.current,i=S.current;if(n==null)return;ie.current=xo(n,g);let a=()=>{let e=t.getVisibleCount(),r=So(ie.current,g),i=Math.max(0,e*s-r);n.scrollTop>i&&(n.scrollTop=i),Ve(ds({controller:t,itemHeight:s,overscan:c,scrollTop:Math.min(n.scrollTop,i),stickyFolders:h,viewportHeight:r}))};if(!w.current){w.current=!0;let e=t.getFocusedIndex();if(e>=0){let r=So(ie.current,g),i=t.getVisibleRows(e,e)[0]??null;wo(n,e,s,r,h&&i!=null?Math.max(0,Math.min(i.ancestorPaths.length*s,Math.max(0,r-s))):0)}}re.current=a;let o=!1,l=t.subscribe(()=>{o?_e(e=>e+1):o=!0,a()}),u=()=>{Me.current!==!0&&(r!=null&&(r.dataset.isScrolling??=``),i!=null&&(i.dataset.isScrolling??=``),y.current=!0,e!=null&&clearTimeout(e),e=setTimeout(()=>{r!=null&&delete r.dataset.isScrolling,i!=null&&delete i.dataset.isScrolling,y.current=!1,Te(e=>e+1),e=null},50))},d=null,f=()=>{i!=null&&delete i.dataset.overlayReveal,d!=null&&(clearTimeout(d),d=null)},p=()=>{i!=null&&Me.current!==!0&&(n.scrollTop>0||(i.dataset.overlayReveal=`true`,d!=null&&clearTimeout(d),d=setTimeout(()=>{f()},200)))},m=()=>{if(a(),n.scrollTop>0&&f(),De.current!=null&&y.current&&At.current(),Me.current===!0){y.current=!1;return}be(e=>e==null?e:null),u()},_=()=>{u(),p()},v=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`PageUp`,`PageDown`,`Home`,`End`,` `,`Spacebar`]),x=e=>{v.has(e.key)&&_()};n.addEventListener(`scroll`,m,{passive:!0}),n.addEventListener(`wheel`,_,{passive:!0}),n.addEventListener(`touchmove`,_,{passive:!0}),n.addEventListener(`keydown`,x);let ee=typeof ResizeObserver<`u`?new ResizeObserver(e=>{ie.current=(e[0]==null?null:Co(e[0]))??xo(n,g),a()}):null;return ee?.observe(n),()=>{re.current=()=>{},l(),n.removeEventListener(`scroll`,m),n.removeEventListener(`wheel`,_),n.removeEventListener(`touchmove`,_),n.removeEventListener(`keydown`,x),e!=null&&clearTimeout(e),d!=null&&clearTimeout(d),r!=null&&delete r.dataset.isScrolling,i!=null&&(delete i.dataset.isScrolling,delete i.dataset.overlayReveal),y.current=!1,ie.current=null,ee?.disconnect()}},[t,g,s,c,h]),Ro(()=>{z||I==null||jt(!1)},[jt,z,I]);let Qt=zo(()=>I==null?null:`${I.path}::${I.source}`,[I]);Ro(()=>{if(Qt==null){m?.clearSlotContent(at);return}let t=De.current;if(t==null)return;let n=v.current??_.current;if(n==null)return;let r={anchorElement:n,anchorRect:t.anchorRect??Ds(n.getBoundingClientRect()),close:e=>{At.current(e?.restoreFocus??!0)},restoreFocus:()=>{kt.current&&Ot.current(De.current?.path??null)}},i=e?.contextMenu?.render?.(t.item,r)??null;return m?.setSlotContent(at,i),e?.contextMenu?.onOpen?.(t.item,r),Bs(i),queueMicrotask(()=>{i!=null&&i.isConnected&&document.activeElement===i&&Bs(i)}),()=>{m?.clearSlotContent(at)}},[Qt,e?.contextMenu,m]),Ro(()=>{I!=null&&t.getItem(I.path)==null&&jt()},[jt,I,t]),Ro(()=>{if(I==null)return;let e=S.current?.getRootNode(),t=e instanceof ShadowRoot?e.host:S.current,n=e=>{let n=e.target;n instanceof Node&&(Es(e)||_.current?.contains(n)!==!0&&t?.contains(n)!==!0&&jt())},r=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),jt())};return document.addEventListener(`mousedown`,n,!0),document.addEventListener(`keydown`,r,!0),()=>{document.removeEventListener(`mousedown`,n,!0),document.removeEventListener(`keydown`,r,!0)}},[jt,I]),Ro(()=>{let e=C.current,n=S.current;if(e==null||n==null){oe.current=B;return}let r=B==null?null:te.current.get(B)??null,i=bo(n),a=i?.dataset.itemPath??null,o=nt&&x.current===i,c=f&&ee.current===i,l=se.current&&!rt,u=ce.current??0,d=Oe.current,p=L.current,m=ke.current,g=Ae.current,_=i!=null,v=E.current||_,y=oe.current!==B,b=p!=null&&p===B&&B!=null,ne=!1,ie=!1;if(ct!=null&&ct.id!==ae.current){ae.current=ct.id;let n=ct.visibleIndex,r=t.getVisibleRows(n,n)[0]??null;if(r!=null){let t=h?Math.max(0,Math.min(r.ancestorPaths.length*s,Math.max(0,U-s))):Ct;ne=!0,ie=To(e,n,s,U,St,ct.offset,t)}t.clearScrollRequest(ct.id)}let w=!ne&&l&&Eo(e,V,s,U,St,u),T=!ne&&d!=null&&d===B&&Eo(e,V,s,U,St,Ct),D=!ne&&m!=null&&m.path===B&&Eo(e,V,s,U,St,m.viewportOffset),O=!ne&&g!=null&&g.path===B&&e.scrollTop!==g.scrollTop;if(O&&(e.scrollTop=g.scrollTop),(O||ie||T||D||w||v&&y&&d!==B&&!b&&wo(e,V,s,U,Ct))&&re.current(),ne){oe.current=B;return}if(!v){oe.current=B;return}if(o){oe.current=B;return}if(c&&!l){oe.current=B;return}if(r==null){l&&V>=0&&(Eo(e,V,s,U,St,u),re.current()),oe.current=B;return}(y||l||d===B||p===B||m?.path===B||g?.path===B||a==null||a!==B)&&(yo(r),d===B&&(Oe.current=null),p===B&&(L.current=null),m?.path===B&&(ke.current=null),g?.path===B&&(Ae.current=null),se.current=!1,ce.current=null),oe.current=B},[t,V,B,Tt,s,nt,rt,yt,U,f,ct,h,Ct,St,vt]);let $t=V>=0&&V>=H.visible.startIndex&&V<=H.visible.endIndex,en=B!=null&&bt.some(e=>cs(e.row)===B),tn=$t||en,nn=Ge&&E.current===!0&&tn?B:null,rn=Se===`pointer`?ye:null,an=I?.path??je.current??rn??nn??ye,on=I?.source===`right-click`;Ro(()=>{y.current&&I==null||Mt(Ze(an))},[I,Ze,yt,U,we,bt,an,Mt,vt]);let sn=Bo(e=>{if(y.current||Es(e))return;let t=e.target;if(!(t instanceof HTMLElement)||t.closest?.(`[data-type="context-menu-trigger"]`)!=null)return;let n=t.closest?.(`[data-file-tree-sticky-row="true"]`),r=t.closest?.(`[data-type="item"]`),i=n instanceof HTMLElement?n.dataset.fileTreeStickyPath??null:r instanceof HTMLElement?r.dataset.itemPath??null:null;i!=null&&Ce(e=>e===`pointer`?e:`pointer`),be(e=>e===i?e:i)},[]),cn=Bo(()=>{be(null)},[]);Ro(()=>{if(!ut)return;let e=()=>{Ut(),t.cancelDrag()};return window.addEventListener(`dragend`,e),()=>{window.removeEventListener(`dragend`,e),Ut(),t.cancelDrag()}},[t,ut]);let ln=e=>{if(!ut||t.getDragSession()==null||pe.current)return;let n=ms(e.target instanceof HTMLElement?e.target:null);t.setDragTarget(n),Gt(t.getDragSession()?.target??null),qt(e.clientX,e.clientY),e.dataTransfer!=null&&(e.dataTransfer.dropEffect=`move`),e.preventDefault()},un=e=>{if(!ut||t.getDragSession()==null||pe.current)return;let n=e.relatedTarget;n instanceof Node&&S.current?.contains(n)===!0||(zt(),Vt(),t.setDragTarget(null))},dn=e=>{ut&&t.getDragSession()!=null&&!pe.current&&(e.preventDefault(),Wt(e.clientX,e.clientY),t.completeDrag(),Bt(),zt(),Vt(),k.current=null)},fn=H.window.height,pn=H.window.offsetTop,mn=Math.min(0,U-fn),hn=Math.min(0,U-fn-Ct),gn=ve===B||se.current,_n=B!=null&&gn&&!Tt&&V>=0?vt[V]??t.getVisibleRows(V,V)[0]??null:null,vn=_n==null?null:Do(V,s,yt,fn),yn=k.current,G=mt!=null&&yn!=null&&yn.path===mt&&yn.index>=yt.start&&yn.index<=yt.end,bn=mt!=null&&yn!=null&&yn.path===mt&&!G&&yn.path!==_n?.path?yn:null,xn=bn==null?null:Do(bn.index,s,yt,fn),Sn=Cs((V>=0?vt[V]??t.getVisibleRows(V,V)[0]??null:null)?.ancestorPaths.at(-1)??null),Cn=rt&&B!=null?Ls(o,B,!Tt):void 0,wn=I?.path??(rt?B:ve),K=I?.path??ye,q=Ze(an),Tn=z&&Ge&&!on&&!nt&&q!=null&&F!=null&&an!=null,En=z&&(Tn||I!=null),Dn=I?.anchorRect,On=Dn==null&&q!=null&&F!=null&&(I!=null||Tn)?F:null,kn=Dn==null?On==null?void 0:{top:`${On}px`}:{left:`${Dn.left}px`,position:`fixed`,right:`auto`,top:`${Dn.top}px`},An=on?{opacity:`0`}:void 0,jn=Bo((e,n,r,i)=>{let a=No({event:{ctrlKey:e.ctrlKey,metaKey:e.metaKey,shiftKey:e.shiftKey},isDirectory:n.kind===`directory`,isSearchOpen:rt,mode:i}),o=a.toggleDirectory&&n.kind===`directory`,s=o?t.resolveMountedDirectoryPathFromInput(r):null;if(o&&s==null)return;let c=s??r;switch(a.selection.kind){case`range`:t.selectPathRange(c,a.selection.additive);break;case`toggle`:t.togglePathSelectionFromInput(c);break;case`single`:t.selectOnlyMountedPathFromInput(c)}let l=e.currentTarget instanceof HTMLElement?e.currentTarget:null,u=n.index>=H.visible.startIndex&&n.index<=H.visible.endIndex,d=i===`flow`&&u&&l!=null&&l.dataset.itemParked!==`true`;t.focusMountedPathFromInput(c),d&&(E.current=!0,P(e=>e===c?e:c),Ce(`focus`)),o&&t.toggleMountedDirectoryFromInput(c),a.closeSearch&&t.closeSearch(),a.revealCanonical&&Ft(c,{targetOffset:`sticky-parents`})},[t,rt,H.visible.endIndex,H.visible.startIndex,Ft]),Mn=()=>{if(y.current||!Ge||an==null||q==null)return;let e=t.getItem(an);e!=null&&(Mt(q),kt.current=!0,Ee({anchorRect:null,item:{kind:e.isDirectory()?`directory`:`file`,name:q.getAttribute(`aria-label`)??an,path:e.getPath()},path:e.getPath(),source:`button`}))},Nn={contextHoverPath:K,contextMenuButtonTriggerEnabled:Ge,contextMenuButtonVisibility:Ke,contextMenuEnabled:z,contextMenuRightClickEnabled:qe,contextMenuTriggerMode:We,controller:t,directoriesWithGitChanges:i,dragAndDropEnabled:ut,draggedPathSet:ft,dragTarget:pt,gitLaneActive:Qe,gitStatusByPath:n,handleRowDragEnd:Yt,handleRowDragStart:Jt,handleRowTouchStart:Xt,ignoredGitDirectories:r,ignoredInheritanceCache:ge,instanceId:o,itemHeight:s,onKeyDown:Zt,onRowClick:jn,openContextMenuForRow:Nt,registerButton:Je,registerRenameInput:Xe,renameView:et,renderDecorationForRow:Et,resolveIcon:$e,shouldSuppressContextMenu:It,visualFocusPath:wn},Pn={...Nn,registerButton:Ye};return X(`div`,{ref:S,id:ht,"data-file-tree-context-menu-button-visibility":z&&Ge?Ke:void 0,"data-file-tree-context-menu-trigger-mode":z?We:void 0,"data-file-tree-has-context-menu-action-lane":z&&Ge?`true`:void 0,"data-file-tree-has-git-lane":Qe?`true`:void 0,"data-file-tree-virtualized-root":`true`,onDragLeave:ut?un:void 0,onDragOver:ut?ln:void 0,onDrop:ut?dn:void 0,onKeyDown:Zt,onPointerLeave:z?cn:void 0,onPointerOver:z?sn:void 0,role:`tree`,tabIndex:-1,style:{outline:`none`,position:`relative`},children:[X(`style`,{"data-file-tree-guide-style":`true`,dangerouslySetInnerHTML:{__html:Sn}}),X(`slot`,{name:it,"data-type":`header-slot`}),f?X(`div`,{"data-file-tree-search-container":!0,"data-open":rt?`true`:`false`,children:X(`input`,{ref:ee,"aria-activedescendant":Cn,"aria-controls":ht,placeholder:`Search…`,"data-file-tree-search-input":!0,"data-file-tree-search-input-fake-focus":Ie?`true`:void 0,value:st,onBlur:()=>{(d!==`retain`||Re.current)&&t.closeSearch()},onFocus:ze,onPointerDown:ze,onInput:e=>{ze();let n=e.currentTarget;t.setSearch(n.value)}})}):null,X(`div`,{ref:C,"data-file-tree-virtualized-scroll":`true`,children:[h&&He&&bt.length>0?X(`div`,{"aria-hidden":`true`,"data-file-tree-sticky-overlay":`true`,children:X(`div`,{"data-file-tree-sticky-overlay-content":`true`,style:{height:`${gt}px`},children:bt.map((e,t)=>Hs(Pn,e.row,`sticky:${cs(e.row)}`,{mode:`sticky`,style:{left:`0`,position:`absolute`,right:`0`,top:`${e.top}px`,zIndex:`${bt.length-t}`}}))})}):null,X(`div`,{ref:b,"data-file-tree-virtualized-list":`true`,style:{height:`${St}px`},children:[X(`div`,{"data-file-tree-virtualized-sticky-offset":`true`,"aria-hidden":`true`,style:{height:`${pn}px`}}),X(`div`,{"data-file-tree-virtualized-sticky":`true`,style:{height:`${fn}px`,top:`${mn}px`,bottom:`${hn}px`},children:[Us(Nn,yt,wt),_n!=null&&vn!=null?Hs(Nn,_n,`parked:${_n.path}`,{isParked:!0,style:{left:`0`,opacity:`0`,pointerEvents:mt===_n.path?`none`:void 0,position:`absolute`,right:`0`,top:`${vn}px`}}):null,bn!=null&&xn!=null?Hs(Nn,bn,`parked-drag:${bn.path}`,{isParked:!0,style:{left:`0`,opacity:`0`,pointerEvents:`none`,position:`absolute`,right:`0`,top:`${xn}px`}}):null]})]})]}),z?X(`div`,{ref:_,"data-type":`context-menu-anchor`,"data-visible":En?`true`:`false`,style:kn,children:[X(`button`,{ref:v,type:`button`,"data-type":ot,"aria-label":`Options`,"aria-haspopup":`menu`,"aria-expanded":I==null?`false`:`true`,"data-visible":Tn?`true`:`false`,onMouseDown:e=>{e.preventDefault()},onClick:e=>{if(e.preventDefault(),e.stopPropagation(),I!=null){jt();return}Mn()},tabIndex:-1,style:An,children:X(Pa,{...$e(`file-tree-icon-ellipsis`)})}),I==null?null:X(`slot`,{name:at})]}):null,I==null?null:X(`div`,{"data-type":`context-menu-wash`,"aria-hidden":`true`,onMouseDownCapture:e=>{e.preventDefault(),jt()},onTouchStartCapture:e=>{e.preventDefault(),e.stopPropagation(),jt()},onTouchMoveCapture:e=>{e.preventDefault(),e.stopPropagation()},onWheelCapture:e=>{e.preventDefault(),e.stopPropagation()}})]})}var Gs,Ks,qs,Js;function Ys(){return(Ys=e((()=>{st(),A(),ut(),Li(),Ra(),Za(),uo(),ho(),Oo(),jo(),ja(),os(),Na(),Gs=400,Ks=40,qs=18,Js=new Set([`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`End`,`Home`,`PageDown`,`PageUp`])})))()}function Xs(e,t){$s.renderRoot(e,t)}function Zs(e,t){$s.hydrateRoot(e,t)}function Qs(e){$s.unmountRoot(e)}var $s;function ec(){return(ec=e((()=>{Ys(),ja(),$s={hydrateRoot:(e,t)=>{ga(Ki(Ws,t),e)},renderRoot:(e,t)=>{ha(Ki(Ws,t),e)},unmountRoot:e=>{ha(null,e)}}})))()}var tc;function nc(){return(nc=e((()=>{tc=class{#e=new Map;#t=null;clearAll(){for(let e of this.#e.values())e.remove();this.#e.clear()}clearSlotContent(e){let t=this.#n(e);t!=null&&(t.remove(),this.#e.delete(e))}setHost(e){if(this.#t=e,e!=null){this.#i(e);for(let[e,t]of this.#e)this.#r(e,t)}}setSlotContent(e,t){let n=this.#n(e);if(n===t){t!=null&&(this.#e.set(e,t),this.#r(e,t));return}if(n?.remove(),t==null){this.#e.delete(e);return}this.#e.set(e,t),this.#r(e,t)}setSlotHtml(e,t){let n=t?.trim()??``;if(n.length===0){this.setSlotContent(e,null);return}let r=this.#n(e);if(r!=null&&r.innerHTML===n){this.#e.set(e,r),this.#r(e,r);return}let i=document.createElement(`div`);i.innerHTML=n,this.setSlotContent(e,i)}#n(e){let t=this.#e.get(e)??null;if(t!=null)return t;let n=this.#t;if(n==null)return null;for(let t of Array.from(n.children))if(t instanceof HTMLElement&&t.dataset.fileTreeManagedSlot===e)return t;return null}#r(e,t){t.slot=e,t.dataset.fileTreeManagedSlot=e,this.#t!=null&&t.parentNode!==this.#t&&this.#t.appendChild(t)}#i(e){for(let t of Array.from(e.children)){if(!(t instanceof HTMLElement))continue;let e=t.dataset.fileTreeManagedSlot;e==null||this.#e.has(e)||this.#e.set(e,t)}}}})))()}function rc(){return(rc=e((()=>{ja(),Array.isArray})))()}function ic(e){return e!=null&&e.length>0?e:(lc+=1,`pst_ft_${lc}`)}function ac({initialVisibleRowCount:e,itemHeight:t}){return e==null?420:Math.max(0,e)*(t??lt)}function oc(e){if(typeof document>`u`)return;let t=document.createElement(`div`);t.innerHTML=e;let n=t.querySelector(`svg`);return n instanceof SVGElement?n:void 0}function sc(e){return e.querySelector(`#file-tree-icon-chevron`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-file`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-dot`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-lock`)instanceof SVGElement}function cc(e){return Array.from(e.children).filter(e=>e instanceof SVGElement)}var lc,uc;function dc(){return(dc=e((()=>{pe(),st(),ct(),ut(),gt(),Ct(),Li(),Wi(),ec(),nc(),ja(),rc(),lc=0,uc=class{static LoadedCustomComponent=!0;#e;#t;#n;#r;#i;#a;#o;#s;#c;#l=new tc;#u;#d;#f;#p;#m;#h;#g;#_;#v;#y=null;#b;#x=!1;#S=!1;constructor(e){let{composition:t,density:n,fileTreeSearchMode:r,gitStatus:i,id:a,initialSearchQuery:o,icons:s,itemHeight:c,onSearchChange:l,onSelectionChange:u,overscan:d,renderRowDecoration:f,renaming:p,search:m,searchBlurBehavior:h,searchFakeFocus:g,stickyFolders:_,unsafeCSS:v,initialVisibleRowCount:y,...b}=e;this.#e=t,this.#n=ic(a),this.#p=Ui(i),this.#m=s,this.#h=v,this.#r=u,this.#i=f,this.#a=p!=null&&p!==!1,this.#o=h,this.#s=m===!0,this.#c=g===!0,this.#u=B(n,c),this.#d={itemHeight:this.#u.itemHeight,overscan:d,stickyFolders:_,initialVisibleRowCount:y},this.#t=new Ii({...b,fileTreeSearchMode:r,initialSearchQuery:o,onSearchChange:l,renaming:p}),this.#v=this.#t.getSelectionVersion(),this.#y=this.#r==null?null:this.subscribe(()=>{this.#D()})}unmount(){this.#b!=null&&(Qs(this.#b),delete this.#b.dataset.fileTreeVirtualizedWrapper,this.#b=void 0),this.#l.clearAll(),this.#l.setHost(null),this.#f!=null&&(delete this.#f.dataset.fileTreeVirtualized,this.#I(this.#f),this.#f=void 0)}cleanUp(){this.unmount(),this.#y?.(),this.#y=null,this.#t.destroy()}getFileTreeContainer(){return this.#f}getItem(e){return this.#t.getItem(e)}getFocusedItem(){return this.#t.getFocusedItem()}getFocusedPath(){return this.#t.getFocusedPath()}getSelectedPaths(){return this.#t.getSelectedPaths()}getComposition(){return this.#e}getItemHeight(){return this.#u.itemHeight}getDensityFactor(){return this.#u.factor}subscribe(e){let t=!1;return this.#t.subscribe(()=>{if(!t){t=!0;return}e()})}focusPath(e){this.#t.focusPath(e)}scrollToPath(e,t){this.#t.scrollToPath(e,t)}focusNearestPath(e){return this.#t.focusNearestPath(e)}add(e){this.#t.add(e)}batch(e){this.#t.batch(e)}move(e,t,n){this.#t.move(e,t,n)}onMutation(e,t){return this.#t.onMutation(e,t)}setSearch(e){this.#t.setSearch(e)}openSearch(e){this.#t.openSearch(e)}closeSearch(){this.#t.closeSearch()}isSearchOpen(){return this.#t.isSearchOpen()}getSearchValue(){return this.#t.getSearchValue()}getSearchMatchingPaths(){return this.#t.getSearchMatchingPaths()}focusNextSearchMatch(){this.#t.focusNextSearchMatch()}focusPreviousSearchMatch(){this.#t.focusPreviousSearchMatch()}startRenaming(e,t){return this.#t.startRenaming(e,t)}remove(e,t){this.#t.remove(e,t)}resetPaths(e,t){this.#t.resetPaths(e,t)}setComposition(e){this.#e=e;let t=this.#T();t!=null&&(this.#O(),Xs(t.wrapper,this.#w()))}setGitStatus(e){this.#p=Ui(e,this.#p);let t=this.#T();t!=null&&Xs(t.wrapper,this.#w())}setIcons(e){this.#m=e;let t=this.#T();t!=null&&(this.#E(t.host,t.wrapper),Xs(t.wrapper,this.#w()))}hydrate({fileTreeContainer:e}){let t=this.#P(e),n=this.#N(t);this.#O(),Zs(n,this.#w())}render({containerWrapper:e,fileTreeContainer:t}){let n=this.#P(t??this.#f,e),r=this.#N(n);this.#O(),Xs(r,this.#w())}#C(){return{initialViewportHeight:ac({initialVisibleRowCount:this.#d.initialVisibleRowCount,itemHeight:this.#d.itemHeight}),itemHeight:this.#d.itemHeight,overscan:this.#d.overscan,stickyFolders:this.#d.stickyFolders}}#w(){return{composition:this.#e,controller:this.#t,gitStatusByPath:this.#p?.statusByPath,ignoredGitDirectories:this.#p?.ignoredDirectoryPaths,directoriesWithGitChanges:this.#p?.directoriesWithChanges,icons:this.#m,instanceId:this.#n,renamingEnabled:this.#a,renderRowDecoration:this.#i,searchBlurBehavior:this.#o,searchEnabled:this.#s,searchFakeFocus:this.#c,slotHost:this.#l,...this.#C()}}#T(){let e=this.#f,t=this.#b;return e==null||t==null?null:{host:e,wrapper:t}}#E(e,t){let n=e.shadowRoot;n!=null&&(this.#k(n),this.#A(n)),this.#j(t)}#D(){let e=this.#r;if(e==null)return;let t=this.#t.getSelectionVersion();t!==this.#v&&(this.#v=t,e(this.#t.getSelectedPaths()))}#O(){let e=this.#e?.header?.render;if(e!=null){this.#l.setSlotContent(it,e());return}this.#l.setSlotHtml(it,this.#e?.header?.html??null)}#k(e){let t=cc(e).find(e=>sc(e)),n=oc(fe(k(this.#m).set));n!=null&&(t==null||t.outerHTML!==n.outerHTML)&&(t==null?e.prepend(n):t.replaceWith(n))}#A(e){let t=cc(e),n=t.find(e=>sc(e)),r=t.filter(e=>e!==n),i=k(this.#m).spriteSheet?.trim()??``;if(i.length===0){for(let e of r)e.remove();return}let a=oc(i);if(a==null){for(let e of r)e.remove();return}if(r.length!==1||r[0].outerHTML!==a.outerHTML){for(let e of r)e.remove();e.appendChild(a)}}#j(e){let t=k(this.#m);t.colored&&me(t.set)?e.dataset.fileTreeColoredIcons=`true`:delete e.dataset.fileTreeColoredIcons}#M(e){let t=e.querySelector(`style[${et}]`);if(this.#g==null&&t instanceof HTMLStyleElement&&(this.#g=t),this.#h==null||this.#h===``){this.#g?.remove(),this.#g=void 0,this.#_=void 0;return}(this.#g?.parentNode!==e||this.#_!==this.#h)&&(this.#g??=document.createElement(`style`),this.#g.setAttribute(et,``),this.#g.parentNode!==e&&e.appendChild(this.#g),this.#g.textContent=mt(this.#h),this.#_=this.#h)}#N(e){if(this.#b!=null)return this.#b;let t=e.shadowRoot;if(t==null)throw Error(`FileTree requires a shadow root`);let n=Array.from(t.children).filter(e=>e instanceof HTMLDivElement&&typeof e.dataset.fileTreeId==`string`&&e.dataset.fileTreeId.length>0),r=n.find(e=>e.dataset.fileTreeId===this.#n)??n[0];return r!=null&&(this.#n=r.dataset.fileTreeId??this.#n),this.#b=r??document.createElement(`div`),this.#b.dataset.fileTreeId=this.#n,this.#b.dataset.fileTreeVirtualizedWrapper=`true`,this.#E(e,this.#b),this.#b.parentNode!==t&&t.appendChild(this.#b),this.#b}#P(e,t){let n=e??this.#f??document.createElement(`file-tree-container`);t!=null&&n.parentNode!==t&&t.appendChild(n);let r=n.shadowRoot??n.attachShadow({mode:`open`});return bt(n,r),this.#M(r),n.dataset.fileTreeVirtualized=`true`,n.style.display=`flex`,this.#F(n),this.#l.setHost(n),this.#f=n,n}#F(e){e.style.getPropertyValue(`--trees-item-height`)===``&&(e.style.setProperty(`--trees-item-height`,`${String(this.#u.itemHeight)}px`),this.#x=!0),e.style.getPropertyValue(`--trees-density-override`)===``&&(e.style.setProperty(`--trees-density-override`,String(this.#u.factor)),this.#S=!0)}#I(e){this.#x&&=(e.style.removeProperty(`--trees-item-height`),!1),this.#S&&=(e.style.removeProperty(`--trees-density-override`),!1)}}})))()}function fc(e,t,n){let r=e==null?null:(0,vc.jsx)(`div`,{slot:it,children:e}),i=t!=null&&n!=null?(0,vc.jsx)(`div`,{slot:at,children:t(n.item,n.context)}):null;return r==null&&i==null?null:(0,vc.jsxs)(vc.Fragment,{children:[r,i]})}function pc(e,t){return typeof window>`u`&&t!=null?(0,vc.jsxs)(vc.Fragment,{children:[(0,vc.jsx)(`template`,{shadowrootmode:`open`,dangerouslySetInnerHTML:{__html:t.shadowHtml}}),e]}):(0,vc.jsx)(vc.Fragment,{children:e})}function mc(e){let t=e.shadowRoot;return t?.querySelector(`[data-file-tree-id]`)instanceof HTMLElement||t?.querySelector(`[data-file-tree-id]`)instanceof SVGElement||e.querySelector(`template[shadowrootmode="open"]`)instanceof HTMLTemplateElement}function hc(e,t,n,r,i){let a={...e??{}};if(t!=null&&delete a.header,n){let t=e?.contextMenu,n=t?.onClose,o=t?.onOpen;a.contextMenu={...t??{},enabled:!0,onClose:()=>{n?.(),r()},onOpen:(e,t)=>{i(e,t),o?.(e,t)}},delete a.contextMenu.render}return a.header!=null||a.contextMenu!=null?a:void 0}function gc({header:e,id:t,model:n,preloadedData:r,renderContextMenu:i,...a}){let[o,s]=(0,_c.useState)(null),[c,l]=(0,_c.useState)(null),u=(0,_c.useRef)(n.getComposition()),d=(0,_c.useRef)(n);d.current!==n&&(d.current=n,u.current=n.getComposition());let f=i!=null,p=(0,_c.useCallback)(()=>{s(null)},[]),m=(0,_c.useCallback)((e,t)=>{s({context:t,item:e})},[]),h=u.current,g=(0,_c.useMemo)(()=>hc(h,e,f,p,m),[h,p,m,f,e]),_=(0,_c.useCallback)(e=>{l(e)},[]);(0,_c.useEffect)(()=>{f||s(null)},[f]),yc(()=>{n.setComposition(g)},[g,n]),yc(()=>{if(c!=null)return r!=null&&mc(c)?n.hydrate({fileTreeContainer:c}):n.render({fileTreeContainer:c}),()=>{n.unmount(),n.setComposition(h)}},[h,c,n,r]);let v=pc(fc(e,i,o),r),y=t??r?.id,b={"--trees-item-height":`${String(n.getItemHeight())}px`,"--trees-density-override":n.getDensityFactor(),...a.style};return(0,vc.jsx)(Qe,{...a,id:y,ref:_,style:b,suppressHydrationWarning:r!=null,children:v})}var _c,vc,yc;function bc(){return(bc=e((()=>{st(),_c=s(),vc=c(),yc=typeof window>`u`?_c.useEffect:_c.useLayoutEffect})))()}function xc(e){let[t]=(0,Sc.useState)(()=>new uc(e)),n=(0,Sc.useRef)({timeout:null,model:t});return(0,Sc.useEffect)(()=>{let{current:e}=n;return e.timeout!=null&&(clearTimeout(e.timeout),e.timeout=null),()=>{e.timeout=setTimeout(()=>e.model.cleanUp(),1)}},[]),{model:t}}var Sc;function Cc(){return(Cc=e((()=>{dc(),Sc=s()})))()}function wc({isLoadingOpenTargets:e=!1,onAddToChat:n,onCopyPath:r,onOpenInTarget:i,onSaveAs:a,primaryTarget:o,targetPath:s,visibleTargets:c}){if(s==null)return[];let l=r==null?`workspace`:`review`,u=[];return a!=null&&u.push({id:`save-as`,message:t({id:`markdown.fileReference.saveAs`,defaultMessage:`Save as…`,description:`Context menu action to save a file tree item to a user-selected location`}),onSelect:()=>{a(s)}}),r!=null&&u.push({id:`copy-path`,message:t({id:`codex.review.fileTree.contextMenu.copyPath`,defaultMessage:`Copy path`,description:`Context menu action to copy the path of a file tree item`}),onSelect:()=>{r(s)}}),n!=null&&u.push({id:`add-to-chat`,message:t({id:`threadSidePanel.workspaceBrowser.addToChat`,defaultMessage:`Add to chat`,description:`Context menu action for adding a file from the file tree to the current chat`}),onSelect:()=>{n(s)}}),e?[{id:`open-in-loading`,message:Dc(l),tooltipMessage:t({id:`threadSidePanel.workspaceBrowser.openIn.loading`,defaultMessage:`Loading available apps…`,description:`Tooltip shown when the file tree is still loading app options for opening a file`}),enabled:!1},{id:`open-in-separator`,type:`separator`},...u]:o==null?u:[...S({idPrefix:Tc(l),messages:Ec(l),onOpenInTarget:(e,t)=>{i(e,t,s)},primaryTarget:o,visibleTargets:c}),{id:`open-in-separator`,type:`separator`},...u]}function Tc(e){switch(e){case`review`:return`review-file-tree-open`;case`workspace`:return`workspace-directory-tree-open`}}function Ec(e){switch(e){case`review`:return{openInTarget:t({id:`codex.review.fileTree.contextMenu.openInTarget`,defaultMessage:`Open in {target}`,description:`Context menu action to open a review file in the preferred app`}),openIn:Dc(e),openInTargetSubmenu:t({id:`codex.review.fileTree.contextMenu.openWithTarget`,defaultMessage:`{target}`,description:`Context menu action to open a review file in a specific app`})};case`workspace`:return{openInTarget:t({id:`threadSidePanel.workspaceBrowser.openInTarget`,defaultMessage:`Open in {target}`,description:`Context menu action to open a workspace browser file in the preferred app`}),openIn:Dc(e),openInTargetSubmenu:t({id:`threadSidePanel.workspaceBrowser.openInTargetSubmenu`,defaultMessage:`{target}`,description:`Context menu action to open a workspace browser file in a specific app`})}}}function Dc(e){switch(e){case`review`:return t({id:`codex.review.fileTree.contextMenu.openWith`,defaultMessage:`Open with`,description:`Context menu submenu label for choosing an app to open a review file`});case`workspace`:return t({id:`threadSidePanel.workspaceBrowser.openIn`,defaultMessage:`Open in…`,description:`Context menu submenu label for choosing an app to open a workspace browser file`})}}function Oc({cwd:e,isWindowsHost:t,itemPath:n,targetPathByDisplayPath:r}){return n==null?null:r.get(n)??se(e??``,n,t)}function kc(){return(kc=e((()=>{a(),T(),E()})))()}function Ac(e){for(let t of e.composedPath()){if(!(t instanceof Element)||t.getAttribute(`data-item-type`)!==`file`)continue;let e=t.getAttribute(`data-item-path`);if(e)return e}return null}function jc(){return(jc=e((()=>{})))()}var Mc;function Nc(){return(Nc=e((()=>{Mc=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 6.41797C10.367 6.41815 10.6649 6.71599 10.665 7.08301V9.33496H12.916C13.2832 9.33496 13.5809 9.63287 13.5811 10C13.5809 10.3671 13.2832 10.665 12.916 10.665H10.665V12.916C10.665 13.2832 10.3671 13.5809 10 13.5811C9.63284 13.5809 9.33496 13.2832 9.33496 12.916V10.665H7.08301C6.71596 10.6649 6.41815 10.367 6.41797 10C6.41813 9.63295 6.71595 9.33509 7.08301 9.33496H9.33496V7.08301C9.33513 6.71596 9.63295 6.4181 10 6.41797Z" fill="currentColor" />
  <path d="M12.666 2.66797C13.3549 2.66797 13.9121 2.66735 14.3623 2.7041C14.8202 2.74151 15.2268 2.82084 15.6035 3.0127C16.1989 3.31608 16.6829 3.80115 16.9863 4.39649C17.1781 4.77304 17.2575 5.17902 17.2949 5.63672C17.3317 6.08689 17.3311 6.64406 17.3311 7.33301V12.666C17.3311 13.3549 17.3317 13.9121 17.2949 14.3623C17.2575 14.8203 17.1782 15.2268 16.9863 15.6035C16.6829 16.1988 16.1988 16.6829 15.6035 16.9863C15.2268 17.1783 14.8203 17.2575 14.3623 17.2949C13.9121 17.3317 13.3549 17.3311 12.666 17.3311H7.33301C6.64403 17.3311 6.08691 17.3317 5.63672 17.2949C5.17899 17.2575 4.77306 17.1781 4.39649 16.9863C3.80114 16.6829 3.31609 16.1989 3.0127 15.6035C2.82085 15.2269 2.74151 14.8202 2.7041 14.3623C2.66736 13.9122 2.66797 13.3548 2.66797 12.666V7.33301C2.66797 6.64406 2.66732 6.08689 2.7041 5.63672C2.74152 5.17904 2.82093 4.77302 3.0127 4.39649C3.31613 3.80104 3.80103 3.31611 4.39649 3.0127C4.77304 2.82092 5.17902 2.74152 5.63672 2.7041C6.08691 2.66732 6.64403 2.66797 7.33301 2.66797H12.666ZM7.33301 3.99805C6.6221 3.99805 6.12859 3.99894 5.74512 4.03027C5.36955 4.06098 5.15798 4.11775 5 4.19824C4.65484 4.37414 4.37416 4.65485 4.19824 5C4.11775 5.15797 4.06098 5.36959 4.03027 5.74512C3.99894 6.12858 3.99805 6.62214 3.99805 7.33301V12.666C3.99805 13.3767 3.99898 13.8705 4.03027 14.2539C4.06094 14.6292 4.11788 14.8411 4.19824 14.999C4.37412 15.3442 4.65487 15.6258 5 15.8018C5.15795 15.8822 5.36972 15.939 5.74512 15.9697C6.12859 16.0011 6.6221 16.001 7.33301 16.001H12.666C13.3767 16.001 13.8705 16.001 14.2539 15.9697C14.6292 15.9391 14.8411 15.8821 14.999 15.8018C15.3443 15.6258 15.6258 15.3443 15.8018 14.999C15.8821 14.8411 15.9391 14.6292 15.9697 14.2539C16.001 13.8705 16.001 13.3767 16.001 12.666V7.33301C16.001 6.62213 16.0011 6.12858 15.9697 5.74512C15.939 5.36976 15.8822 5.15795 15.8018 5C15.6258 4.65488 15.3442 4.37411 14.999 4.19824C14.8411 4.11787 14.6292 4.06094 14.2539 4.03027C13.8705 3.99898 13.3767 3.99805 12.666 3.99805H7.33301Z" fill="currentColor" />
</svg>
`})))()}var Pc;function Fc(){return(Fc=e((()=>{Pc=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.916 9.33496C13.2833 9.33496 13.5811 9.63273 13.5811 10C13.5811 10.3673 13.2833 10.665 12.916 10.665H7.08301C6.71585 10.6649 6.41797 10.3672 6.41797 10C6.41797 9.63281 6.71585 9.33509 7.08301 9.33496H12.916Z" fill="currentColor" />
  <path d="M12.666 2.66797C13.3549 2.66797 13.9121 2.66735 14.3623 2.7041C14.8202 2.74151 15.2268 2.82084 15.6035 3.0127C16.1989 3.31608 16.6829 3.80115 16.9863 4.39649C17.1781 4.77304 17.2575 5.17902 17.2949 5.63672C17.3317 6.08689 17.3311 6.64406 17.3311 7.33301V12.666C17.3311 13.3549 17.3317 13.9121 17.2949 14.3623C17.2575 14.8203 17.1782 15.2268 16.9863 15.6035C16.6829 16.1988 16.1988 16.6829 15.6035 16.9863C15.2268 17.1783 14.8203 17.2575 14.3623 17.2949C13.9121 17.3317 13.3549 17.3311 12.666 17.3311H7.33301C6.64403 17.3311 6.08691 17.3317 5.63672 17.2949C5.17899 17.2575 4.77306 17.1781 4.39649 16.9863C3.80114 16.6829 3.31609 16.1989 3.0127 15.6035C2.82085 15.2269 2.74151 14.8202 2.7041 14.3623C2.66736 13.9122 2.66797 13.3548 2.66797 12.666V7.33301C2.66797 6.64406 2.66732 6.08689 2.7041 5.63672C2.74152 5.17904 2.82093 4.77302 3.0127 4.39649C3.31613 3.80104 3.80103 3.31611 4.39649 3.0127C4.77304 2.82092 5.17902 2.74152 5.63672 2.7041C6.08691 2.66732 6.64403 2.66797 7.33301 2.66797H12.666ZM7.33301 3.99805C6.6221 3.99805 6.12859 3.99894 5.74512 4.03027C5.36955 4.06098 5.15798 4.11775 5 4.19824C4.65484 4.37414 4.37416 4.65485 4.19824 5C4.11775 5.15797 4.06098 5.36959 4.03027 5.74512C3.99894 6.12858 3.99805 6.62214 3.99805 7.33301V12.666C3.99805 13.3767 3.99898 13.8705 4.03027 14.2539C4.06094 14.6292 4.11788 14.8411 4.19824 14.999C4.37412 15.3442 4.65487 15.6258 5 15.8018C5.15795 15.8822 5.36972 15.939 5.74512 15.9697C6.12859 16.0011 6.6221 16.001 7.33301 16.001H12.666C13.3767 16.001 13.8705 16.001 14.2539 15.9697C14.6292 15.9391 14.8411 15.8821 14.999 15.8018C15.3443 15.6258 15.6258 15.3443 15.8018 14.999C15.8821 14.8411 15.9391 14.6292 15.9697 14.2539C16.001 13.8705 16.001 13.3767 16.001 12.666V7.33301C16.001 6.62213 16.0011 6.12858 15.9697 5.74512C15.939 5.36976 15.8822 5.15795 15.8018 5C15.6258 4.65488 15.3442 4.37411 14.999 4.19824C14.8411 4.11787 14.6292 4.06094 14.2539 4.03027C13.8705 3.99898 13.3767 3.99805 12.666 3.99805H7.33301Z" fill="currentColor" />
</svg>
`})))()}var Ic;function Lc(){return(Lc=e((()=>{Ic=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 8.33301C10.9205 8.33301 11.667 9.07953 11.667 10C11.667 10.9205 10.9205 11.667 10 11.667C9.07961 11.6669 8.334 10.9204 8.33399 10C8.33399 9.07958 9.0796 8.3331 10 8.33301Z" fill="currentColor" />
  <path d="M12.667 2.66797C13.3558 2.66797 13.9132 2.66734 14.3633 2.7041C14.8211 2.74154 15.2279 2.82079 15.6045 3.0127C16.1998 3.31614 16.6839 3.8011 16.9873 4.39649C17.1791 4.77306 17.2585 5.17899 17.2959 5.63672C17.3327 6.08689 17.332 6.64406 17.332 7.33301V12.666C17.332 13.3548 17.3326 13.9122 17.2959 14.3623C17.2585 14.8201 17.1791 15.2269 16.9873 15.6035C16.684 16.1987 16.1996 16.6829 15.6045 16.9863C15.2279 17.1782 14.8211 17.2575 14.3633 17.2949C13.9132 17.3317 13.3558 17.3311 12.667 17.3311H7.33399C6.64513 17.3311 6.08786 17.3317 5.6377 17.2949C5.17997 17.2575 4.77403 17.1781 4.39746 16.9863C3.80197 16.6829 3.31712 16.199 3.01367 15.6035C2.82172 15.2268 2.7425 14.8203 2.70508 14.3623C2.66833 13.9121 2.66895 13.3549 2.66895 12.666V7.33301C2.66895 6.64406 2.6683 6.08689 2.70508 5.63672C2.7425 5.17907 2.82191 4.77301 3.01367 4.39649C3.31713 3.80115 3.80208 3.31606 4.39746 3.0127C4.77393 2.82108 5.18011 2.7415 5.6377 2.7041C6.08785 2.66736 6.64515 2.66797 7.33399 2.66797H12.667ZM7.33399 3.99805C6.62326 3.99805 6.12954 3.99898 5.74609 4.03027C5.37079 4.06094 5.15893 4.11787 5.00098 4.19824C4.65588 4.37409 4.37516 4.65496 4.19922 5C4.11874 5.15796 4.06196 5.36963 4.03125 5.74512C3.99992 6.12858 3.99902 6.62213 3.99902 7.33301V12.666C3.99902 13.3767 3.99996 13.8705 4.03125 14.2539C4.06193 14.6295 4.11878 14.841 4.19922 14.999C4.37515 15.3443 4.6557 15.6258 5.00098 15.8018C5.15894 15.8821 5.37074 15.9391 5.74609 15.9697C6.12955 16.001 6.62323 16.001 7.33399 16.001H12.667C13.3776 16.001 13.8715 16.001 14.2549 15.9697C14.6299 15.939 14.8421 15.8821 15 15.8018C15.345 15.6258 15.6269 15.3441 15.8027 14.999C15.883 14.8411 15.9401 14.6289 15.9707 14.2539C16.002 13.8705 16.002 13.3767 16.002 12.666V7.33301C16.002 6.62213 16.002 6.12858 15.9707 5.74512C15.94 5.36972 15.8832 5.15795 15.8027 5C15.6269 4.65483 15.3451 4.37417 15 4.19824C14.8421 4.11782 14.6302 4.06097 14.2549 4.03027C13.8715 3.99897 13.3776 3.99805 12.667 3.99805H7.33399Z" fill="currentColor" />
</svg>
`})))()}function Rc(e){let t=(0,Bc.c)(21),{children:n,model:r,pathDescriptions:i,targetPathByDisplayPath:a}=e,[o,s]=(0,Vc.useState)(null),[c,l]=(0,Vc.useState)(null),u;t[0]!==c||t[1]!==a?(u=c==null?null:a.get(c.path)??c.path,t[0]=c,t[1]=a,t[2]=u):u=t[2];let f=u,p;t[3]!==f||t[4]!==i||t[5]!==c?(p=c==null?null:i?.get(c.path)??f,t[3]=f,t[4]=i,t[5]=c,t[6]=p):p=t[6];let m=p,h,g;t[7]!==o||t[8]!==r?(h=()=>{let e=r.getFileTreeContainer()?.shadowRoot?.querySelector(`[data-file-tree-id]`);if(o==null||e==null)return;let t,n=()=>clearTimeout(t),i=()=>{n(),l(null)},a=e=>{let r=zc(e.composedPath()[0]);if(r==null){i();return}if(r.element!==zc(e.relatedTarget)?.element){if(e instanceof PointerEvent){if(e.pointerType===`touch`||e.buttons!==0)return;n(),t=setTimeout(()=>{r.element.isConnected&&l(r)},Uc)}else r.element.matches(`:focus-visible`)&&(n(),l(r))}},s=e=>{zc(e.composedPath()[0])?.element!==zc(e.relatedTarget)?.element&&n()},c=new AbortController,u={signal:c.signal};e.addEventListener(`pointerover`,a,u),e.addEventListener(`pointerout`,s,u),e.addEventListener(`focusin`,a,u),e.addEventListener(`focusout`,s,u),e.addEventListener(`pointerdown`,i,u),e.addEventListener(`scroll`,i,{...u,capture:!0}),e.addEventListener(`keydown`,e=>{e.key===`Escape`&&i()},u);let d=r.onMutation(`*`,i);return()=>{n(),c.abort(),d()}},g=[o,r],t[7]=o,t[8]=r,t[9]=h,t[10]=g):(h=t[9],g=t[10]),(0,Vc.useEffect)(h,g);let _,v;t[11]!==m||t[12]!==c?(_=()=>{if(c!=null&&m!=null)return c.element.setAttribute(`aria-description`,m),()=>c.element.removeAttribute(`aria-description`)},v=[m,c],t[11]=m,t[12]=c,t[13]=_,t[14]=v):(_=t[13],v=t[14]),(0,Vc.useEffect)(_,v);let y;t[15]!==f||t[16]!==c?(y=c==null?null:(0,Hc.jsx)(d,{align:`start`,closeOnTriggerClick:!0,disableHoverOpen:!0,open:!0,onOpenChange:e=>{e||l(null)},scaleAvailableSizeWithZoom:!0,selectable:!0,side:`bottom`,tooltipContent:(0,Hc.jsx)(`div`,{className:`text-start wrap-anywhere`,children:f}),triggerElement:c.element,children:null}),t[15]=f,t[16]=c,t[17]=y):y=t[17];let b;return t[18]!==n||t[19]!==y?(b=(0,Hc.jsxs)(`div`,{ref:s,className:`contents`,children:[n,y]}),t[18]=n,t[19]=y,t[20]=b):b=t[20],b}function zc(e){if(!(e instanceof Element)||e.closest(`[data-item-section='git'], [data-item-section='decoration'], [data-item-section='action'], input`)!=null)return null;let t=e.closest(`[data-item-path]`),n=t?.getAttribute(`data-item-path`);return t!=null&&n?{element:t,path:n}:null}var Bc,Vc,Hc,Uc;function Wc(){return(Wc=e((()=>{Bc=l(),Vc=s(),h(),Hc=c(),Uc=500})))()}function Gc(e){let t=(0,ol.c)(123),{cwd:n,contextMenuEnabled:i,decorationAlignment:a,decorationIcons:o,flattenEmptyDirectories:s,gitStatus:c,hostId:l,icons:d,initialExpandedPaths:f,initialScrollTop:p,itemHeight:m,onClick:h,onDoubleClick:v,onExpandedPathsChange:y,onSelectionChange:b,onStateChange:x,pathDescriptions:S,paths:ee,revealSelectedPath:te,revealSelectedPathScrollOffset:ae,renderRowDecoration:w,resetKey:T,selectedPath:E,surface:oe,unsafeCSS:D}=e,O=i===void 0||i,le=a===void 0?`inline`:a,ue=s!==void 0&&s,de=p===void 0?0:p,fe=m===void 0?ll:m,k=te!==void 0&&te,A=ae===void 0?`nearest`:ae,pe=oe===void 0?`main`:oe,me=r(ie),he=_(),j=C(he),{platform:M}=re(),N=ne(`add-context-file`),ge;t[0]!==n||t[1]!==l?(ge={cwd:n,hostId:l},t[0]=n,t[1]=l,t[2]=ge):ge=t[2];let _e=Xe(ge),ve;t[3]===ee?ve=t[4]:(ve=ee.map(Kc),t[3]=ee,t[4]=ve);let P=ve,ye;if(t[5]!==n||t[6]!==ee||t[7]!==M){ye=new Map;for(let e of ee)typeof e!=`string`&&ye.set(e.displayPath,se(n??``,e.path,M===`windows`));t[5]=n,t[6]=ee,t[7]=M,t[8]=ye}else ye=t[8];let be=ye,F;t[9]!==o||t[10]!==d?(F=Yc(d,o),t[9]=o,t[10]=d,t[11]=F):F=t[11];let xe=F,Se=pe===`dropdown`?`var(--color-surface-elevated-secondary)`:`var(--color-surface)`,Ce=(0,sl.useRef)(null),we;t[12]===f?we=t[13]:(we=Array.from(f??[]),t[12]=f,t[13]=we);let Te=(0,sl.useRef)(we),I=(0,sl.useRef)(null),Ee=(0,sl.useRef)(de),De=(0,sl.useRef)(E??null),Oe;t[14]===x?Oe=t[15]:(Oe=()=>{x?.({expandedPaths:Te.current,scrollTop:Ee.current,selectedPath:De.current})},t[14]=x,t[15]=Oe);let L=g(Oe),ke;t[16]!==y||t[17]!==L?(ke=e=>{Te.current=e,y?.(e),L()},t[16]=y,t[17]=L,t[18]=ke):ke=t[18];let Ae=g(ke),je;t[19]!==b||t[20]!==L?(je=e=>{De.current=e[0]??null,b?.(e),L()},t[19]=b,t[20]=L,t[21]=je):je=t[21];let Me=g(je),Ne;t[22]===E?Ne=t[23]:(Ne=E==null?void 0:[E],t[22]=E,t[23]=Ne);let Pe=`
      :host {
        --trees-bg-override: ${Se};
        --trees-bg-muted-override: var(--color-background-primary-ghost-hover);
        --trees-border-color-override: var(--color-border);
        --trees-fg-override: var(--color-text);
        --trees-font-size-override: 13px;
        --trees-focus-ring-color-override: var(--color-ring);
        --trees-git-added-color-override: var(--color-codex-git-added);
        --trees-git-deleted-color-override: var(--color-codex-git-deleted);
        --trees-git-ignored-color-override: var(--color-codex-git-ignored);
        --trees-git-lane-width-override: 20px;
        --trees-git-modified-color-override: var(--color-codex-git-modified);
        --trees-git-renamed-color-override: var(--color-codex-git-modified);
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
        background-color: ${Se};
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
        color: inherit;
      }

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
        --base-file-tree-git-status-icon: url("${dl}");
      }

      [data-item-git-status='deleted'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${fl}");
      }

      [data-item-git-status='modified'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${pl}");
      }

      /* Filter out @pierre/truncate's subpixel one-line overflow false positives. */
      @container measure (height <= calc(1lh + 1px)) {
        [data-truncate-marker] {
          opacity: 0;
        }
      }

      ${D??``}
    `,Fe;t[24]!==xe||t[25]!==ue||t[26]!==c||t[27]!==Me||t[28]!==f||t[29]!==fe||t[30]!==w||t[31]!==Ne||t[32]!==Pe||t[33]!==P?(Fe={fileTreeSearchMode:`hide-non-matches`,flattenEmptyDirectories:ue,gitStatus:c,icons:xe,initialExpandedPaths:f,initialSelectedPaths:Ne,itemHeight:fe,onSelectionChange:Me,paths:P,renderRowDecoration:w,search:!1,stickyFolders:!0,unsafeCSS:Pe},t[24]=xe,t[25]=ue,t[26]=c,t[27]=Me,t[28]=f,t[29]=fe,t[30]=w,t[31]=Ne,t[32]=Pe,t[33]=P,t[34]=Fe):Fe=t[34];let{model:R}=xc(Fe),Ie;t[35]===f?Ie=t[36]:(Ie=f??[],t[35]=f,t[36]=Ie);let Le;t[37]!==R||t[38]!==T||t[39]!==Ie||t[40]!==P?(Le={initialExpandedPaths:Ie,model:R,resetKey:T,treePaths:P},t[37]=R,t[38]=T,t[39]=Ie,t[40]=P,t[41]=Le):Le=t[41];let Re=(0,sl.useRef)(Le),ze,Be;t[42]!==f||t[43]!==R||t[44]!==T||t[45]!==P?(ze=()=>{let e=Array.from(f??[]),t=Re.current;if(t.model===R&&t.resetKey===T&&qc(t.treePaths,P)&&qc(t.initialExpandedPaths,e))return;let n=t.model!==R||t.resetKey!==T;Re.current={initialExpandedPaths:e,model:R,resetKey:T,treePaths:Array.from(P)},Te.current=e,R.resetPaths(P,{initialExpandedPaths:f});let r=I.current?.path;(n||r!=null&&R.getItem(r)==null)&&(I.current=null)},Be=[f,R,T,P],t[42]=f,t[43]=R,t[44]=T,t[45]=P,t[46]=ze,t[47]=Be):(ze=t[46],Be=t[47]),(0,sl.useEffect)(ze,Be);let Ve,He;t[48]!==de||t[49]!==R||t[50]!==k||t[51]!==E?(Ve=()=>{let e=null,t=0,n=()=>{e=null,!il(R,de)&&(t>=ul||(t+=1,e=window.requestAnimationFrame(n)))};return de>0&&!(k&&E!=null)?(Ee.current=de,n()):Ee.current=0,()=>{e!=null&&window.cancelAnimationFrame(e)}},He=[de,R,k,E],t[48]=de,t[49]=R,t[50]=k,t[51]=E,t[52]=Ve,t[53]=He):(Ve=t[52],He=t[53]),(0,sl.useEffect)(Ve,He);let Ue;t[54]!==R||t[55]!==k||t[56]!==A||t[57]!==E?(Ue=()=>{if(De.current=E??null,el(R,E),!k||E==null){I.current=null;return}(I.current?.path!==E||I.current.scrollOffset!==A)&&tl(R,E,A)&&(I.current={path:E,scrollOffset:A})},t[54]=R,t[55]=k,t[56]=A,t[57]=E,t[58]=Ue):Ue=t[58];let z;t[59]!==R||t[60]!==T||t[61]!==k||t[62]!==A||t[63]!==E||t[64]!==P?(z=[R,k,A,T,E,P],t[59]=R,t[60]=T,t[61]=k,t[62]=A,t[63]=E,t[64]=P,t[65]=z):z=t[65],(0,sl.useEffect)(Ue,z);let We,Ge;t[66]!==c||t[67]!==R?(We=()=>{R.setGitStatus(c)},Ge=[c,R],t[66]=c,t[67]=R,t[68]=We,t[69]=Ge):(We=t[68],Ge=t[69]),(0,sl.useEffect)(We,Ge);let Ke,qe;t[70]!==xe||t[71]!==R?(Ke=()=>{R.setIcons(xe)},qe=[xe,R],t[70]=xe,t[71]=R,t[72]=Ke,t[73]=qe):(Ke=t[72],qe=t[73]),(0,sl.useEffect)(Ke,qe);let Je,Ye;t[74]!==Ae||t[75]!==R||t[76]!==P?(Je=()=>R.subscribe(()=>{Ee.current=rl(R),Ae($c(R,P))}),Ye=[Ae,R,P],t[74]=Ae,t[75]=R,t[76]=P,t[77]=Je,t[78]=Ye):(Je=t[77],Ye=t[78]),(0,sl.useEffect)(Je,Ye);let Qe,$e;t[79]!==R||t[80]!==L?(Qe=()=>{let e=null,t=0,n=null,r=()=>{e=null;let i=nl(R);if(i!=null){let e=()=>{Ee.current=i.scrollTop,L()};i.addEventListener(`scroll`,e,{passive:!0}),n=()=>{i.removeEventListener(`scroll`,e)};return}t>=ul||(t+=1,e=window.requestAnimationFrame(r))};return r(),()=>{e!=null&&window.cancelAnimationFrame(e),n?.()}},$e=[R,L],t[79]=R,t[80]=L,t[81]=Qe,t[82]=$e):(Qe=t[81],$e=t[82]),(0,sl.useEffect)(Qe,$e);let et;t[83]!==O||t[84]!==n||t[85]!==l?(et=O?(0,cl.jsx)(Ze,{cwd:n,hostId:l}):null,t[83]=O,t[84]=n,t[85]=l,t[86]=et):et=t[86];let tt;t[87]!==N||t[88]!==O||t[89]!==n||t[90]!==_e||t[91]!==l||t[92]!==M||t[93]!==me||t[94]!==be?(tt=()=>{if(!O)return[];let e=Oc({cwd:n,isWindowsHost:M===`windows`,itemPath:Ce.current,targetPathByDisplayPath:be});return wc({...Zc({scope:me,cwd:n,fallbackOpenTargets:_e,hostId:l,targetPath:e}),onAddToChat:l==null?void 0:e=>{N.mutateAsync({hostId:l,path:e})},onCopyPath:ce,onOpenInTarget:(e,t,n)=>{_e.open(e,{appPath:t,persistPreferred:!1,path:n})},onSaveAs:void 0,targetPath:e})},t[87]=N,t[88]=O,t[89]=n,t[90]=_e,t[91]=l,t[92]=M,t[93]=me,t[94]=be,t[95]=tt):tt=t[95];let nt;t[96]!==O||t[97]!==n||t[98]!==l||t[99]!==M||t[100]!==me||t[101]!==be?(nt=()=>{if(O)return Qc({scope:me,cwd:n,hostId:l,targetPath:Oc({cwd:n,isWindowsHost:M===`windows`,itemPath:Ce.current,targetPathByDisplayPath:be})})},t[96]=O,t[97]=n,t[98]=l,t[99]=M,t[100]=me,t[101]=be,t[102]=nt):nt=t[102];let rt;t[103]===Symbol.for(`react.memo_cache_sentinel`)?(rt=e=>{Ce.current=Ac(e.nativeEvent)},t[103]=rt):rt=t[103];let it;t[104]===j?it=t[105]:(it={backgroundColor:`var(--color-surface)`,color:`var(--color-text)`,colorScheme:j,width:`100%`},t[104]=j,t[105]=it);let at;t[106]!==R||t[107]!==h||t[108]!==v||t[109]!==it?(at=(0,cl.jsx)(gc,{"data-tab-preview-pin-exempt":!0,onClick:h,onContextMenu:rt,onDoubleClick:v,model:R,style:it}),t[106]=R,t[107]=h,t[108]=v,t[109]=it,t[110]=at):at=t[110];let ot;t[111]!==tt||t[112]!==nt||t[113]!==at?(ot=(0,cl.jsx)(u,{awaitBeforeOpen:!1,getItems:tt,onBeforeOpen:nt,children:at}),t[111]=tt,t[112]=nt,t[113]=at,t[114]=ot):ot=t[114];let st;t[115]!==R||t[116]!==S||t[117]!==ot||t[118]!==be?(st=(0,cl.jsx)(Rc,{model:R,pathDescriptions:S,targetPathByDisplayPath:be,children:ot}),t[115]=R,t[116]=S,t[117]=ot,t[118]=be,t[119]=st):st=t[119];let B;return t[120]!==et||t[121]!==st?(B=(0,cl.jsxs)(cl.Fragment,{children:[et,st]}),t[120]=et,t[121]=st,t[122]=B):B=t[122],B}function Kc(e){return typeof e==`string`?e:e.displayPath}function qc(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}function Jc(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function Yc(e,t){let n=typeof e==`string`?{set:e}:e,r=[{name:o.name,...o.canvas,body:f(o).body},...t??[]].map(e=>`<symbol id="${e.name}" viewBox="${e.viewBox??`0 0 ${e.width??0} ${e.height??0}`}">${e.body}</symbol>`).join(``),i=Xc(n?.spriteSheet,r);return{...n,set:n?.set??`complete`,spriteSheet:i,remap:{...n?.remap,"file-tree-icon-chevron":{name:o.name,width:o.canvas.width,height:o.canvas.height}}}}function Xc(e,t){return e==null?`<svg data-icon-sprite aria-hidden="true" width="0" height="0" xmlns="http://www.w3.org/2000/svg">${t}</svg>`:e.replace(`</svg>`,`${t}</svg>`)}function Zc({scope:e,cwd:t,fallbackOpenTargets:n,hostId:r,targetPath:i}){if(i==null)return{isLoadingOpenTargets:!1,primaryTarget:null,visibleTargets:[]};let a=e.query.snapshot(ue,{cwd:t,hostId:r,path:i}),o=a.getData(),s=o?.targets??n.targets,c=o?.availableTargets??n.availableTargets,l=o?.preferredTarget??n.preferredTarget,u=o?.mode??n.mode;return{isLoadingOpenTargets:o==null&&!n.hasLoadedTargets&&e.queryClient.getQueryState(a.queryKey)?.status!==`error`,primaryTarget:te({preferredTarget:l,targets:s,availableTargets:c,mode:u}),visibleTargets:O({targets:s,availableTargets:c,includeHiddenTargets:!0,mode:u})}}function Qc({scope:e,cwd:t,hostId:n,targetPath:r}){}function $c(e,t){let n=[];for(let r of t){if(!r.endsWith(`/`))continue;let t=r.slice(0,-1),i=e.getItem(t);i!=null&&al(i)&&i.isExpanded()&&n.push(t)}return n}function el(e,t){let n=e.getSelectedPaths();if(t==null){for(let t of n)e.getItem(t)?.deselect();return}if(n.length!==1||n[0]!==t){for(let t of n)e.getItem(t)?.deselect();e.getItem(t)?.select()}}function tl(e,t,n){return e.getItem(t)!=null&&(e.scrollToPath(t,{offset:n}),!0)}function nl(e){return e.getFileTreeContainer()?.shadowRoot?.querySelector(`[data-file-tree-virtualized-scroll='true']`)??null}function rl(e){return nl(e)?.scrollTop??0}function il(e,t){let n=nl(e);return n!=null&&(n.scrollTop=Math.max(0,t),!0)}function al(e){return e.isDirectory()}var ol,sl,cl,ll,ul,dl,fl,pl;function ml(){return(ml=e((()=>{ol=l(),n(),bc(),Cc(),i(),sl=s(),m(),p(),kc(),de(),ae(),Nc(),Fc(),Lc(),v(),Ye(),ee(),oe(),x(),y(),w(),D(),E(),le(),b(),Wc(),cl=c(),ll=28,ul=60,dl=Jc(Mc),fl=Jc(Pc),pl=Jc(Ic)})))()}export{jc as i,ml as n,Ac as r,Gc as t};
//# sourceMappingURL=base-file-tree-7782146ca392.js.map