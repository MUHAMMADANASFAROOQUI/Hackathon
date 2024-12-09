import Image from "next/image";
import Link from "next/link";
import Cheklist from "../public/Ceklist.png";
import tick from "../public/tick.png";
import price from "../public/price.png";
import card1 from "../public/card1.jpeg";
import View1 from "../public/View1.png";
import View2 from "../public/View2.png";
import View3 from "../public/View3.png";
import Reviews from "../public/Reviews.png";
import Reviews1 from "../public/Reviews1.png";
import spesfication8 from "../public/spesfication8.png";
import Profill1 from "../public/Profill1.png";
import Profill2 from "../public/Profill2.png";
import arrow from "../public/arrow.png"
import Button from "../public/Button.png";
import image7 from "../public/image7.png";
import image8 from "../public/image8.png";
import Car from "../public/Car.png";
import Car1 from "../public/Car1.png";
import Car2 from "../public/Car2.png";
import Car3 from "../public/Car3.png";
import spesfication from "../public/spesfication.png"
import spesfication2 from "../public/spesfication2.png"
import spesfication3 from "../public/spesfication3.png";
import spesfication4 from "../public/spesfication4.png"
import spesfication5 from "../public/spesfication5.png";
import Like1 from "../public/Like1.png";
import Like2 from "../public/Like2.png";
import Footer from "../components/footer";

export default function Detail(){
    return(
    <div>
        <div className="flex">
            <div className="bg-white w-[360px] h-[1600px]">
               <div className="ml-[32px] mt-[32px] w-[176px] h-[352px]">
                      <h1 className="text-[12px] font-semibold tracking-percent1 text-text1">TYPE
                      </h1>
                      <div className="mt-[36px]">
                      <div className="flex ">
                      <Image src={tick} alt="tick" className="w-[20px] mt-[3px]  h-[20px]"></Image>
                      <h1 className="font-semibold text-[16px] ml-[10px]  ">Sport</h1>
                      <h1 className="text-[16px] font-semibold text-text1 ml-2 ">(10)</h1>
                      </div>
                      <div className="flex ">
                      <Image src={tick} alt="tick" className="w-[20px] mt-[35px]  h-[20px]"></Image>
                      <h1 className="font-semibold text-[16px] ml-[10px]  mt-[32px] ">SUV</h1>
                      <h1 className="text-[16px] font-semibold text-text1  mt-[32px] ml-2">(12)</h1>
                      </div>
                      <div className="flex ">
                      <Image src={Cheklist} alt="tick" className="w-[20px] mt-[35px]  h-[20px]"></Image>
                      <h1 className="font-semibold text-[16px] ml-[10px]  mt-[32px] ">MPV</h1>
                      <h1 className="text-[16px] font-semibold text-text1  mt-[32px] ml-2">(16)</h1>
                      </div>
                      <div className="flex ">
                      <Image src={Cheklist} alt="tick" className="w-[20px] mt-[35px]  h-[20px]"></Image>
                      <h1 className="font-semibold text-[16px] ml-[10px]  mt-[32px] ">Sedan</h1>
                      <h1 className="text-[16px] font-semibold text-text1  mt-[32px] ml-2">(20)</h1>
                      </div>
                      <div className="flex ">
                      <Image src={Cheklist} alt="tick" className="w-[20px] mt-[35px]  h-[20px]"></Image>
                      <h1 className="font-semibold text-[16px] ml-[10px]  mt-[32px] ">Coupe</h1>
                      <h1 className="text-[16px] font-semibold text-text1  mt-[32px] ml-2">(14)</h1>
                      </div>
                      <div className="flex ">
                      <Image src={Cheklist} alt="tick" className="w-[20px] mt-[35px]  h-[20px]"></Image>
                      <h1 className="font-semibold text-[16px] ml-[10px]  mt-[32px] ">Hatchback</h1>
                      <h1 className="text-[16px] font-semibold text-text1  mt-[32px] ml-2">(14)</h1>
                      </div>
                      </div>

                      <div className="mt-[56px] w-[176px] h-[352px]">
                      <h1 className="text-[12px] font-semibold tracking-percent1 text-text1">C A P A C I T Y
                      </h1>
                      <div className="mt-[36px]">
                      <div className="flex ">
                      <Image src={tick} alt="tick" className="w-[20px] mt-[3px]  h-[20px]"></Image>
                      <h1 className="font-semibold text-[16px] ml-[10px]  ">2 Person</h1>
                      <h1 className="text-[16px] font-semibold text-text1 ml-2 ">(10)</h1>
                      </div>
                      <div className="flex ">
                      <Image src={tick} alt="tick" className="w-[20px] mt-[35px]  h-[20px]"></Image>
                      <h1 className="font-semibold text-[16px] ml-[10px]  mt-[32px] ">4 Person</h1>
                      <h1 className="text-[16px] font-semibold text-text1  mt-[32px] ml-2">(14)</h1>
                      </div>
                      <div className="flex ">
                      <Image src={Cheklist} alt="tick" className="w-[20px] mt-[35px]  h-[20px]"></Image>
                      <h1 className="font-semibold text-[16px] ml-[10px]  mt-[32px] ">6 Person</h1>
                      <h1 className="text-[16px] font-semibold text-text1  mt-[32px] ml-2">(12)</h1>
                      </div>
                      <div className="flex ">
                      <Image src={Cheklist} alt="tick" className="w-[20px] mt-[35px]  h-[20px]"></Image>
                      <h1 className="font-semibold text-[16px] ml-[10px]  mt-[32px] ">8 or more</h1>
                      <h1 className="text-[16px] font-semibold text-text1  mt-[32px] ml-2">(16)</h1>
                      </div>
                      </div>

                      <div className="mt-[56px] w-[176px] h-[352px]">
                      <h1 className="text-[12px] font-semibold tracking-percent1 text-text1">P R I C E
                      </h1>
                      <div className="mt-[36px]">
                      <Image src={price} alt="price-range" className="w-[296px] h-[20px] "></Image>
                      <h1 className="text-[16px] font-semibold leading-[150%] tracking-percent1 mt-[10px]">Max. $100.00</h1>
                      </div>
                      </div>
                      </div>
               </div>
               
            </div>
            
            <div className="h-[2120px] w-full" style={{ backgroundColor: "#F3F5F7" }}>
   <div className="m-[32px]">
    <div className="flex">
    <div className="">
      <Image src={card1} alt="card1" className="w-[492px] h-[360px] bg-cover bg-center"></Image>
      <div className="w-[372px] h-[20px] ">
        <div className=" absolute inset-44 ml-[150px]">
        
      <h1 className="text-[32px] font-semibold leading-[150%] tracking-percent text-white w-[372px] h-[96px]">Sports car with the best design and acceleration</h1>
      <p className="text-[16px] font-medium leadng-[150%] tracking-percent text-white w-[284px] h-[48px] mt-[10px]">Safety and comfort while driving a 
      futuristic and elegant sports car</p>
      </div>
      <Image src={image8} alt="car1" className="w-[380px] h-[120px] absolute inset-80 mt-[40px] ml-[40px]"></Image>
      </div>
      <div className="flex gap-x-6">
    <div>
       <Image src={View1} alt="car-view" className="mt-0"></Image>
   </div>
   <div>
       <Image src={View2} alt="car-view" className="mt-0"></Image>
   </div>
   <div>
       <Image src={View3} alt="car-view" className="mt-0"></Image>
   </div>
   </div>
   </div>


   <div className="w-[492px] h-[500px] bg-white ml-[20px] ">
    <div className="flex">
<div className="w-[220px] h-[72px] ml-[24px] pt-[24px]">
  <h1 className="text-[32px] font-bold leading-[150%] tracking-percent">Nissan GT - R</h1>
<Image src={Reviews} alt="reviews" className="w-[220px] h-[24px]"></Image>
</div>
<Image src={Like1} alt="like-1" className="w-[24px] h-[24px] ml-[140px] mt-[24px]"></Image>
</div>
<p className="w-[380px] h-[120px] text-[16px] leading-[200%] tracking-percent1 mt-[50px] ml-[24px] mr-[24px] text-text4">NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>

<Image src={spesfication8} alt="spesfication8" className="w-[380px] h-[72px] mt-[10px]  ml-[24px]"></Image>

<div className="flex ml-[24px] mt-[70px]">
      <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[28px] font-bold">$80.00/</h1>
      <h1 className="text-[16px] font-bold text-text1 mt-3 ml-1">days</h1>
      </div>
      <h1 className="text-text1 text-[16px] font-bold">$100.00</h1>
    </div>
    <div className="w-[140px] h-[56px] ml-[110px] mt-[7px] bg-primary1 pt-[16px] pl-[28px] text-white">
    <button className="  text-[16px] " /> Rent Now 
    </div>
    </div>

    
</div>

    </div>
    
    <div className="w-[940px] h-[452px] bg-white mt-[32px]">
      <div className="w-[136px] h-[28px] flex ml-[24px] pt-[14px]">
        <h1 className="text-[20px] font-semibold tracking-percent1 pt-[10px]">Reviews</h1>
        <h1 className="w-[32px] pt-[2px] pl-[7px] rounded-lg h-[26px] mt-[11px] ml-[10px] bg-primary1 text-[14px] font-bold text-white">13</h1>
      </div>
      <div className="w-[960px] h-[124px] ml-[24px] mt-[82px]">
       <div className="w-[128px] h-[56px] flex">
        <Image src={Profill1} alt="profill1 w-[56px] h-[56px]"></Image>
        <div className="ml-[18px]">
        <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">
        Alex Stanton
        </h1>
        <h1 className="text-[14px] font-medium leading-[150%] tracking-percent1 w-[128px] mt-[6px] h-[20px] text-text1">CEO at Bukalapak</h1>
        </div>
        <div className="w-[128px] h-[56px] ml-[560px]">
          <h1 className="w-[128px] h-[28px] ml-[20px]">21 July 2022</h1>
          <Image src={Reviews1} alt="review1" className="w-[108px] h-[20px]"></Image>
        </div>
       </div>
       <p className="w-[780px] h-[56px] text-[14px] leading-[200%] tracking-percent1 ml-[70px] mt-[14px]" style={{textEmphasisColor: "#596780"}}>We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
     
      </div>
      
      
      <div className="w-[960px] h-[124px] ml-[24px] mt-[24px]">
       <div className="w-[128px] h-[56px] flex">
        <Image src={Profill2} alt="profill1 w-[56px] h-[56px]"></Image>
        <div className="ml-[18px]">
        <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">
        Skylar Dias
        </h1>
        <h1 className="text-[14px] font-medium leading-[150%] tracking-percent1 w-[128px] mt-[6px] h-[20px] text-text1">CEO at Amazon</h1>
        </div>
        <div className="w-[128px] h-[56px] ml-[560px]">
          <h1 className="w-[128px] h-[28px] ml-[20px]">20 July 2022</h1>
          <Image src={Reviews1} alt="review1" className="w-[108px] h-[20px]"></Image>
        </div>
       </div>
       <p className="w-[780px] h-[56px] text-[14px] leading-[200%] tracking-percent1 ml-[70px] mt-[14px]" style={{textEmphasisColor: "#596780"}}>We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite. </p>
     
      </div>
      
      <div className="flex ml-[400px] mt-[20px]">
      <Link href="/" className="text-[16px] font-semibold leading-[150%] tracking-percent1 text-text1">Show All</Link>
      <Image src={arrow} alt="arrow-down" className="w-[16px h-[16px] ml-[10px] mt-[6px]" />
    </div>
    </div> 
   
    </div> 

  

   
    
    <div className="cards-section">
  <div className="pt-[24px] pl-[24px] pr-[64px]" style={{ backgroundColor: "#F6F7F9" }}>
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-[16px] font-semibold ml-[20px] mt-[18px] text-text1">
          Popular Car
        </h1>
      </div>
      <div className="w-[104px] h-[44px]">
        <h1 className="m-[20px] font-semibold text-[16px] text-primary1">View All</h1>
      </div>
    </div>

    <div className="flex gap-8 mt-[64px] justify-center sm:justify-start sm:gap-6 md:gap-6 flex-nowrap">
      <div className="w-[290px] h-[388px] bg-white rounded-[10px]">
        <div className="w-[128px] h-[48px] p-[20px] gap-x-[4px] flex">
          <div>
            <h1 className="text-[19px] font-bold leading-[150%] tracking-percent">Koenigsegg</h1>
            <h1 className="text-text1 text-[14px]">Sport</h1>
          </div>
          <Image src={Like1} alt="like1" className="w-[24px] h-[24px] ml-[108px] mt-[4px]" />
        </div>
        <Image src={image7} alt="car1" className="w-[232px] h-[72px] ml-[12px] mt-[130px]" />
        <Image src={spesfication} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[48px]" />
        <div>
          <div className="flex">
            <div className="w-[116px] h-[44px] ml-[16px] mt-[20px] flex">
              <h1 className="text-text2 text-[18px] font-bold ">$99.00/</h1>
              <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
            </div>
            <Image src={Button} alt="button" className="w-[100px] h-[36px] ml-4 mt-[20px]" />
          </div>
        </div>
      </div>

      <div className="w-[290px] h-[388px] bg-white rounded-[10px]">
  <div className="flex w-full  h-[48px] p-[20px] gap-x-[4px]">
    <div className="flex-1">
      <h1 className="text-[18px] font-bold leading-[150%] tracking-percent">Nissan GT-R</h1>
      <h1 className="text-text1 text-[14px]">Sport</h1>
    </div>
    <Image src={Like2} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
  </div>
  <Image src={image8} alt="car1" className="w-[204px] h-[64px] ml-[28px] mt-[130px]" />
  <Image src={spesfication2} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[20px] ml-[16px]">
    <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[18px] font-bold">$80.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
      </div>
      <h1 className="text-text1 text-[14px] font-bold">$100.00</h1>
    </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px] mr-[16px]" />
  </div>
</div>

      
<div className="w-[290px] h-[388px] bg-white rounded-[10px]">
  <div className="flex w-full  h-[48px] p-[20px] gap-x-[4px]">
    <div className="flex-1">
      <h1 className="text-[18px] font-bold leading-[150%] tracking-percent">Rolls - Royce</h1>
      <h1 className="text-text1 text-[14px]">Sport</h1>
    </div>
    <Image src={Like2} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
  </div>
  <Image src={Car} alt="car1" className="w-[210px] h-[68px] ml-[24px] mt-[130px]" />
  <Image src={spesfication3} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[20px] ml-[16px]">
    <div className="flex items-center">
      <h1 className="text-text2 text-[18px] font-bold">$96.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
    </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px]  mr-[16px]" />
  </div>
</div>

    </div>
  </div>
</div>
 
 
<div className="pt-[24px] pl-[24px] pr-[64px]" style={{ backgroundColor: "#F6F7F9" }}>
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-[16px] font-semibold ml-[20px] mt-[18px] text-text1">
          Recommendation Car
        </h1>
      </div>
   
    </div>

    <div className="flex gap-8 mt-[64px] justify-center sm:justify-start sm:gap-6 md:gap-6 flex-nowrap">
  <div className="w-[290px] h-[388px] bg-white rounded-[10px]">
    <div className="flex w-full p-[20px] gap-x-[4px]">
      <div className="flex-1">
        <h1 className="text-[19px] font-bold leading-[150%] tracking-percent">All New Rush</h1>
        <h1 className="text-text1 text-[14px]">SUV</h1>
      </div>
      <Image src={Like2} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
    </div>
    <Image src={Car1} alt="car1" className="w-[224px] h-[100px] ml-[18px] mt-[52px]" />
    <Image src={spesfication4} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[50px]" />
   <div className="flex ml-[16px] mt-[18px]">
      <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[18px] font-bold">$72.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
      </div>
      <h1 className="text-text1 text-[14px] font-bold">$80.00</h1>
    </div>
        <Image src={Button} alt="button" className="w-[100px] h-[36px] ml-11 mt-[7px]" />
      </div>
      </div>



      <div className="w-[290px] h-[388px] bg-white rounded-[10px]">
  <div className="flex w-full  h-[48px] p-[20px] gap-x-[4px]">
    <div className="flex-1">
      <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">CR - V</h1>
      <h1 className="text-text1 text-[14px]">SUV</h1>
    </div>
    <Image src={Like1} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
  </div>
  <Image src={Car2} alt="car1" className="w-[236px] h-[100px] ml-[14px] mt-[96px]" />
  <Image src={spesfication5} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[24px] ml-[16px]">
    <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[18px] font-bold">$80.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
     </div>
     </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px] mr-[16px]" />
  </div>
</div>

      
<div className="w-[290px] h-[388px] bg-white rounded-[10px]">
  <div className="flex w-full  h-[48px] p-[20px] gap-x-[4px]">
    <div className="flex-1">
      <h1 className="text-[18px] font-bold leading-[150%] tracking-percent">All New Terios</h1>
      <h1 className="text-text1 text-[14px]">Sport</h1>
    </div>
    <Image src={Like2} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
  </div>
  <Image src={Car3} alt="car1" className="w-[224px] h-[100px] ml-[18px] mt-[96px]" />
  <Image src={spesfication4} alt="detail" className="w-[234px] h-[20px] ml-[14px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[22px] ml-[16px]">
    <div className="flex items-center">
      <h1 className="text-text2 text-[18px] font-bold">$74.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
    </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px]  mr-[16px]" />
  </div>
</div>


 
    </div>
  </div>

</div>

</div>

<Footer/>

</div>
    )
}