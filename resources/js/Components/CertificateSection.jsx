import React, { useState, useEffect, useRef } from 'react';

// Gambar acak yang selalu tersedia (Picsum). Seed yang sama = gambar yang sama setiap kali dibuka.
const randomImage = (seed) => `https://picsum.photos/seed/${seed}/800/600`;

// Data 8 Sertifikat Resmi & Dokumen Foto
const defaultCertificates = [
  {
    id: 1,
    title: 'Full-Stack Web Development',
    issuer: 'Dicoding Indonesia',
    imageUrl: randomImage('cert-fullstack'),
  },
  {
    id: 2,
    title: 'Machine Learning Specialization',
    issuer: 'Coursera & DeepLearning.AI',
    imageUrl: randomImage('cert-machine-learning'),
  },
  {
    id: 3,
    title: 'MikroTik Certified Network Associate (MTCNA)',
    issuer: 'MikroTik Academy',
    imageUrl: randomImage('cert-mikrotik'),
  },
  {
    id: 4,
    title: 'AI Agent & Automation Engineer',
    issuer: 'OpenAI Developer Network',
    imageUrl: randomImage('cert-ai-agent'),
  },
  {
    id: 5,
    title: 'React & Next.js Advanced',
    issuer: 'Meta Certified',
    imageUrl: randomImage('cert-react-next'),
  },
  {
    id: 6,
    title: 'IoT & Embedded Systems Specialist',
    issuer: 'IEEE Certification',
    imageUrl: randomImage('cert-iot'),
  },
  {
    id: 7,
    title: 'Python Automation & Scripting',
    issuer: 'Google IT Automation',
    imageUrl: randomImage('cert-python'),
  },
  {
    id: 8,
    title: 'Flutter & Mobile UI/UX Design',
    issuer: 'Google Developers',
    imageUrl: randomImage('cert-flutter'),
  },
];

// Helper Kartu Sertifikat yang dapat di-drag
const DraggableCertificateCard = ({ id, title, issuer, imageUrl, initialPosition, rotation, containerRef, zIndex, onBringToFront }) => {
  const [position, setPosition] = useState(initialPosition);
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef(null);
  const dragOffset = useRef({ x: 0, y: 0 });

  const handleDragStart = (clientX, clientY) => {
    if (!cardRef.current) return;
    onBringToFront(id);
    setIsDragging(true);

    const cardRect = cardRef.current.getBoundingClientRect();
    dragOffset.current = {
      x: clientX - cardRect.left,
      y: clientY - cardRect.top,
    };
    document.body.style.userSelect = 'none';
  };

  const handleDragMove = (clientX, clientY) => {
    if (!isDragging || !containerRef.current || !cardRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const cardRect = cardRef.current.getBoundingClientRect();

    let newX = clientX - containerRect.left - dragOffset.current.x;
    let newY = clientY - containerRect.top - dragOffset.current.y;

    newX = Math.max(0, Math.min(newX, containerRect.width - cardRect.width));
    newY = Math.max(0, Math.min(newY, containerRect.height - cardRect.height));

    setPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    const onMouseMove = (e) => handleDragMove(e.clientX, e.clientY);
    const onTouchMove = (e) => handleDragMove(e.touches[0].clientX, e.touches[0].clientY);
    
    const handleDragEnd = () => {
      setIsDragging(false);
      document.body.style.userSelect = '';
    };

    if (isDragging) {
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('mouseup', handleDragEnd);
      window.addEventListener('touchmove', onTouchMove);
      window.addEventListener('touchend', handleDragEnd);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging, containerRef]);

  return (
    <div
      ref={cardRef}
      className="absolute w-52 sm:w-64 md:w-72 bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-lg cursor-grab active:cursor-grabbing transition-shadow duration-300 hover:shadow-2xl hover:border-[#3c83f6]/50 group select-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex: zIndex,
        touchAction: 'none',
        transform: `rotate(${rotation}deg)`,
      }}
      onMouseDown={(e) => handleDragStart(e.clientX, e.clientY)}
      onTouchStart={(e) => handleDragStart(e.touches[0].clientX, e.touches[0].clientY)}
    >
      <div className="relative overflow-hidden rounded-t-2xl aspect-[4/3] bg-slate-100">
        <img
          src={imageUrl}
          alt={title}
          draggable={false}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover pointer-events-none group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = randomImage(`fallback-${id}`);
          }}
        />
        <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" />
      </div>

      <div className="p-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#3c83f6] block mb-1">
          {issuer}
        </span>
        <h3 className="font-bold text-[#1e3a8a] text-xs sm:text-base leading-snug">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default function CertificateSection({ certificates = [] }) {
  const containerRef = useRef(null);
  const [initialLayouts, setInitialLayouts] = useState([]);
  const [cardZIndices, setCardZIndices] = useState({});
  const [minContainerHeight, setMinContainerHeight] = useState(1000);

  const displayCertificates = certificates.length > 0 ? certificates : defaultCertificates;

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const isMobile = window.innerWidth < 768;
      const cardWidth = window.innerWidth < 640 ? 208 : 288;

      // Jarak Vertikal & Titik Awal
      const startY = isMobile ? 380 : 230;
      const rowSpacing = isMobile ? 240 : 200;

      const layouts = displayCertificates.map((_, index) => {
        const isRightSide = index % 2 !== 0;
        const rowIndex = Math.floor(index / 2);

        let x;
        if (isRightSide) {
          x = Math.max(16, containerWidth - cardWidth - (containerWidth * (0.04 + (rowIndex % 2) * 0.06)));
        } else {
          x = Math.max(16, containerWidth * (0.04 + (rowIndex % 2) * 0.05));
        }

        const y = startY + rowIndex * rowSpacing;

        // Rotasi estetik yang bervariasi antara -7 hingga 7 derajat
        const rotationSequence = [-5, 6, -3, 5, -6, 4, -4, 7, -5, 3, -7, 5];
        const rotation = rotationSequence[index % rotationSequence.length];

        return {
          position: { x, y },
          rotation,
        };
      });

      setInitialLayouts(layouts);

      // Perhitungan tinggi container dinamis berdasarkan jumlah total baris (4 baris untuk 8 item)
      const totalRows = Math.ceil(displayCertificates.length / 2);
      const calculatedHeight = startY + totalRows * rowSpacing + 120;
      setMinContainerHeight(calculatedHeight);

      const zIndices = {};
      displayCertificates.forEach((card, index) => {
        zIndices[card.id || index + 1] = 20 + index;
      });
      setCardZIndices(zIndices);
    }
  }, [certificates]);

  const bringToFront = (cardId) => {
    setCardZIndices((prevZIndices) => {
      const maxZ = Math.max(...Object.values(prevZIndices), 20);
      if (prevZIndices[cardId] <= maxZ) {
        return {
          ...prevZIndices,
          [cardId]: maxZ + 1,
        };
      }
      return prevZIndices;
    });
  };

  return (
    <section
      id="certificates"
      ref={containerRef}
      style={{ minHeight: `${minContainerHeight}px` }}
      className="relative w-full bg-[#f0f9ff] text-slate-900 py-20 px-6 lg:px-20 overflow-hidden select-none transition-all duration-300"
    >
      {/* Background Soft Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-[#3c83f6]/10 blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] rounded-full bg-[#60a5fa]/12 blur-[120px]"></div>
      </div>

      {/* Header Layout */}
      <div className="relative z-10 max-w-6xl mx-auto mb-12 pointer-events-none">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8">
          <div>
            <span className="text-sm font-semibold tracking-wider text-[#3c83f6] block mb-2">
              - Certificates
            </span>
            <h2 className="text-4xl sm:text-6xl font-extrabold text-[#1e3a8a] tracking-tight leading-[1.08]">
              Certificates <br /> Credentials
            </h2>
          </div>
          <p className="text-base sm:text-lg text-slate-600 font-medium max-w-md pb-1 leading-relaxed">
            Drag and explore my official certifications, achievements, and professional qualifications.
          </p>
        </div>
      </div>

      {/* Render 8 Kartu Sertifikat Interaktif */}
      {initialLayouts.length > 0 &&
        displayCertificates.map((card, index) => {
          const cardId = card.id || index + 1;
          return (
            <DraggableCertificateCard
              key={cardId}
              id={cardId}
              title={card.title}
              issuer={card.issuer || card.subtitle || 'Certification'}
              imageUrl={card.imageUrl || card.src || card.image || randomImage(`cert-${cardId}`)}
              initialPosition={initialLayouts[index]?.position || { x: 20, y: 380 }}
              rotation={initialLayouts[index]?.rotation || 0}
              containerRef={containerRef}
              zIndex={cardZIndices[cardId] || 20}
              onBringToFront={bringToFront}
            />
          );
        })}
    </section>
  );
}