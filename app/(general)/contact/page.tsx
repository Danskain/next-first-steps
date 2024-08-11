import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'Esta es la pagina de contactos de la empresa',
  keywords: ['About Page', 'Danska', 'informacion', '...']
 };

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact Page</span>
    </>
  )
}