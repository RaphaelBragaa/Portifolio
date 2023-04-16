import { createContext, useRef } from 'react';

const ScrollContext = createContext({
  scrollToElement: () => {},
  targetElement: null,
});

function ScrollProvider({ children }) {
  const targetElementRef = useRef(null);

  function scrollToElement() {
    targetElementRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <ScrollContext.Provider value={{ scrollToElement, targetElement: targetElementRef }}>
      {children}
    </ScrollContext.Provider>
  );
}

export { ScrollProvider, ScrollContext };