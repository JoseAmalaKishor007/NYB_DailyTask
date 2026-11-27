
// import JSXTopics from "./28-10-2026/JSXTopics";
// import PropsState from "./28-10-2026/PropsState";
// import ComponentCommunication from "./28-10-2026/ComponentCommunication";
// import ReactEvents from "./29-10-2026/Events";
// import Practise from "./29-10-2026/Practise";
// import ReactForms from "./29-10-2026/Forms";
// import Lists from "./29-10-2026/Lists";
// import ContextAPI from "./02-11-2026/ContextAPI";
// import ReduxExample from "./03-11-2026/ReduxExample";
// import UserList from "./04-11-2026/components/UserList";
// import UserManagement from "./05-11-2026/components/UserManagement";

// import ContextRevision from "./06-11-2026/ContextRevision";
// import ReduxRevision from "./06-11-2026/06-11-2026"
// import RevisionContext from "./10-11-2026/RevisionContext";
// import UseReducerrevision from "./12-11-2026/UseReducerrevision";
// import ReducerPractice from "./13-11-2026/ReducerPractice";
import ConditionalRendering from "./16-11-2026/ConditionalRendering";
import UserList from "./17-11-2026/UserList";
import DynamicForm from "./18-11-2026/DynamicForm";            
import CounterOne from "./23-11-2026/components/CounterOne";
import CounterTwo from "./23-11-2026/components/CounterTwo";

import StudentList from "./26-11-2026/components/StudentList";
import NestedList from "./26-11-2026/components/NestedList";
import StudentDetails from "./26-11-2026/components/StudentDetails";
import CourseDetails from "./26-11-2026/components/CourseDetails";
import LazyProfile from "./26-11-2026/components/LazyProfile";


const LazyProfile = lazy(() =>
  import("./26-11-2026/components/LazyProfile")
);
function App() {
   const [showProfile, setShowProfile] = useState(false);
  return (
    <div>
      {/* <JSXTopics />
      <PropsState />
      <ComponentCommunication /> */}  

      {/* <ReactEvents /> */}
      {/* <ReactForms /> */}
      {/* <Practise /> */}
      {/* <Lists /> */}
      {/* <ContextAPI /> */}
      {/* <ReduxExample /> */}
      {/* <UserList /> */}
      {/* <UserManagement /> */}
      {/* <ContextRevision /> */}
      {/* <ReduxRevision.jsx /> */}
      {/* <RevisionContext />  */}
      {/* <UseReducerrevision /> */}
      {/* <ReducerPractice.jsx /> */}
      {/* <ConditionalRendering /> */}
      {/* <UserList /> */}
      {/* <DynamicForm /> */}
      {/* <CounterOne /> */}
      {/* <CounterTwo /> */}

      <h1>React Rendering Concepts</h1>

      <hr />

      {/* List and Dynamic Rendering */}
      <StudentList />

      <hr />

      {/* Nested Lists */}
      <NestedList />

      <hr />

      {/* Object and Array Destructuring */}
      <StudentDetails />

      <hr />

      {/* Props and State Destructuring */}
      <CourseDetails
        courseName="React JS"
        duration="3 Months"
      />

      <hr />

      {/* Lazy Loading */}
      <h2>Lazy Loading Example</h2>

      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Load Profile"}
      </button>

      {showProfile && (

        <Suspense fallback={<h3>Loading Profile...</h3>}>

          <LazyProfile />

        </Suspense>

      )}
    </div>
  );
}

export default App; 
