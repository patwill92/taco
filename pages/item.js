import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

//	test_N5cZ7gEEXak0xA5QEmr3SA

const Item = (props) => (
  <Layout>
    <h1 className="title">{props.title}</h1>
    <div className="columns is-multiline is-mobile">
      {
          <div className="column is-half-mobile is-half-tablet is-half-desktop">
            {/*<Link as={`/category/${props.title}/${item.id}`} href={`/item?id=${item.id}`}>*/}
              <article className="notification is-info">
                <p className="title">{props.subTitle}</p>
                <p className="content">{props.description}</p>
                <figure className="image is-4by3">
                  <img src={props.image} alt=""/>
                </figure>
              </article>
            {/*</Link>*/}
          </div>
      }
    </div>
    <style jsx>
      {`

      `}
    </style>
  </Layout>
)


Item.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.scalablepress.com/v2/products/${id}`)
  var data = await res.json()
  // var myData = [];
  // data.products.map((item, index) => {
  //   if(item.image && item.image.url){
  //     myData.push(item)
  //   }
  // })
  // console.log(myData)
  return {
    title: data.name,
    subTitle: data.comments,
    description: data.description,
    image: data.image.url
  }
}

export default Item