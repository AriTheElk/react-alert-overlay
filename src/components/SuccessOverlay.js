import React from "react";

import Overlay from "./Overlay";
import Success from "../svg/Success";

const SuccessOverlay = props => {
  return <Overlay icon={<Success />} title="Success" {...props} />;
};

export default SuccessOverlay;
