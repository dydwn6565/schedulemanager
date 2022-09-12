import React, {
  useEffect,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
  FC,
  useCallback,
} from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import styled from "styled-components";


interface ChildPropsType {
  setColor: Dispatch<SetStateAction<string | undefined>>;
  
}

 const MultipleColor = styled.div`
   background-color: ${(props) => props.theme.color};
   width: 20px;
   height: 20px;
   border-radius: 50%;
 `;

 const GropTwoDiv = styled.div`
   display: flex;
   justify-content: center;
   margin: auto;
 `;


const ColorPicker : FC<ChildPropsType> = ({setColor}) => {
  const [open, setOpen] = useState(false);
  const [colorIndex,setColorIndex] = useState<number>(0);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const colorList = [
    "tomato",
    "#fff176",
    "#e91e63",
    "#ff5722",
    "#00d084",
    "#008b02",
    "#0693e3",
    "#004dcf",
    "#3f51b5",
    "#673ab7",
    "#607d8b",
    "#4caf50",
  ];

 
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  const setCurrentColor = (index: number) => {
    console.log("hit 57")
    console.log(colorList[index]);
    setColor(colorList[index]);
    setColorIndex(index);
    
    console.log(index);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log("Changed value to: ", e.target.value);
        // setDescripton(e.target.value);
      },
      []
    );

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // useEffect(() => {
  //   console.log(colorIndex);
  // }, []);
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <div>
          <Button
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <MultipleColor theme={{ color: colorList[colorIndex] }} />
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      {colorList.map(
                        (color, index, arr) =>
                          index % 2 === 0 && (
                            <GropTwoDiv>
                              <div onClick={() => setCurrentColor(index)}>
                                <MenuItem onClick={handleClose} key={color}>
                                  <MultipleColor
                                    theme={{ color: arr[index] }}
                                  />
                                </MenuItem>
                              </div>
                              <div onClick={() => setCurrentColor(index+1)}>
                                <MenuItem onClick={handleClose}>
                                  <MultipleColor
                                    theme={{ color: arr[index + 1] }}
                                  />
                                </MenuItem>
                              </div>
                            </GropTwoDiv>
                          )
                      )}

                      {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Stack>
    </div>
  );
}

export default ColorPicker;
