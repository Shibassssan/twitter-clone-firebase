import { css } from "@emotion/react";
import { Color, Font } from "~/src/Style";

export const TweetCardStyle = css`
  border-bottom: 1px solid ${Color.Border};
  padding: 10px 8px 5px;
  display: grid;
  grid-template-columns: 1fr 5fr;
  font-size: 14px;

  & .user {
    display: flex;
    &Name {
      font-weight: ${Font.Weight.Bold};
    }
    &Id {
      margin-left: 5px;
    }
  }

  & .tweet {
    padding: 5px 0;
  }

  & .cardNav {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-top: 10px;

    svg {
      width: 17.5px;
      height: 17.5px;
      fill: ${Color.PreWhite}
    }
  }
`;