import React from "react"
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import {usePopupState, bindHover, bindPopover} from "material-ui-popup-state/hooks";
import styled from "styled-components";

const AuthorWithPopover = (props) => {
  const StyledAuthor = styled.div`
      text-align: right;
      font-family: 'Raleway', sans-serif;
      font-weight: 400;
      margin: 10px;
      cursor: pointer;
    `;
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoPopover',
  });
  return <div>
    <StyledAuthor
      {...bindHover(popupState)}
    >
      -{props.author}
    </StyledAuthor>
    <Popover
      {...bindPopover(popupState)}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      disableRestoreFocus
    >
      <Typography onClick={props.getWikiLink}>Link to Wikipedia</Typography>
    </Popover>
  </div>
};

export default AuthorWithPopover