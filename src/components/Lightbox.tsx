import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  initialIndex?: number;
  onClose: () => void;
}

const Lightbox = ({ images, initialIndex = 0, onClose }: LightboxProps) => {
  const [index, setIndex] = useState(initialIndex);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center animate-fade-in">
      <button onClick={onClose} className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10">
        <X size={32} />
      </button>

      <button onClick={prev} className="absolute left-4 md:left-8 text-foreground hover:text-primary transition-colors">
        <ChevronLeft size={40} />
      </button>

      <div className="max-w-4xl max-h-[80vh] mx-16">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="max-w-full max-h-[80vh] object-contain rounded-lg"
        />
      </div>

      <button onClick={next} className="absolute right-4 md:right-8 text-foreground hover:text-primary transition-colors">
        <ChevronRight size={40} />
      </button>

      <div className="absolute bottom-6 text-muted-foreground text-sm">
        {index + 1} / {images.length}
      </div>
    </div>
  );
};

export default Lightbox;
