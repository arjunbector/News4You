import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
   <div style={
    {
        height:"100vh",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    }
   }>
    <div style={
        {
            display:"flex",
            flexDirection:"column"
        }
        }>
        <h1>404</h1>
        <div>Not Found</div>
    </div>
   </div>
  );
}  