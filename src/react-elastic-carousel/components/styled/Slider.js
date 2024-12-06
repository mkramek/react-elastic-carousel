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
export default styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "isSwiping",
      "verticalMode",
      "sliderPosition",
      "swipedSliderPosition",
      "isRTL",
      "transitionMs",
      "easing",
      "tiltEasing",
    ].includes(prop),
})`
  position: absolute;
  display: flex;
  flex-direction: ${({ verticalMode }) => (verticalMode ? "column" : "row")};
  ${({ verticalMode }) => (verticalMode ? "min-height: 100%;" : "")};
  ${({ verticalMode, outerSpacing }) =>
    verticalMode ? "" : `margin: 0 ${outerSpacing}px;`};
  transition: ${({ isSwiping, transitionMs, easing, tiltEasing }) =>
    calcTransition({ isSwiping, transitionMs, easing, tiltEasing })};
  left: ${({
    isRTL,
    verticalMode,
    isSwiping,
    swipedSliderPosition,
    sliderPosition,
  }) =>
    calcLeft({
      isRTL,
      verticalMode,
      isSwiping,
      swipedSliderPosition,
      sliderPosition,
    })};
  right: ${({
    isRTL,
    verticalMode,
    isSwiping,
    swipedSliderPosition,
    sliderPosition,
  }) =>
    calcRight({
      isRTL,
      verticalMode,
      isSwiping,
      swipedSliderPosition,
      sliderPosition,
    })};
  top: ${({ verticalMode, isSwiping, swipedSliderPosition, sliderPosition }) =>
    calcTop({ verticalMode, isSwiping, swipedSliderPosition, sliderPosition })};
`;
