import React from 'react';
import { Head } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import HeroSection from '@/Components/HeroSection';
import AboutSection from '@/Components/AboutSection';
import GallerySection from '@/Components/GallerySection';
import CertificateSection from '@/Components/CertificateSection';
import ContactSection from '@/Components/ContactSection';
import Testimonials from '@/Components/TestimonialSection';

export default function LandingPage({ certificates, galleries, team }) {
    return (
        <MainLayout>
            <Head title="Landing Page Laravel React" />
            <HeroSection />
            <AboutSection team={team} />
            <GallerySection items={galleries} />
            <CertificateSection certificates={certificates} />
            <ContactSection />
            <Testimonials />
        </MainLayout>
    );
}