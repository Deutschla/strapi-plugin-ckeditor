import { css } from "styled-components";

export const style = css`
  .ck-word-count {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    padding-block: 0.2rem;
    font-size: 0.875rem;
  }

  .ck-editor__main {
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }

    .typography-h1 {
      font-size: 4.75rem;
      font-weight: 500;
      line-height: 5.5rem;
      letter-spacing: -0.095rem;
    }

    .typography-h2 {
      font-size: 3.5rem;
      font-weight: 500;
      line-height: 4.9rem;
      letter-spacing: -0.035rem;
    }

    .typography-h3 {
      font-size: 2.25rem;
      font-weight: 500;
      line-height: 3.15rem;
      letter-spacing: normal;
    }

    .typography-h4 {
      font-size: 1.375rem;
      line-height: 1.925rem;
      font-weight: 500;
      letter-spacing: normal;
    }

    .typography-h5 {
      font-size: 1.125rem;
      line-height: 1.5rem;
      font-weight: 400;
    }

    .typography-h6 {
      font-size: 0.875rem;
      line-height: 1rem;
      font-weight: 500;
    }

    .typography-small-button {
      display: block;
      font-size: 0.875rem;
      line-height: 1.5rem;
      font-weight: 500;
    }

    .typography-body-copy {
      display: block;
      font-size: 1.625rem;
      line-height: 2.275rem;
      font-weight: 400;
    }
    
    .typography-body-bold {
      display: block;
      font-size: 1.625rem;
      line-height: 2.275rem;
      font-weight: 600;
    }

    .typography-body-legal {
      display: block;
      font-size: 0.75rem;
      line-height: 1rem;
      font-weight: 400;
    }

    p {
      font-size: 1em;
      line-height: 1.6em;
      margin-bottom: 0.8em;
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: .75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    blockquote {
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub
    }

    sup {
      vertical-align: super
    }

    // higher specificity needed
    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;

      // so it's more Strapi alike
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid rgb(73, 69, 255);
        box-shadow: rgb(73 69 255) 0 0 0 0.125rem;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        transition-property: border-color, box-shadow;
        transition-duration: 0.2s;
      }
    }
  }
`;
