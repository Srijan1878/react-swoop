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
  transition: all ${(props) => props.speed}s ease-in-out;
  * {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const CarouselButton = styled.button`
  position: absolute;
  top: 0%;
  left: ${(props) => !props.next && '0%'};
  right: ${(props) => props.next && '0%'};
  height: 100%;
  padding-inline: 0.5rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  border: none;
  outline: none;
  color: white;
  font-weight: bold;
  transition: all 0.35s ease-in;
  &:hover {
    transition: all 0.35s ease-in;
    background-color: rgba(0, 0, 0, 0.45);
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
