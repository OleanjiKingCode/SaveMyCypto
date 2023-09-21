import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const noWallet = () => {
  toast.warn("Connect your wallet", {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const wrongEntry = () => {
  toast.warn("You have entered a wrong phrase", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
export const wrongCode = () => {
  toast.warn("You have entered a the wrong code", {
    position: toast.POSITION.TOP_RIGHT,
  });
};
