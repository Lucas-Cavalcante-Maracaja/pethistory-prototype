import { useEffect } from "react";
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';

export function useCommonUserAuthSession() {
  const router = useRouter()
  const user = useSelector((state) => state.user);
  
  useEffect(() => {
    if ((user.name == "" && user.type == "") || !user.type == "common") {
      router.push({
        pathname: '/'
      });
    }
    
  }, [])
}
export function useVetUserAuthSession() {
  const router = useRouter()
  const user = useSelector((state) => state.user);
  
  useEffect(() => {
    if ((user.name == "" && user.type == "") || !user.type == "vet") {
      router.push({
        pathname: '/'
      });
    }
    
  }, [])
}