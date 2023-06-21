import styled from 'styled-components';
import { transparentize } from 'polished'
import { Color, Font, Media } from 'const/styles/variables'

const Wrapper = styled.ol<Pick<SocialListProps, "iconSize" | "gap" | "innerPadding" | "alignItems" | "labels">>`
  display: flex;
  justify-content: ${({ alignItems }) => (alignItems === 'left') ? 'flex-start' : (alignItems === 'right') ? 'flex-end' : 'center'};
  align-items: center;
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  gap: ${({ gap }) => gap ? `${gap}rem` : '7rem'};
  list-style-type: none;
  color: ${Color.text2};
  font-weight: ${Font.weightNormal};

  ${Media.mobile} {
    justify-content: center;
    flex-flow: row wrap;
    gap: ${({ gap }) => gap ? `${gap}rem` : '2rem'};
  }

  > li > a {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    line-height: 1;
    text-decoration: none;
    color: inherit;
    font-weight: inherit;
    padding: ${({ gap }) => gap ? `${gap}rem` : '2rem'};
    border-radius: ${({ gap }) => gap ? `${gap}rem` : '2rem'};
    border: 0.1rem solid transparent;
    transition: color 0.2s ease-in-out, background 0.2s ease-in-out, border-color 0.2s ease-in-out;

    ${Media.mobile} {
      padding: 1rem;
    }

    &:hover {
      background: ${Color.darkBlue2};
      border: 0.1rem solid ${Color.lightBlue};
      color: ${Color.lightBlue};
    }
  }

  > li > a > img {
    width: ${({ iconSize }) => iconSize ? `${iconSize}rem` : '5.8rem'};
    height: ${({ iconSize }) => iconSize ? `${iconSize}rem` : '5.8rem'};
    object-fit: contain;
    margin: ${({ labels }) => labels ? `0 0 1.2rem` : `0`};
  }

  > li > a > b {
    font-weight: inherit;
    margin: 1rem 0 0;
  }
`

interface SocialListProps {
  social: any // in place to prevent TS error: Needs fix
  labels?: boolean // toggle text labels visibility
  iconSize?: number // 'rem' size
  gap?: number // 'rem' size
  innerPadding?: number // 'rem' size
  alignItems?: string // left | center (default) | right
}

export default function SocialList({ social, labels = true, iconSize, gap, innerPadding, alignItems }: SocialListProps) {

  return (
    <Wrapper iconSize={iconSize} gap={gap} innerPadding={innerPadding} alignItems={alignItems} labels={labels}>
      {Object.keys(social).map((item, i) =>
        <li key={i}>
          <a href={social[item].url} target="_blank" rel="noopener nofollow noreferrer">
            <img src={`/images/icons/${social[item].label.toLowerCase()}.svg`} alt={social[item].label}></img>
            {labels && <b>{social[item].label}</b>}
          </a>
        </li>
      )}
    </Wrapper>
  )

}