declare namespace jest {
  interface Matchers<R> {
    toHaveAttribute: (attr: string, value?: string) => R
    toHaveTextContent: (htmlElement: string) => R
    toHaveClass: (className: string) => R
    toBeInTheDOM: () => R
  }
}
