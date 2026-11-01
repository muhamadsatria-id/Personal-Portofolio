import React from 'react'
import {Head} from '@inertiajs/react'
import MainLayout from '@/Layouts/MainLayout'

export default function Galery({ galleries }) {
  return (
    <MainLayout>
      <Head title="Galeri" />
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-extrabold text-gray-900">Galeri</h1>
        <p className="mt-4 text-lg text-gray-600">
          Lihat beberapa proyek yang telah kami selesaikan.
        </p>
      </div>
    </MainLayout>
  )
}
