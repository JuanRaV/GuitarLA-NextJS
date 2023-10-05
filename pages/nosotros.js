import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

const Nosotros = () => {
  return (

    <Layout
        title={'Nosotros'}
        description="Sobre nosotros GuitarLA"
    >
        <main className='contenedor'>
          <h1 className='heading'>Nosotros</h1>
          <div className={styles.contenido}>
            <Image alt='Imagen sobre nosostros' src='/img/nosotros.jpg' width={1000} height={800}/>
            <div>
              <p>
                Sed imperdiet efficitur ornare. Nunc condimentum mollis sodales. Morbi lobortis efficitur mi euismod pulvinar. Suspendisse commodo convallis commodo. Nunc tortor dui, luctus id justo quis, semper egestas nunc. Vestibulum sed lectus purus. 
              </p>

              <p>
                Ut mattis commodo lectus, placerat suscipit dui feugiat ut. Vivamus et felis sed nibh cursus maximus. Etiam sed erat vitae enim faucibus scelerisque. Duis augue augue, luctus vitae odio et, accumsan tincidunt lectus. Vestibulum sed ullamcorper tellus. Praesent aliquam ullamcorper quam sed blandit. Quisque non elementum purus, vel sollicitudin est. Suspendisse potenti. Mauris semper eu libero malesuada consequat. Etiam gravida a enim at molestie. 
              </p>
            </div>
          </div>
        </main>
    </Layout>
  )
}

export default Nosotros
