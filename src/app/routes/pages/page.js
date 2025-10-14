import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { 
  HiShoppingBag, 
  HiSparkles, 
  HiCheckCircle, 
  HiUserPlus, 
  HiCurrencyDollar,
  HiArrowRight 
} from 'react-icons/hi2';

export const metadata = {
  title: 'All Pages - Influtics',
  description: 'Explore all available pages including video shop, services, checkout, authentication, and pricing.',
  keywords: 'pages, video shop, services, pricing, checkout, sign in, sign up',
};

export default function PagesPage() {

  return (
     <>
     <h1 className='bg-gray-300 text-2xl h-screen flex justify-center items-center '>
       Pages are Coming Soon
     </h1>
    </>
  );
}