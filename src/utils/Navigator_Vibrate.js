//Navigator_Vibrate.js
const Navigator_Vibrate = (duration) => {
  if ("vibrate" in navigator) {
    navigator.vibrate(duration);
    console.log("vibrate");
  } else {
    console.warn("Vibration is not supported or the device is offline.");
  }
};

//export default Navigator_Vibrate;
export { Navigator_Vibrate };