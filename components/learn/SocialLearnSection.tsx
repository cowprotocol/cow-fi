import { CONFIG } from "@/const/meta";
import { Section, SectionContent, SubTitle } from "../Home/index.styles";
import SocialList from "../SocialList";
import { Color } from "@/styles/variables";

export function SocialLearnSection() {
  return (
    <Section fullWidth>
      <SectionContent flow={'column'}>
        <div>
          <h3>Get in touch</h3>
          <SubTitle maxWidth={60} color={Color.text1} lineHeight={1.4}>
            You would like to suggest or even make your own article, reach out on Twitter or Discord!
          </SubTitle>
          <SocialList social={CONFIG.social} color={Color.darkBlue} />
        </div>
      </SectionContent>
    </Section>
  )
}