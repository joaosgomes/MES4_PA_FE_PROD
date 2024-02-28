import { useEffect } from "react";
import { message } from "antd";
import Navigator_Connection from "../../utils/Navigator_Connection";

const ConnectionStatusMonitor = () => {
  const handleConnectionChange = () => {
    const connectionInfo = Navigator_Connection();
    if (connectionInfo) {
      const { effectiveType } = connectionInfo;
      console.log("Effective connection type changed:", effectiveType);

      // Show notification
      message.info(`Connection : ${effectiveType}`);
    } else {
      console.log("navigator.connection not supported");
    }
  };

  useEffect(() => {
    navigator.connection.addEventListener("change", handleConnectionChange);

    return () => {
      navigator.connection.removeEventListener(
        "change",
        handleConnectionChange
      );
    };
  }, []);

  return null;
};

export default ConnectionStatusMonitor;
