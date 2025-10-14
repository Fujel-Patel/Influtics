import Breadcrumb from '@/components/common/Breadcrumb';

/**
 * A reusable header component for interior pages.
 * @param {{title: string, subtitle?: string, backgroundImage?: string}} props
 */
export default function Header({ title, subtitle, backgroundImage }) {
  const headerStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

  return (
    <header className="relative bg-gradient-to-r from-brand-pink to-brand-orange pt-32 pb-16 text-white">
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={headerStyle}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
      <div className="container mx-auto px-4 relative z-10">
        <Breadcrumb />
        <div className="text-center mt-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
