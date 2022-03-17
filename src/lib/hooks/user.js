import { useEffect } from "react";
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

export function useCommonUserAuthSession() {
  const router = useRouter()
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user.name == "" && user.type == "") {
      router.push({
        pathname: '/login'
      });
    }
    if ( !(user.type == "common")) {
      router.push({
        pathname: '/animal'
      });
    }
  }, [])
}
export function useVetUserAuthSession() {
  const router = useRouter()
  const user = useSelector((state) => state.user);
  
  useEffect(() => {
    if ((user.name == "" && user.type == "") || !(user.type == "vet")) {
      router.push({
        pathname: '/animal'
      });
    }
    
  }, [])
}

export function useUserAuthSession() {
  const router = useRouter()
  const user = useSelector((state) => state.user);
  
  useEffect(() => {
    if (user.name == "" && user.type == "")  {
      router.push({
        pathname: '/login'
      });
    }
    
  }, [])
}