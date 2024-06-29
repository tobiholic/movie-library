import './App.css';
import ExpandableText from './components/ExpandableText';

function App() {
  return (
    <div>
      <ExpandableText maxChars={100}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sint
        aliquid a nemo quisquam eius doloribus enim quidem quibusdam odit ipsa
        blanditiis incidunt hic, assumenda libero, repellendus eligendi esse
        magnam officiis voluptas. Ullam soluta quibusdam accusamus aspernatur,
        pariatur natus ut minus dolore error, qui modi nulla illo asperiores
        incidunt voluptate doloribus expedita itaque exercitationem. Soluta
        expedita eveniet ab. Fuga quae porro, impedit possimus reprehenderit
        inventore aut distinctio incidunt quaerat debitis dignissimos voluptates
        autem exercitationem qui doloremque culpa amet unde dolorum ab
        cupiditate. Incidunt a assumenda vitae possimus accusantium quisquam
        odit sed fugiat iste temporibus nam nulla, labore voluptatibus
        laboriosam facilis!
      </ExpandableText>
    </div>
  );
}

export default App;
