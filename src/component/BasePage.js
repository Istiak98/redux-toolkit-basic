import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDataAction, logoutAction } from "../redux/actions";

const BasePage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getDataAction());
  }, []);
  return (
    <div>
      welcome
      <p>phone:{auth.phone}</p>
      <p>Data:{auth?.data?.title}</p>
      <p>Data:{auth?.data?.id}</p>
      <button onClick={() => dispatch(logoutAction())}>Logout</button>
    </div>
  );
};

export default BasePage;
