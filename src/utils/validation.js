export const checkValidData = (password) => {
    
    const isPasswordValid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    if(password==="") return "Password cannot be empty"
    if (!isPasswordValid) return "Password is not valid";
  
    return null;
  };