const DetailProductPage = (props) => {
    const {params} = props
  return (
    <div>
      <h1>{params.slug? "Halaman detail product" : "Halaman product"}</h1>
      {
        params.slug && (
          <>
            <p>Category: {params.slug[0]}</p>
            <p>Gender: {params.slug[1]}</p>
          </>
        )
      }
    </div>
  )
}

export default DetailProductPage
