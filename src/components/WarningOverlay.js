import React from "react";

import Overlay from "./Overlay";
import Warning from "../svg/Warning";

const WarningOverlay = props => {
  return <Overlay icon={<Warning />} title="Warning" {...props} />;
};

export default WarningOverlay;
