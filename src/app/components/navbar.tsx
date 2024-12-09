import Image from "next/image";
import search from "../public/search.png";
import filter from "../public/filter.jpg";
import Like from "../public/Like.png";
import Notification from"../public/Notification.png";
import Settings from "../public/Settings.png";
import Profil from "../public/Profil.png"
import Link from "next/link";

export default function Header() {
    return(
        <div >
        <div className="Navbar-top">
            <div className="   lg:h-[124px] md:h-[124px] h-[148px] w-[375px] md:flex border-b-[1px]  ">
            <Link href={"/"} className="md:w-[148px] w-[108px] h-[28px] lg:h-[44px] md:h-[36px] lg:text-[32px] text-[24px] md:text-[28px] mt-[32px] ml-[25px] md:p-0 lg:p-0  md:ml-[60px] md:mt-[32px] lg:mt-[36px] font-bold text-primary1 leading-[-150%] tracking-percent ">
            MORENT
            </Link>
            <div className="ml-[25px] lg:ml-[60px] md:ml-[56px] sm:ml-[25px] mt-[32px]   md:mt-[40px] lg:mt-[40px] md:w-[500px] w-[263px] h-[48px] md:h-[44px] lg:h-[44px] md:flex border-[1px] rounded-3xl">
               <div className="flex">
                <Image src={search} alt="search icon" className="w-[20px] h-[20px] ml-[18px] mt-[10px]">

                </Image>
                <h1  className="md:w-[160px] w-[150px]  h-[16px] text-[14px] font-medium font-[PlusJakartaSans] tracking-percent1 ml-[18px] mt-[12px]   ">Search something here</h1>
                </div>
                
                <Image src={filter} alt="filter icon" className="md:w-[20px] md:h-[20px] w-[24px] h-[24px]  ml-[230px] mt-[10px] mr-[34px]">

                </Image>
                
                </div>
            
            <div className="md:w-[236px] md:h-[44px] md:gap-x-[20px] md:ml-[274px]  hidden md:flex   md:mt-[40px] md:mr-[32px]">
                <Image src={Like} alt="like-icon" className="w-[40px] h-[40px]">

                </Image>
                <Image src={Notification} alt="Notification-icon" className="w-[44px] h-[44px]">

                </Image>
                <Image src={Settings} alt="Settings-icon" className="w-[44px] h-[44px]">

                </Image>
                <Image src={Profil} alt="Profil-icon" className="w-[44px] h-[44px]">

                </Image>

</div>
            </div>
        </div>
        </div>
    )
}