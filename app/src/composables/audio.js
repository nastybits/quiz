export function useAudio(refs) {
  const play = (ref) => {
    if (!ref) {
      return
    }
    if (refs[ref]) {
      refs[ref].play()
    }
  }

  const stop = (ref) => {
    if (!ref) {
      return
    }
    if (refs[ref]) {
      refs[ref].pause()
      refs[ref].currentTime = 0.0
    }
  }

  const stopAll = () => {
    refs.forEach(r => {
      stop(r)
    })
  }

  return { play, stop, stopAll }
}