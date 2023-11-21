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
    console.log('res',res)
    const message = await res.json()
    console.log('mess',message)
    return {
      status: res.status,
      message
    }
}