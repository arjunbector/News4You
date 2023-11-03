import Navbar from "../Components/Navbar/Navbar";
import Category from "../Components/CategorySection/Category";

const Categories = () => {
  
  return (
    <>
      <Navbar />
      <Category category={"Sports"}/> 
      <Category category={"Technology"}/>
      <Category category={"Business"}/>
      <Category category={"Entertainment"}/>
      <Category category={"Health"}/>
      <Category category={"Science"}/>
      <Category category={"Politics"}/>
    </>
  );
};

export default Categories;
