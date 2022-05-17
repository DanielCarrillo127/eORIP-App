
export const auth = async (userId:any, isToken:Boolean) => {
  if (isToken) {
    const token = userId;
    window.localStorage.setItem('TOKEN', token);
  }
};