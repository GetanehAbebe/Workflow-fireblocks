export const formStateTypes = {
  CHNAGE_STATE: "CHNAGE_STATE",
};

export const changeFormState = ({ name, value }: any) => {
  return {
    type: formStateTypes.CHNAGE_STATE,
    payload: { name, value },
  };
};
