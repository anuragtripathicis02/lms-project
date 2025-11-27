'use client'
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

import LoadingImg from "../../public/images/1.gif";
import Logo from "../../public/images/logo-black.svg";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/website/login"); // Redirect to login page after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup in case component unmounts
  }, [router]);

  return (
    <div className={`${styles.page} loading-main`}>
       <main className={styles.main}>
         <div className="loading-box">
            <div className="logo-loading-mobile text-center d-md-none">
                <Image src={Logo} alt="" className="mb-2"/>
                <h6 className="m-0">LAST MAN STANDING</h6>
            </div>
            <Image src={LoadingImg} alt="" className="mb-24 gif-logo"/>
            <h2 className="text-loading text-center mb-0">Loading...</h2>
         </div>
       </main>
    </div>
  );
}
