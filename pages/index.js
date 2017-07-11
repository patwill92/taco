import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'


const Index = (props) => (
  <Layout>
    <h1 className="title">Categories</h1>
    <div className="columns is-multiline is-mobile">
      {
        props.list.map((item, index) => (
              <div key={item.categoryId} className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop">
                <Link as={`/post/${item.categoryId}`} href={`/post?id=${item.categoryId}`}>
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

// Static async function. can add to any page to fetch and send
// data as props to our page

Index.getInitialProps = async function() {
  const res = await fetch('https://api.scalablepress.com/v2/categories')
  var data = await res.json()
  var myData = [];
  data.map((item, index) => {
    if(item.image && item.image.url){
      myData.push(item)
    }
  })
  // console.log(myData)
  return {
    list: myData
  }
}

export default Index
