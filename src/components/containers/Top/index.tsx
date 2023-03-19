/** @jsxImportSource @emotion/react */
import {
  FC,
  useCallback,
  useState,
  useEffect,
  useContext,
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
import {
  signOut,
  getAuth
} from 'firebase/auth';
import Cookies from 'js-cookie';
import { COOKIES } from '~/src/define';
import { TopStyle } from './style';
import { UserContext } from '~/src/pages/_app';
import { TweetCard } from '~/src/components/common/organisms/TweetCard';

type Tweets = {
  tweet: string;
  userName: string;
  timestamp: FieldValue;
};

const auth = getAuth(app);

export const Top: FC = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  const [text, setText] = useState('');
  const onChangeText = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value),
    []
  );
  const sendTweet = useCallback(async () => {
    if (!text) return;
    try {
      const postCollection = collection(db, 'posts');
      const result = await addDoc(postCollection, {
        // id: postCollection.id,
        userName: 'hoge3',
        tweet: text,
        timestamp: serverTimestamp(),
      });
      console.log('result', result);
    } catch (error) {
      console.log('error!!!!!', error);
    }
  }, [text]);

  const [tweets, setTweets] = useState<Tweets[]>([]);
  const getTweets = useCallback(async () => {
    try {
      //@ts-ignore
      (await onSnapshot(collection(db, 'posts'), (posts) => {
        const tweets = posts.docs.map((doc) => doc.data() as Tweets);
        setTweets([...tweets]);
      })) as Tweets[];
    } catch (error) {
      console.log('get tweet error', error);
    }
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setUserInfo({
        name: '',
        photoUrl: '',
        isLogin: false,
        userId: '',
      });
      Cookies.remove(COOKIES.MEMBER)
    } catch (error) {
      console.error('error', error);
    }
  };

  const getUserInfo = useCallback(() => {
    const user = auth.currentUser;
    if (!user) return;
    setUserInfo({
      userId: user.uid,
      name: user.displayName || '',
      photoUrl: user.photoURL || '',
      isLogin: true,
    })
  }, []);

  useEffect(() => {
    getUserInfo();
    getTweets();
  }, []);

  return (
    <div className="" css={TopStyle}>
      <section className="timeline">
        <div>
          {tweets.map((tweet, index) => (
            <div key={index}>
              {tweet.userName && tweet.tweet && (
                  <TweetCard userName={tweet.userName} text={tweet.tweet} />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

