const initialstore = {
  img:
    "https://res.cloudinary.com/dohakifo0/image/upload/v1552073673/lab-profile-app/fmrij.jpg",
  name: "Anonimous"
};

export const rootReducer = (store = initialstore, action) => {
  switch (action.type) {
    default:
      return store;
  }
  return store;
};
