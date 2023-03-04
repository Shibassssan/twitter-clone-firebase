/** @jsxImportSource @emotion/react */
import { FC, useCallback, useState } from 'react';
import { addDoc, getDoc } from 'firebase/firestore';
// import { db, storage } from '~/src/Firebase';
import { Input,Button } from '../App';


export const Top: FC = () => {
  const sendTweets = useCallback(() => {}, []);
  return (
    <>
      <div css={{ margin: '10px' }}>
        <Input label={'ツイート'} />
      </div>
      <div css={{ margin: '10px' }}>
        <Button label={'投稿'} />
      </div>
      <section>
        <div></div>
      </section>
    </>
  );
};
