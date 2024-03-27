// CasesInfoWrap.jsx
import React from "react";
import CheryTiggo4 from "../images/chery-tiggo-4-white-3-4.png";
import MercedesC180 from "../images/mercedes-C180-black-3-4-clean-2.png";
import FeatureCard from "../images/free_rides_2.png";
import HavalJolion from "../images/haval-jolion-white-3-4.png"
import MercedesC200 from "../images/mercedes-e200-black-3-4-clean.png"
import FeatureCard1 from "../images/computer.png"
import FordTransit from "../images/ford-transit-angle.png"
import CitroënJumpy from "../images/citroen-jumpy-new.png"
import FeatureCard2 from "../images/multi_arenda_3.png"
import NissanQ from "../images/nissan-qashqai-new-white.png"
import GeelyAtlasPro from "../images/geely-atlasPro-white-3-4.png"
import ChildSeat from "../images/child_seat.png"
import JeepSahara from "../images/jeep-sahara-orange-3-4.png"
import AudiA6 from "../images/audi-a6-clean-3-4.png"
import FeatureCard3 from "../images/wheel_transfer_2.png"
import GeelyCoolray from "../images/geely-coolray-white-3-4.png"
import BMW520I from "../images/bmw-black-3-4-clean.png"
import Remote from "../images/remote_heating_3.png"
import './CasesInfoWrap.css';

function CasesInfoWrap({selectedCase}) {
    return(
        <>
        <div className='Cases_Info_Wrap'>
            {selectedCase === 'На работу' && (
                <>
                     <div className='CaseInfoCard'>
              <div className='Case_info_card_title'>Идеальные машины</div>
              <div className='Car_card_container'>
                <div className='Car_card'>
                  <img src={CheryTiggo4} className='Car_card_icon'></img>
                  <div className='Car_card_title'>Chery Tiggo 4</div>
                </div>
                <div className='Car_card_shadow'></div>
              </div>
            </div>

            <div className='CaseInfoCard'>
              <div className='Case_info_card_title'></div>
              <div className='Car_card_container'>
                <div className='Car_card' style={{ backgroundColor: 'rgb(70, 70, 70)' }} >
                  <img src={MercedesC180} className='Car_card_icon'></img>
                  <div className='Car_card_title' style={{color: 'rgb(255, 255, 255)'}}>Mercedes C180</div>
                </div>
                <div className='Car_card_shadow'></div>
              </div>
            </div>

            <div className='CaseInfoCard'>
              <div className='Case_info_card_title'>Подходящие тарифы</div>
              <div className='Offer_card_container'>
                <div className='Offer_card'>
                  <div className='Offer_card_title'style={{color: 'rgb(19, 136, 8)'}}>Фикс</div> 
                  <div className='Offer_card_line' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                  <div className='Offer_card_price'>Цена зависит от точки назначения</div>
                  <div className='Offer_details_view'>
                    <div className='Offer_details_item'>
                      <div className='Offer_details_item_dot_container'>
                        <div className='Offer_details_item_dot' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                      </div>
                      <div className='Offer_details_item_title'>Точно знаете, куда едете</div>
                    </div>
                  </div>
                  <div className='Offer_details_item'>
                      <div className='Offer_details_item_dot_container'>
                        <div className='Offer_details_item_dot' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                      </div>
                      <div className='Offer_details_item_title'>Цена не поменяется</div>
                    </div>
                </div>
                <div className='Car_card_shadow'></div>
              </div>                
            </div>

            <div className='CaseInfoCard'>
                <div className='Case_info_card_title'>Что пригодится в пути</div>
                <div className='Feature_card_container'>
                <div className='Feature_card' style={{paddingRright: '(0px)'}}>
                  <div className='Feature_card_left_content'>
                    <div className='Feature_card_title'>Бесплатные поездки</div>
                    <div className='Feature_card_subtitle'>Которые могут с вами случаться, если приводить в Драйв друзей. До 700 баллов в месяц с их поездок покрывают ваши.</div>
                  </div>
                  <img src={FeatureCard} className='Feature_card_image_bottom'></img>
                </div>
              </div>
              </div>
                </>
            )}
            {selectedCase === 'В аэропорт' && (
                <>
                    <div className='CaseInfoCard'>
              <div className='Case_info_card_title'>Идеальные машины</div>
              <div className='Car_card_container'>
                <div className='Car_card'>
                  <img src={HavalJolion} className='Car_card_icon'></img>
                  <div className='Car_card_title'>Haval Jolion</div>
                </div>
                <div className='Car_card_shadow'></div>
              </div>
            </div>

            <div className='CaseInfoCard'>
              <div className='Case_info_card_title'></div>
              <div className='Car_card_container'>
                <div className='Car_card' style={{ backgroundColor: 'rgb(70, 70, 70)' }} >
                  <img src={MercedesC200} className='Car_card_icon'></img>
                  <div className='Car_card_title' style={{color: 'rgb(255, 255, 255)'}}>Mercedes C200</div>
                </div>
                <div className='Car_card_shadow'></div>
              </div>
            </div>

            <div className='CaseInfoCard'>
              <div className='Case_info_card_title'>Подходящие тарифы</div>
              <div className='Offer_card_container'>
                <div className='Offer_card'>
                  <div className='Offer_card_title'style={{color: 'rgb(19, 136, 8)'}}>Фикс</div> 
                  <div className='Offer_card_line' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                  <div className='Offer_card_price'>Цена зависит от точки назначения</div>
                  <div className='Offer_details_view'>
                    <div className='Offer_details_item'>
                      <div className='Offer_details_item_dot_container'>
                        <div className='Offer_details_item_dot' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                      </div>
                      <div className='Offer_details_item_title'>Точно знаете, куда едете</div>
                    </div>
                  </div>
                  <div className='Offer_details_item'>
                      <div className='Offer_details_item_dot_container'>
                        <div className='Offer_details_item_dot' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                      </div>
                      <div className='Offer_details_item_title'>Цена не поменяется</div>
                    </div>
                </div>
                <div className='Car_card_shadow'></div>
              </div>                
            </div>

            <div className='CaseInfoCard'>
                <div className='Case_info_card_title'>Что пригодится в пути</div>
                <div className='Feature_card_container'>
                <div className='Feature_card' style={{paddingRright: '(0px)'}}>
                  <div className='Feature_card_left_content'>
                    <div className='Feature_card_title'>Яндекс Авто</div>
                    <div className='Feature_card_subtitle'>С Навигатором, Алисой и Яндекс Музыкой. Есть во многих машинах Драйва.</div>
                  </div>
                  <img src={FeatureCard1} class="Feature_card_image_rounded" ></img>
                </div>
              </div>
              </div>
                </>
            )}
            {selectedCase === 'Переезд' && (
                <>
                <div className='CaseInfoCard'>
              <div className='Case_info_card_title'>Идеальные машины</div>
              <div className='Car_card_container'>
                <div className='Car_card'>
                  <img src={FordTransit} className='Car_card_icon'></img>
                  <div className='Car_card_title'>Ford Transit</div>
                </div>
                <div className='Car_card_shadow'></div>
              </div>
            </div>

            <div className='CaseInfoCard'>
              <div className='Case_info_card_title'></div>
              <div className='Car_card_container'>
                <div className='Car_card' >
                  <img src={CitroënJumpy} className='Car_card_icon'></img>
                  <div className='Car_card_title'>Citroën Jumpy</div>
                </div>
                <div className='Car_card_shadow'></div>
              </div>
            </div>

            <div className='CaseInfoCard'>
              <div className='Case_info_card_title'>Подходящие тарифы</div>
              <div className='Offer_card_container'>
                <div className='Offer_card'>
                  <div className='Offer_card_title'style={{color: 'rgb(19, 136, 8)'}}>Часы</div> 
                  <div className='Offer_card_line' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                  <div className='Offer_card_price'>от 500 ₽ за 2 часа</div>
                  <div className='Offer_details_view'>
                    <div className='Offer_details_item'>
                      <div className='Offer_details_item_dot_container'>
                        <div className='Offer_details_item_dot' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                      </div>
                      <div className='Offer_details_item_title'>Когда хотите покататься</div>
                    </div>
                  </div>
                  <div className='Offer_details_item'>
                      <div className='Offer_details_item_dot_container'>
                        <div className='Offer_details_item_dot' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                      </div>
                      <div className='Offer_details_item_title'>Километры оплачиваются отдельно</div>
                    </div>
                </div>
                <div className='Car_card_shadow'></div>
              </div>                
            </div>

            <div className='CaseInfoCard'>
                <div className='Case_info_card_title'>Что пригодится в пути</div>
                <div className='Feature_card_container'>
                <div className='Feature_card' style={{paddingRright: '(0px)'}}>
                  <div className='Feature_card_left_content'>
                    <div className='Feature_card_title'>Аренда двух машин</div>
                    <div className='Feature_card_subtitle'>Чтобы доехать на одной до другой. Например, на обычной Шкоде до фургона, который далеко.</div>
                  </div>
                  <img src={FeatureCard2}class="Feature_card_image_top" ></img>
                </div>
              </div>
              </div>
                
                </>
            )}
            {selectedCase === 'С детьми на дачу' && (
                <>
                <div className='CaseInfoCard'>
              <div className='Case_info_card_title'>Идеальные машины</div>
              <div className='Car_card_container'>
                <div className='Car_card'>
                  <img src={NissanQ} className='Car_card_icon'></img>
                  <div className='Car_card_title'>Nissan Qashqai</div>
                </div>
                <div className='Car_card_shadow'></div>
              </div>
            </div>

            <div className='CaseInfoCard'>
              <div className='Case_info_card_title'></div>
              <div className='Car_card_container'>
                <div className='Car_card' >
                  <img src={GeelyAtlasPro} className='Car_card_icon'></img>
                  <div className='Car_card_title' >Geely Atlas Pro</div>
                </div>
                <div className='Car_card_shadow'></div>
              </div>
            </div>

            <div className='CaseInfoCard'>
              <div className='Case_info_card_title'>Подходящие тарифы</div>
              <div className='Offer_card_container'>
                <div className='Offer_card'>
                  <div className='Offer_card_title'style={{color: 'rgb(19, 136, 8)'}}>Дни</div> 
                  <div className='Offer_card_line' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                  <div className='Offer_card_price'>от 3200 ₽ за 1 день</div>
                  <div className='Offer_details_view'>
                    <div className='Offer_details_item'>
                      <div className='Offer_details_item_dot_container'>
                        <div className='Offer_details_item_dot' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                      </div>
                      <div className='Offer_details_item_title'>Можно далеко уехать</div>
                    </div>
                  </div>
                  <div className='Offer_details_item'>
                      <div className='Offer_details_item_dot_container'>
                        <div className='Offer_details_item_dot' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                      </div>
                      <div className='Offer_details_item_title'>Если машина нужна надолго</div>
                    </div>
                </div>
                <div className='Car_card_shadow'></div>
              </div>                
            </div>

            <div className='CaseInfoCard'>
                <div className='Case_info_card_title'>Что пригодится в пути</div>
                <div className='Feature_card_container'>
                <div className='Feature_card' style={{paddingRright: '(0px)'}}>
                  <div className='Feature_card_left_content'>
                    <div className='Feature_card_title'>Детские кресла</div>
                    <div className='Feature_card_subtitle'>Есть в некоторых машинах, которые легко найти в приложении по одноимённому фильтру.</div>
                  </div>
                  <img src={ChildSeat}class="Feature_card_image_rounded"></img>
                </div>
              </div>
              </div>
                
                </>
            )}
            {selectedCase === 'Покататься' && (
                <>
                 <div className='CaseInfoCard'>
                 <div className='Case_info_card_title'>Идеальные машины</div>
                 <div className='Car_card_container'>
                   <div className='Car_card' style={{ backgroundColor: 'rgb(237, 118, 14)' }} >
                     <img src={JeepSahara} className='Car_card_icon'></img>
                     <div className='Car_card_title' style={{color: 'rgb(255, 255, 255)'}}>Jeep Sahara</div>
                   </div>
                   <div className='Car_card_shadow'></div>
                 </div>
               </div>
   
               <div className='CaseInfoCard'>
                 <div className='Case_info_card_title'></div>
                 <div className='Car_card_container'>
                   <div className='Car_card'style={{ backgroundColor: 'rgb(70, 70, 70)' }}  >
                     <img src={AudiA6} className='Car_card_icon'></img>
                     <div className='Car_card_title' style={{color: 'rgb(255, 255, 255)'}}>Audi A6</div>
                   </div>
                   <div className='Car_card_shadow'></div>
                 </div>
               </div>
   
               <div className='CaseInfoCard'>
                 <div className='Case_info_card_title'>Подходящие тарифы</div>
                 <div className='Offer_card_container'>
                   <div className='Offer_card'>
                     <div className='Offer_card_title'style={{color: 'rgb(19, 136, 8)'}}>Минуты</div> 
                     <div className='Offer_card_line' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                     <div className='Offer_card_price'>от 23 ₽/мин</div>
                     <div className='Offer_details_view'>
                       <div className='Offer_details_item'>
                         <div className='Offer_details_item_dot_container'>
                           <div className='Offer_details_item_dot' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                         </div>
                         <div className='Offer_details_item_title'>Для коротких поездок</div>
                       </div>
                     </div>
                     <div className='Offer_details_item'>
                         <div className='Offer_details_item_dot_container'>
                           <div className='Offer_details_item_dot' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                         </div>
                         <div className='Offer_details_item_title'>Или когда не знаете, куда поедете</div>
                       </div>
                   </div>
                   <div className='Car_card_shadow'></div>
                 </div>                
               </div>
   
               <div className='CaseInfoCard'>
                   <div className='Case_info_card_title'>Что пригодится в пути</div>
                   <div className='Feature_card_container'>
                   <div className='Feature_card' style={{paddingRright: '(0px)'}}>
                     <div className='Feature_card_left_content'>
                       <div className='Feature_card_title'>Передача руля</div>
                       <div className='Feature_card_subtitle'>Тому, кто тоже есть в Драйве с доступом к такой же машине.</div>
                     </div>
                     <img src={FeatureCard3} class="Feature_card_image_bottom"></img>
                   </div>
                   <div className="Car_card_shadow"></div>
                 </div>
                 </div>
                   
                   </>
            )}
            {selectedCase === 'На свидание' && (
                <>
                <div className='CaseInfoCard'>
                <div className='Case_info_card_title'>Идеальные машины</div>
                <div className='Car_card_container'>
                  <div className='Car_card' > 
                    <img src={GeelyCoolray} className='Car_card_icon'></img>
                    <div className='Car_card_title' >Geely Coolray Flagship</div>
                  </div>
                  <div className='Car_card_shadow'></div>
                </div>
              </div>
  
              <div className='CaseInfoCard'>
                <div className='Case_info_card_title'></div>
                <div className='Car_card_container'>
                  <div className='Car_card'style={{ backgroundColor: 'rgb(70, 70, 70)' }}  >
                    <img src={BMW520I} className='Car_card_icon'></img>
                    <div className='Car_card_title' style={{color: 'rgb(255, 255, 255)'}}>BMW 520i</div>
                  </div>
                  <div className='Car_card_shadow'></div>
                </div>
              </div>
  
              <div className='CaseInfoCard'>
                <div className='Case_info_card_title'>Подходящие тарифы</div>
                <div className='Offer_card_container'>
                  <div className='Offer_card'>
                    <div className='Offer_card_title'style={{color: 'rgb(19, 136, 8)'}}>Часы</div> 
                    <div className='Offer_card_line' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                    <div className='Offer_card_price'>от 700 ₽ за 2 часа</div>
                    <div className='Offer_details_view'>
                      <div className='Offer_details_item'>
                        <div className='Offer_details_item_dot_container'>
                          <div className='Offer_details_item_dot' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                        </div>
                        <div className='Offer_details_item_title'>Когда хотите покататься</div>
                      </div>
                    </div>
                    <div className='Offer_details_item'>
                        <div className='Offer_details_item_dot_container'>
                          <div className='Offer_details_item_dot' style={{backgroundColor: 'rgb(19, 136, 8)'}}></div>
                        </div>
                        <div className='Offer_details_item_title'>Километры оплачиваются отдельно</div>
                      </div>
                  </div>
                  <div className='Car_card_shadow'></div>
                </div>                
              </div>
  
              <div className='CaseInfoCard'>
                  <div className='Case_info_card_title'>Что пригодится в пути</div>
                  <div className='Feature_card_container'>
                  <div className='Feature_card' style={{paddingRright: '(0px)'}}>
                    <div className='Feature_card_left_content'>
                      <div className='Feature_card_title'>Удаленный прогрев</div>
                      <div className='Feature_card_subtitle'>Или охлаждение. Смотря какое время года. Включается по кнопке в приложении.</div>
                    </div>
                    <img src={Remote} class="Feature_card_image_bottom"></img>
                  </div>
                  <div className="Car_card_shadow"></div>
                </div>
                </div>
                  
                  </>
            )}
        </div>
        </>
    )
}

export default CasesInfoWrap;