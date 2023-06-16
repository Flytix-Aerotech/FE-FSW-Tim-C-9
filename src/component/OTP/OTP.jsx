function App() {
    return (
      <>
        <div className="flex flex-col w-full h-screen">
          <div className="h-full grid grid-cols-4">
            <div className="bg-blue-600">
              teks
            </div>
            <div className="col-span-3">
              <LoginLain/>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default App;