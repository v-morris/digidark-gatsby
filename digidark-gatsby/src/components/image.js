import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */
const style = {
  display: `inline-block`,
  textAlign: `center`,
  paddingBottom:`50px`
}
const style2 = {
  display: `inline-block`,
  margin: `5px`,
  textAlign: `center`,
  border: `2px solid transparent`,

  borderImage: `linear-gradient(30deg, #3686A0 50%, #5F4B8B 100%)`,
  borderImageSlice: `1`,
  boxShadow: `1px 0 8px #444444`,
  width: `300px`,

}


const Image = () => (

  <StaticQuery
    query={query}
    render={data => (
      <div style={style}>
        <div>
          <Img style={style2} fluid={data.imageOne.childImageSharp.fluid} />
          <Img style={style2} fluid={data.imageTwo.childImageSharp.fluid} />
          <Img style={style2} fluid={data.imageThree.childImageSharp.fluid} />
        </div>
        <div>
          <Img style={style2} fluid={data.imageFive.childImageSharp.fluid} />
          <Img style={style2} fluid={data.imageSix.childImageSharp.fluid} />
        </div>
        <div>
          <Img style={style2} fluid={data.imageFour.childImageSharp.fluid} />
          <Img style={style2} fluid={data.imageEight.childImageSharp.fluid} />
          <Img style={style2} fluid={data.imageThirteen.childImageSharp.fluid} />
        </div>

       
        {/* <Img style={style2} fluid={data.imageSeven.childImageSharp.fluid} />
        <Img style={style2} fluid={data.imageEighteen.childImageSharp.fluid} />
        <Img style={style2} fluid={data.imageTen.childImageSharp.fluid} />
        <Img style={style2} fluid={data.imageEleven.childImageSharp.fluid} />
        <Img style={style2} fluid={data.imageTwelve.childImageSharp.fluid} />
       
        <Img style={style2} fluid={data.imageFourteen.childImageSharp.fluid} /> */}

        <Img style={style2} fluid={data.imageFifteen.childImageSharp.fluid} />
        <Img style={style2} fluid={data.imageSixteen.childImageSharp.fluid} />
        <Img style={style2} fluid={data.imageSeventeen.childImageSharp.fluid} />
        


      </div>
    )}
  />

)
const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "fineart-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "fineart-2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "fineart-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFour: file(relativePath: { eq: "fineart-4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFive: file(relativePath: { eq: "fineart-5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSix: file(relativePath: { eq: "fineart-6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageSeven: file(relativePath: { eq: "fineart-7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEight: file(relativePath: { eq: "fineart-14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageNine: file(relativePath: { eq: "fineart-15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTen: file(relativePath: { eq: "fineart-12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageEleven: file(relativePath: { eq: "fineart-13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwelve: file(relativePath: { eq: "fineart-16.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThirteen: file(relativePath: { eq: "fineart-17.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFourteen: file(relativePath: { eq: "fineart-18.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageFifteen: file(relativePath: { eq: "fineart-19.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
        imageSixteen: file(relativePath: { eq: "fineart-20.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      
        imageSeventeen: file(relativePath: { eq: "fineart-21.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      
        imageEighteen: file(relativePath: { eq: "fineart-22.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      
    

      }
  
`;

export default Image
