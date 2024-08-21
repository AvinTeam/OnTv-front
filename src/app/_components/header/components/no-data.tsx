import Image from "next/image"
import img_src from "../../../../../public/images/logo/empty-list-dark.webp"
 
function Nodata() {
  return (
    <div className="flex flex-col gap-3 ">
        <Image src={img_src} width={200} height={200} alt="no-data" />
        <p>برای جستجوی شما نتیجه ای پیدا نشد</p>
    </div>
  )
}

export default Nodata