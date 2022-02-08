import { useState, useEffect } from 'react';
import { ulid } from 'ulid';
import { SlideId } from '../components/deck/deck';

export const PLACEHOLDER_CLASS_NAME = 'spectacle-v7-slide';

// After the initial render pass, this hook actually goes and looks for
// <Slide> elements rendered lower in the tree. Slides decide on an ID for
// themselves and communicate via the `data-slide-key` element on their
// placeholder.
export function useCollectSlides() {
  const [initialized, setInitialized] = useState(false);
  const [slideContainer, setSlideContainer] =
    useState<HTMLElement | null>();
  const [slideIds, setSlideIds] = useState<SlideId[]>([]);

  useEffect(() => {
    if (!slideContainer) return;
    const slides = slideContainer.getElementsByClassName(
      PLACEHOLDER_CLASS_NAME
    ) as unknown as Iterable<HTMLElement>;

    const nextSlideIds: SlideId[] = [];
    for (const placeholderNode of slides) {
      const { slideId } = placeholderNode.dataset;
      nextSlideIds.push(slideId!);
    }
    setSlideIds(nextSlideIds);
    setInitialized(true);
  }, [slideContainer]);

  return [setSlideContainer, slideIds, initialized] as const;
}

export function useSlide(userProvidedId?: SlideId) {
  const [slideId] = useState<SlideId>(userProvidedId || ulid);
  return {
    slideId,
    placeholder: (
      <div className={PLACEHOLDER_CLASS_NAME} data-slide-id={slideId} />
    )
  };
}
