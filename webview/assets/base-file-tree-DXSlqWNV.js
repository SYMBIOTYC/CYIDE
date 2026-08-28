import{n as e,o as t}from"./rolldown-runtime-DAXXjFlN.js";import{G4 as n,S4 as r,X4 as i,Y4 as a,aH as o,sH as s,w4 as c}from"./app-initial-DOdr0yAB.js";import{$S as l,BN as u,Cct as d,Cdt as f,Hdt as p,JS as m,QS as h,Rdt as g,Tdt as _,VN as v,XN as y,XS as b,YS as x,ZN as S,_$ as C,cft as ee,d5 as w,fk as T,idt as E,mk as te,o0 as ne,pk as re,s0 as ie,u5 as D,v$ as ae,vct as O}from"./app-initial-DraLrsJK.js";import{a as k,c as oe,i as A,l as j,n as se,o as ce,r as le,s as M,t as N}from"./store-BBJoNDsS.js";import{n as ue,r as de,t as fe}from"./use-target-apps-DWVnrnGz.js";var P,pe,F,me,I,he,ge,_e,ve,L=e((()=>{P=`file-tree-container`,pe=`data-file-tree-style`,F=`data-file-tree-unsafe-css`,me=`data-file-tree-scrollbar-measure`,I=`data-file-tree-scrollbar-gutter-measured`,he=`--trees-scrollbar-gutter-measured`,ge=`header`,_e=`context-menu`,ve=`context-menu-trigger`}));function ye(e,t){if(typeof e==`number`)return{itemHeight:t??be.default.itemHeight,factor:e};let n=be[e??`default`];return{itemHeight:t??n.itemHeight,factor:n.factor}}var be,xe=e((()=>{be={compact:{itemHeight:24,factor:.8},default:{itemHeight:30,factor:1},relaxed:{itemHeight:36,factor:1.2}}})),Se,Ce=e((()=>{xe(),Se=be.default.itemHeight})),we,R=e((()=>{we=`@layer base, theme, unsafe;

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
`}));function Te(e){return`${z}
@layer base {
  ${e}
}`}function Ee(e){return`${z}
@layer unsafe {
  ${e}
}`}var z,De=e((()=>{z=`@layer base, unsafe;`}));function Oe(e){let t=Ae.get(e);if(t!=null)return t;let n=document.createElement(`div`);n.setAttribute(me,`true`);let r=document.createElement(`div`);r.style.position=`relative`,r.style.height=`200%`,n.appendChild(r),e.appendChild(n);let i=Math.max(n.offsetWidth-n.clientWidth,0);return n.remove(),Ae.set(e,i),i}function ke(e,t){if(!e.isConnected)return;let n=Oe(t);if(n==null)return;let r=t.querySelector(`style[${I}]`),i=r instanceof HTMLStyleElement?r:document.createElement(`style`);r instanceof HTMLStyleElement||(i.setAttribute(I,``),t.appendChild(i)),i.textContent=`:host { ${he}: ${n}px; }`}var Ae,B=e((()=>{L(),Ae=new WeakMap}));function je(e){if(typeof CSSStyleSheet<`u`&&typeof CSSStyleSheet.prototype.replaceSync==`function`&&`adoptedStyleSheets`in e){Pe??(Pe=new CSSStyleSheet,Pe.replaceSync(Te(we)));let t=!1;try{e.adoptedStyleSheets=[Pe],t=!0}catch{}if(t){e.querySelector(`style[${pe}]`)?.remove();return}}if(e.querySelector(`style[data-file-tree-style]`)==null){let t=document.createElement(`style`);t.setAttribute(pe,``),t.textContent=Te(we),e.prepend(t)}}function Me(e,t){Ne(e,t),je(t),ke(e,t)}function Ne(e,t){let n=e.querySelector(`template[shadowrootmode="open"], template[data-file-tree-shadowrootmode="open"]`);n instanceof HTMLTemplateElement&&(t.childNodes.length>0||(t.appendChild(n.content.cloneNode(!0)),n.hasAttribute(`shadowrootmode`)&&n.remove()))}var Pe,Fe=e((()=>{if(L(),R(),De(),B(),typeof HTMLElement<`u`&&customElements.get(`file-tree-container`)==null){class e extends HTMLElement{constructor(){super()}connectedCallback(){let e=this.shadowRoot??this.attachShadow({mode:`open`});Me(this,e)}}if(customElements.define(P,e),typeof document<`u`)for(let e of Array.from(document.querySelectorAll(P)))e instanceof HTMLElement&&Me(e,e.shadowRoot??e.attachShadow({mode:`open`}))}})),Ie,Le=e((()=>{L(),Ie=e=>e.startsWith(`f::`)?e.slice(3):e}));function Re(e){let t=e.lastIndexOf(`/`);return t<0?{parentPath:``,baseName:e}:{parentPath:e.slice(0,t),baseName:e.slice(t+1)}}function ze(e,t){return e===``?t:`${e}/${t}`}function Be({files:e,path:t,isFolder:n,nextBasename:r}){let i=Ie(t),a=r.trim();if(a.length===0)return{error:`Name cannot be empty.`};if(a.includes(`/`))return{error:`Name cannot include "/".`};let{parentPath:o,baseName:s}=Re(i);if(a===s)return{nextFiles:e,sourcePath:i,destinationPath:i,isFolder:n};let c=ze(o,a),l=Array(e.length),u=new Set;if(!n){let t=`${c}/`,r=!1;for(let n=0;n<e.length;n++){let a=e[n];if(a!==i&&a.startsWith(t))return{error:`"${c}" already exists.`};let o=a===i?c:a;if(u.has(o))return{error:`"${c}" already exists.`};u.add(o),l[n]=o,a===i&&(r=!0)}return r?{nextFiles:l,sourcePath:i,destinationPath:c,isFolder:n}:{error:`Could not find the selected file to rename.`}}let d=`${i}/`,f=`${c}/`,p=0;for(let t=0;t<e.length;t++){let n=e[t],r=n===i||n.startsWith(d);if(!r&&(n===c||n.startsWith(f)))return{error:`"${c}" already exists.`};let a=r?`${c}${n.slice(i.length)}`:n;if(u.has(a))return{error:`"${c}" already exists.`};u.add(a),l[t]=a,r&&p++}return p===0?{error:`Could not find the selected folder to rename.`}:{nextFiles:l,sourcePath:i,destinationPath:c,isFolder:n}}var Ve=e((()=>{Le()}));function He(e){return e.endsWith(`/`)}function Ue(e){let t=e.endsWith(`/`)?e.slice(0,-1):e,n=t.lastIndexOf(`/`),r=n<0?t:t.slice(n+1);return e.endsWith(`/`)?`${r}/`:r}function We(e){let t=[],n=new Set;for(let r of e)n.has(r)||(n.add(r),t.push(r));let r=new Set;for(let e of t.toSorted((e,t)=>e.length===t.length?e.localeCompare(t):e.length-t.length)){let t=(e.endsWith(`/`)?e.slice(0,-1):e).split(`/`),n=!1;for(let e=0;e<t.length-1;e+=1){let i=`${t.slice(0,e+1).join(`/`)}/`;if(r.has(i)){n=!0;break}}n||r.add(e)}return t.filter(e=>r.has(e))}function Ge(e,t){return t.includes(e)?We(t):[e]}function V(e,t){return e===t?!0:e==null||t==null?!1:e.kind===t.kind&&e.directoryPath===t.directoryPath&&e.flattenedSegmentPath===t.flattenedSegmentPath&&e.hoveredPath===t.hoveredPath}function H(e,t){return{draggedPaths:e,target:t}}function Ke(e,t){if(t.kind!==`directory`||t.directoryPath==null)return!1;for(let n of e)if(He(n)&&(t.directoryPath===n||t.directoryPath.startsWith(n)))return!0;return!1}function qe(e,t){return t.kind===`root`||t.directoryPath==null?Ue(e):t.directoryPath}function Je(e,t){let n=e.map(e=>{let n=qe(e,t);return n===e?null:{from:e,to:n,type:`move`}}).filter(e=>e!=null);return n.length===0?null:{operations:n,result:{draggedPaths:e,operation:n.length===1?`move`:`batch`,target:t}}}var Ye=e((()=>{}));function Xe(e,t){if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(e[n]!==t[n])return!1;return!0}function Ze(e,t,n){let{paths:r,preparedInput:i}=e;if(i==null){if(r==null)throw Error(`FileTree requires paths or preparedInput`);return{paths:r,preparedInput:void 0}}let a=i.paths;if(r==null)return{paths:a,preparedInput:i};if(!Xe(N.preparePaths(r,n==null?{}:{sort:n}),a))throw Error(`FileTree ${t} received paths and preparedInput for different path lists`);return{paths:a,preparedInput:i}}var Qe=e((()=>{se()}));function $e(e){return e.operation===`add`||e.operation===`remove`||e.operation===`move`||e.operation===`batch`}function et(e,t,n){if(e===t)return n;let r=t.endsWith(`/`)?t:`${t}/`;return e.startsWith(r)?`${n.endsWith(`/`)?n:`${n}/`}${e.slice(r.length)}`:e}function tt(e,t){if(e===t)return!0;let n=t.endsWith(`/`)?t:`${t}/`;return e.startsWith(n)}function nt(e,t,n=!1){if(e==null)return null;switch(t.operation){case`add`:case`expand`:case`collapse`:case`mark-directory-unloaded`:case`begin-child-load`:case`apply-child-patch`:case`complete-child-load`:case`fail-child-load`:case`cleanup`:return e;case`remove`:return tt(e,t.path)?n?e:null:e;case`move`:return et(e,t.from,t.to);case`batch`:{let r=e;for(let e of t.events)if(r=nt(r,e,n),r==null)return null;return r}}}function rt(e){return{canonicalChanged:e.canonicalChanged,projectionChanged:e.projectionChanged,visibleCountDelta:e.visibleCountDelta}}function it(e){switch(e.operation){case`add`:return{...rt(e),operation:`add`,path:e.path};case`remove`:return{...rt(e),operation:`remove`,path:e.path,recursive:e.recursive};case`move`:return{...rt(e),from:e.from,operation:`move`,to:e.to}}}function at(e){return{...rt(e),events:e.events.filter(e=>e.operation===`add`||e.operation===`remove`||e.operation===`move`).map(e=>it(e)),operation:`batch`}}function U(e){switch(e.operation){case`add`:case`remove`:case`move`:return it(e);case`batch`:return at(e);default:return null}}var W=e((()=>{}));function ot(e,t){if(e.size!==t.length)return!1;for(let n of t)if(!e.has(n))return!1;return!0}function G(e){let t=e.endsWith(`/`)?e.slice(0,-1):e;if(t.length===0)return[];let n=t.split(`/`);return n.slice(0,-1).map((e,t)=>`${n.slice(0,t+1).join(`/`)}/`)}function st(e){return G(e).at(-1)??null}function ct(e,t){return t==null?e:e.startsWith(t)?e.slice(t.length):e}function lt(e){return e.endsWith(`/`)}var ut,dt=e((()=>{ut=e=>e.toLowerCase()}));function ft(e){let t=e.endsWith(`/`)?e.slice(0,-1):e,n=t.lastIndexOf(`/`);return n<0?t:t.slice(n+1)}function pt(e){return e.endsWith(`/`)?e.slice(0,-1):e}function K(e,t){return t&&!e.endsWith(`/`)?`${e}/`:e}var mt=e((()=>{})),q,ht=e((()=>{q=e=>{let t=e.trim();return t.length===0?``:(t.includes(`\\`)?t.replaceAll(`\\`,`/`):t).toLowerCase()}}));function gt(e){return e===`top`||e===`center`?e:`nearest`}function _t(e,t,n){if(e===0)return-1;if(n!=null){let e=t(n);if(e!=null)return e;let r=G(n);for(let e=r.length-1;e>=0;--e){let n=r[e];if(n==null)continue;let i=t(n);if(i!=null)return i}}return 0}function vt(e,t,n){if(e.paths.length===0)return{focusedIndex:-1,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};if(t==null)return{focusedIndex:0,getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex};let r=n??(t=>e.visibleIndexByPath.get(t)??null);return{focusedIndex:_t(e.paths.length,r,t),getParentIndex:e.getParentIndex,paths:e.paths,posInSetByIndex:e.posInSetByIndex,setSizeByIndex:e.setSizeByIndex}}var yt,bt,xt,St,Ct=e((()=>{se(),Ve(),Ye(),Qe(),W(),dt(),mt(),ht(),yt=Symbol(`FILE_TREE_RENAME_VIEW`),bt=512,xt=512,St=class{#e;#t=new Set;#n=new Map;#r=null;#i=null;#a=new Map;#o=new Map;#s=-1;#c=null;#l=!1;#u=e=>-1;#d=new Map;#f=null;#p=null;#m=null;#h=null;#g=null;#_;#v;#y;#b=[];#x=new Int32Array;#S=new Int32Array;#C=void 0;#w=!1;#T=null;#E=``;#D=!1;#O=new Set;#k=[];#A;#j=null;#M=null;#N=null;#P=null;#F=null;#I=null;#L=null;#R=0;#z=null;#B=new Set;#V=0;#H;#U=0;#W=!1;#G=0;#K;constructor(e){let{dragAndDrop:t,fileTreeSearchMode:n,initialSearchQuery:r,initialSelectedPaths:i,renaming:a,onSearchChange:o,paths:s,preparedInput:c,...l}=e,u=Ze({paths:s,preparedInput:c},`constructor`,l.sort);this.#e=l,t!=null&&t!==!1&&(this.#r=t===!0?{}:t),this.#w=a!=null&&a!==!1,a!=null&&a!==!1&&a!==!0&&(this.#C=a.canRename,this.#v=a.onError,this.#_=a.onRename),this.#y=o,this.#A=n??`hide-non-matches`,this.#H=this.#le(u.paths,u.preparedInput);let d=i?.map(e=>this.#Ne(e)).filter(e=>e!=null)??[],f=d.at(-1)??null;d.length>0&&(this.#B=new Set(d),this.#z=f,this.#V=1),this.#je(f,!1),r!=null&&this.#Te(r,!1),this.#K=this.#Re()}destroy(){this.#K?.(),this.#K=null,this.#n.clear(),this.#t.clear(),this.#d.clear(),this.#i=null,this.#he()}focusFirstItem(){this.#be().length>0&&this.#Fe(0)}focusLastItem(){this.#G<=0||(this.#Ie(),this.#Fe(this.#G-1))}focusNextItem(){this.#Ae(1)}focusParentItem(){if(this.#c==null)return;let e=st(this.#c);if(e==null)return;let t=this.#Z(e);t>=0&&this.#Fe(t)}focusPath(e){let t=this.#H.getPathInfo(e)?.path??null;if(t==null)return;this.#Ie();let n=this.#Z(t);n>=0&&this.#Fe(n)}scrollToPath(e,t){let n=this.#H.getPathInfo(e)?.path??null;if(n==null)return;this.#Ie();let r=this.#xe(n);r<0||this.#Me(r)!=null&&(t?.focus!==!1&&this.#Fe(r,!1),this.#L={id:this.#R+=1,offset:gt(t?.offset),visibleIndex:r},this.#De())}focusMountedPathFromInput(e){let t=this.#H.getPathInfo(e)?.path??null;if(t==null)return;let n=this.#Z(t);n>=0&&this.#Fe(n)}focusNearestPath(e){let t=this.resolveNearestVisiblePath(e);if(t==null)return null;let n=this.#Z(t);return n>=0?(this.#Fe(n),this.#be()[n]??t):null}focusPreviousItem(){this.#Ae(-1)}getFocusedIndex(){return this.#s}getFocusedItem(){return this.#c==null?null:this.#Q(this.#c)}getFocusedPath(){return this.#c}getScrollRequest(){return this.#L}clearScrollRequest(e){this.#L?.id===e&&(this.#L=null)}resolveNearestVisiblePath(e){let t=this.#be();if(this.#G===0)return null;if(e==null)return this.#c??t[0]??null;let n=this.#H.getPathInfo(e)?.path??e,r=this.#Z(n);return r>=0?t[r]??n:this.#X(n)??this.#c??t[0]??null}getSelectedPaths(){return[...this.#B]}getSelectionVersion(){return this.#V}getVisibleCount(){return this.#G}getVisibleRows(e,t){if(t<e||this.#G===0)return[];let n=Math.max(0,e),r=Math.min(this.#G-1,t);if(r<n)return[];let i=r-n+1;if(this.#F==null&&!this.#l&&r>=this.#b.length&&i<=xt){let e=[];for(let t=n;t<=r;t+=1){let n=this.#H.getVisibleRowContext(t);if(n==null)break;e.push(this.#ee(n))}return e}if(!this.#l&&r>=this.#b.length&&this.#Ie(),this.#F!=null){let e=Array.from({length:r-n+1},(e,t)=>this.#Se(n+t)),t=new Map,i=e[0]??-1,a=i;for(let n=1;n<=e.length;n+=1){let r=e[n];if(r!=null&&r===a+1){a=r;continue}if(i>=0&&this.#H.getVisibleSlice(i,a).forEach((e,n)=>{t.set(i+n,e)}),r==null){i=-1,a=-1;continue}i=r,a=r}return Array.from({length:r-n+1},(e,r)=>{let i=n+r,a=this.#Se(i),o=t.get(a),s=this.#b[a];if(o==null||s==null)throw Error(`Missing projection row for filtered visible index ${String(i)}`);return this.#$(o,i,a,{ancestorPaths:this.#re(a),path:s})})}return this.#H.getVisibleSlice(n,r).map((e,t)=>{let r=n+t,i=this.#b[r];if(i==null)throw Error(`Missing projection path for visible index ${String(r)}`);return this.#$(e,r,r,{ancestorPaths:this.#re(r),path:i})})}getStickyRowCandidates(e,t){if(this.#F!=null)return null;if(this.#G===0||e<=0||t<=0)return[];let n=[];for(let r=0;r<this.#G;r+=1){let i=e+r*t,a=Math.min(this.#G-1,Math.floor(i/t)),o=this.#te(a,r)??(a>0?this.#te(a-1,r):void 0);if(o==null)break;n.push({row:this.#ee(o),subtreeEndIndex:o.subtreeEndIndex})}return n}getItem(e){let t=this.#H.getPathInfo(e);return t==null?null:this.#Q(t.path,t)}resolveMountedDirectoryPathFromInput(e){let t=this.#H.getPathInfo(e);return t?.kind===`directory`?t.path:null}toggleMountedDirectoryFromInput(e){let t=this.resolveMountedDirectoryPathFromInput(e);t!=null&&this.#ze(t)}selectAllVisiblePaths(){this.#Ie();let e=[...this.#be()];this.#ae(e,this.#c??this.#z)}selectOnlyPath(e){let t=this.#Ne(e);t!=null&&this.#ae([t],t)}selectOnlyMountedPathFromInput(e){this.#ae([e],e)}selectPath(e){let t=this.#Ne(e);t==null||this.#B.has(t)||this.#ae([...this.#B,t])}deselectPath(e){let t=this.#Ne(e);t==null||!this.#B.has(t)||this.#ae([...this.#B].filter(e=>e!==t))}toggleFocusedSelection(){this.#c!=null&&this.togglePathSelectionFromInput(this.#c)}togglePathSelection(e){let t=this.#Ne(e);if(t!=null){if(this.#B.has(t)){this.deselectPath(t);return}this.selectPath(t)}}togglePathSelectionFromInput(e){let t=this.#Ne(e);if(t!=null){if(this.#B.has(t)){this.#ae([...this.#B].filter(e=>e!==t),t);return}this.#ae([...this.#B,t],t)}}selectPathRange(e,t){let n=this.#Ne(e);if(n==null)return;this.#Ie();let r=this.#z,i=r==null?-1:this.#Ce(r),a=this.#Ce(n);if(i===-1||a===-1){let e=t?[...this.#B,n]:[n];this.#ae(e,n);return}let[o,s]=i<=a?[i,a]:[a,i],c=this.#be().slice(o,s+1),l=t?[...this.#B,...c]:c;this.#ae(l,r)}extendSelectionFromFocused(e){if(this.#c==null)return;let t=this.#s;if(t===-1)return;let n=Math.min(this.#G-1,Math.max(0,t+e));if(n===t)return;!this.#l&&n>=this.#b.length&&this.#Ie();let r=this.#be(),i=r[t]??null,a=r[n]??null;if(i==null||a==null)return;let o=new Set(this.#B);o.has(i)&&o.has(a)?o.delete(i):o.add(a),this.#ae([...o],this.#z??i,!1),this.#Fe(n)}getDragAndDropConfig(){return this.#r}isDragAndDropEnabled(){return this.#r!=null}getDragSession(){return this.#i==null?null:{draggedPaths:[...this.#i.draggedPaths],primaryPath:this.#i.primaryPath,target:this.#i.target==null?null:{...this.#i.target}}}startDrag(e){if(this.#r==null)return!1;let t=this.#Ne(e);if(t==null||this.#M!=null&&this.#M.length>0)return!1;let n=this.getSelectedPaths(),r=Ge(t,n);return this.#r.canDrag?.(r)===!1?!1:(n.includes(t)||this.#ae([t],t,!1),this.#Pe(t),this.#i={draggedPaths:r,primaryPath:t,target:null},this.#De(),!0)}setDragTarget(e){let t=this.#i;if(t==null)return;let n=e;if(n!=null){let e=H(t.draggedPaths,n);(Ke(t.draggedPaths,n)||this.#r?.canDrop?.(e)===!1)&&(n=null)}V(t.target,n)||(this.#i={...t,target:n},this.#De())}cancelDrag(){this.#i!=null&&(this.#i=null,this.#De())}completeDrag(){let e=this.#i;if(e==null)return!1;this.#i=null;let t=e.target==null?null:{...e.target};if(t==null)return this.#De(),!1;let n=H(e.draggedPaths,t);if(Ke(e.draggedPaths,t)||this.#r?.canDrop?.(n)===!1)return this.#De(),!1;let r=Je(e.draggedPaths,t);if(r==null)return this.#De(),!1;try{if(r.operations.length===1){let e=r.operations[0];if(e==null||e.type!==`move`)throw Error(`Expected a single move operation for one-item drops`);this.#H.move(e.from,e.to,{collision:e.collision})}else this.#ce(r.operations),this.#H.batch(r.operations)}catch(e){return this.#De(),this.#r?.onDropError?.(e instanceof Error?e.message:String(e),n),!1}return this.#r?.onDropComplete?.(r.result),!0}subscribe(e){return this.#t.add(e),e(),()=>{this.#t.delete(e)}}add(e){this.#H.add(e)}remove(e,t={}){this.#H.remove(e,t)}move(e,t,n={}){this.#H.move(e,t,n)}batch(e){this.#H.batch(e)}onMutation(e,t){let n=e,r=t,i=this.#n.get(n);return i??(i=new Set,this.#n.set(n,i)),i.add(r),()=>{let e=this.#n.get(n);e?.delete(r),e?.size===0&&this.#n.delete(n)}}setSearch(e){this.#Te(e,!0)}openSearch(e=``){this.#Te(e,!0)}closeSearch(){this.#Te(null,!0)}isSearchOpen(){return this.#M!==null}getSearchValue(){return this.#M??``}getSearchMatchingPaths(){return this.#k}focusNextSearchMatch(){this.#we(1)}focusPreviousSearchMatch(){this.#we(-1)}startRenaming(e=this.#c??``,t={}){if(!this.#w)return!1;let n=this.#H.getPathInfo(e);if(n==null)return!1;let r=n.path,i=lt(r),a=pt(r);if(this.#C?.({isFolder:i,path:a})===!1)return!1;for(let e of G(r))this.#H.isExpanded(e)||this.#H.expand(e);return this.#ae([r],r,!1),this.#M!=null&&(this.#Te(null,!1),this.#y?.(this.#M)),this.#Pe(r),this.#T=r,this.#E=ft(r),this.#D=t.removeIfCanceled??!1,this.#De(),!0}[yt](){return{cancel:()=>{this.#q()},commit:()=>{this.#J()},getPath:()=>this.#T,getValue:()=>this.#E,isActive:()=>this.#T!=null,setValue:e=>{this.#Y(e)}}}#q(){if(this.#T==null)return;let e=this.#T,t=this.#D;if(this.#T=null,this.#E=``,this.#D=!1,t){this.remove(e,lt(e)?{recursive:!0}:void 0);return}this.#Pe(e),this.#De()}#J(){let e=this.#T;if(e==null)return;if(this.#D&&this.#E.trim().length===0){this.#T=null,this.#E=``,this.#D=!1,this.remove(e,lt(e)?{recursive:!0}:void 0);return}let t=lt(e),n=Be({files:this.#H.list(),isFolder:t,nextBasename:this.#E,path:pt(e)});if(this.#T=null,this.#E=``,this.#D=!1,`error`in n){this.#Pe(e),this.#v?.(n.error),this.#De();return}if(n.sourcePath===n.destinationPath){this.#Pe(e),this.#De();return}this.#_?.({destinationPath:n.destinationPath,isFolder:n.isFolder,sourcePath:n.sourcePath}),this.move(K(n.sourcePath,t),K(n.destinationPath,t))}#Y(e){this.#T==null||this.#E===e||(this.#E=e,this.#De())}resetPaths(e,t={}){let n=this.#H.list().length,r=this.#G,i=Ze({paths:e,preparedInput:t.preparedInput},`resetPaths`,this.#e.sort),a=this.#le(i.paths,i.preparedInput,t.initialExpandedPaths),o=this.#c,s=this.#T,c=this.getSelectedPaths(),l=this.#z;this.#K?.(),this.#H=a,this.#d.clear(),this.#he();let u=c.map(e=>a.getPathInfo(e)?.path??null).filter(e=>e!=null),d=!ot(this.#B,u);this.#B=new Set(u),d&&(this.#V+=1),this.#z=l==null?null:a.getPathInfo(l)?.path??null,this.#T=s==null?null:a.getPathInfo(s)?.path??null,this.#T??(this.#E=``,this.#D=!1),this.#je(o,o!=null||u.length>0||this.#z!=null),this.#K=this.#Re(),this.#De(),this.#Oe({canonicalChanged:!0,operation:`reset`,pathCountAfter:i.paths.length,pathCountBefore:n,projectionChanged:!0,usedPreparedInput:t.preparedInput!=null,visibleCountDelta:this.#G-r})}#X(e){this.#Ie();let t=st(e),n=ct(e,t),r=null,i=null;for(let e of this.#be()){if(st(e)!==t)continue;let a=ct(e,t);if(a<n){r=e;continue}if(a>n){i=e;break}}return r??i}#Z(e){let t=this.#Ce(e);if(t!==-1)return t;let n=G(e);for(let e=n.length-1;e>=0;--e){let t=n[e];if(t==null)continue;let r=this.#Ce(t);if(r!==-1)return r}return this.#be().length>0?0:-1}#Q(e,t){let n=this.#d.get(e);if(n!=null)return n;let r=t??this.#H.getPathInfo(e);if(r==null)return null;let i=r.kind===`directory`?this.#oe(r.path):this.#se(r.path);return this.#d.set(r.path,i),i}#$(e,t,n,r){return{ancestorPaths:r.ancestorPaths,depth:e.depth,flattenedSegments:e.flattenedSegments?.map(e=>({isTerminal:e.isTerminal,name:e.name,path:e.path})),hasChildren:e.hasChildren,index:t,isExpanded:e.isExpanded,isFlattened:e.isFlattened,isFocused:r.path===this.#c,isSelected:this.#B.has(r.path),kind:e.kind,level:e.depth,name:e.name,path:r.path,posInSet:r.posInSet??this.#x[n]??0,setSize:r.setSize??this.#S[n]??0}}#ee(e){return this.#$(e.row,e.index,e.index,{ancestorPaths:e.ancestorPaths,path:e.row.path,posInSet:e.posInSet,setSize:e.setSize})}#te(e,t){let n=this.#H.getVisibleRowContext(e);return n==null?void 0:n.ancestorRows[t]??(t===n.ancestorRows.length&&n.row.kind===`directory`&&n.row.isExpanded?n:void 0)}#ne(e){let t=this.#a.get(e);if(t!=null)return t;let n=this.#u(e),r=n<0?[]:[...this.#ne(n),n];return this.#a.set(e,r),r}#re(e){let t=this.#o.get(e);if(t!=null)return t;let n=this.#ne(e).map(e=>this.#b[e]??``).filter(e=>e!==``);return this.#o.set(e,n),n}#ie(e){this.#H.collapse(e)}#ae(e,t=this.#z,n=!0){let r=[...new Set(e)],i=!ot(this.#B,r),a=this.#z!==t;!i&&!a||(this.#B=new Set(r),this.#z=t,i&&(this.#V+=1),n&&this.#De())}#oe(e){return{collapse:()=>{this.#ie(e)},deselect:()=>{this.deselectPath(e)},expand:()=>{this.#ke(e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!0,isExpanded:()=>this.#H.isExpanded(e),isFocused:()=>this.#c===e,isSelected:()=>this.#B.has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)},toggle:()=>{this.#ze(e)}}}#se(e){return{deselect:()=>{this.deselectPath(e)},focus:()=>{this.focusPath(e)},getPath:()=>e,isDirectory:()=>!1,isFocused:()=>this.#c===e,isSelected:()=>this.#B.has(e),select:()=>{this.selectPath(e)},toggleSelect:()=>{this.togglePathSelection(e)}}}#ce(e){let t=this.#H.list();this.#le(t).batch(e)}#le(e,t,n){return new N({...this.#e,paths:e,preparedInput:t??void 0,...n===void 0?{}:{initialExpandedPaths:n}})}#ue(){return this.#h??=this.#H.list(),this.#h}#de(){if(this.#m!=null)return this.#m;let e=new Set;for(let t of this.#ue()){e.add(t);for(let n of G(t))e.add(n)}return this.#m=[...e].sort(),this.#m}#fe(){return this.#g??=this.#ue().map(ut),this.#g}#pe(){return this.#f??=this.#de().filter(e=>e.endsWith(`/`)),this.#f}#me(){return this.#p??=this.#pe().map(ut),this.#p}#he(){this.#f=null,this.#p=null,this.#m=null,this.#h=null,this.#g=null}#ge(){return this.#pe().filter(e=>this.#H.isExpanded(e))}#_e(e){let t=new Set(this.#j??[]);if(e)for(let e of this.#B)for(let n of G(e))t.add(n);this.#ve(t)}#ve(e){this.#W=!0;try{for(let t of this.#pe()){let n=e.has(t),r=this.#H.isExpanded(t);n&&!r?this.#H.expand(t):!n&&r&&this.#H.collapse(t)}}finally{this.#W=!1}}#ye(){if(this.#M==null||this.#M.length===0){this.#k=[],this.#F=null,this.#I=null,this.#P=null,this.#G=this.#U;return}let e=this.#b;if(this.#k=e.filter(e=>this.#O.has(e)),this.#A!==`hide-non-matches`||this.#O.size===0){this.#F=null,this.#I=null,this.#P=null,this.#G=this.#U;return}let t=[],n=[],r=new Map;for(let[i,a]of e.entries())this.#N?.has(a)===!0&&(r.set(a,n.length),t.push(i),n.push(a));this.#F=t,this.#I=n,this.#P=r,this.#G=n.length}#be(){return this.#I??this.#b}#xe(e){return this.#I==null?this.#H.getVisibleIndex(e)??-1:this.#P?.get(e)??-1}#Se(e){return this.#F?.[e]??e}#Ce(e){return this.#P?.get(e)??this.#H.getVisibleIndex(e)??-1}#we(e){let t=this.#k;if(t.length===0)return;let n=this.#c,r=n==null?-1:t.indexOf(n),i=t[r<0?e>0?0:t.length-1:Math.min(t.length-1,Math.max(0,r+e))];i!=null&&this.focusPath(i)}#Te(e,t){let n=e==null?null:q(e),r=this.#M;if(r!==n){if(r==null&&n!=null&&(this.#j=this.#ge()),this.#M=n,n==null)this.#_e(!0),this.#j=null,this.#O.clear(),this.#N=null,this.#je(this.#c,!0);else if(n.length===0)this.#_e(!1),this.#O.clear(),this.#N=null,this.#je(this.#c,!0);else{let e=this.#Ee();this.#je(e,!0)}t&&(this.#y?.(this.#M),this.#De())}}#Ee(){if(this.#M==null||this.#M.length===0)return this.#O.clear(),this.#c;let e=this.#M,t=this.#ue(),n=this.#fe(),r=[],i=new Set,a=null;for(let o=0;o<t.length;o+=1){if(!n[o].includes(e))continue;let s=t[o];r.push(s),i.add(s),a??=s}let o=this.#pe(),s=this.#me();for(let t=0;t<o.length;t+=1){if(!s[t].includes(e))continue;let n=o[t];i.has(n)||(r.push(n),i.add(n),a??=n)}this.#O=i;let c=this.#A===`hide-non-matches`&&r.length>0?new Set:null;this.#N=c;let l=this.#A===`expand-matches`?new Set(this.#j??[]):new Set;for(let e of r){c?.add(e),e.endsWith(`/`)&&l.add(e);for(let t of G(e))l.add(t),c?.add(t)}return this.#ve(l),a??this.#c}#De(){for(let e of this.#t)e()}#Oe(e){this.#n.get(e.operation)?.forEach(t=>{t(e)}),this.#n.get(`*`)?.forEach(t=>{t(e)})}#ke(e){for(let t of G(e))this.#H.isExpanded(t)||this.#H.expand(t);this.#H.isExpanded(e)||this.#H.expand(e)}#Ae(e){let t=this.#G;if(t===0)return;let n=this.#s===-1?0:this.#s,r=Math.min(t-1,Math.max(0,n+e));(r!==n||this.#s===-1)&&(!this.#l&&this.#F==null&&r>=this.#b.length&&this.#Ie(),this.#Fe(r))}#je(e,t=!0){let n=this.#H.getVisibleCount();this.#U=n;let r=vt(this.#H.getVisibleTreeProjectionData(t?void 0:Math.min(n,bt)),e,t?e=>this.#H.getVisibleIndex(e):void 0);this.#a.clear(),this.#o.clear(),this.#l=r.paths.length>=n,this.#u=r.getParentIndex,this.#b=r.paths,this.#x=r.posInSetByIndex,this.#S=r.setSizeByIndex,this.#ye(),this.#s=e==null?this.#be().length>0?0:-1:this.#Z(e),this.#c=this.#s<0?null:this.#Me(this.#s)}#Me(e){return this.#be()[e]??(this.#F==null?this.#H.getVisibleRowContext(e)?.row.path??null:null)}#Ne(e){return this.#H.getPathInfo(e)?.path??null}#Pe(e){if(e==null)return;let t=this.#Z(e);t>=0&&this.#Fe(t,!1)}#Fe(e,t=!0){let n=this.#Me(e);n!=null&&(this.#s===e&&this.#c===n||(this.#s=e,this.#c=n,t&&this.#De()))}#Ie(){this.#l||this.#je(this.#c,!0)}#Le(e){let t=nt(this.#T,e);t==null&&this.#T!=null&&(this.#E=``),this.#T=t;let n=nt(this.#c,e,!0),r=[...this.#B].map(t=>nt(t,e)).filter(e=>e!=null).map(e=>this.#H.getPathInfo(e)?.path??null).filter(e=>e!=null),i=nt(this.#z,e),a=i==null?null:this.#H.getPathInfo(i)?.path??null,o=[...new Set(r)];return ot(this.#B,o)||(this.#B=new Set(o),this.#V+=1),this.#z=a,n}#Re(){return this.#H.on(`*`,e=>{if(this.#W)return;e.canonicalChanged&&(this.#d.clear(),this.#he()),this.#i!=null&&$e(e)&&(this.#i=null);let t=$e(e)?this.#Le(e):this.#c,n=this.#M!=null&&this.#M.length>0?this.#Ee():this.#M===``?this.#c:t,r=this.#M!=null||e.operation!==`expand`&&e.operation!==`collapse`;this.#je(n,r),this.#De();let i=U(e);i!=null&&this.#Oe(i)})}#ze(e){if(this.#H.isExpanded(e)){this.#ie(e);return}this.#ke(e)}}})),wt,Tt=e((()=>{wt=e=>{if(e==null||e.length===0)return`0`;let t=`${e.length}`;for(let n of e)t+=`\0${n.path}\0${n.status}`;return t}}));function Et(e){let t=e.endsWith(`/`),n=``,r=-1;for(let t=0;t<=e.length;t+=1){if(!(e[t]===`/`||t===e.length)){r===-1&&(r=t);continue}r!==-1&&(n!==``&&(n+=`/`),n+=e.slice(r,t),r=-1)}return n===``?null:{isDirectory:t,path:n}}var Dt=e((()=>{}));function Ot(e){let t=e.endsWith(`/`)?e.slice(0,-1):e;if(t.length===0)return[];let n=t.split(`/`);return n.slice(0,-1).map((e,t)=>`${n.slice(0,t+1).join(`/`)}/`)}function kt(e,t){return t?`${e}/`:e}function At(e,t=null){let n=wt(e==null?void 0:[...e]);if(n===`0`)return null;if(t?.signature===n)return t;let r=new Map,i=new Set,a=new Set;for(let t of e??[]){let e=Et(t.path);if(e==null)continue;let n=kt(e.path,e.isDirectory);r.set(n,t.status),t.status===`ignored`&&e.isDirectory?a.add(n):e.isDirectory&&a.delete(n);for(let t of Ot(e.path))i.add(t)}return{directoriesWithChanges:i,ignoredDirectoryPaths:a,signature:n,statusByPath:r}}var jt=e((()=>{Tt(),Dt()}));function Mt(e){e&&e.parentNode&&e.remove()}function Nt(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`&&typeof e!=`function`?i=t[a]:o[a]=t[a];return arguments.length>2&&(o.children=arguments.length>3?_n.call(arguments,2):n),Pt(e,o,r,i,null)}function Pt(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++an,__i:-1,__u:0};return i==null&&J.vnode!=null&&J.vnode(a),a}function Ft(e){return e.children}function It(e,t){this.props=e,this.context=t,this.__g=0}function Lt(e,t){if(t==null)return e.__?Lt(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?Lt(e):null}function Rt(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=n.__e;break}return Rt(e)}}function zt(e){(8&e.__g||!(e.__g|=8)||!on.push(e)||cn++)&&sn==J.debounceRendering||((sn=J.debounceRendering)||queueMicrotask)(Bt)}function Bt(){for(var e,t,n,r,i,a,o,s,c=1;on.length;)on.length>c&&on.sort(ln),e=on.shift(),c=on.length,8&e.__g&&(n=void 0,i=(r=(t=e).__v).__e,a=[],o=[],(s=t.__P)&&((n=vn({},r)).__v=r.__v+1,J.vnode&&J.vnode(n),Jt(s,n,r,t.__n,s.namespaceURI,32&r.__u?[i]:null,a,i??Lt(r),!!(32&r.__u),o,s.ownerDocument),n.__v=r.__v,n.__.__k[n.__i]=n,Xt(a,n,o),n.__e!=i&&Rt(n)));cn=0}function Vt(e,t,n,r,i,a,o,s,c,l,u,d){var f,p,m,h,g,_,v,y=r&&r.__k||hn,b=t.length;for(c=Ht(n,t,y,c,b),f=0;f<b;f++)(m=n.__k[f])!=null&&(p=m.__i==-1?mn:y[m.__i]||mn,m.__i=f,_=Jt(e,m,p,i,a,o,s,c,l,u,d),h=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&$t(p.ref,null,m),u.push(m.ref,m.__c||h,m)),g==null&&h!=null&&(g=h),(v=!!(4&m.__u))||p.__k===m.__k?c=Ut(m,c,e,v):typeof m.type==`function`&&_!==void 0?c=_:h&&(c=h.nextSibling),m.__u&=-7);return n.__e=g,c}function Ht(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(c=a+f,(o=e.__k[a]=typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?Pt(null,o,null,null,null):gn(o)?Pt(Ft,{children:o},null,null,null):o.constructor==null&&o.__b>0?Pt(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,s=null,(l=o.__i=Wt(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=Lt(s)),en(s,s));return r}function Ut(e,t,n,r){var i,a;if(typeof e.type==`function`){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=Ut(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=Lt(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Wt(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&(2&l.__u)==0;if(l===null&&e.key==null||u&&s==l.key&&c==l.type)return n;if(r>+!!u){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function Gt(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n??``}function Kt(e,t,n,r,i){var a;n:if(t==`style`)if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||Gt(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||Gt(e.style,t,n[t])}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(un,`$1`)),(t=t.slice(2))[0].toLowerCase()!=t[0]&&(t=t.toLowerCase()),e.__l||={},e.__l[t+a]=n,n?r?n.l=r.l:(n.l=dn,e.addEventListener(t,a?pn:fn,a)):e.removeEventListener(t,a?pn:fn,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function qt(e){return function(t){if(this.__l){var n=this.__l[t.type+e];if(t.u==null)t.u=dn++;else if(t.u<n.l)return;return n(J.event?J.event(t):t)}}}function Jt(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_,v,y,b,x,S,C,ee,w,T,E,te,ne,re,ie,D=t.type;if(t.constructor!=null)return null;128&n.__u&&(c=!!(32&n.__u),n.__c.__z&&(s=t.__e=n.__e=(a=n.__c.__z)[0],n.__c.__z=null)),(d=J.__b)&&d(t);n:if(typeof D==`function`)try{if(v=t.props,y=`prototype`in D&&D.prototype.render,b=(d=D.contextType)&&r[d.__c],x=d?b?b.props.value:d.__:r,n.__c?2&(f=t.__c=n.__c).__g&&(f.__g|=1,_=!0):(y?t.__c=f=new D(v,x):(t.__c=f=new It(v,x),f.constructor=D,f.render=tn),b&&b.sub(f),f.props=v,f.state||={},f.context=x,f.__n=r,p=!0,f.__g|=8,f.__h=[],f._sb=[]),y&&f.__s==null&&(f.__s=f.state),y&&D.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=vn({},f.__s)),vn(f.__s,D.getDerivedStateFromProps(v,f.__s))),m=f.props,h=f.state,f.__v=t,p)y&&D.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),y&&f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(y&&D.getDerivedStateFromProps==null&&v!==m&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(v,x),!(4&f.__g)&&f.shouldComponentUpdate!=null&&!1===f.shouldComponentUpdate(v,f.__s,x)||t.__v==n.__v){for(t.__v!=n.__v&&(f.props=v,f.state=f.__s,f.__g&=-9),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),S=0;S<f._sb.length;S++)f.__h.push(f._sb[S]);f._sb=[],f.__h.length&&o.push(f);break n}f.componentWillUpdate!=null&&f.componentWillUpdate(v,f.__s,x),y&&f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(m,h,g)})}if(f.context=x,f.props=v,f.__P=e,f.__g&=-5,C=J.__r,ee=0,y){for(f.state=f.__s,f.__g&=-9,C&&C(t),d=f.render(f.props,f.state,f.context),w=0;w<f._sb.length;w++)f.__h.push(f._sb[w]);f._sb=[]}else do f.__g&=-9,C&&C(t),d=f.render(f.props,f.state,f.context),f.state=f.__s;while(8&f.__g&&++ee<25);f.state=f.__s,f.getChildContext!=null&&(r=vn({},r,f.getChildContext())),y&&!p&&f.getSnapshotBeforeUpdate!=null&&(g=f.getSnapshotBeforeUpdate(m,h)),T=d,d!=null&&d.type===Ft&&d.key==null&&(T=Zt(d.props.children)),s=Vt(e,gn(T)?T:[T],t,n,r,i,a,o,s,c,l,u),t.__u&=-161,f.__h.length&&o.push(f),_&&(f.__g&=-4)}catch(e){if(t.__v=null,c||a!=null)if(e.then){for(E=0,te=!1,t.__u|=c?160:128,t.__c.__z=[],ne=0;ne<a.length;ne++)(re=a[ne])==null||te||(re.nodeType==8&&re.data==`$s`?(E>0&&t.__c.__z.push(re),E++,a[ne]=null):re.nodeType==8&&re.data==`/$s`?(--E>0&&t.__c.__z.push(re),te=E===0,s=a[ne],a[ne]=null):E>0&&(t.__c.__z.push(re),a[ne]=null));if(!te){for(;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a[a.indexOf(s)]=null,t.__c.__z=[s]}t.__e=s}else{for(ie=a.length;ie--;)Mt(a[ie]);Yt(t)}else t.__e=n.__e,t.__k=n.__k,e.then||Yt(t);J.__e(e,t,n)}else s=t.__e=Qt(n.__e,t,n,r,i,a,o,c,l,u);return(d=J.diffed)&&d(t),128&t.__u?void 0:s}function Yt(e){e&&e.__c&&(e.__c.__g|=4),e&&e.__k&&e.__k.forEach(Yt)}function Xt(e,t,n){for(var r=0;r<n.length;r++)$t(n[r],n[++r],n[++r]);J.__c&&J.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){J.__e(e,t.__v)}})}function Zt(e){return typeof e!=`object`||!e||e.__b&&e.__b>0?e:gn(e)?e.map(Zt):vn({},e)}function Qt(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v=n.props,y=t.props,b=t.type;if(b==`svg`?i=`http://www.w3.org/2000/svg`:b==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a!=null){for(u=0;u<a.length;u++)if((m=a[u])&&`setAttribute`in m==!!b&&(b?m.localName==b:m.nodeType==3)){e=m,a[u]=null;break}}if(e==null){if(b==null)return l.createTextNode(y);e=l.createElementNS(i,b,y.is&&y),s&&=(J.__m&&J.__m(t,a),!1),a=null}if(b==null)v===y||s&&e.data==y||(e.data=y);else{if(a&&=_n.call(e.childNodes),v=n.props||mn,!s&&a!=null)for(v={},u=0;u<e.attributes.length;u++)v[(m=e.attributes[u]).name]=m.value;for(u in v)if(m=v[u],u!=`children`){if(u==`dangerouslySetInnerHTML`)f=m;else if(!(u in y)){if(u==`value`&&`defaultValue`in y||u==`checked`&&`defaultChecked`in y)continue;Kt(e,u,null,m,i)}}for(u in _=1&n.__u,y)m=y[u],u==`children`?p=m:u==`dangerouslySetInnerHTML`?d=m:u==`value`?h=m:u==`checked`?g=m:s&&typeof m!=`function`||v[u]===m&&!_||Kt(e,u,m,v[u],i);if(d)s||f&&(d.__html==f.__html||d.__html==e.innerHTML)||(e.innerHTML=d.__html),t.__k=[];else if(f&&(e.innerHTML=``),Vt(b==`template`?e.content:e,gn(p)?p:[p],t,n,r,b==`foreignObject`?`http://www.w3.org/1999/xhtml`:i,a,o,a?a[0]:n.__k&&Lt(n,0),s,c,l),a!=null)for(u=a.length;u--;)Mt(a[u]);s||(u=`value`,b==`progress`&&h==null?e.removeAttribute(`value`):h==null||h===e[u]&&(b!==`progress`||h)||Kt(e,u,h,v[u],i),u=`checked`,g!=null&&g!=e[u]&&Kt(e,u,g,v[u],i))}return e}function $t(e,t,n){try{if(typeof e==`function`){var r=typeof e.__u==`function`;r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(e){J.__e(e,n)}}function en(e,t,n){var r,i;if(J.unmount&&J.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||$t(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){J.__e(e,t)}r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&en(r[i],t,n||typeof e.type!=`function`);n||Mt(e.__e),e.__e&&e.__e.__l&&(e.__e.__l=null),e.__e=e.__c=e.__=null}function tn(e,t,n){return this.constructor(e,n)}function nn(e,t){var n,r,i,a;t==document&&(t=document.documentElement),J.__&&J.__(e,t),r=(n=!!(e&&32&e.__u))?null:t.__k,e=t.__k=Nt(Ft,null,[e]),i=[],a=[],Jt(t,e,r||mn,mn,t.namespaceURI,r?null:t.firstChild?_n.call(t.childNodes):null,i,r?r.__e:t.firstChild,n,a,t.ownerDocument),Xt(i,e,a)}function rn(e,t){e.__u|=32,nn(e,t)}var J,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn=e((()=>{mn={},hn=[],gn=Array.isArray,_n=hn.slice,vn=Object.assign,J={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!(1&i.__g)){i.__g|=4;try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=8&i.__g),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=8&i.__g),o)return void(i.__g|=2)}catch(t){e=t}}throw cn=0,e}},an=0,It.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=vn({},this.state);typeof e==`function`&&(e=e(vn({},n),this.props)),e&&vn(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),zt(this))},It.prototype.forceUpdate=function(e){this.__v&&(this.__g|=4,e&&this.__h.push(e),zt(this))},It.prototype.render=Ft,on=[],cn=0,ln=function(e,t){return e.__v.__b-t.__v.__b},un=/(PointerCapture)$|Capture$/i,dn=0,fn=qt(!1),pn=qt(!0)}));function Y(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c&&typeof e!=`function`)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--bn,__i:-1,__u:0,__source:i,__self:a};return J.vnode&&J.vnode(l),l}var bn,xn=e((()=>{yn(),bn=0,Array.isArray}));function Sn({name:e,remappedFrom:t,token:n,width:r,height:i,viewBox:a,label:o,alignCapitals:s=!1}){"use no memo";let c=`#${e.replace(/^#/,``)}`,{width:l,height:u,viewBox:d}=Tn[e]??{width:Cn,height:wn},f=r??l,p=i??u,m=a??d??`0 0 ${l} ${u}`;return Y(`svg`,{"data-icon-name":t??e,"data-icon-token":n,"data-align-capitals":s,...o==null?{"aria-hidden":!0}:{"aria-label":o,role:`img`},viewBox:m,width:f,height:p,children:Y(`use`,{href:c})})}var Cn,wn,Tn,En=e((()=>{xn(),Cn=16,wn=16,Tn={}}));function Dn({children:e,marker:t,variant:n=`default`}){"use no memo";return Y(`div`,{"aria-hidden":!0,"data-truncate-marker-cell":!0,children:Y(`div`,{"data-truncate-marker":!0,children:typeof t==`function`?t({children:e}):n===`fade`?Y(`span`,{"data-truncate-fade":!0}):t})})}function On(e){"use no memo";let{mode:t,children:n}=e;return Y(`div`,{children:[Y(`div`,{"data-truncate-content":`visible`,children:t===`fruncate`?Y(`span`,{children:n}):n}),Y(`div`,{"data-truncate-content":`overflow`,"aria-hidden":!0,children:t===`fruncate`?Y(`span`,{children:n}):n})]})}function kn({children:e,mode:t=`truncate`,marker:n=`…`,variant:r=`default`,...i}){"use no memo";let a=Y(On,{mode:t,children:e},`content`),o=Y(Dn,{marker:n,mode:t,variant:r},`marker`),s=Y(`div`,{"data-truncate-fill":!0},`fill`);return Y(`div`,{"data-truncate-container":t,"data-truncate-variant":r,...i,children:Y(`div`,{"data-truncate-grid":!0,children:t===`truncate`?[a,o]:[o,a,s]})})}function An({children:e,...t}){"use no memo";return Y(kn,{mode:`truncate`,...t,children:e})}function jn({children:e,...t}){"use no memo";return Y(kn,{mode:`fruncate`,...t,children:e})}function Mn({children:e,contents:t,priority:n=`end`,split:r=`center`,minimumLength:i=12,className:a,style:o,...s}){"use no memo";let c=null,l=null;if(Array.isArray(t)){if(t.length!==2)return console.error(`MiddleTruncate: contents must be an array of two items`),null;c=Y(An,{...s,children:t[0]}),l=Y(jn,{...s,children:t[1]})}else{if(typeof e!=`string`)return console.error(`MiddleTruncate: children must be a string`),null;if(e.length===0)return Y(`div`,{className:a,style:o});if(e.length<i)return Y(n===`end`?jn:An,{...s,className:a,style:o,children:e});let t=null,u=null,d=null;if(typeof r==`string`)r===`center`?t=Nn:r===`extension`?t=Pn:r===`leaf-path`&&(t=Fn);else if(typeof r==`number`)t=In,u=r;else if(Array.isArray(r)){let[e,n]=r;d=n,e===`last`?t=Ln:e===`first`&&(t=Rn)}else typeof r==`function`&&(t=r);t??=Nn;let[f,p]=t(e,{priority:n,variant:s.variant,splitIndex:typeof u==`number`?u:void 0,splitOffset:typeof d==`number`?d:void 0}),m=f.length>=p.length,h=n===`equal`&&!m,g=n===`equal`&&m,_={},v={};h&&(_.marker=``),g&&(v.marker=``),c=Y(An,{...s,..._,children:f}),l=Y(jn,{...s,...v,children:p})}return Y(`div`,{"data-truncate-group-container":`middle`,className:a,style:o,children:[Y(`div`,{"data-truncate-segment-priority":n===`start`||n===`equal`?`1`:`2`,children:c}),Y(`div`,{"data-truncate-segment-priority":n===`end`||n===`equal`?`1`:`2`,children:l})]})}var Nn,Pn,Fn,In,Ln,Rn,zn=e((()=>{xn(),Nn=e=>{if(e.length<2)return[e,``];let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]},Pn=e=>{if(e.length<4)return[e,``];let t=e.lastIndexOf(`.`)+1,n=e.length-t>10,r=t>=1&&!n?t:Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]},Fn=e=>{if(e.length<4)return[e,``];let t=e.lastIndexOf(`/`)+1,n=e.length-t>25,r=t>=1&&!n?t:Math.ceil(e.length/2);return[e.slice(0,r),e.slice(r)]},In=(e,{splitIndex:t}={})=>{if(typeof t!=`number`){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}return[e.slice(0,t),e.slice(t)]},Ln=(e,{splitOffset:t}={})=>{if(typeof t!=`number`||t<=0||t>=e.length){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}let n=e.length-t;return[e.slice(0,n),e.slice(n)]},Rn=(e,{splitOffset:t}={})=>{if(typeof t!=`number`||t<=0||t>=e.length){let t=Math.ceil(e.length/2);return[e.slice(0,t),e.slice(t)]}let n=t;return[e.slice(0,n),e.slice(n)]}}));function Bn(e,t,n){return Math.min(Math.max(e,t),n)}function Vn(e,t){return e<0||t<e?Zn:{endIndex:t,startIndex:e}}function Hn(e){return e.startIndex<0||e.endIndex<e.startIndex}function Un(e,t){return Hn(e)?0:(e.endIndex-e.startIndex+1)*t}function Wn(e,t,n){if(t<=0)return-1;let r=t*n;return e<=0?0:e>=r?t:Math.floor(e/n)}function Gn(e,t,n){return t<=0||e<=0?-1:e>=t*n?t-1:Math.ceil(e/n)-1}function Kn(e){let t=new Map;return e.forEach((e,n)=>{if(e.kind!==`directory`||!e.isExpanded)return;let r=e.ancestorPaths.length,i=t.get(r);if(i==null){t.set(r,[n]);return}i.push(n)}),t}function qn(e,t){let n=0,r=e.length-1,i=-1;for(;n<=r;){let a=Math.floor((n+r)/2),o=e[a];if(o==null)break;if(o<=t){i=a,n=a+1;continue}r=a-1}return i}function Jn(e){let t=new Map,n=[];for(let r=0;r<e.length;r+=1){let i=e[r];if(i==null)continue;let a=i.kind===`directory`&&i.isExpanded?[...i.ancestorPaths,i.path]:i.ancestorPaths,o=0;for(;o<n.length&&o<a.length&&n[o]===a[o];)o+=1;for(let e=n.length-1;e>=o;--e){let i=n[e];i!=null&&t.set(i,r-1)}n.length=o;for(let e=o;e<a.length;e+=1){let t=a[e];t!=null&&n.push(t)}}let r=e.length-1;for(let e of n)t.set(e,r);return t}function Yn(e,t,n){if(e.length===0||t<=0)return[];let r=Jn(e),i=Kn(e),a=[];for(let r=0;r<e.length;r+=1){let o=i.get(r);if(o==null||o.length===0)break;let s=t+r*n,c=qn(o,Math.min(e.length-1,Math.floor(s/n))),l=null;for(;c>=0;){let t=o[c],n=t==null?null:e[t]??null;if(n!=null&&(r===0||n.ancestorPaths[r-1]===a[r-1]?.path)){l=n;break}--c}if(l==null)break;a.push(l)}return a.map((i,a)=>{let o=a*n,s=(r.get(i.path)??e.length-1)+1;if(s>=e.length)return{row:i,top:o};let c=s*n-t;return{row:i,top:Math.min(o,c-n)}}).filter(e=>e.top+n>0)}function Xn(e,t){let n=t.totalRowCount??e.length,r=n*t.itemHeight,i=Math.max(0,t.viewportHeight),a=Math.max(0,Math.floor(t.overscan)),o=Math.max(0,r-i),s=Bn(t.scrollTop,0,o),c=t.stickyRows??Yn(e,s,t.itemHeight),l=c.reduce((e,n)=>Math.max(e,n.top+t.itemHeight),0),u=Math.min(r,s+l),d=Math.max(0,i-l),f=Math.max(0,r-u),p=Wn(s,n,t.itemHeight),m=Wn(u,n,t.itemHeight),h=l<=0||p<0||p>=n?-1:p,g=h===-1?-1:Math.min(n-1,m-1),_=h===-1||g<h?0:g-h+1,v=d<=0||m>=n?Zn:Vn(m,Gn(u+d,n,t.itemHeight)),y=g+1,b=Hn(v)?Zn:Vn(Math.max(y,v.startIndex-a),Math.min(n-1,v.endIndex+a)),x=Un(b,t.itemHeight);return{occlusion:{firstOccludedIndex:h,lastOccludedIndex:g,occludedCount:_},physical:{itemHeight:t.itemHeight,maxScrollTop:o,overscan:a,scrollTop:s,totalHeight:r,totalRowCount:n,viewportHeight:i},projected:{contentHeight:f,paneHeight:d,paneTop:u},sticky:{height:l,rows:c},visible:v,window:{endIndex:b.endIndex,height:x,offsetTop:Hn(b)?0:b.startIndex*t.itemHeight,startIndex:b.startIndex}}}var Zn,Qn=e((()=>{Zn={endIndex:-1,startIndex:-1}})),$n,er,tr,nr=e((()=>{$n={added:`A`,deleted:`D`,ignored:null,modified:`M`,renamed:`R`,untracked:`U`},er={added:`Git status: added`,deleted:`Git status: deleted`,ignored:`Git status: ignored`,modified:`Git status: modified`,renamed:`Git status: renamed`,untracked:`Git status: untracked`},tr=`Contains git status items`}));function rr(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:i=0,viewportHeight:a}=e;if(n<0)return null;let o=Math.max(0,i),s=n*r,c=s+r;if(s<t+o){let e=Math.max(0,s-o);return e===t?null:e}if(c>t+a){let e=c-a;return e===t?null:e}return null}function ir(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,offset:i,topInset:a=0,totalHeight:o,viewportHeight:s}=e;if(i===`nearest`)return rr({currentScrollTop:t,focusedIndex:n,itemHeight:r,topInset:a,viewportHeight:s});if(n<0)return null;let c=Math.max(0,a),l=n*r,u=Math.max(0,s-c),d=i===`center`?c+Math.max(0,(u-r)/2):c,f=Math.max(0,o-s),p=Math.max(0,Math.min(l-d,f));return p===t?null:p}function ar(e){let{currentScrollTop:t,focusedIndex:n,itemHeight:r,targetViewportOffset:i,totalHeight:a,viewportHeight:o}=e;if(n<0)return null;let s=Math.max(0,i),c=n*r,l=c+r,u=t+s,d=t+o;if(c>=u&&l<=d)return null;let f=Math.max(0,a-o),p=Math.max(0,Math.min(c-s,f));return p===t?null:p}var or=e((()=>{}));function sr(e){if(e==null||!e.isConnected||e===document.body||e===document.documentElement)return!1;e.focus({preventScroll:!0});let t=e.getRootNode();return t instanceof ShadowRoot?t.activeElement===e:document.activeElement===e}function cr(e){let t=e.getRootNode();if(t instanceof ShadowRoot){let e=t.activeElement;return e instanceof HTMLElement?e:null}let n=document.activeElement;return n instanceof HTMLElement&&e.contains(n)?n:null}function lr(e,t){if(e==null)return t;let n=e.getBoundingClientRect().height;return n>0?n:e.clientHeight>0?e.clientHeight:t}function ur(e,t){return e!=null&&e>0?e:t}function dr(e){let t=e.borderBoxSize,n=Array.isArray(t)?t[0]:t;return n!=null&&Number.isFinite(n.blockSize)&&n.blockSize>0?n.blockSize:e.contentRect.height>0?e.contentRect.height:null}function fr(e,t,n,r,i=0){let a=rr({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,topInset:i,viewportHeight:r});return a==null?!1:(e.scrollTop=a,!0)}function pr(e,t,n,r,i,a,o=0){let s=ir({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,offset:a,topInset:o,totalHeight:i,viewportHeight:r});return s==null?!1:(e.scrollTop=s,!0)}function mr(e,t,n,r,i,a){let o=ar({currentScrollTop:e.scrollTop,focusedIndex:t,itemHeight:n,targetViewportOffset:a,totalHeight:i,viewportHeight:r});return o==null?!1:(e.scrollTop=o,!0)}function hr(e,t,n,r){return n.end<n.start?null:e<n.start?-t:e>n.end?r:null}var gr=e((()=>{or()}));function _r(e){let{renamingPath:t,previousRenamingPath:n,hasRenderedInput:r}=e;return t==null?`reset`:r?n===t?`ignore`:`focus-input`:`reveal-canonical`}var vr=e((()=>{}));function yr({ariaLabel:e,isFlattened:t=!1,ref:n,value:r,onBlur:i,onInput:a}){return Y(`input`,{ref:n,"data-item-rename-input":!0,...t?{"data-item-flattened-rename-input":!0}:{},"aria-label":e,value:r,onBlur:i,onInput:a,onClick:e=>e.stopPropagation(),onMouseDown:e=>e.stopPropagation(),onPointerDown:e=>e.stopPropagation()})}var br=e((()=>{xn()}));function xr(e){let{row:t,mode:n,targetPath:r,ariaLabel:i,domId:a,isParked:o,itemHeight:s,features:c,state:l,extraStyle:u}=e,d=n===`sticky`,f=t.ancestorPaths.at(-1)??``,p={};return l.isFocusRinged&&(p[`data-item-focused`]=!0),t.isSelected&&(p[`data-item-selected`]=!0),l.isContextHovered&&(p[`data-item-context-hover`]=`true`),l.isDragTarget&&(p[`data-item-drag-target`]=!0),l.isDragging&&(p[`data-item-dragging`]=!0),l.effectiveGitStatus!=null&&(p[`data-item-git-status`]=l.effectiveGitStatus),l.containsGitChange&&(p[`data-item-contains-git-change`]=`true`),{"aria-expanded":!d&&t.kind===`directory`?t.isExpanded:void 0,"aria-haspopup":c.contextMenuEnabled?`menu`:void 0,"aria-label":i,"aria-level":d?void 0:t.level+1,"aria-posinset":d?void 0:t.posInSet+1,"aria-selected":d?void 0:t.isSelected?`true`:`false`,"aria-setsize":d?void 0:t.setSize,"data-file-tree-sticky-path":d?r:void 0,"data-file-tree-sticky-row":d?`true`:void 0,"data-item-context-menu-button-visibility":c.actionLaneEnabled?c.contextMenuButtonVisibility:void 0,"data-item-context-menu-trigger-mode":c.contextMenuEnabled?c.contextMenuTriggerMode:void 0,"data-item-has-context-menu-action-lane":c.actionLaneEnabled?`true`:void 0,"data-item-has-git-lane":c.gitLaneActive?`true`:void 0,"data-item-parent-path":f.length>0?f:void 0,"data-item-parked":o?`true`:void 0,"data-item-path":r,"data-item-type":t.kind===`directory`?`folder`:`file`,"data-type":`item`,id:d?void 0:a,role:d?void 0:`treeitem`,style:{minHeight:`${s}px`,...u},tabIndex:!d&&t.isFocused?0:-1,...p}}var Sr=e((()=>{}));function Cr(e){let{event:t,mode:n,isSearchOpen:r,isDirectory:i}=e,a=t.ctrlKey||t.metaKey,o=t.shiftKey||a,s=t.shiftKey?{additive:a,kind:`range`}:a?{kind:`toggle`}:{kind:`single`};return{closeSearch:r,revealCanonical:n===`sticky`,selection:s,toggleDirectory:!o&&i}}var wr=e((()=>{}));function Tr(e,t){$.__h&&$.__h(Q,e,Vr||t),Vr=0;var n=Q.__H||={__:[],__h:[]};return e>=n.__.length&&n.__.push({}),n.__[e]}function Er(e){return Vr=1,Dr(Ir,e)}function Dr(e,t,n){var r=Tr(Lr++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ir(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);Br(t,n)||(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=Q,!Q.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=r.__c.__H.__.filter(function(e){return!!e.__c});if(i.every(function(e){return!e.__N}))return!a||a.call(this,e,t,n);var o=r.__c.props!==e;return i.forEach(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,Br(t,e.__[0])||(o=!0)}}),a&&a.call(this,e,t,n)||o};Q.__f=!0;var a=Q.shouldComponentUpdate,o=Q.componentWillUpdate;Q.componentWillUpdate=function(e,t,n){if(4&this.__g){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},Q.shouldComponentUpdate=i}return r.__N||r.__}function Or(e,t){var n=Tr(Lr++,3);!$.__s&&Fr(n.__H,t)&&(n.__=e,n.u=t,Q.__H.__h.push(n))}function kr(e,t){var n=Tr(Lr++,4);!$.__s&&Fr(n.__H,t)&&(n.__=e,n.u=t,Q.__h.push(n))}function X(e){return Vr=5,Ar(function(){return{current:e}},[])}function Ar(e,t){var n=Tr(Lr++,7);return Fr(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Z(e,t){return Vr=8,Ar(function(){return e},t)}function jr(){for(var e;e=Hr.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(Nr),e.__H.__h.forEach(Pr),e.__H.__h=[]}catch(t){e.__H.__h=[],$.__e(t,e.__v)}}function Mr(e){var t,n=function(){clearTimeout(r),Yr&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Yr&&(t=requestAnimationFrame(n))}function Nr(e){var t=Q,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),Q=t}function Pr(e){var t=Q;e.__c=e.__(),Q=t}function Fr(e,t){return!e||e.length!==t.length||t.some(function(t,n){return!Br(t,e[n])})}function Ir(e,t){return typeof t==`function`?t(e):t}var Lr,Q,Rr,zr,Br,Vr,Hr,$,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr=e((()=>{yn(),Br=Object.is,Vr=0,Hr=[],$=J,Ur=$.__b,Wr=$.__r,Gr=$.diffed,Kr=$.__c,qr=$.unmount,Jr=$.__,$.__b=function(e){Q=null,Ur&&Ur(e)},$.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Jr&&Jr(e,t)},$.__r=function(e){Wr&&Wr(e),Lr=0;var t=(Q=e.__c).__H;t&&(Rr===Q?(t.__h=[],Q.__h=[],t.__.forEach(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.forEach(Nr),t.__h.forEach(Pr),t.__h=[],Lr=0)),Rr=Q},$.diffed=function(e){Gr&&Gr(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Hr.push(t)!==1&&zr===$.requestAnimationFrame||((zr=$.requestAnimationFrame)||Mr)(jr)),t.__H.__.forEach(function(e){e.u&&(e.__H=e.u),e.u=void 0})),Rr=Q=null},$.__c=function(e,t){t.some(function(e){try{e.__h.forEach(Nr),e.__h=e.__h.filter(function(e){return!e.__||Pr(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],$.__e(n,e.__v)}}),Kr&&Kr(e,t)},$.unmount=function(e){qr&&qr(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(e){try{Nr(e)}catch(e){t=e}}),n.__H=void 0,t&&$.__e(t,n.__v))},Yr=typeof requestAnimationFrame==`function`}));function Zr(e,t=null,n=null){"use no memo";let r=e.flattenedSegments;return r==null||r.length===0?t??e.name:Y(`span`,{"data-item-flattened-subitems":!0,children:r.map((e,i)=>{let a=i===r.length-1;return Y(Ft,{children:[Y(`span`,{"data-item-flattened-subitem":e.path,"data-item-flattened-subitem-drag-target":n===e.path?`true`:void 0,children:a&&t!=null?t:Y(An,{children:e.name})}),i<r.length-1?` / `:``]},e.path)})})}function Qr(e){return e.isFlattened?e.flattenedSegments?.findLast(e=>e.isTerminal)?.path??e.path:e.path}function $r(e){let t=e.flattenedSegments;return t==null||t.length===0?e.name:t.map(e=>e.name).join(` / `)}function ei(e,t,n,r){return e.map((e,i)=>{let a=i*n,o=e.subtreeEndIndex+1;if(o>=r)return{row:e.row,top:a};let s=o*n-t;return{row:e.row,top:Math.min(a,s-n)}}).filter(e=>e.top+n>0)}function ti({controller:e,itemHeight:t,overscan:n,scrollTop:r,stickyFolders:i,viewportHeight:a}){let o=e.getVisibleCount(),s=i&&o>0?e.getStickyRowCandidates(r,t):[],c=s==null&&i&&o>0?e.getVisibleRows(0,o-1):[],l=Xn(c,{itemHeight:t,overscan:n,scrollTop:r,stickyRows:s==null?void 0:ei(s,r,t,o),totalRowCount:o,viewportHeight:a}),u=i&&r<=0&&o>0?e.getStickyRowCandidates(1,t):[],d=u!=null&&r<=0?ei(u,1,t,o):i&&r<=0&&c.length>0?Yn(c,1,t):l.sticky.rows;return{overlayHeight:d.reduce((e,n)=>Math.max(e,n.top+t),0),overlayRows:d,snapshot:l,visibleRows:c}}function ni(e,t,n){let r=e,i=document.elementFromPoint?.bind(document)??null,a=r.elementFromPoint?.(t,n)??i?.(t,n)??null;return e instanceof ShadowRoot&&(a==null||!e.contains(a))?ri(e,t,n):a instanceof HTMLElement?a:null}function ri(e,t,n){let r=Array.from(e.querySelectorAll(`[data-type="item"], [data-item-flattened-subitem]`));for(let e=r.length-1;e>=0;e--){let i=r[e],a=i.getBoundingClientRect();if(t>=a.left&&t<=a.right&&n>=a.top&&n<=a.bottom)return i}return null}function ii(e){let t=e?.closest?.(`[data-type="item"]`);if(!(t instanceof HTMLElement))return null;let n=t.dataset.itemPath??null;if(n==null)return null;let r=e?.closest?.(`[data-item-flattened-subitem]`),i=r instanceof HTMLElement?r.getAttribute(`data-item-flattened-subitem`)??null:null;if(i!=null&&i.endsWith(`/`))return{directoryPath:i,flattenedSegmentPath:i,hoveredPath:n,kind:`directory`};if(t.dataset.itemType===`folder`)return{directoryPath:n,flattenedSegmentPath:null,hoveredPath:n,kind:`directory`};let a=t.dataset.itemParentPath??null;return a==null||a.length===0?{directoryPath:null,flattenedSegmentPath:null,hoveredPath:n,kind:`root`}:{directoryPath:a,flattenedSegmentPath:null,hoveredPath:n,kind:`directory`}}function ai(e){let t=e.cloneNode(!0);return t.removeAttribute(`id`),t.dataset.fileTreeDragPreview=`true`,t.setAttribute(`aria-hidden`,`true`),t.tabIndex=-1,Object.assign(t.style,{boxShadow:`0 4px 12px rgba(0, 0, 0, 0.15)`,left:`0px`,margin:`0`,pointerEvents:`none`,position:`fixed`,top:`0px`,willChange:`transform`,zIndex:`10000`}),t}function oi(){return navigator.vendor!==`Apple Computer, Inc.`}function si(e,t){let n=e-t.top;if(n<Li)return-Math.ceil((Li-Math.max(0,n))/Li*Ri);let r=t.bottom-e;return r<Li?Math.ceil((Li-Math.max(0,r))/Li*Ri):0}function ci(e,t){if(e!=null){let t=$n[e];return t==null?null:{text:t,title:er[e]}}return t?{icon:{name:`file-tree-icon-dot`,width:6,height:6},title:tr}:null}function li(e,t,n){if(t==null||t.size===0)return null;let r=[];for(let i=e.length-1;i>=0;--i){let a=e[i],o=n.get(a);if(o!=null){for(let e of r)n.set(e,o);return o?`ignored`:null}if(t.has(a)){n.set(a,!0);for(let e of r)n.set(e,!0);return`ignored`}r.push(a)}for(let e of r)n.set(e,!1);return null}function ui(e){return e!=null&&`toggle`in e}function di(e){return e.code===`Space`||e.key===` `||e.key===`Spacebar`}function fi(e){return e.key.length===1&&/^[\p{L}\p{N}]$/u.test(e.key)&&!e.ctrlKey&&!e.metaKey&&!e.altKey}function pi(e){return e==null?``:`[data-item-section="spacing-item"][data-ancestor-path="${e.replaceAll(`\\`,`\\\\`).replaceAll(`"`,`\\"`)}"] { opacity: 1; }`}function mi(e){return e.shiftKey&&e.key===`F10`||e.key===`ContextMenu`}function hi(e,t){return t&&mi(e)||(e.ctrlKey||e.metaKey)&&di(e)?!0:e.key===`ArrowDown`||e.key===`ArrowLeft`||e.key===`ArrowRight`||e.key===`ArrowUp`}function gi(e){for(let t of e.composedPath())if(t instanceof HTMLElement&&(t.dataset.fileTreeContextMenuRoot===`true`||t.dataset.type===`context-menu-anchor`||t.dataset.type===`context-menu-trigger`||t.getAttribute(`slot`)===`context-menu`))return!0;return!1}function _i(e){return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width,x:e.x,y:e.y}}function vi(e,t){return{bottom:t,height:0,left:e,right:e,top:t,width:0,x:e,y:t}}function yi(e,t){if(e==null)return t.offsetTop;let n=t.getBoundingClientRect(),r=e.getBoundingClientRect();return n.top-r.top}function bi(e,t,n){if(n==null){e.delete(t);return}e.set(t,n)}function xi(e,t,n){if(e==null)return null;let r=t.get(e)??null;if(r!=null)return r;let i=n.get(e)??null;return i?.dataset.itemParked===`true`?null:i}function Si(e){if(e==null)return[];let t=[];for(let n of e.querySelectorAll(`button[data-file-tree-sticky-row="true"]`)){if(!(n instanceof HTMLElement))continue;let e=n.dataset.fileTreeStickyPath;e!=null&&t.push(e)}return t}function Ci(e,t){if(e==null||t==null)return null;for(let n of e.querySelectorAll(`button[data-item-focused="true"][data-item-parked="true"]`))if(n instanceof HTMLElement&&n.dataset.itemPath===t)return n;return null}function wi(e,t,n,r,i,a,o){let s=Math.max(0,a-i),c=t?.getBoundingClientRect()??null,l=c==null||n==null?null:n.getBoundingClientRect().top-c.top,u=Ci(e,r),d=c==null||u==null?null:u.getBoundingClientRect().top-c.top;return Math.max(0,Math.min(d??Math.max(l??0,s),Math.max(0,o-i)))}function Ti(e,t){return{kind:e.kind,name:$r(e),path:t}}function Ei(e){return e==null?void 0:`${e}__tree`}function Di(e,t,n){if(e!=null)return`${e}__focused-item-${encodeURIComponent(t)}${n?`__parked`:``}`}function Oi(e){return e===`file-tree-icon-chevron`||e===`file-tree-icon-dot`||e===`file-tree-icon-file`||e===`file-tree-icon-lock`}function ki(e,t){if(e==null)return null;if(`text`in e)return Y(`span`,{title:e.title,children:e.text});let n=typeof e.icon==`string`?Oi(e.icon)?t(e.icon):{name:e.icon}:Oi(e.icon.name)?(()=>{let n=t(e.icon.name),{name:r,...i}=e.icon;return{...n,...i}})():e.icon;return Y(`span`,{title:e.title,children:Y(Sn,{...n})})}function Ai(e){e!=null&&sr(e.querySelector([`button:not([disabled])`,`[href]`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex="-1"])`].join(`, `))??e)}function ji(e,t,{actionLaneEnabled:n=!1,customDecoration:r=null,decorationLaneEnabled:i=!1,dragTargetFlattenedSegmentPath:a=null,gitDecoration:o=null,gitLaneActive:s=!1,renameInput:c=null,showDecorativeActionAffordance:l=!1}={}){let u=Qr(e);return Y(Ft,{children:[e.depth>0?Y(`div`,{"data-item-section":`spacing`,children:Array.from({length:e.depth}).map((t,n)=>Y(`div`,{"data-item-section":`spacing-item`,"data-ancestor-path":e.ancestorPaths[n]},n))}):null,Y(`div`,{"data-item-section":`icon`,children:e.kind===`directory`?Y(Sn,{...t(`file-tree-icon-chevron`)}):Y(Sn,{...t(`file-tree-icon-file`,u)})}),Y(`div`,{"data-item-section":`content`,children:e.isFlattened?Zr(e,c,a):c??Y(Mn,{minimumLength:5,split:`extension`,children:e.name})}),i?Y(`div`,{"data-item-section":`decoration`,children:r==null?null:ki(r,t)}):null,s?Y(`div`,{"data-item-section":`git`,children:ki(o,t)}):null,n?Y(`div`,{"data-item-section":`action`,children:l?Y(`span`,{"aria-hidden":`true`,"data-item-action-affordance":`decorative`,children:Y(Sn,{...t(`file-tree-icon-ellipsis`)})}):null}):null]})}function Mi(e,t,n,r={}){let{controller:i,renameView:a,visualFocusPath:o,contextHoverPath:s,draggedPathSet:c,dragTarget:l,dragAndDropEnabled:u,shouldSuppressContextMenu:d,handleRowDragStart:f,handleRowDragEnd:p,handleRowTouchStart:m,instanceId:h,itemHeight:g,gitStatusByPath:_,ignoredGitDirectories:v,ignoredInheritanceCache:y,directoriesWithGitChanges:b,gitLaneActive:x,contextMenuEnabled:S,contextMenuTriggerMode:C,contextMenuButtonTriggerEnabled:ee,contextMenuButtonVisibility:w,contextMenuRightClickEnabled:T,registerRenameInput:E,registerButton:te,resolveIcon:ne,renderDecorationForRow:re,openContextMenuForRow:ie,onRowClick:D,onKeyDown:ae}=e,O=Qr(t),{isParked:k=!1,mode:oe=`flow`,style:A}=r,j=oe===`sticky`,se=_?.get(O)??null??li(t.ancestorPaths,v,y),ce=t.kind===`directory`&&(b?.has(O)??!1),le=re(t,O),M=ci(se,ce),N=S&&ee,ue=le!=null||x||N,de=N&&w===`always`,fe=a.getPath()===O,P=fe?a.getValue():``,pe=j||!fe?null:Y(yr,{ref:E,ariaLabel:`Rename ${$r(t)}`,isFlattened:t.isFlattened,value:P,onBlur:()=>{a.commit()},onInput:e=>{a.setValue(e.currentTarget.value)}}),F=ji(t,ne,{actionLaneEnabled:N,customDecoration:le,decorationLaneEnabled:ue,dragTargetFlattenedSegmentPath:l?.flattenedSegmentPath??null,gitDecoration:M,gitLaneActive:x,renameInput:pe,showDecorativeActionAffordance:de}),me={...xr({ariaLabel:$r(t),domId:t.isFocused?Di(h,O,k):void 0,extraStyle:A,features:{actionLaneEnabled:N,contextMenuButtonVisibility:N?w:null,contextMenuEnabled:S,contextMenuTriggerMode:S?C:null,gitLaneActive:x},isParked:k,itemHeight:g,mode:oe,row:t,state:{containsGitChange:ce,effectiveGitStatus:se,isContextHovered:s===O,isDragTarget:l?.kind===`directory`&&l.directoryPath===O,isDragging:c?.has(O)===!0,isFocusRinged:t.isFocused&&o===O},targetPath:O}),key:n,onContextMenu:S||u?e=>{if(d()){e.preventDefault();return}S&&(e.preventDefault(),T&&(i.focusMountedPathFromInput(O),ie(t,O,{anchorRect:vi(e.clientX,e.clientY),source:`right-click`})))}:void 0,onFocus:j?void 0:()=>{i.focusMountedPathFromInput(O)},onKeyDown:j?void 0:ae,ref:e=>{te(O,e)}};return!j&&fe?Y(`div`,{...me,children:F}):Y(`button`,{...me,type:`button`,draggable:u&&!k,onDragEnd:u&&!k?p:void 0,onDragStart:u&&!k?e=>{f(e,t,O)}:void 0,onMouseDown:e=>{if(j){e.preventDefault();return}i.isSearchOpen()&&e.preventDefault()},onTouchStart:u&&!k?e=>{m(e,t,O)}:void 0,onClick:e=>{D(e,t,O,oe)},children:F})}function Ni(e,t,n){return t.end<t.start?[]:e.controller.getVisibleRows(t.start,t.end).filter(e=>!n.has(Qr(e))).map((n,r)=>Mi(e,n,t.start+r))}function Pi({composition:e,controller:t,gitStatusByPath:n,ignoredGitDirectories:r,directoriesWithGitChanges:i,icons:a,instanceId:o,itemHeight:s=Se,overscan:c=10,renamingEnabled:l=!1,renderRowDecoration:u,searchBlurBehavior:d=`close`,searchEnabled:f=!1,searchFakeFocus:p=!1,slotHost:m,stickyFolders:h=!1,initialViewportHeight:g=420}){"use no memo";let _=X(null),v=X(null),y=X(!1),b=X(null),x=X(null),S=X(null),C=X(null),ee=X(null),w=X(new Map),T=X(new Map),E=X(()=>{}),te=X(null),ne=X(0),re=X(!1),ie=X(null);ie.current!==t&&(re.current=!1,ie.current=t);let D=X(!1),ae=X(null),O=X(null),k=X(!1),oe=X(null),A=X(null),j=X(null),se=X(null),ce=X(null),M=X(null),N=X(null),ue=X(null),de=X(!1),fe=X(null),P=X(null),pe=X(null),F=X(null),me=Ar(()=>new Map,[]),[,I]=Er(0),[he,L]=Er(null),[ye,be]=Er(null),[xe,Ce]=Er(null),[we,R]=Er(null),[Te,Ee]=Er(0),[z,De]=Er(null),Oe=X(z);Oe.current=z;let ke=X(null),Ae=X(null),B=X(null),je=X(null),Me=X(null),Ne=X(!1),Pe=()=>{Ae.current=null,B.current=null,je.current=null},Fe=(e,t)=>{Ae.current=e,B.current=null,je.current=t==null?null:{path:e,scrollTop:t}},Ie=(e,t)=>{Ae.current=null,B.current={path:e,viewportOffset:t},je.current=null},Le=X(d===`retain`&&t.isSearchOpen()),[Re,ze]=Er(p);Or(()=>{p||ze(!1)},[p]);let Be=X(!1),Ve=Z(()=>{Be.current=!0,ze(e=>e&&!1)},[]),[He,Ue]=Er(()=>ti({controller:t,itemHeight:s,overscan:c,scrollTop:0,stickyFolders:h,viewportHeight:g})),[We,Ge]=Er(!1);Or(()=>{Ge(!0)},[]);let V=e?.contextMenu?.enabled===!0||e?.contextMenu?.render!=null||e?.contextMenu?.onOpen!=null||e?.contextMenu?.onClose!=null,H=e?.contextMenu?.triggerMode??(V?`right-click`:`both`),Ke=H===`both`||H===`button`,qe=e?.contextMenu?.buttonVisibility??`when-needed`,Je=H===`both`||H===`right-click`;kr(()=>{let e=S.current;if(e==null)return;let t=e=>{if(!(e instanceof CustomEvent))return;let t=e.detail?.path??null;Me.current=t,be(t),R(t==null?null:`pointer`)},n=e=>{e instanceof CustomEvent&&(Ne.current=e.detail?.disabled===!0)};return e.addEventListener(`file-tree-debug-set-context-menu-trigger`,t),e.addEventListener(`file-tree-debug-set-scroll-suppression`,n),()=>{e.removeEventListener(`file-tree-debug-set-context-menu-trigger`,t),e.removeEventListener(`file-tree-debug-set-scroll-suppression`,n)}},[]);let Ye=Z((e,t)=>{bi(w.current,e,t)},[]),Xe=Z((e,t)=>{bi(T.current,e,t)},[]),Ze=Z(e=>{x.current=e},[]),Qe=Z(e=>xi(e,T.current,w.current),[]),$e=n!=null||r!=null||i!=null,{resolveIcon:et}=Ar(()=>le(a),[a]),tt=t[yt](),nt=tt.getPath(),rt=nt!=null,it=t.isSearchOpen(),at=t.getSearchValue(),U=t.getFocusedPath(),W=t.getFocusedIndex(),ot=t.getScrollRequest(),G=t.isDragAndDropEnabled(),st=t.getDragSession(),ct=Ar(()=>st==null?null:new Set(st.draggedPaths),[st]),lt=st?.target??null,ut=st?.primaryPath??null,dt=Ei(o),{overlayHeight:ft,overlayRows:pt,snapshot:K,visibleRows:mt}=He,q=K.physical.viewportHeight,ht=Ar(()=>({end:K.window.endIndex,start:K.window.startIndex}),[K.window.endIndex,K.window.startIndex]),gt=pt,_t=K.sticky.rows,vt=K.physical.totalHeight,bt=K.sticky.height,xt=Ar(()=>new Set(_t.map(e=>Qr(e.row))),[_t]),St=W>=0&&W>=ht.start&&W<=ht.end,Ct=Z((e,t)=>u?.({item:Ti(e,t),row:e})??null,[u]),wt=Z(e=>sr(e==null?null:w.current.get(e)??null)?!0:sr(S.current),[]),Tt=Z(e=>{wt(t.focusNearestPath(e))},[t,wt]),Et=X(Tt);Et.current=Tt;let Dt=X(!0),Ot=X(()=>{}),kt=Z((t=!0)=>{let n=Oe.current;n!=null&&(Dt.current=Dt.current&&t,De(null),e?.contextMenu?.onClose?.(),Dt.current&&Tt(n.path))},[e?.contextMenu,Tt]);Ot.current=kt;let At=Z(e=>{let t=e==null?null:yi(S.current,e);Ce(e=>e===t?e:t)},[]),jt=Z((e,n,r)=>{let i=t.getItem(n);if(i==null)return;let a=Qe(n);if(a?.dataset.fileTreeStickyRow===`true`){let e=C.current;Fe(n,e?.scrollTop??null),D.current=!0,L(e=>e===n?e:n)}i.focus(),At(a),Dt.current=!0,De({anchorRect:r?.anchorRect??null,item:Ti(e,n),path:n,source:r?.source??`keyboard`})},[t,Qe,At]),Mt=Z(e=>{if(l){if(t.isSearchOpen()){let e=C.current,t=lr(e,q);oe.current=W<0||e==null?null:Math.max(0,Math.min(W*s-e.scrollTop,Math.max(0,t-s))),k.current=!0}t.startRenaming(e)!==!1&&(R(`focus`),I(e=>e+1))}},[t,W,s,l,q]),Nt=Z((e,{restoreTreeFocus:n=!0,targetOffset:r=`live-overlay`}={})=>{let i=C.current;if(i==null)return!1;t.focusPath(e);let a=t.getFocusedIndex();if(a<0)return!1;let o=t.getVisibleRows(a,a)[0]??null;if(o==null)return!1;let l=lr(i,q),u=t.getVisibleCount()*s,d=r===`sticky-parents`?o.ancestorPaths.length*s:ti({controller:t,itemHeight:s,overscan:c,scrollTop:i.scrollTop,stickyFolders:h,viewportHeight:l}).snapshot.sticky.height;return D.current=!0,mr(i,a,s,l,u,d),E.current(),ke.current=n?e:null,!0},[t,s,c,q,h]),Pt=()=>y.current===!0||F.current!=null||de.current===!0,Ft=e=>typeof window.requestAnimationFrame==`function`?window.requestAnimationFrame(()=>{e()}):window.setTimeout(e,16),It=e=>{if(e!=null){if(typeof window.cancelAnimationFrame==`function`){window.cancelAnimationFrame(e);return}window.clearTimeout(e)}},Lt=()=>{se.current!=null&&(clearTimeout(se.current),se.current=null),j.current=null},Rt=()=>{M.current?.remove(),M.current=null},zt=()=>{It(A.current),A.current=null,ce.current=null},Bt=e=>{let t=S.current?.getRootNode();if(t instanceof ShadowRoot){t.append(e);return}document.body.append(e)},Vt=()=>{ue.current?.(),ue.current=null,F.current!=null&&(clearTimeout(F.current),F.current=null),de.current=!1,fe.current=null,pe.current=null,P.current!=null&&(P.current.setAttribute(`draggable`,`true`),P.current.style.removeProperty(`touch-action`),P.current=null),Rt(),Lt(),zt(),N.current=null},Ht=(e,n)=>{let r=S.current?.getRootNode(),i=ii(ni(r instanceof ShadowRoot?r:document,e,n));return t.setDragTarget(i),t.getDragSession()?.target??null},Ut=e=>{let n=t.getDragAndDropConfig()?.openOnDropDelay??800;if(e==null||e.kind!==`directory`||e.directoryPath==null||n<=0){Lt();return}let r=t.getItem(e.directoryPath),i=ui(r)?r:null;if(i==null||i.isExpanded()){Lt();return}let a=`${e.directoryPath}::${e.flattenedSegmentPath??``}`;j.current!==a&&(Lt(),j.current=a,se.current=setTimeout(()=>{let n=t.getDragSession()?.target;n?.kind!==`directory`||n.directoryPath!==e.directoryPath||n.flattenedSegmentPath!==e.flattenedSegmentPath||i.expand()},n))},Wt=()=>{A.current=null;let e=ce.current,n=C.current;if(e==null||n==null||t.getDragSession()==null)return;let r=n.getBoundingClientRect(),i=si(e.clientY,r);if(i===0)return;let a=Math.max(0,n.scrollHeight-n.clientHeight),o=Math.max(0,Math.min(a,n.scrollTop+i));o!==n.scrollTop&&(n.scrollTop=o,E.current()),Ut(Ht(e.clientX,e.clientY)),A.current=Ft(Wt)},Gt=(e,t)=>{ce.current={clientX:e,clientY:t},A.current??=Ft(Wt)},Kt=(e,n,r)=>{let i=e.currentTarget;if(i!=null){if(Vt(),Rt(),Lt(),zt(),t.startDrag(r)===!1){e.preventDefault();return}if(N.current=n,e.dataTransfer!=null&&(e.dataTransfer.effectAllowed=`move`,e.dataTransfer.dropEffect=`move`,e.dataTransfer.setData(`text/plain`,r),oi())){let t=ai(i),n=i.getBoundingClientRect();Object.assign(t.style,{height:`${n.height}px`,opacity:`0.85`,transform:`translate3d(-9999px, 0px, 0)`,width:`${n.width}px`}),Bt(t),M.current=t,e.dataTransfer.setDragImage(t,Math.max(0,e.clientX-n.left),Math.max(0,e.clientY-n.top))}}},qt=()=>{Rt(),Lt(),zt(),N.current=null,t.cancelDrag()},Jt=(e,n,r)=>{if(F.current!=null||de.current)return;let i=e.touches[0],a=e.currentTarget;if(i==null||a==null)return;pe.current={clientX:i.clientX,clientY:i.clientY},P.current=a,a.setAttribute(`draggable`,`false`);let o=(e={})=>{let t=e.restoreNativeDraggable??!de.current;F.current!=null&&(clearTimeout(F.current),F.current=null),document.removeEventListener(`touchmove`,s),document.removeEventListener(`touchend`,c),document.removeEventListener(`touchcancel`,c),ue.current===o&&(ue.current=null),t&&(a.setAttribute(`draggable`,`true`),P.current===a&&(P.current=null),pe.current=null)},s=e=>{let t=e.touches[0],n=pe.current;if(t==null||n==null)return;let r=t.clientX-n.clientX,i=t.clientY-n.clientY;r*r+i*i<=Ii*Ii||o()},c=()=>{o()};document.addEventListener(`touchmove`,s,{passive:!0}),document.addEventListener(`touchend`,c),document.addEventListener(`touchcancel`,c),ue.current=o,F.current=setTimeout(()=>{if(o({restoreNativeDraggable:!1}),t.startDrag(r)===!1){a.setAttribute(`draggable`,`true`),P.current===a&&(P.current=null),pe.current=null;return}de.current=!0,P.current=a,a.setAttribute(`draggable`,`false`),a.style.setProperty(`touch-action`,`none`),N.current=n;let e=a.getBoundingClientRect(),s=ai(a);Object.assign(s.style,{height:`${e.height}px`,opacity:`0.85`,transform:`translate3d(${e.left}px, ${e.top}px, 0)`,width:`${e.width}px`}),Bt(s),M.current=s,fe.current={x:i.clientX-e.left,y:i.clientY-e.top};let c=e=>{let t=e.touches[0];if(t==null)return;e.preventDefault();let n=fe.current;n!=null&&M.current!=null&&(M.current.style.transform=`translate3d(${t.clientX-n.x}px, ${t.clientY-n.y}px, 0)`),Ut(Ht(t.clientX,t.clientY)),Gt(t.clientX,t.clientY)},l=e=>{let n=e.changedTouches[0];n!=null&&Ht(n.clientX,n.clientY),t.completeDrag(),Vt()},u=()=>{t.cancelDrag(),Vt()};ue.current=()=>{document.removeEventListener(`touchmove`,c),document.removeEventListener(`touchend`,l),document.removeEventListener(`touchcancel`,u)},document.addEventListener(`touchmove`,c,{passive:!1}),document.addEventListener(`touchend`,l),document.addEventListener(`touchcancel`,u)},Fi)},Yt=e=>{if(z!=null){if(e.key===`Escape`){kt(),e.preventDefault(),e.stopPropagation();return}zi.has(e.key)&&(e.preventDefault(),e.stopPropagation());return}if(tt.isActive()){if(e.key===`Escape`)tt.cancel();else if(e.key===`Enter`)tt.commit();else return;R(`focus`),I(e=>e+1),e.preventDefault(),e.stopPropagation();return}if(l&&e.key===`F2`){Mt(U??void 0),e.preventDefault(),e.stopPropagation();return}if(it){if(e.key===`Escape`)k.current=!1,oe.current=null,t.closeSearch();else if(e.key===`Enter`){let e=t.getFocusedPath();e!=null&&t.selectOnlyPath(e);let n=C.current,r=lr(n,q);oe.current=W<0||n==null?null:Math.max(0,Math.min(W*s-n.scrollTop,Math.max(0,r-s))),k.current=!0,t.closeSearch()}else if(e.key===`ArrowDown`)t.focusNextSearchMatch();else if(e.key===`ArrowUp`)t.focusPreviousSearchMatch();else return;R(`focus`),I(e=>e+1),e.preventDefault(),e.stopPropagation();return}if(f&&fi(e)){t.openSearch(e.key),I(e=>e+1),e.preventDefault(),e.stopPropagation();return}let n=V&&mi(e),r=hi(e,V),i=r&&S.current!=null?cr(S.current):null,a=r?new Set(Si(S.current)):new Set,o=i?.dataset.fileTreeStickyPath??null,c=i?.dataset.fileTreeStickyRow===`true`&&o!=null;if(c&&o!==U&&a.has(o)){let e=C.current;Fe(o,e?.scrollTop??null),t.focusPath(o)}let u=t.getFocusedPath(),d=t.getFocusedIndex(),p=t.getFocusedItem();if(p==null)return;let m=ui(p)?p:null,h=u!=null&&(xt.has(u)||c&&o===u&&a.has(u)),g=e.key===`ArrowDown`||e.key===`ArrowUp`||e.key===`ArrowRight`&&m!=null&&m.isExpanded(),_=e.key===`ArrowLeft`&&h&&m!=null&&m.isExpanded(),v=C.current,y=!0;if(e.shiftKey&&e.key===`ArrowDown`)t.extendSelectionFromFocused(1);else if(e.shiftKey&&e.key===`ArrowUp`)t.extendSelectionFromFocused(-1);else if(n&&u!=null&&d>=0){let e=t.getVisibleRows(d,d)[0]??null,n=xi(u,T.current,w.current);e==null||n==null?y=!1:jt(e,u)}else if((e.ctrlKey||e.metaKey)&&di(e))t.toggleFocusedSelection();else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()===`a`)t.selectAllVisiblePaths();else switch(e.key){case`ArrowDown`:t.focusNextItem();break;case`ArrowUp`:t.focusPreviousItem();break;case`ArrowRight`:m==null||m.isExpanded()?t.focusNextItem():m.expand();break;case`ArrowLeft`:m!=null&&m.isExpanded()?m.collapse():t.focusParentItem();break;case`Home`:t.focusFirstItem();break;case`End`:t.focusLastItem();break;default:y=!1}if(!y)return;R(`focus`);let b=t.getFocusedPath(),x=b!=null&&(xt.has(b)||a.has(b)),ee=g&&b!==u,E=n&&c&&o===u&&b===u;if((h||E)&&b!=null&&(ee&&x||E))Fe(b,v?.scrollTop??null),D.current=!0,L(e=>e===b?e:b);else{let t=e.key===`ArrowUp`&&h&&b!==u;b!=null&&(t||_&&b===u)?(Ie(b,wi(S.current,v,i,u,s,bt,q)),D.current=!0,L(e=>e===b?e:b)):Pe()}I(e=>e+1),e.preventDefault(),e.stopPropagation()};kr(()=>{if(!(!f||!it)){if(Le.current){Le.current=!1;return}sr(ee.current)}},[it,f]),kr(()=>{let e=x.current;switch(_r({hasRenderedInput:e!=null,previousRenamingPath:O.current,renamingPath:nt})){case`reset`:O.current=null;return;case`reveal-canonical`:nt!=null&&Nt(nt,{restoreTreeFocus:!1,targetOffset:`live-overlay`});return;case`ignore`:return;case`focus-input`:e!=null&&(ke.current=null,O.current=nt,sr(e),e.select());return}},[ht.end,ht.start,nt,Nt,xt]),kr(()=>{let e=S.current;if(e==null)return;let t=null,n=()=>{t!=null&&(clearTimeout(t),t=null)},r=()=>{let t=cr(e)?.dataset.itemPath??null;L(e=>e===t?e:t)},i=()=>{n(),D.current=!0,r()},a=i=>{let a=i.relatedTarget;if(a==null){n(),t=setTimeout(()=>{if(t=null,cr(e)!=null){r();return}D.current=!1,L(null)},0);return}if(!(a instanceof Node)||!e.contains(a)){n(),D.current=!1,L(null);return}let o=a instanceof HTMLElement?a.dataset.itemPath??null:null;L(e=>e===o?e:o)};return e.addEventListener(`focusin`,i),e.addEventListener(`focusout`,a),()=>{n(),e.removeEventListener(`focusin`,i),e.removeEventListener(`focusout`,a)}},[]),kr(()=>{let e=S.current;e!=null&&(K.physical.scrollTop<=0?e.dataset.scrollAtTop=`true`:delete e.dataset.scrollAtTop)},[K.physical.scrollTop]),kr(()=>{let e=null,n=C.current,r=b.current,i=S.current;if(n==null)return;te.current=lr(n,g);let a=()=>{let e=t.getVisibleCount(),r=ur(te.current,g),i=Math.max(0,e*s-r);n.scrollTop>i&&(n.scrollTop=i),Ue(ti({controller:t,itemHeight:s,overscan:c,scrollTop:Math.min(n.scrollTop,i),stickyFolders:h,viewportHeight:r}))};if(!re.current){re.current=!0;let e=t.getFocusedIndex();if(e>=0){let r=ur(te.current,g),i=t.getVisibleRows(e,e)[0]??null;fr(n,e,s,r,h&&i!=null?Math.max(0,Math.min(i.ancestorPaths.length*s,Math.max(0,r-s))):0)}}E.current=a;let o=!1,l=t.subscribe(()=>{o?I(e=>e+1):o=!0,a()}),u=()=>{Ne.current!==!0&&(r!=null&&(r.dataset.isScrolling??=``),i!=null&&(i.dataset.isScrolling??=``),y.current=!0,e!=null&&clearTimeout(e),e=setTimeout(()=>{r!=null&&delete r.dataset.isScrolling,i!=null&&delete i.dataset.isScrolling,y.current=!1,Ee(e=>e+1),e=null},50))},d=null,f=()=>{i!=null&&delete i.dataset.overlayReveal,d!=null&&(clearTimeout(d),d=null)},p=()=>{i==null||Ne.current===!0||n.scrollTop>0||(i.dataset.overlayReveal=`true`,d!=null&&clearTimeout(d),d=setTimeout(()=>{f()},200))},m=()=>{if(a(),n.scrollTop>0&&f(),Oe.current!=null&&y.current&&Ot.current(),Ne.current===!0){y.current=!1;return}be(e=>e==null?e:null),u()},_=()=>{u(),p()},v=new Set([`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,`PageUp`,`PageDown`,`Home`,`End`,` `,`Spacebar`]),x=e=>{v.has(e.key)&&_()};n.addEventListener(`scroll`,m,{passive:!0}),n.addEventListener(`wheel`,_,{passive:!0}),n.addEventListener(`touchmove`,_,{passive:!0}),n.addEventListener(`keydown`,x);let ee=typeof ResizeObserver<`u`?new ResizeObserver(e=>{te.current=(e[0]==null?null:dr(e[0]))??lr(n,g),a()}):null;return ee?.observe(n),()=>{E.current=()=>{},l(),n.removeEventListener(`scroll`,m),n.removeEventListener(`wheel`,_),n.removeEventListener(`touchmove`,_),n.removeEventListener(`keydown`,x),e!=null&&clearTimeout(e),d!=null&&clearTimeout(d),r!=null&&delete r.dataset.isScrolling,i!=null&&(delete i.dataset.isScrolling,delete i.dataset.overlayReveal),y.current=!1,te.current=null,ee?.disconnect()}},[t,g,s,c,h]),kr(()=>{V||z==null||kt(!1)},[kt,V,z]);let Xt=Ar(()=>z==null?null:`${z.path}::${z.source}`,[z]);kr(()=>{if(Xt==null){m?.clearSlotContent(_e);return}let t=Oe.current;if(t==null)return;let n=v.current??_.current;if(n==null)return;let r={anchorElement:n,anchorRect:t.anchorRect??_i(n.getBoundingClientRect()),close:e=>{Ot.current(e?.restoreFocus??!0)},restoreFocus:()=>{Dt.current&&Et.current(Oe.current?.path??null)}},i=e?.contextMenu?.render?.(t.item,r)??null;return m?.setSlotContent(_e,i),e?.contextMenu?.onOpen?.(t.item,r),Ai(i),queueMicrotask(()=>{i==null||!i.isConnected||document.activeElement===i&&Ai(i)}),()=>{m?.clearSlotContent(_e)}},[Xt,e?.contextMenu,m]),kr(()=>{z!=null&&t.getItem(z.path)==null&&kt()},[kt,z,t]),kr(()=>{if(z==null)return;let e=S.current?.getRootNode(),t=e instanceof ShadowRoot?e.host:S.current,n=e=>{let n=e.target;n instanceof Node&&(gi(e)||_.current?.contains(n)!==!0&&t?.contains(n)!==!0&&kt())},r=e=>{e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),kt())};return document.addEventListener(`mousedown`,n,!0),document.addEventListener(`keydown`,r,!0),()=>{document.removeEventListener(`mousedown`,n,!0),document.removeEventListener(`keydown`,r,!0)}},[kt,z]),kr(()=>{let e=C.current,n=S.current;if(e==null||n==null){ae.current=U;return}let r=U==null?null:w.current.get(U)??null,i=cr(n),a=i?.dataset.itemPath??null,o=rt&&x.current===i,c=f&&ee.current===i,l=k.current&&!it,u=oe.current??0,d=ke.current,p=Ae.current,m=B.current,g=je.current,_=i!=null,v=D.current||_,y=ae.current!==U,b=p!=null&&p===U&&U!=null,T=!1,te=!1;if(ot!=null&&ot.id!==ne.current){ne.current=ot.id;let n=ot.visibleIndex,r=t.getVisibleRows(n,n)[0]??null;if(r!=null){let t=h?Math.max(0,Math.min(r.ancestorPaths.length*s,Math.max(0,q-s))):bt;T=!0,te=pr(e,n,s,q,vt,ot.offset,t)}t.clearScrollRequest(ot.id)}let re=!T&&l&&mr(e,W,s,q,vt,u),ie=!T&&d!=null&&d===U&&mr(e,W,s,q,vt,bt),O=!T&&m!=null&&m.path===U&&mr(e,W,s,q,vt,m.viewportOffset),A=!T&&g!=null&&g.path===U&&e.scrollTop!==g.scrollTop;if(A&&(e.scrollTop=g.scrollTop),(A||te||ie||O||re||v&&y&&d!==U&&!b&&fr(e,W,s,q,bt))&&E.current(),T){ae.current=U;return}if(!v){ae.current=U;return}if(o){ae.current=U;return}if(c&&!l){ae.current=U;return}if(r==null){l&&W>=0&&(mr(e,W,s,q,vt,u),E.current()),ae.current=U;return}(y||l||d===U||p===U||m?.path===U||g?.path===U||a==null||a!==U)&&(sr(r),d===U&&(ke.current=null),p===U&&(Ae.current=null),m?.path===U&&(B.current=null),g?.path===U&&(je.current=null),k.current=!1,oe.current=null),ae.current=U},[t,W,U,St,s,rt,it,ht,q,f,ot,h,bt,vt,mt]);let Zt=W>=0&&W>=K.visible.startIndex&&W<=K.visible.endIndex,Qt=U!=null&&gt.some(e=>Qr(e.row)===U),$t=Zt||Qt,en=Ke&&D.current===!0&&$t?U:null,tn=we===`pointer`?ye:null,nn=z?.path??Me.current??tn??en??ye,rn=z?.source===`right-click`;kr(()=>{y.current&&z==null||At(Qe(nn))},[z,Qe,ht,q,Te,gt,nn,At,mt]);let J=Z(e=>{if(y.current||gi(e))return;let t=e.target;if(!(t instanceof HTMLElement)||t.closest?.(`[data-type="context-menu-trigger"]`)!=null)return;let n=t.closest?.(`[data-file-tree-sticky-row="true"]`),r=t.closest?.(`[data-type="item"]`),i=n instanceof HTMLElement?n.dataset.fileTreeStickyPath??null:r instanceof HTMLElement?r.dataset.itemPath??null:null;i!=null&&R(e=>e===`pointer`?e:`pointer`),be(e=>e===i?e:i)},[]),an=Z(()=>{be(null)},[]);kr(()=>{if(!G)return;let e=()=>{Vt(),t.cancelDrag()};return window.addEventListener(`dragend`,e),()=>{window.removeEventListener(`dragend`,e),Vt(),t.cancelDrag()}},[t,G]);let on=e=>{if(!G||t.getDragSession()==null||de.current)return;let n=ii(e.target instanceof HTMLElement?e.target:null);t.setDragTarget(n),Ut(t.getDragSession()?.target??null),Gt(e.clientX,e.clientY),e.dataTransfer!=null&&(e.dataTransfer.dropEffect=`move`),e.preventDefault()},sn=e=>{if(!G||t.getDragSession()==null||de.current)return;let n=e.relatedTarget;n instanceof Node&&S.current?.contains(n)===!0||(Lt(),zt(),t.setDragTarget(null))},cn=e=>{!G||t.getDragSession()==null||de.current||(e.preventDefault(),Ht(e.clientX,e.clientY),t.completeDrag(),Rt(),Lt(),zt(),N.current=null)},ln=K.window.height,un=K.window.offsetTop,dn=Math.min(0,q-ln),fn=Math.min(0,q-ln-bt),pn=he===U||k.current,mn=U!=null&&pn&&!St&&W>=0?mt[W]??t.getVisibleRows(W,W)[0]??null:null,hn=mn==null?null:hr(W,s,ht,ln),gn=N.current,_n=ut!=null&&gn!=null&&gn.path===ut&&gn.index>=ht.start&&gn.index<=ht.end,vn=ut!=null&&gn!=null&&gn.path===ut&&!_n&&gn.path!==mn?.path?gn:null,yn=vn==null?null:hr(vn.index,s,ht,ln),bn=pi((W>=0?mt[W]??t.getVisibleRows(W,W)[0]??null:null)?.ancestorPaths.at(-1)??null),xn=it&&U!=null?Di(o,U,!St):void 0,Cn=z?.path??(it?U:he),wn=z?.path??ye,Tn=Qe(nn),En=V&&Ke&&!rn&&!rt&&Tn!=null&&xe!=null&&nn!=null,Dn=V&&(En||z!=null),On=z?.anchorRect,kn=On==null&&Tn!=null&&xe!=null&&(z!=null||En)?xe:null,An=On==null?kn==null?void 0:{top:`${kn}px`}:{left:`${On.left}px`,position:`fixed`,right:`auto`,top:`${On.top}px`},jn=rn?{opacity:`0`}:void 0,Mn=Z((e,n,r,i)=>{let a=Cr({event:{ctrlKey:e.ctrlKey,metaKey:e.metaKey,shiftKey:e.shiftKey},isDirectory:n.kind===`directory`,isSearchOpen:it,mode:i}),o=a.toggleDirectory&&n.kind===`directory`,s=o?t.resolveMountedDirectoryPathFromInput(r):null;if(o&&s==null)return;let c=s??r;switch(a.selection.kind){case`range`:t.selectPathRange(c,a.selection.additive);break;case`toggle`:t.togglePathSelectionFromInput(c);break;case`single`:t.selectOnlyMountedPathFromInput(c);break}let l=e.currentTarget instanceof HTMLElement?e.currentTarget:null,u=n.index>=K.visible.startIndex&&n.index<=K.visible.endIndex,d=i===`flow`&&u&&l!=null&&l.dataset.itemParked!==`true`;t.focusMountedPathFromInput(c),d&&(D.current=!0,L(e=>e===c?e:c),R(`focus`)),o&&t.toggleMountedDirectoryFromInput(c),a.closeSearch&&t.closeSearch(),a.revealCanonical&&Nt(c,{targetOffset:`sticky-parents`})},[t,it,K.visible.endIndex,K.visible.startIndex,Nt]),Nn=()=>{if(y.current||!Ke||nn==null||Tn==null)return;let e=t.getItem(nn);e!=null&&(At(Tn),Dt.current=!0,De({anchorRect:null,item:{kind:e.isDirectory()?`directory`:`file`,name:Tn.getAttribute(`aria-label`)??nn,path:e.getPath()},path:e.getPath(),source:`button`}))},Pn={contextHoverPath:wn,contextMenuButtonTriggerEnabled:Ke,contextMenuButtonVisibility:qe,contextMenuEnabled:V,contextMenuRightClickEnabled:Je,contextMenuTriggerMode:H,controller:t,directoriesWithGitChanges:i,dragAndDropEnabled:G,draggedPathSet:ct,dragTarget:lt,gitLaneActive:$e,gitStatusByPath:n,handleRowDragEnd:qt,handleRowDragStart:Kt,handleRowTouchStart:Jt,ignoredGitDirectories:r,ignoredInheritanceCache:me,instanceId:o,itemHeight:s,onKeyDown:Yt,onRowClick:Mn,openContextMenuForRow:jt,registerButton:Ye,registerRenameInput:Ze,renameView:tt,renderDecorationForRow:Ct,resolveIcon:et,shouldSuppressContextMenu:Pt,visualFocusPath:Cn},Fn={...Pn,registerButton:Xe};return Y(`div`,{ref:S,id:dt,"data-file-tree-context-menu-button-visibility":V&&Ke?qe:void 0,"data-file-tree-context-menu-trigger-mode":V?H:void 0,"data-file-tree-has-context-menu-action-lane":V&&Ke?`true`:void 0,"data-file-tree-has-git-lane":$e?`true`:void 0,"data-file-tree-virtualized-root":`true`,onDragLeave:G?sn:void 0,onDragOver:G?on:void 0,onDrop:G?cn:void 0,onKeyDown:Yt,onPointerLeave:V?an:void 0,onPointerOver:V?J:void 0,role:`tree`,tabIndex:-1,style:{outline:`none`,position:`relative`},children:[Y(`style`,{"data-file-tree-guide-style":`true`,dangerouslySetInnerHTML:{__html:bn}}),Y(`slot`,{name:ge,"data-type":`header-slot`}),f?Y(`div`,{"data-file-tree-search-container":!0,"data-open":it?`true`:`false`,children:Y(`input`,{ref:ee,"aria-activedescendant":xn,"aria-controls":dt,placeholder:`Search…`,"data-file-tree-search-input":!0,"data-file-tree-search-input-fake-focus":Re?`true`:void 0,value:at,onBlur:()=>{d===`retain`&&!Be.current||t.closeSearch()},onFocus:Ve,onPointerDown:Ve,onInput:e=>{Ve();let n=e.currentTarget;t.setSearch(n.value)}})}):null,Y(`div`,{ref:C,"data-file-tree-virtualized-scroll":`true`,children:[h&&We&&gt.length>0?Y(`div`,{"aria-hidden":`true`,"data-file-tree-sticky-overlay":`true`,children:Y(`div`,{"data-file-tree-sticky-overlay-content":`true`,style:{height:`${ft}px`},children:gt.map((e,t)=>Mi(Fn,e.row,`sticky:${Qr(e.row)}`,{mode:`sticky`,style:{left:`0`,position:`absolute`,right:`0`,top:`${e.top}px`,zIndex:`${gt.length-t}`}}))})}):null,Y(`div`,{ref:b,"data-file-tree-virtualized-list":`true`,style:{height:`${vt}px`},children:[Y(`div`,{"data-file-tree-virtualized-sticky-offset":`true`,"aria-hidden":`true`,style:{height:`${un}px`}}),Y(`div`,{"data-file-tree-virtualized-sticky":`true`,style:{height:`${ln}px`,top:`${dn}px`,bottom:`${fn}px`},children:[Ni(Pn,ht,xt),mn!=null&&hn!=null?Mi(Pn,mn,`parked:${mn.path}`,{isParked:!0,style:{left:`0`,opacity:`0`,pointerEvents:ut===mn.path?`none`:void 0,position:`absolute`,right:`0`,top:`${hn}px`}}):null,vn!=null&&yn!=null?Mi(Pn,vn,`parked-drag:${vn.path}`,{isParked:!0,style:{left:`0`,opacity:`0`,pointerEvents:`none`,position:`absolute`,right:`0`,top:`${yn}px`}}):null]})]})]}),V?Y(`div`,{ref:_,"data-type":`context-menu-anchor`,"data-visible":Dn?`true`:`false`,style:An,children:[Y(`button`,{ref:v,type:`button`,"data-type":ve,"aria-label":`Options`,"aria-haspopup":`menu`,"aria-expanded":z==null?`false`:`true`,"data-visible":En?`true`:`false`,onMouseDown:e=>{e.preventDefault()},onClick:e=>{if(e.preventDefault(),e.stopPropagation(),z!=null){kt();return}Nn()},tabIndex:-1,style:jn,children:Y(Sn,{...et(`file-tree-icon-ellipsis`)})}),z==null?null:Y(`slot`,{name:_e})]}):null,z==null?null:Y(`div`,{"data-type":`context-menu-wash`,"aria-hidden":`true`,onMouseDownCapture:e=>{e.preventDefault(),kt()},onTouchStartCapture:e=>{e.preventDefault(),e.stopPropagation(),kt()},onTouchMoveCapture:e=>{e.preventDefault(),e.stopPropagation()},onWheelCapture:e=>{e.preventDefault(),e.stopPropagation()}})]})}var Fi,Ii,Li,Ri,zi,Bi=e((()=>{L(),A(),Ce(),Ct(),En(),zn(),Qn(),nr(),gr(),vr(),br(),Sr(),wr(),yn(),Xr(),xn(),Fi=400,Ii=10,Li=40,Ri=18,zi=new Set([`ArrowDown`,`ArrowLeft`,`ArrowRight`,`ArrowUp`,`End`,`Home`,`PageDown`,`PageUp`])}));function Vi(e,t){Wi.renderRoot(e,t)}function Hi(e,t){Wi.hydrateRoot(e,t)}function Ui(e){Wi.unmountRoot(e)}var Wi,Gi=e((()=>{Bi(),yn(),Wi={hydrateRoot:(e,t)=>{rn(Nt(Pi,t),e)},renderRoot:(e,t)=>{nn(Nt(Pi,t),e)},unmountRoot:e=>{nn(null,e)}}})),Ki,qi=e((()=>{Ki=class{#e=new Map;#t=null;clearAll(){for(let e of this.#e.values())e.remove();this.#e.clear()}clearSlotContent(e){let t=this.#n(e);t!=null&&(t.remove(),this.#e.delete(e))}setHost(e){if(this.#t=e,e!=null){this.#i(e);for(let[e,t]of this.#e)this.#r(e,t)}}setSlotContent(e,t){let n=this.#n(e);if(n===t){t!=null&&(this.#e.set(e,t),this.#r(e,t));return}if(n?.remove(),t==null){this.#e.delete(e);return}this.#e.set(e,t),this.#r(e,t)}setSlotHtml(e,t){let n=t?.trim()??``;if(n.length===0){this.setSlotContent(e,null);return}let r=this.#n(e);if(r!=null&&r.innerHTML===n){this.#e.set(e,r),this.#r(e,r);return}let i=document.createElement(`div`);i.innerHTML=n,this.setSlotContent(e,i)}#n(e){let t=this.#e.get(e)??null;if(t!=null)return t;let n=this.#t;if(n==null)return null;for(let t of Array.from(n.children))if(t instanceof HTMLElement&&t.dataset.fileTreeManagedSlot===e)return t;return null}#r(e,t){t.slot=e,t.dataset.fileTreeManagedSlot=e,this.#t!=null&&t.parentNode!==this.#t&&this.#t.appendChild(t)}#i(e){for(let t of Array.from(e.children)){if(!(t instanceof HTMLElement))continue;let e=t.dataset.fileTreeManagedSlot;e==null||this.#e.has(e)||this.#e.set(e,t)}}}})),Ji=e((()=>{yn(),Array.isArray}));function Yi(e){return e!=null&&e.length>0?e:(ea+=1,`pst_ft_${ea}`)}function Xi({initialVisibleRowCount:e,itemHeight:t}){return e==null?420:Math.max(0,e)*(t??Se)}function Zi(e){if(typeof document>`u`)return;let t=document.createElement(`div`);t.innerHTML=e;let n=t.querySelector(`svg`);return n instanceof SVGElement?n:void 0}function Qi(e){return e.querySelector(`#file-tree-icon-chevron`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-file`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-dot`)instanceof SVGElement&&e.querySelector(`#file-tree-icon-lock`)instanceof SVGElement}function $i(e){return Array.from(e.children).filter(e=>e instanceof SVGElement)}var ea,ta,na=e((()=>{oe(),L(),k(),xe(),Ce(),De(),Fe(),Ct(),jt(),Gi(),qi(),yn(),Ji(),ea=0,ta=class{static LoadedCustomComponent=!0;#e;#t;#n;#r;#i;#a;#o;#s;#c;#l=new Ki;#u;#d;#f;#p;#m;#h;#g;#_;#v;#y=null;#b;#x=!1;#S=!1;constructor(e){let{composition:t,density:n,fileTreeSearchMode:r,gitStatus:i,id:a,initialSearchQuery:o,icons:s,itemHeight:c,onSearchChange:l,onSelectionChange:u,overscan:d,renderRowDecoration:f,renaming:p,search:m,searchBlurBehavior:h,searchFakeFocus:g,stickyFolders:_,unsafeCSS:v,initialVisibleRowCount:y,...b}=e;this.#e=t,this.#n=Yi(a),this.#p=At(i),this.#m=s,this.#h=v,this.#r=u,this.#i=f,this.#a=p!=null&&p!==!1,this.#o=h,this.#s=m===!0,this.#c=g===!0,this.#u=ye(n,c),this.#d={itemHeight:this.#u.itemHeight,overscan:d,stickyFolders:_,initialVisibleRowCount:y},this.#t=new St({...b,fileTreeSearchMode:r,initialSearchQuery:o,onSearchChange:l,renaming:p}),this.#v=this.#t.getSelectionVersion(),this.#y=this.#r==null?null:this.subscribe(()=>{this.#D()})}unmount(){this.#b!=null&&(Ui(this.#b),delete this.#b.dataset.fileTreeVirtualizedWrapper,this.#b=void 0),this.#l.clearAll(),this.#l.setHost(null),this.#f!=null&&(delete this.#f.dataset.fileTreeVirtualized,this.#I(this.#f),this.#f=void 0)}cleanUp(){this.unmount(),this.#y?.(),this.#y=null,this.#t.destroy()}getFileTreeContainer(){return this.#f}getItem(e){return this.#t.getItem(e)}getFocusedItem(){return this.#t.getFocusedItem()}getFocusedPath(){return this.#t.getFocusedPath()}getSelectedPaths(){return this.#t.getSelectedPaths()}getComposition(){return this.#e}getItemHeight(){return this.#u.itemHeight}getDensityFactor(){return this.#u.factor}subscribe(e){let t=!1;return this.#t.subscribe(()=>{if(!t){t=!0;return}e()})}focusPath(e){this.#t.focusPath(e)}scrollToPath(e,t){this.#t.scrollToPath(e,t)}focusNearestPath(e){return this.#t.focusNearestPath(e)}add(e){this.#t.add(e)}batch(e){this.#t.batch(e)}move(e,t,n){this.#t.move(e,t,n)}onMutation(e,t){return this.#t.onMutation(e,t)}setSearch(e){this.#t.setSearch(e)}openSearch(e){this.#t.openSearch(e)}closeSearch(){this.#t.closeSearch()}isSearchOpen(){return this.#t.isSearchOpen()}getSearchValue(){return this.#t.getSearchValue()}getSearchMatchingPaths(){return this.#t.getSearchMatchingPaths()}focusNextSearchMatch(){this.#t.focusNextSearchMatch()}focusPreviousSearchMatch(){this.#t.focusPreviousSearchMatch()}startRenaming(e,t){return this.#t.startRenaming(e,t)}remove(e,t){this.#t.remove(e,t)}resetPaths(e,t){this.#t.resetPaths(e,t)}setComposition(e){this.#e=e;let t=this.#T();t!=null&&(this.#O(),Vi(t.wrapper,this.#w()))}setGitStatus(e){this.#p=At(e,this.#p);let t=this.#T();t!=null&&Vi(t.wrapper,this.#w())}setIcons(e){this.#m=e;let t=this.#T();t!=null&&(this.#E(t.host,t.wrapper),Vi(t.wrapper,this.#w()))}hydrate({fileTreeContainer:e}){let t=this.#P(e),n=this.#N(t);this.#O(),Hi(n,this.#w())}render({containerWrapper:e,fileTreeContainer:t}){let n=this.#P(t??this.#f,e),r=this.#N(n);this.#O(),Vi(r,this.#w())}#C(){return{initialViewportHeight:Xi({initialVisibleRowCount:this.#d.initialVisibleRowCount,itemHeight:this.#d.itemHeight}),itemHeight:this.#d.itemHeight,overscan:this.#d.overscan,stickyFolders:this.#d.stickyFolders}}#w(){return{composition:this.#e,controller:this.#t,gitStatusByPath:this.#p?.statusByPath,ignoredGitDirectories:this.#p?.ignoredDirectoryPaths,directoriesWithGitChanges:this.#p?.directoriesWithChanges,icons:this.#m,instanceId:this.#n,renamingEnabled:this.#a,renderRowDecoration:this.#i,searchBlurBehavior:this.#o,searchEnabled:this.#s,searchFakeFocus:this.#c,slotHost:this.#l,...this.#C()}}#T(){let e=this.#f,t=this.#b;return e==null||t==null?null:{host:e,wrapper:t}}#E(e,t){let n=e.shadowRoot;n!=null&&(this.#k(n),this.#A(n)),this.#j(t)}#D(){let e=this.#r;if(e==null)return;let t=this.#t.getSelectionVersion();t!==this.#v&&(this.#v=t,e(this.#t.getSelectedPaths()))}#O(){let e=this.#e?.header?.render;if(e!=null){this.#l.setSlotContent(ge,e());return}this.#l.setSlotHtml(ge,this.#e?.header?.html??null)}#k(e){let t=$i(e).find(e=>Qi(e)),n=Zi(M(ce(this.#m).set));n!=null&&(t!=null&&t.outerHTML===n.outerHTML||(t==null?e.prepend(n):t.replaceWith(n)))}#A(e){let t=$i(e),n=t.find(e=>Qi(e)),r=t.filter(e=>e!==n),i=ce(this.#m).spriteSheet?.trim()??``;if(i.length===0){for(let e of r)e.remove();return}let a=Zi(i);if(a==null){for(let e of r)e.remove();return}if(!(r.length===1&&r[0].outerHTML===a.outerHTML)){for(let e of r)e.remove();e.appendChild(a)}}#j(e){let t=ce(this.#m);t.colored&&j(t.set)?e.dataset.fileTreeColoredIcons=`true`:delete e.dataset.fileTreeColoredIcons}#M(e){let t=e.querySelector(`style[${F}]`);if(this.#g==null&&t instanceof HTMLStyleElement&&(this.#g=t),this.#h==null||this.#h===``){this.#g?.remove(),this.#g=void 0,this.#_=void 0;return}this.#g?.parentNode===e&&this.#_===this.#h||(this.#g??=document.createElement(`style`),this.#g.setAttribute(F,``),this.#g.parentNode!==e&&e.appendChild(this.#g),this.#g.textContent=Ee(this.#h),this.#_=this.#h)}#N(e){if(this.#b!=null)return this.#b;let t=e.shadowRoot;if(t==null)throw Error(`FileTree requires a shadow root`);let n=Array.from(t.children).filter(e=>e instanceof HTMLDivElement&&typeof e.dataset.fileTreeId==`string`&&e.dataset.fileTreeId.length>0),r=n.find(e=>e.dataset.fileTreeId===this.#n)??n[0];return r!=null&&(this.#n=r.dataset.fileTreeId??this.#n),this.#b=r??document.createElement(`div`),this.#b.dataset.fileTreeId=this.#n,this.#b.dataset.fileTreeVirtualizedWrapper=`true`,this.#E(e,this.#b),this.#b.parentNode!==t&&t.appendChild(this.#b),this.#b}#P(e,t){let n=e??this.#f??document.createElement(`file-tree-container`);t!=null&&n.parentNode!==t&&t.appendChild(n);let r=n.shadowRoot??n.attachShadow({mode:`open`});return Me(n,r),this.#M(r),n.dataset.fileTreeVirtualized=`true`,n.style.display=`flex`,this.#F(n),this.#l.setHost(n),this.#f=n,n}#F(e){e.style.getPropertyValue(`--trees-item-height`)===``&&(e.style.setProperty(`--trees-item-height`,`${String(this.#u.itemHeight)}px`),this.#x=!0),e.style.getPropertyValue(`--trees-density-override`)===``&&(e.style.setProperty(`--trees-density-override`,String(this.#u.factor)),this.#S=!0)}#I(e){this.#x&&=(e.style.removeProperty(`--trees-item-height`),!1),this.#S&&=(e.style.removeProperty(`--trees-density-override`),!1)}}}));function ra(e,t,n){let r=e==null?null:(0,la.jsx)(`div`,{slot:ge,children:e}),i=t!=null&&n!=null?(0,la.jsx)(`div`,{slot:_e,children:t(n.item,n.context)}):null;return r==null&&i==null?null:(0,la.jsxs)(la.Fragment,{children:[r,i]})}function ia(e,t){return typeof window>`u`&&t!=null?(0,la.jsxs)(la.Fragment,{children:[(0,la.jsx)(`template`,{shadowrootmode:`open`,dangerouslySetInnerHTML:{__html:t.shadowHtml}}),e]}):(0,la.jsx)(la.Fragment,{children:e})}function aa(e){let t=e.shadowRoot;return t?.querySelector(`[data-file-tree-id]`)instanceof HTMLElement||t?.querySelector(`[data-file-tree-id]`)instanceof SVGElement||e.querySelector(`template[shadowrootmode="open"]`)instanceof HTMLTemplateElement}function oa(e,t,n,r,i){let a={...e??{}};if(t!=null&&delete a.header,n){let t=e?.contextMenu,n=t?.onClose,o=t?.onOpen;a.contextMenu={...t??{},enabled:!0,onClose:()=>{n?.(),r()},onOpen:(e,t)=>{i(e,t),o?.(e,t)}},delete a.contextMenu.render}return a.header!=null||a.contextMenu!=null?a:void 0}function sa({header:e,id:t,model:n,preloadedData:r,renderContextMenu:i,...a}){let[o,s]=(0,ca.useState)(null),[c,l]=(0,ca.useState)(null),u=(0,ca.useRef)(n.getComposition()),d=(0,ca.useRef)(n);d.current!==n&&(d.current=n,u.current=n.getComposition());let f=i!=null,p=(0,ca.useCallback)(()=>{s(null)},[]),m=(0,ca.useCallback)((e,t)=>{s({context:t,item:e})},[]),h=u.current,g=(0,ca.useMemo)(()=>oa(h,e,f,p,m),[h,p,m,f,e]),_=(0,ca.useCallback)(e=>{l(e)},[]);(0,ca.useEffect)(()=>{f||s(null)},[f]),ua(()=>{n.setComposition(g)},[g,n]),ua(()=>{if(c!=null)return r!=null&&aa(c)?n.hydrate({fileTreeContainer:c}):n.render({fileTreeContainer:c}),()=>{n.unmount(),n.setComposition(h)}},[h,c,n,r]);let v=ia(ra(e,i,o),r),y=t??r?.id,b={"--trees-item-height":`${String(n.getItemHeight())}px`,"--trees-density-override":n.getDensityFactor(),...a.style};return(0,la.jsx)(P,{...a,id:y,ref:_,style:b,suppressHydrationWarning:r!=null,children:v})}var ca,la,ua,da=e((()=>{L(),ca=t(i(),1),la=a(),ua=typeof window>`u`?ca.useEffect:ca.useLayoutEffect}));function fa(e){let[t]=(0,pa.useState)(()=>new ta(e)),n=(0,pa.useRef)({timeout:null,model:t});return(0,pa.useEffect)(()=>{let{current:e}=n;return e.timeout!=null&&(clearTimeout(e.timeout),e.timeout=null),()=>{e.timeout=setTimeout(()=>e.model.cleanUp(),1)}},[]),{model:t}}var pa,ma=e((()=>{na(),pa=t(i(),1)})),ha=e((()=>{da(),ma()}));function ga({isLoadingOpenTargets:e=!1,onAddToChat:t,onCopyPath:n,onOpenInTarget:i,onSaveAs:a,primaryTarget:o,targetPath:s,visibleTargets:c}){if(s==null)return[];let l=n==null?`workspace`:`review`,u=[];return a!=null&&u.push({id:`save-as`,message:r({id:`markdown.fileReference.saveAs`,defaultMessage:`Save as…`,description:`Context menu action to save a file tree item to a user-selected location`}),onSelect:()=>{a(s)}}),n!=null&&u.push({id:`copy-path`,message:r({id:`codex.review.fileTree.contextMenu.copyPath`,defaultMessage:`Copy path`,description:`Context menu action to copy the path of a file tree item`}),onSelect:()=>{n(s)}}),t!=null&&u.push({id:`add-to-chat`,message:r({id:`threadSidePanel.workspaceBrowser.addToChat`,defaultMessage:`Add to chat`,description:`Context menu action for adding a file from the file tree to the current chat`}),onSelect:()=>{t(s)}}),e?[{id:`open-in-loading`,message:ya(l),tooltipMessage:r({id:`threadSidePanel.workspaceBrowser.openIn.loading`,defaultMessage:`Loading available apps…`,description:`Tooltip shown when the file tree is still loading app options for opening a file`}),enabled:!1},{id:`open-in-separator`,type:`separator`},...u]:o==null?u:[...h({idPrefix:_a(l),messages:va(l),onOpenInTarget:(e,t)=>{i(e,t,s)},primaryTarget:o,visibleTargets:c}),{id:`open-in-separator`,type:`separator`},...u]}function _a(e){switch(e){case`review`:return`review-file-tree-open`;case`workspace`:return`workspace-directory-tree-open`}}function va(e){switch(e){case`review`:return{openInTarget:r({id:`codex.review.fileTree.contextMenu.openInTarget`,defaultMessage:`Open in {target}`,description:`Context menu action to open a review file in the preferred app`}),openIn:ya(e),openInTargetSubmenu:r({id:`codex.review.fileTree.contextMenu.openWithTarget`,defaultMessage:`{target}`,description:`Context menu action to open a review file in a specific app`})};case`workspace`:return{openInTarget:r({id:`threadSidePanel.workspaceBrowser.openInTarget`,defaultMessage:`Open in {target}`,description:`Context menu action to open a workspace browser file in the preferred app`}),openIn:ya(e),openInTargetSubmenu:r({id:`threadSidePanel.workspaceBrowser.openInTargetSubmenu`,defaultMessage:`{target}`,description:`Context menu action to open a workspace browser file in a specific app`})}}}function ya(e){switch(e){case`review`:return r({id:`codex.review.fileTree.contextMenu.openWith`,defaultMessage:`Open with`,description:`Context menu submenu label for choosing an app to open a review file`});case`workspace`:return r({id:`threadSidePanel.workspaceBrowser.openIn`,defaultMessage:`Open in…`,description:`Context menu submenu label for choosing an app to open a workspace browser file`})}}function ba({cwd:e,isWindowsHost:t,itemPath:n,targetPathByDisplayPath:r}){return n==null?null:r.get(n)??g(e??``,n,t)}var xa=e((()=>{c(),l(),p()}));function Sa(e){for(let t of e.composedPath()){if(!(t instanceof Element)||t.getAttribute(`data-item-type`)!==`file`)continue;let e=t.getAttribute(`data-item-path`);if(e)return e}return null}var Ca=e((()=>{})),wa,Ta=e((()=>{wa=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 6.41797C10.367 6.41815 10.6649 6.71599 10.665 7.08301V9.33496H12.916C13.2832 9.33496 13.5809 9.63287 13.5811 10C13.5809 10.3671 13.2832 10.665 12.916 10.665H10.665V12.916C10.665 13.2832 10.3671 13.5809 10 13.5811C9.63284 13.5809 9.33496 13.2832 9.33496 12.916V10.665H7.08301C6.71596 10.6649 6.41815 10.367 6.41797 10C6.41813 9.63295 6.71595 9.33509 7.08301 9.33496H9.33496V7.08301C9.33513 6.71596 9.63295 6.4181 10 6.41797Z" fill="currentColor" />
  <path d="M12.666 2.66797C13.3549 2.66797 13.9121 2.66735 14.3623 2.7041C14.8202 2.74151 15.2268 2.82084 15.6035 3.0127C16.1989 3.31608 16.6829 3.80115 16.9863 4.39649C17.1781 4.77304 17.2575 5.17902 17.2949 5.63672C17.3317 6.08689 17.3311 6.64406 17.3311 7.33301V12.666C17.3311 13.3549 17.3317 13.9121 17.2949 14.3623C17.2575 14.8203 17.1782 15.2268 16.9863 15.6035C16.6829 16.1988 16.1988 16.6829 15.6035 16.9863C15.2268 17.1783 14.8203 17.2575 14.3623 17.2949C13.9121 17.3317 13.3549 17.3311 12.666 17.3311H7.33301C6.64403 17.3311 6.08691 17.3317 5.63672 17.2949C5.17899 17.2575 4.77306 17.1781 4.39649 16.9863C3.80114 16.6829 3.31609 16.1989 3.0127 15.6035C2.82085 15.2269 2.74151 14.8202 2.7041 14.3623C2.66736 13.9122 2.66797 13.3548 2.66797 12.666V7.33301C2.66797 6.64406 2.66732 6.08689 2.7041 5.63672C2.74152 5.17904 2.82093 4.77302 3.0127 4.39649C3.31613 3.80104 3.80103 3.31611 4.39649 3.0127C4.77304 2.82092 5.17902 2.74152 5.63672 2.7041C6.08691 2.66732 6.64403 2.66797 7.33301 2.66797H12.666ZM7.33301 3.99805C6.6221 3.99805 6.12859 3.99894 5.74512 4.03027C5.36955 4.06098 5.15798 4.11775 5 4.19824C4.65484 4.37414 4.37416 4.65485 4.19824 5C4.11775 5.15797 4.06098 5.36959 4.03027 5.74512C3.99894 6.12858 3.99805 6.62214 3.99805 7.33301V12.666C3.99805 13.3767 3.99898 13.8705 4.03027 14.2539C4.06094 14.6292 4.11788 14.8411 4.19824 14.999C4.37412 15.3442 4.65487 15.6258 5 15.8018C5.15795 15.8822 5.36972 15.939 5.74512 15.9697C6.12859 16.0011 6.6221 16.001 7.33301 16.001H12.666C13.3767 16.001 13.8705 16.001 14.2539 15.9697C14.6292 15.9391 14.8411 15.8821 14.999 15.8018C15.3443 15.6258 15.6258 15.3443 15.8018 14.999C15.8821 14.8411 15.9391 14.6292 15.9697 14.2539C16.001 13.8705 16.001 13.3767 16.001 12.666V7.33301C16.001 6.62213 16.0011 6.12858 15.9697 5.74512C15.939 5.36976 15.8822 5.15795 15.8018 5C15.6258 4.65488 15.3442 4.37411 14.999 4.19824C14.8411 4.11787 14.6292 4.06094 14.2539 4.03027C13.8705 3.99898 13.3767 3.99805 12.666 3.99805H7.33301Z" fill="currentColor" />
</svg>
`})),Ea,Da=e((()=>{Ea=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.916 9.33496C13.2833 9.33496 13.5811 9.63273 13.5811 10C13.5811 10.3673 13.2833 10.665 12.916 10.665H7.08301C6.71585 10.6649 6.41797 10.3672 6.41797 10C6.41797 9.63281 6.71585 9.33509 7.08301 9.33496H12.916Z" fill="currentColor" />
  <path d="M12.666 2.66797C13.3549 2.66797 13.9121 2.66735 14.3623 2.7041C14.8202 2.74151 15.2268 2.82084 15.6035 3.0127C16.1989 3.31608 16.6829 3.80115 16.9863 4.39649C17.1781 4.77304 17.2575 5.17902 17.2949 5.63672C17.3317 6.08689 17.3311 6.64406 17.3311 7.33301V12.666C17.3311 13.3549 17.3317 13.9121 17.2949 14.3623C17.2575 14.8203 17.1782 15.2268 16.9863 15.6035C16.6829 16.1988 16.1988 16.6829 15.6035 16.9863C15.2268 17.1783 14.8203 17.2575 14.3623 17.2949C13.9121 17.3317 13.3549 17.3311 12.666 17.3311H7.33301C6.64403 17.3311 6.08691 17.3317 5.63672 17.2949C5.17899 17.2575 4.77306 17.1781 4.39649 16.9863C3.80114 16.6829 3.31609 16.1989 3.0127 15.6035C2.82085 15.2269 2.74151 14.8202 2.7041 14.3623C2.66736 13.9122 2.66797 13.3548 2.66797 12.666V7.33301C2.66797 6.64406 2.66732 6.08689 2.7041 5.63672C2.74152 5.17904 2.82093 4.77302 3.0127 4.39649C3.31613 3.80104 3.80103 3.31611 4.39649 3.0127C4.77304 2.82092 5.17902 2.74152 5.63672 2.7041C6.08691 2.66732 6.64403 2.66797 7.33301 2.66797H12.666ZM7.33301 3.99805C6.6221 3.99805 6.12859 3.99894 5.74512 4.03027C5.36955 4.06098 5.15798 4.11775 5 4.19824C4.65484 4.37414 4.37416 4.65485 4.19824 5C4.11775 5.15797 4.06098 5.36959 4.03027 5.74512C3.99894 6.12858 3.99805 6.62214 3.99805 7.33301V12.666C3.99805 13.3767 3.99898 13.8705 4.03027 14.2539C4.06094 14.6292 4.11788 14.8411 4.19824 14.999C4.37412 15.3442 4.65487 15.6258 5 15.8018C5.15795 15.8822 5.36972 15.939 5.74512 15.9697C6.12859 16.0011 6.6221 16.001 7.33301 16.001H12.666C13.3767 16.001 13.8705 16.001 14.2539 15.9697C14.6292 15.9391 14.8411 15.8821 14.999 15.8018C15.3443 15.6258 15.6258 15.3443 15.8018 14.999C15.8821 14.8411 15.9391 14.6292 15.9697 14.2539C16.001 13.8705 16.001 13.3767 16.001 12.666V7.33301C16.001 6.62213 16.0011 6.12858 15.9697 5.74512C15.939 5.36976 15.8822 5.15795 15.8018 5C15.6258 4.65488 15.3442 4.37411 14.999 4.19824C14.8411 4.11787 14.6292 4.06094 14.2539 4.03027C13.8705 3.99898 13.3767 3.99805 12.666 3.99805H7.33301Z" fill="currentColor" />
</svg>
`})),Oa,ka=e((()=>{Oa=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 8.33301C10.9205 8.33301 11.667 9.07953 11.667 10C11.667 10.9205 10.9205 11.667 10 11.667C9.07961 11.6669 8.334 10.9204 8.33399 10C8.33399 9.07958 9.0796 8.3331 10 8.33301Z" fill="currentColor" />
  <path d="M12.667 2.66797C13.3558 2.66797 13.9132 2.66734 14.3633 2.7041C14.8211 2.74154 15.2279 2.82079 15.6045 3.0127C16.1998 3.31614 16.6839 3.8011 16.9873 4.39649C17.1791 4.77306 17.2585 5.17899 17.2959 5.63672C17.3327 6.08689 17.332 6.64406 17.332 7.33301V12.666C17.332 13.3548 17.3326 13.9122 17.2959 14.3623C17.2585 14.8201 17.1791 15.2269 16.9873 15.6035C16.684 16.1987 16.1996 16.6829 15.6045 16.9863C15.2279 17.1782 14.8211 17.2575 14.3633 17.2949C13.9132 17.3317 13.3558 17.3311 12.667 17.3311H7.33399C6.64513 17.3311 6.08786 17.3317 5.6377 17.2949C5.17997 17.2575 4.77403 17.1781 4.39746 16.9863C3.80197 16.6829 3.31712 16.199 3.01367 15.6035C2.82172 15.2268 2.7425 14.8203 2.70508 14.3623C2.66833 13.9121 2.66895 13.3549 2.66895 12.666V7.33301C2.66895 6.64406 2.6683 6.08689 2.70508 5.63672C2.7425 5.17907 2.82191 4.77301 3.01367 4.39649C3.31713 3.80115 3.80208 3.31606 4.39746 3.0127C4.77393 2.82108 5.18011 2.7415 5.6377 2.7041C6.08785 2.66736 6.64515 2.66797 7.33399 2.66797H12.667ZM7.33399 3.99805C6.62326 3.99805 6.12954 3.99898 5.74609 4.03027C5.37079 4.06094 5.15893 4.11787 5.00098 4.19824C4.65588 4.37409 4.37516 4.65496 4.19922 5C4.11874 5.15796 4.06196 5.36963 4.03125 5.74512C3.99992 6.12858 3.99902 6.62213 3.99902 7.33301V12.666C3.99902 13.3767 3.99996 13.8705 4.03125 14.2539C4.06193 14.6295 4.11878 14.841 4.19922 14.999C4.37515 15.3443 4.6557 15.6258 5.00098 15.8018C5.15894 15.8821 5.37074 15.9391 5.74609 15.9697C6.12955 16.001 6.62323 16.001 7.33399 16.001H12.667C13.3776 16.001 13.8715 16.001 14.2549 15.9697C14.6299 15.939 14.8421 15.8821 15 15.8018C15.345 15.6258 15.6269 15.3441 15.8027 14.999C15.883 14.8411 15.9401 14.6289 15.9707 14.2539C16.002 13.8705 16.002 13.3767 16.002 12.666V7.33301C16.002 6.62213 16.002 6.12858 15.9707 5.74512C15.94 5.36972 15.8832 5.15795 15.8027 5C15.6269 4.65483 15.3451 4.37417 15 4.19824C14.8421 4.11782 14.6302 4.06097 14.2549 4.03027C13.8715 3.99897 13.3776 3.99805 12.667 3.99805H7.33399Z" fill="currentColor" />
</svg>
`}));function Aa(e){let t=(0,Ga.c)(108),{cwd:n,decorationIcons:r,flattenEmptyDirectories:i,gitStatus:a,hostId:o,icons:c,initialExpandedPaths:l,initialScrollTop:d,itemHeight:f,onClick:p,onDoubleClick:m,onExpandedPathsChange:h,onSelectionChange:v,onStateChange:b,paths:x,revealSelectedPath:S,revealSelectedPathScrollOffset:C,renderRowDecoration:ee,resetKey:w,selectedPath:T,surface:E,unsafeCSS:ne}=e,D=i!==void 0&&i,k=d===void 0?0:d,oe=f===void 0?Ja:f,A=S!==void 0&&S,j=C===void 0?`nearest`:C,se=E===void 0?`main`:E,ce=s(O),le=te(re()),{platform:M}=ie(),N=_(`add-context-file`),ue;t[0]!==n||t[1]!==o?(ue={cwd:n,hostId:o},t[0]=n,t[1]=o,t[2]=ue):ue=t[2];let P=de(ue),pe;t[3]===x?pe=t[4]:(pe=x.map(ja),t[3]=x,t[4]=pe);let F=pe,me;if(t[5]!==n||t[6]!==x||t[7]!==M){me=new Map;for(let e of x)typeof e!=`string`&&me.set(e.displayPath,g(n??``,e.path,M===`windows`));t[5]=n,t[6]=x,t[7]=M,t[8]=me}else me=t[8];let I=me,he;t[9]!==r||t[10]!==c?(he=Pa(c,r),t[9]=r,t[10]=c,t[11]=he):he=t[11];let ge=he,_e=se===`dropdown`?`var(--color-surface-elevated-secondary)`:`var(--color-surface)`,ve=(0,Ka.useRef)(null),L;t[12]===l?L=t[13]:(L=Array.from(l??[]),t[12]=l,t[13]=L);let ye=(0,Ka.useRef)(L),be=(0,Ka.useRef)(null),xe=(0,Ka.useRef)(null),Se=(0,Ka.useRef)(k),Ce=(0,Ka.useRef)(T??null),we;t[14]===b?we=t[15]:(we=()=>{b?.({expandedPaths:ye.current,scrollTop:Se.current,selectedPath:Ce.current})},t[14]=b,t[15]=we);let R=ae(we),Te;t[16]!==h||t[17]!==R?(Te=e=>{ye.current=e,h?.(e),R()},t[16]=h,t[17]=R,t[18]=Te):Te=t[18];let Ee=ae(Te),z;t[19]!==v||t[20]!==R?(z=e=>{Ce.current=e[0]??null,v?.(e),R()},t[19]=v,t[20]=R,t[21]=z):z=t[21];let De=ae(z),Oe;t[22]===T?Oe=t[23]:(Oe=T==null?void 0:[T],t[22]=T,t[23]=Oe);let ke=`
      :host {
        --trees-bg-override: ${_e};
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
        --trees-item-padding-x-override: 6px;
        --trees-item-margin-x-override: 0px;
        --trees-level-gap-override: 0px;
        --trees-padding-inline-override: 0px;
        --trees-scrollbar-gutter-override: 0px;
        --trees-scrollbar-gutter-measured: 0px;
        --trees-selected-bg-override: var(--color-background-primary-soft-active);
        --trees-selected-fg-override: var(--color-text-emphasis);
        --trees-item-row-gap-override: 10px;
      }

      [data-file-tree-sticky-overlay-content='true'],
      [data-file-tree-sticky-row='true'] {
        background-color: ${_e};
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
        --base-file-tree-git-status-icon: url("${Xa}");
      }

      [data-item-git-status='deleted'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${Za}");
      }

      [data-item-git-status='modified'] > [data-item-section='git'] > span::before {
        --base-file-tree-git-status-icon: url("${Qa}");
      }

      /* Filter out @pierre/truncate's subpixel one-line overflow false positives. */
      @container measure (height <= calc(1lh + 1px)) {
        [data-truncate-marker] {
          opacity: 0;
        }
      }

      ${ne??``}
    `,Ae;t[24]!==ge||t[25]!==D||t[26]!==a||t[27]!==De||t[28]!==l||t[29]!==oe||t[30]!==ee||t[31]!==Oe||t[32]!==ke||t[33]!==F?(Ae={fileTreeSearchMode:`hide-non-matches`,flattenEmptyDirectories:D,gitStatus:a,icons:ge,initialExpandedPaths:l,initialSelectedPaths:Oe,itemHeight:oe,onSelectionChange:De,paths:F,renderRowDecoration:ee,search:!1,stickyFolders:!0,unsafeCSS:ke},t[24]=ge,t[25]=D,t[26]=a,t[27]=De,t[28]=l,t[29]=oe,t[30]=ee,t[31]=Oe,t[32]=ke,t[33]=F,t[34]=Ae):Ae=t[34];let{model:B}=fa(Ae),je,Me;t[35]!==l||t[36]!==B||t[37]!==w||t[38]!==F?(je=()=>{let e=Array.from(l??[]),t=be.current;if(t?.model===B&&t.resetKey===w&&Ma(t.treePaths,F)&&Ma(t.initialExpandedPaths,e))return;let n=t?.model!==B||t?.resetKey!==w;be.current={initialExpandedPaths:e,model:B,resetKey:w,treePaths:Array.from(F)},ye.current=e,B.resetPaths(F,{initialExpandedPaths:l});let r=xe.current?.path;(n||r!=null&&B.getItem(r)==null)&&(xe.current=null)},Me=[l,B,w,F],t[35]=l,t[36]=B,t[37]=w,t[38]=F,t[39]=je,t[40]=Me):(je=t[39],Me=t[40]),(0,Ka.useEffect)(je,Me);let Ne,Pe;t[41]!==k||t[42]!==B||t[43]!==A||t[44]!==T?(Ne=()=>{let e=null,t=0,n=()=>{e=null,!Ua(B,k)&&(t>=Ya||(t+=1,e=window.requestAnimationFrame(n)))};return k>0&&!(A&&T!=null)?(Se.current=k,n()):Se.current=0,()=>{e!=null&&window.cancelAnimationFrame(e)}},Pe=[k,B,A,T],t[41]=k,t[42]=B,t[43]=A,t[44]=T,t[45]=Ne,t[46]=Pe):(Ne=t[45],Pe=t[46]),(0,Ka.useEffect)(Ne,Pe);let Fe;t[47]!==B||t[48]!==A||t[49]!==j||t[50]!==T?(Fe=()=>{if(Ce.current=T??null,za(B,T),!A||T==null){xe.current=null;return}xe.current?.path===T&&xe.current.scrollOffset===j||Ba(B,T,j)&&(xe.current={path:T,scrollOffset:j})},t[47]=B,t[48]=A,t[49]=j,t[50]=T,t[51]=Fe):Fe=t[51];let Ie;t[52]!==B||t[53]!==w||t[54]!==A||t[55]!==j||t[56]!==T||t[57]!==F?(Ie=[B,A,j,w,T,F],t[52]=B,t[53]=w,t[54]=A,t[55]=j,t[56]=T,t[57]=F,t[58]=Ie):Ie=t[58],(0,Ka.useEffect)(Fe,Ie);let Le,Re;t[59]!==a||t[60]!==B?(Le=()=>{B.setGitStatus(a)},Re=[a,B],t[59]=a,t[60]=B,t[61]=Le,t[62]=Re):(Le=t[61],Re=t[62]),(0,Ka.useEffect)(Le,Re);let ze,Be;t[63]!==ge||t[64]!==B?(ze=()=>{B.setIcons(ge)},Be=[ge,B],t[63]=ge,t[64]=B,t[65]=ze,t[66]=Be):(ze=t[65],Be=t[66]),(0,Ka.useEffect)(ze,Be);let Ve,He;t[67]!==Ee||t[68]!==B||t[69]!==F?(Ve=()=>B.subscribe(()=>{Se.current=Ha(B),Ee(Ra(B,F))}),He=[Ee,B,F],t[67]=Ee,t[68]=B,t[69]=F,t[70]=Ve,t[71]=He):(Ve=t[70],He=t[71]),(0,Ka.useEffect)(Ve,He);let Ue,We;t[72]!==B||t[73]!==R?(Ue=()=>{let e=null,t=0,n=null,r=()=>{e=null;let i=Va(B);if(i!=null){let e=()=>{Se.current=i.scrollTop,R()};i.addEventListener(`scroll`,e,{passive:!0}),n=()=>{i.removeEventListener(`scroll`,e)};return}t>=Ya||(t+=1,e=window.requestAnimationFrame(r))};return r(),()=>{e!=null&&window.cancelAnimationFrame(e),n?.()}},We=[B,R],t[72]=B,t[73]=R,t[74]=Ue,t[75]=We):(Ue=t[74],We=t[75]),(0,Ka.useEffect)(Ue,We);let Ge;t[76]!==n||t[77]!==o?(Ge=(0,qa.jsx)(fe,{cwd:n,hostId:o}),t[76]=n,t[77]=o,t[78]=Ge):Ge=t[78];let V;t[79]!==N||t[80]!==n||t[81]!==P||t[82]!==o||t[83]!==M||t[84]!==ce||t[85]!==I?(V=()=>{let e=ba({cwd:n,isWindowsHost:M===`windows`,itemPath:ve.current,targetPathByDisplayPath:I});return ga({...Ia({scope:ce,cwd:n,fallbackOpenTargets:P,hostId:o,targetPath:e}),onAddToChat:o==null?void 0:e=>{N.mutateAsync({hostId:o,path:e})},onCopyPath:u,onOpenInTarget:(e,t,n)=>{P.open(e,{appPath:t,persistPreferred:!1,path:n})},onSaveAs:void 0,targetPath:e})},t[79]=N,t[80]=n,t[81]=P,t[82]=o,t[83]=M,t[84]=ce,t[85]=I,t[86]=V):V=t[86];let H;t[87]!==n||t[88]!==o||t[89]!==M||t[90]!==ce||t[91]!==I?(H=()=>La({scope:ce,cwd:n,hostId:o,targetPath:ba({cwd:n,isWindowsHost:M===`windows`,itemPath:ve.current,targetPathByDisplayPath:I})}),t[87]=n,t[88]=o,t[89]=M,t[90]=ce,t[91]=I,t[92]=H):H=t[92];let Ke;t[93]===Symbol.for(`react.memo_cache_sentinel`)?(Ke=e=>{ve.current=Sa(e.nativeEvent)},t[93]=Ke):Ke=t[93];let qe;t[94]===le?qe=t[95]:(qe={backgroundColor:`var(--color-surface)`,color:`var(--color-text)`,colorScheme:le,width:`100%`},t[94]=le,t[95]=qe);let Je;t[96]!==B||t[97]!==p||t[98]!==m||t[99]!==qe?(Je=(0,qa.jsx)(sa,{"data-tab-preview-pin-exempt":!0,onClick:p,onContextMenu:Ke,onDoubleClick:m,model:B,style:qe}),t[96]=B,t[97]=p,t[98]=m,t[99]=qe,t[100]=Je):Je=t[100];let Ye;t[101]!==V||t[102]!==H||t[103]!==Je?(Ye=(0,qa.jsx)(y,{awaitBeforeOpen:!1,getItems:V,onBeforeOpen:H,children:Je}),t[101]=V,t[102]=H,t[103]=Je,t[104]=Ye):Ye=t[104];let Xe;return t[105]!==Ge||t[106]!==Ye?(Xe=(0,qa.jsxs)(qa.Fragment,{children:[Ge,Ye]}),t[105]=Ge,t[106]=Ye,t[107]=Xe):Xe=t[107],Xe}function ja(e){return typeof e==`string`?e:e.displayPath}function Ma(e,t){return e.length===t.length&&e.every((e,n)=>e===t[n])}function Na(e){return`data:image/svg+xml,${encodeURIComponent(e)}`}function Pa(e,t){if(t==null||t.length===0)return e;let n=t.map(e=>`<symbol id="${e.name}" viewBox="${e.viewBox??`0 0 ${e.width??0} ${e.height??0}`}">${e.body}</symbol>`).join(``),r=Fa(typeof e==`string`?void 0:e?.spriteSheet,n);return e==null?{set:`complete`,spriteSheet:r}:typeof e==`string`?{set:e,spriteSheet:r}:{...e,spriteSheet:r}}function Fa(e,t){return e==null?`<svg data-icon-sprite aria-hidden="true" width="0" height="0" xmlns="http://www.w3.org/2000/svg">${t}</svg>`:e.replace(`</svg>`,`${t}</svg>`)}function Ia({scope:e,cwd:t,fallbackOpenTargets:n,hostId:r,targetPath:i}){if(i==null)return{isLoadingOpenTargets:!1,primaryTarget:null,visibleTargets:[]};let a=e.query.snapshot(w,{cwd:t,hostId:r,path:i}),o=a.getData(),s=o?.targets??n.targets,c=o?.availableTargets??n.availableTargets,l=o?.preferredTarget??n.preferredTarget,u=o?.mode??n.mode;return{isLoadingOpenTargets:o==null&&!n.hasLoadedTargets&&e.queryClient.getQueryState(a.queryKey)?.status!==`error`,primaryTarget:x({preferredTarget:l,targets:s,availableTargets:c,mode:u}),visibleTargets:m({targets:s,availableTargets:c,includeHiddenTargets:!0,mode:u})}}function La({scope:e,cwd:t,hostId:n,targetPath:r}){}function Ra(e,t){let n=[];for(let r of t){if(!r.endsWith(`/`))continue;let t=r.slice(0,-1),i=e.getItem(t);i==null||!Wa(i)||!i.isExpanded()||n.push(t)}return n}function za(e,t){let n=e.getSelectedPaths();if(t==null){for(let t of n)e.getItem(t)?.deselect();return}if(!(n.length===1&&n[0]===t)){for(let t of n)e.getItem(t)?.deselect();e.getItem(t)?.select()}}function Ba(e,t,n){return e.getItem(t)==null?!1:(e.scrollToPath(t,{offset:n}),!0)}function Va(e){return e.getFileTreeContainer()?.shadowRoot?.querySelector(`[data-file-tree-virtualized-scroll='true']`)??null}function Ha(e){return Va(e)?.scrollTop??0}function Ua(e,t){let n=Va(e);return n==null?!1:(n.scrollTop=Math.max(0,t),!0)}function Wa(e){return e.isDirectory()}var Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a=e((()=>{Ga=n(),ha(),o(),Ka=t(i(),1),S(),xa(),D(),Ca(),ne(),Ta(),Da(),ka(),b(),ue(),E(),d(),ee(),T(),v(),p(),C(),f(),qa=a(),Ja=28,Ya=60,Xa=Na(wa),Za=Na(Ea),Qa=Na(Oa)}));export{Ca as i,$a as n,Sa as r,Aa as t};
//# sourceMappingURL=base-file-tree-DXSlqWNV.js.map