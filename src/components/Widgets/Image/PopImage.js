/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';

import { useDispatch, useSelector } from 'react-redux';
import { createReplacementWidgetsAction } from '../../../redux/slice';
import { ACTION_CREATE, TYPE_IMAGE } from '../../../utils/constantValue';
import PopButtonsWrapper from '../PopButtonsWrapper';

function PopImage(props) {
  const { widgets } = useSelector((state) => ({
    widgets: state.info.widgets,
  }));

  const [thumbnail, setThumbnail] = useState('');
  const dispatch = useDispatch();

  function makeNewWidget() {
    const newWidget = {
      widget_action: ACTION_CREATE,
      widget_code: '',
      widget_type: TYPE_IMAGE,
      widget_data: {
        thumbnail: `${thumbnail}`,
        url: '',
      },
      i: `${widgets.count + 1}`,
      x: 1,
      y: 1,
      w: 2,
      h: 2,
    };

    dispatch(
      createReplacementWidgetsAction({
        ...widgets,
        count: widgets.count + 1,
        list: [...widgets.list, newWidget],
      })
    );
  }

  const handleSubmit = () => {
    // TODO: url valid 한지 체크해야함
    makeNewWidget();
    props.endPop();
  };

  const handleThumbChange = ({ target: { value } }) => {
    console.log(value);
    setThumbnail(value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <input
        type='thumbnail'
        name='thumbnail'
        value={thumbnail}
        css={[urlInputStyle]}
        placeholder='링크를 입력해주세요'
        onChange={handleThumbChange}
        onKeyDown={handleKeyDown}
      />
      <PopButtonsWrapper>
        <button
          type='button'
          onClick={() => {
            props.endPop();
          }}
        >
          취소
        </button>
        <button
          type='button'
          onClick={() => {
            handleSubmit();
            props.endPop();
          }}
        >
          확인
        </button>
      </PopButtonsWrapper>
    </>
  );
}

const urlInputStyle = css`
  display: block;
  width: 440px;
  height: 24px;
  border: solid 1px #707070;
  margin: 28px auto 32px auto;
  border-radius: 8px;
  background-color: #fff;
  padding: 12px 20px;
`;

export default PopImage;
