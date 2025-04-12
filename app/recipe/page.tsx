import { title } from "@/components/primitives";

export default function RecipePage() {
  return (
    <div>
      <h1 className={title()}>Recipe</h1>
      <div className="h-full w-full border-2 border-black flex flex-wrap justify-around p-4">
        <p className="border-2 border-black p-4 m-4">lorem ipsum lorem ipsum</p>
        <p className="border-2 border-black p-4 m-4">child 2</p>
        <p className="border-2 border-black p-4 m-4">child 2</p>
        <p>child 4</p>
      </div>

      <br />
      <br />

      <header>
        <h1>
          <strong>Avacado Toast</strong>
        </h1>
      </header>
      <br />

      <h2>ingredients:</h2>

      <ol>
        <li>- 1 avacado</li>
        <li>- 1 slice of bread</li>
        <li>- 1 egg</li>
        <li>- seasoning</li>
      </ol>
      <br />
      <h3>directions:</h3>
      <p>
        1. make guacamole with seasoning <br /> 2. toast bread <br /> 3. cook
        egg <br /> 4. assemble
      </p>

      <br />

      <img
        alt="avacado toast image, not found"
        height="180"
        src="https://plus.unsplash.com/premium_photo-1676106623583-e68dd66683e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXZhY2FkbyUyMHRvYXN0fGVufDB8fDB8fHww"
        width="300"
      />
      <br />
      <a href="https://www.allrecipes.com/recipe/265304/avocado-toast-with-egg/">
        Reference recipe by Barbara Sauermann
      </a>
    </div>
  );
}
