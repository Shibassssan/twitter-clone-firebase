/** @jsxImportSource @emotion/react */
import { FC, useCallback, useState } from "react";
import { cx } from "@emotion/css";
import { style, inputStyle } from "./style";
import { Footer } from "../Footer";
import { Header } from "../Header";
// import { Top } from "../Top";
import { Button } from "../common/Button";
import {
  addDoc,
  getDocs,
  collection,
  serverTimestamp,
  FieldValue,
  doc,
  onSnapshot
} from 'firebase/firestore';
import app, { db, storage } from "../../Firebase";
import { TopStyle } from "../Top/style";
import { useEffect } from "react";

export const Input: FC<{
  label: string;
}> = ({ label }) => {
  const [isFocus, setIsFocus] = useState(false);
  const handleFocus = useCallback(() => setIsFocus(true), []);
  const handleBlur = useCallback(() => setIsFocus(false), []);

  return (
    <div className={cx({ "add-focus": isFocus })} css={inputStyle}>
      <input
        type="text"
        autoComplete="off"
        onBlur={() => handleBlur()}
        onFocus={() => handleFocus()}
      />
      <label>{label}</label>
    </div>
  );
};


type Tweets = {
  tweet: string;
  userName: string;
  timestamp: FieldValue;
};

export const Top: FC = () => {
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
        userName: "hoge3",
        tweet: text,
        timestamp: serverTimestamp(),
      });
      console.log('result', result)
    } catch (error) {
      console.log('error!!!!!', error);
    }
  }, [text]);

  const [tweets, setTweets] = useState<Tweets[]>([]);
  const getTweets = useCallback(async () => {
    try {
      //@ts-ignore
      await onSnapshot(
        collection(db, 'posts'),
        (posts) => {
          const tweets = posts.docs.map((doc) => doc.data() as Tweets);
          setTweets([...tweets]);
        }
      )  as Tweets[];
    } catch (error) {
      console.log('get tweet error', error);
    }
  }, []);

  useEffect(() => {
    getTweets();
  }, [])

  return (
    <div className="" css={TopStyle}>
      <div css={{ margin: '10px' }}>
        {/* inputではなく、textareaを使う */}
        {/* <Input label={'ツイート'} /> */}
        <textarea
          name="ツイート"
          maxLength={150}
          placeholder="ツイートする"
          value={text}
          onChange={(e) => onChangeText(e)}
        />
      </div>
      <div css={{ margin: '10px' }}>
        <Button label={'投稿'} onClick={sendTweet} disabled={!text} />
      </div>
      <section className="timeline">
        <h3>タイムライン</h3>
        <div>
          {tweets.map((tweet, index) => (
            <div key={index}>
              {tweet.userName && tweet.tweet && (
                <>
                  <div>{tweet.userName}</div>
                  <div>{tweet.tweet}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const Login: FC = () => {
  return (
    <>
      <div css={{ margin: "20px 10px" }}>
        <Input label={"メールアドレス"} />
      </div>
      <div css={{ margin: "10px" }}>
        <Input label={"パスワード"} />
      </div>
      <div css={{ margin: "10px" }}>
        <Button label={"ログイン"} />
      </div>
    </>
  );
};

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <head></head>
      <body css={style}>
        <Header />
        <main>
          <div css={{ marginTop: "50px" }}></div>
          <section>{isLogin ? <Top /> : <Login />}</section>
        </main>
        <Footer />
      </body>
    </>
  );
};

export default App;
