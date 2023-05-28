/** @jsxImportSource @emotion/react */
import { FC, useCallback, useState, useEffect, useContext, useMemo } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { UserContext } from '~/src/pages/_app';
import { getAuth } from 'firebase/auth';
import { ArrowIcon } from '~/src/assets/icon/Arrow';
import { style } from './styles';
import { Button } from '~/src/components/common/atoms/Button';
import { ScheduleIcon } from '~/src/assets/icon/Schedule';

const auth = getAuth();

export const ProfileContainer: FC = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const router = useRouter();

  const isMe = useMemo(
    () => userInfo.userId === auth.currentUser?.uid,
    [userInfo.userId]
  );

  const updateUserInfo = useCallback(() => {
    const user = auth.currentUser;
    if (!user) return;
    setUserInfo({
      userId: user.uid,
      name: user.displayName || '',
      photoUrl: user.photoURL || '',
      isLogin: true,
    });
  }, []);

  useEffect(() => {
    updateUserInfo();
  }, []);

  return (
    <div className="profile" css={style}>
      <div className="header">
        <div className="arrow" onClick={() => router.back()}>
          <ArrowIcon />
        </div>
        <div className="headerUser">
          <h2>{userInfo.name}</h2>
          <p>2件のツイート</p>
        </div>
      </div>
      <div className="body">
        <div className="background" />
        <div className="contents">
          <div className="contentsHeader">
            <div className="userIcon">
              <Image
                alt="ユーザーアイコン"
                src={userInfo.photoUrl}
                width={78}
                height={78}
              />
            </div>
            <div className="followButton">
              {/* 自分の場合はプロフィール編集ボタンに変える */}
              {isMe ? (
                <Button
                  type={'other'}
                  label="プロフィール編集"
                  buttonType="button"
                />
              ) : (
                <Button
                  type={'secondary'}
                  label="フォロー"
                  buttonType="button"
                />
              )}
            </div>
          </div>
          <div className="user">
            <div className="userName">{userInfo.name}</div>
            <div className="userId">@{userInfo.userId}</div>
          </div>
          <div className="contentsText">
            {/* @TODO ここの部分をAPIから取得できるようにしておく */}
            ほげです。
            <br />
            test Test。
            <br />
            フロントエンドエンジニアをやってます。 Reactが好きです。
          </div>
          <div className="annotation">
            <ScheduleIcon />
            <p>2023年3月からTwitterを利用しています。</p>
          </div>
          <div className="followInfo">
            <div className="">
              <span>1000</span>フォロー中
            </div>
            <div className="">
              <span>1000</span>フォロワー
            </div>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <div className="active">ツイート</div>
            </li>
            <li>
              <div>返信</div>
            </li>
            <li>
              <div>メディア</div>
            </li>
            <li>
              <div>いいね</div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}