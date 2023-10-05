import Layout from '../components/layout'
import Post from '../components/post'
import styles from '../styles/grid.module.css'

const Blog = ({posts}) => {
  console.log(posts)
  return (

    <Layout
        title={'Blog'}
        description="Blog de musica, venta de guitarras, consejos y cursos, GuitarLA"
    >
        <main className='contenedor'>
          <h1 className='heading'>Blog</h1>
          <div className={styles.grid}>
            {posts?.map(post=>(
              <Post
                key={post.id}
                post={post.attributes}
              />
            ))}
          </div>
        </main>
    </Layout>
  )
}
export async function getStaticProps(){
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  //Renombramos la variable
  const {data:posts} = await respuesta.json()

  return {
    props: {
      posts
    }
  }
}
export default Blog
