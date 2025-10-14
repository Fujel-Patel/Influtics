import { socialPlatforms } from '@/data/socialPlatforms'; // Assumes this file exists
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function SocialIcons({ className, iconSize = 24, ...props }) {
  return (
    <div className={cn("flex items-center gap-4", className)} {...props}>
      {socialPlatforms.map(social => (
        <a 
          key={social.name} 
          href={social.href} 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label={social.name}
          className="text-gray-400 hover:text-brand-pink transition-colors"
        >
          <Image src={social.icon} alt={social.name} width={iconSize} height={iconSize} />
        </a>
      ))}
    </div>
  );
}
