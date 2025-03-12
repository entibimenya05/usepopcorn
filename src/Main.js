//fixing prop drilling with component composition using children and <Component></Component>
function Main({ children }) {
  return (
    <>
      <main className="main">{children}</main>;
    </>
  );
}
export default Main;
