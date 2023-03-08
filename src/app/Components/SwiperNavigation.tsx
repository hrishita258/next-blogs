const HandleSwiperNavigations = (
  direction: string,
  prevId: string,
  nextId: string,
  swiperState: any
) => {
  let prevElem: any = document.getElementById(prevId)
  let nextElem: any = document.getElementById(nextId)

  if (direction === 'prev') {
    if (swiperState.realIndex === 1) {
      if (prevElem && nextElem) {
        prevElem.disabled = true
        nextElem.disabled = false
        swiperState?.slidePrev()
      }
    } else if (!swiperState.isBeginning) {
      if (prevElem && nextElem) {
        prevElem.disabled = false
        nextElem.disabled = false
      }
      swiperState?.slidePrev()
    }
  } else {
    if (swiperState.realIndex === 0) {
      if (prevElem && nextElem) {
        prevElem.disabled = false
      }
    }
    if (swiperState.snapGrid.length - 2 === swiperState.realIndex) {
      if (prevElem && nextElem) {
        swiperState?.slideNext()
        nextElem.disabled = true
        prevElem.disabled = false
      }
    }
    swiperState?.slideNext()
  }
}
export default HandleSwiperNavigations
