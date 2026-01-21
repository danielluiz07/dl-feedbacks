'use client'

import { useState } from "react"

export default function FeedbackForm(){
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")


    const handleSubmit = async(e: React.FormEvent)=>{
        e.preventDefault()
        await fetch('/api/feedbacks', {
            method: 'POST',
            body: JSON.stringify({name, message}),
            headers:{ 'Content-Type': 'application/json' },
        })
        setName('')
        setMessage('')
    }

    
}