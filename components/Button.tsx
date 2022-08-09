import styled from 'styled-components'
import { transparentize } from 'polished'
import { Defaults, Color, Font, Media } from 'const/styles/variables'

type ButtonProps = {
  wrapText?: boolean
  borderRadius?: number
  fontSize?: number
  paddingLR?: number
  variant?: string
  href?: string
  label: string
  target?: string
  rel?: string
  minHeight?: number
}

const Wrapper = styled.a<Omit<ButtonProps, "href" | "label" | "target" | "rel">>`
  display: flex;
  background: ${({ variant }) => (variant === 'outline' || 'text') ? 'transparent' : Color.darkBlue};
  flex-flow: row;
  border: 0.1rem solid ${({ variant }) => (variant === 'outline' || 'text') ? Color.darkBlue : 'transparent'};
  color: ${({ variant }) => variant === 'outline' || 'text' ? Color.darkBlue : Color.lightBlue};
  padding: ${({ paddingLR }) => paddingLR ? `0 ${paddingLR}rem` : '0 2.4rem'};
  box-sizing: border-box;
  border-radius: ${({ borderRadius }) => borderRadius ? borderRadius : Defaults.borderRadius};
  min-height: ${({ minHeight }) => minHeight ? `${minHeight}rem` : '5.6rem'};
  align-items: center;
  font-size: ${({ fontSize }) => fontSize ? `${fontSize}rem` : '2.2rem'};
  justify-content: center;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  white-space: ${({ wrapText }) => wrapText ? 'initial' : 'nowrap'};
  font-weight: ${Font.weightMedium};
  text-decoration: none;

  ${Media.mobile} {
    padding: 0 1.6rem;
    min-height: 4.8rem;
  }

  &:hover {
    background: ${({ variant }) => variant === 'outline' ? Color.darkBlue : Color.text1};
    color: ${Color.lightBlue};
  }
`

// General purpose multiple button wrapper
export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;

  ${Media.mediumDown} {
    justify-content: center;
    flex-flow: column wrap;

    > ${Wrapper} {
      width: 100%;
    }
  }
`

export default function Button({
  wrapText,
  borderRadius,
  fontSize,
  paddingLR,
  variant,
  href = "#",
  label,
  target,
  rel,
  minHeight
}: ButtonProps) {
  return (
    <Wrapper {...{ wrapText, borderRadius, fontSize, paddingLR, variant, minHeight }} href={href} target={target} rel={rel}>
      {label}
    </Wrapper>
  )
}