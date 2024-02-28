//Navigator_Connection
const Navigator_Connection = () => {
    // Check if the navigator.connection property is supported
    if ("connection" in navigator) {
      const connection = navigator.connection;
  
      // Return an object with connection information
      return {
        type: connection.type,
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        downlinkMax: connection.downlinkMax,
        rtt: connection.rtt,
        saveData: connection.saveData,
      };
    } else {
      console.warn("Connection information is not supported.");
      return null;
    }
  };
  
  export default Navigator_Connection;
  