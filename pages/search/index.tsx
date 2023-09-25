const SearchIndex = () => {
  return <></>
}

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/',
      permanent: false
    }
  }
}

export default SearchIndex
