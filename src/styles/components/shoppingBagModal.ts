import { keyframes, styled } from "..";
import * as Dialog from '@radix-ui/react-dialog';

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0%)',
  }
})

const slideOut = keyframes({
  from: {
    transform: 'translateX(0%)',
  },
  to: {
    transform: 'translateX(100%)',
  }
})

export const Content = styled(Dialog.Content, {
  width: 480,
  height: '100vh',
  padding: '3rem 5rem',
  backgroundColor: '$gray800',
  position: 'fixed',
  top: 0,
  right: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  boxShadow: '-4px 0px 30px 0px rgba(0, 0, 0, 0.80)',

  ul: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
  },

  'ul li': {
    display: 'flex',
    gap: '1.25rem',
    marginBottom: '1.25rem',
  },

  'ul li div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '0.75rem',
  },

  'ul li button': {
    border: 0,
    background: 'none',

    fontSize: '1rem',
    fontWeight: 'bold',
    color: '$green500',
    textAlign: 'left',

    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    }
  },

  footer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3.5625rem',

    button: {
      marginTop: 'auto',
      backgroundColor: '$green500',
      border: 0,
      color: '$white',
      borderRadius: 8,
      padding: '1.25rem',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '$md',
  
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed',
      },
  
      '&:not(:disabled):hover': {
        backgroundColor: '$green300',
      }
    }
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 200ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 200ms ease-out`,
  }
})

export const Title = styled(Dialog.Title, {
  marginBottom: '2rem',
  fontSize: '1.25rem',
})

export const ButtonClose = styled(Dialog.Close, {
  position: 'absolute',
  top: 24,
  right: 24,

  border: 0,
  background: 'none',
  lineHeight: 0,

  color: '$gray500',
  cursor: 'pointer',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 94,
  height: 94,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  }
})

export const PriceContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  strong: {
    fontSize: '1.125rem',
  },

  span: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  }
})