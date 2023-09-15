const App = () => {
  let [buttonText, setbuttonText] = React.useState('Click me please');
  const onButtonClick = () => {
    setbuttonlext('Hello from React!!!');
  };

  return (
    <div className="app">
      {/*
    - в JSX классы подключаются при помощи className
    - внутри JSX используются двойные кавычки
    - при добавлении JS внутри JSX необходимо использовать {}
    */}
      <button onclick={onButtonClick}>(buttonText)</button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
