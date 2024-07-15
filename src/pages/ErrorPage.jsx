import { useRouteError } from "react-router-dom";


export default function ErrorBoundary() {
  const error = useRouteError();
  console.log(error.message);
  return (
    <div style={{margin: 'auto', textAlign: 'center', color: 'gray', marginTop:"10rem"}}>
      <h2>Something went wrong</h2>
      <h3>Please check your entered address and try again</h3>
      <div>{error.message}</div>
    </div>
  )
}