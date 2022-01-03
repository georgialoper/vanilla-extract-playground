import React, { ReactNode } from 'react';
import { Box } from '../components/Box';
import * as customStyles from './FrameComponent.css'

type FrameComponentProps = {
  children: ReactNode
}

export default function FrameComponent({ children }: FrameComponentProps) {
  const linkTagMarkup = () => {
    return { __html: '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap" rel="stylesheet">' };
  };
  return (
    <>
      <div dangerouslySetInnerHTML={linkTagMarkup()} />
      <Box className={customStyles.base}>{children}</Box>
    </>)
    ;
}