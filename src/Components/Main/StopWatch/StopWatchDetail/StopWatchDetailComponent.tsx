import React, { memo } from "react";
import styled from "styled-components";

import RestTimeComponent from "../../Time/RestTimeComponent";
import ConcentrateTimeComponent from "../../Time/ConcentrateTimeComponent";

const StopWatchDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2a3044;
  border-radius: 8px;
  height: 110px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 400px;
`;

const StopWatchTime = styled.div`
  display: flex;
  height: 140px;
`;

const StopWatchDetailComponent = memo(() => {
  return (
    <StopWatchDetailBox>
      <StopWatchTime>
        <RestTimeComponent />
        <ConcentrateTimeComponent />
      </StopWatchTime>
    </StopWatchDetailBox>
  );
});

export default StopWatchDetailComponent;
