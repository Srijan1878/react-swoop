import styled from 'styled-components'

export const CarouselWrapper = styled.div`
  position: relative;
  width: 60vw;
  height: 60vh;
  overflow: hidden;
`
export const CarouselContentWrapper = styled.div`
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  user-select: none;
  transition: all ${(props) => props.speed}s ease-in-out;
  * {
    width: 100%;
    height: 100%;
    object-fit: cover;
    pointer-events: none;
  }
`
export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  left: ${(props) => !props.next && '0%'};
  right: ${(props) => props.next && '0%'};
  padding-inline: 0.5rem;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  font-weight: bold;
  transition: all 0.35s ease-in;
  transform: ${(props) => !props.next && 'rotate(180deg)'};
  &:hover {
    filter: ${(props) =>
      !props.next
        ? 'drop-shadow(-2px -6px 2px black)'
        : 'drop-shadow(2px 6px 2px black)'};
  }
  &:disabled {
    cursor: not-allowed;
  }
`
export const StyledCarouselTabs = styled.div`
  position: absolute;
  left: 50%;
  bottom: 8%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 4px;
`

export const CarouselTab = styled.div`
  height: 4px;
  cursor: pointer;
  width: 4px;
  border-radius: 50%;
  border: 1px solid white;
  background-color: ${(props) => (props.isActive ? 'white' : 'transparent')};
`

export const CarouselContentTracker = styled.div`
  width: 100%;
  height: 100%;
  transition: all ${(props) => (props.showAnimation ? 0.35 : 0)}s ease-in-out;
  cursor: grab;
  * {
    transition: all ${(props) => props.speed}s ease-in-out;
  }
`
