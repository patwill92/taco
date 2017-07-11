import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

//	test_N5cZ7gEEXak0xA5QEmr3SA

const Post = (props) => (
  <Layout>
    <h1 className="title">{props.title}</h1>
    <div className="columns is-multiline is-mobile">
      {
        props.list.map((item, index) => (
          <div key={item.id} className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
            <Link as={`/post/item/${item.id}`} href={`/item?id=${item.id}`}>
              <article className="notification is-info">
                <p className="title">{item.name}</p>
                <p className="subtitle">{item.type}</p>
                <figure className="image is-4by3">
                  <img src={item.image.url} alt=""/>
                </figure>
              </article>
            </Link>
          </div>
        ))
      }
    </div>
    <style jsx>
      {`

      `}
    </style>
  </Layout>
)


Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.scalablepress.com/v2/categories/${id}`)
  var data = await res.json()
  var myData = [];
  data.products.map((item, index) => {
    if(item.image && item.image.url){
      myData.push(item)
    }
  })
  // console.log(myData)
  return {
    list: myData,
    title: data.name
  }
}

export default Post

