import { Color } from "@/styles/variables";
import { Section, SectionContent, SubTitle } from "../Home/index.styles";
import Link from "next/link";
import { Category } from "services/cms";
import { CategoryList } from "./CategoryList";

export function OtherCategoriesSection({ categories }: { categories: Category[] }) {
  return (
    <Section fullWidth colorVariant={'dark-gradient'}  padding="8rem 8rem 14rem 8rem">
        <SectionContent flow="column">
          <div className="container">

            <h3>Other Categories</h3>
            <SubTitle color={Color.text1} lineHeight={1.4} maxWidth={70}>
              Keep exploring the vibrant ecosystem.
            </SubTitle>

            <CategoryList categories={categories} />

            <Link href="/learn">Go back</Link>
          </div>
        </SectionContent>
      </Section>
  )
}