import { useState } from 'react'

interface Flip {
  flipCard: (index: number) => void
  flippedIndex: number
}

export default function useFlipCard() {
  const [flippedIndex, setFlippedIndex] = useState(-1)

  const flipCard = (index: number) => {
    setFlippedIndex(flippedIndex === index ? -1 : index)
  }

  const flip: Flip = {
    flipCard: flipCard,
    flippedIndex: flippedIndex
  }

  return flip
}