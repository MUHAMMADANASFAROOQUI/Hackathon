import Image from "next/image";
import Link from "next/link";
import mark from "../public/mark.png";
import Visa from "../public/Visa.png";
import PayPal from "../public/PayPal.png";
import  Bitcoin  from "../public/Bitcoin.png";
import Ceklist from "../public/Ceklist.png";
import security from "../public/security.png";
import Look from "../public/Look.png";
import CarName from "../public/CarName.png";
import Footer from "../components/footer";
 
export default function Payment() {
    return (
      <div className="payment-car">
        <div className="" style={{ backgroundColor: "#F6F7F9" }}>
          <div className="pl-[14px] pt-[32px] flex">
            <div className="w-[782px] h-[2176px] ">
              <div className="w-[790px] h-[336px] bg-white">
                <div className="flex">
                  <div className="w-[192px] h-[48px] pl-[20px] pt-[24px]">
                    <h1 className="w-[192px] h-[24px] text-[20px] font-bold leading-[150%] tracking-percent">Billing Info</h1>
                    <h1 className="w-[192px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 mt-[4px]">Please enter your billing info</h1>
                  </div>
                  <h1 className="w-[80px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 ml-[510px] mt-[49px]">Step 1 of 4</h1>
                </div>
  
                <div className="flex flex-wrap">
                  <div className="w-[50%] px-[20px] mt-[32px]">
                    <label htmlFor="name" className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1">Name</label>
                    <input type="text" id="name" className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px]" placeholder="Your name" />
                  </div>
                  <div className="w-[50%] px-[20px] mt-[32px]">
                    <label htmlFor="address" className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1">Phone Number</label>
                    <input type="text" id="address" className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px]" placeholder="Phone Number" />
                  </div>
  
                  <div className="w-[50%] px-[20px] mt-[24px]">
                    <label htmlFor="name2" className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1">Address</label>
                    <input type="text" id="name2" className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px]" placeholder="Address" />
                  </div>
                  <div className="w-[50%] px-[20px] mt-[24px]">
                    <label htmlFor="address2" className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1">Town / City</label>
                    <input type="text" id="address2" className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px]" placeholder="Town or City" />
                  </div>
                </div>
              </div>

              <div className="w-[790px] h-[670px] bg-white mt-[32px]">
              <div className="flex">
                  <div className="w-[200px] h-[48px] p-[20px]">
                    <h1 className="w-[200px] h-[24px] text-[20px] font-bold leading-[150%] tracking-percent">Rental Info</h1>
                    <h1 className="w-[200px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 mt-[4px]">Please select your rental date</h1>
                  </div>
                  <h1 className="w-[80px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 ml-[500px] mt-[49px]">Step 2 of 4</h1>
                </div>
                <div className="w-[92px] h-[20px] ml-[20px] mt-[32px] flex">
                  <Image src={mark} alt="mark" className="w-[16px] h-[16px] mr-[8px] mt-[4px]"></Image>
                  <h1 className="w-[68px] h-[20px] text-[16px] font-semibold leading-[150%] tracking-percent1">Pick - Up</h1>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-[50%] px-[20px] mt-[28px]">
                    <label htmlFor="name" className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1">Locations</label>
                    <select  id="name" className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px] text-text1">
                    <option value=" Select your city"> Select your city</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Lahore">Lahore</option>
                    </select>
                  </div>
                  <div className="w-[50%] px-[20px] mt-[28px]">
                    <label htmlFor="address" className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1">Date</label>
                    <select  id="name" className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px] text-text1">
                    <option value=" Select your city"> Select your date</option>
                    <option value="Karachi">09-12-2024</option>
                    <option value="Islamabad">10-12-2024</option>
                    <option value="Lahore">11-12-2024</option>
                    </select>
                    </div>
  
                  <div className="w-[50%] px-[20px] mt-[20px]">
                    <label htmlFor="name2" className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1">Time</label>
                    <select  id="name" className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px] text-text1">
                    <option value=" Select your city"> Select your time</option>
                    <option value="Karachi">12:00 pm</option>
                    <option value="Islamabad">1:00 pm</option>
                    <option value="Lahore">2:00 pm</option>
                    </select>
                     </div>
                  </div>

                  <div className="w-[104px] h-[20px] ml-[20px] mt-[32px] flex">
                  <Image src={mark} alt="mark" className="w-[16px] h-[16px] mr-[8px] mt-[4px]"></Image>
                  <h1 className="w-[80px] h-[20px] text-[16px] font-semibold leading-[150%] tracking-percent1">Drop - Off</h1>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-[50%] px-[20px] mt-[28px]">
                    <label htmlFor="name" className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1">Locations</label>
                    <select  id="name" className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px] text-text1">
                    <option value=" Select your city"> Select your city</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Lahore">Lahore</option>
                    </select>
                  </div>
                  <div className="w-[50%] px-[20px] mt-[28px]">
                    <label htmlFor="address" className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1">Date</label>
                    <select  id="name" className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px] text-text1">
                    <option value=" Select your city"> Select your date</option>
                    <option value="Karachi">09-12-2024</option>
                    <option value="Islamabad">10-12-2024</option>
                    <option value="Lahore">11-12-2024</option>
                    </select>
                    </div>
  
                  <div className="w-[50%] px-[20px] mt-[20px]">
                    <label htmlFor="name2" className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1">Time</label>
                    <select  id="name" className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px] text-text1">
                    <option value=" Select your city"> Select your time</option>
                    <option value="Karachi">12:00 pm</option>
                    <option value="Islamabad">1:00 pm</option>
                    <option value="Lahore">2:00 pm</option>
                    </select>
                     </div>
                  </div>
                  

                  <div className="w-[790px] h-[596px] mt-[32px] bg-white">
                    <div>
                  <div className="flex">
                  <div className="w-[238px] h-[48px] pt-[24px] pl-[20px]">
                    <h1 className="w-[200px] h-[24px] text-[20px] font-bold leading-[150%] tracking-percent">Payment Method</h1>
                    <h1 className="w-[236px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 mt-[4px]">Please enter your payment method</h1>
                  </div>
                  <h1 className="w-[80px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 ml-[460px] mt-[49px]">Step 3 of 4</h1>
                </div>

                <div className="w-[774px] h-[308px] bg-primary3 ml-[10px] mt-[32px]">
                <div className="w-[140px] h-[20px] pl-[24px] pt-[24px] mt-[32px] flex ">
                  <Image src={mark} alt="mark" className="w-[16px] h-[16px] mr-[8px] mt-[4px]"></Image>
                  <h1 className="w-[88px] h-[24px] text-[16px] font-semibold leading-[150%] tracking-percent1 ">Credit Card</h1>
                </div>
                <Image src={Visa} alt="visa img" className="w-[92px] h-[20px] ml-[670px]"></Image>
                 

                <div className="flex flex-wrap">
                  <div className="w-[50%] px-[24px] mt-[32px]">
                    <label htmlFor="name" className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1">Card Number</label>
                    <input type="text" id="name" className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-white rounded-xl pl-[30px] mt-[16px]" placeholder="Card number" />
                  </div>
                  <div className="w-[50%] px-[24px] mt-[32px]">
                    <label htmlFor="address" className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1">Expration Date</label>
                    <input type="text" id="address" className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-white rounded-xl pl-[30px] mt-[16px]" placeholder="DD / MM / YY" />
                  </div>
  
                  <div className="w-[50%] px-[24px] mt-[24px]">
                    <label htmlFor="name2" className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1">Card Holder</label>
                    <input type="text" id="name2" className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-white rounded-xl pl-[30px] mt-[16px]" placeholder="Card holder" />
                  </div>
                  <div className="w-[50%] px-[24px] mt-[24px]">
                    <label htmlFor="address2" className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1">CVC</label>
                    <input type="text" id="address2" className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-white rounded-xl pl-[30px] mt-[16px]" placeholder="CVC" />
                  </div>
                </div>
            
                 </div>
                </div>
                <Image src={PayPal} alt="paypal" className="w-[754px] h-[56px] mt-[24px] ml-[20px]"></Image>
                <Image src={Bitcoin} alt="paypal" className="w-[754px] h-[56px] mt-[24px] ml-[20px]"></Image>

                  </div>

                <div className="w-[790px] h-[484px] bg-white mt-[32px]">
          <div className="flex">
                  <div className="w-[436px] h-[48px] pt-[24px] pl-[20px]">
                    <h1 className="w-[200px] h-[24px] text-[20px] font-bold leading-[150%] tracking-percent">Confirmation</h1>
                    <h1 className="w-[436px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 mt-[4px]">We are getting to the end. Just few clicks and your rental is ready!</h1>
                  </div>
                  <h1 className="w-[80px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 ml-[260px] mt-[49px]">Step 3 of 4</h1>
                </div>

                <div className="w-[774px] h-[136px] ml-[20px] mt-[32px]">
                    <div className="w-[754px] h-[56px] bg-primary3 pt-[16px] flex">
                    <Image src={Ceklist} alt="checklist" className="w-[24px] h-[24px] ml-[32px] "></Image>
                    <h1 className="w-[683px] h-[24px] ml-[20px] text-[16px] font-semibold leading-[150%] tracking-percent1">I agree with sending an Marketing and newsletter emails. No spam, promissed!</h1>
                    </div>
                    <div className="w-[754px] h-[56px] bg-primary3 pt-[16px] flex mt-[32px]">
                    <Image src={Ceklist} alt="checklist" className="w-[24px] h-[24px] ml-[32px] "></Image>
                    <h1 className="w-[683px] h-[24px] ml-[20px] text-[16px] font-semibold leading-[150%] tracking-percent1">I agree with our terms and conditions and privacy policy.</h1>
                    </div>
                     <div className="w-[140px] h-[56px] bg-primary1 text-[16px] font-bold text-white pt-[15px] pl-[30px] rounded-xl mt-[32px]">
                    <Link className="" href="/detail-car-rent" >Rent Now</Link>
                    </div>

                    <div className="mt-[32px] w-[548px] h-[100px] ">
                        <Image className="w-[24px] h-[24px] " src={security} alt="security"></Image>
                        <div className="w-[548px] h-[52px] mt-[10px]">
                            <h1 className="w-[204px] h-[24px]  text-[16px] font-semibold leading-[150%] tracking-percent1">
                            All your data are safe
                            </h1>
                                  <h1 className="text-[14px] font-semibold leading-[150%] tracking-percent1 w-[548px] h-[20px] text-text1 mt-2 ">
                                  We are using the most advanced security to provide you the best experience ever.
                                  </h1>
                        </div>
                    </div>

                </div>
          </div>  
          </div>
            </div>
          
          <div className="w-[430px] h-[560px] bg-white ml-[20px] mr-[24px]">
                  <div className="w-[424px] h-[76px] pt-[24px] pl-[16px]">
                    <h1 className="w-[180px] h-[24px] text-[20px] font-bold leading-[150%] tracking-percent">Confirmation</h1>
                    <h1 className="w-[374px] h-[48px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 mt-[6px]">Prices may change depending on the length of the rental and the price of your rental car.</h1>
                  </div>
                   <div className="flex border-b-2 pb-[40px] ml-[16px] mr-[16px]">
                  <Image src={Look} alt="car-pay" className="w-[112px] h-[98px]  mt-[52px]"></Image>
                  <Image src={CarName} alt="car-look" className="w-[210px] h-[72px] mt-[64px] ml-[8px]"></Image>
                  </div>

                  <div className="ml-[16px] mt-[30px] w-[404px] h-[20px] flex">
                    <h1 className="text-[16px] font-medium text-text1 leading-[150%] tracking-percent1">Subtotal</h1>
                    <h1 className="text-[16px] font-semibold leading-[150%] tracking-percent1 ml-[280px]">$80.00</h1>
                  </div>
                  <div className="ml-[16px] mt-[20px] w-[404px] h-[20px] flex">
                    <h1 className="text-[16px] font-medium text-text1 leading-[150%] tracking-percent1">Tax</h1>
                    <h1 className="text-[16px] font-semibold leading-[150%] tracking-percent1 ml-[350px]">$0</h1>
                  </div>

                  <div className="w-[394px] h-[56px] bg-primary3 ml-[16px] mt-[40px] rounded-xl flex">
                         <h1 className="text-[14px] leading-[150%] tracking-percent1 text-text1 pt-[16px] pl-[30px]">Apply promo code</h1>
                         <h1 className="text-[16px] leading-[150%] tracking-percent1 font-semibold pt-[16px] pl-[140px]">Apply now</h1>
                  </div>
                    <div className="flex">
                  <div className="ml-[16px] mt-[20px]">
                    <h1 className="text-[18px] leading-[150%] tracking-percent font-bold">Total Rental Price</h1>
                    <h1 className="text-[14px] leading-[150%] tracking-percent1 font-medium text-text1">Overall price and includes rental discount</h1>
                  </div>
                  <h1 className="font-bold text-[32px] mt-[24px] ml-[20px]">$80.00</h1>
                  </div>
          </div>
         
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  