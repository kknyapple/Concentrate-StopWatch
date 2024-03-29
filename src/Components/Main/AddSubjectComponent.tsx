import React, { memo, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { stopWatchStart } from "recoil/frontend";
import { Subject } from "types/types";
import { subjectDataState } from "recoil/localStorage";

const AddSubjectBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: whitesmoke;
  font-size: 14px;
  width: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const InputBox = styled.div`
  position: relative;
  display: inline-block;
`;

const AddSubjectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border: 0;
  outline: 0;
  background-color: transparent;
  color: whitesmoke;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  cursor: pointer;

  top: 0;
  right: 0;
  bottom: 0;
`;

const SubjectInput = styled.input`
  height: 22px;
  width: 100px;
  border: 0;
  ::placeholder {
    color: #9c9c9c;
  }
  padding-right: 30px;
  outline: none;
  border-bottom: #9c9c9c 0.8px solid;
  &:focus {
    border-bottom-color: whitesmoke;
  }
  padding-left: 5px;
  background-color: transparent;
  color: whitesmoke;
  font-size: 11px;
`;

const AddSubjectComponent = memo(() => {
  const [start, setStart] = useRecoilState(stopWatchStart);
  const setSubjectData = useSetRecoilState(subjectDataState);
  const [content, setContent] = useState({ name: "", savedTime: 0 });

  let subjectData = JSON.parse(localStorage.getItem("subject") as string);

  const addSubject = () => {
    if (content.name === "") return;
    if (subjectData.some((item: Subject) => item.name === content.name)) {
      alert("이미 존재하는 과목입니다.");
      return;
    }
    const newSubjectData = [...subjectData, content];
    localStorage.setItem("subject", JSON.stringify(newSubjectData));
    setSubjectData(newSubjectData);
    setContent({ name: "", savedTime: 0 });
  };

  const keyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      addSubject();
    }
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!start) {
      setContent({ name: e.target.value, savedTime: 0 });
    }
  };

  return (
    <AddSubjectBox>
      <InputBox>
        <SubjectInput
          type="text"
          id="subject"
          minLength={1}
          maxLength={10}
          placeholder="과목을 추가해주세요"
          value={content.name}
          onKeyDown={keyDownHandler}
          onChange={changeHandler}
        />

        <AddSubjectButton onClick={addSubject}>
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"
              fill="#F5F5F5"
            />
          </svg>
        </AddSubjectButton>
      </InputBox>
    </AddSubjectBox>
  );
});

export default AddSubjectComponent;
