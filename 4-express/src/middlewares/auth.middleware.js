export const protect = (req, res, next) => {
  console.log(`hello this is a dummy middleware`);
  console.log("middleware invoked");

  next();
};
