import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const ShoppingBagButton = styled('button', {
  padding: '0.75rem',
  backgroundColor: '$gray800',
  borderRadius: 6,
  color: '$gray300',

  border: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  position: 'relative',

  '&:hover': {
    color: '$gray500',
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