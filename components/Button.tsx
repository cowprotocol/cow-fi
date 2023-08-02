import styled from 'styled-components'
import { Defaults, Color, Font, Media } from 'styles/variables'

type ButtonProps = {
  $wrapText?: boolean
  $borderRadius?: number
  $fontSize?: number
  $paddingLR?: number
  $marginTB?: number
  $variant?: string
  href?: string
  $label: string
  target?: string
  rel?: string
  $minHeight?: number
  onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

const Wrapper = styled.a<Omit<ButtonProps, 'href' | '$label' | 'target' | 'rel'>>`
  display: flex;
  background: ${Color.darkBlue};
  flex-flow: row;
  border: 0.1rem solid transparent;
  color: ${Color.lightBlue};
  padding: ${({ $paddingLR }) => $paddingLR ? `0 ${$paddingLR}rem` : '0 2.4rem'};
  margin: ${({ $marginTB }) => $marginTB ? `${$marginTB}rem 0` : '0'};
  box-sizing: border-box;
  border-radius: ${({ $borderRadius }) => ($borderRadius ? $borderRadius : Defaults.borderRadius)};
  min-height: ${({ $minHeight }) => ($minHeight ? `${$minHeight}rem` : '5.6rem')};
  align-items: center;
  font-size: ${({ $fontSize }) => ($fontSize ? `${$fontSize}rem` : '2.2rem')};
  justify-content: center;
  transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
  white-space: ${({ $wrapText }) => ($wrapText ? 'initial' : 'nowrap')};
  font-weight: ${Font.weightMedium};
  text-decoration: none;

  ${Media.mobile} {
    padding: 0 1.6rem;
    min-height: 4.8rem;
  }

  ${({ $variant }) =>
    $variant === 'outline' &&
    `
    background: transparent;
    border: 0.1rem solid ${Color.darkBlue};
    color: ${Color.darkBlue};
  `}

  ${({ $variant }) =>
    $variant === 'small' &&
    `
    min-height: 3.6rem;
    border-radius: ${({ $borderRadius }) => ($borderRadius ? $borderRadius : '1.2rem')};
  `}

  ${({ $variant }) =>
    $variant === 'text' &&
    `
    background: transparent;
    color: ${Color.darkBlue};
  `}

  ${({ $variant }) =>
    $variant === 'textLight' &&
    `
    background: transparent;
    color: ${Color.lightBlue};
  `}

  ${({ $variant }) =>
    $variant === 'light' &&
    `
    background: ${Color.lightBlue};
    color: ${Color.darkBlue};
  `}

  ${({ $variant }) => ($variant === 'outlineLight') && `
    background: transparent;
    border: 0.1rem solid ${Color.lightBlue};
  `}

  &:hover {
    background: ${({ $variant }) => ($variant === 'outline' ? Color.darkBlue : Color.text1)};
    color: ${Color.lightBlue};
  }
`

// General purpose multiple button wrapper
export const ButtonWrapper = styled.div<{ $center?: boolean }>`
  display: flex;
  gap: 1.6rem;
  width: 100%;

  ${({ $center }) =>
    $center &&
    `
    justify-content: center;
    align-items: center;
  `}

  ${Media.mediumDown} {
    flex-flow: column wrap;
    justify-content: center;

    > ${Wrapper} {
      width: 100%;
    }
  }
`

export default function Button({
  $wrapText,
  $borderRadius,
  $fontSize,
  $paddingLR,
  $marginTB,
  $variant,
  href = '#',
  $label,
  target,
  rel,
  $minHeight,
  onClick,
}: ButtonProps) {
  return (
    <Wrapper {...{ $wrapText, $borderRadius, $fontSize, $paddingLR, $marginTB, $variant, $minHeight }} href={href} target={target} rel={rel} onClick={onClick}>
      {$label}
    </Wrapper>
  )
}
