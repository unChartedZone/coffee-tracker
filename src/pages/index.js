import { graphql } from "gatsby"
import React from "react"

const IndexPage = ({ data }) => {
  const businesses = data.yelp.search.business
  console.log(businesses)

  return (
    <>
      <div>Coffee Picker</div>
    </>
  )
}

export const query = graphql`
  query yelpQuery {
    yelp {
      search(location: "San Diego", term: "coffee", limit: 9) {
        business {
          id
          name
          rating
          location {
            address1
            city
            state
            postal_code
          }
          photos
        }
      }
    }
  }
`

export default IndexPage
