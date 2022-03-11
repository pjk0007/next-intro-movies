export default function Detail({ params }: any) {
  const [title, id] = params || [];
  console.log(param);

  return (
    <div>
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
