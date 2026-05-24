/* ===== Global CSS Base Styles ===== */
import { createGlobalStyle } from 'styled-components'
import { media } from './breakpoints'

export const GlobalStyles = createGlobalStyle`
  /* === Reset Styles === */
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100%;
    line-height: 1.5;
    font-size: 16px;
    overflow-x: hidden;
    font-family: "Montserrat", system-ui;
    font-optical-sizing: auto;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    text-rendering: optimizeSpeed;
   }

  p{
    font-size: 16px;
    line-height: 20px;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    height: auto;
  }

  input, button, textarea, select {
    font: inherit;
  }

  code, kbd, samp {
    font-family: ui-monospace, 'Cascadia Code', monospace;
  }

  hr {
    all: unset;
    display: block;
    height: 1px;
    width: 100%;
    background: currentColor;
  }

  a {
    text-decoration: none;
    cursor: pointer;

    &:visited, &:focus { }
    &:hover { }

    // ===== User Accessibility =====
    &:focus-visible {
      outline: 2px solid;
    }
  }

  /* === Form Styles === */
  [type='number']::-webkit-outer-spin-button,
  [type='number']::-webkit-inner-spin-button 
  { -webkit-appearance: none; }

  [type='number'] { -moz-appearance: textfield; }

  /* === Utility Classes === */
  .truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .show-desktop {
    display: block;
    ${media.above('md')} {
      display: none;
    }
  }

  .show-mobile {
    display: none;
    ${media.above('md')} {
      display: block;
    }
  }

  .w-full {
    width: 100%;
  }

  .visually-hidden:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  /* === AntD Typography === */
  div{
    &.ant-typography{margin: 0;}
  }

  /* === AntD Tooltip === */
  .ant-tooltip{
    .ant-tooltip-container{}
    .ant-tooltip-arrow{
      &:before{}
      &:after{}
    }
  }

  /* === AntD Spin (Loader) === */
  .ant-spin-fullscreen{}
  .ant-spin-nested-loading{}

  /* === AntD Dropdown === */
  .ant-dropdown{
    .ant-dropdown-menu{
      .ant-dropdown-menu-item{}
    }
  }

  /* === AntD Select Dropdown === */
  .ant-select-dropdown{
    min-width: 70px;

    .ant-select-item-option{
      &.ant-select-item-option-active{}
      &.ant-select-item-option-selected{}
      &.ant-select-item-option-disabled{}
    }
  }

  /* === App Date Picker Dropdown === */
  .ant-picker-dropdown{
    .ant-picker-panel-layout{
      .ant-picker-header{
        button{}

        .ant-picker-header-view{}
      }

      .ant-picker-body{
        .ant-picker-content{
          // Header & Body
          th, td{

          }

          // Header only
          thead{
            th{}
          }
        }
      }
    }
  }

  /* === AntD Message === */
  .ant-message{
    .ant-message-notice-wrapper{
      .ant-message-notice{
        &.ant-message-notice-success{}
        &.ant-message-notice-error{}
        &.ant-message-notice-warning{}

        .ant-message-notice-content{}
      }
    }
  }

  /* === AntD Notification === */
  .ant-notification{
    .ant-notification-notice-wrapper{
      .ant-notification-notice{
        &.ant-notification-notice-success{}
        &.ant-notification-notice-error{}
        &.ant-notification-notice-warning{}
        &.ant-notification-notice-info{}

        .ant-notification-notice-content{
          .ant-notification-notice-title{}
          .ant-notification-notice-description{}
        }

        .ant-notification-notice-close{}
      }
    }
  }
`
