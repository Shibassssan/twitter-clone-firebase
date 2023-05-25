import {
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  addDoc,
  getDocs,
  collection,
  serverTimestamp,
  FieldValue,
  doc,
  onSnapshot,
} from 'firebase/firestore';
import app, { db } from '~/src/Firebase';
import { style, TweetStyle } from './styles';
import { ArrowIcon } from '~/src/assets/icon/Arrow';
import { Button } from '~/src/components/common/atoms/Button';
import { useRouter } from 'next/router';
import { UserContext } from '~/src/pages/_app';

// icon
import { GifIcon } from '~/src/assets/icon/Gif';
import { LocationIcon } from '~/src/assets/icon/Location';
import { EarthIcon } from '~/src/assets/icon/Earth';
import { ImageIcon } from '~/src/assets/icon/Image';
import { VoteIcon } from '~/src/assets/icon/Vote';
import { ScheduleIcon } from '~/src/assets/icon/Schedule';
import Image from 'next/image';
import avator from '~/src/assets/images/avator.png';
import { AccordionIcon } from '~/src/assets/icon/Accordion';


export const TweetContainer: FC = () => {
  const router = useRouter();
  const { userInfo } = useContext(UserContext);

  const [text, setText] = useState('');
  const onChangeText = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value),
    []
  );

  const sendTweet = useCallback(async () => {
    if (!text || !userInfo.name) return;
    try {
      const postCollection = collection(db, 'posts');
      const result = await addDoc(postCollection, {
        // id: postCollection.id,
        userName: userInfo.name,
        tweet: text,
        timestamp: serverTimestamp(),
      });
      console.log('result', result);
      router.push('/');
    } catch (error) {
      console.log('error!!!!!', error);
    }
  }, [text]);

  return (
    <div css={style}>
      <section className="header">
        <div className="backButton" onClick={() => router.back()}>
          <ArrowIcon />
        </div>
        <div></div>
        <div className="tweetButton">
          <Button label={'ツイートする'} type="primary" onClick={sendTweet} disabled={!text} />
        </div>
      </section>
      <section className="body">
        <div css={TweetStyle}>
          <div className="userImage">
            <Image
              src={userInfo.photoUrl || avator}
              width={46}
              height={46}
              alt="ユーザーアイコン"
            />
          </div>
          <div className="tweetWrap">
            <div className="selectPublic">
              <div className='labelWrap'>
                <div className='label'>
                  <span>全員</span>
                  <AccordionIcon />
                </div>
              </div>
            </div>
            <div className='text'>
              <textarea
                name="ツイート本文"
                placeholder='いまどうしてる？'
                aria-label='テキストをツイート'
                autoComplete='on'
                autoCorrect='on'
                spellCheck
                dir='auto'
                onChange={(e) => onChangeText(e)}
              />
            </div>
            <div className='commentTarget'>
              <EarthIcon />
              <div>全員に返信できます</div>
            </div>
            <div className='toolBar'>
              <ul>
                <li>
                  <div>
                    <ImageIcon />
                  </div>
                </li>
                <li>
                  <div>
                    <GifIcon />
                  </div>
                </li>
                <li>
                  <div>
                    <VoteIcon />
                  </div>
                </li>
                <li>
                  <div>
                    <ScheduleIcon />
                  </div>
                </li>
                <li>
                  <div>
                    <LocationIcon />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}