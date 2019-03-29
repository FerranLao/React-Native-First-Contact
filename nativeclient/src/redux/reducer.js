const initialstore = {
  img:
    "https://res.cloudinary.com/dohakifo0/image/upload/v1552073673/lab-profile-app/fmrij.jpg",
  name: "Anonimous"
};

export const rootReducer = (store = initialstore, action) => {
  switch (action.type) {
    case "IMG_CHANGE":
      store = { ...store, img: action.img };
      break;
    case "NAME_CHANGE":
      store = { ...store, name: action.name };
      break;
    default:
      return store;
  }
  return store;
};
