import { FC, useContext } from 'react';
import Image from 'next/image';
import { UserContext } from '~/src/pages/_app';
import { TweetCardStyle } from './styles';
import { FavoriteIcon } from '~/src/assets/icon/Favorite';
import { CommentIcon } from '~/src/assets/icon/Comment';
import { ReTweetIcon } from '~/src/assets/icon/ReTweet';
import { ShareIcon } from '~/src/assets/icon/Share';

export const TweetCard: FC<{
  userName: string;
  text: string
}> = ({ userName, text }) => {
  const { userInfo } = useContext(UserContext);
  return (
    <article css={TweetCardStyle}>
      <div className=''>
        <Image width={46} height={46} src={userInfo.photoUrl} alt={'ユーザー画像'} />
      </div>
      <div>
        <div className='user'>
          <div className='userName'>{userName}</div>
          <div className='userId'>@testhoge123</div>
        </div>
        <div className='tweet'>
          <div>{text}</div>
        </div>
        <div className='cardNav'>
          <div>
            <CommentIcon />
          </div>
          <div>
            <ReTweetIcon />
          </div>
          <div>
            <FavoriteIcon />
          </div>
          <div>
            <ShareIcon />
          </div>
          <div>
          </div>
        </div>
      </div>
    </article>
  );
}