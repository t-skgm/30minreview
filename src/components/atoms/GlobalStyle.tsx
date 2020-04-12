import { css, Global } from "@emotion/core";
import * as React from "react";
import { colors } from "@/consts"

const GLOBAL_STYLE = css`
  * {
    color: ${colors.text};
  }

  a {
    text-decoration: none;
  }

  p {
    line-height: 2;
  }
`;

export const GlobalStyle = () => <Global styles={GLOBAL_STYLE} />
