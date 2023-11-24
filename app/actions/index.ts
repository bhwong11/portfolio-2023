import { MailData } from "@/app/lib/types"
import { mailerApi } from "@/app/lib/data"

export const sendMail = async (formData:MailData)=>{
    const res = await fetch(mailerApi,{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const message = await res.json()
    return {
      status: res.status,
      message
    }
}