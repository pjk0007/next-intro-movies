import Seo from "../../components/Seo";

export default function Detail({ params }: any) {
  const [title, id] = params || [];

  return (
    <div>
      <Seo>
        <title>{title}</title>
      </Seo>
      <h4>{title}</h4>
    </div>
  );
}

export function getServerSideProps({ params: { params } }: any) {
  return {
    props: {
      params,
    },
  };
}
