import { useState } from "react"
import { send_toast } from "../customToast"
import { FETCH_FAIL } from "../redux/messages"

/* eslint-disable react/no-unescaped-entities */
export default function Main(props: any) {
  const [memberData, setMemberData] = useState(props.memberData)
  const [resendBtn, setResendBtn] = useState(false)
  const [code, setCode] = useState("")

  const onChange_submit_code = (e: any) => {
    setCode(e.target.value)
  }

  const submit_code = async (e:any) => {
    e.preventDefault()
    try {
      const res = await fetch(`/api/account/email_confirmation?code=${code}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      // Get response as Json
      const data = await res.json()

      // Validation
      if (res.status === 200) {
        var x = props.memberData; x.profile.email_confirmation = true
        props.setMemberData(x); setMemberData(x)

        send_toast('success', data.detail)
      } else {
        send_toast('error', data.detail)
      }
    } catch {
      send_toast('error', FETCH_FAIL)
    }
  }

  const resend_code = async (e:any) => {
    e.preventDefault()
    setResendBtn(true)
    try {
      const res = await fetch('/api/account/email_confirmation', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })

      // Get response as Json
      const data = await res.json()

      // Validation
      if (res.status === 200) {
        send_toast('success', data.detail)
      } else {
        setResendBtn(false)
        send_toast('error', data.detail)
      }
    } catch {
      setResendBtn(false)
      send_toast('error', FETCH_FAIL)
    }
  }

  if (memberData.profile.email_confirmation) {
    return (<></>)
  }
  return (<>
    <div className="mt-2 alert alert-danger" role="alert">
      <p>
        ⚠️ You haven't verified your email.
        <br />
        🔎 Check your email or <button disabled={resendBtn} onClick={(e) => resend_code(e)} className="btn btn-sm btn-outline-danger">Resend 📨</button> the verification email.
      </p>
      🔑 Copy Paste the code you received here!
      <form className="input-group mb-3" onSubmit={submit_code}>
        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"
          onChange={onChange_submit_code} value={code}/>
        <button className="btn btn-success" type="submit" id="button-addon1">Button</button>
      </form>
      🧐 Risks of not verifying email:
      <ul>
        <li>🔗 Unable to associate third party account.</li>
        <li>♻️ Your account will be deleted in an indefinite period of time.</li>
        <li>🎯 If you use an email that is not yours, the user of that email can take over your account with the forgot password feature.</li>
      </ul>
    </div>
  </>)
}