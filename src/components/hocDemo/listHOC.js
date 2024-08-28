export default function listHOC(Component, list, title) {
  return function ComponentNew() {
    return <Component list={list} title={title} />;
  };
}
