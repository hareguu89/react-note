/* eslint-disable import/order */
import * as styledComponents from "styled-components";
import type { Theme } from "./Theme";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, keyframes, ThemeProvider };

export default styled;
