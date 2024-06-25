
import CategoryItem from '../component-category/container-category/container-component'

import './diroctry.scss'
const Dirct=({categories})=>{
  
    return (
      
        <div className="directory-container">
          {categories.map((category) => (
            <CategoryItem key={category.id} category={category} />
          ))}
        </div>
      );
};
export default Dirct;