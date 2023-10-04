"use client"

import type { AppProps } from 'next/app'
import Image from 'next/image'

import { CartProvider, useShoppingCart } from 'use-shopping-cart'

import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import { Container, Header, ShoppingBagButton } from '../styles/pages/app'
import { Handbag } from 'phosphor-react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const { cartCount } = useShoppingCart()

  const stripeKey = process.env.STRIPE_PUBLIC_KEY
  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}`

  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={`${stripeKey}`}
      currency="BRL"
      successUrl={successUrl}
      cancelUrl={cancelUrl}
      shouldPersist={true}
    >
      <Container>
    
        <Header>
          <Image src={logoImg} alt="" />
          <ShoppingBagButton>
            <Handbag size={24} weight="bold" />
            <span>{cartCount}</span>
          </ShoppingBagButton>
        </Header>
        <Component {...pageProps} />
    
      </Container>
    </CartProvider>
  )
}
