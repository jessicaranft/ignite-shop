import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) /2 ))',
  margin: 'auto',
  minHeight: 656,
})

export const ProductItem = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover'
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',

    borderRadius: 6,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    backgroundColor: 'rgba(0, 0, 0, 0.6)',

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s ease-in-out',

    strong: {
      fontSizes: '$lg',
      color: '$gray100',
      lineHeight: '160%',
    },

    span: {
      fontSize: 'xl',
      fontWeight: 'bold',
      color: '$green300',
    },

    '& > div:first-child': {
      display: 'flex',
      flexDirection: 'column',
    }
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    }
  }
})

export const ShoppingBagButton = styled('button', {
  padding: '0.75rem',
  backgroundColor: '$green500',
  borderRadius: 6,
  color: '$white',

  border: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  position: 'relative',

  '&:hover': {
    backgroundColor: '$green300',
  },

  span: {
    backgroundColor: '$green500',
    width: 24,
    height: 24,

    border: '3px solid $gray900',
    borderRadius: 999,

    fontSize: '0.875rem',
    fontWeight: 'bold',
    color: '$white',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    right: -7,
    top: -7,
  }
})