import styled from '@emotion/styled';
export const CartContainer = styled("div")`
  background-color: #FDFAF4;
  padding: 90px 20px;
  
  

  .button {
    display: inline-block;
    background-color: #000;
    border-radius: 30px;
    padding: 10px 20px;
    min-width: 100px;
    text-align: center;
    cursor: pointer;
    -webkit-transition: background-color .15s ease-in-out, border-color .15s ease-in-out;
    transition: background-color .15s ease-in-out, border-color .15s ease-in-out;
    border: 1px solid transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
  }

  .button, .button span {
    color: #fff
  }

  .button i, .button span, .button path, .button svg {
    -webkit-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out
  }

  .button:hover {
    background-color: #d32f2f
  }

  .button:active {
    background-color: #de4101;
    -webkit-transform: translateY(1px);
    transform: translateY(1px)
  }

  .button--circle {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    min-width: 32px;
    padding: 0;
    border-width: 2px
  }

  .button--black {
    background-color: #232323
  }

  .button--black:hover, .button--black:active {
    background-color: #3d3d3d
  }

  .button--outline {
    background-color: #fff;
    border-color: #d32f2f
  }

  .button--outline, .button--outline span {
    color: #d32f2f
  }

  .button--outline svg path {
    fill: #d32f2f
  }

  .button--outline:hover {
    background-color: #d32f2f
  }

  .button--outline:hover, .button--outline:hover span {
    color: #fff
  }

  .button--outline:hover svg path {
    fill: #fff
  }

  .button--outline:active {
    background-color: #f24701
  }

  .button__delimiter {
    width: 1px;
    height: 25px;
    background-color: rgba(255, 255, 255, 0.25);
    margin-left: 14px;
    margin-right: 14px
  }

  .button--add svg {
    margin-right: 2px
  }

  .button--add span {
    font-weight: 600;
    font-size: 16px
  }

  .button--add:hover i {
    background-color: #fff;
    color: #fe5f1e
  }

  .button--add i {
    display: inline-block;
    border-radius: 30px;
    background-color: #fe5f1e;
    color: #fff;
    font-weight: 600;
    width: 22px;
    height: 22px;
    font-style: normal;
    font-size: 13px;
    line-height: 22px;
    position: relative;
    top: -1px;
    left: 3px
  }

  .button--cart {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 23px;
    padding: 12px 25px
  }

  .button--cart svg {
    margin-right: 8px;
    margin-bottom: 1px
  }

  .button--cart span {
    font-weight: 600;
    font-size: 16px
  }
  

  .container--cart {
    max-width: 820px;
    margin: 0px auto
  }

  .container--cart .content__title {
    margin: 0
  }

  .cart__top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center
  }

  .cart .content__title {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 32px
  }

  .cart .content__title svg {
    position: relative;
    top: -2px;
    width: 30px;
    height: 30px;
    margin-right: 10px
  }

  .cart .content__title svg path {
    stroke: #232323;
    stroke-width: 1.9
  }

  .cart__clear {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
  }

  .cart__clear span {
    display: inline-block;
    margin-left: 7px;
    color: #b6b6b6;
    font-size: 18px
  }

  .cart__clear span, .cart__clear svg, .cart__clear path {
    -webkit-transition: all .15s ease-in-out;
    transition: all .15s ease-in-out
  }

  .cart__clear:hover svg path {
    stroke: #373737
  }

  .cart__clear:hover span {
    color: #373737
  }

  .cart__item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    border-top: 1px solid #f6f6f6;
    padding-top: 30px;
    margin-top: 30px
  }

  .cart__item-img {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 15px;
    width: 10%
  }

  .cart__item-img img {
    width: 80px;
    height: 80px
  }

  .cart__item-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 40%
  }

  .cart__item-info h3 {
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.01em
  }

  .cart__item-info p {
    font-size: 18px;
    color: #8d8d8d
  }

  .cart__item-count {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 13%
  }

  .cart__item-count-minus svg path:first-of-type {
    display: none
  }

  .cart__item-count b {
    font-size: 22px
  }

  .cart__item-price {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 33%
  }

  .cart__item-price b {
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0.01em
  }

  .cart__item-remove {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    width: 4%
  }

  .cart__item-remove .button {
    border-color: #ddd
  }

  .cart__item-remove svg {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
  }

  .cart__item-remove svg path {
    fill: #d0d0d0
  }

  .cart__item-remove .button svg {
    width: 11.5px;
    height: 11.5px;
    position: relative
  }

  .cart__item-remove .button:hover, .cart__item-remove .button:active {
    border-color: #2a2a2a;
    background-color: #2a2a2a
  }

  .cart__bottom {
    margin: 50px 0
  }

  .cart__bottom-details {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between
  }

  .cart__bottom-details span {
    font-size: 22px
  }

  .cart__bottom-details span:last-of-type b {
    color: #d32f2f
  }

  .cart__bottom-buttons {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 40px
  }

  .cart__bottom-buttons .go-back-btn {
    text-decoration: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    width: 210px;
    border-color: #ddd
  }

  .cart__bottom-buttons .go-back-btn span {
    color: #c3c3c3;
    font-weight: 500;
    font-weight: 600
  }

  .cart__bottom-buttons .go-back-btn:hover {
    background-color: #111;
    border-color: #111
  }

  .cart__bottom-buttons .go-back-btn:hover span {
    color: #f6f6f6
  }

  .cart__bottom-buttons .go-back-btn svg {
    margin-right: 12px
  }

  .cart__bottom-buttons .go-back-btn svg path {
    fill: transparent;
    stroke-width: 2
  }

  .cart__bottom-buttons .pay-btn {
    font-size: 16px;
    font-weight: 600;
    width: 210px;
    padding: 16px
  }

  .cart--empty {
    margin: 0 auto;
    width: 560px;
    text-align: center
  }

  .cart--empty h2 {
    font-size: 32px;
    margin-bottom: 10px
  }

  .cart--empty p {
    font-size: 18px;
    line-height: 145.4%;
    letter-spacing: 0.01em;
    color: #777777
  }

  .cart--empty icon {
    position: relative;
    top: 2px
  }

  .cart--empty img {
    display: block;
    width: 300px;
    margin: 45px auto 60px
  }

  .cart--empty .button--black {
    padding: 12px 0 14px;
    width: 230px;
    margin: 0 auto;
    font-weight: 600;
    font-size: 18px
  }
`;