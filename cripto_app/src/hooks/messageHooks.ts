import { useEffect, useState } from "react";

type StatusState = {
  msg: string;
  show: boolean;
  isError: boolean;
};
const initialState: StatusState = { msg: "", show: false, isError: true };

export const useTemporalMessage = (time: number) => {
  //ESTADOS
  const [status, setStatus] = useState<StatusState>(initialState);
  //FUNCIONES Y MANEJADORES
  const initStatus = () => setStatus(initialState);
  //EFECTOS
  useEffect(() => {
    let unsubscribe: ReturnType<typeof setTimeout>;
    if (status.show) {
      unsubscribe = setTimeout(() => {
        initStatus();
      }, time);
    }
    return () => clearTimeout(unsubscribe);
  }, [status.show, time]);

  return [
    status.show,
    status.msg,
    status.isError,
    setStatus,
    initStatus,
  ] as const;
};
