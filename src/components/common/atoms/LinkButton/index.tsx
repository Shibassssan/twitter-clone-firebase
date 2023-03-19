/** @jsxImportSource @emotion/react */
import React, { FC, useCallback, useContext, useState } from 'react';
import Link from 'next/link';

export const LinkButton: FC<{
  href: string
  children?: React.ReactNode;
}> = ({ href, children }) => {
  return (
    <Link href={href}>
      {children}
    </Link>
  );
}