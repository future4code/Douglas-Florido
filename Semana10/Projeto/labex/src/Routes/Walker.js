

  export const goToApplicationFormPage = (history) => {
    history.push("/applicationformpage")
  };

  export const goToCreateAccount = (history) => {
    console.log("entrei goToCreateAccount")
    history.push("/createaccount")
  };
  
  export const goToTripPage = (history) => {
    history.push("/createtrippage")
  };

  export const goToDetailTripPage = (history, tripId) => {
    localStorage.setItem("tripId", tripId)
    history.push("/gotodetailtrippage")
  }

  export const goToLoginPage = (history) => {
    history.push("/")
  };
  
  
  export const goToMainPage = (history) => {
    console.log("entrei goToMaingPage")
    history.push("/mainpage")
  };
  
  