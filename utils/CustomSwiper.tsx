import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db, sdb } from '@/firebase/config';
import { getDownloadURL, ref } from 'firebase/storage';

type banners = {
    sortingId: number,
    imageUrl: string,
}

const CustomSwiper = () => {
    const [ data, setData ] = useState<banners[]>();

    const getBanners = async () => {
        const bannerQuery = await getDocs(query(collection(db, "banners"), orderBy("sortingId"))); // updated
        const banners = bannerQuery.docs.map(async (doc) => {
            const b = doc.data();
            //const imgRef = ref(sdb, b.gallery);
            //const imgURL = await getDownloadURL(imgRef);
            return {
                sortingId: b.sortingId,
                imageUrl: b.imageUrl,
            };
        });

        const resolvedBanners = await Promise.all(banners);
        setData(resolvedBanners);
    };

    useEffect(() => {
        getBanners();
    }, [])

    return (
        <Swiper 
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                dynamicBullets: true,
            }} 
            modules={[Autoplay, Pagination]} 
            className="mySwiper h-full"
        >
            {
                data?.map((value, key) => (
                    <SwiperSlide key={key}><Image alt="" width={400} height={400} src={value.imageUrl} /></SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default CustomSwiper;