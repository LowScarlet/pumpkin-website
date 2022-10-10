import { Flip, toast } from "react-toastify";

export function send_toast(type:any, message:any) {
    const init = {transition: Flip, icon: "🚀"}
    if (type==='success') return toast.success(message, init)
    if (type==='error') return toast.error(message, init)
    if (type==='info') return toast.info(message, init)
    if (type==='warning') return toast.warning(message, init)
}