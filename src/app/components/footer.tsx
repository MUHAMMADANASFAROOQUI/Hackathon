import Link from "next/link"

export default function Footer(){
    return(
        <div className="footer">
            <div className="h-[480px] md:bg-white bg-primary3 flex mb-[10px] border-b-2  md:pl-[60px] pl-[24px]  pr-[60px]">
                 <div className="w-[292px] h-[108px] md:mt-[80px] mt-[60px] ">
                    <Link href="/" className="font-bold text-[32px] leading-[150%] tracking-percent text-primary1 w-[148px] h-[44px]">MORENT</Link>
                    <p className="w-[292px] h-[48px] text-[16px] font-medium leading-[150%] tracking-percent1 mt-[28px] md:text-text3 text-text1" >
                        Our vision is to provide convenience and help increase your sales business.
                    </p>
                 </div>
                  
                 <div className="w-[152px] h-[244px] ml-[340px]">
                    <h1 className="w-[152px] h-[32px] text-[20px] font-semibold leading-[150%] tracking-percent1 mt-[80px] text-left">About</h1>
                    <div className="w-[152px] h-[188px] mt-[32px]">
                        <div>
                        <Link href={"/"} className="text-[16px] font-medium leading-[150%] tracking-percent1 text-text3 opacity-60">
                            How it works
                        </Link>
                        </div>
                        <br />
                        <div>
                        <Link href={"/"} className="text-[16px] font-medium leading-[150%] tracking-percent1 text-text3 opacity-60 mt-[10px]">
                        Featured
                        </Link>
                        </div>
                        <br />
                        <div>
                        <Link href={"/"} className="text-[16px] font-medium leading-[150%] tracking-percent1 text-text3 opacity-60 mt-[10px]">
                        Partnership
                        </Link>
                        </div>

                        <br />
                        <div>
                        <Link href={"/"} className="text-[16px] font-medium leading-[150%] tracking-percent1 text-text3 opacity-60 mt-[10px]">
                        Bussiness Relation
                        </Link>
                        </div>
                       
                    </div>
                 </div>
                
                 <div className="w-[152px] h-[244px] ml-[30px]">
                    <h1 className="w-[152px] h-[32px] text-[20px] font-semibold leading-[150%] tracking-percent1 mt-[80px] text-left">Community</h1>
                    <div className="w-[152px] h-[188px] mt-[32px]">
                        <div>
                        <Link href={"/"} className="text-[16px] font-medium leading-[150%] tracking-percent1 text-text3 opacity-60">
                        Events
                        </Link>
                        </div>
                        <br />
                        <div>
                        <Link href={"/"} className="text-[16px] font-medium leading-[150%] tracking-percent1 text-text3 opacity-60 mt-[10px]">
                       Blogs
                        </Link>
                        </div>
                        <br />
                        <div>
                        <Link href={"/"} className="text-[16px] font-medium leading-[150%] tracking-percent1 text-text3 opacity-60 mt-[10px]">
                        Podcast
                        </Link>
                        </div>

                        <br />
                        <div>
                        <Link href={"/"} className="text-[16px] font-medium leading-[150%] tracking-percent1 text-text3 opacity-60 mt-[10px]">
                        Invite a friend
                        </Link>
                        </div>
                       
                    </div>
                 </div>

                 <div className="w-[152px] h-[244px] ml-[30px]">
                    <h1 className="w-[152px] h-[32px] text-[20px] font-semibold leading-[150%] tracking-percent1 mt-[80px] text-left">Socials</h1>
                    <div className="w-[152px] h-[188px] mt-[32px]">
                        <div>
                        <Link href={"/"} className="text-[16px] font-medium leading-[150%] tracking-percent1 text-text3 opacity-60">
                        Discord
                        </Link>
                        </div>
                        <br />
                        <div>
                        <Link href={"/"} className="text-[16px] font-medium leading-[150%] tracking-percent1 text-text3 opacity-60 mt-[10px]">
                        Instagram
                        </Link>
                        </div>
                        <br />
                        <div>
                        <Link href={"/"} className="text-[16px] font-medium leading-[150%] tracking-percent1 text-text3 opacity-60 mt-[10px]">
                        Twitter
                        </Link>
                        </div>

                        <br />
                        <div>
                        <Link href={"/"} className="text-[16px] font-medium leading-[150%] tracking-percent1 text-text3 opacity-60 mt-[10px]">
                        Facebook                      
                          </Link>
                        </div>
                       
                    </div>
                 </div>
            </div>
            <div className="flex">
            <div className="ml-[60px] mt-[40px] mb-[80px]">
             <h1 className="font-semibold text-[16px]leading-[150%] tracking-percent1">©2022 MORENT. All rights reserved</h1>
            </div>
            <div className="text-[16px] font-semibold leading-[150%] tracking-percent1 ml-[600px] mt-[40px]">
             <h1>Privacy & Policy</h1>
            </div>
            <div>
    <h1 className="text-[16px] font-semibold leading-[150%] tracking-percent1 ml-[20px] mt-[40px]">Terms & Condition</h1>
            </div>
            </div>
        </div>
    )
}
