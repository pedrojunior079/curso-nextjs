import Navbar from "@/components/Navbar"
import Link from "next/link"
export default function Products(){
  return (
     <>
      <Navbar/>
      <h1>Página de Produtos</h1>
      <Link href="/">Voltar</Link>
     </>
  )
}