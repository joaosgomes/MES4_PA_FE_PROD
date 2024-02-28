//Navigator_OnLine.js
const Navigator_Online = () => {
    return new Promise((resolve, reject) => {
      if (navigator && "onLine" in navigator) {
        if (navigator.onLine) {
          console.log("Browser is online");
          resolve(true);
        } else {
          console.log("Browser is offline");
          resolve(false);
        }
      } else {

        console.log("navigator.onLine is not supported");
        resolve(null);
      }
    });
  };
  
  export { Navigator_Online };