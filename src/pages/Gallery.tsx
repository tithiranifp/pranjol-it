import Layout from "@/components/Layout";
import { useState } from "react";

const galleryItems = [
  { src: "/gallery/pranjol-it-01.jpg", title: "প্রাঞ্জল আইটি - গ্রুপ ফটো" },
  { src: "/gallery/pranjol-it-02.jpg", title: "প্রাঞ্জল আইটি - ক্লাস সেশন" },
  { src: "/gallery/pranjol-it-03.jpg", title: "প্রাঞ্জল আইটি - শিক্ষার্থীরা" },
  { src: "/gallery/pranjol-it-04.jpg", title: "প্রাঞ্জল আইটি - প্র্যাক্টিক্যাল ক্লাস" },
  { src: "/gallery/pranjol-it-05.jpg", title: "প্রাঞ্জল আইটি - আউটডোর" },
  { src: "/gallery/pranjol-it-06.jpg", title: "প্রাঞ্জল আইটি - ব্যাচ ফটো" },
  { src: "/gallery/pranjol-it-07.jpg", title: "প্রাঞ্জল আইটি - ল্যাব সেশন" },
  { src: "/gallery/pranjol-it-08.jpg", title: "প্রাঞ্জল আইটি - টিম" },
  { src: "/gallery/pranjol-it-09.jpg", title: "প্রাঞ্জল আইটি - কার্যক্রম" },
  { src: "/gallery/pranjol-it-10.jpg", title: "প্রাঞ্জল আইটি - প্রশিক্ষণ" },
  { src: "/gallery/pranjol-it-11.jpg", title: "প্রাঞ্জল আইটি - সেমিনার" },
  { src: "/gallery/pranjol-it-12.jpg", title: "প্রাঞ্জল আইটি - ইভেন্ট" },
  { src: "/gallery/pranjol-it-13.jpg", title: "প্রাঞ্জল আইটি - স্টুডেন্টস" },
  { src: "/gallery/pranjol-it-14.jpg", title: "প্রাঞ্জল আইটি - ব্যানার" },
  { src: "/gallery/pranjol-it-15.jpg", title: "প্রাঞ্জল আইটি - অনুষ্ঠান" },
  { src: "/gallery/pranjol-it-16.jpg", title: "প্রাঞ্জল আইটি - ক্লাসরুম" },
  { src: "/gallery/pranjol-it-17.jpg", title: "প্রাঞ্জল আইটি - প্রতিষ্ঠান" },
  { src: "/gallery/pranjol-it-18.jpg", title: "প্রাঞ্জল আইটি - শিক্ষা কার্যক্রম" },
  { src: "/gallery/pranjol-it-19.jpg", title: "প্রাঞ্জল আইটি - সফটওয়্যার ট্রেনিং" },
  { src: "/gallery/pranjol-it-20.jpg", title: "প্রাঞ্জল আইটি - গ্রুপ স্টাডি" },
  { src: "/gallery/pranjol-it-21.jpg", title: "প্রাঞ্জল আইটি - ব্যাচ সেশন" },
  { src: "/gallery/pranjol-it-22.jpg", title: "প্রাঞ্জল আইটি - কম্পিউটার ল্যাব" },
  { src: "/gallery/pranjol-it-23.jpg", title: "প্রাঞ্জল আইটি - ওয়ার্কশপ" },
  { src: "/gallery/pranjol-it-24.jpg", title: "প্রাঞ্জল আইটি - মেন্টরিং" },
  { src: "/gallery/pranjol-it-25.jpg", title: "প্রাঞ্জল আইটি - প্রজেক্ট ওয়ার্ক" },
  { src: "/gallery/pranjol-it-26.jpg", title: "প্রাঞ্জল আইটি - ক্যাম্পাস" },
  { src: "/gallery/pranjol-it-27.jpg", title: "প্রাঞ্জল আইটি - ডেমো ক্লাস" },
  { src: "/gallery/pranjol-it-28.jpg", title: "প্রাঞ্জল আইটি - হ্যান্ডস-অন ট্রেনিং" },
  { src: "/gallery/pranjol-it-29.jpg", title: "প্রাঞ্জল আইটি - সার্টিফিকেট প্রোগ্রাম" },
  { src: "/gallery/pranjol-it-30.jpg", title: "প্রাঞ্জল আইটি - স্কিল ডেভেলপমেন্ট" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Layout>
      <section className="hero-gradient section-padding">
        <div className="container">
          <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">গ্যালারি</h1>
          <p className="text-primary-foreground/80 text-lg">আমাদের কার্যক্রমের ছবি দেখুন</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="group relative rounded-xl overflow-hidden bg-muted aspect-[4/3] border border-border cursor-pointer"
                onClick={() => setSelectedImage(item.src)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                  <p className="text-sm font-semibold text-background">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <button
            className="absolute top-4 right-4 text-white text-3xl font-bold hover:opacity-70"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
