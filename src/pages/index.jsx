import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'


export default function Home() {
  const router = useRouter()
  const user = useSelector((state) => state.user);


  useEffect(() => {
    if (user.type == "common") {
      router.push({
        pathname: '/animal'
      });
    } else if (user.type == "vet") {
      router.push({
        pathname: '/vetanimal'
      });
    } else if (user.type == '') {
      router.push({
        pathname: '/login'
      });
    }
  }, user)

  return (
    <>



    </>



  )
}
