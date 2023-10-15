import { useRouter } from "next/router";

function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  if (params.length === 2) {
    return (
      <h2>
        {" "}
        {params[0]} hello feature {params[1]} hello concepts
      </h2>
    );
  } else if (params.length === 1) {
    return <h2> {params[0]} hello feature</h2>;
  }
  return <div>Docs home page</div>;
}

export default Docs;
