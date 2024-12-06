import styled from "styled-components";

const calcLeft = ({
  isRTL,
  verticalMode,
  isSwiping,
  swipedSliderPosition,
  sliderPosition,
}) => {
  if (verticalMode || isRTL) {
    return "auto";
  } else {
    return `${isSwiping ? swipedSliderPosition : sliderPosition}px`;
  }
};

const calcRight = ({
  isRTL,
  verticalMode,
  isSwiping,
  swipedSliderPosition,
  sliderPosition,
}) => {
  if (!verticalMode && isRTL) {
    return `${isSwiping ? swipedSliderPosition : sliderPosition}px`;
  } else {
    return "auto";
  }
};

const calcTop = ({
  verticalMode,
  isSwiping,
  swipedSliderPosition,
  sliderPosition,
}) => {
  if (!verticalMode) {
    return "auto";
  } else {
    return `${isSwiping ? swipedSliderPosition : sliderPosition}px`;
  }
};

const calcTransition = ({ isSwiping, transitionMs, easing, tiltEasing }) => {
  const duration = isSwiping ? 0 : transitionMs;
  const effectiveEasing = isSwiping ? tiltEasing : easing;
  return `all ${duration}ms ${effectiveEasing}`;
};

// We use attributes (style) to bypass multiple creation of classes (dynamic styling)
function _Slider(sliderProps) {
  <div>{sliderProps.children}</div>;
}

const Slider = styled(_Slider).attrs((props) => ({
  style: {
    transition: calcTransition(props),
    left: calcLeft(props),
    right: calcRight(props),
    top: calcTop(props),
  },
}))`
  position: absolute;
  display: flex;
  flex-direction: ${(props) => (props.verticalMode ? "column" : "row")};
  ${(props) => (props.verticalMode ? "min-height: 100%;" : "")};
  ${(props) =>
    props.verticalMode ? "" : `margin: 0 ${props.outerSpacing}px;`};
`;

export default Slider;
