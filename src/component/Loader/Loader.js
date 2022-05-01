import React from "react";
import styled from "styled-components";
//import { useSelector } from "react-redux";
import * as Loader from "react-loader-spinner";

export const LoadingSpinner = () => {
  // const isLoading = useSelector(state => state.ui.isLoading);

  return (
    <LoadingIcon>
      <Loader.TailSpin />
    </LoadingIcon>
  );
};

const LoadingIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  align-items: center;
  padding: 2em;
`;