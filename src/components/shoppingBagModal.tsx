import Image from "next/image";

import * as Dialog from '@radix-ui/react-dialog';
import { ButtonClose, Content, ImageContainer, PriceContainer, Title } from '../styles/components/shoppingBagModal';

import camiseta from '../assets/camisetas/1.png'
import { X } from "phosphor-react";

export function ShoppingBagModal() {
  return (
    <Dialog.Portal>
      <Content>
        <ButtonClose>
          <X weight="bold" size={24} />
        </ButtonClose>

        <ul>
          <Title>Sacola de compras</Title>
          <li>
            <ImageContainer>
              <Image src={camiseta} width={94} height={94} alt="" />
            </ImageContainer>
            <div>
              <span>Camiseta X</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </div>
          </li>

          <li>
            <ImageContainer>
              <Image src={camiseta} width={94} height={94} alt="" />
            </ImageContainer>
            <div>
              <span>Camiseta X</span>
              <strong>R$ 79,90</strong>
              <button>Remover</button>
            </div>
          </li>
        </ul>

        <footer>
          <PriceContainer>
            <div>
              <p>Quantidade</p>
              <p>3 itens</p>
            </div>

            <div>
              <strong>Valor total</strong>
              <span>R$ 270,00</span>
            </div>
          </PriceContainer>

          <button>
            Finalizar compra
          </button>
        </footer>
      </Content>
    </Dialog.Portal>
  )
}