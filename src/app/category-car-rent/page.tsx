import Image from "next/image"
import Cheklist from "../public/Ceklist.png";
import tick from "../public/tick.png";
import price from "../public/price.png";
import mark from "../public/mark.png";
import Switch from "../public/Switch.png";
import Button from "../public/Button.png";
import image7 from "../public/image7.png";
import image8 from "../public/image8.png";
import Car from "../public/Car.png";
import Car1 from "../public/Car1.png";
import Car2 from "../public/Car2.png";
import Car3 from "../public/Car3.png";
import Car5 from "../public/Car5.png";
import Car6 from "../public/Car6.png";
import spesfication from "../public/spesfication.png"
import spesfication2 from "../public/spesfication2.png"
import spesfication3 from "../public/spesfication3.png";
import spesfication4 from "../public/spesfication4.png"
import spesfication5 from "../public/spesfication5.png";
import spesfication6 from "../public/spesfication6.png"
import spesfication7 from "../public/spesfication7.png";
import Like1 from "../public/Like1.png";
import Like2 from "../public/Like2.png";
import Footer from "../components/footer";

export default function Category(){
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
            
            <div className="h-[1600px] w-full" style={{ backgroundColor: "#F3F5F7" }}>
  <div className="m-[28px]">
    <div className="flex">
      
      <div className="w-[460px] h-[132px] bg-white mr-[20px]">
        <div className="flex ml-[20px]">
          <Image src={mark} alt="mark1" className="w-[16px] h-[16px] mt-[24px] mr-[6px]" />
          <h1 className="text-[16px] leading-[150%] tracking-percent1 font-semibold mt-[19px]">Pick - Up</h1>
        </div>
        <div className="w-[486px] h-[48px] ml-[20px] mt-[20px] flex">
          <div className="w-[140px] h-[48px] border-r-[1px]">
            <h1 className="font-bold text-[14px] leading-[150%] tracking-percent1">Locations</h1>
            <select name="Select your city" id="0" className="text-[10px] w-[116px] h-[20px] mr-3">
              <option value="Select your city">Select your city</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Peshawar">Peshawar</option>
            </select>
          </div>
          <div className="w-[486px] h-[48px] ml-[14px]">
            <div className="w-[140px] h-[48px] border-r-[1px]">
              <h1 className="font-bold text-[14px] leading-[150%] tracking-percent1">Date</h1>
              <select name="Select your city" id="0" className="text-[10px] w-[116px] h-[20px]">
                <option value="Select your city">Select your date</option>
                <option value="8-12-2024">08-12-2024</option>
                <option value="9-12-2024">09-12-2024</option>
                <option value="10-12-2024">10-12-2024</option>
                <option value="12-12-2024">11-12-2024</option>
              </select>
            </div>
          </div>
          <div className="w-[486px] h-[48px]">
            <div className="w-[140px] h-[48px]">
              <h1 className="font-bold text-[14px] leading-[150%] tracking-percent1">Time</h1>
              <select name="Select your city" id="0" className="text-[10px] w-[116px] h-[20px] mr-[10px]">
                <option value="Select your city">Select your time</option>
                <option value="10:00 am">10:00 am</option>
                <option value="11:00 am">11:00 am</option>
                <option value="12:00 pm">12:00 pm</option>
                <option value="01:00 pm">01:00 pm</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      
      <div>
            <Image src={Switch} alt="switch" className="w-30 h-30  mt-[30px]"></Image>
           </div>

      <div className="w-[460px] h-[132px] bg-white  ml-[20px]">
        <div className="flex ml-[20px]">
          <Image src={mark} alt="mark1" className="w-[16px] h-[16px] mt-[24px] mr-[6px]" />
          <h1 className="text-[16px] leading-[150%] tracking-percent1 font-semibold mt-[19px]">Drop - Off</h1>
        </div>
        <div className="w-[486px] h-[48px] ml-[20px] mt-[20px] flex">
          <div className="w-[130px] h-[48px] border-r-[1px]">
            <h1 className="font-bold text-[14px] leading-[150%] tracking-percent1">Locations</h1>
            <select name="Select your city" id="0" className="text-[10px] w-[116px] h-[20px] mr-3">
              <option value="Select your city">Select your city</option>
              <option value="Karachi">Karachi</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Peshawar">Peshawar</option>
            </select>
          </div>
          <div className="w-[486px] h-[48px] ml-[14px]">
            <div className="w-[140px] h-[48px] border-r-[1px]">
              <h1 className="font-bold text-[14px] leading-[150%] tracking-percent1">Date</h1>
              <select name="Select your city" id="0" className="text-[10px] w-[116px] h-[20px]">
                <option value="Select your city">Select your date</option>
                <option value="8-12-2024">08-12-2024</option>
                <option value="9-12-2024">09-12-2024</option>
                <option value="10-12-2024">10-12-2024</option>
                <option value="12-12-2024">11-12-2024</option>
              </select>
            </div>
          </div>
          <div className="w-[486px] h-[48px]">
            <div className="w-[140px] h-[48px]">
              <h1 className="font-bold text-[14px] leading-[150%] tracking-percent1">Time</h1>
              <select name="Select your city" id="0" className="text-[10px] w-[116px] h-[20px]">
                <option value="Select your city">Select your time</option>
                <option value="10:00 am">10:00 am</option>
                <option value="11:00 am">11:00 am</option>
                <option value="12:00 pm">12:00 pm</option>
                <option value="01:00 pm">01:00 pm</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="flex gap-8 mt-[64px] ml-[10px] justify-center sm:justify-start sm:gap-6 md:gap-8 flex-nowrap">
      <div className="w-[290px] h-[388px] bg-white rounded-[10px]">
        <div className="w-[128px] h-[48px] p-[20px] gap-x-[4px] flex">
          <div>
            <h1 className="text-[19px] font-bold leading-[150%] tracking-percent">Koenigsegg</h1>
            <h1 className="text-text1 text-[14px]">Sport</h1>
          </div>
          <Image src={Like1} alt="like1" className="w-[24px] h-[24px] ml-[116px] mt-[4px]" />
        </div>
        <Image src={image7} alt="car1" className="w-[232px] h-[72px] ml-[20px] mt-[130px]" />
        <Image src={spesfication} alt="detail" className="w-[234px] h-[20px] ml-[26px] mt-[48px]" />
        <div>
          <div className="flex">
            <div className="w-[116px] h-[44px] ml-[26px] mt-[20px] flex">
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
  <Image src={image8} alt="car1" className="w-[204px] h-[64px] ml-[38px] mt-[130px]" />
  <Image src={spesfication2} alt="detail" className="w-[234px] h-[20px] ml-[26px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[20px] ml-[26px]">
    <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[18px] font-bold">$80.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
      </div>
      <h1 className="text-text1 text-[14px] font-bold">$100.00</h1>
    </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px] mr-[32px]" />
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
  <Image src={Car} alt="car1" className="w-[210px] h-[68px] ml-[36px] mt-[130px]" />
  <Image src={spesfication3} alt="detail" className="w-[234px] h-[20px] ml-[24px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[20px] ml-[24px]">
    <div className="flex items-center">
      <h1 className="text-text2 text-[18px] font-bold">$96.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
    </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px]  mr-[32px]" />
  </div>
</div>
</div>
</div>

<div className="flex gap-8 mt-[64px] ml-[42px] justify-center sm:justify-start sm:gap-6 md:gap-8 flex-nowrap">
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
  <Image src={spesfication3} alt="detail" className="w-[234px] h-[20px] ml-[14px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[22px] ml-[16px]">
    <div className="flex items-center">
      <h1 className="text-text2 text-[18px] font-bold">$74.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
    </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px]  mr-[16px]" />
  </div>
</div>
</div>

<div className="flex gap-8 mt-[32px] ml-[42px] justify-center sm:justify-start sm:gap-6 md:gap-8 flex-nowrap">
  <div className="w-[290px] h-[388px] bg-white rounded-[10px]">
    <div className="flex w-full p-[20px] gap-x-[4px]">
      <div className="flex-1">
        <h1 className="text-[19px] font-bold leading-[150%] tracking-percent">MG ZX Exclusice</h1>
        <h1 className="text-text1 text-[14px]">Hatchback</h1>
      </div>
      <Image src={Like2} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
    </div>
    <Image src={Car5} alt="car1" className="w-[264px] h-[108px] ml-[10px] mt-[52px]" />
    <Image src={spesfication6} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[50px]" />
   <div className="flex ml-[16px] mt-[18px]">
      <div className="items-center">
      <div className="flex ">
      <h1 className="text-text2 text-[18px] font-bold">$76.00/</h1>
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
      <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">New MG ZS</h1>
      <h1 className="text-text1 text-[14px]">Hatchback</h1>
    </div>
    <Image src={Like1} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
  </div>
  <Image src={Car6} alt="car1" className="w-[264px] h-[108px] ml-[10px] mt-[96px]" />
  <Image src={spesfication7} alt="detail" className="w-[234px] h-[20px] ml-[16px] mt-[48px]" />
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
      <h1 className="text-[18px] font-bold leading-[150%] tracking-percent">MG ZX Exclusice</h1>
      <h1 className="text-text1 text-[14px]">Hatchback</h1>
    </div>
    <Image src={Like2} alt="like1" className="w-[24px] h-[24px] mt-[4px]" />
  </div>
  <Image src={Car5} alt="car1" className="w-[264px] h-[108px] ml-[10px] mt-[96px]" />
  <Image src={spesfication7} alt="detail" className="w-[234px] h-[20px] ml-[14px] mt-[48px]" />
  <div className="flex justify-between items-center mt-[22px] ml-[16px]">
    <div className="flex items-center">
      <h1 className="text-text2 text-[18px] font-bold">$74.00/</h1>
      <h1 className="text-[12px] font-bold text-text1 mt-2 ml-1">day</h1>
    </div>
    <Image src={Button} alt="button" className="w-[100px] h-[36px]  mr-[16px]" />
  </div>
</div>

</div>

 

      
<div className="flex " style={{backgroundColor: "#F6F7F9"}}>
    
  <button className="ml-[450px] mt-[60px] mb-[60px] w-[156px] h-[44px] bg-primary1 text-[16px] font-semibold text-white">Show more car</button>
  <h1 className="ml-[300px] mt-[64px] text-text1 text-[14px] font-medium leading-[150%] tracking-percent1">120 Car</h1>
  </div>
    </div>

  
    </div>
  <Footer/>

</div>

    )
}