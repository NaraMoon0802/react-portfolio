import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Backdrop from '@mui/material/Backdrop';
import DetailArea from "./detailArea";

type PropsTemporalyDrawer = {
  isVisible: boolean,
  handle: React.Dispatch<React.SetStateAction<boolean>>
};
const TemporalyDrawer: React.FC<PropsTemporalyDrawer> = (props) => {
  // const toggleDrawer =
  //   (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
  //     if (
  //       event.type === "keydown" &&
  //       ((event as React.KeyboardEvent).key === "Tab" ||
  //         (event as React.KeyboardEvent).key === "Shift")
  //     ) {
  //       return;
  //     }

  //     setState(open);
  //   };

  const closeDrawer = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    props.handle(false);
  }

  // 色をAPIで取得できるようにする
  const colors = [
      "#F5F5F5",
      "#F0EFDD",
      "#474747",
      "#7ABFC2",
      "#EA4E32"
  ];

  return (
    <div>
      <Drawer
        anchor={"right"}
        open={props.isVisible}
        onClose={closeDrawer}
        transitionDuration={700}
        components={{ Backdrop: (props) => <Backdrop {...props}/>}}
      >
        <Box
          sx={{ width: 250, height: "100%" }}
          style={{ backgroundColor: "#F5F5F5"}}
        >
          <DetailArea isSp={true} colors={colors}/>
        </Box>
      </Drawer>
    </div>
  );
}

export default TemporalyDrawer;
