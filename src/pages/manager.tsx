import { GetServerSideProps } from "next"

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    redirect: {
      permanent: false,
      destination: 'https://portfolio-cms-ibyh.onrender.com/admin'
    }
  }
}

export default function Manager() {
  return <></>
}