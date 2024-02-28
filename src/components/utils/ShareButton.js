//ShareButton.js
import React from "react";
import { ShareAltOutlined } from "@ant-design/icons";
import { Navigator_Share } from "../../utils/Navigator_Share";
import { Navigator_Vibrate } from "../../utils/Navigator_Vibrate";

const ShareButton = ({ eventData }) => {
  const handleShare = async () => {
    try {
      Navigator_Share(
        "Event Title",
        `Check out this event: ${eventData.name}`,
        window.location.href
      );
      Navigator_Vibrate(200);
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  return <ShareAltOutlined onClick={handleShare} key="Share" />;
};

export default ShareButton;
