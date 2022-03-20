import React, { useCallback } from "react";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { wrapper } from "../store";
import { serverRenderClock, startClock } from "../store/actions";

export const getStaticProps = wrapper.getStaticProps((store) =>
  //   @ts-ignore
  ({ preview }) => {
    console.log(
      "2. Page.getStaticProps uses the store to dispatch things",
      preview
    );
    store.dispatch(serverRenderClock(true));
  }
);

// you can also use `connect()` instead of hooks
const Page: NextPage = () => {
    
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const onClick = useCallback(
    () => {
      dispatch(startClock());
    },
    [],
  );

  console.log(state);
  
  return (
    <div>
      {/* {tick} */}
      <button onClick={onClick}>click</button>
    </div>
  );
};

export default Page;
