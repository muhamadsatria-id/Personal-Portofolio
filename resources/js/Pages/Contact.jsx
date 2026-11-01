import MainLayout from '@/Layouts/MainLayout'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Contact() {
  return (
    <MainLayout>
        <Head title="Contact" />
        <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
            <h1 className="text-4xl font-extrabold text-gray-900">Contact</h1>
            <div>Contact information goes here</div>
        </div>
    </MainLayout>
  )
}
