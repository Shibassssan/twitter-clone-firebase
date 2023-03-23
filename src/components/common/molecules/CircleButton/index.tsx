import React, { FC } from 'react';
import { style } from './styles';
import { WingIcon } from '~/src/assets/icon/Wing';
import Link from 'next/link';
import { Href } from '~/src/define';

export const CircleButton: FC<{
  Icon?: React.ReactElement
}> = ({
  Icon
}) => {
  return (
    <div css={style}>
      <Link href={Href.Tweet}>
        <div className='iconWrap'>
          {Icon ?? <WingIcon />}
        </div>
      </Link>
    </div>
  );
}