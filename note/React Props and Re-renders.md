## React Props and Re-renders

In React, a change in the `props` of a parent component causes the child component to re-render. When a component receives new `props`, React checks whether the component needs to be updated based on the new values. If the `props` have changed, the child component will be re-rendered to reflect these updates.

However, this does not mean that all child components will always re-render. If a child component is memoized using `React.memo()` or if it does not depend on the changed `props`, it may avoid unnecessary re-renders. This helps optimize performance in React applications, especially in components that receive frequent updates to their `props`.
