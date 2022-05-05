// import jwt from 'jsonwebtoken';

export const auth = (userId:any, isToken:Boolean) => {
  if (isToken) {
    const token = userId;
    window.localStorage.setItem('TOKEN', token);
  }
//   const Token = jwt.sign({ userId: `${userId}` }, 'EORIP');
//   window.localStorage.setItem('TOKEN', Token);
};