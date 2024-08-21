import { OntenCard } from "@/app/_components/cards/onten-card";
import dataDec1 from "../../../../../public/images/Mask Group 29.png";
import dataDec2 from "../../../../../public/images/Mask Group 30.png";
import dataDec3 from "../../../../../public/images/Mask Group 31.png";
import dataDec4 from "../../../../../public/images/Mask Group 33.png";
import Image from "next/image";
import Link from "next/link";
import { ViewIcon } from "@/app/_components/icons";
import { getAllProgram } from "./_api/get-all-data";
const dataDec: any[] = [
  {
    path: dataDec1,
    alt: "test",
    poster: [
      {
        url: "https://ontv-storage.s3.ir-thr-at1.arvanstorage.ir/poster/20/1723449056-srzmyn-madry-fsl-som-3_0.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=09c26f7d-01de-47bb-a937-90372def75ad%2F20240819%2Fir-thr-at1%2Fs3%2Faws4_request&X-Amz-Date=20240819T074000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Signature=998403cf412cdb6c6fcae6b9ebb3734759a72a3b7e6167b87af6e0c88279d059",
      },
    ],
    tags: [{ name: "تگ تست" }],
    id: 5,
    seen: 6,
    title: "عنوان تست",
    description: "توضیحات تست,",
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec2,
    alt: "test",
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    poster: [
      {
        url: "https://ontv-storage.s3.ir-thr-at1.arvanstorage.ir/poster/20/1723449056-srzmyn-madry-fsl-som-3_0.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=09c26f7d-01de-47bb-a937-90372def75ad%2F20240819%2Fir-thr-at1%2Fs3%2Faws4_request&X-Amz-Date=20240819T074000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Signature=998403cf412cdb6c6fcae6b9ebb3734759a72a3b7e6167b87af6e0c88279d059",
      },
    ],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [
      {
        url: "https://ontv-storage.s3.ir-thr-at1.arvanstorage.ir/poster/20/1723449056-srzmyn-madry-fsl-som-3_0.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=09c26f7d-01de-47bb-a937-90372def75ad%2F20240819%2Fir-thr-at1%2Fs3%2Faws4_request&X-Amz-Date=20240819T074000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Signature=998403cf412cdb6c6fcae6b9ebb3734759a72a3b7e6167b87af6e0c88279d059",
      },
    ],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [
      {
        url: "https://ontv-storage.s3.ir-thr-at1.arvanstorage.ir/poster/20/1723449056-srzmyn-madry-fsl-som-3_0.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=09c26f7d-01de-47bb-a937-90372def75ad%2F20240819%2Fir-thr-at1%2Fs3%2Faws4_request&X-Amz-Date=20240819T074000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Signature=998403cf412cdb6c6fcae6b9ebb3734759a72a3b7e6167b87af6e0c88279d059",
      },
    ],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [
      {
        url: "https://ontv-storage.s3.ir-thr-at1.arvanstorage.ir/poster/20/1723449056-srzmyn-madry-fsl-som-3_0.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=09c26f7d-01de-47bb-a937-90372def75ad%2F20240819%2Fir-thr-at1%2Fs3%2Faws4_request&X-Amz-Date=20240819T074000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Signature=998403cf412cdb6c6fcae6b9ebb3734759a72a3b7e6167b87af6e0c88279d059",
      },
    ],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [
      {
        url: "https://ontv-storage.s3.ir-thr-at1.arvanstorage.ir/poster/20/1723449056-srzmyn-madry-fsl-som-3_0.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=09c26f7d-01de-47bb-a937-90372def75ad%2F20240819%2Fir-thr-at1%2Fs3%2Faws4_request&X-Amz-Date=20240819T074000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Signature=998403cf412cdb6c6fcae6b9ebb3734759a72a3b7e6167b87af6e0c88279d059",
      },
    ],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [
      {
        url: "https://ontv-storage.s3.ir-thr-at1.arvanstorage.ir/poster/20/1723449056-srzmyn-madry-fsl-som-3_0.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=09c26f7d-01de-47bb-a937-90372def75ad%2F20240819%2Fir-thr-at1%2Fs3%2Faws4_request&X-Amz-Date=20240819T074000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Signature=998403cf412cdb6c6fcae6b9ebb3734759a72a3b7e6167b87af6e0c88279d059",
      },
    ],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [
      {
        url: "https://ontv-storage.s3.ir-thr-at1.arvanstorage.ir/poster/20/1723449056-srzmyn-madry-fsl-som-3_0.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=09c26f7d-01de-47bb-a937-90372def75ad%2F20240819%2Fir-thr-at1%2Fs3%2Faws4_request&X-Amz-Date=20240819T074000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Signature=998403cf412cdb6c6fcae6b9ebb3734759a72a3b7e6167b87af6e0c88279d059",
      },
    ],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [
      {
        url: "https://ontv-storage.s3.ir-thr-at1.arvanstorage.ir/poster/20/1723449056-srzmyn-madry-fsl-som-3_0.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=09c26f7d-01de-47bb-a937-90372def75ad%2F20240819%2Fir-thr-at1%2Fs3%2Faws4_request&X-Amz-Date=20240819T074000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Signature=998403cf412cdb6c6fcae6b9ebb3734759a72a3b7e6167b87af6e0c88279d059",
      },
    ],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [
      {
        url: "https://ontv-storage.s3.ir-thr-at1.arvanstorage.ir/poster/20/1723449056-srzmyn-madry-fsl-som-3_0.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=09c26f7d-01de-47bb-a937-90372def75ad%2F20240819%2Fir-thr-at1%2Fs3%2Faws4_request&X-Amz-Date=20240819T074000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Signature=998403cf412cdb6c6fcae6b9ebb3734759a72a3b7e6167b87af6e0c88279d059",
      },
    ],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [
      {
        url: "https://ontv-storage.s3.ir-thr-at1.arvanstorage.ir/poster/20/1723449056-srzmyn-madry-fsl-som-3_0.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=09c26f7d-01de-47bb-a937-90372def75ad%2F20240819%2Fir-thr-at1%2Fs3%2Faws4_request&X-Amz-Date=20240819T074000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Signature=998403cf412cdb6c6fcae6b9ebb3734759a72a3b7e6167b87af6e0c88279d059",
      },
    ],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [
      {
        url: "https://ontv-storage.s3.ir-thr-at1.arvanstorage.ir/poster/20/1723449056-srzmyn-madry-fsl-som-3_0.jpg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=09c26f7d-01de-47bb-a937-90372def75ad%2F20240819%2Fir-thr-at1%2Fs3%2Faws4_request&X-Amz-Date=20240819T074000Z&X-Amz-SignedHeaders=host&X-Amz-Expires=36000&X-Amz-Signature=998403cf412cdb6c6fcae6b9ebb3734759a72a3b7e6167b87af6e0c88279d059",
      },
    ],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [{ url: dataDec4 }],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [{ url: dataDec4 }],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [{ url: dataDec4 }],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [{ url: dataDec4 }],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [{ url: dataDec4 }],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "توضیحات تست,",
    alt: "test",
    poster: [{ url: dataDec4 }],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [{ url: dataDec4 }],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
  {
    path: dataDec3,
    tags: [{ name: "sada" }],
    seen: 6,
    title: "hhh",
    id: 5,
    description: "fdgdf,",
    alt: "test",
    poster: [{ url: dataDec4 }],
    descriptions: {
      title: "خبر های روز",
      dec: "مراسم ویژه تشییع پیکر مطهر شهیدان خدمت در مصلی تهران و قم",
    },
  },
];
export default async function AllProgram({
  params,
}: {
  params: { slug: string };
}) {
  const slug  = decodeURIComponent(params.slug?.split(".")?.[0]);
  const programs = await getAllProgram(slug);
  console.log(programs?.programs?.data);
  return (
    <div className="bg-[black]">
      <div className="container mb-6 mt-5 flex flex-col shadow-xl p-4 w-screen overflow-auto ">
        <p>ویژه ایرانی</p>
        <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-2 md:gap-1.5 lg:gap-4 w-full h-full mt-4">
          {programs?.programs?.data?.map((item: any) => (
            <div className="w-full h-[280px] 2xl:h-[360px]">
              <OntenCard data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
