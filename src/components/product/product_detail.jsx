// npm install react-icons --save
// yarn add react-icons
// import { HiPlus, HiMinus } from 'react-icons/hi';
import styles from './product_detail.module.css';

function ProductDetail() {
  return (
    // 상단에 navbar

    <div className={styles.productWrap}>
      <div className={styles.productContainer}>
        <div className={(styles.productImg, styles.productItems)}>
          <img src="img/pix01.jpeg" alt="productIMG" width="700px"></img>
        </div>
        <div className={styles.productItems}>
          <div className={(styles.productTitle, styles.productItemsList)}>
            <span className={styles.titleMain}>[회사이름] : 상품명</span>
            <span className={styles.titleSub}>간단한 설명입니다. </span>
          </div>
          <div className={(styles.productPrice, styles.productItemsList)}>
            <span className={styles.priceSub}>000원</span>
          </div>
          <div className={(styles.productUnit, styles.productItemsList)}>
            <span className={styles.unitMain}>판매단위</span>
            <span className={styles.unitSub}>1개</span>
          </div>
          <div className={(styles.productQuantity, styles.productItemsList)}>
            <span className={styles.QuantityMain}>구매수량</span>
            <span className={styles.QuantitySub}>
              <button className={styles.btQuantity}>{/* <HiMinus /> */}</button>
              <input
                type="number"
                className={styles.inputQuantity}
                value="1"
              ></input>
              <button className={styles.btQuantity}>{/* <HiPlus /> */}</button>
            </span>
          </div>
          <div className={(styles.productTotalPrice, styles.productItemsList)}>
            <span className={styles.totalMain}>총가격:</span>
            <span className={styles.totalSub}>000원</span>
          </div>
          <div>
            <button className={styles.info_basket}>장바구니</button>
            <button className={styles.info_buy}>구매하기</button>
          </div>
        </div>
      </div>
      <div className={styles.product_info_wrap}>
        <ul className={styles.product_nav_container}>
          <li className={styles.product_nav_items}>
            <span className={styles.nav_explain}>상품설명</span>
          </li>
          <li className={styles.product_nav_items}>
            <span className={styles.nav_explain}>상세정보</span>
          </li>
          <li className={styles.product_nav_items}>
            <span className={styles.nav_explain}>후기</span>
          </li>
          <li className={styles.product_nav_items}>
            <span className={styles.nav_explain}>문의</span>
          </li>
        </ul>
      </div>
      <div className={styles.productImg2}>
        <img src="img/pix01.jpeg" alt="productIMG"></img>
      </div>
      <div className={styles.why_wrap}>
        <div className={styles.why_title}>WHY SmallMarket</div>
        <div className={styles.why_container}>
          <div className={styles.why_items}>
            <div className={styles.why_img}>
              <img src="img/pix01.jpeg" alt="why_imgs"></img>
            </div>
            <div className={styles.why_info}>
              <div className={styles.why_info_title}>깐깐한 상품위원회</div>
              <div>
                <p>
                  나와 내 가족이 먹고 쓸 상품을 고르는
                  <br />
                  마음으로 매주 상품을 직접 먹어보고 ,
                  <br />
                  경험해보고 성분 , 맛 , 안정성 등 다각도의
                  <br />
                  기준을 통과한 상품만을 판매합니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.why_items}>
            <div className={styles.why_img}>
              <img src="img/pix01.jpeg" alt="why_imgs"></img>
            </div>
            <div className={styles.why_info}>
              <div className={styles.why_info_title}>차별화된 SmallMarket</div>
              <div>
                <p>
                  전국 각지와 해외의 훌륭한 생산자가
                  <br />
                  믿고 선택하는 파트너 , SmallMarket
                  <br />
                  SmallMarket의 상품을 믿고 만나보세요
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className={styles.why_items}>
            <div className={styles.why_img}>
              <img src="img/pix01.jpeg" alt="why_imgs"></img>
            </div>
            <div className={styles.why_info}>
              <div className={styles.why_info_title}>신선한 배송</div>
              <div>
                <p>
                  온라인 업계 최초로 산지에서 문 앞까지
                  <br />
                  상온 , 냉장 , 냉동 상품을 분리 포장 후
                  <br />
                  최적의 온도를 유지하는 냉장 배송 시스템,
                  <br />
                  상품을 신선하게 전해드립니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.why_items}>
            <div className={styles.why_img}>
              <img src="img/pix01.jpeg" alt="why_imgs"></img>
            </div>
            <div className={styles.why_info}>
              <div className={styles.why_info_title}>
                고객 , 생산자를 위한 최선의 가격
              </div>
              <div>
                <p>
                  매주 대형 마트와 주요 온라인 마트의 가격
                  <br />
                  변동 상황을 확인해 신선식품은 품질을
                  <br />
                  타협하지 않는 선에서 최선의 가격으로 ,
                  <br />
                  합리적인 가격으로 제공해 드립니다.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.why_items}>
            <div className={styles.why_img}>
              <img src="img/pix01.jpeg" alt="why_imgs"></img>
            </div>
            <div className={styles.why_info}>
              <div className={styles.why_info_title}>
                환경을 생각하는 지속 가능한 유통
              </div>
              <div>
                <p>
                  친환경 포장재부터 생산자가 상품에만
                  <br />
                  집중할 수 있는 직매입 유통구조까지,
                  <br />
                  지속 가능한 유통을 고민하며 스몰마켓을 있게
                  <br />
                  하는 모든 환경이 더 나아질 수 있도록 노력하겠습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    //하단에 푸터
  );
}

export default ProductDetail;
