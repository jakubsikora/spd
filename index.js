window.onMomentAsyncInit = function (createMomentsSDK) {
  createMomentsSDK({ title: "My App" }).then((momentsSDK) => {
    console.log(window.MomentsSDK);
    //window.MomentsSDK.sendMessage({ text: "yes" });
    // your code
  });
};
