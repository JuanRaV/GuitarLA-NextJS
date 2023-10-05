import Layout from "../components/layout"
import Link from 'next/link'

const Pagina404 = () => {
  return (
    
    <Layout
        title="Pagina no encontrada"
    >
        <p className="error">Pagina No Encontrada</p>
        <Link href={'/'}className="error-enlace">Ir a Inicio</Link>
    </Layout>
  )
}

export default Pagina404
