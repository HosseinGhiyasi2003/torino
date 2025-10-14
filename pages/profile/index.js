import ProfileWrapper from "@/components/layout/ProfileWrapper";
import MyTours from "@/components/module/MyTours";
import Profile from "@/components/module/Profile";
import Transactions from "@/components/module/Transactions";
import { useState } from "react";

function index() {
  const [menuState, setMenuState] = useState(1);

  return (
    <ProfileWrapper menuState={menuState} setMenuState={setMenuState}>
      {menuState === 1 && <Profile />}
      {menuState === 2 && <MyTours />}
      {menuState === 3 && <Transactions />}
    </ProfileWrapper>
  );
}

export default index;
