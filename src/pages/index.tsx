import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'

import Stripe from 'stripe'
import { stripe } from '../lib/stripe'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { HomeContainer, ProductItem, ShoppingBagButton } from '../styles/pages/home'
import { Handbag } from 'phosphor-react'

import { useShoppingCart } from 'use-shopping-cart'
import { Product } from 'use-shopping-cart/core'

interface HomeProps {
  products: Product[]
}


export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <ProductItem className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>

                  <ShoppingBagButton onClick={() => addItem(product)}>
                    <Handbag size={24} weight="bold" />
                  </ShoppingBagButton>
                </footer>
              </ProductItem>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  // Pegar apenas os dados que preciso:
  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount! / 100) // unit_amount = preço em centavos
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
