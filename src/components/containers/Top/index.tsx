import {
  FC,
  useCallback,
  useState,
  useEffect,
  useContext,
} from 'react';
import {
  collection,
  FieldValue,
  doc,
  onSnapshot,
} from 'firebase/firestore';
import app, { db } from '~/src/Firebase';
import {
  getAuth
} from 'firebase/auth';
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
  const { userInfo } = useContext(UserContext);


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

  useEffect(() => {
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

