import React, { FC, ReactElement } from "react";
// Components
import ReferFriendsSection from "./_referFriendsSection/ReferFriendsSection";
import VisitStoreSection from "./_visitStoreSection/VisitStoreSection";

const MainSections: FC = (): ReactElement => {
  return (
    <header>
      <ReferFriendsSection />
      <VisitStoreSection />
    </header>
  );
};

export default MainSections;