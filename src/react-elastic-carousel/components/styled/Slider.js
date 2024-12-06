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
export default function Slider(sliderProps) {
  return styled.div.attrs(() => ({
    style: {
      transition: calcTransition(sliderProps),
      left: calcLeft(sliderProps),
      right: calcRight(sliderProps),
      top: calcTop(sliderProps),
    },
  }))`
    position: absolute;
    display: flex;
    flex-direction: ${sliderProps.verticalMode ? "column" : "row"};
    ${sliderProps.verticalMode ? "min-height: 100%;" : ""};
    ${sliderProps.verticalMode
      ? ""
      : `margin: 0 ${sliderProps.outerSpacing}px;`};
  `;
}
