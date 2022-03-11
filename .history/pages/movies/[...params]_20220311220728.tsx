import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const params = router.query.params;

  return (
    <div>
      <h4>{router.query.title || "Loading..."}</h4>
    </div>
  );
}
