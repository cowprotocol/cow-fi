import { Category } from "services/cms";
import { CardItem, CardWrapper } from "../Home/index.styles";
import Link from "next/link";

export interface CategoryListProps {
  categories: Category[];
}

export function CategoryList({ categories }: CategoryListProps) {
return (
  <CardWrapper maxWidth={100}>
    {categories.map((category) => {
      const { name, description, slug, image, textColor, backgroundColor } = category.attributes
      const imageUrl = image?.data?.attributes?.url
      return (
        <CardItem
          key={slug} 
          data-category={slug} 
          imageHeight={8} 
          imageRounded 
          background={backgroundColor} 
          color={textColor}>
            {imageUrl && <img src={imageUrl} alt="image" />}                    
            <h4><Link href={`/learn/categories/${slug}`}>{name}</Link></h4>
            <p>{description}</p>
        </CardItem>
      )
    })}
  </CardWrapper>
)
}
