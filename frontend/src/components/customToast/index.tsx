import { Flip, toast } from "react-toastify";

export function send_toast(type:any, message:any) {
    const init = {transition: Flip, icon: "🚀"}
    if (type==='success') return toast.success(message, {...init, icon:"✔️"})
    if (type==='error') return toast.error(message, {...init, icon:"❌"})
    if (type==='info') return toast.info(message, {...init, icon:"⚠️"})
    if (type==='warning') return toast.warning(message, {...init, icon:"⚠️"})
}