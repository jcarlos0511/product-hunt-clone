import { css } from 'styled-components';
import theme from './theme';

const { colors, fontSizes } = theme;

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexLeft: css`
    display: flex;
    justify-content: left;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  outline: css`
    outline: 1px solid red;
  `,

  link: css`
    display: inline-block;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: ${theme.transition};
    cursor: pointer;
    background-color: ${colors.chocolate};
    color: ${colors.white};
    text-transform: uppercase;
    font-weight: 600;
    line-height: 16px;
    font-size: ${fontSizes.xs};
    width: 100%;
    padding: 1em 0;

    &:hover,
    &:active,
    &:focus {
      background-color: ${colors.firebrick};
      color: ${colors.green};
    }
  `,

  smallButton: css`
    border: 1px solid ${colors.lavender};
    border-radius: ${theme.borderRadius};
    margin-left: 0.5em;
    padding: 7px 13px;
    font-size: ${fontSizes.xs};
    font-weight: 600;
    line-height: 16px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
    transition: ${theme.transition};

    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.lavender};
    }
  `,

  bigButton: css`
    color: ${colors.white};
    background-color: ${colors.chocolate};
    border: 1px solid ${colors.chocolate};
    border-radius: ${theme.borderRadius};
    font-size: ${fontSizes.sm};
    font-weight: 600;
    line-height: 20px;
    text-decoration: none;
    text-transform: uppercase;
    width: 160px;
    height: 48px;
    cursor: pointer;
    transition: ${theme.transition};

    &:hover,
    &:focus,
    &:active {
      background-color: ${colors.firebrick};
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px ${colors.lavender};
    transition: ${theme.transition};

    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px ${colors.lavender};
    }
  `,
};

export default mixins;
